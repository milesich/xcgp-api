---
title: Currency
---

A currency

## Schema definition
```graphql
type Currency {

  # ISO 4217 Currency Code. Example: GBP or EUR
  code: String

  # Symbol to represent this currency. Example £ for British Pounds
  symbol: String

  # If this currency is enabled
  enabled: Boolean

  # An example of a phone number from this country. Example: 9696 1234 for
  # Malta
  defaultDepositAmounts: [Int]

}
```

## Fields

* **code ([`String`](graphql/schema/string.md))**

  ISO 4217 Currency Code. Example: GBP or EUR

* **symbol ([`String`](graphql/schema/string.md))**

  Symbol to represent this currency. Example £ for British Pounds

* **enabled ([`Boolean`](graphql/schema/boolean.md))**

  If this currency is enabled

* **defaultDepositAmounts ([`[Int]`](graphql/schema/int.md))**

  An example of a phone number from this country. Example: 9696 1234 for Malta


## Required by
* [CurrencyConnection](graphql/schema/currencyconnection.md): A connection to a list of items.
* [CurrencyEdge](graphql/schema/currencyedge.md): An edge in a connection
