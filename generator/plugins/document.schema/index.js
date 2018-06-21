const wrap = require('word-wrap');
const GraphDoc = require('@2fd/graphdoc/lib/utility');

const MAX_CODE_LEN = 80;

class SchemaPlugin extends GraphDoc.Plugin {

	getDocuments(buildForType) {
		var code = this.code(buildForType);
		if (code)
			return [
				new GraphDoc.DocumentSection(
					'Schema definition',
					`\`\`\`graphql\n${code}\n\`\`\``,
				),
			];
		return [];
	}

	code(buildForType) {
		if (!buildForType)
			return this.schema(this.document);
		var directive = this.document
			.directives
			.find(directive => directive.name === buildForType);
		if (directive)
			return this.directive(directive);
		var type = this.document
			.types
			.find(type => type.name === buildForType);
		if (type) {
			switch (type.kind) {
				case GraphDoc.SCALAR:
					return this.scalar(type);
				case GraphDoc.OBJECT:
					return this.object(type);
				case GraphDoc.INTERFACE:
					return this.interfaces(type);
				case GraphDoc.UNION:
					return this.union(type);
				case GraphDoc.ENUM:
					return this.enum(type);
				case GraphDoc.INPUT_OBJECT:
					return this.inputObject(type);
			}
		}
		throw new TypeError('Unexpected type: ' + buildForType);
	}

	argument(arg) {
		return arg.name + ': ' +
			useIdentifier(arg.type, this.url(arg.type)); // + ' ' + this.deprecated(arg);
	}

	argumentLength(arg) {
		return arg.name.length + 1 + useIdentifier(arg.type).length;
	}

	arguments(fieldOrDirectives) {
		if (fieldOrDirectives.args.length === 0) {
			return '';
		}
		return '(' +
			fieldOrDirectives.args
				.map(arg => this.argument(arg))
				.join(', ') +
			')';
	}

	argumentsLength(fieldOrDirectives) {
		if (fieldOrDirectives.args.length === 0) {
			return 0;
		}
		return fieldOrDirectives.args.reduce((sum, arg) => sum + this.argumentLength(arg), 2);
	}

	argumentsMultiline(fieldOrDirectives) {
		if (fieldOrDirectives.args.length === 0) {
			return [];
		}
		var maxIndex = fieldOrDirectives.args.length - 1;
		return fieldOrDirectives.args
			.map((arg, index) => index < maxIndex ? this.argument(arg) + ',' : this.argument(arg));
	}

	argumentDescription(arg) {
		let desc = `  ${arg.name}`;
		if (arg.description) {
			desc += `: ${desc}`;
		}
		return this.description(desc);
	}

	argumentsDescription(fieldOrDirectives) {
		if (!fieldOrDirectives.args.length) {
			return [];
		}

		return fieldOrDirectives.args
			.reduce(
				(descriptions, arg) => descriptions.concat(this.argumentDescription(arg)),
				[`# Arguments`],
			);
	}

	deprecated(fieldOrEnumVal) {
		if (!fieldOrEnumVal.isDeprecated) {
			return '';
		}
		if (!fieldOrEnumVal.deprecationReason) {
			return '@deprecated';
		}
		return `@deprecated( reason: "${fieldOrEnumVal.deprecationReason}" )`;
	}

	description(description) {
		if (description) {
			return wrap(description, {
					indent: ``,
					width: MAX_CODE_LEN,
				})
				.split(`\n`)
				.map(l => `# ${l}`);
		}
		return [];
	}

	directive(directive) {
		return 'directive @' + directive.name + this.arguments(directive) + ' on ' +
			directive.locations.join(' | ');
	}

	enum(type) {
		var reduceEnumValues = (lines, enumValue) => {
			return lines
				.concat([''], this.description(enumValue.description), [enumValue.name + this.deprecated(enumValue)]);
		};
		return `enum ${type.name} {\n` +
			type.enumValues
				.reduce(reduceEnumValues, [])
				.map(line => `  ${line}`)
				.join(`\n`) +
			`\n\n}`;
	}

