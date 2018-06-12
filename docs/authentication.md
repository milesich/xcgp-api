---
id: authentication
title: Authentication
sidebar_label: Authentication
---

XCaliber Gaming Platform API uses the OAuth2 standard for authentication and it implements some extensions to it to accomodate some advanced scenarios.

## Request and response fields
Refer to this section for an explanation of the request and response fields used in the following sections.

Field           | Description | Example
--------------- | ----------- | -------
`client_id`     | The client id for this request. This is the brand code given during the brand setup. | `xcasino`
`username`      | The username of the user.<br>Currently, email, nickname and mobile_number are allowed usernames depending on the brand configuration. | `xcgp@xcaliber.io`
`access_token`  | The access token to be used for authenticated requests. | `e86a6...`
`refresh_token` | The refresh token to be used for refreshing the current session. | `b098e...`
`expires_in`    | The expiration time in seconds for the access token. A refresh grant needs to be requested using this token to keep the session alive.<br>It's the responsibility of the application to make sure the session is refreshed before it expires. | `1800`
`identity`      | This is an extension to the OAuth2 specification to save one round-trip to fetch the user information. | `{ ... }`

## Start a session
To start a session the application needs to request a password grant to the OAuth endpoint like such:

```
POST /oauth
```

OAuth2 Password Grant Request:
```json
{
  "grant_type": "password",
  "client_id": "<brand>",
  "username": "<username>",
  "password": "<password>"
}
```

OAuth2 Password Grant Response:
```json
{
  "access_token": "e86a62a701be498455d09a792ff673949cfd160b",
  "expires_in": 1800,
  "token_type": "Bearer",
  "scope": null,
  "refresh_token": "b098eaf9d4d081222f28ca7eb674f1b26714b06f",
  "identity": {
    "accepted_terms": true,
    "affiliate_code": "",
    "backend_session": "4cb67ab027404ff7ec58ab3d42ac22798b4620afe90ac2a5897e2cf9bc083d4a",
    "birthday": {
      "date": "1978-06-01 00:00:00.000000",
      "timezone_type": 3,
      "timezone": "Europe\/Warsaw"
    },
    "currency": "EUR",
    "deposited": true,
    "email": "xcgp@xcaliber.io",
    "external_tracking_tag": null,
    "first_name": "XCaliber",
    "gender": "male",
    "id": "1337",
    "jurisdiction": "mga",
    "language": "en",
    "last_name": "API",
    "mobile_code": null,
    "mobile_number": null,
    "nickname": "xcgp",
    "receive_news": true,
    "receive_sms": true,
    "receive_snail": true,
    "receive_phone": true,
    "verification_url": null,
    "reference": null,
    "last_login": {
      "date": "2018-06-04 13:18:04.000000",
      "timezone_type": 3,
      "timezone": "Europe\/Warsaw"
    },
    "birth_name": null,
    "birth_place": null,
    "citizenship": null,
    "address": "address",
    "postcode": "postcode",
    "city": "city",
    "state": null,
    "country": "MT",
    "latin_first_name": null,
    "latin_last_name": null,
    "latin_address": null,
    "latin_zip_code": null,
    "latin_city": null,
    "latin_state": null,
    "reality_check": 3600,
    "phone": null
  }
}
```

## Start a session (by activating the user)
Another way to start a session is to activate a user using the activation code grant. This is used to 'auto-login' a user during activation.

```
POST /oauth
```

OAuth2 Activation Code Grant Request:
```json
{
  "grant_type": "activation_code",
  "client_id": "<brand>",
  "code": "<code>"
}
```

OAuth2 Activation Code Grant Response:
```json
{
  "access_token": "e86a62a701be498455d09a792ff673949cfd160b",
  "expires_in": 1800,
  "token_type": "Bearer",
  "scope": null,
  "refresh_token": "b098eaf9d4d081222f28ca7eb674f1b26714b06f",
  "identity": {
    "accepted_terms": true,
    "affiliate_code": "",
    "backend_session": "4cb67ab027404ff7ec58ab3d42ac22798b4620afe90ac2a5897e2cf9bc083d4a",
    "birthday": {
      "date": "1978-06-01 00:00:00.000000",
      "timezone_type": 3,
      "timezone": "Europe\/Warsaw"
    },
    "currency": "EUR",
    "deposited": true,
    "email": "xcgp@xcaliber.io",
    "external_tracking_tag": null,
    "first_name": "XCaliber",
    "gender": "male",
    "id": "1337",
    "jurisdiction": "mga",
    "language": "en",
    "last_name": "API",
    "mobile_code": null,
    "mobile_number": null,
    "nickname": "xcgp",
    "receive_news": true,
    "receive_sms": true,
    "receive_snail": true,
    "receive_phone": true,
    "verification_url": null,
    "reference": null,
    "last_login": {
      "date": "2018-06-04 13:18:04.000000",
      "timezone_type": 3,
      "timezone": "Europe\/Warsaw"
    },
    "birth_name": null,
    "birth_place": null,
    "citizenship": null,
    "address": "address",
    "postcode": "postcode",
    "city": "city",
    "state": null,
    "country": "MT",
    "latin_first_name": null,
    "latin_last_name": null,
    "latin_address": null,
    "latin_zip_code": null,
    "latin_city": null,
    "latin_state": null,
    "reality_check": 3600,
    "phone": null
  }
}
```

## Refresh a session
A session needs to be refreshed before it expires and the refresh token grant is used for that purpose.

```
POST /oauth
```

OAuth2 Refresh Token Grant Request:
```json
{
  "grant_type": "refresh_token",
  "client_id": "<brand>",
  "refresh_token": "<token>"
}
```

OAuth2 Refresh Token Grant Response:
```json
{
  "access_token": "e86a62a701be498455d09a792ff673949cfd160b",
  "expires_in": 1800,
  "token_type": "Bearer",
  "scope": null,
  "refresh_token": "b098eaf9d4d081222f28ca7eb674f1b26714b06f",
  "identity": {
    "accepted_terms": true,
    "affiliate_code": "",
    "backend_session": "4cb67ab027404ff7ec58ab3d42ac22798b4620afe90ac2a5897e2cf9bc083d4a",
    "birthday": {
      "date": "1978-06-01 00:00:00.000000",
      "timezone_type": 3,
      "timezone": "Europe\/Warsaw"
    },
    "currency": "EUR",
    "deposited": true,
    "email": "xcgp@xcaliber.io",
    "external_tracking_tag": null,
    "first_name": "XCaliber",
    "gender": "male",
    "id": "1337",
    "jurisdiction": "mga",
    "language": "en",
    "last_name": "API",
    "mobile_code": null,
    "mobile_number": null,
    "nickname": "xcgp",
    "receive_news": true,
    "receive_sms": true,
    "receive_snail": true,
    "receive_phone": true,
    "verification_url": null,
    "reference": null,
    "last_login": {
      "date": "2018-06-04 13:18:04.000000",
      "timezone_type": 3,
      "timezone": "Europe\/Warsaw"
    },
    "birth_name": null,
    "birth_place": null,
    "citizenship": null,
    "address": "address",
    "postcode": "postcode",
    "city": "city",
    "state": null,
    "country": "MT",
    "latin_first_name": null,
    "latin_last_name": null,
    "latin_address": null,
    "latin_zip_code": null,
    "latin_city": null,
    "latin_state": null,
    "reality_check": 3600,
    "phone": null
  }
}
```
