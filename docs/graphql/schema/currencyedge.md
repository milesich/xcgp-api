---
title: CurrencyEdge
---

An edge in a connection

## Schema definition
```graphql
type CurrencyEdge {

  # The item at the end of the edge
  node: Currency

  # A cursor for use in pagination
  cursor: String!

}
```

## Fields

* **node ([`Currency`](graphql/schema/currency.md))**

  The item at the end of the edge

* **cursor ([`String!`](graphql/schema/string.md))**

  A cursor for use in pagination


## Required by
* [CurrencyConnection](graphql/schema/currencyconnection.md): A connection to a list of items.
