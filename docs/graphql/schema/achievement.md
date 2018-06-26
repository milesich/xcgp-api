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

## Fields

* **id ([`String!`](graphql/schema/string.md))**

  ID of the achievement

* **name ([`String!`](graphql/schema/string.md))**

  Name of the achievement

* **rule ([`String!`](graphql/schema/string.md))**

  Rule to calculate points

* **achievedOn ([`String`](graphql/schema/string.md))**

  Date when achieved otherwise empty

* **progress ([`[AchievementProgress]`](graphql/schema/achievementprogress.md))**


* **progressPercentage ([`Float!`](graphql/schema/float.md))**

  Percentage progress of all progresses in this achievement

* **achievementChainId ([`String`](graphql/schema/string.md))**

  An achievement chain Id


## Required by
* [AchievementConnection](graphql/schema/achievementconnection.md): A connection to a list of items.
* [AchievementEdge](graphql/schema/achievementedge.md): An edge in a connection
* [Query](graphql/schema/query.md)
