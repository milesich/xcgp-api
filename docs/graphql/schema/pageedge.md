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
## Required by
* [PageConnection](graphql/schema/pageconnection.md): A connection to a list of items.
