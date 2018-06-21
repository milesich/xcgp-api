---
id: mutations
title: Mutations
---

Every GraphQL schema has a root type for both queries and mutations. The [mutation type](http://facebook.github.io/graphql/draft/#sec-Type-System) defines GraphQL operations that change data on the server. It is analogous to performing HTTP verbs such as `POST`, `PATCH`, and `DELETE`.

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
