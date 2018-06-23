---
title: Document
---

A document

## Schema definition
```graphql
type Document implements Node {

  # The ID of an object
  id: ID! 

  extension: String 

  name: String 

  status: String 

  type: String 

  dateAdded: String 

  dateUpdated: String 

}
```
## Required by
* [DocumentConnection](graphql/schema/documentconnection.md): A connection to a list of items.
* [DocumentEdge](graphql/schema/documentedge.md): An edge in a connection
* [Query](graphql/schema/query.md)
