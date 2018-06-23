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
## Required by
* [AchievementConnection](graphql/schema/achievementconnection.md): A connection to a list of items.
