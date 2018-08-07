---
title: PageInfo
---

Information about pagination in a connection.

## Schema definition
```graphql
type PageInfo {

  # When paginating forwards, are there more items?
  hasNextPage: Boolean!

  # When paginating backwards, are there more items?
  hasPreviousPage: Boolean!

  # When paginating backwards, the cursor to continue.
  startCursor: String

  # When paginating forwards, the cursor to continue.
  endCursor: String

}
```

## Fields

* **hasNextPage ([`Boolean!`](graphql/schema/boolean.md))**

  When paginating forwards, are there more items?

* **hasPreviousPage ([`Boolean!`](graphql/schema/boolean.md))**

  When paginating backwards, are there more items?

* **startCursor ([`String`](graphql/schema/string.md))**

  When paginating backwards, the cursor to continue.

* **endCursor ([`String`](graphql/schema/string.md))**

  When paginating forwards, the cursor to continue.


## Required by
* [AchievementChainConnection](graphql/schema/achievementchainconnection.md): A connection to a list of items.
* [AchievementConnection](graphql/schema/achievementconnection.md): A connection to a list of items.
* [BonusConnection](graphql/schema/bonusconnection.md): A connection to a list of items.
* [CountryConnection](graphql/schema/countryconnection.md): A connection to a list of items.
* [CurrencyConnection](graphql/schema/currencyconnection.md): A connection to a list of items.
* [DocumentConnection](graphql/schema/documentconnection.md): A connection to a list of items.
* [FeedConnection](graphql/schema/feedconnection.md): A connection to a list of items.
* [GameConnection](graphql/schema/gameconnection.md): A connection to a list of items.
* [GameSessionConnection](graphql/schema/gamesessionconnection.md): A connection to a list of items.
* [GameTagConnection](graphql/schema/gametagconnection.md): A connection to a list of items.
* [JackpotConnection](graphql/schema/jackpotconnection.md): A connection to a list of items.
* [LanguageConnection](graphql/schema/languageconnection.md): A connection to a list of items.
* [LimitConnection](graphql/schema/limitconnection.md): A connection to a list of items.
* [LobbyBlockConnection](graphql/schema/lobbyblockconnection.md): A connection to a list of items.
* [LobbyCategoryConnection](graphql/schema/lobbycategoryconnection.md): A connection to a list of items.
* [LobbyCategoryLayoutConnection](graphql/schema/lobbycategorylayoutconnection.md): A connection to a list of items.
* [LobbyConnection](graphql/schema/lobbyconnection.md): A connection to a list of items.
* [PageConnection](graphql/schema/pageconnection.md): A connection to a list of items.
* [PaymentMethodConnection](graphql/schema/paymentmethodconnection.md): A connection to a list of items.
* [PromotionConnection](graphql/schema/promotionconnection.md): A connection to a list of items.
* [QnaCategoryConnection](graphql/schema/qnacategoryconnection.md): A connection to a list of items.
* [SeoConnection](graphql/schema/seoconnection.md): A connection to a list of items.
* [SportEventConnection](graphql/schema/sporteventconnection.md): A connection to a list of items.
* [TransactionConnection](graphql/schema/transactionconnection.md): A connection to a list of items.
* [UserAchievementConnection](graphql/schema/userachievementconnection.md): A connection to a list of items.
* [WinConnection](graphql/schema/winconnection.md): A connection to a list of items.
