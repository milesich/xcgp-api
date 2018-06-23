---
title: AchievementChainEdge
---

An edge in a connection

## Schema definition
```graphql
type AchievementChainEdge {

  # The item at the end of the edge
  node: AchievementChain 

  # A cursor for use in pagination
  cursor: String! 

}
```

## Required by
* [AchievementChainConnection](graphql/schema/achievementchainconnection.md): A connection to a list of items.
