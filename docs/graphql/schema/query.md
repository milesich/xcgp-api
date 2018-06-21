---
title: Query
---



## Schema definition
```graphql
type Query {

  # Fetches an object given its ID
  #
  # Arguments
  #   id:   id
  node(id: ID!): Node 

  # Arguments
  #   id
  achievement(id: String): Achievement 

  # Arguments
  #   after
  #   first
  #   before
  #   last
  #   id
  #   achievementChainId
  achievements(
    after: String,
    first: Int,
    before: String,
    last: Int,
    id: String,
    achievementChainId: String
  ): AchievementConnection 

  # Arguments
  #   id
  achievementChain(id: String): AchievementChain 

  # Arguments
  #   after
  #   first
  #   before
  #   last
  #   name:   name
  #   enabled:   enabled
  #   activationDate:   activationDate
  #   expiryDate:   expiryDate
  achievementChains(
    after: String,
    first: Int,
    before: String,
    last: Int,
    name: String,
    enabled: Boolean,
    activationDate: String,
    expiryDate: String
  ): AchievementChainConnection 

  # Arguments
  #   id
  banner(id: ID!): Banner 

  # Arguments
  #   after
  #   first
  #   before
  #   last
  banners(after: String, first: Int, before: String, last: Int): BannerConnection 

  # Arguments
  #   id
  bannerSlot(id: ID!): BannerSlot 

  # Arguments
  #   after
  #   first
  #   before
  #   last
  bannerSlots(after: String, first: Int, before: String, last: Int): BannerSlotConnection 

  # Arguments
  #   id
  bonus(id: ID!): Bonus 

  # Arguments
  #   after
  #   first
  #   before
  #   last
  #   type:   type
  bonuses(after: String, first: Int, before: String, last: Int, type: BonusType!): BonusConnection 

  # Arguments
  #   after
  #   first
  #   before
  #   last
  #   enabled:   enabled
  countries(after: String, first: Int, before: String, last: Int, enabled: Boolean): CountryConnection 

  # Arguments
  #   after
  #   first
  #   before
  #   last
  #   enabled:   enabled
  currencies(
    after: String,
    first: Int,
    before: String,
    last: Int,
    enabled: Boolean
  ): CurrencyConnection 

  # Arguments
  #   id
  document(id: ID!): Document 

  # Arguments
  #   after
  #   first
  #   before
  #   last
  documents(after: String, first: Int, before: String, last: Int): DocumentConnection 

  # Arguments
  #   id
  feed(id: ID!): Feed 

  # Arguments
  #   after
  #   first
  #   before
  #   last
  feeds(after: String, first: Int, before: String, last: Int): FeedConnection 

  # Arguments
  #   id
  #   vendor_slug:   vendor_slug
  game(id: String, vendor_slug: String): Game 

  # Arguments
  #   after
  #   first
  #   before
  #   last
  #   vendor:   vendor
  #   enabled:   enabled
  #   bonus:   bonus
  #   jackpot:   jackpot
  #   playerState:   playerState
  #   country:   country
  games(
    after: String,
    first: Int,
    before: String,
    last: Int,
    vendor: String,
    enabled: Boolean,
    bonus: Boolean,
    jackpot: Boolean,
    playerState: String,
    country: String
  ): GameConnection 

  # Arguments
  #   after
  #   first
  #   before
  #   last
  gameTags(after: String, first: Int, before: String, last: Int): GameTagConnection 

  # Arguments
  #   id
  gameSession(id: ID!): GameSession 

  # Arguments
  #   after
  #   first
  #   before
  #   last
  #   from:   from
  #   to:   to
  gameSessions(
    after: String,
    first: Int,
    before: String,
    last: Int,
    from: String,
    to: String
  ): GameSessionConnection 

  # Arguments
  #   id
  jackpot(id: ID!): Jackpot 

  # Arguments
  #   after
  #   first
  #   before
  #   last
  jackpots(after: String, first: Int, before: String, last: Int): JackpotConnection 

  # Arguments
  #   after
  #   first
  #   before
  #   last
  languages(after: String, first: Int, before: String, last: Int): LanguageConnection 

  # Arguments
  #   id
  limit(id: ID!): Limit 

  # Arguments
  #   after
  #   first
  #   before
  #   last
  limits(after: String, first: Int, before: String, last: Int): LimitConnection 

  # Arguments
  #   id
  #   slug:   slug
  #   playerState:   playerState
  #   groups:   groups
  #   country:   country
  lobby(id: String, slug: String, playerState: String, groups: String, country: String): Lobby 

  # Arguments
  #   after
  #   first
  #   before
  #   last
  lobbies(after: String, first: Int, before: String, last: Int): LobbyConnection 

  location: Location 

  # Arguments
  #   id
  page(id: ID!): Page 

  # Arguments
  #   after
  #   first
  #   before
  #   last
  #   category
  pages(after: String, first: Int, before: String, last: Int, category: String!): PageConnection 

  # Arguments
  #   id
  paymentMethod(id: ID!): PaymentMethod 

  # Arguments
  #   after
  #   first
  #   before
  #   last
  #   type:   type
  paymentMethods(
    after: String,
    first: Int,
    before: String,
    last: Int,
    type: PaymentMethodType!
  ): PaymentMethodConnection 

  # Arguments
  #   id
  #   template:   template
  #   state:   state
  #   groups:   groups
  #   jurisdiction:   jurisdiction
  promoSpace(
    id: String,
    template: String,
    state: String,
    groups: String,
    jurisdiction: String
  ): PromoSpace @deprecated( reason: &quot;Use `promotion(s)` query instead.&quot; )

  # Arguments
  #   after
  #   first
  #   before
  #   last
  promoSpaces(
    after: String,
    first: Int,
    before: String,
    last: Int
  ): PromoSpaceConnection @deprecated( reason: &quot;Use `promotion(s)` query instead.&quot; )

  # Arguments
  #   id
  #   slug:   slug
  #   template:   template
  #   playerState:   playerState
  #   jurisdiction:   jurisdiction
  promotion(
    id: String,
    slug: String,
    template: String,
    playerState: String,
    jurisdiction: String
  ): Promotion 

  # Arguments
  #   after
  #   first
  #   before
  #   last
  #   template:   template
  #   slug:   slug
  #   groups:   groups
  #   playerState:   playerState
  #   jurisdiction:   jurisdiction
  promotions(
    after: String,
    first: Int,
    before: String,
    last: Int,
    template: String,
    slug: String,
    groups: String,
    playerState: String,
    jurisdiction: String
  ): PromotionConnection 

  # Arguments
  #   slug:   slug
  qnaCategory(slug: String): QnaCategory 

  # Arguments
  #   after
  #   first
  #   before
  #   last
  #   section
  qnaCategories(
    after: String,
    first: Int,
    before: String,
    last: Int,
    section: String!
  ): QnaCategoryConnection 

  # Arguments
  #   id
  #   url
  seo(id: String, url: String): Seo 

  # Arguments
  #   after
  #   first
  #   before
  #   last
  seos(after: String, first: Int, before: String, last: Int): SeoConnection 

  # Arguments
  #   id
  sportEvent(id: ID!): SportEvent 

  # Arguments
  #   after
  #   first
  #   before
  #   last
  #   live
  sportEvents(
    after: String,
    first: Int,
    before: String,
    last: Int,
    live: Boolean
  ): SportEventConnection 

  # Arguments
  #   id
  transaction(id: ID!): Transaction 

  # Arguments
  #   after
  #   first
  #   before
  #   last
  #   from:   from
  #   to:   to
  transactions(
    after: String,
    first: Int,
    before: String,
    last: Int,
    from: String,
    to: String
  ): TransactionConnection 

  # Arguments
  #   id
  viewer(id: ID!): User 

  # Arguments
  #   id
  win(id: ID!): Win 

  # Arguments
  #   after
  #   first
  #   before
  #   last
  wins(after: String, first: Int, before: String, last: Int): WinConnection 

}
```
## Required by
This element is not required by anyone.
