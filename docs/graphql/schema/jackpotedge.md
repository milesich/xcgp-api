---
title: JackpotEdge
---

<p>An edge in a connection</p>


## Schema definition
```graphql
type JackpotEdge {

  # The item at the end of the edge
  node: Jackpot 

  # A cursor for use in pagination
  cursor: String! 

}
```
## Required by
* [JackpotConnection](graphql/schema/jackpotconnection.md): A connection to a list of items.
