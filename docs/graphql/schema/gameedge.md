---
title: GameEdge
---

An edge in a connection

## Schema definition
```graphql
type GameEdge {

  # The item at the end of the edge
  node: Game

  # A cursor for use in pagination
  cursor: String!

}
```

## Fields

* **node ([`Game`](graphql/schema/game.md))**

  The item at the end of the edge

* **cursor ([`String!`](graphql/schema/string.md))**

  A cursor for use in pagination


## Required by
* [GameConnection](graphql/schema/gameconnection.md): A connection to a list of items.
