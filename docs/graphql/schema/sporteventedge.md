---
title: SportEventEdge
---

An edge in a connection

## Schema definition
```graphql
type SportEventEdge {

  # The item at the end of the edge
  node: SportEvent

  # A cursor for use in pagination
  cursor: String!

}
```

## Fields

* **node ([`SportEvent`](graphql/schema/sportevent.md))**

  The item at the end of the edge

* **cursor ([`String!`](graphql/schema/string.md))**

  A cursor for use in pagination


## Required by
* [SportEventConnection](graphql/schema/sporteventconnection.md): A connection to a list of items.
