---
title: GameSessionEdge
---

<p>An edge in a connection</p>


## Schema definition
```graphql
type GameSessionEdge {

  # The item at the end of the edge
  node: GameSession 

  # A cursor for use in pagination
  cursor: String! 

}
```
## Required by
* [GameSessionConnection](graphql/schema/gamesessionconnection.md): A connection to a list of items.
