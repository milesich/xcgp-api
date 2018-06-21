---
title: QnaCategory
---

<p>A category of question and answers</p>


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
## Required by
* [QnaCategoryConnection](graphql/schema/qnacategoryconnection.md): A connection to a list of items.
* [QnaCategoryEdge](graphql/schema/qnacategoryedge.md): An edge in a connection
* [Query](graphql/schema/query.md)
