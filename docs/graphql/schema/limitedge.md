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

## Required by
* [LimitConnection](graphql/schema/limitconnection.md): A connection to a list of items.
