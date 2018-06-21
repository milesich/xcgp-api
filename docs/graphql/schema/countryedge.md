---
title: CountryEdge
---

<p>An edge in a connection</p>


## Schema definition
```graphql
type CountryEdge {

  # The item at the end of the edge
  node: Country 

  # A cursor for use in pagination
  cursor: String! 

}
```
## Required by
* [CountryConnection](graphql/schema/countryconnection.md): A connection to a list of items.
