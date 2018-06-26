---
title: LimitEdge
---

An edge in a connection

## Schema definition
```graphql
type LimitEdge {

  # The item at the end of the edge
  node: Limit

  # A cursor for use in pagination
  cursor: String!

}
```

## Fields

* **node ([`Limit`](graphql/schema/limit.md))**

  The item at the end of the edge

* **cursor ([`String!`](graphql/schema/string.md))**

  A cursor for use in pagination


## Required by
* [LimitConnection](graphql/schema/limitconnection.md): A connection to a list of items.
