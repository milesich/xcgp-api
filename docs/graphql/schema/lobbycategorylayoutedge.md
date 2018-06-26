---
title: LobbyCategoryLayoutEdge
---

An edge in a connection

## Schema definition
```graphql
type LobbyCategoryLayoutEdge {

  # The item at the end of the edge
  node: LobbyCategoryLayout

  # A cursor for use in pagination
  cursor: String!

}
```

## Fields

* **node ([`LobbyCategoryLayout`](graphql/schema/lobbycategorylayout.md))**

  The item at the end of the edge

* **cursor ([`String!`](graphql/schema/string.md))**

  A cursor for use in pagination


## Required by
* [LobbyCategoryLayoutConnection](graphql/schema/lobbycategorylayoutconnection.md): A connection to a list of items.
