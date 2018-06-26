---
title: GameLastDraw
---



## Schema definition
```graphql
type GameLastDraw {

  date: String

  jackpot: Float

  numbers: [Float]

}
```

## Fields

* **date ([`String`](graphql/schema/string.md))**


* **jackpot ([`Float`](graphql/schema/float.md))**


* **numbers ([`[Float]`](graphql/schema/float.md))**



## Required by
* [Game](graphql/schema/game.md): A game.
