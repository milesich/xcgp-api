---
title: Limit
---

A limit

## Schema definition
```graphql
type Limit implements Node {

  # The ID of an object
  id: ID!

  # The amount that this limit is set to
  amount: String

  # The type of this limit. Example: deposit, session, bet, loss
  type: String

  # The period of this limit. Example: daily, weekly, monthly
  period: String

  # The minimum amount that this limit can be set to
  min: Int

  # The maximum amount that this limit can be set to
  max: Int

  # The intervals this limit can be updated
  step: Int

  # The datetime this limit starts at
  start: String

  # The datetime this limit ends at
  end: String

}
```

## Required by
* [LimitConnection](graphql/schema/limitconnection.md): A connection to a list of items.
* [LimitEdge](graphql/schema/limitedge.md): An edge in a connection
* [Query](graphql/schema/query.md)
