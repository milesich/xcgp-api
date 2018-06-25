---
title: FeedAuthor
---

The author of a feed entry.

## Schema definition
```graphql
type FeedAuthor {

  # The name.
  name: String

  # The link to an author's resource.
  uri: String

}
```

## Required by
* [Feed](graphql/schema/feed.md): An entry from an external RSS or Atom feed.
