---
title: CountryEdge
---

An edge in a connection

## Schema definition
```graphql
type CountryEdge {

  # The item at the end of the edge
  node: Country

  # A cursor for use in pagination
  cursor: String!

}
```

## Fields

* **node ([`Country`](graphql/schema/country.md))**

  The item at the end of the edge

* **cursor ([`String!`](graphql/schema/string.md))**

  A cursor for use in pagination


## Required by
* [CountryConnection](graphql/schema/countryconnection.md): A connection to a list of items.
