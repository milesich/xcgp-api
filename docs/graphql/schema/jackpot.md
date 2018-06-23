---
title: Jackpot
---

A jackpot

## Schema definition
```graphql
type Jackpot {

  amount: Float 

  currency: String 

  game: Game 

}
```

## Required by
* [JackpotConnection](graphql/schema/jackpotconnection.md): A connection to a list of items.
* [JackpotEdge](graphql/schema/jackpotedge.md): An edge in a connection
* [Query](graphql/schema/query.md)
