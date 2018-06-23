---
title: LobbyCategoryLayoutBlock
---

<p>Block of games for a category layout</p>


## Schema definition
```graphql
type LobbyCategoryLayoutBlock {

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

  # Block type.
  type: String! 

  # Game object. Always null if type != game.
  game: Game 

  # List of promotions. Always null if type != promotions.
  promotions: [Promotion] 

}
```
## Required by
* [LobbyCategoryLayout](graphql/schema/lobbycategorylayout.md): Layout for a lobby category.
