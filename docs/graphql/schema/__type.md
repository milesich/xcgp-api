---
title: __Type
---

The fundamental unit of any GraphQL Schema is the type. There are many kinds of types in GraphQL as represented by the `__TypeKind` enum.

Depending on the kind of a type, certain fields describe information about that type. Scalar types provide no information beyond a name and description, while Enum types provide their values. Object and Interface types provide the fields they describe. Abstract types, Union and Interface, provide the Object types possible at runtime. List and NonNull types compose other types.

## Schema definition
```graphql
type __Type {

  kind: __TypeKind! 

  name: String 

  description: String 

  # Arguments
  #   includeDeprecated
  fields(includeDeprecated: Boolean): [__Field!] 

  interfaces: [__Type!] 

  possibleTypes: [__Type!] 

  # Arguments
  #   includeDeprecated
  enumValues(includeDeprecated: Boolean): [__EnumValue!] 

  inputFields: [__InputValue!] 

  ofType: __Type 

}
```

## Required by
* [__Field](graphql/schema/__field.md): Object and Interface types are described by a list of Fields, each of which has a name, potentially a list of arguments, and a return type.
* [__InputValue](graphql/schema/__inputvalue.md): Arguments provided to Fields or Directives and the input fields of an InputObject are represented as Input Values which describe their type and optionally a default value.
* [__Schema](graphql/schema/__schema.md): A GraphQL Schema defines the capabilities of a GraphQL server. It exposes all available types and directives on the server, as well as the entry points for query, mutation, and subscription operations.
* [__Type](graphql/schema/__type.md): The fundamental unit of any GraphQL Schema is the type. There are many kinds of types in GraphQL as represented by the `__TypeKind` enum.

Depending on the kind of a type, certain fields describe information about that type. Scalar types provide no information beyond a name and description, while Enum types provide their values. Object and Interface types provide the fields they describe. Abstract types, Union and Interface, provide the Object types possible at runtime. List and NonNull types compose other types.
