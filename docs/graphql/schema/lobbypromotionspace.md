---
title: LobbyPromotionSpace
---

A lobby promotion space.

## Schema definition
```graphql
type LobbyPromotionSpace implements Node, LobbyBlockPosition {

  # The calculated left value of this block using col, margin and width.
  left: Int!

  # The calculated top value of this block using row, margin and height.
  top: Int!

  # The calculated width value of this block using width and sizeX.
  width: Int!

  # The calculated height value of this block using height and sizeY.
  height: Int!

  # Which column this block is on.
  col: Int!

  # Which row this block is on.
  row: Int!

  # How many columns this block takes up.
  sizeX: Int!

  # How many rows this block takes up.
  sizeY: Int!

  # The ID of an object
  id: ID!

  # The promotion space template for this block. Useful for debugging.
  template: String!

  # The list of promotions for this space.
  promotions: [Promotion!]!

}
```

## Fields

* **left ([`Int!`](graphql/schema/int.md))**

  The calculated left value of this block using col, margin and width.

* **top ([`Int!`](graphql/schema/int.md))**

  The calculated top value of this block using row, margin and height.

* **width ([`Int!`](graphql/schema/int.md))**

  The calculated width value of this block using width and sizeX.

* **height ([`Int!`](graphql/schema/int.md))**

  The calculated height value of this block using height and sizeY.

* **col ([`Int!`](graphql/schema/int.md))**

  Which column this block is on.

* **row ([`Int!`](graphql/schema/int.md))**

  Which row this block is on.

* **sizeX ([`Int!`](graphql/schema/int.md))**

  How many columns this block takes up.

* **sizeY ([`Int!`](graphql/schema/int.md))**

  How many rows this block takes up.

* **id ([`ID!`](graphql/schema/id.md))**

  The ID of an object

* **template ([`String!`](graphql/schema/string.md))**

  The promotion space template for this block. Useful for debugging.

* **promotions ([`[Promotion!]!`](graphql/schema/promotion.md))**

  The list of promotions for this space.


## Required by
* [LobbyBlock](graphql/schema/lobbyblock.md): A lobby block for a game or a promotion space.
