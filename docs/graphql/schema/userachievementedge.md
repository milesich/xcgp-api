---
title: UserAchievementEdge
---

An edge in a connection

## Schema definition
```graphql
type UserAchievementEdge {

  # The item at the end of the edge
  node: UserAchievement

  # A cursor for use in pagination
  cursor: String!

}
```

## Fields

* **node ([`UserAchievement`](graphql/schema/userachievement.md))**

  The item at the end of the edge

* **cursor ([`String!`](graphql/schema/string.md))**

  A cursor for use in pagination


## Required by
* [UserAchievementConnection](graphql/schema/userachievementconnection.md): A connection to a list of items.
