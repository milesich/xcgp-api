---
title: BannerSlotEdge
---

An edge in a connection

## Schema definition
```graphql
type BannerSlotEdge {

  # The item at the end of the edge
  node: BannerSlot 

  # A cursor for use in pagination
  cursor: String! 

}
```

## Required by
* [BannerSlotConnection](graphql/schema/bannerslotconnection.md): A connection to a list of items.
