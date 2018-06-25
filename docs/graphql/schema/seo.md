---
title: Seo
---

A search engine optimisation definition

## Schema definition
```graphql
type Seo implements Node {

  # The ID of an object
  id: ID!

  url: String

  title: String

  device: String

  updatedAt: String

  metaTags: [SeoMetaTag]

  links: [SeoLink]

}
```

## Required by
* [Query](graphql/schema/query.md)
* [SeoConnection](graphql/schema/seoconnection.md): A connection to a list of items.
* [SeoEdge](graphql/schema/seoedge.md): An edge in a connection
