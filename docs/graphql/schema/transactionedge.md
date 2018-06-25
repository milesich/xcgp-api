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

## Required by
* [TransactionConnection](graphql/schema/transactionconnection.md): A connection to a list of items.
