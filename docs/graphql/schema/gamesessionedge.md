---
title: GameSessionEdge
---

An edge in a connection

## Schema definition
```graphql
type GameSessionEdge {

  # The item at the end of the edge
  node: GameSession

  # A cursor for use in pagination
  cursor: String!

}
```

## Fields

* **node ([`GameSession`](graphql/schema/gamesession.md))**

  The item at the end of the edge

* **cursor ([`String!`](graphql/schema/string.md))**

  A cursor for use in pagination


## Required by
* [GameSessionConnection](graphql/schema/gamesessionconnection.md): A connection to a list of items.
