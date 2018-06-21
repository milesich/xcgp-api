---
title: QnaCategoryEdge
---

<p>An edge in a connection</p>


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
