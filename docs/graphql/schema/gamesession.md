---
title: GameSession
---

A game session

## Schema definition
```graphql
type GameSession implements Node {

  # The ID of an object
  id: ID! 

  amount: Float 

  amountAfter: Float 

  bet: Float 

  endDate: String 

  startDate: String 

  win: Float 

  game: Game 

}
```

## Required by
* [GameSessionConnection](graphql/schema/gamesessionconnection.md): A connection to a list of items.
* [GameSessionEdge](graphql/schema/gamesessionedge.md): An edge in a connection
* [Query](graphql/schema/query.md)
