---
title: Gender
---

The user gender.

## Schema definition
```graphql
enum Gender {

  MALE

  FEMALE

  male @deprecated(reason: "Use `MALE` instead.")

  female @deprecated(reason: "Use `FEMALE` instead.")

}
```

## Required by
* [CreateUserInput](graphql/schema/createuserinput.md): Input for registering/creating a user
* [User](graphql/schema/user.md): A user
