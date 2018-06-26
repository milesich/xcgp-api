---
title: User
---

A user

## Schema definition
```graphql
type User implements Node {

  # The ID of an object
  id: ID!

  acceptedTerms: Boolean

  address: String

  affiliateCode: String

  backendSession: String

  birthday: String

  city: String

  # ISO 3166-1 alpha-2 country code. Example: GB
  country: String

  # ISO 4217 Currency Code. Example: GBP or EUR
  currency: String

  # Whether or not the user has deposited before
  deposited: Boolean

  email: String

  externalTrackingTag: String

  firstName: String

  gender: Gender!

  # Example: mga
  jurisdiction: String

  # ISO 639-1 Language code. Example: en
  language: String

  lastName: String

  mobileCode: Int

  mobileNumber: String

  nickname: String

  password: String

  phone: String

  postcode: String

  receiveNews: Boolean

  receiveSms: Boolean

  receiveSnail: Boolean

}
```

## Fields

* **id ([`ID!`](graphql/schema/id.md))**

  The ID of an object

* **acceptedTerms ([`Boolean`](graphql/schema/boolean.md))**


* **address ([`String`](graphql/schema/string.md))**


* **affiliateCode ([`String`](graphql/schema/string.md))**


* **backendSession ([`String`](graphql/schema/string.md))**


* **birthday ([`String`](graphql/schema/string.md))**


* **city ([`String`](graphql/schema/string.md))**


* **country ([`String`](graphql/schema/string.md))**

  ISO 3166-1 alpha-2 country code. Example: GB

* **currency ([`String`](graphql/schema/string.md))**

  ISO 4217 Currency Code. Example: GBP or EUR

* **deposited ([`Boolean`](graphql/schema/boolean.md))**

  Whether or not the user has deposited before

* **email ([`String`](graphql/schema/string.md))**


* **externalTrackingTag ([`String`](graphql/schema/string.md))**


* **firstName ([`String`](graphql/schema/string.md))**


* **gender ([`Gender!`](graphql/schema/gender.md))**


* **jurisdiction ([`String`](graphql/schema/string.md))**

  Example: mga

* **language ([`String`](graphql/schema/string.md))**

  ISO 639-1 Language code. Example: en

* **lastName ([`String`](graphql/schema/string.md))**


* **mobileCode ([`Int`](graphql/schema/int.md))**


* **mobileNumber ([`String`](graphql/schema/string.md))**


* **nickname ([`String`](graphql/schema/string.md))**


* **password ([`String`](graphql/schema/string.md))**


* **phone ([`String`](graphql/schema/string.md))**


* **postcode ([`String`](graphql/schema/string.md))**


* **receiveNews ([`Boolean`](graphql/schema/boolean.md))**


* **receiveSms ([`Boolean`](graphql/schema/boolean.md))**


* **receiveSnail ([`Boolean`](graphql/schema/boolean.md))**



## Required by
* [CreateUserPayload](graphql/schema/createuserpayload.md)
* [Query](graphql/schema/query.md)
* [UpdateUserPayload](graphql/schema/updateuserpayload.md)
* [Win](graphql/schema/win.md): A win
