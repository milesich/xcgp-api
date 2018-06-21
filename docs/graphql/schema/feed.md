---
title: Feed
---

<p>A feed item</p>


## Schema definition
```graphql
type Feed implements Node {

  # The ID of an object
  id: ID! 

  title: String 

  feed: String 

  link: String 

  content: String 

  dateModified: String 

  authors: [FeedAuthor] 

}
```
## Required by
* [FeedConnection](graphql/schema/feedconnection.md): A connection to a list of items.
* [FeedEdge](graphql/schema/feededge.md): An edge in a connection
* [Query](graphql/schema/query.md)
