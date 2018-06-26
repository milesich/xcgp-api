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

## Fields

* **amount ([`Float`](graphql/schema/float.md))**


* **currency ([`String`](graphql/schema/string.md))**


* **game ([`Game`](graphql/schema/game.md))**



## Required by
* [JackpotConnection](graphql/schema/jackpotconnection.md): A connection to a list of items.
* [JackpotEdge](graphql/schema/jackpotedge.md): An edge in a connection
* [Query](graphql/schema/query.md)
