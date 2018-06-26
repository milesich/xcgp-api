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

  type: TransactionType

}
```

## Fields

* **id ([`ID!`](graphql/schema/id.md))**

  The ID of an object

* **action ([`TransactionAction`](graphql/schema/transactionaction.md))**


* **amount ([`Float`](graphql/schema/float.md))**


* **cards ([`[Card]`](graphql/schema/card.md))**


* **credentials ([`TransactionCredentials`](graphql/schema/transactioncredentials.md))**


* **currency ([`String`](graphql/schema/string.md))**


* **html ([`String`](graphql/schema/string.md))**


* **methodId ([`Int`](graphql/schema/int.md))**


* **methodName ([`String`](graphql/schema/string.md))**


* **providerId ([`Int`](graphql/schema/int.md))**


* **providerName ([`String`](graphql/schema/string.md))**


* **redirectUrl ([`String`](graphql/schema/string.md))**


* **startDate ([`String`](graphql/schema/string.md))**


* **status ([`TransactionStatus`](graphql/schema/transactionstatus.md))**


* **type ([`TransactionType`](graphql/schema/transactiontype.md))**



## Required by
* [Query](graphql/schema/query.md)
* [TransactionConnection](graphql/schema/transactionconnection.md): A connection to a list of items.
* [TransactionEdge](graphql/schema/transactionedge.md): An edge in a connection
