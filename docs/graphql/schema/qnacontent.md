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
* [QnaCategory](graphql/schema/qnacategory.md): A category of questions and answers. It can be used for any kind of content that displays as a list of titles and descriptions like questions and answers, glossaries, terms and conditions, etc.
