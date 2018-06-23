---
title: Screenshot
---

A game screenshot.

## Schema definition
```graphql
type Screenshot {

  # The game large screenshot.
  lg: String! 

  # The game small screenshot.
  sm: String! 

}
```

## Required by
* [Game](graphql/schema/game.md): A game.
