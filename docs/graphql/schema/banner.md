---
title: Banner
---

A banner

## Schema definition
```graphql
type Banner {

  action: Float 

  actionParams: String 

  game: Game 

  html: String 

  image: String 

}
```

## Required by
* [BannerConnection](graphql/schema/bannerconnection.md): A connection to a list of items.
* [BannerEdge](graphql/schema/banneredge.md): An edge in a connection
* [Query](graphql/schema/query.md)
