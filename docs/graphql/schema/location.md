---
title: Location
---

A location

## Schema definition
```graphql
type Location {

  coords: Coordinates

  country: LocationCountry

  # The detected jurisdiction based on origin
  jurisdiction: String

}
```

## Fields

* **coords ([`Coordinates`](graphql/schema/coordinates.md))**


* **country ([`LocationCountry`](graphql/schema/locationcountry.md))**


* **jurisdiction ([`String`](graphql/schema/string.md))**

  The detected jurisdiction based on origin


## Required by
* [Query](graphql/schema/query.md)
