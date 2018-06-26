---
title: SeoMetaTag
---

A definition for a [metadata element](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/meta).

## Schema definition
```graphql
type SeoMetaTag {

  # The attribute name (eg. `name`).
  type: String

  # The attribute value (eg. `description`).
  name: String

  # The content of the element.
  content: String

}
```

## Fields

* **type ([`String`](graphql/schema/string.md))**

  The attribute name (eg. `name`).

* **name ([`String`](graphql/schema/string.md))**

  The attribute value (eg. `description`).

* **content ([`String`](graphql/schema/string.md))**

  The content of the element.


## Required by
* [Seo](graphql/schema/seo.md): An SEO entry for a document.
