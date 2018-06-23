---
title: AchievementProgress
---



## Schema definition
```graphql
type AchievementProgress {

  # Name of the point type
  name: String! 

  # Code of the point type
  code: String! 

  # Maximum points to achieve this achievement
  limit: Float! 

  # Current achieved points
  current: Float! 

}
```

## Required by
* [Achievement](graphql/schema/achievement.md): An achievement
