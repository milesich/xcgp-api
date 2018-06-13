---
title: Overview
---

The XCaliber Gaming Platform API uses [OAuth 2](https://tools.ietf.org/html/rfc6749) for authentication and it implements some extensions to it for some advanced scenarios.

## What is OAuth 2?
OAuth 2 is an authorization framework that enables applications to obtain access to user accounts on an HTTP service such as XCaliber Gaming Platform API. It works by delegating user authentication to the service that hosts the user account, and authorizing the application to access the user account.

## OAuth Roles
OAuth defines [four roles](https://tools.ietf.org/html/rfc6749#section-1.1):
* [Resource owner](#resource-owner) (the user)
* [Resource server](#resource-authorization-server) (this API)
* [Authorization server](#resource-authorization-server) (this API)
* [Client](#client) (the application)

### Resource owner
The OAuth 2 spec refers to the user as the "resource owner". The resource owner is the person who is giving access to their account. The resources in this case can be data (bonuses, transactions, game sessions), services (claiming a bonus, creating a transaction), or any other resource requiring access restrictions.

### Resource / authorization server
The resource server hosts the protected user accounts, and the authorization server verifies the identity of the *user* then issues access tokens to the *application*.

From an application developer's point of view, XCaliber's API fulfills both the resource and authorization server roles.

### Client
The client is the application that is attempting to access the user's resources. Before the client can access the user's account, it needs to obtain permission. The client will obtain permission by either directing the user to a login form, or by asserting permission directly with the authorization server without interaction by the user.

## Abstract flow
Now that you have an idea of what the OAuth roles are, let's look at a diagram of how they generally interact with each other:

```adoc
+-------------+                                  +------------------+
│             │ --- 1. Authorization request --> │       User       │
│             │ <-- 2. Authorization grant ----- │ (Resource owner) │
│             │                                  +------------------+
│             │
│ Application │                                  +------------------+---+
│  (Client)   │ --- 3. Authorization grant ----> │  Authorization   │   │
│             │ <-- 4. Access token ------------ │      server      │ A │
│             │                                  +------------------+ P │
│             │ --- 5. Access token -----------> │     Resource     │ I │
│             │ <-- 6. Protected resource ------ │      server      │   │
+-------------+                                  +------------------+---+
```

1. The *application* requests authorization to access service resources from the *user*.
2. If the *user* authorized the request, the *application* receives an authorization grant.
3. The *application* requests an access token from the *authorization server* (API) by presenting authentication of its own identity, and the authorization grant.
4. If the application identity is authenticated and the authorization grant is valid, the *authorization server* (API) issues an access token to the application. Authorization is complete.
5. The *application* requests the resource from the *resource server* (API) and presents the access token for authentication.
6. If the access token is valid, the *resource server* (API) serves the resource to the *application*.

The actual flow of this process will differ depending on the authorization grant type in use, but this is the general idea.

## Application registration
Before using OAuth with your application, the application must be registered with the service. This is done by XCaliber when the brand is configured in our platform.

### Client ID
Once the application is registered, the service will issue 'client credentials' in the form of a *client identifier*. The Client ID is a publicly exposed string that is used by the service API to identify the application. In our API the Client ID is the brand code.

## Authorization grant
In the [abstract flow](#abstract-flow) above, the first four steps cover obtaining an authorization grant and access token. The authorization grant type depends on the method used by the application to request authorization, and the grant types supported by our API:
* [Password](authentication/grants.md#password): for normal logins.
* [Activation code](authentication/grants.md#activation-code): for activating user accounts and granting access immediately.
* [Refresh token](authentication/grants.md#refresh-token): for refreshing an access token.
