---
title: Game
---

A game.

## Schema definition
```graphql
type Game implements Node {

  # The ID of an object
  id: ID!

  # The name of the game.
  name: String!

  # The vendor of the game.
  vendor: String!

  # The background of the game.
  background: String

  # A short description of the game.
  description: String!

  # A long description of the game.
  descriptionLong: String!

  # The stakes of the game.
  gameStakes: [String]!

  # If the game has a bonus or not.
  bonus: Boolean!

  # If the game has free spins or not.
  freeSpins: Boolean!

  # The amount of lines for this game.
  lines: Int

  # The minimum bet amount for this game.
  #
  # Arguments
  #   currency: ISO 4217 Currency Code. Value changes based on currency.
  minBet(currency: String): Float

  # The maximum bet amount for this game.
  #
  # Arguments
  #   currency: ISO 4217 Currency Code. Value changes based on currency.
  maxBet(currency: String): Float

  # The price of a ticket to play if this is a lottery game
  #
  # Arguments
  #   currency: ISO 4217 Currency Code. Value changes based on currency.
  ticketPrice(currency: String): Float

  # The total jackpot amount to be won if this game has one
  #
  # Arguments
  #   currency: ISO 4217 Currency Code. Value changes based on currency.
  jackpot(currency: String): Float

  nextDraw: GameNextDraw

  lastDraw: GameLastDraw

  # ISO 4217 Currency Code of this game as a particular currency may be enforced
  currency: String!

  # The height of the game.
  height: Int!

  # The label of the game.
  label: String

  # The slug of the game.
  slug: String!

  # The thumbnail of the game.
  thumbnail: String

  # The vendor launch properties or `null` if the game can't be launched.
  #
  # Arguments
  #   return_url: The URL where you would like the user to return to upon exiting
  # the game
  #   deposit_url: The URL where you would like the user to go to deposit
  #   history_url: The URL where you would like the user to go to check the account
  # history
  vendorProperties(
    return_url: String,
    deposit_url: String,
    history_url: String
  ): JSON

  # The width of the game.
  width: Int!

  # The creation date of the game.
  createdAt: DateTime!

  # The date the game was last updated.
  updatedAt: DateTime!

  # The screenshot of the game.
  screenshot: String

  # The homepage image of the game.
  homepageImage: String!

  # Whether the game is enabled.
  enabled: Boolean!

  # The volatility of the game.
  volatility: Int!

  # The rating of the game.
  rating: Int!

  # The backgrounds of the game.
  backgrounds: [String]

  # The screenshots of the game.
  screenshots: [Screenshot]

  # The thumbnails of the game.
  thumbnails: JSON

  # The jurisdiction of the game.
  jurisdiction: String!

  # Whether the player needs to login to open the game.
  loginRequired: Boolean!

  # Whether the game is a mobile version or not
  mobile: Boolean!

  # A list of tags for filtering like "jackpot" or "netent".
  tags: [String]

}
```

## Fields

* **id ([`ID!`](graphql/schema/id.md))**

  The ID of an object

* **name ([`String!`](graphql/schema/string.md))**

  The name of the game.

* **vendor ([`String!`](graphql/schema/string.md))**

  The vendor of the game.

* **background ([`String`](graphql/schema/string.md))**

  The background of the game.

* **description ([`String!`](graphql/schema/string.md))**

  A short description of the game.

* **descriptionLong ([`String!`](graphql/schema/string.md))**

  A long description of the game.

* **gameStakes ([`[String]!`](graphql/schema/string.md))**

  The stakes of the game.

* **bonus ([`Boolean!`](graphql/schema/boolean.md))**

  If the game has a bonus or not.

* **freeSpins ([`Boolean!`](graphql/schema/boolean.md))**

  If the game has free spins or not.

* **lines ([`Int`](graphql/schema/int.md))**

  The amount of lines for this game.

* **minBet ([`Float`](graphql/schema/float.md))**

  The minimum bet amount for this game.
  Argument | Type | Description
  -------- | ---- | -----------
  `currency` | [`String`](graphql/schema/string.md) | ISO 4217 Currency Code. Value changes based on currency.

* **maxBet ([`Float`](graphql/schema/float.md))**

  The maximum bet amount for this game.
  Argument | Type | Description
  -------- | ---- | -----------
  `currency` | [`String`](graphql/schema/string.md) | ISO 4217 Currency Code. Value changes based on currency.

