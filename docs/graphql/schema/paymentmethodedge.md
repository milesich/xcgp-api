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
## Required by
* [PaymentMethodConnection](graphql/schema/paymentmethodconnection.md): A connection to a list of items.
