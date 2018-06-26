import {
  OBJECT,
  Plugin,
  DocumentSection,
} from '../lib/utility';
import {
  PluginInterface,
  DocumentSectionInterface,
  SchemaType,
} from '../lib/interface';
import { deepType, useIdentifier } from './util';

export default class FieldsPlugin extends Plugin implements PluginInterface {
  getDocuments(buildForType?: string): DocumentSectionInterface[] {
    const type = this.document.types.find(type => type.name === buildForType);
    if (type && type.kind === OBJECT) {
      const content = this.render(type);
      if (content.length) {
        return [
          new DocumentSection('Fields', content)
        ];
      }
    }

    return [];
  }

  private render(type: SchemaType): string {
    let result = ``;
    for (const field of type.fields) {
      const fieldType = deepType(field.type);
      if (!fieldType.name.endsWith('Connection')) {
        result += `\n* **${field.name} (${useIdentifier(field.type, this.url(field.type))})**\n\n`;
        if (field.description) {
          result += `  ${field.description}\n`;
        }

        // Arguments
        if (field.args.length) {
          result += `  Argument | Type | Description\n`;
          result += `  -------- | ---- | -----------\n`;
          for (const arg of field.args) {
            result += `  \`${arg.name}\` | ${useIdentifier(arg.type, this.url(arg.type))} | ${arg.description || `-`}\n`;
          }
        }
      }
    }
    return result;
  }
}
