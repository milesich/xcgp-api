---
title: Currency
---

<p>A currency</p>


## Schema definition
```graphql
type Currency {

  # ISO 4217 Currency Code. Example: GBP or EUR
  code: String 

  # Symbol to represent this currency. Example £ for British Pounds
  symbol: String 

  # If this currency is enabled
  enabled: Boolean 

  # An example of a phone number from this country. Example: 9696 1234 for Malta
  defaultDepositAmounts: [Int] 

}
```
## Required by
* [CurrencyConnection](graphql/schema/currencyconnection.md): A connection to a list of items.
* [CurrencyEdge](graphql/schema/currencyedge.md): An edge in a connection
