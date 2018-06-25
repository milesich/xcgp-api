---
title: ID
---

The `ID` scalar type represents a unique identifier, often used to
refetch an object or as key for a cache. The ID type appears in a JSON
response as a String; however, it is not intended to be human-readable.
When expected as an input type, any string (such as `"4"`) or integer
(such as `4`) input value will be accepted as an ID.

## Schema definition
```graphql
scalar ID
```

## Required by
* [Bonus](graphql/schema/bonus.md): A bonus
* [Card](graphql/schema/card.md): A card
* [Document](graphql/schema/document.md): A document
* [Feed](graphql/schema/feed.md): A feed item
* [Game](graphql/schema/game.md): A game.
* [GameSession](graphql/schema/gamesession.md): A game session
* [Limit](graphql/schema/limit.md): A limit
* [Lobby](graphql/schema/lobby.md): A lobby containing game categories.
* [LobbyCategory](graphql/schema/lobbycategory.md): A lobby category.
* [LobbyCategoryLayout](graphql/schema/lobbycategorylayout.md): Layout for a lobby category.
* [Node](graphql/schema/node.md): An object with an ID
* [Page](graphql/schema/page.md): A page
* [PaymentMethod](graphql/schema/paymentmethod.md): A payment method
* [PromoSpace](graphql/schema/promospace.md): A promo space
* [Promotion](graphql/schema/promotion.md): A promotion
* [QnaCategory](graphql/schema/qnacategory.md): A category of question and answers
* [Query](graphql/schema/query.md)
* [Seo](graphql/schema/seo.md): A search engine optimisation definition
* [Space](graphql/schema/space.md): A promotion
* [SportEvent](graphql/schema/sportevent.md): A sport event
* [Transaction](graphql/schema/transaction.md): A transaction
* [User](graphql/schema/user.md): A user
