---
title: AchievementChain
---

An achievement chain is a group of achievements

## Schema definition
```graphql
type AchievementChain {

  # ID of the chain
  id: String! 

  # Name of the chain
  name: String! 

  # If chain is enabled
  enabled: Boolean! 

  # Date when chain will become active
  activationDate: String 

  # Date when chain will expire
  expiryDate: String 

  # Status of the chain
  status: String! 

  # Arguments
  #   after
  #   first
  #   before
  #   last
  #   id
  #   achievementChainId
  achievementConnection(
    after: String,
    first: Int,
    before: String,
    last: Int,
    id: String,
    achievementChainId: String
  ): AchievementConnection 

  # Arguments
  #   after
  #   first
  #   before
  #   last
  #   id
  #   achievementChainId
  userAchievementConnection(
    after: String,
    first: Int,
    before: String,
    last: Int,
    id: String,
    achievementChainId: String
  ): AchievementConnection 

}
```
## Required by
* [AchievementChainConnection](graphql/schema/achievementchainconnection.md): A connection to a list of items.
* [AchievementChainEdge](graphql/schema/achievementchainedge.md): An edge in a connection
* [Query](graphql/schema/query.md)
