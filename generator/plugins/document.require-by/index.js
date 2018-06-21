var GraphDoc = require("@2fd/graphdoc/lib/utility");

class RequireByPlugin extends GraphDoc.Plugin {

	constructor(document, projectPackage, graphdocPackage) {
		super(document, projectPackage, graphdocPackage);

		this.requireBy = new Map();
		if (Array.isArray(document.types)) {
            document.types.forEach(type => {
                switch (type.kind) {
                    // Scalars and enums have no dependencies
                    case GraphDoc.SCALAR:
                    case GraphDoc.ENUM:
                        break;
                    case GraphDoc.OBJECT:
                    case GraphDoc.INTERFACE:
                    case GraphDoc.UNION:
                    case GraphDoc.INPUT_OBJECT:
                        this.getDependencies(type)
                            .forEach(curr => {
								const deps = this.requireBy.get(curr) || [];
								deps.push(type);
								this.requireBy.set(curr, deps);
							});
                        break;
                }
			});
		}
    }

	getDependencies(type) {
        var deps = [];
        if (Array.isArray(type.interfaces) && type.interfaces.length > 0) {
            type.interfaces.forEach(i => deps.push(i.name));
        }
        if (Array.isArray(type.fields) && type.fields.length > 0) {
            type.fields
                .forEach(field => {
					deps.push(GraphDoc.getTypeOf(field.type).name);
					if (Array.isArray(field.args) && field.args.length > 0) {
						field.args.forEach(arg => deps.push(GraphDoc.getTypeOf(arg.type).name));
					}
				});
        }
        if (Array.isArray(type.inputFields) && type.inputFields.length > 0) {
            type.inputFields
                .forEach(field => deps.push(GraphDoc.getTypeOf(field.type).name));
        }
        if (type.kind !== GraphDoc.INTERFACE && Array.isArray(type.possibleTypes) && type.possibleTypes.length > 0) {
            type.possibleTypes
                .forEach(t => deps.push(GraphDoc.getTypeOf(t).name));
        }
        return deps;
    }

	getDescription(type) {
		let description = `* [${type.name}](${this.url(type)})`;
		if (type.description) {
			description += `: ${type.description}`;
		}
		return description;
    }

	getDocuments(buildForType) {
        if (!buildForType) {
			return [];
		}
        var requireBy = this.requireBy.get(buildForType);
        if (!Array.isArray(requireBy) || requireBy.length === 0)
            return [{
				title: 'Required by',
				description: 'This element is not required by anyone.',
			}];
        var used = new Set();
        return [{
			title: 'Required by',
			description: requireBy
				.filter(t => used.has(t.name) ? false : used.add(t.name))
				.map(t => this.getDescription(t))
				.join(`\n`),
		}];
	}

	url(type) {
		const name = GraphDoc.getTypeOf(type).name.toLowerCase();
		return `graphql/schema/${name}.md`;
	}
}

exports.default = RequireByPlugin;
