---
title: PromoSpaceButton
---

A promo space button

## Schema definition
```graphql
type PromoSpaceButton {

  name: String 

  color: String 

  action: String 

  # JSON object containing parameters like "id" and "url"
  actionParams: JSON 

}
```
## Required by
* [Promotion](graphql/schema/promotion.md): A promotion
* [Space](graphql/schema/space.md): A promotion
