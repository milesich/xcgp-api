---
title: Language
---

A locale.

## Schema definition
```graphql
type Language {

  # The locale code in BCP 47 format.
  code: String

  # The name of the locale to present to the user.
  text: String

  # The suggested currency code in ISO 4217 format.
  currency: String

}
```

## Fields

* **code ([`String`](graphql/schema/string.md))**

  The locale code in [BCP 47](https://tools.ietf.org/html/bcp47) format.

* **text ([`String`](graphql/schema/string.md))**

  The name of the locale to present to the user.

* **currency ([`String`](graphql/schema/string.md))**

  The suggested currency code in [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217) format.


## Required by
* [LanguageConnection](graphql/schema/languageconnection.md): A connection to a list of items.
* [LanguageEdge](graphql/schema/languageedge.md): An edge in a connection
