---
title: PageConnection
---

<p>A connection to a list of items.</p>


## Schema definition
```graphql
type PageConnection {

  # Information to aid in pagination.
  pageInfo: PageInfo! 

  # Information to aid in pagination
  edges: [PageEdge] 

  count: Int @deprecated( reason: &quot;Use `totalCount` instead.&quot; )

  # A count of the total number of objects in this connection, ignoring pagination. 
  # This allows a client to fetch the first five objects by passing &quot;5&quot; as the 
  # argument to &quot;first&quot;, then fetch the total count so it could display &quot;5 of 83&quot;, 
  # for example.
  totalCount: Int 

  # A list of all of the objects returned in the connection. This is a convenience 
  # field provided for quickly exploring the API; rather than querying for &quot;{ edges 
  # { node } }&quot; when no edge data is needed, this field can be be used instead. Note 
  # that when clients like Relay need to fetch the &quot;cursor&quot; field on the edge to 
  # enable efficient pagination, this shortcut cannot be used, and the full &quot;{ edges 
  # { node } }&quot; version should be used instead.
  pages: [Page] 

}
```
## Required by
* [Query](graphql/schema/query.md)
