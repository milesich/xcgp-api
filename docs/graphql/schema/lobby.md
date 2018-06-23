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

## Required by
* [LobbyConnection](graphql/schema/lobbyconnection.md): A connection to a list of items.
* [LobbyEdge](graphql/schema/lobbyedge.md): An edge in a connection
* [Query](graphql/schema/query.md)
