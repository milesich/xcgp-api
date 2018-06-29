---
title: Achievement
---

An achievement

## Schema definition
```graphql
type Achievement implements Node {

  # The ID of an object
  id: ID!

  # An achievement chain ID
  achievementChainId: ID

  # Parent ID
  parentAchievementId: ID

  # Rule to calculate points
  rule: String

  # Name of the achievement
  name: String

  # Name of the achievement
  deleted: Boolean

  # AchievementChain containing this Achievement
  achievementChain: AchievementChain

}
```

## Fields

* **id ([`ID!`](graphql/schema/id.md))**

  The ID of an object

* **achievementChainId ([`ID`](graphql/schema/id.md))**

  An achievement chain ID

* **parentAchievementId ([`ID`](graphql/schema/id.md))**

  Parent ID

* **rule ([`String`](graphql/schema/string.md))**

  Rule to calculate points

* **name ([`String`](graphql/schema/string.md))**

  Name of the achievement

* **deleted ([`Boolean`](graphql/schema/boolean.md))**

  Name of the achievement

* **achievementChain ([`AchievementChain`](graphql/schema/achievementchain.md))**

  AchievementChain containing this Achievement


## Required by
* [AchievementConnection](graphql/schema/achievementconnection.md): A connection to a list of items.
* [AchievementEdge](graphql/schema/achievementedge.md): An edge in a connection
* [Query](graphql/schema/query.md)
* [UserAchievement](graphql/schema/userachievement.md): An achievement belonging to a user
