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

## Fields

* **name ([`String!`](graphql/schema/string.md))**

  Name of the point type

* **code ([`String!`](graphql/schema/string.md))**

  Code of the point type

* **limit ([`Float!`](graphql/schema/float.md))**

  Maximum points to achieve this achievement

* **current ([`Float!`](graphql/schema/float.md))**

  Current achieved points


## Required by
* [Achievement](graphql/schema/achievement.md): An achievement
