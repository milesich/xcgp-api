import {
  OBJECT,
  Plugin,
  DocumentSection,
  LIST,
  NON_NULL
} from '../lib/utility';
import {
  PluginInterface,
  DocumentSectionInterface,
  SchemaType,
  TypeRef
} from '../lib/interface';

export default class ConnectionsPlugin extends Plugin implements PluginInterface {
  getDocuments(buildForType?: string): DocumentSectionInterface[] {
    const type = this.document.types.find(type => type.name === buildForType);
    if (type && type.kind === OBJECT) {
      const content = this.render(type);
      if (content.length) {
        return [
          new DocumentSection('Connections', content)
        ];
      }
    }

    return [];
  }

  private render(type: SchemaType): string {
    let result = ``;
    for (const field of type.fields) {
      if (field.type.kind === OBJECT && field.type.name.endsWith('Connection')) {
        result += `\n**${field.name} (${useIdentifier(field.type, this.url(field.type))})**\n\n`;
        if (field.description) {
          result += field.description;
        }

        // Arguments
        if (field.args.length) {
          result += `Argument | Type | Description\n`;
          result += `-------- | ---- | -----------\n`;
          for (const arg of field.args) {
            result += `\`${arg.name}\` | ${useIdentifier(arg.type, this.url(arg.type))} | ${arg.description || `-`}\n`;
          }
        }
      }
    }
    return result;
  }
}

function useIdentifier(type: TypeRef, toUrl: string) {
  switch (type.kind) {
    case LIST:
      return `[${useIdentifier(type.ofType as TypeRef, toUrl)}]`;
    case NON_NULL:
      return `${useIdentifier(type.ofType as TypeRef, toUrl)}!`;
    default:
      return `[\`${type.name}\`](${toUrl})`;
  }
}
