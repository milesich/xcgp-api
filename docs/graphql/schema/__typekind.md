---
title: __TypeKind
---

An enum describing what kind of type a given `__Type` is.

## Schema definition
```graphql
enum __TypeKind {

  # Indicates this type is a scalar.
  SCALAR

  # Indicates this type is an object. `fields` and `interfaces` are valid
  # fields.
  OBJECT

  # Indicates this type is an interface. `fields` and `possibleTypes` are
  # valid fields.
  INTERFACE

  # Indicates this type is a union. `possibleTypes` is a valid field.
  UNION

  # Indicates this type is an enum. `enumValues` is a valid field.
  ENUM

  # Indicates this type is an input object. `inputFields` is a valid
  # field.
  INPUT_OBJECT

  # Indicates this type is a list. `ofType` is a valid field.
  LIST

  # Indicates this type is a non-null. `ofType` is a valid field.
  NON_NULL

}
```

## Required by
* [__Type](graphql/schema/__type.md): The fundamental unit of any GraphQL Schema is the type. There are many kinds of types in GraphQL as represented by the `__TypeKind` enum.

Depending on the kind of a type, certain fields describe information about that type. Scalar types provide no information beyond a name and description, while Enum types provide their values. Object and Interface types provide the fields they describe. Abstract types, Union and Interface, provide the Object types possible at runtime. List and NonNull types compose other types.
