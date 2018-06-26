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

## Fields

* **id ([`ID!`](graphql/schema/id.md))**

  The ID of an object

* **amount ([`Float`](graphql/schema/float.md))**


* **amountAfter ([`Float`](graphql/schema/float.md))**


* **bet ([`Float`](graphql/schema/float.md))**


* **endDate ([`String`](graphql/schema/string.md))**


* **startDate ([`String`](graphql/schema/string.md))**


* **win ([`Float`](graphql/schema/float.md))**


* **game ([`Game`](graphql/schema/game.md))**



## Required by
* [GameSessionConnection](graphql/schema/gamesessionconnection.md): A connection to a list of items.
* [GameSessionEdge](graphql/schema/gamesessionedge.md): An edge in a connection
* [Query](graphql/schema/query.md)
