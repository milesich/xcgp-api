---
title: __Directive
---

<p>A Directive provides a way to describe alternate runtime execution and type validation behavior in a GraphQL document.</p>
<p>In some cases, you need to provide options to alter GraphQL&#39;s execution behavior in ways field arguments will not suffice, such as conditionally including or skipping a field. Directives provide this by describing additional information to the executor.</p>


## Schema definition
```graphql
type __Directive {

  name: String! 

  description: String 

  locations: [__DirectiveLocation!]! 

  args: [__InputValue!]! 

  onOperation: Boolean! @deprecated( reason: "Use `locations`." )

  onFragment: Boolean! @deprecated( reason: "Use `locations`." )

  onField: Boolean! @deprecated( reason: "Use `locations`." )

}
```
## Required by
* [__Schema](graphql/schema/__schema.md): A GraphQL Schema defines the capabilities of a GraphQL server. It exposes all available types and directives on the server, as well as the entry points for query, mutation, and subscription operations.
