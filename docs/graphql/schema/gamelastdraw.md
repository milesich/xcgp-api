---
title: GameLastDraw
---



## Schema definition
```graphql
type GameLastDraw {

  date: DateTime

  jackpot: Float

  numbers: [Float]

}
```

## Fields

* **date ([`DateTime`](graphql/schema/datetime.md))**


* **jackpot ([`Float`](graphql/schema/float.md))**


* **numbers ([`[Float]`](graphql/schema/float.md))**



## Required by
* [Game](graphql/schema/game.md): A game.
