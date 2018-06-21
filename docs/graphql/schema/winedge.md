---
title: WinEdge
---

<p>An edge in a connection</p>


## Schema definition
```graphql
type WinEdge {

  # The item at the end of the edge
  node: Win 

  # A cursor for use in pagination
  cursor: String! 

}
```
## Required by
* [WinConnection](graphql/schema/winconnection.md): A connection to a list of items.
