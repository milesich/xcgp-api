---
title: GameTag
---

A game tag that can be used to filter games

## Schema definition
```graphql
type GameTag {

  # Kebab-cased tag, example: free-spins
  tag: String

  # Prettified name of tag, example: Free spins
  name: String

}
```

## Fields

* **tag ([`String`](graphql/schema/string.md))**

  Kebab-cased tag, example: free-spins

* **name ([`String`](graphql/schema/string.md))**

  Prettified name of tag, example: Free spins


## Required by
* [GameTagConnection](graphql/schema/gametagconnection.md): A connection to a list of items.
* [GameTagEdge](graphql/schema/gametagedge.md): An edge in a connection
