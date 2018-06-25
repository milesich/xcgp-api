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

## Required by
* [FeedConnection](graphql/schema/feedconnection.md): A connection to a list of items.
* [FeedEdge](graphql/schema/feededge.md): An edge in a connection
* [Query](graphql/schema/query.md)
