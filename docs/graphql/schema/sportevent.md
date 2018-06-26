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

## Fields

* **id ([`ID!`](graphql/schema/id.md))**

  The ID of an object

* **branch ([`String`](graphql/schema/string.md))**


* **league ([`String`](graphql/schema/string.md))**


* **odds ([`SportEventOdds`](graphql/schema/sporteventodds.md))**


* **participants ([`[SportEventParticipant]`](graphql/schema/sporteventparticipant.md))**


* **startsAt ([`String`](graphql/schema/string.md))**


* **timeInGame ([`String`](graphql/schema/string.md))**



## Required by
* [SportEventConnection](graphql/schema/sporteventconnection.md): A connection to a list of items.
* [SportEventEdge](graphql/schema/sporteventedge.md): An edge in a connection
