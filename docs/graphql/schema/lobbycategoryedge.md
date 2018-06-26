---
title: LobbyCategoryEdge
---

An edge in a connection

## Schema definition
```graphql
type LobbyCategoryEdge {

  # The item at the end of the edge
  node: LobbyCategory

  # A cursor for use in pagination
  cursor: String!

}
```

## Fields

* **node ([`LobbyCategory`](graphql/schema/lobbycategory.md))**

  The item at the end of the edge

* **cursor ([`String!`](graphql/schema/string.md))**

  A cursor for use in pagination


## Required by
* [LobbyCategoryConnection](graphql/schema/lobbycategoryconnection.md): A connection to a list of items.
