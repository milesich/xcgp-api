---
title: Lobby
---

A lobby containing game categories.

## Schema definition
```graphql
type Lobby implements Node {

  # The ID of an object
  id: ID!

  # The name of the lobby.
  name: String!

  # The slug of the lobby.
  slug: ID!

  # Games
  games: [Game]

  # Arguments
  #   after
  #   first
  #   before
  #   last
  #   slug
  categoryConnection(
    after: String,
    first: Int,
    before: String,
    last: Int,
    slug: String
  ): LobbyCategoryConnection

}
```

## Connections

**categoryConnection ([`LobbyCategoryConnection`](graphql/schema/lobbycategoryconnection.md))**

Argument | Type | Description
-------- | ---- | -----------
`after` | [`String`](graphql/schema/string.md) | -
`first` | [`Int`](graphql/schema/int.md) | -
`before` | [`String`](graphql/schema/string.md) | -
`last` | [`Int`](graphql/schema/int.md) | -
`slug` | [`String`](graphql/schema/string.md) | -


## Required by
* [LobbyConnection](graphql/schema/lobbyconnection.md): A connection to a list of items.
* [LobbyEdge](graphql/schema/lobbyedge.md): An edge in a connection
* [Query](graphql/schema/query.md)
