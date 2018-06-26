---
title: LanguageEdge
---

An edge in a connection

## Schema definition
```graphql
type LanguageEdge {

  # The item at the end of the edge
  node: Language

  # A cursor for use in pagination
  cursor: String!

}
```

## Fields

* **node ([`Language`](graphql/schema/language.md))**

  The item at the end of the edge

* **cursor ([`String!`](graphql/schema/string.md))**

  A cursor for use in pagination


## Required by
* [LanguageConnection](graphql/schema/languageconnection.md): A connection to a list of items.
