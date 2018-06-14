---
title: Transactions
---

1. [Start a transaction](#start-a-transaction)
2. [Finish a transaction](#finish-a-transaction)
3. [List transactions](#list-transactions)

The transactions API supports starting, finishing, and listing transactions.

## Start a transaction
Starting a transaction is the process of creating it. Some transactions will finish when they are created, but most of the time they need to be [finished using another API call](#finish-a-transaction).

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

### Request fields
Name          | Type      | Description
------------- | --------- | -----------
`type`        | `string`  | The transaction type: `deposit` or `withdrawal`.
`method_id`   | `integer` | The method id.
`provider_id` | `integer?` | The provider id. If not given, the platform will attempt to use the best provider for the given method.
`amount`      | `decimal` | The transaction amount.
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
  "cancel_url": "https:/www.brand.com/payment?type=deposit\u0026status=failed",
  "failed_url": "https:/www.brand.com/payment?type=deposit\u0026status=failed",
  "pending_url": "https:/www.brand.com/payment?type=deposit\u0026status=pending",
  "success_url": "https:/www.brand.com/payment?type=deposit\u0026status=success",
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

## List transactions
