---
title: Promotion
---

A promotion

## Schema definition
```graphql
type Promotion implements Node {

  # The ID of an object
  id: ID!

  # The template used for hydration. Useful for debugging.
  template: String

  # The internal name. Useful for debugging.
  name: String

  # The URL slug. Unique per locale.
  slug: String

  activeFrom: String

  expiresAt: String

  # Example: casino
  category: String

  # Image URL of the category if category is custom.
  categoryImage: String

  # Banner URL for static image
  bannerStatic: String

  # Banner URL for HTML5 banner page
  bannerHtml5: String

  # Small bar on top left corner; ribbon
  badge: String

  # Background color
  backgroundColor: String

  # Game
  game: Game

  # Display jackpot
  showJackpot: Boolean

  # Display countdown
  showCountdown: Boolean

  titles: [String]

  descriptions: [String]

  buttons: [PromoSpaceButton]

  links: [PromoSpaceButton]

}
```

## Fields

* **id ([`ID!`](graphql/schema/id.md))**

  The ID of an object

* **template ([`String`](graphql/schema/string.md))**

  The template used for hydration. Useful for debugging.

* **name ([`String`](graphql/schema/string.md))**

  The internal name. Useful for debugging.

* **slug ([`String`](graphql/schema/string.md))**

  The URL slug. Unique per locale.

* **activeFrom ([`String`](graphql/schema/string.md))**


* **expiresAt ([`String`](graphql/schema/string.md))**


* **category ([`String`](graphql/schema/string.md))**

  Example: casino

* **categoryImage ([`String`](graphql/schema/string.md))**

  Image URL of the category if category is custom.

* **bannerStatic ([`String`](graphql/schema/string.md))**

  Banner URL for static image

* **bannerHtml5 ([`String`](graphql/schema/string.md))**

  Banner URL for HTML5 banner page

* **badge ([`String`](graphql/schema/string.md))**

  Small bar on top left corner; ribbon

* **backgroundColor ([`String`](graphql/schema/string.md))**

  Background color

* **game ([`Game`](graphql/schema/game.md))**

  Game

* **showJackpot ([`Boolean`](graphql/schema/boolean.md))**

  Display jackpot

* **showCountdown ([`Boolean`](graphql/schema/boolean.md))**

  Display countdown

* **titles ([`[String]`](graphql/schema/string.md))**


* **descriptions ([`[String]`](graphql/schema/string.md))**


* **buttons ([`[PromoSpaceButton]`](graphql/schema/promospacebutton.md))**


* **links ([`[PromoSpaceButton]`](graphql/schema/promospacebutton.md))**



## Required by
* [LobbyCategoryLayoutBlock](graphql/schema/lobbycategorylayoutblock.md): Block of games for a category layout
* [PromotionConnection](graphql/schema/promotionconnection.md): A connection to a list of items.
* [PromotionEdge](graphql/schema/promotionedge.md): An edge in a connection
* [Query](graphql/schema/query.md)
