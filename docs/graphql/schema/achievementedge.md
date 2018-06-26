---
title: AchievementEdge
---

An edge in a connection

## Schema definition
```graphql
type AchievementEdge {

  # The item at the end of the edge
  node: Achievement

  # A cursor for use in pagination
  cursor: String!

}
```

## Fields

* **node ([`Achievement`](graphql/schema/achievement.md))**

  The item at the end of the edge

* **cursor ([`String!`](graphql/schema/string.md))**

  A cursor for use in pagination


## Required by
* [AchievementConnection](graphql/schema/achievementconnection.md): A connection to a list of items.
