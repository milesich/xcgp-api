---
title: LobbyCategoryLayout
---

Layout for a lobby category.

## Schema definition
```graphql
type LobbyCategoryLayout implements Node {

  # The ID of an object
  id: ID!

  # The name of this layout.
  name: String!

  # The height of each block within this layout.
  blockHeight: Int!

  # The margin of each block within this layout.
  blockMargin: Int!

  # The width of each block within this layout.
  blockWidth: Int!

  # The calculated width of the layout.
  width: Int!

  # The calculated height of the layout.
  height: Int!

  # If the layout is inline or not (used for floating)
  inline: Boolean!

  blocks: [LobbyCategoryLayoutBlock] @deprecated(reason: "Use `blockConnection` instead.")

  # Arguments
  #   after
  #   first
  #   before
  #   last
  blockConnection(
    after: String,
    first: Int,
    before: String,
    last: Int
  ): LobbyBlockConnection

}
```

## Connections

* **blockConnection ([`LobbyBlockConnection`](graphql/schema/lobbyblockconnection.md))**

  Argument | Type | Description
  -------- | ---- | -----------
  `after` | [`String`](graphql/schema/string.md) | -
  `first` | [`Int`](graphql/schema/int.md) | -
  `before` | [`String`](graphql/schema/string.md) | -
  `last` | [`Int`](graphql/schema/int.md) | -


## Fields

* **id ([`ID!`](graphql/schema/id.md))**

  The ID of an object

* **name ([`String!`](graphql/schema/string.md))**

  The name of this layout.

* **blockHeight ([`Int!`](graphql/schema/int.md))**

  The height of each block within this layout.

* **blockMargin ([`Int!`](graphql/schema/int.md))**

  The margin of each block within this layout.

* **blockWidth ([`Int!`](graphql/schema/int.md))**

  The width of each block within this layout.

* **width ([`Int!`](graphql/schema/int.md))**

  The calculated width of the layout.

* **height ([`Int!`](graphql/schema/int.md))**

  The calculated height of the layout.

* **inline ([`Boolean!`](graphql/schema/boolean.md))**

  If the layout is inline or not (used for floating)

* **blocks ([`[LobbyCategoryLayoutBlock]`](graphql/schema/lobbycategorylayoutblock.md))**



## Required by
* [LobbyCategoryLayoutConnection](graphql/schema/lobbycategorylayoutconnection.md): A connection to a list of items.
* [LobbyCategoryLayoutEdge](graphql/schema/lobbycategorylayoutedge.md): An edge in a connection
