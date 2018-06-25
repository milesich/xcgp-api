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

## Required by
* [PromotionConnection](graphql/schema/promotionconnection.md): A connection to a list of items.
