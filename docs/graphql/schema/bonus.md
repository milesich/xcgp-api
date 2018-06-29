---
title: Bonus
---

A bonus

## Schema definition
```graphql
type Bonus implements Node {

  # The ID of an object
  id: ID!

  activatedDate: DateTime

  activationType: String

  amount: Float

  balance: Float

  # Whether this bonus can be awarded
  canAward: Boolean

  # Content provided through the backoffice
  description: String

  # The date in which this bonus will expire
  expiryDate: DateTime

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

## Fields

* **id ([`ID!`](graphql/schema/id.md))**

  The ID of an object

* **activatedDate ([`DateTime`](graphql/schema/datetime.md))**


* **activationType ([`String`](graphql/schema/string.md))**


* **amount ([`Float`](graphql/schema/float.md))**


* **balance ([`Float`](graphql/schema/float.md))**


* **canAward ([`Boolean`](graphql/schema/boolean.md))**

  Whether this bonus can be awarded

* **description ([`String`](graphql/schema/string.md))**

  Content provided through the backoffice

* **expiryDate ([`DateTime`](graphql/schema/datetime.md))**

  The date in which this bonus will expire

* **game ([`Game`](graphql/schema/game.md))**

  Game that is associated with this bonus

* **image ([`String`](graphql/schema/string.md))**

  Link to an image uploaded through the backoffice

* **name ([`String`](graphql/schema/string.md))**

  Example: Welcome Bonus 100%

* **reward ([`String`](graphql/schema/string.md))**

  Example: bonus_money

* **status ([`String`](graphql/schema/string.md))**

  Example: available, triggered, active or claimed

* **termsAndConditions ([`String`](graphql/schema/string.md))**

  HTML content provided through the backoffice

* **wagerGoal ([`Float`](graphql/schema/float.md))**

  The amount the user must wager towards this bonus to claim it

* **wagered ([`Float`](graphql/schema/float.md))**

  The amount that the user has currently wagered towards this bonus


## Required by
* [BonusConnection](graphql/schema/bonusconnection.md): A connection to a list of items.
* [BonusEdge](graphql/schema/bonusedge.md): An edge in a connection
* [Query](graphql/schema/query.md)
