---
title: LobbyCategoryLayout
---

Layout for a lobby category.

## Schema definition
```graphql
type LobbyCategoryLayout {

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

  blocks: [LobbyCategoryLayoutBlock]

}
```

## Fields

* **id ([`ID!`](graphql/schema/id.md))**


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
* [LobbyCategory](graphql/schema/lobbycategory.md): A lobby category.
* [LobbyCategoryLayoutConnection](graphql/schema/lobbycategorylayoutconnection.md): A connection to a list of items.
* [LobbyCategoryLayoutEdge](graphql/schema/lobbycategorylayoutedge.md): An edge in a connection
