import * as slug from 'slug';
import { Plugin } from './plugin';
import {
  PluginInterface,
  TypeRef,
  NavigationSectionInterface,
  DocumentSectionInterface,
  NavigationItemInterface,
} from '../interface';

export function slugTemplate() {
  return function (text, render) {
    return slug(render(text)).toLowerCase();
  };
}

export type TemplateData = {
  title: string,
  type?: TypeRef,
  description: string,
  headers: string,
  navigations: NavigationSectionInterface[],
  types: { [type: string]: NavigationItemInterface[] },
  documents: DocumentSectionInterface[],
  projectPackage: any,
  graphdocPackage: any,
  slug: typeof slugTemplate,
};

type Headers = string[];
type Navs = NavigationSectionInterface[];
type Docs = DocumentSectionInterface[];

export async function createData(
  projectPackage: any,
  graphdocPackage: any,
  plugins: PluginInterface[],
  type?: TypeRef
): Promise<TemplateData> {
  const name = type && type.name;
  const [headers, navigations, documents]: [Headers, Navs, Docs] = await Promise.all([
    Plugin.collectHeaders(plugins, name),
    Plugin.collectNavigations(plugins, name),
    Plugin.collectDocuments(plugins, name),
  ]);

  const title = name ||
    projectPackage.graphdoc.title ||
    'GraphQL schema documentation';

  const description = type ?
    type.description || '' :
    projectPackage.description;

  const objectsNav = navigations.find(nav => nav.title === 'Objects');
  const interfacesNav = navigations.find(nav => nav.title === 'Interfaces');
  const enumsNav = navigations.find(nav => nav.title === 'Enums');
  const unionsNav = navigations.find(nav => nav.title === 'Unions');
  const inputObjectsNav = navigations.find(nav => nav.title === 'Input Objects');
  const scalarsNav = navigations.find(nav => nav.title === 'Scalars');
  const types = {
    objects: objectsNav ? objectsNav.items.filter(item => !item.text.endsWith('Connection') && !item.text.endsWith('Edge')) : [],
    interfaces: interfacesNav ? interfacesNav.items : [],
    enums: enumsNav ? enumsNav.items : [],
    unions: unionsNav ? unionsNav.items : [],
    inputObjects: inputObjectsNav ? inputObjectsNav.items : [],
    scalars: scalarsNav ? scalarsNav.items : [],
  };

  return {
    title,
    type,
    description,
    headers: headers.join(''),
    navigations,
    documents,
    types,
    projectPackage,
    graphdocPackage,
    slug: slugTemplate
  };
}
