---
title: SpaceEdge
---

<p>An edge in a connection</p>


## Schema definition
```graphql
type SpaceEdge {

  # The item at the end of the edge
  node: Space 

  # A cursor for use in pagination
  cursor: String! 

}
```
## Required by
* [SpaceConnection](graphql/schema/spaceconnection.md): A connection to a list of items.
