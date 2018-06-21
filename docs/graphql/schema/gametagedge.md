---
title: GameTagEdge
---

<p>An edge in a connection</p>


## Schema definition
```graphql
type GameTagEdge {

  # The item at the end of the edge
  node: GameTag 

  # A cursor for use in pagination
  cursor: String! 

}
```
## Required by
* [GameTagConnection](graphql/schema/gametagconnection.md): A connection to a list of items.
