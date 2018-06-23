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

## Required by
* [FeedConnection](graphql/schema/feedconnection.md): A connection to a list of items.
