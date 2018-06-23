---
title: BannerSlot
---

A banner slot containing banners

## Schema definition
```graphql
type BannerSlot implements Node {

  # The ID of an object
  id: ID! 

  slug: String 

}
```

## Required by
* [BannerSlotConnection](graphql/schema/bannerslotconnection.md): A connection to a list of items.
* [BannerSlotEdge](graphql/schema/bannerslotedge.md): An edge in a connection
* [Query](graphql/schema/query.md)
