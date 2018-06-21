---
title: PaymentMethod
---

<p>A payment method</p>


## Schema definition
```graphql
type PaymentMethod implements Node {

  # The ID of an object
  id: ID! 

  # The maximum fee for a deposit
  depositCap: Float 

  # A fixed fee for this deopsit
  depositFixed: Float 

  # A percentage fee for this deposit
  depositPercent: Float 

  # The foreign exchange rate for this payment method
  fxRate: Float 

  # The last amount deposited with this method
  lastAmount: Float 

  # The maximum amount for a transaction with this method
  maxAmount: Float 

  # The minimum amount for a transaction with this method
  minAmount: Float 

  # Name of this payment method
  name: String 

  previousCards: String 

  # ID of the payment provider for this method
  providerId: String 

  # Name of the payment provider for this method
  providerName: String 

  # The maximum fee for a withdrawal
  withdrawCap: Float 

  # A fixed fee for this withdrawal
  withdrawFixed: Float 

  # A percentage fee for this withdrawal
  withdrawPercent: Float 

  # The default amount for deposit
  defaultDepositAmount: Int 

  # List of predefined deposit amounts
  quickDepositOptions: [Int] 

}
```
## Required by
* [PaymentMethodConnection](graphql/schema/paymentmethodconnection.md): A connection to a list of items.
* [PaymentMethodEdge](graphql/schema/paymentmethodedge.md): An edge in a connection
* [Query](graphql/schema/query.md)
