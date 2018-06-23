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
  gameStakes: [String] 

  # If the game has a bonus or not.
  bonus: Boolean! 

  # If the game has free spins or not.
  freeSpins: Boolean! 

  # The amount of lines for this game.
  lines: Int 

  # The minimum bet amount for this game.
  #
  # Arguments
  #   currency:   currency
  minBet(currency: String): Float 

  # The maximum bet amount for this game.
  #
  # Arguments
  #   currency:   currency
  maxBet(currency: String): Float 

  # The price of a ticket to play if this is a lottery game
  #
  # Arguments
  #   currency:   currency
  ticketPrice(currency: String): Float 

  # The total jackpot amount to be won if this game has one
  #
  # Arguments
  #   currency:   currency
  jackpot(currency: String): Float 

  nextDraw: GameNextDraw 

  lastDraw: GameLastDraw 

  # ISO 4217 Currency Code of this game as a particular currency may be
  # enforced
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
  #   return_url:   return_url
  #   deposit_url:   deposit_url
  #   history_url:   history_url
  vendorProperties(
    return_url: String,
    deposit_url: String,
    history_url: String
  ): JSON 

  # The width of the game.
  width: Int! 

  # The creation date of the game.
  createdAt: String! 

  # The date the game was last updated.
  updatedAt: String! 

  # The screenshot of the game.
  screenshot: String 

  # The homepage image of the game.
  homepageImage: String 

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

  # A list of tags for filtering like "jackpot" or "netent"
  tags: [String] 

}
```

## Required by
* [Banner](graphql/schema/banner.md): A banner
* [Bonus](graphql/schema/bonus.md): A bonus
* [GameConnection](graphql/schema/gameconnection.md): A connection to a list of items.
* [GameEdge](graphql/schema/gameedge.md): An edge in a connection
* [GameSession](graphql/schema/gamesession.md): A game session
* [Jackpot](graphql/schema/jackpot.md): A jackpot
* [Lobby](graphql/schema/lobby.md): A lobby containing game categories.
* [LobbyCategoryLayoutBlock](graphql/schema/lobbycategorylayoutblock.md): Block of games for a category layout
* [Page](graphql/schema/page.md): A page
* [Promotion](graphql/schema/promotion.md): A promotion
* [Query](graphql/schema/query.md)
* [Space](graphql/schema/space.md): A promotion
* [Win](graphql/schema/win.md): A win
