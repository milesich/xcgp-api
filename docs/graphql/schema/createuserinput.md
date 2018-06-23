---
title: CreateUserInput
---

Input for registering/creating a user

## Schema definition
```graphql
input CreateUserInput {
  email: String!

  password: String!

  firstName: String!

  lastName: String!

  nickname: String

  address: String!

  city: String!

  # Example: 44
  mobileCode: Int!

  # Example: 99614281
  mobileNumber: String!

  postcode: String!

  # Format: YYYY-MM-DD
  birthday: String!

  gender: Gender!

  # ISO 3166-1 alpha-2 country code. Example: GB
  country: String!

  referralCode: String

  affiliateTrackingCode: String

  # ISO 639-1 Language code. Example: en
  language: String

  # ISO 4217 Currency code. Example: GBP or EUR
  currency: String

  # URL Prefix before activation ID/Hash is added to the end. Example: 
  # https://site.com/activate/
  activationLink: String!

  # Voucher code
  voucher: String
}
```
## Required by
* [Mutation](graphql/schema/mutation.md)
