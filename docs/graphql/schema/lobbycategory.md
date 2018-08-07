---
title: LobbyCategory
---

A lobby category.

## Schema definition
```graphql
type LobbyCategory implements Node {

  # The ID of an object
  id: ID!

  # The slug of the game category.
  slug: String!

  # The name of the game category.
  name: String!

  # Arguments
  #   after
  #   first
  #   before
  #   last
  layoutConnection(
    after: String,
    first: Int,
    before: String,
    last: Int
  ): LobbyCategoryLayoutConnection

}
```

## Connections

* **layoutConnection ([`LobbyCategoryLayoutConnection`](graphql/schema/lobbycategorylayoutconnection.md))**

  Argument | Type | Description
  -------- | ---- | -----------
  `after` | [`String`](graphql/schema/string.md) | -
  `first` | [`Int`](graphql/schema/int.md) | -
  `before` | [`String`](graphql/schema/string.md) | -
  `last` | [`Int`](graphql/schema/int.md) | -


## Fields

* **id ([`ID!`](graphql/schema/id.md))**

  The ID of an object

* **slug ([`String!`](graphql/schema/string.md))**

  The slug of the game category.

* **name ([`String!`](graphql/schema/string.md))**

  The name of the game category.


## Required by
* [LobbyCategoryConnection](graphql/schema/lobbycategoryconnection.md): A connection to a list of items.
* [LobbyCategoryEdge](graphql/schema/lobbycategoryedge.md): An edge in a connection
