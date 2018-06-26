---
title: Feed
---

An entry from an external RSS or Atom feed.

## Schema definition
```graphql
type Feed implements Node {

  # The ID of an object
  id: ID!

  # The title.
  title: String

  # The original URL for the source feed.
  feed: String

  # The link to the external feed entry.
  link: String

  # The original HTML content.
  content: String

  # The timestamp of the last modification.
  dateModified: String

  # The list of authors.
  authors: [FeedAuthor]

}
```

## Fields

* **id ([`ID!`](graphql/schema/id.md))**

  The ID of an object

* **title ([`String`](graphql/schema/string.md))**

  The title.

* **feed ([`String`](graphql/schema/string.md))**

  The original URL for the source feed.

* **link ([`String`](graphql/schema/string.md))**

  The link to the external feed entry.

* **content ([`String`](graphql/schema/string.md))**

  The original HTML content.

* **dateModified ([`String`](graphql/schema/string.md))**

  The timestamp of the last modification.

* **authors ([`[FeedAuthor]`](graphql/schema/feedauthor.md))**

  The list of authors.


## Required by
* [FeedConnection](graphql/schema/feedconnection.md): A connection to a list of items.
* [FeedEdge](graphql/schema/feededge.md): An edge in a connection
* [Query](graphql/schema/query.md)
