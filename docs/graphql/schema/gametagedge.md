---
title: GameTagEdge
---

An edge in a connection

## Schema definition
```graphql
type GameTagEdge {

  # The item at the end of the edge
  node: GameTag

  # A cursor for use in pagination
  cursor: String!

}
```

## Fields

* **node ([`GameTag`](graphql/schema/gametag.md))**

  The item at the end of the edge

* **cursor ([`String!`](graphql/schema/string.md))**

  A cursor for use in pagination


## Required by
* [GameTagConnection](graphql/schema/gametagconnection.md): A connection to a list of items.
