---
title: UpdateUserInput
---

Input for updating a user

## Schema definition
```graphql
input UpdateUserInput {
  # If the user has accepted the new terms and conditions
  acceptedTerms: Boolean

  # New password that the user would like to set
  passwordNew: String

  # If the user has acknowledged the responsible gaming notice
  acknowledgedResponsibleGaming: Boolean

  # New address that the user would like to set
  address: String

  # Example: 44
  mobileCode: Int

  # New mobile number that the user would like to set
  mobileNumber: String
}
```

## Required by
* [Mutation](graphql/schema/mutation.md)
