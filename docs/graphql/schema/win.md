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

## Required by
* [Query](graphql/schema/query.md)
* [WinConnection](graphql/schema/winconnection.md): A connection to a list of items.
* [WinEdge](graphql/schema/winedge.md): An edge in a connection
