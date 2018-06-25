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

## Required by
* [GameConnection](graphql/schema/gameconnection.md): A connection to a list of items.
