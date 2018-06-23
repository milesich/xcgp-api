---
id: overview
title: GraphQL Overview
sidebar_label: Overview
---

Here are some quick links to get you up and running with the GraphQL API:

* [Authentication](authentication/overview.md)
* [Root endpoint](guides/graphql/using.md#the-graphql-endpoint)
* [Schema introspection](guides/graphql/introduction.md#discovering-the-graphql-api)
* [From REST to GraphQL](guides/graphql/from-rest.md)

For support requests, bug reports, and discussions, use the [XCaliber Support Portal](https://support.xcaliber.com/). This portal allows you to collaborate with other integrators as well as engineers and product managers from XCaliber. If you need to discuss a private concern, please contact your account manager directly.

## What is GraphQL?
The [GraphQL](https://graphql.org/) data query language is:

* **A [specification](http://facebook.github.io/graphql/).** The spec determines the validity of the schema on the API server. The schema determines the validity of the client calls.
* **[Strongly typed](#about-the-graphql-schema-reference).** The schema defines an API's type system and all object relationships.
* **[Introspective](guides/graphql/introduction.md#discovering-the-graphql-api).** A client can query the schema for details about the schema.
* **[Hierarchical](guides/graphql/using.md).** The shape of a GraphQL call mirrors the shape of the JSON data it returns. Nested fields let you query for and receive only the data you specify in a single round trip.
* **An application layer.** GraphQL is not a storage model or a database query language. The *graph* refers to graph structures defined in the schema, where [nodes](TODO) define objects and [edges](TODO) define relationships between objects. The API traverses and returns application data based on the schema definitions, independent of how the data is stored.

## Why is XCaliber using GraphQL?
XCaliber chose GraphQL because it offers significantly more flexibility for our integrators. The ability to define precisely the data you want - and *only* the data you want - is a powerful advantage over the REST API endpoints. GraphQL lets you replace multiple REST requests with *a single call* to fetch the data you specify.

## About the GraphQL schema reference
The docs in the menu are generated from the XCaliber Gaming Platform GraphQL [schema](guides/graphql/introduction.md#discovering-the-graphql-api). All calls are validated and executed against the schema. Use these docs to find out what data you can call:

* Allowed operators: [queries](graphql/schema/query.md) and [mutations](graphql/schema/mutation.md).
* Schema-defined types: [scalars](graphql/scalars.md), [objects](TODO), [enums](TODO), [interfaces](TODO), [unions](TODO), and [input objects](TODO).

You can access this same content via the [Explorer](guides/graphql/explorer.md). Note that you may need to rely on both the docs and the schema validation to successfully call the GraphQL API.

For other information, such as authentication, check out the [guides](guides/graphql/overview.md).
