import { TypeRef } from '../lib/interface';
import { LIST, NON_NULL } from '../lib/utility';

export function deepType(type: TypeRef): TypeRef {
  switch (type.kind) {
    case LIST:
      return deepType(type.ofType as TypeRef);
    case NON_NULL:
      return deepType(type.ofType as TypeRef);
    default:
      return type;
  }
}

export function typeText(type: TypeRef): string {
  switch (type.kind) {
    case LIST:
      return `[${typeText(type.ofType as TypeRef)}]`;
    case NON_NULL:
      return `${typeText(type.ofType as TypeRef)}!`;
    default:
      return type.name;
  }
}

export function useIdentifier(type: TypeRef, toUrl: string) {
  return `[\`${typeText(type)}\`](${toUrl})`;
}
