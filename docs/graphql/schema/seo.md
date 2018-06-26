---
title: Seo
---

An SEO entry for a document.

## Schema definition
```graphql
type Seo implements Node {

  # The ID of an object
  id: ID!

  # The relative URL of the document.
  url: String

  # The title of the document.
  title: String

  # Last updated timestamp.
  updatedAt: String

  # The meta tags of the document.
  metaTags: [SeoMetaTag]

  # The links of the document.
  links: [SeoLink]

}
```

## Fields

* **id ([`ID!`](graphql/schema/id.md))**

  The ID of an object

* **url ([`String`](graphql/schema/string.md))**

  The relative URL of the document.

* **title ([`String`](graphql/schema/string.md))**

  The title of the document.

* **updatedAt ([`String`](graphql/schema/string.md))**

  Last updated timestamp.

* **metaTags ([`[SeoMetaTag]`](graphql/schema/seometatag.md))**

  The meta tags of the document.

* **links ([`[SeoLink]`](graphql/schema/seolink.md))**

  The links of the document.


## Required by
* [Query](graphql/schema/query.md)
* [SeoConnection](graphql/schema/seoconnection.md): A connection to a list of items.
* [SeoEdge](graphql/schema/seoedge.md): An edge in a connection
