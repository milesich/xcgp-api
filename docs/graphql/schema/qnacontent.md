---
title: QnaContent
---

The content for a question and answer

## Schema definition
```graphql
type QnaContent {

  question: String

  answer: String

  image: String

}
```

## Fields

* **question ([`String`](graphql/schema/string.md))**


* **answer ([`String`](graphql/schema/string.md))**


* **image ([`String`](graphql/schema/string.md))**



## Required by
* [QnaCategory](graphql/schema/qnacategory.md): A category of question and answers
