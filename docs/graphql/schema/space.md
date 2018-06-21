---
title: Space
---

<p>A promotion</p>


## Schema definition
```graphql
type Space implements Node {

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
* [PromoSpace](graphql/schema/promospace.md): A promo space
* [SpaceConnection](graphql/schema/spaceconnection.md): A connection to a list of items.
* [SpaceEdge](graphql/schema/spaceedge.md): An edge in a connection
