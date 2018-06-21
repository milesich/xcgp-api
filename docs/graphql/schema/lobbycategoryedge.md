---
title: LobbyCategoryEdge
---

<p>An edge in a connection</p>


## Schema definition
```graphql
type LobbyCategoryEdge {

  # The item at the end of the edge
  node: LobbyCategory 

  # A cursor for use in pagination
  cursor: String! 

}
```
## Required by
* [LobbyCategoryConnection](graphql/schema/lobbycategoryconnection.md): A connection to a list of items.
