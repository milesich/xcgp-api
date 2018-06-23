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
## Required by
* [CreateUserPayload](graphql/schema/createuserpayload.md)
* [Query](graphql/schema/query.md)
* [UpdateUserPayload](graphql/schema/updateuserpayload.md)
* [Win](graphql/schema/win.md): A win
