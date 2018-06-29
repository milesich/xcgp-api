---
title: UserAchievement
---

An achievement belonging to a user

## Schema definition
```graphql
type UserAchievement implements Node {

  # The ID of an object
  id: ID!

  # ID of Achievement
  achievementId: Int

  # Date when achieved otherwise empty
  achievedOn: String

  # An achievement chain ID
  achievementChainId: ID

  # Associated achievement
  achievement: Achievement

  progress: [Bucket]

  # Percentage progress of all progresses in this achievement
  progressPercentage: Float!

}
```

## Fields

* **id ([`ID!`](graphql/schema/id.md))**

  The ID of an object

* **achievementId ([`Int`](graphql/schema/int.md))**

  ID of Achievement

* **achievedOn ([`String`](graphql/schema/string.md))**

  Date when achieved otherwise empty

* **achievementChainId ([`ID`](graphql/schema/id.md))**

  An achievement chain ID

* **achievement ([`Achievement`](graphql/schema/achievement.md))**

  Associated achievement

* **progress ([`[Bucket]`](graphql/schema/bucket.md))**


* **progressPercentage ([`Float!`](graphql/schema/float.md))**

  Percentage progress of all progresses in this achievement


## Required by
* [Query](graphql/schema/query.md)
* [UserAchievementConnection](graphql/schema/userachievementconnection.md): A connection to a list of items.
* [UserAchievementEdge](graphql/schema/userachievementedge.md): An edge in a connection
