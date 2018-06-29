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
  achievement(id: ID!): Achievement

  # Arguments
  #   after
  #   first
  #   before
  #   last
  #   achievementChainId
  #   parentAchievementId
  achievements(
    after: String,
    first: Int,
    before: String,
    last: Int,
    achievementChainId: String,
    parentAchievementId: String
  ): AchievementConnection

  # Arguments
  #   id
  achievementChain(id: ID!): AchievementChain

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
  userAchievement(id: ID!): UserAchievement

  # Arguments
  #   after
  #   first
  #   before
  #   last
  #   achievementId: Filter by achievement ID
  #   achievementChainId: Filter by achievement chain ID
  userAchievements(
    after: String,
    first: Int,
    before: String,
    last: Int,
    achievementId: String,
    achievementChainId: String
  ): UserAchievementConnection

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
  #   playerState: The player state as some games are only visible for logged-in
  # players. Example: li
  #   country: ISO 3166-1 alpha-2 country code. Some countries block games.
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
  #   playerState: The player state as some games are only visible for logged-in
  # players. Example: li
  #   groups: Comma separated list of player groups. Example: -1
  #   country: ISO 3166-1 alpha-2 country code. Some countries block games.
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

  # Look up pages.
  #
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
  #   type: The transaction type filter. Used to filter available payment methods
  # during the deposit or withdraw process.
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
  #   playerState: The player state for cache busting purposes. Example: li
  #   jurisdiction: The player jurisdiction for cache busting purposes. Example: mga
  promotion(
    id: String,
    slug: String,
    template: String,
    playerState: String,
    jurisdiction: String
  ): Promotion

  # Lookup promotions (for a given space).
  #
  # Arguments
  #   after
  #   first
  #   before
  #   last
  #   template: The template to use for metadata. Example: cd1
  #   slug: The URL slug. Example: welcome-bonus
  #   groups: Comma separated list of player groups. Example: -1
  #   playerState: The player state for cache busting purposes. Example: li
  #   jurisdiction: The player jurisdiction for cache busting purposes. Example: mga
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

  # Lookup Q&A categories.
  #
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

  # Lookup SEO entries.
  #
  # Arguments
  #   after
  #   first
  #   before
  #   last
  seos(after: String, first: Int, before: String, last: Int): SeoConnection

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
  #   after
  #   first
  #   before
  #   last
  wins(after: String, first: Int, before: String, last: Int): WinConnection

}
```

## Connections

* **achievements ([`AchievementConnection`](graphql/schema/achievementconnection.md))**

  Argument | Type | Description
  -------- | ---- | -----------
  `after` | [`String`](graphql/schema/string.md) | -
  `first` | [`Int`](graphql/schema/int.md) | -
  `before` | [`String`](graphql/schema/string.md) | -
  `last` | [`Int`](graphql/schema/int.md) | -
  `achievementChainId` | [`String`](graphql/schema/string.md) | -
  `parentAchievementId` | [`String`](graphql/schema/string.md) | -

* **achievementChains ([`AchievementChainConnection`](graphql/schema/achievementchainconnection.md))**

  Argument | Type | Description
  -------- | ---- | -----------
  `after` | [`String`](graphql/schema/string.md) | -
  `first` | [`Int`](graphql/schema/int.md) | -
  `before` | [`String`](graphql/schema/string.md) | -
  `last` | [`Int`](graphql/schema/int.md) | -
  `name` | [`String`](graphql/schema/string.md) | Filter by name
  `enabled` | [`Boolean`](graphql/schema/boolean.md) | Filter chains by if enabled or not
  `activationDate` | [`String`](graphql/schema/string.md) | Filter by activation date
  `expiryDate` | [`String`](graphql/schema/string.md) | Filter by expiration date

* **userAchievements ([`UserAchievementConnection`](graphql/schema/userachievementconnection.md))**

  Argument | Type | Description
  -------- | ---- | -----------
  `after` | [`String`](graphql/schema/string.md) | -
  `first` | [`Int`](graphql/schema/int.md) | -
  `before` | [`String`](graphql/schema/string.md) | -
  `last` | [`Int`](graphql/schema/int.md) | -
  `achievementId` | [`String`](graphql/schema/string.md) | Filter by achievement ID
  `achievementChainId` | [`String`](graphql/schema/string.md) | Filter by achievement chain ID

* **bonuses ([`BonusConnection`](graphql/schema/bonusconnection.md))**

  Argument | Type | Description
  -------- | ---- | -----------
  `after` | [`String`](graphql/schema/string.md) | -
  `first` | [`Int`](graphql/schema/int.md) | -
  `before` | [`String`](graphql/schema/string.md) | -
  `last` | [`Int`](graphql/schema/int.md) | -
  `type` | [`BonusType!`](graphql/schema/bonustype.md) | The bonus type

* **countries ([`CountryConnection`](graphql/schema/countryconnection.md))**

  Argument | Type | Description
  -------- | ---- | -----------
  `after` | [`String`](graphql/schema/string.md) | -
  `first` | [`Int`](graphql/schema/int.md) | -
  `before` | [`String`](graphql/schema/string.md) | -
  `last` | [`Int`](graphql/schema/int.md) | -
  `enabled` | [`Boolean`](graphql/schema/boolean.md) | Filter countries by if enabled or not

* **currencies ([`CurrencyConnection`](graphql/schema/currencyconnection.md))**

  Argument | Type | Description
  -------- | ---- | -----------
  `after` | [`String`](graphql/schema/string.md) | -
  `first` | [`Int`](graphql/schema/int.md) | -
  `before` | [`String`](graphql/schema/string.md) | -
  `last` | [`Int`](graphql/schema/int.md) | -
  `enabled` | [`Boolean`](graphql/schema/boolean.md) | Filter currencies by if enabled or not

* **documents ([`DocumentConnection`](graphql/schema/documentconnection.md))**

  Argument | Type | Description
  -------- | ---- | -----------
  `after` | [`String`](graphql/schema/string.md) | -
  `first` | [`Int`](graphql/schema/int.md) | -
  `before` | [`String`](graphql/schema/string.md) | -
  `last` | [`Int`](graphql/schema/int.md) | -

* **feeds ([`FeedConnection`](graphql/schema/feedconnection.md))**

  Look up feed entries.
  Argument | Type | Description
  -------- | ---- | -----------
  `after` | [`String`](graphql/schema/string.md) | -
  `first` | [`Int`](graphql/schema/int.md) | -
  `before` | [`String`](graphql/schema/string.md) | -
  `last` | [`Int`](graphql/schema/int.md) | -

* **games ([`GameConnection`](graphql/schema/gameconnection.md))**

  Argument | Type | Description
  -------- | ---- | -----------
  `after` | [`String`](graphql/schema/string.md) | -
  `first` | [`Int`](graphql/schema/int.md) | -
  `before` | [`String`](graphql/schema/string.md) | -
  `last` | [`Int`](graphql/schema/int.md) | -
  `vendor` | [`String`](graphql/schema/string.md) | Example: netent
  `enabled` | [`Boolean`](graphql/schema/boolean.md) | Filter games by if enabled or not
  `bonus` | [`Boolean`](graphql/schema/boolean.md) | Filter games by if they have a bonus or not
  `jackpot` | [`Boolean`](graphql/schema/boolean.md) | Filter games by if they have a jackpot or not
  `playerState` | [`String`](graphql/schema/string.md) | The player state as some games are only visible for logged-in players. Example: li
  `country` | [`String`](graphql/schema/string.md) | ISO 3166-1 alpha-2 country code. Some countries block games.

* **gameTags ([`GameTagConnection`](graphql/schema/gametagconnection.md))**

  Argument | Type | Description
  -------- | ---- | -----------
  `after` | [`String`](graphql/schema/string.md) | -
  `first` | [`Int`](graphql/schema/int.md) | -
  `before` | [`String`](graphql/schema/string.md) | -
  `last` | [`Int`](graphql/schema/int.md) | -

* **gameSessions ([`GameSessionConnection`](graphql/schema/gamesessionconnection.md))**

  Argument | Type | Description
  -------- | ---- | -----------
  `after` | [`String`](graphql/schema/string.md) | -
  `first` | [`Int`](graphql/schema/int.md) | -
  `before` | [`String`](graphql/schema/string.md) | -
  `last` | [`Int`](graphql/schema/int.md) | -
  `from` | [`String`](graphql/schema/string.md) | yyyy-mm-dd formatted date: 2014-10-13
  `to` | [`String`](graphql/schema/string.md) | yyyy-mm-dd formatted date: 2016-10-13

* **jackpots ([`JackpotConnection`](graphql/schema/jackpotconnection.md))**

  Argument | Type | Description
  -------- | ---- | -----------
  `after` | [`String`](graphql/schema/string.md) | -
  `first` | [`Int`](graphql/schema/int.md) | -
  `before` | [`String`](graphql/schema/string.md) | -
  `last` | [`Int`](graphql/schema/int.md) | -

* **languages ([`LanguageConnection`](graphql/schema/languageconnection.md))**

  Argument | Type | Description
  -------- | ---- | -----------
  `after` | [`String`](graphql/schema/string.md) | -
  `first` | [`Int`](graphql/schema/int.md) | -
  `before` | [`String`](graphql/schema/string.md) | -
  `last` | [`Int`](graphql/schema/int.md) | -

* **limits ([`LimitConnection`](graphql/schema/limitconnection.md))**

  Argument | Type | Description
  -------- | ---- | -----------
  `after` | [`String`](graphql/schema/string.md) | -
  `first` | [`Int`](graphql/schema/int.md) | -
  `before` | [`String`](graphql/schema/string.md) | -
  `last` | [`Int`](graphql/schema/int.md) | -

* **lobbies ([`LobbyConnection`](graphql/schema/lobbyconnection.md))**

  Argument | Type | Description
  -------- | ---- | -----------
  `after` | [`String`](graphql/schema/string.md) | -
  `first` | [`Int`](graphql/schema/int.md) | -
  `before` | [`String`](graphql/schema/string.md) | -
  `last` | [`Int`](graphql/schema/int.md) | -

* **pages ([`PageConnection`](graphql/schema/pageconnection.md))**

  Look up pages.
  Argument | Type | Description
  -------- | ---- | -----------
  `after` | [`String`](graphql/schema/string.md) | -
  `first` | [`Int`](graphql/schema/int.md) | -
  `before` | [`String`](graphql/schema/string.md) | -
  `last` | [`Int`](graphql/schema/int.md) | -
  `category` | [`String!`](graphql/schema/string.md) | -

* **paymentMethods ([`PaymentMethodConnection`](graphql/schema/paymentmethodconnection.md))**

  Argument | Type | Description
  -------- | ---- | -----------
  `after` | [`String`](graphql/schema/string.md) | -
  `first` | [`Int`](graphql/schema/int.md) | -
  `before` | [`String`](graphql/schema/string.md) | -
  `last` | [`Int`](graphql/schema/int.md) | -
  `type` | [`TransactionType!`](graphql/schema/transactiontype.md) | The transaction type filter. Used to filter available payment methods during the deposit or withdraw process.

* **promotions ([`PromotionConnection`](graphql/schema/promotionconnection.md))**

  Lookup promotions (for a given space).
  Argument | Type | Description
  -------- | ---- | -----------
  `after` | [`String`](graphql/schema/string.md) | -
  `first` | [`Int`](graphql/schema/int.md) | -
  `before` | [`String`](graphql/schema/string.md) | -
  `last` | [`Int`](graphql/schema/int.md) | -
  `template` | [`String`](graphql/schema/string.md) | The template to use for metadata. Example: cd1
  `slug` | [`String`](graphql/schema/string.md) | The URL slug. Example: welcome-bonus
  `groups` | [`String`](graphql/schema/string.md) | Comma separated list of player groups. Example: -1
  `playerState` | [`String`](graphql/schema/string.md) | The player state for cache busting purposes. Example: li
  `jurisdiction` | [`String`](graphql/schema/string.md) | The player jurisdiction for cache busting purposes. Example: mga

* **qnaCategories ([`QnaCategoryConnection`](graphql/schema/qnacategoryconnection.md))**

  Lookup Q&A categories.
  Argument | Type | Description
  -------- | ---- | -----------
  `after` | [`String`](graphql/schema/string.md) | -
  `first` | [`Int`](graphql/schema/int.md) | -
  `before` | [`String`](graphql/schema/string.md) | -
  `last` | [`Int`](graphql/schema/int.md) | -
  `section` | [`String!`](graphql/schema/string.md) | -

* **seos ([`SeoConnection`](graphql/schema/seoconnection.md))**

  Lookup SEO entries.
  Argument | Type | Description
  -------- | ---- | -----------
  `after` | [`String`](graphql/schema/string.md) | -
  `first` | [`Int`](graphql/schema/int.md) | -
  `before` | [`String`](graphql/schema/string.md) | -
  `last` | [`Int`](graphql/schema/int.md) | -

* **sportEvents ([`SportEventConnection`](graphql/schema/sporteventconnection.md))**

  Argument | Type | Description
  -------- | ---- | -----------
  `after` | [`String`](graphql/schema/string.md) | -
  `first` | [`Int`](graphql/schema/int.md) | -
  `before` | [`String`](graphql/schema/string.md) | -
  `last` | [`Int`](graphql/schema/int.md) | -
  `live` | [`Boolean`](graphql/schema/boolean.md) | -

* **transactions ([`TransactionConnection`](graphql/schema/transactionconnection.md))**

  Argument | Type | Description
  -------- | ---- | -----------
  `after` | [`String`](graphql/schema/string.md) | -
  `first` | [`Int`](graphql/schema/int.md) | -
  `before` | [`String`](graphql/schema/string.md) | -
  `last` | [`Int`](graphql/schema/int.md) | -
  `from` | [`String`](graphql/schema/string.md) | yyyy-mm-dd formatted date: 2014-10-13
  `to` | [`String`](graphql/schema/string.md) | yyyy-mm-dd formatted date: 2016-10-13

* **wins ([`WinConnection`](graphql/schema/winconnection.md))**

  Argument | Type | Description
  -------- | ---- | -----------
  `after` | [`String`](graphql/schema/string.md) | -
  `first` | [`Int`](graphql/schema/int.md) | -
  `before` | [`String`](graphql/schema/string.md) | -
  `last` | [`Int`](graphql/schema/int.md) | -


## Fields

* **node ([`Node`](graphql/schema/node.md))**

  Fetches an object given its ID
  Argument | Type | Description
  -------- | ---- | -----------
  `id` | [`ID!`](graphql/schema/id.md) | The ID of an object

* **achievement ([`Achievement`](graphql/schema/achievement.md))**

  Argument | Type | Description
  -------- | ---- | -----------
  `id` | [`ID!`](graphql/schema/id.md) | -

* **achievementChain ([`AchievementChain`](graphql/schema/achievementchain.md))**

  Argument | Type | Description
  -------- | ---- | -----------
  `id` | [`ID!`](graphql/schema/id.md) | -

* **userAchievement ([`UserAchievement`](graphql/schema/userachievement.md))**

  Argument | Type | Description
  -------- | ---- | -----------
  `id` | [`ID!`](graphql/schema/id.md) | -

* **bonus ([`Bonus`](graphql/schema/bonus.md))**

  Argument | Type | Description
  -------- | ---- | -----------
  `id` | [`ID!`](graphql/schema/id.md) | -

* **document ([`Document`](graphql/schema/document.md))**

  Argument | Type | Description
  -------- | ---- | -----------
  `id` | [`ID!`](graphql/schema/id.md) | -

* **feed ([`Feed`](graphql/schema/feed.md))**

  Argument | Type | Description
  -------- | ---- | -----------
  `id` | [`ID!`](graphql/schema/id.md) | -

* **game ([`Game`](graphql/schema/game.md))**

  Argument | Type | Description
  -------- | ---- | -----------
  `id` | [`String`](graphql/schema/string.md) | -
  `vendor_slug` | [`String`](graphql/schema/string.md) | Example: netent-starburst

* **gameSession ([`GameSession`](graphql/schema/gamesession.md))**

  Argument | Type | Description
  -------- | ---- | -----------
  `id` | [`ID!`](graphql/schema/id.md) | -

* **limit ([`Limit`](graphql/schema/limit.md))**

  Argument | Type | Description
  -------- | ---- | -----------
  `id` | [`ID!`](graphql/schema/id.md) | -

* **lobby ([`Lobby`](graphql/schema/lobby.md))**

  Argument | Type | Description
  -------- | ---- | -----------
  `id` | [`String`](graphql/schema/string.md) | -
  `slug` | [`String`](graphql/schema/string.md) | Example: casinov2
  `playerState` | [`String`](graphql/schema/string.md) | The player state as some games are only visible for logged-in players. Example: li
  `groups` | [`String`](graphql/schema/string.md) | Comma separated list of player groups. Example: -1
  `country` | [`String`](graphql/schema/string.md) | ISO 3166-1 alpha-2 country code. Some countries block games.

* **location ([`Location`](graphql/schema/location.md))**


* **page ([`Page`](graphql/schema/page.md))**

  Argument | Type | Description
  -------- | ---- | -----------
  `id` | [`ID!`](graphql/schema/id.md) | -

* **paymentMethod ([`PaymentMethod`](graphql/schema/paymentmethod.md))**

  Argument | Type | Description
  -------- | ---- | -----------
  `id` | [`ID!`](graphql/schema/id.md) | -

* **promotion ([`Promotion`](graphql/schema/promotion.md))**

  Argument | Type | Description
  -------- | ---- | -----------
  `id` | [`String`](graphql/schema/string.md) | -
  `slug` | [`String`](graphql/schema/string.md) | The URL slug. Example: welcome-bonus
  `template` | [`String`](graphql/schema/string.md) | The template to use for metadata. Example: cd1
  `playerState` | [`String`](graphql/schema/string.md) | The player state for cache busting purposes. Example: li
  `jurisdiction` | [`String`](graphql/schema/string.md) | The player jurisdiction for cache busting purposes. Example: mga

* **qnaCategory ([`QnaCategory`](graphql/schema/qnacategory.md))**

  Argument | Type | Description
  -------- | ---- | -----------
  `slug` | [`String`](graphql/schema/string.md) | Example: casino

* **seo ([`Seo`](graphql/schema/seo.md))**

  Argument | Type | Description
  -------- | ---- | -----------
  `id` | [`String`](graphql/schema/string.md) | -
  `url` | [`String`](graphql/schema/string.md) | -

* **viewer ([`User`](graphql/schema/user.md))**

  Argument | Type | Description
  -------- | ---- | -----------
  `id` | [`ID!`](graphql/schema/id.md) | -

