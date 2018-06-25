---
title: TransactionStatus
---



## Schema definition
```graphql
enum TransactionStatus {

  STARTED

  CARD_REQUESTED

  CARD_RECEIVED

  CARDS_LISTED

  CARD_SELECTED

  IFRAME_SENT

  HTML_PROVIDED

  FAILED

  COMPLETED

  APPROVED

  DECLINED

  DECLINED_COMPLETE

  CANCELLED

  PENDING

  PENDING_APPROVAL

  CREDENTIALS_REQUESTED

  REFUNDED

}
```

## Required by
* [Transaction](graphql/schema/transaction.md): A transaction
