---
title: OAuth2
---

The XCaliber Gaming Platform API uses [OAuth2](TODO) for authentication and it implements some extensions to it for some advanced scenarios.

OAuth defines 4 roles:
* [Resource owner](#resource-owner) (the user)
* [Resource server](#resource-server) (this API)
* [Authorization server](#authorization-server) (this API)
* [Client](#client) (the application)

## Definitions

### Resource owner
The OAuth 2.0 spec refers to the user as the "resource owner". The resource owner is the person who is giving access to their account. The resources in this case can be data (bonuses, transactions, game sessions), services (claiming a bonus, creating a transaction), or any other resource requiring access restrictions.

### Resource server
The spec. refers to what you typically think of as the main API as the "resource server." The resource server is the server that contains the user's information that is being accessed by the application.

### Authorization server
The authorization server is what the application interacts with when an user is requesting access to their account. The authorization server is responsible for granting access token after the user requests access.

### Client
The client is the application that is attempting to access the user's resources. Before the client can access the user's account, it needs to obtain permission. The client will obtain permission by either directing the user to a login form, or by asserting permission directly with the authorization server without interaction by the user.

### Access token
An access token is the string used when making authenticated requests to the API. The token represents that the user has authorized the application to access that user's account. The token has a corresponding duration of access, scope, and potentially other information. Tokens are opaque to the client using them and only have meaning to the authorization and/or the API server.

### Refresh token
A refresh token is a string that is used to get a new access token when an access token expires.
