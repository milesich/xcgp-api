---
title: Country
---

A country

## Schema definition
```graphql
type Country {

  # Dial code for this country. Example: 44 for United Kingdom
  dialCode: String 

  # Country code. Example: gb for United Kingdom
  code: String 

  # Country name
  name: String 

  # An example of a phone number from this country. Example: 9696 1234 for Malta
  examplePhone: String 

  # Code for country flag.
  flag: String 

  # Default currency for this country.
  currency: String 

  # Minimum age for a player to register from this country.
  minimumAge: Int 

  # If this country is allowed to make a registration
  enabled: Boolean 

}
```
## Required by
* [CountryConnection](graphql/schema/countryconnection.md): A connection to a list of items.
* [CountryEdge](graphql/schema/countryedge.md): An edge in a connection
