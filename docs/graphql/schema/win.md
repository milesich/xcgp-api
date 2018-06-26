---
title: Win
---

A win

## Schema definition
```graphql
type Win {

  amount: Float

  currency: String

  game: Game

  user: User

}
```

## Fields

* **amount ([`Float`](graphql/schema/float.md))**


* **currency ([`String`](graphql/schema/string.md))**


* **game ([`Game`](graphql/schema/game.md))**


* **user ([`User`](graphql/schema/user.md))**



## Required by
* [Query](graphql/schema/query.md)
* [WinConnection](graphql/schema/winconnection.md): A connection to a list of items.
* [WinEdge](graphql/schema/winedge.md): An edge in a connection
