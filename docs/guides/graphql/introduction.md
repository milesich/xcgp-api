---
id: introduction
title: Introduction to GraphQL
sidebar_label: Introduction
---

## GraphQL terminology
You will likely encounter some new terminology in the [reference docs](graphql/overview.md).

### Schema
A schema defines a GraphQL API's type system. It describes the complete set of possible data (objects, fields, relationships, everything) that a client can access. Calls from the client are [validated](https://graphql.org/learn/validation/) and [executed](https://graphql.org/learn/execution/) against the schema. A client can find information about the schema via [introspection](#discovering-the-graphql-api). A schema resides on the GraphQL API server.

### Field
A field is a unit of data you can retrieve from an object. As the [official GraphQL docs](https://graphql.org/learn/schema/) say: "The GraphQL query language is basically about selecting fields on objects."

The [official spec](https://facebook.github.io/graphql/draft/#sec-Language.Fields) also says about fields:

> All GraphQL operations must specify their selections down to fields which return scalar values to ensure an unambiguously shaped response.

This means that if you try to return a field that is not a scalar, schema validation will throw an error. You must add nested subfields until all fields return scalars.

### Argument
An argument is a set of key-value pairs attached to a specific field. Some fields require an argument. [Mutations](guides/graphql/using.md#about-mutations) require an input object as an argument.

### Implementation
A GraphQL schema may use the term *implements* to define how an object inherits from an [interface](graphql/schema/interfaces.md).

Here's a contrived example of a schema that defines interface `X` and object `Y`:

```graphql
interface X {
  some_field: String!
  other_field: String!
}

type Y implements X {
  some_field: String!
  other_field: String!
  new_field: String!
}
```

This means object `Y` requires the same fields/arguments/return types that interface `X` does, while adding new fields specific to object `Y`. (The `!` means the field is required.)

In the reference docs, you'll find that:
* Each [object](graphql/schema/objects.md) lists the interface(s) *from which it inherits* under **Implements**.
* Each [interface](graphql/schema/interfaces.md) lists the objects *that inherit from it* under **Implementations**.

### Connection
Connections let you query related objects as part of the same call. With connections, you can use a single GraphQL call where you would have to use multiple calls to a REST API. For more information, see "[From REST to GraphQL](guides/graphql/from-rest.md)".

It's helpful to picture a graph: dots connected by lines. The dots are nodes, the lines are edges. A connection defines a relationship between nodes.

### Edge
Edges represent connections between nodes. When you query a connection, you traverse its edges to get to its nodes. Every `edges` field has a `node` field and a `cursor` field. Cursors are used for [pagination](https://graphql.org/learn/pagination/).

### Node
*Node* is a generic term for an object. You can look up a node directly, or you can access related nodes via a connection. If you specify a `node` that does not return a [scalar](graphql/scalar.md), you must include subfields until all fields return scalars.

## Discovering the GraphQL API
GraphQL is [introspective](https://graphql.org/learn/introspection/). This means you can query a GraphQL schema for details about itself.

* Query `__schema` to list all types defined in the schema and get details about each:
	<sub>[Run in Explorer](../../../explorer.html?query=query%20%7B%0A%20%20__schema%20%7B%0A%20%20%20%20types%20%7B%0A%20%20%20%20%20%20name%0A%20%20%20%20%20%20kind%0A%20%20%20%20%20%20description%0A%20%20%20%20%20%20fields%20%7B%0A%20%20%20%20%20%20%20%20name%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D)</sub>
  ```graphql
  query {
    __schema {
      types {
        name
        kind
        description
        fields {
          name
        }
      }
    }
  }
  ```

* Query `__type` to get details about any type:
	<sub>[Run in Explorer](../../../explorer.html?query=query%20%7B%0A%20%20__type(name%3A%20"Game")%20%7B%0A%20%20%20%20name%0A%20%20%20%20kind%0A%20%20%20%20description%0A%20%20%20%20fields%20%7B%0A%20%20%20%20%20%20name%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D)</sub>
  ```graphql
  query {
    __type(name: "Game") {
      name
      kind
      description
      fields {
        name
      }
    }
  }
  ```

For more information about performing queries, see "[Using GraphQL](guides/graphql/using.md)".
