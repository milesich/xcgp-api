---
title: QnaCategoryEdge
---

An edge in a connection

## Schema definition
```graphql
type QnaCategoryEdge {

  # The item at the end of the edge
  node: QnaCategory 

  # A cursor for use in pagination
  cursor: String! 

}
```

## Required by
* [QnaCategoryConnection](graphql/schema/qnacategoryconnection.md): A connection to a list of items.
