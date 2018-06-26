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
      if (type.name === 'Mutation') {
        return [
          new DocumentSection('Mutations', this.renderMutation(type)),
        ];
      }

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

  private renderMutation(type: SchemaType): string {
    let result = ``;
    for (const field of type.fields) {
      const inputFields = field.args
        .map(arg => `${arg.name}: ${useIdentifier(arg.type, this.url(arg.type))}`)
        .join(`,`);

      result += `\n* **${field.name}(${inputFields}): ${useIdentifier(field.type, this.url(field.type))}**\n\n`;
      if (field.description) {
        result += `  ${field.description}\n\n`;
      }

      // Output fields
      result += `  Output | Type | Description\n`;
      result += `  ------ | ---- | -----------\n`;
      const outputType = this.document.types.find(type => type.name === field.type.name) as SchemaType;
      for (const field of outputType.fields) {
        result += `  \`${field.name}\` | ${useIdentifier(field.type, this.url(field.type))} | ${field.description || `-`}\n`;
      }
    }
    return result;
  }
}
