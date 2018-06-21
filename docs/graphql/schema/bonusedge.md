---
title: BonusEdge
---

<p>An edge in a connection</p>


## Schema definition
```graphql
type BonusEdge {

  # The item at the end of the edge
  node: Bonus 

  # A cursor for use in pagination
  cursor: String! 

}
```
## Required by
* [BonusConnection](graphql/schema/bonusconnection.md): A connection to a list of items.
