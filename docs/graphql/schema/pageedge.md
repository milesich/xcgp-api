---
title: PageEdge
---

An edge in a connection

## Schema definition
```graphql
type PageEdge {

  # The item at the end of the edge
  node: Page

  # A cursor for use in pagination
  cursor: String!

}
```

## Fields

* **node ([`Page`](graphql/schema/page.md))**

  The item at the end of the edge

* **cursor ([`String!`](graphql/schema/string.md))**

  A cursor for use in pagination


## Required by
* [PageConnection](graphql/schema/pageconnection.md): A connection to a list of items.
