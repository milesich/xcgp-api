---
title: PaymentMethodEdge
---

An edge in a connection

## Schema definition
```graphql
type PaymentMethodEdge {

  # The item at the end of the edge
  node: PaymentMethod

  # A cursor for use in pagination
  cursor: String!

}
```

## Fields

* **node ([`PaymentMethod`](graphql/schema/paymentmethod.md))**

  The item at the end of the edge

* **cursor ([`String!`](graphql/schema/string.md))**

  A cursor for use in pagination


## Required by
* [PaymentMethodConnection](graphql/schema/paymentmethodconnection.md): A connection to a list of items.
