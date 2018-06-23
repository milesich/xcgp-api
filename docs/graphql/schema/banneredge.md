---
title: BannerEdge
---

An edge in a connection

## Schema definition
```graphql
type BannerEdge {

  # The item at the end of the edge
  node: Banner 

  # A cursor for use in pagination
  cursor: String! 

}
```

## Required by
* [BannerConnection](graphql/schema/bannerconnection.md): A connection to a list of items.
