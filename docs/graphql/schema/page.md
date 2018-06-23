---
title: Page
---

A page

## Schema definition
```graphql
type Page implements Node {

  # The ID of an object
  id: ID! 

  category: String 

  content: String 

  date: String 

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
## Required by
* [PageConnection](graphql/schema/pageconnection.md): A connection to a list of items.
* [PageEdge](graphql/schema/pageedge.md): An edge in a connection
* [Query](graphql/schema/query.md)
