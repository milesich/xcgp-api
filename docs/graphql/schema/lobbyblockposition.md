---
title: LobbyBlockPosition
---

The position of a block within a layout.

## Schema definition
```graphql
interface LobbyBlockPosition {

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

}
```

## Required by
* [LobbyCategoryLayoutBlock](graphql/schema/lobbycategorylayoutblock.md): Block of games for a category layout
* [LobbyGame](graphql/schema/lobbygame.md): A lobby game block.
* [LobbyPromotionSpace](graphql/schema/lobbypromotionspace.md): A lobby promotion space.
