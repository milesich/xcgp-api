---
title: CountryConnection
---

A connection to a list of items.

## Schema definition
```graphql
type CountryConnection {

  # Information to aid in pagination.
  pageInfo: PageInfo!

  # Information to aid in pagination
  edges: [CountryEdge]

  count: Int @deprecated( reason: "Use `totalCount` instead." )

  # A count of the total number of objects in this connection, ignoring
  # pagination. This allows a client to fetch the first five objects by
  # passing "5" as the argument to "first", then fetch the total count so
  # it could display "5 of 83", for example.
  totalCount: Int

  # A list of all of the objects returned in the connection. This is a
  # convenience field provided for quickly exploring the API; rather than
  # querying for "{ edges { node } }" when no edge data is needed, this
  # field can be be used instead. Note that when clients like Relay need
  # to fetch the "cursor" field on the edge to enable efficient
  # pagination, this shortcut cannot be used, and the full "{ edges { node
  # } }" version should be used instead.
  countries: [Country]

}
```

## Fields

* **pageInfo ([`PageInfo!`](graphql/schema/pageinfo.md))**

  Information to aid in pagination.

* **edges ([`[CountryEdge]`](graphql/schema/countryedge.md))**

  Information to aid in pagination

* **count ([`Int`](graphql/schema/int.md))**


* **totalCount ([`Int`](graphql/schema/int.md))**

  A count of the total number of objects in this connection, ignoring pagination. This allows a client to fetch the first five objects by passing "5" as the argument to "first", then fetch the total count so it could display "5 of 83", for example.

* **countries ([`[Country]`](graphql/schema/country.md))**

  A list of all of the objects returned in the connection. This is a convenience field provided for quickly exploring the API; rather than querying for "{ edges { node } }" when no edge data is needed, this field can be be used instead. Note that when clients like Relay need to fetch the "cursor" field on the edge to enable efficient pagination, this shortcut cannot be used, and the full "{ edges { node } }" version should be used instead.


## Required by
* [Query](graphql/schema/query.md)
