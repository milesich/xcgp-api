---
title: WinEdge
---

An edge in a connection

## Schema definition
```graphql
type WinEdge {

  # The item at the end of the edge
  node: Win

  # A cursor for use in pagination
  cursor: String!

}
```

## Fields

* **node ([`Win`](graphql/schema/win.md))**

  The item at the end of the edge

* **cursor ([`String!`](graphql/schema/string.md))**

  A cursor for use in pagination


## Required by
* [WinConnection](graphql/schema/winconnection.md): A connection to a list of items.
