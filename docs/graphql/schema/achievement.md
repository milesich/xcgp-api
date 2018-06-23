---
title: Achievement
---

An achievement

## Schema definition
```graphql
type Achievement {

  # ID of the achievement
  id: String! 

  # Name of the achievement
  name: String! 

  # Rule to calculate points
  rule: String! 

  # Date when achieved otherwise empty
  achievedOn: String 

  progress: [AchievementProgress] 

  # Percentage progress of all progresses in this achievement
  progressPercentage: Float! 

  # An achievement chain Id
  achievementChainId: String 

}
```

## Required by
* [AchievementConnection](graphql/schema/achievementconnection.md): A connection to a list of items.
* [AchievementEdge](graphql/schema/achievementedge.md): An edge in a connection
* [Query](graphql/schema/query.md)
