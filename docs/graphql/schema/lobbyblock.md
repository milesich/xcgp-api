---
title: LobbyBlock
---

A lobby block for a game or a promotion space.

## Schema definition
```graphql
union LobbyBlock = LobbyGame | LobbyPromotionSpace
```

## Required by
* [LobbyBlockConnection](graphql/schema/lobbyblockconnection.md): A connection to a list of items.
* [LobbyBlockEdge](graphql/schema/lobbyblockedge.md): An edge in a connection
