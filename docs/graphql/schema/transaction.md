---
title: Transaction
---

A transaction

## Schema definition
```graphql
type Transaction implements Node {

  # The ID of an object
  id: ID! 

  action: TransactionAction 

  amount: Float 

  cards: [Card] 

  credentials: TransactionCredentials 

  currency: String 

  html: String 

  methodId: Int 

  methodName: String 

  providerId: Int 

  providerName: String 

  redirectUrl: String 

  startDate: String 

  status: TransactionStatus 

  type: String 

}
```

## Required by
* [Query](graphql/schema/query.md)
* [TransactionConnection](graphql/schema/transactionconnection.md): A connection to a list of items.
* [TransactionEdge](graphql/schema/transactionedge.md): An edge in a connection
