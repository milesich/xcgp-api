---
id: using
title: Using GraphQL
sidebar_label: Using GraphQL
---

## The GraphQL endpoint
The REST API has numerous endpoints; the GraphQL API has a single endpoint:

```
https://frontapi.cherrytech.com/graphql
```

The endpoint remains constant no matter what operation you perform.

## Communicating with GraphQL
Because GraphQL operations consist of multiline JSON, XCaliber recommends using the [Explorer](guides/graphql/explorer.md) to make GraphQL calls. You can also use cURL or any other HTTP-speaking library.

In REST, [HTTP verbs](TODO) determine the operation performed. In GraphQL, you'll provide a JSON-encoded body whether you're performing a query or a mutation, so the HTTP verb is `POST`. For more information on GraphQL versus REST, see "[From REST to GraphQL](guides/graphql/from-rest.md)".

To query GraphQL using cURL, make a `POST` request with a JSON payload. The payload must contain a string called `query`:

```bash
curl -H "Content-Type: application/json" -X POST -d " \
 { \
   \"query\": \"query { jackpots { edges { node { amount } } } }\" \
 } \
" https://frontapi.cherrytech.com/graphql?brand=eurolotto
```

> **Note:** The string value of "query" must escape newline characters or the schema will not parse it correctly. For the POST body, use outer double quotes and escaped inner double quotes.

## About query and mutation operations
The two types of allowed operations in GraphQL API are *queries* and *mutations*. Comparing GraphQL to REST, queries operate like `GET` requests, while mutations operate like `POST`/`PATCH`/`DELETE`. The [mutation name](TODO) determines which modification is executed.

Queries and mutations share similar forms, with some important differences.

### About queries
GraphQL queries return only the data you specify. To form a query, you must specify [fields within fields](guides/graphql/introduction.md#field) (also known as *nested subfields*) until you return only [scalars](TODO).

Queries are structured like this:
```ts
query {
  // JSON objects to return
}
```

For a real-world example, see "[Example query](#example-query)".

### About mutations
To form a mutation, you must specify three things:
1. *Mutation name*. The type of modification you want to perform.
2. *Input object*. The data you want to send to the server, composed of *input fields*. Pass it as an argument to the mutation name.
3. *Payload object*. The data you want to return from the server, composed of *return fields*. Pass it as the body of the mutation name.

Mutations are structured like this:
```ts
mutation {
  mutationName(input: { MutationNameInput! }) {
    MutationNamePayload
  }
}
```

The input object in this example is `MutationNameInput`, and the payload object is `MutationNamePayload`.

In the [mutations](TODO) reference, the listed *input fields* are what you pass as the input object. The listed *return fields* are what you pass as the payload object.

For a real-world example, see "[Example mutation](#example-mutation)".

## Working with variables
[Variables](https://graphql.org/learn/queries/#variables) can make queries more dynamic and powerful, and they can reduce complexity when passing mutation input objects.

> **Note:** If you're using the Explorer, make sure to enter variables in the separate [Query Variables pane](TODO), and do not include the word `variables` before the JSON object.

Here's an example query with a single variable:

<sub>[Run in Explorer](../../../explorer.html?query=query(%24total%3A%20Int!)%20%7B%0A%20%20jackpots(first%3A%20%24total)%20%7B%0A%20%20%20%20edges%20%7B%0A%20%20%20%20%20%20node%20%7B%0A%20%20%20%20%20%20%20%20amount%0A%20%20%20%20%20%20%20%20currency%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D%0A&variables=%7B%0A%20%22total%22%3A%205%0A%7D)</sub>
```ts
query($total: Int!) {
  jackpots(first: $total) {
    edges {
      node {
        amount
        currency
      }
    }
  }
}

variables {
  "total": 5
}
```

There are three steps to using variables:

1. Define the variable outside the operation in a `variables` object:
    ```json
    variables {
      "total": 5
    }
    ```
	  The object must be valid JSON. This example shows a simple `Int` variable type, but it's possible to define more complex variable types, such as input objects. You can also define multiple variables here.

2. Pass the variable to the operation as an argument:
    ```ts
	  query($total: Int!) { ... }
	  ```
	  The argument is a key-value pair, where the key is the *name* starting with `$` (e.g. `$total`), and the value is the *type* (e.g. `Int`). Add a `!` to indicate whether the type is required. If you've defined multiple variables, include them here as multiple arguments.

3. Use the variables within the operation:
    ```ts
	  jackpots(first: $total) { ... }
	  ```
	  In this example, we substitute the variable for the number of jackpots to retrieve. We specify a type in step 2 because GraphQL enforces strong typing.

This process makes the query argument dynamic. We can now simply change the value in the `variables` object and keep the rest of the query the same.

Using variables as arguments lets you dynamically update values in the `variables` object without changing the query.

## Example query

TODO

## Example mutation

TODO

## Further reading
There is a *lot* more you can do when forming GraphQL calls. Here are some places to look next:
* [Pagination](https://graphql.org/learn/pagination/)
* [Fragments](https://graphql.org/learn/queries/#fragments)
* [Inline Fragments](https://graphql.org/learn/queries/#inline-fragments)
* [Directives](https://graphql.org/learn/queries/#directives)
