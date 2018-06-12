---
id: explorer
title: Using the Explorer
sidebar_label: Using the Explorer
---

## About the Explorer
[GraphQL Explorer](../../../explorer.html) is an instance of [GraphiQL](https://github.com/graphql/graphiql), which is a "graphical interactive in-browser GraphQL IDE."

### Run in Explorer
Above some GraphQL query samples, you may see a link that says "Run in Explorer". Click the link and you'll go to the Explorer window with the query sample already filled in.

<sub>[Run in Explorer](../../../explorer.html?query=query%20%7B%0A%20%20jackpots(first%3A%201)%20%7B%0A%20%20%20%20edges%20%7B%0A%20%20%20%20%20%20node%20%7B%0A%20%20%20%20%20%20%20%20amount%0A%20%20%20%20%20%20%20%20currency%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D)</sub>
```ts
query {
  jackpots(first: 1) {
    edges {
      node {
        amount
        currency
      }
    }
  }
}
```

You should see a response like the following:
```json
{
  "data": {
    "jackpots": {
      "edges": [
        {
          "node": {
            "amount": 9001.00,
            "currency": "EUR"
          }
        }
      ]
    }
  }
}
```

## Using GraphiQL
To use the GraphiQL app, download and install it from https://github.com/skevy/graphiql-app.

## Configuring GraphiQL
1. Launch GraphiQL.
2. In the **GraphQL Endpoint** field, enter `https://frontapi.cherrytech.com?brand=eurolotto`.
3. In the **Method** dropdown menu, select `POST`.

> Note: For more information about why `POST` is the method, see "[Communicating with GraphQL](guides/graphql/using.md#communicating-with-graphql)".

## Accessing the sidebar docs
All types in a GraphQL schema include a `description` field compiled into documentation. The collapsible **Docs** pane on the right side of the Explorer page allows you to browse documentation about the type system. The docs are automatically updated and will drop deprecated fields.

> The **Docs** sidebar contains the same content that is automatically generated from the schema under "[Reference](../../..)", though it is formatted differently in places.

## Using the variable pane
Some example calls include [variables](guides/graphql/using.md#working-with-variables) written like this:

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

This is the correct format to submit the call via a cURL `POST` (as long as you [escape newlines](guides/graphql/using.md#communicating-with-graphql)).

If you want to run the call in the Explorer, enter the `query` segment in the main pane and the variables in the **Query Variables** pane below it. Omit the word `variables` from the Explorer:
```json
{
  "total": 5
}
```

## Troubleshooting errors
Because GraphQL is [introspective](guides/graphql/introduction.md#discovering-the-graphql-api), the Explorer supports:
* Intelligent typeaheads aware of the current schema
* Validation error previews as you type

If you enter a query that is not well-formed or does not pass [schema validation](guides/graphql/introduction.md#schema), a popup warns you of an error. If you run the query, the error returns in the response pane.

A GraphQL response contains several keys: an optional `data` object and an `errors` array.
```json
{
  "errors": [
    {
      "message": "Argument \"input\" has invalid value {mobileCode: \"356\"}.\nIn field \"mobileCode\": Expected type \"Int\", found \"356\".",
      "category": "graphql",
      "locations": [
        {
          "line": 2,
          "column": 20
        }
      ]
    }
  ]
}
```

It's possible you might run into an unexpected error that is not related to the schema. If this happens, use the [XCaliber Support Portal](https://support.xcaliber.com/) to report an issue.

> **Note:** XCaliber recommends checking for errors before using data in a production environment. In GraphQL, failure is not total: portions of GraphQL queries may succeed while others fail.
