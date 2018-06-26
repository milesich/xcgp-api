---
title: __Field
---

Object and Interface types are described by a list of Fields, each of which has a name, potentially a list of arguments, and a return type.

## Schema definition
```graphql
type __Field {

  name: String!

  description: String

  args: [__InputValue!]!

  type: __Type!

  isDeprecated: Boolean!

  deprecationReason: String

}
```

## Fields

* **name ([`String!`](graphql/schema/string.md))**


* **description ([`String`](graphql/schema/string.md))**


* **args ([`[__InputValue!]!`](graphql/schema/__inputvalue.md))**


* **type ([`__Type!`](graphql/schema/__type.md))**


* **isDeprecated ([`Boolean!`](graphql/schema/boolean.md))**


* **deprecationReason ([`String`](graphql/schema/string.md))**



## Required by
* [__Type](graphql/schema/__type.md): The fundamental unit of any GraphQL Schema is the type. There are many kinds of types in GraphQL as represented by the `__TypeKind` enum.

Depending on the kind of a type, certain fields describe information about that type. Scalar types provide no information beyond a name and description, while Enum types provide their values. Object and Interface types provide the fields they describe. Abstract types, Union and Interface, provide the Object types possible at runtime. List and NonNull types compose other types.
