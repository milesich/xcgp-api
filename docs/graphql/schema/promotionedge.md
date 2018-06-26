---
title: PromotionEdge
---

An edge in a connection

## Schema definition
```graphql
type PromotionEdge {

  # The item at the end of the edge
  node: Promotion

  # A cursor for use in pagination
  cursor: String!

}
```

## Fields

* **node ([`Promotion`](graphql/schema/promotion.md))**

  The item at the end of the edge

* **cursor ([`String!`](graphql/schema/string.md))**

  A cursor for use in pagination


## Required by
* [PromotionConnection](graphql/schema/promotionconnection.md): A connection to a list of items.
