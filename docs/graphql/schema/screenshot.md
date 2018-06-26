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

## Fields

* **lg ([`String!`](graphql/schema/string.md))**

  The game large screenshot.

* **sm ([`String!`](graphql/schema/string.md))**

  The game small screenshot.


## Required by
* [Game](graphql/schema/game.md): A game.