* **ticketPrice ([`Float`](graphql/schema/float.md))**

  The price of a ticket to play if this is a lottery game
  Argument | Type | Description
  -------- | ---- | -----------
  `currency` | [`String`](graphql/schema/string.md) | ISO 4217 Currency Code. Value changes based on currency.

* **jackpot ([`Float`](graphql/schema/float.md))**

  The total jackpot amount to be won if this game has one
  Argument | Type | Description
  -------- | ---- | -----------
  `currency` | [`String`](graphql/schema/string.md) | ISO 4217 Currency Code. Value changes based on currency.

* **nextDraw ([`GameNextDraw`](graphql/schema/gamenextdraw.md))**


* **lastDraw ([`GameLastDraw`](graphql/schema/gamelastdraw.md))**


* **currency ([`String!`](graphql/schema/string.md))**

  ISO 4217 Currency Code of this game as a particular currency may be enforced

* **height ([`Int!`](graphql/schema/int.md))**

  The height of the game.

* **label ([`String`](graphql/schema/string.md))**

  The label of the game.

* **slug ([`String!`](graphql/schema/string.md))**

  The slug of the game.

* **thumbnail ([`String`](graphql/schema/string.md))**

  The thumbnail of the game.

* **vendorProperties ([`JSON`](graphql/schema/json.md))**

  The vendor launch properties or `null` if the game can't be launched.
  Argument | Type | Description
  -------- | ---- | -----------
  `return_url` | [`String`](graphql/schema/string.md) | The URL where you would like the user to return to upon exiting the game
  `deposit_url` | [`String`](graphql/schema/string.md) | The URL where you would like the user to go to deposit
  `history_url` | [`String`](graphql/schema/string.md) | The URL where you would like the user to go to check the account history

* **width ([`Int!`](graphql/schema/int.md))**

  The width of the game.

* **createdAt ([`DateTime!`](graphql/schema/datetime.md))**

  The creation date of the game.

* **updatedAt ([`DateTime!`](graphql/schema/datetime.md))**

  The date the game was last updated.

* **screenshot ([`String`](graphql/schema/string.md))**

  The screenshot of the game.

* **homepageImage ([`String!`](graphql/schema/string.md))**

  The homepage image of the game.

* **enabled ([`Boolean!`](graphql/schema/boolean.md))**

  Whether the game is enabled.

* **volatility ([`Int!`](graphql/schema/int.md))**

  The volatility of the game.

* **rating ([`Int!`](graphql/schema/int.md))**

  The rating of the game.

* **backgrounds ([`[String]`](graphql/schema/string.md))**

  The backgrounds of the game.

* **screenshots ([`[Screenshot]`](graphql/schema/screenshot.md))**

  The screenshots of the game.

* **thumbnails ([`JSON`](graphql/schema/json.md))**

  The thumbnails of the game.

* **jurisdiction ([`String!`](graphql/schema/string.md))**

  The jurisdiction of the game.

* **loginRequired ([`Boolean!`](graphql/schema/boolean.md))**

  Whether the player needs to login to open the game.

* **mobile ([`Boolean!`](graphql/schema/boolean.md))**

  Whether the game is a mobile version or not

* **tags ([`[String]`](graphql/schema/string.md))**

  A list of tags for filtering like "jackpot" or "netent".


## Required by
* [Bonus](graphql/schema/bonus.md): A bonus
* [GameConnection](graphql/schema/gameconnection.md): A connection to a list of items.
* [GameEdge](graphql/schema/gameedge.md): An edge in a connection
* [GameSession](graphql/schema/gamesession.md): A game session
* [Jackpot](graphql/schema/jackpot.md): A jackpot
* [Lobby](graphql/schema/lobby.md): A lobby containing game categories.
* [LobbyCategoryLayoutBlock](graphql/schema/lobbycategorylayoutblock.md): Block of games for a category layout
* [Page](graphql/schema/page.md): An arbitrary piece of content with a blog-like structure. It can be used for things like blog posts, news articles, simple landing pages, user success stories, etc.
* [Promotion](graphql/schema/promotion.md): A promotion for a particular template (space). Each template needs to be requested and it can have multiple titles, descriptions, images, CTAs, etc depending on where the promotions will be shown.
* [Query](graphql/schema/query.md)
* [Win](graphql/schema/win.md): A win
