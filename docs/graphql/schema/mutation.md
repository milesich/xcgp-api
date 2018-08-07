---
title: Mutation
---

Every GraphQL schema has a root type for both queries and mutations. The [mutation type](https://facebook.github.io/graphql/draft/#sec-Type-System) defines GraphQL operations that change data on the server. It is analogous to performing HTTP verbs such as `POST`, `PATCH`, and `DELETE`.

For more information, see "[About mutations](guides/graphql/using.md#about-mutations)".


## Schema definition
```graphql
type Mutation {

  createUser(input: CreateUserInput): CreateUserPayload

  updateUser(input: UpdateUserInput): UpdateUserPayload

}
```

## Mutations

* **createUser(input: [`CreateUserInput`](graphql/schema/createuserinput.md)): [`CreateUserPayload`](graphql/schema/createuserpayload.md)**

  Output | Type | Description
  ------ | ---- | -----------
  `validation_messages` | [`Object`](graphql/schema/object.md) | -
  `user` | [`User`](graphql/schema/user.md) | -

* **updateUser(input: [`UpdateUserInput`](graphql/schema/updateuserinput.md)): [`UpdateUserPayload`](graphql/schema/updateuserpayload.md)**

  Output | Type | Description
  ------ | ---- | -----------
  `validation_messages` | [`Object`](graphql/schema/object.md) | -
  `user` | [`User`](graphql/schema/user.md) | -

