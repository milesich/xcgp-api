---
title: CurrencyEdge
---

<p>An edge in a connection</p>


## Schema definition
```graphql
type CurrencyEdge {

  # The item at the end of the edge
  node: Currency 

  # A cursor for use in pagination
  cursor: String! 

}
```
## Required by
* [CurrencyConnection](graphql/schema/currencyconnection.md): A connection to a list of items.
