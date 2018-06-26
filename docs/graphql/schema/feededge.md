---
title: FeedEdge
---

An edge in a connection

## Schema definition
```graphql
type FeedEdge {

  # The item at the end of the edge
  node: Feed

  # A cursor for use in pagination
  cursor: String!

}
```

## Fields

* **node ([`Feed`](graphql/schema/feed.md))**

  The item at the end of the edge

* **cursor ([`String!`](graphql/schema/string.md))**

  A cursor for use in pagination


## Required by
* [FeedConnection](graphql/schema/feedconnection.md): A connection to a list of items.
