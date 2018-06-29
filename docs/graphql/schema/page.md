---
title: Page
---

An arbitrary piece of content with a blog-like structure. It can be used for things like blog posts, news articles, simple landing pages, user success stories, etc.

## Schema definition
```graphql
type Page implements Node {

  # The ID of an object
  id: ID!

  category: String

  content: String

  date: DateTime

  description: String

  game: Game

  image: String

  imagePosition: String

  slug: String

  subCategory: String

  title: String

  popup: Boolean

  popouts: Boolean

}
```

## Fields

* **id ([`ID!`](graphql/schema/id.md))**

  The ID of an object

* **category ([`String`](graphql/schema/string.md))**


* **content ([`String`](graphql/schema/string.md))**


* **date ([`DateTime`](graphql/schema/datetime.md))**


* **description ([`String`](graphql/schema/string.md))**


* **game ([`Game`](graphql/schema/game.md))**


* **image ([`String`](graphql/schema/string.md))**


* **imagePosition ([`String`](graphql/schema/string.md))**


* **slug ([`String`](graphql/schema/string.md))**


* **subCategory ([`String`](graphql/schema/string.md))**


* **title ([`String`](graphql/schema/string.md))**


* **popup ([`Boolean`](graphql/schema/boolean.md))**


* **popouts ([`Boolean`](graphql/schema/boolean.md))**



## Required by
* [PageConnection](graphql/schema/pageconnection.md): A connection to a list of items.
* [PageEdge](graphql/schema/pageedge.md): An edge in a connection
* [Query](graphql/schema/query.md)
