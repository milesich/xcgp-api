---
title: PromoSpaceButton
---

<p>A promo space button</p>


## Schema definition
```graphql
type PromoSpaceButton {

  name: String 

  color: String 

  action: String 

  # JSON object containing parameters like &quot;id&quot; and &quot;url&quot;
  actionParams: JSON 

}
```
## Required by
* [Promotion](graphql/schema/promotion.md): A promotion
* [Space](graphql/schema/space.md): A promotion
