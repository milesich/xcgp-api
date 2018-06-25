---
title: SportEvent
---

A sport event

## Schema definition
```graphql
type SportEvent implements Node {

  # The ID of an object
  id: ID!

  branch: String

  league: String

  odds: SportEventOdds

  participants: [SportEventParticipant]

  startsAt: String

  timeInGame: String

}
```

## Required by
* [Query](graphql/schema/query.md)
* [SportEventConnection](graphql/schema/sporteventconnection.md): A connection to a list of items.
* [SportEventEdge](graphql/schema/sporteventedge.md): An edge in a connection
