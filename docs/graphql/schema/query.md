---
title: Query
---

Every GraphQL schema has a root type for both queries and mutations. The [query type](https://facebook.github.io/graphql/draft/#sec-Type-System) defines GraphQL operations that retrieve data from the server.

For more information, see "[About queries](guides/graphql/using.md#about-queries)".


## Schema definition
```graphql
type Query {

  # Fetches an object given its ID
  #
  # Arguments
  #   id: The ID of an object
  node(id: ID!): Node

  # Arguments
  #   id
  achievement(id: String): Achievement

  # Arguments
  #   after
  #   first
  #   before
  #   last
  #   id
  #   achievementChainId
  achievements(
    after: String,
    first: Int,
    before: String,
    last: Int,
    id: String,
    achievementChainId: String
  ): AchievementConnection

  # Arguments
  #   id
  achievementChain(id: String): AchievementChain

  # Arguments
  #   after
  #   first
  #   before
  #   last
  #   name: Filter by name
  #   enabled: Filter chains by if enabled or not
  #   activationDate: Filter by activation date
  #   expiryDate: Filter by expiration date
  achievementChains(
    after: String,
    first: Int,
    before: String,
    last: Int,
    name: String,
    enabled: Boolean,
    activationDate: String,
    expiryDate: String
  ): AchievementChainConnection

  # Arguments
  #   id
  bonus(id: ID!): Bonus

  # Arguments
  #   after
  #   first
  #   before
  #   last
  #   type: The bonus type
  bonuses(
    after: String,
    first: Int,
    before: String,
    last: Int,
    type: BonusType!
  ): BonusConnection

  # Arguments
  #   after
  #   first
  #   before
  #   last
  #   enabled: Filter countries by if enabled or not
  countries(
    after: String,
    first: Int,
    before: String,
    last: Int,
    enabled: Boolean
  ): CountryConnection

  # Arguments
  #   after
  #   first
  #   before
  #   last
  #   enabled: Filter currencies by if enabled or not
  currencies(
    after: String,
    first: Int,
    before: String,
    last: Int,
    enabled: Boolean
  ): CurrencyConnection

  # Arguments
  #   id
  document(id: ID!): Document

  # Arguments
  #   after
  #   first
  #   before
  #   last
  documents(after: String, first: Int, before: String, last: Int): DocumentConnection

  # Arguments
  #   id
  feed(id: ID!): Feed

  # Look up feed entries.
  #
  # Arguments
  #   after
  #   first
  #   before
  #   last
  feeds(after: String, first: Int, before: String, last: Int): FeedConnection

  # Arguments
  #   id
  #   vendor_slug: Example: netent-starburst
  game(id: String, vendor_slug: String): Game

  # Arguments
  #   after
  #   first
  #   before
  #   last
  #   vendor: Example: netent
  #   enabled: Filter games by if enabled or not
  #   bonus: Filter games by if they have a bonus or not
  #   jackpot: Filter games by if they have a jackpot or not
  #   playerState: The player state as some games are only visible for
  # logged-in players. Example: li
  #   country: ISO 3166-1 alpha-2 country code. Some countries block
  # games.
  games(
    after: String,
    first: Int,
    before: String,
    last: Int,
    vendor: String,
    enabled: Boolean,
    bonus: Boolean,
    jackpot: Boolean,
    playerState: String,
    country: String
  ): GameConnection

  # Arguments
  #   after
  #   first
  #   before
  #   last
  gameTags(after: String, first: Int, before: String, last: Int): GameTagConnection

  # Arguments
  #   id
  gameSession(id: ID!): GameSession

  # Arguments
  #   after
  #   first
  #   before
  #   last
  #   from: yyyy-mm-dd formatted date: 2014-10-13
  #   to: yyyy-mm-dd formatted date: 2016-10-13
  gameSessions(
    after: String,
    first: Int,
    before: String,
    last: Int,
    from: String,
    to: String
  ): GameSessionConnection

  # Arguments
  #   id
  jackpot(id: ID!): Jackpot

  # Arguments
  #   after
  #   first
  #   before
  #   last
  jackpots(after: String, first: Int, before: String, last: Int): JackpotConnection

  # Arguments
  #   after
  #   first
  #   before
  #   last
  languages(after: String, first: Int, before: String, last: Int): LanguageConnection

  # Arguments
  #   id
  limit(id: ID!): Limit

  # Arguments
  #   after
  #   first
  #   before
  #   last
  limits(after: String, first: Int, before: String, last: Int): LimitConnection

  # Arguments
  #   id
  #   slug: Example: casinov2
  #   playerState: The player state as some games are only visible for
  # logged-in players. Example: li
  #   groups: Comma separated list of player groups. Example: -1
  #   country: ISO 3166-1 alpha-2 country code. Some countries block
  # games.
  lobby(
    id: String,
    slug: String,
    playerState: String,
    groups: String,
    country: String
  ): Lobby

  # Arguments
  #   after
  #   first
  #   before
  #   last
  lobbies(after: String, first: Int, before: String, last: Int): LobbyConnection

  location: Location

  # Arguments
  #   id
  page(id: ID!): Page

  # Arguments
  #   after
  #   first
  #   before
  #   last
  #   category
  pages(
    after: String,
    first: Int,
    before: String,
    last: Int,
    category: String!
  ): PageConnection

  # Arguments
  #   id
  paymentMethod(id: ID!): PaymentMethod

  # Arguments
  #   after
  #   first
  #   before
  #   last
  #   type: The transaction type filter. Used to filter available payment
  # methods during the deposit or withdraw process.
  paymentMethods(
    after: String,
    first: Int,
    before: String,
    last: Int,
    type: TransactionType!
  ): PaymentMethodConnection

  # Arguments
  #   id
  #   slug: The URL slug. Example: welcome-bonus
  #   template: The template to use for metadata. Example: cd1
  #   playerState: The player state for cache busting purposes. Example:
  # li
  #   jurisdiction: The player jurisdiction for cache busting purposes.
  # Example: mga
  promotion(
    id: String,
    slug: String,
    template: String,
    playerState: String,
    jurisdiction: String
  ): Promotion

  # Arguments
  #   after
  #   first
  #   before
  #   last
  #   template: The template to use for metadata. Example: cd1
  #   slug: The URL slug. Example: welcome-bonus
  #   groups: Comma separated list of player groups. Example: -1
  #   playerState: The player state for cache busting purposes. Example:
  # li
  #   jurisdiction: The player jurisdiction for cache busting purposes.
  # Example: mga
  promotions(
    after: String,
    first: Int,
    before: String,
    last: Int,
    template: String,
    slug: String,
    groups: String,
    playerState: String,
    jurisdiction: String
  ): PromotionConnection

  # Arguments
  #   slug: Example: casino
  qnaCategory(slug: String): QnaCategory

  # Arguments
  #   after
  #   first
  #   before
  #   last
  #   section
  qnaCategories(
    after: String,
    first: Int,
    before: String,
    last: Int,
    section: String!
  ): QnaCategoryConnection

  # Arguments
  #   id
  #   url
  seo(id: String, url: String): Seo

  # Arguments
  #   after
  #   first
  #   before
  #   last
  seos(after: String, first: Int, before: String, last: Int): SeoConnection

  # Arguments
  #   id
  sportEvent(id: ID!): SportEvent

  # Arguments
  #   after
  #   first
  #   before
  #   last
  #   live
  sportEvents(
    after: String,
    first: Int,
    before: String,
    last: Int,
    live: Boolean
  ): SportEventConnection

  # Arguments
  #   id
  transaction(id: ID!): Transaction

  # Arguments
  #   after
  #   first
  #   before
  #   last
  #   from: yyyy-mm-dd formatted date: 2014-10-13
  #   to: yyyy-mm-dd formatted date: 2016-10-13
  transactions(
    after: String,
    first: Int,
    before: String,
    last: Int,
    from: String,
    to: String
  ): TransactionConnection

  # Arguments
  #   id
  viewer(id: ID!): User

  # Arguments
  #   id
  win(id: ID!): Win

  # Arguments
  #   after
  #   first
  #   before
  #   last
  wins(after: String, first: Int, before: String, last: Int): WinConnection

}
```

## Required by
This element is not required by anyone.
