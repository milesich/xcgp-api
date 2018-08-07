---
title: LobbyBlockEdge
---

An edge in a connection

## Schema definition
```graphql
type LobbyBlockEdge {

  # The item at the end of the edge
  node: LobbyBlock

  # A cursor for use in pagination
  cursor: String!

}
```

## Fields

* **node ([`LobbyBlock`](graphql/schema/lobbyblock.md))**

  The item at the end of the edge

* **cursor ([`String!`](graphql/schema/string.md))**

  A cursor for use in pagination


## Required by
* [LobbyBlockConnection](graphql/schema/lobbyblockconnection.md): A connection to a list of items.
