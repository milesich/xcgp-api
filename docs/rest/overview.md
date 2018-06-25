---
title: Overview
---

This describes the resources that make up the official XCaliber Gaming Platform REST API. If you have any problems or requests please contact [XCaliber support](https://support.xcaliber.com/).

> **Note:** XCaliber is in the process of deprecating the REST API and we strongly recommend that you use the [GraphQL API](graphql/overview.md). We are doing our best to have feature parity between both so that people have a smooth transition.

## HTTP verbs

Where possible, the API strives to use appropriate HTTP verbs for each action.

Verb     | Description
-------- | -----------
`GET`    | Used for retrieving resources.
`POST`   | Used for creating resources.
`PATCH`  | Used for updating resources with partial data. A `PATCH` request may accept one or more of the attributes to update the resource.
`PUT`    | Used for replacing resources or collections. (This verb is currently not used.)
`DELETE` | Used for deleting resources.
