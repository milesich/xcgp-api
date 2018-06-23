---
title: Bonus
---

A bonus

## Schema definition
```graphql
type Bonus implements Node {

  # The ID of an object
  id: ID! 

  activatedDate: String 

  activationType: String 

  amount: Float 

  balance: Float 

  # Whether this bonus can be awarded
  canAward: Boolean 

  # Content provided through the backoffice
  description: String 

  # The date in which this bonus will expire
  expiryDate: String 

  # Game that is associated with this bonus
  game: Game 

  # Link to an image uploaded through the backoffice
  image: String 

  # Example: Welcome Bonus 100%
  name: String 

  # Example: bonus_money
  reward: String 

  # Example: available, triggered, active or claimed
  status: String 

  # HTML content provided through the backoffice
  termsAndConditions: String 

  # The amount the user must wager towards this bonus to claim it
  wagerGoal: Float 

  # The amount that the user has currently wagered towards this bonus
  wagered: Float 

}
```
## Required by
* [BonusConnection](graphql/schema/bonusconnection.md): A connection to a list of items.
* [BonusEdge](graphql/schema/bonusedge.md): An edge in a connection
* [Query](graphql/schema/query.md)
