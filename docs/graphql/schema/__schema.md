---
title: __Schema
---

A GraphQL Schema defines the capabilities of a GraphQL server. It exposes all available types and directives on the server, as well as the entry points for query, mutation, and subscription operations.

## Schema definition
```graphql
type __Schema {

  # A list of all types supported by this server.
  types: [__Type!]!

  # The type that query operations will be rooted at.
  queryType: __Type!

  # If this server supports mutation, the type that mutation operations will be
  # rooted at.
  mutationType: __Type

  # If this server support subscription, the type that subscription operations will
  # be rooted at.
  subscriptionType: __Type

  # A list of all directives supported by this server.
  directives: [__Directive!]!

}
```

## Fields

* **types ([`[__Type!]!`](graphql/schema/__type.md))**

  A list of all types supported by this server.

* **queryType ([`__Type!`](graphql/schema/__type.md))**

  The type that query operations will be rooted at.

* **mutationType ([`__Type`](graphql/schema/__type.md))**

  If this server supports mutation, the type that mutation operations will be rooted at.

* **subscriptionType ([`__Type`](graphql/schema/__type.md))**

  If this server support subscription, the type that subscription operations will be rooted at.

* **directives ([`[__Directive!]!`](graphql/schema/__directive.md))**

  A list of all directives supported by this server.

