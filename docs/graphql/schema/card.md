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

  expiryDate: DateTime

  ccv: String

  active: Boolean

  createdAt: DateTime

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


* **expiryDate ([`DateTime`](graphql/schema/datetime.md))**


* **ccv ([`String`](graphql/schema/string.md))**


* **active ([`Boolean`](graphql/schema/boolean.md))**


* **createdAt ([`DateTime`](graphql/schema/datetime.md))**


* **deposits ([`Int`](graphql/schema/int.md))**


* **firstSixDigits ([`String`](graphql/schema/string.md))**


* **lastFourDigits ([`String`](graphql/schema/string.md))**


* **type ([`String`](graphql/schema/string.md))**


* **verified ([`Boolean`](graphql/schema/boolean.md))**



## Required by
* [Transaction](graphql/schema/transaction.md): A transaction
