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

## Required by
* [LobbyCategoryLayoutBlock](graphql/schema/lobbycategorylayoutblock.md): Block of games for a category layout
* [PromotionConnection](graphql/schema/promotionconnection.md): A connection to a list of items.
* [PromotionEdge](graphql/schema/promotionedge.md): An edge in a connection
* [Query](graphql/schema/query.md)
