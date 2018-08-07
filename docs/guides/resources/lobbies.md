---
id: lobbies
title: Lobbies
---

Lobbies is one of the most complex resources in XCaliber platform due to its flexibility.

A brand can have multiple [lobbies](graphql/schema/lobby.md), each lobby can have multiple [categories](graphql/schema/lobbycategory.md), each category has multiple [layouts](graphql/schema/lobbycategorylayout.md) and each layout has multiple [blocks](graphql/schema/lobbyblock.md) as depicted in the following picture:

![Lobbies](assets/lobbies.png)

Tree representation:
* [Lobby](graphql/schema/lobby.md)
  * [Category](graphql/schema/lobbycategory.md)
    * [Layout](graphql/schema/lobbycategorylayout.md)
      * [Block](graphql/schema/lobbyblock.md)

## Categories

Categories are simple containers for layouts and at least one category needs to be defined per lobby. It doesn't need to be rendered if the lobby only has one, but it needs to exist.


## Layouts

Layouts are containers for blocks and they define how a certain group of blocks need to be rendered for the user.

The most simple layout contains just 1 block that renders in a 1x1 space. This kind of layout can be used to render a list blocks without any particular shape.

Complex layouts will have different shapes as can be depicted in the picture above.

## Blocks

Each block can represent a game or a promotion space with a certain aspect ratio depending on the layout and its position within it.