	field(field) {
		var fieldDescription = this.description(field.description);
		var argumentsDescription = this.argumentsDescription(field);
		if (fieldDescription.length > 0 && argumentsDescription.length) {
			fieldDescription.push(`#`);
		}
		var fieldDefinition = field.args.length > 0 && this.fieldLength(field) > MAX_CODE_LEN ? [
			field.name + '('
		].concat(this.argumentsMultiline(field).map(l => `  ${l}`), [
			'): ' + useIdentifier(field.type, this.url(field.type)) + ' ' + this.deprecated(field)
		]) :
			// Single line
			// fieldName(argumentName: ArgumentType): ReturnType [@deprecated...]
			[
				field.name + this.arguments(field) + ': ' +
				useIdentifier(field.type, this.url(field.type)) + ' ' + this.deprecated(field)
			];
		return []
			.concat(fieldDescription)
			.concat(argumentsDescription)
			.concat(fieldDefinition)
			.map(line => `  ${line}`)
			.join(`\n`);
	}

	fieldLength(field) {
		return field.name.length + this.argumentsLength(field) +
			': '.length + useIdentifier(field).length + ' '.length +
			this.deprecated(field).length;
	}

	fields(type) {
		return "\n" + type.fields
			.map(field => this.field(field))
			.join(`\n\n`);
	}

	inputObject(type) {
		return `input ${type.name} {\n${this.inputValues(type.inputFields)}\n}`;
	}

	inputValues(inputValues) {
		return inputValues
			.map(inputValue => this.inputValue(inputValue))
			.join(`\n\n`);
	}

	inputValue(arg) {
		var argDescription = this.description(arg.description);
		return []
			.concat(argDescription)
			.concat([
				`${arg.name}: ` +
				useIdentifier(arg.type, this.url(arg.type)) // + ' ' + this.deprecated(arg)
			])
			.map(line => `  ${line}`)
			.join(`\n`);
	}

	interfaces(type) {
		return `interface ${type.name} {\n${this.fields(type)}\n\n}`;
	}

	object(type) {
		const interfaces = type.interfaces
			.map(i => useIdentifier(i, this.url(i)))
			.join(', ');
		const implement = interfaces.length === 0 ? '' : ` implements ${interfaces}`;
		return `type ${type.name}${implement} {\n${this.fields(type)}\n\n}`;
	}

	scalar(type) {
		return `scalar ${type.name}`;
	}

	schema(schema) {
		var definition = `schema {\n`;
		if (schema.queryType) {
			definition += `\n` + this.description(schema.queryType.description)
					.map(line => `  ${line}`)
					.join(`\n`) +
				`\n  query: ${useIdentifier(schema.queryType, this.url(schema.queryType))}\n`;
		}
		if (schema.mutationType) {
			definition += `\n` + this.description(schema.mutationType.description)
					.map(line => `  ${line}`)
					.join(`\n`) +
				`\n  mutation: ${useIdentifier(schema.mutationType, this.url(schema.mutationType))}\n`;
		}
		if (schema.subscriptionType) {
			definition += `\n` + this.description(schema.subscriptionType.description)
					.map(line => `  ${line}`)
					.join(`\n`) +
				`\n  subscription: ${useIdentifier(schema.subscriptionType, this.url(schema.subscriptionType))}\n`;
		}
		definition += `\n}`;
		return [definition].join(`\n`);
	}

	union(type) {
		return `union ${type.name} = ` +
			type.possibleTypes
				.map(type => useIdentifier(type, this.url(type)))
				.join(' | ');
	}
}

function useIdentifier(type, toUrl) {
	switch (type.kind) {
		case GraphDoc.LIST:
			return '[' + useIdentifier(type.ofType, toUrl) + ']';
		case GraphDoc.NON_NULL:
			return useIdentifier(type.ofType, toUrl) + '!';
		default:
			return type.name;
	}
};

exports.default = SchemaPlugin;
