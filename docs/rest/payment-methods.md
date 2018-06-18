---
title: Payment methods
---

1. [List payment methods](#list-payment-methods)

## List payment methods
Get a list of payment methods that the user can make use of during the deposit or withdraw process.

### Request

```http
GET /payment-methods?type=deposit HTTP/1.1
```

Name          | Type       | Description
------------- | ---------- | -----------
`type`        | `string?`  | The type: `deposit` or `withdrawal`.
`bonus_id`    | `integer?` | The bonus id that the user selected. This is only relevant if your application allows the users to select deposit bonuses before initiating the deposit process.

### Response
```http
HTTP/1.1 200 OK

{
  "_links": {
    "self": {
      "href": "https://frontapi.cherrytech.com/payment-methods?type=deposit&page=1"
    },
    "first": {
      "href": "https://frontapi.cherrytech.com/payment-methods?type=deposit"
    },
    "last": {
      "href": "https://frontapi.cherrytech.com/payment-methods?type=deposit&page=1"
    }
  },
  "_embedded": {
    "payment_methods": [
      {
        "id": 11,
        "name": "visa",
        "max_amount": 2000000,
        "min_amount": 20000,
        "deposit_fixed": 0,
        "deposit_percent": 2.5,
        "deposit_cap": 1000000,
        "withdraw_fixed": 0,
        "withdraw_percent": 0,
        "withdraw_cap": 0,
        "fx_rate": 9.4268,
        "previous_cards": null,
        "last_amount": null,
        "provider_id": 51,
        "provider_name": "ticketsurf",
        "enabled": true,
        "default_deposit_amount": 500,
        "quick_deposit_options": [],
        "_links": {
          "self": {
            "href": "https://frontapi.cherrytech.com/payment-methods/11"
          }
        }
      },
      {
        "id": 11,
        "name": "visa",
        "max_amount": 2000000,
        "min_amount": 20000,
        "deposit_fixed": 0,
        "deposit_percent": 2.5,
        "deposit_cap": 1000000,
        "withdraw_fixed": 0,
        "withdraw_percent": 0,
        "withdraw_cap": 0,
        "fx_rate": 9.4268,
        "previous_cards": null,
        "last_amount": null,
        "provider_id": 76,
        "provider_name": "epro",
        "enabled": true,
        "default_deposit_amount": 500,
        "quick_deposit_options": [],
        "_links": {
          "self": {
            "href": "https://frontapi.cherrytech.com/payment-methods/11"
          }
        }
      },
      {
        "id": 111,
        "name": "paysafecard",
        "max_amount": 10000000,
        "min_amount": 20000,
        "deposit_fixed": 0,
        "deposit_percent": 0,
        "deposit_cap": 0,
        "withdraw_fixed": 0,
        "withdraw_percent": 0,
        "withdraw_cap": 0,
        "fx_rate": 0,
        "previous_cards": null,
        "last_amount": null,
        "provider_id": null,
        "provider_name": null,
        "enabled": true,
        "default_deposit_amount": 0,
        "quick_deposit_options": [],
        "_links": {
          "self": {
            "href": "https://frontapi.cherrytech.com/payment-methods/111"
          }
        }
      },
      {
        "id": 122,
        "name": "neteller",
        "max_amount": 100000000,
        "min_amount": 20000,
        "deposit_fixed": 0,
        "deposit_percent": 0,
        "deposit_cap": 0,
        "withdraw_fixed": 0,
        "withdraw_percent": 0,
        "withdraw_cap": 0,
        "fx_rate": 0,
        "previous_cards": null,
        "last_amount": null,
        "provider_id": null,
        "provider_name": null,
        "enabled": true,
        "default_deposit_amount": 0,
        "quick_deposit_options": [],
        "_links": {
          "self": {
            "href": "https://frontapi.cherrytech.com/payment-methods/122"
          }
        }
      },
      {
        "id": 31,
        "name": "mastercard",
        "max_amount": 2000000,
        "min_amount": 20000,
        "deposit_fixed": 0,
        "deposit_percent": 2.5,
        "deposit_cap": 0,
        "withdraw_fixed": 0,
        "withdraw_percent": 0,
        "withdraw_cap": 0,
        "fx_rate": 9.4268,
        "previous_cards": null,
        "last_amount": null,
        "provider_id": 74,
        "provider_name": "icheque",
        "enabled": true,
        "default_deposit_amount": 500,
        "quick_deposit_options": [],
        "_links": {
          "self": {
            "href": "https://frontapi.cherrytech.com/payment-methods/31"
          }
        }
      },
      {
        "id": 41,
        "name": "skrill",
        "max_amount": 10000000,
        "min_amount": 20000,
        "deposit_fixed": 0,
        "deposit_percent": 0,
        "deposit_cap": 0,
        "withdraw_fixed": 0,
        "withdraw_percent": 0,
        "withdraw_cap": 0,
        "fx_rate": 0,
        "previous_cards": null,
        "last_amount": null,
        "provider_id": null,
        "provider_name": null,
        "enabled": true,
        "default_deposit_amount": 0,
        "quick_deposit_options": [],
        "_links": {
          "self": {
            "href": "https://frontapi.cherrytech.com/payment-methods/41"
          }
        }
      }
    ]
  },
  "page_count": 1,
  "page_size": 25,
  "total_items": 6,
  "page": 1
}
```

## Payment method object

Name                     | Type        | Description
------------------------ | ----------- | -----------
`id`                     | `string`    | The id.
`name`                   | `string`    | The name.
`max_amount`             | `integer`   | The maximum amount in cents.
`min_amount`             | `integer`   | The minimum amount in cents.
`deposit_fixed`          | `integer`   | The deposit fee fixed amount in cents.
`deposit_percent`        | `decimal`   | The deposit fee percentage.
`deposit_cap`            | `integer`   | The maximum deposit fee in cents.
`withdraw_fixed`         | `integer`   | The withdraw fee fixed amount in cents.
`withdraw_percent`       | `decimal`   | The withdraw fee percentage.
`withdraw_cap`           | `integer`   | The maximum withdraw fee in cents.
`fx_rate`                | `decimal`   | The exchange rate.
`previous_cards`         | `object[]?` | Previously used cards for this method.
`last_amount`            | `integer?`  | The last amount used for this method.
`provider_id`            | `integer?`  | The provider id.
`provider_name`          | `string?`   | The provider name.
`enabled`                | `boolean`   | Whether or not this method is enabled for the given request filters. The application can either hide or fade out the method if it's not enabled.
`default_deposit_amount` | `integer`   | The default deposit amount in cents.
`quick_deposit_options`  | `integer[]` | The quick deposit amounts that can be shown for the user.
