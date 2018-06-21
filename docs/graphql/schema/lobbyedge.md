---
title: LobbyEdge
---

<p>An edge in a connection</p>


## Schema definition
```graphql
type LobbyEdge {

  # The item at the end of the edge
  node: Lobby 

  # A cursor for use in pagination
  cursor: String! 

}
```
## Required by
* [LobbyConnection](graphql/schema/lobbyconnection.md): A connection to a list of items.
