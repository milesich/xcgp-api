---
title: DocumentEdge
---

An edge in a connection

## Schema definition
```graphql
type DocumentEdge {

  # The item at the end of the edge
  node: Document

  # A cursor for use in pagination
  cursor: String!

}
```

## Fields

* **node ([`Document`](graphql/schema/document.md))**

  The item at the end of the edge

* **cursor ([`String!`](graphql/schema/string.md))**

  A cursor for use in pagination


## Required by
* [DocumentConnection](graphql/schema/documentconnection.md): A connection to a list of items.
