---
title: DocumentEdge
---

<p>An edge in a connection</p>


## Schema definition
```graphql
type DocumentEdge {

  # The item at the end of the edge
  node: Document 

  # A cursor for use in pagination
  cursor: String! 

}
```
## Required by
* [DocumentConnection](graphql/schema/documentconnection.md): A connection to a list of items.
