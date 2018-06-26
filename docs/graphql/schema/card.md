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

## Fields

* **id ([`ID!`](graphql/schema/id.md))**

  The ID of an object

* **name ([`String`](graphql/schema/string.md))**


* **number ([`String`](graphql/schema/string.md))**


* **expiryDate ([`String`](graphql/schema/string.md))**


* **ccv ([`String`](graphql/schema/string.md))**


* **active ([`Boolean`](graphql/schema/boolean.md))**


* **createdAt ([`String`](graphql/schema/string.md))**


* **deposits ([`Int`](graphql/schema/int.md))**


* **firstSixDigits ([`String`](graphql/schema/string.md))**


* **lastFourDigits ([`String`](graphql/schema/string.md))**


* **type ([`String`](graphql/schema/string.md))**


* **verified ([`Boolean`](graphql/schema/boolean.md))**



## Required by
* [Transaction](graphql/schema/transaction.md): A transaction
