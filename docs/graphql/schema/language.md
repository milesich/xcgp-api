---
title: Language
---

A language

## Schema definition
```graphql
type Language {

  # Dial code for this country. Example: 44 for United Kingdom
  code: String 

  # Country code. Example: gb for United Kingdom
  text: String 

  # Country name
  currency: String 

  # An example of a phone number from this country. Example: 9696 1234 for
  # Malta
  supportSkill: String 

  # Code for country flag.
  supportSurveyName: String 

}
```

## Required by
* [LanguageConnection](graphql/schema/languageconnection.md): A connection to a list of items.
* [LanguageEdge](graphql/schema/languageedge.md): An edge in a connection
