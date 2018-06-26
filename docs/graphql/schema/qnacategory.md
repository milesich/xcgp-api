---
title: QnaCategory
---

A category of questions and answers. It can be used for any kind of content that displays as a list of titles and descriptions like questions and answers, glossaries, terms and conditions, etc.

## Schema definition
```graphql
type QnaCategory implements Node {

  # The ID of an object
  id: ID!

  name: String

  slug: String

  content: [QnaContent]

}
```

## Fields

* **id ([`ID!`](graphql/schema/id.md))**

  The ID of an object

* **name ([`String`](graphql/schema/string.md))**


* **slug ([`String`](graphql/schema/string.md))**


* **content ([`[QnaContent]`](graphql/schema/qnacontent.md))**



## Required by
* [QnaCategoryConnection](graphql/schema/qnacategoryconnection.md): A connection to a list of items.
* [QnaCategoryEdge](graphql/schema/qnacategoryedge.md): An edge in a connection
* [Query](graphql/schema/query.md)
