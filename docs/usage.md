---
id: usage
title: Usage
sidebar_label: Usage
---

XCaliber Gaming Platform API needs to be used in a certain way either to actually work, or to take advantage of certain features like caching.

## Query parameters
Every API call requires having the following query parameters:

Parameter | Description | Example
--------- | ----------- | -------
`brand`   | The brand code provided during the brand setup concatenated with a dot and the device type.<br>Two device types are currently supported: desktop and mobile. | `xcasino.mobile`
`locale`  | The locale that the user chose to browse the application in (In the format of [BCP 47](https://tools.ietf.org/html/bcp47)).<br>It is the application responsibility to manage the user locale selection and persistence. | `ja`

## Authentication
If a user is authenticated then it is also necessary to send the *[Authorization](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Authorization)* header with a Bearer token type and the [OAuth2](https://oauth.net/2/) access token generated during authentication.

## Caching
If your application wants to take advantage of HTTP and reverse proxy caching then it must send the GraphQL queries using the `GET` method instead of `POST`.

The only exception is authenticated queries like the user balance because, obviously, those can't be cached.

XCaliber is responsible for configuring the reverse proxy caching but both partners need to work together to achieve maximum performance.
