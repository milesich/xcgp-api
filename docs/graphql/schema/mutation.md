---
title: Mutation
---

Every GraphQL schema has a root type for both queries and mutations. The [mutation type](https://facebook.github.io/graphql/draft/#sec-Type-System) defines GraphQL operations that change data on the server. It is analogous to performing HTTP verbs such as `POST`, `PATCH`, and `DELETE`.

For more information, see "[About mutations](guides/graphql/using.md#about-mutations)".


## Schema definition
```graphql
type Mutation {

  # Arguments
  #   input
  createUser(input: CreateUserInput): CreateUserPayload

  # Arguments
  #   input
  updateUser(input: UpdateUserInput): UpdateUserPayload

}
```

## Fields

* **createUser ([`CreateUserPayload`](graphql/schema/createuserpayload.md))**

  Argument | Type | Description
  -------- | ---- | -----------
  `input` | [`CreateUserInput`](graphql/schema/createuserinput.md) | -

* **updateUser ([`UpdateUserPayload`](graphql/schema/updateuserpayload.md))**

  Argument | Type | Description
  -------- | ---- | -----------
  `input` | [`UpdateUserInput`](graphql/schema/updateuserinput.md) | -


## Required by
This element is not required by anyone.
