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

## Fields

* **id ([`ID!`](graphql/schema/id.md))**

  The ID of an object

* **extension ([`String`](graphql/schema/string.md))**


* **name ([`String`](graphql/schema/string.md))**


* **status ([`String`](graphql/schema/string.md))**


* **type ([`String`](graphql/schema/string.md))**


* **dateAdded ([`String`](graphql/schema/string.md))**


* **dateUpdated ([`String`](graphql/schema/string.md))**



## Required by
* [DocumentConnection](graphql/schema/documentconnection.md): A connection to a list of items.
* [DocumentEdge](graphql/schema/documentedge.md): An edge in a connection
* [Query](graphql/schema/query.md)
