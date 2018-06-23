---
title: LobbyCategoryLayoutEdge
---

An edge in a connection

## Schema definition
```graphql
type LobbyCategoryLayoutEdge {

  # The item at the end of the edge
  node: LobbyCategoryLayout 

  # A cursor for use in pagination
  cursor: String! 

}
```

## Required by
* [LobbyCategoryLayoutConnection](graphql/schema/lobbycategorylayoutconnection.md): A connection to a list of items.
