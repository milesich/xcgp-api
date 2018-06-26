---
title: TransactionEdge
---

An edge in a connection

## Schema definition
```graphql
type TransactionEdge {

  # The item at the end of the edge
  node: Transaction

  # A cursor for use in pagination
  cursor: String!

}
```

## Fields

* **node ([`Transaction`](graphql/schema/transaction.md))**

  The item at the end of the edge

* **cursor ([`String!`](graphql/schema/string.md))**

  A cursor for use in pagination


## Required by
* [TransactionConnection](graphql/schema/transactionconnection.md): A connection to a list of items.
