import { Introspection } from '../../lib/interface';
import NavigationDirectives from '../navigation.directive';

const schema: Introspection = require('./empty.schema.json');
const projectPackage: any = require('./projectPackage.json');

describe('pĺugins/navigation.directive#NavigationDirectives', () => {

    const plugin = new NavigationDirectives(schema.data.__schema, projectPackage, {});

    test('plugin return navigation', () => {
        const navigations = plugin.getNavigations('Query');
        expect(navigations).toBeInstanceOf(Array);
        expect(navigations).toEqual([
            {
                title: 'Directives',
                items: [
                    { text: 'deprecated', href: '/deprecated.md', isActive: false },
                    { text: 'include', href: '/include.md', isActive: false },
                    { text: 'skip', href: '/skip.md', isActive: false },
                ]
            }
        ]);
    });
});
