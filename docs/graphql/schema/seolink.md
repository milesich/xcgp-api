---
title: SeoLink
---

A definition for an [external resource link](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/link).

## Schema definition
```graphql
type SeoLink {

  # The relationship of the linked document to the current document. This field must
  # be a space-separated list of the [link types
  # values](https://developer.mozilla.org/en-US/docs/Web/HTML/Link_types).
  rel: String

  # The URL of the link. A URL might be absolute or relative.
  href: String

}
```

## Fields

* **rel ([`String`](graphql/schema/string.md))**

  The relationship of the linked document to the current document. This field must be a space-separated list of the [link types values](https://developer.mozilla.org/en-US/docs/Web/HTML/Link_types).

* **href ([`String`](graphql/schema/string.md))**

  The URL of the link. A URL might be absolute or relative.


## Required by
* [Seo](graphql/schema/seo.md): An SEO entry for a document.
