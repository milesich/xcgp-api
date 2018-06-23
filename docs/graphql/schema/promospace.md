---
title: PromoSpace
---

A promo space

## Schema definition
```graphql
type PromoSpace implements Node {

  # The ID of an object
  id: ID! 

  template: String 

  # Arguments
  #   after
  #   first
  #   before
  #   last
  spaceConnection(after: String, first: Int, before: String, last: Int): SpaceConnection 

  # Arguments
  #   slug:   slug
  space(slug: String!): Space 

}
```
## Required by
* [PromoSpaceConnection](graphql/schema/promospaceconnection.md): A connection to a list of items.
* [PromoSpaceEdge](graphql/schema/promospaceedge.md): An edge in a connection
* [Query](graphql/schema/query.md)
