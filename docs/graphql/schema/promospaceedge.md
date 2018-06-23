---
title: PromoSpaceEdge
---

An edge in a connection

## Schema definition
```graphql
type PromoSpaceEdge {

  # The item at the end of the edge
  node: PromoSpace 

  # A cursor for use in pagination
  cursor: String! 

}
```
## Required by
* [PromoSpaceConnection](graphql/schema/promospaceconnection.md): A connection to a list of items.
