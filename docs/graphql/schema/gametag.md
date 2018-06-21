---
title: GameTag
---

<p>A game tag that can be used to filter games</p>


## Schema definition
```graphql
type GameTag {

  # Kebab-cased tag, example: free-spins
  tag: String 

  # Prettified name of tag, example: Free spins
  name: String 

}
```
## Required by
* [GameTagConnection](graphql/schema/gametagconnection.md): A connection to a list of items.
* [GameTagEdge](graphql/schema/gametagedge.md): An edge in a connection
