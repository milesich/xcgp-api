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
## Required by
* [Query](graphql/schema/query.md)
