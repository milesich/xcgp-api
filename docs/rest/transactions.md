---
title: Transactions
---

1. [Start a transaction](#start-a-transaction)
2. [Finish a transaction](#finish-a-transaction)
3. [List transactions](#list-transactions)

The transactions API supports starting, finishing, and listing transactions.

## Start a transaction
Starting a transaction is the process of creating it. Some transactions will finish when they are created, but most of the time they need to be [finished](#finish-a-transaction) by updating them with more data.

### Request

```http
POST /transactions HTTP/1.1
Content-Type: application/json

{
  "type": "deposit",
  "method_id": 122,
  "provider_id": null,
  "amount": 10,
  "bonus": null,
  "iovation": null,
  "cancel_url": "https://www.brand.com/payment?type=deposit&status=cancel",
  "failed_url": "https://www.brand.com/payment?type=deposit&status=failed",
  "pending_url": "https://www.brand.com/payment?type=deposit&status=pending",
  "success_url": "https://www.brand.com/payment?type=deposit&status=success"
}
```

Name          | Type      | Description
------------- | --------- | -----------
`type`        | `string`  | The type: `deposit` or `withdrawal`.
`method_id`   | `integer` | The [method](rest/payment-methods.md) id.
`provider_id` | `integer?` | The [provider](rest/payment-methods.md) id. If not given, the platform will attempt to use the best provider for the given method.
`amount`      | `decimal` | The amount in the user currency.
`bonus`       | `integer?` | The bonus id to be triggered after the transaction is completed.
`iovation`    | `string?`  | The [Iovation](https://www.iovation.com/) code for fraud checking.
`cancel_url`  | `string?`  | The URL to which the browser should redirect to if the transaction is canceled.
`failed_url`  | `string?`  | The URL to which the browser should redirect to if the transaction fails.
`pending_url` | `string?`  | The URL to which the browser should redirect to if the transaction goes into a pending status.
`success_url` | `string?`  | The URL to which the browser should redirect to if the transaction is completed successfully.

### Response
```http
HTTP/1.1 201 Created

{
  "id": "t123deposit",
  "type": "deposit",
  "amount": 10,
  "currency": null,
  "start_date": {
    "date": "2018-06-14 22:57:32.000000",
    "timezone_type": 3,
    "timezone": "Europe/Warsaw"
  },
  "status": 16,
  "action": "add-credentials-neteller",
  "method_id": 122,
  "method_name": null,
  "provider_id": null,
  "provider_name": null,
  "cards": null,
  "redirect_url": null,
  "cancel_url": "https:/www.brand.com/payment?type=deposit&status=cancel",
  "failed_url": "https:/www.brand.com/payment?type=deposit&status=failed",
  "pending_url": "https:/www.brand.com/payment?type=deposit&status=pending",
  "success_url": "https:/www.brand.com/payment?type=deposit&status=success",
  "credentials": null,
  "html": null,
  "_links": {
    "self": {
      "href": "https://frontapi.cherrytech.com/transactions/t123deposit"
    }
  }
}
```

The response `status` and `action` can now be used by the application to decide what to do next:
* If the `status` is `9` (Completed), the user should be communicated that the transaction has successfully completed.
* If the `status` is `8` (Failed), the user should be communicated that the transaction has failed.
* If the `status` is `14` (Pending), the user should be communicated that the transaction is pending. That means that it will complete or fail asynchronously after a few seconds.
* If the `status` is `15` (Pending approval), the user should be communicated that the transaction is pending approval by an agent.
* Otherwise, the `action` field should be checked instead:
  * If the action is `html-provided`, the response `html` should be presented to the user. (It's recommend but not mandatory to embed this snippet in an iframe.)
  * If the action is `iframe-sent`, the response `redirect_url` should be presented to the user in an iframe. (Alternatively the user can be redirected instead.)
  * If the action is `redirect-to-url`, the user should be redirected to the response `redirect_url`.
  * If the action is `add-card`, the user should be presented with a form to add the following card details: name, number, expiry month and year, and security code.
  * If the action is `add-card-no-ccc`, the user should be presented with a form to add the following card details: name, number and expiry month and year.
  * If the action is `list-cards`, the user should be presented with a form listing the response `cards` so that he can select one. A new card can also be added at this stage, in which case the same flow as `add-card` can be done.
  * If the action is `add-credentials-neteller`, the user should be presented with a form to add [Neteller](https://www.neteller.com/)'s account id (or email) and secure id.

## Finish a transaction
Finishing a transaction is the process of updating an existing transaction with missing data. This missing data is different depending on the action that the start transaction returned, and therefore this section will show the requests for each action.

### Request: `add-card`
If the transaction response action is `add-card` or `add-card-no-ccc` then the transaction can be updated with a new card by providing the needed card details.

```http
PATCH /transactions/t123deposit HTTP/1.1
Content-Type: application/json

{
  "action": "add-card",
  "cards": [
    {
      "name": "XCaliber Card",
      "number": "4111111111111111",
      "expiry_month": 1,
      "expiry_year": 2050,
      "ccv": "123"
    }
  ]
}
```

Name     | Type       | Description
-------- | ---------- | -----------
`action` | `string`   | The action that the API should take for this update. Must be `add-card`. (Also accepted for ease of use: `add-card-no-ccc`.)
`cards`  | `object[]` | An array with a single object containing the card<br>`name`: the name on the card<br>`number`: the card number<br>`expiry_month`: the expiry month<br>`expiry_year`: the expiry year<br>`ccv`: the security code (CVV, CVV2, CVC or CSC)<br><br>**Note:** the `ccv` is optional if the transaction response action was `add-card-no-ccc`.

### Request: `select-card`
If the transaction response action is `list-cards` then the transaction can be updated with an existing card in the platform by just providing the card id and CCC (Credit Card Code).

```http
PATCH /transactions/t123deposit HTTP/1.1
Content-Type: application/json

{
  "action": "select-card",
  "cards": [
    {
      "id": 250760,
      "ccv": "123"
    }
  ]
}
```

Name     | Type       | Description
-------- | ---------- | -----------
`action` | `string`   | The action that the API should take for this update. Must be `select-card`. (Also accepted for ease of use: `list-cards`.)
`cards`  | `object[]` | An array with a single object containing the card `id` and `ccv` (CVV, CVV2, CVC or CSC).

### Request: `provide-credentials`
If the transaction response action is `add-credentials` or `add-credentials-neteller` then the transaction can be updated with the right payment method credentials.

```http
PATCH /transactions/t123deposit HTTP/1.1
Content-Type: application/json

{
  "action": "provide-credentials",
  "credentials": {
    "username": "453501020503",
    "password": "908379"
  }
}
```

Name          | Type      | Description
------------- | --------- | -----------
`action`      | `string`  | The action that the API should take for this update. Must be `provide-credentials`. (Also accepted for ease of use: `add-credentials` and `add-credentials-neteller`.)
`credentials` | `object`  | The credentials needed to complete the transaction. It must be an object with a `username` and `password`.<br><br>**Note:** for [Neteller](https://www.neteller.com/) the username is the account id or email, and the password is the secure id.

### Response
```http
HTTP/1.1 200 OK

{
  "id": "t123deposit",
  "type": null,
  "amount": null,
  "currency": null,
  "start_date": {
    "date": "2018-06-15 15:49:38.000000",
    "timezone_type": 3,
    "timezone": "Europe/Warsaw"
  },
  "status": 9,
  "action": "",
  "method_id": null,
  "method_name": null,
  "provider_id": null,
  "provider_name": null,
  "cards": null,
  "redirect_url": null,
  "cancel_url": null,
  "failed_url": null,
  "pending_url": null,
  "success_url": null,
  "credentials": null,
  "html": null,
  "_links": {
    "self": {
      "href": "https://staging-frontapi.cherrytech.com/transactions/t123deposit"
    }
  }
}
```

The response `status` and `action` can now be used by the application to decide what to do next:
* If the `status` is `9` (Completed), the user should be communicated that the transaction has successfully completed.
* If the `status` is `8` (Failed), the user should be communicated that the transaction has failed.
* If the `status` is `14` (Pending), the user should be communicated that the transaction is pending. That means that it will complete or fail asynchronously after a few seconds.
* If the `status` is `15` (Pending approval), the user should be communicated that the transaction is pending approval by an agent.
* Otherwise, the `action` field should be checked instead:
  * If the action is `html-provided`, the response `html` should be presented to the user. (It's recommend but not mandatory to embed this snippet in an iframe.)
  * If the action is `iframe-sent`, the response `redirect_url` should be presented to the user in an iframe. (Alternatively the user can be redirected instead.)
  * If the action is `redirect-to-url`, the user should be redirected to the response `redirect_url`.

## Cancel a withdrawal
TODO

## List transactions
TODO

## Transaction object

Name            | Type        | Description
--------------- | ----------- | -----------
`id`            | `string`    | The id.
`type`          | `string`    | The type: `deposit` or `withdrawal`.
`method_id`     | `integer`   | The method id.
`method_name`   | `string?`   | The method name.
`provider_id`   | `integer?`  | The provider id.
`provider_name` | `string?`   | The provider name.
`amount`        | `decimal`   | The amount.
`currency`      | `string?`   | The currency code in [ISO 4217](https://www.iso.org/iso-4217-currency-codes.html) format.
`start_date`    | `datetime`  | The starting date/time.
`status`        | `integer`   | The status. See [transaction statuses](#transaction-statuses).
`action`        | `string`    | The action to be taken next. See [transaction actions](#transaction-actions).
`cards`         | `object[]?` | The list of cards to be presented to the user so that he can select one if he so chooses.
`html`          | `string?`   | The HTML snippet that should be presented to the user to complete the transaction.
`credentials`   | `object?`   | The credentials used.
`redirect_url`  | `string?`   | The URL that the browser should redirect to or presented in an [`iframe`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/iframe) so that the user can complete the transaction.
`cancel_url`    | `string`    | The URL to which the browser should redirect to if the transaction is canceled.
`failed_url`    | `string`    | The URL to which the browser should redirect to if the transaction fails.
`pending_url`   | `string`    | The URL to which the browser should redirect to if the transaction goes into a pending status.
`success_url`   | `string`    | The URL to which the browser should redirect to if the transaction is completed successfully.

## Transaction actions
The `action` field of the response object is meant to direct the application of which action it should take after receiving the response.

Code                       | Description
-------------------------- | -----------
`add-card`                 | The application should display a form with the necessary card details for the user to fill in.
`add-card-no-ccc`          | The application should display a form with the necessary card details for the user to fill in except the security code.
`add-credentials-neteller` | The application should display a form with [Neteller](https://www.neteller.com/) secure id and code fields.
`html-provided`            | The application should display the given HTML snippet to the user.
`iframe-sent`              | The application should display an iframe with the given URL. (Can also do a redirect if it's preferred.)
`list-cards`               | The application should present the user with a list of previously list cards. (Alternatively, a new card form can also be presented.)
`redirect-to-url`          | The application should redirect the user to the given URL.

## Transaction statuses
The `status` field holds the current status of the transaction.

**Note:** there are some statuses that are currently not used or not relevant.

Code | Name                  | Description
---- | --------------------- | -----------
`1`  | Started               | The transaction has started.
`2`  | Card requested        | The transaction needs to be updated with card details.
`4`  | Cards listed          | The transaction needs to be updated with an existing card or with details for a new card.
`6`  | URL provided          | The user needs to be presented with an iframe with the given URL or redirected to it so that he can complete the transaction.
`7`  | HTML provided         | The user needs to be presented with a custom HTML snippet so that he can complete the transaction.
`8`  | Failed                | The transaction has failed to complete.
`9`  | Completed             | The transaction has completed successfully.
`12` | Declined              | The withdrawal has been declined.
`13` | Canceled              | The transaction has been canceled.
`14` | Pending               | The transaction is being processed.
`15` | Pending approval      | The transaction is waiting for approval.
`16` | Credentials requested | The transaction needs to be updated with credentials.
