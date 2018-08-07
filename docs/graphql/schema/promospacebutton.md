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
  actionParams: Object

}
```

## Fields

* **name ([`String`](graphql/schema/string.md))**


* **color ([`String`](graphql/schema/string.md))**


* **action ([`String`](graphql/schema/string.md))**


* **actionParams ([`Object`](graphql/schema/object.md))**

  JSON object containing parameters like "id" and "url"


## Required by
* [Promotion](graphql/schema/promotion.md): A promotion for a particular template (space). Each template needs to be requested and it can have multiple titles, descriptions, images, CTAs, etc depending on where the promotions will be shown.
