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

## Fields

* **id ([`ID!`](graphql/schema/id.md))**

  The ID of an object

* **url ([`String`](graphql/schema/string.md))**


* **title ([`String`](graphql/schema/string.md))**


* **device ([`String`](graphql/schema/string.md))**


* **updatedAt ([`String`](graphql/schema/string.md))**


* **metaTags ([`[SeoMetaTag]`](graphql/schema/seometatag.md))**


* **links ([`[SeoLink]`](graphql/schema/seolink.md))**



## Required by
* [Query](graphql/schema/query.md)
* [SeoConnection](graphql/schema/seoconnection.md): A connection to a list of items.
* [SeoEdge](graphql/schema/seoedge.md): An edge in a connection
