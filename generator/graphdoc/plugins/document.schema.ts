import * as wrap from 'word-wrap';
import {
  SCALAR,
  OBJECT,
  INPUT_OBJECT,
  INTERFACE,
  ENUM,
  UNION,
  Plugin,
  DocumentSection,
  LIST,
  NON_NULL
} from '../lib/utility';
import {
  PluginInterface,
  DocumentSectionInterface,
  Schema,
  SchemaType,
  Field,
  InputValue,
  EnumValue,
  Directive
} from '../lib/interface';

const MAX_CODE_LEN = 70;

export default class SchemaPlugin extends Plugin implements PluginInterface {
  getDocuments(buildForType?: string): DocumentSectionInterface[] {
    const code = this.code(buildForType);

    if (code)
      return [
        new DocumentSection('Schema definition', `\`\`\`graphql\n${code}\n\`\`\``)
      ];

    return [];
  }

  code(buildForType?: string): string {
    if (!buildForType)
      return this.schema(this.document);

    const directive = this.document
      .directives
      .find((directive) => directive.name === (buildForType as string));

    if (directive)
      return this.directive(directive);

    const type = this.document
      .types
      .find((type) => type.name === (buildForType as string));

    if (type) {
      switch (type.kind) {

        case SCALAR:
          return this.scalar(type);

        case OBJECT:
          return this.object(type);

        case INTERFACE:
          return this.interfaces(type);

        case UNION:
          return this.union(type);

        case ENUM:
          return this.enum(type);

        case INPUT_OBJECT:
          return this.inputObject(type);
      }
    }

    throw new TypeError('Unexpected type: ' + buildForType);
  }

  argument(arg: InputValue): string {
    return arg.name + ': ' +
      useIdentifier(arg.type, this.url(arg.type)); // + ' ' + this.deprecated(arg);
  }

  argumentLength(arg: InputValue): number {
    return arg.name.length + 1 + useIdentifier(arg.type, this.url(arg.type)).length;
  }

  arguments(fieldOrDirectives: Field | Directive): string {
    if (fieldOrDirectives.args.length === 0) {
      return '';
    }

    return '(' +
      fieldOrDirectives.args
        .map((arg) => this.argument(arg))
        .join(', ') +
      ')';
  }

  argumentsLength(fieldOrDirectives: Field | Directive): number {
    if (fieldOrDirectives.args.length === 0) {
      return 0;
    }

    return fieldOrDirectives.args.reduce((sum, arg) => sum + this.argumentLength(arg), 2);
  }

  argumentsMultiline(fieldOrDirectives: Field | Directive): string[] {
    if (fieldOrDirectives.args.length === 0) {
      return [];
    }

    const maxIndex = fieldOrDirectives.args.length - 1;
    return fieldOrDirectives.args
      .map((arg, index) => {

        return index < maxIndex ?
          this.argument(arg) + ',' :
          this.argument(arg);
      });
  }

  argumentDescription(arg: InputValue): string[] {
    let desc = `  ${arg.name}`;
    if (arg.description) {
      desc += `: ${desc}`;
    }
    return this.description(desc);
  }

  argumentsDescription(fieldOrDirectives: Field | Directive): string[] {
    if (!fieldOrDirectives.args.length) {
      return [];
    }

    return fieldOrDirectives.args
      .reduce(
        (descriptions, arg) => descriptions.concat(this.argumentDescription(arg)),
        [`# Arguments`],
    );
  }

  deprecated(fieldOrEnumVal: Field | EnumValue): string {
    if (!fieldOrEnumVal.isDeprecated) {
      return '';
    }
    if (!fieldOrEnumVal.deprecationReason) {
      return '@deprecated';
    }
    return `@deprecated( reason: "${fieldOrEnumVal.deprecationReason}" )`;
  }

  deprecatedLength(fieldOrEnumVal: Field | EnumValue): number {
    if (!fieldOrEnumVal.isDeprecated)
      return 0;

    if (!fieldOrEnumVal.deprecationReason) {
      return '@deprecated'.length;
    }

    return '@deprecated( reason: "'.length + fieldOrEnumVal.deprecationReason.length + '" )'.length;
  }

  description(description: string): string[] {
    if (!description) {
      return [];
    }

    return wrap(description, {
        indent: `# `,
        trim: true,
        width: MAX_CODE_LEN,
      })
      .split(`\n`);
  }

  directive(directive: Directive): string {
    return 'directive @' + directive.name + this.arguments(directive) + ' on ' +
      directive.locations.join(' | ');
  }

  enum(type: SchemaType): string {
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

  field(field: Field): string {
    var fieldDescription = this.description(field.description);
    var argumentsDescription = this.argumentsDescription(field);
    if (fieldDescription.length > 0 && argumentsDescription.length) {
      fieldDescription.push(`#`);
    }
    var fieldDefinition = field.args.length > 0 && this.fieldLength(field) > MAX_CODE_LEN ?
      // Multiline definition:
      // fieldName(
      //     argumentName: ArgumentType, \n ...
      // ): ReturnType [@deprecated...]
      [
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
    return ([] as string[])
      .concat(fieldDescription)
      .concat(argumentsDescription)
      .concat(fieldDefinition)
      .map(line => `  ${line}`)
      .join(`\n`);
  }

  fieldLength(field: Field): number {
    return field.name.length + this.argumentsLength(field) +
      ': '.length + useIdentifier(field, this.url(field)).length + ' '.length +
      this.deprecated(field).length;
  }

  fields(type: SchemaType): string {
    return "\n" + type.fields
      .map(field => this.field(field))
      .join(`\n\n`);
  }

  inputObject(type: SchemaType): string {
    return `input ${type.name} {\n${this.inputValues(type.inputFields)}\n}`;
  }

  inputValues(inputValues: InputValue[]): string {
    return inputValues
      .map(inputValue => this.inputValue(inputValue))
      .join(`\n\n`);
  }

  inputValue(arg: InputValue): string {
    var argDescription = this.description(arg.description);
    return ([] as string[])
      .concat(argDescription)
      .concat([
        `${arg.name}: ` +
        useIdentifier(arg.type, this.url(arg.type)) // + ' ' + this.deprecated(arg)
      ])
      .map(line => `  ${line}`)
      .join(`\n`);
  }

  interfaces(type: SchemaType): string {
    return `interface ${type.name} {\n${this.fields(type)}\n\n}`;
  }

  object(type: SchemaType): string {
    const interfaces = type.interfaces
      .map(i => useIdentifier(i, this.url(i)))
      .join(', ');
    const implement = interfaces.length === 0 ? '' : ` implements ${interfaces}`;
    return `type ${type.name}${implement} {\n${this.fields(type)}\n\n}`;
  }

  scalar(type: SchemaType): string {
    return `scalar ${type.name}`;
  }

  schema(schema: Schema): string {
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

  union(type: SchemaType): string {
    return `union ${type.name} = ` +
      type.possibleTypes
        .map(type => useIdentifier(type, this.url(type)))
        .join(' | ');
  }
}

function useIdentifier(type, toUrl) {
  switch (type.kind) {
    case LIST:
      return '[' + useIdentifier(type.ofType, toUrl) + ']';
    case NON_NULL:
      return useIdentifier(type.ofType, toUrl) + '!';
    default:
      return type.name;
  }
};
