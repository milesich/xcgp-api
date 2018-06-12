---
title: Grant types
---

## Password
The password grant is used when the application exchanges the user's username and password for an access token.

The following is an example password grant:

```http
POST /oauth HTTP/1.1
Content-Type: application/json

{
  "grant_type": "password",
  "client_id": "<brand>",
  "username": "<user>",
  "password": "<pass>"
}
```

Field        | Description
------------ | -----------
`grant_type` | The `grant_type` parameter must be set to `password`.
`client_id`  | This is the brand code given during the brand setup.
`username`   | The user's username. Currently, `email`, `nickname` and `mobile_number` are allowed usernames depending on the brand configuration.
`password`   | The user's password.

## Activation code
The activation code grant is used when the application exchanges an activation code (given by email or phone) for an access token.

The following is an example activation code grant:

```http
POST /oauth HTTP/1.1
Content-Type: application/json

{
  "grant_type": "activation_code",
  "client_id": "<brand>",
  "code": "<code>",
}
```

Field        | Description
------------ | -----------
`grant_type` | The `grant_type` parameter must be set to `activation_code`.
`client_id`  | This is the brand code given during the brand setup.
`code`       | The user's activation code received via email or phone.

## Refresh token
The refresh token grant is used when the application needs to refresh an access token. This grant can be used before or after an access token expires.

The following is an example refresh token grant:

```http
POST /oauth HTTP/1.1
Content-Type: application/json

{
  "grant_type": "refresh_token",
  "client_id": "<brand>",
  "refresh_token": "<token>",
}
```

Field           | Description
--------------- | -----------
`grant_type`    | The `grant_type` parameter must be set to `refresh_token`.
`client_id`     | This is the brand code given during the brand setup.
`refresh_token` | The refresh token token given in any grant response.

## Response
If the request for an access token is valid, the authorization server generates an access token and refresh token and return these to the client, with some additional properties about the authorization:

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

Field           | Description
--------------- | -----------
`access_token`  | The access token string as issued by the authorization server.
`refresh_token` | The refresh token which the application can use to obtain another access token.
`expires_in`    | The duration of time the access token is granted for in seconds.
`token_type`    | The type of token this is. (It is always `Bearer`.)
`identity`      | The [user identity object](TODO) for this grant.
