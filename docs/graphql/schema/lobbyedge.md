---
title: LobbyEdge
---

An edge in a connection

## Schema definition
```graphql
type LobbyEdge {

  # The item at the end of the edge
  node: Lobby

  # A cursor for use in pagination
  cursor: String!

}
```

## Fields

* **node ([`Lobby`](graphql/schema/lobby.md))**

  The item at the end of the edge

* **cursor ([`String!`](graphql/schema/string.md))**

  A cursor for use in pagination


## Required by
* [LobbyConnection](graphql/schema/lobbyconnection.md): A connection to a list of items.
