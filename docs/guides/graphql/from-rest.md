---
id: from-rest
title: From REST to GraphQL
sidebar_label: REST to GraphQL
---

## Differences in API logic
REST to GraphQL represents a significant shift in API logic. The differences between REST as a style and GraphQL as a specification make it difficult - and often undesirable - to replace REST API calls with GraphQL API queries on a one to one basis.

To better understand the difference between a REST API and a GraphQL API:

* Review the [GraphQL spec](https://facebook.github.io/graphql/)
* Review our [GraphQL schema](graphql-schema.md)

Significant advantages of GraphQL include:

* [Getting the data you need and nothing more](#getting-the-data-you-need-and-nothing-more)
* [Strong typing](#strong-typing)

Here are examples of each.

## Getting the data you need and nothing more
A single REST API call retrieves a list of your casino's jackpots:

```
curl https://frontapi.cherrytech.com/v1/jackpots?brand=eurolotto
```

The REST payload contains excessive data if your goal is to retrieve only jackpot game names and amounts. However, a GraphQL query returns only what you specify:

<sub>[Run in Explorer](../../../explorer.html?query=query%20%7B%0A%20%20jackpots(first%3A%2010)%20%7B%0A%20%20%20%20edges%20%7B%0A%20%20%20%20%20%20node%20%7B%0A%20%20%20%20%20%20%20%20amount%0A%20%20%20%20%20%20%20%20game%20%7B%0A%20%20%20%20%20%20%20%20%20%20name%0A%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D)</sub>
```ts
query {
  jackpots(first: 10) {
    edges {
      node {
        amount
        game {
          name
        }
      }
    }
  }
}
```

## Strong typing
GraphQL schemas are strongly typed, making data handling safer.

Consider an example of updating an user mobile code using a GraphQL [mutation](TODO), and mistakenly specifying a string rather than an integer for the value of `mobileCode`:

<sub>[Run in Explorer](../../../explorer.html?query=mutation%20%7B%0A%20%20updateUser(input%3A%20%7B%20mobileCode%3A%20"356"%20%7D)%20%7B%0A%20%20user%20%7B%0A%20%20%20%20id%0A%20%20%20%20mobileCode%0A%20%20%20%20mobileNumber%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D)</sub>
```ts
mutation {
  updateUser(input: { mobileCode: "356" }) {
  user {
    id
    mobileCode
    mobileNumber
    }
  }
}
```

Executing this query returns errors specifying the expected types for the operation:

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

Removing the quotes from `"356"` transforms the value from a string into an integer, the expected type:

<sub>[Run in Explorer](../../../explorer.html?query=mutation%20%7B%0A%20%20updateUser(input%3A%20%7B%20mobileCode%3A%20356%20%7D)%20%7B%0A%20%20user%20%7B%0A%20%20%20%20id%0A%20%20%20%20mobileCode%0A%20%20%20%20mobileNumber%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D)</sub>
```ts
mutation {
  updateUser(input: { mobileCode: 356 }) {
  user {
    id
    mobileCode
    mobileNumber
    }
  }
}
```
