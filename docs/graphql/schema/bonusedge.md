---
title: BonusEdge
---

An edge in a connection

## Schema definition
```graphql
type BonusEdge {

  # The item at the end of the edge
  node: Bonus

  # A cursor for use in pagination
  cursor: String!

}
```

## Fields

* **node ([`Bonus`](graphql/schema/bonus.md))**

  The item at the end of the edge

* **cursor ([`String!`](graphql/schema/string.md))**

  A cursor for use in pagination


## Required by
* [BonusConnection](graphql/schema/bonusconnection.md): A connection to a list of items.
