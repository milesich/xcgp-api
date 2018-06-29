---
title: AchievementChain
---

An achievement chain is a group of achievements

## Schema definition
```graphql
type AchievementChain implements Node {

  # The ID of an object
  id: ID!

  # Name of the chain
  name: String!

  # If chain is enabled
  enabled: Boolean!

  # Date when chain will become active
  activationDate: String

  # Date when chain will expire
  expiryDate: String

  # If the achievement is deleted
  deleted: Boolean!

  # Status of the chain
  status: String!

  # Arguments
  #   after
  #   first
  #   before
  #   last
  achievementConnection(
    after: String,
    first: Int,
    before: String,
    last: Int
  ): AchievementConnection

  # Arguments
  #   after
  #   first
  #   before
  #   last
  userAchievementConnection(
    after: String,
    first: Int,
    before: String,
    last: Int
  ): UserAchievementConnection

}
```

## Connections

* **achievementConnection ([`AchievementConnection`](graphql/schema/achievementconnection.md))**

  Argument | Type | Description
  -------- | ---- | -----------
  `after` | [`String`](graphql/schema/string.md) | -
  `first` | [`Int`](graphql/schema/int.md) | -
  `before` | [`String`](graphql/schema/string.md) | -
  `last` | [`Int`](graphql/schema/int.md) | -

* **userAchievementConnection ([`UserAchievementConnection`](graphql/schema/userachievementconnection.md))**

  Argument | Type | Description
  -------- | ---- | -----------
  `after` | [`String`](graphql/schema/string.md) | -
  `first` | [`Int`](graphql/schema/int.md) | -
  `before` | [`String`](graphql/schema/string.md) | -
  `last` | [`Int`](graphql/schema/int.md) | -


## Fields

* **id ([`ID!`](graphql/schema/id.md))**

  The ID of an object

* **name ([`String!`](graphql/schema/string.md))**

  Name of the chain

* **enabled ([`Boolean!`](graphql/schema/boolean.md))**

  If chain is enabled

* **activationDate ([`String`](graphql/schema/string.md))**

  Date when chain will become active

* **expiryDate ([`String`](graphql/schema/string.md))**

  Date when chain will expire

* **deleted ([`Boolean!`](graphql/schema/boolean.md))**

  If the achievement is deleted

* **status ([`String!`](graphql/schema/string.md))**

  Status of the chain


## Required by
* [Achievement](graphql/schema/achievement.md): An achievement
* [AchievementChainConnection](graphql/schema/achievementchainconnection.md): A connection to a list of items.
* [AchievementChainEdge](graphql/schema/achievementchainedge.md): An edge in a connection
* [Query](graphql/schema/query.md)
