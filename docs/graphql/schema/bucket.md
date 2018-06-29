---
title: Bucket
---

An bucket containing achievement progress

## Schema definition
```graphql
type Bucket implements Node {

  # The ID of an object
  id: ID!

  # UserAchievement ID of which this Bucket belongs to
  userAchievementId: Int

  # PointType ID of which this Bucket is
  pointTypeId: String

  # Value of this bucket
  value: Int

  # Code of the point type
  code: String

  # Maximum points to complete this bucket
  limit: Float

  # Current achieved points
  current: Float

}
```

## Fields

* **id ([`ID!`](graphql/schema/id.md))**

  The ID of an object

* **userAchievementId ([`Int`](graphql/schema/int.md))**

  UserAchievement ID of which this Bucket belongs to

* **pointTypeId ([`String`](graphql/schema/string.md))**

  PointType ID of which this Bucket is

* **value ([`Int`](graphql/schema/int.md))**

  Value of this bucket

* **code ([`String`](graphql/schema/string.md))**

  Code of the point type

* **limit ([`Float`](graphql/schema/float.md))**

  Maximum points to complete this bucket

* **current ([`Float`](graphql/schema/float.md))**

  Current achieved points


## Required by
* [UserAchievement](graphql/schema/userachievement.md): An achievement belonging to a user
