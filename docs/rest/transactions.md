---
title: Transactions
---

1. [Start a transaction](#start-a-transaction)
2. [Finish a transaction](#finish-a-transaction)
3. [List transactions](#list-transactions)

The transactions API supports starting, finishing, and listing transactions.

## Start a transaction
Starting a transaction is the process of creating it. Some transactions will finish when they are created, but most of the time they need to be [finished using another API call](#finish-a-transaction).

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
`method_id`   | `integer` | The method id.
`provider_id` | `integer?` | The provider id. If not given, the platform will attempt to use the best provider for the given method.
`amount`      | `decimal` | The amount.
`bonus`       | `integer?` | The bonus id to be triggered after the transaction is completed.
`iovation`    | `string?`  | The Iovation code for fraud checking.
`cancel_url`  | `string?`  | The URL to which the browser should redirect to if the transaction is canceled.
`failed_url`  | `string?`  | The URL to which the browser should redirect to if the transaction fails.
`pending_url` | `string?`  | The URL to which the browser should redirect to if the transaction goes into a pending status.
`success_url` | `string?`  | The URL to which the browser should redirect to if the transaction is completed successfully.

### Response
```http
HTTP/1.1 201 Created

{
  "id": "b123deposit",
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
      "href": "https://frontapi.cherrytech.com/transactions/b123deposit"
    }
  }
}
```

## Finish a transaction
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
`add-card-no-ccc`          | The application should display a form with the necessary card details for the user to fill in except the CCC (Credit Card Code, also known as CVC, CVV, etc).
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
