---
title: SeoEdge
---

An edge in a connection

## Schema definition
```graphql
type SeoEdge {

  # The item at the end of the edge
  node: Seo

  # A cursor for use in pagination
  cursor: String!

}
```

## Fields

* **node ([`Seo`](graphql/schema/seo.md))**

  The item at the end of the edge

* **cursor ([`String!`](graphql/schema/string.md))**

  A cursor for use in pagination


## Required by
* [SeoConnection](graphql/schema/seoconnection.md): A connection to a list of items.
