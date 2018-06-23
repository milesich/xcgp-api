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
## Required by
* [SeoConnection](graphql/schema/seoconnection.md): A connection to a list of items.
