---
title: Card
---

A card

## Schema definition
```graphql
type Card implements Node {

  # The ID of an object
  id: ID! 

  name: String 

  number: String 

  expiryDate: String 

  ccv: String 

  active: Boolean 

  createdAt: String 

  deposits: Int 

  firstSixDigits: String 

  lastFourDigits: String 

  type: String 

  verified: Boolean 

}
```

## Required by
* [Transaction](graphql/schema/transaction.md): A transaction
