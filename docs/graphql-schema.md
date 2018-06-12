---
id: graphql-schema
title: GraphQL Schema
sidebar_label: GraphQL Schema
---

The API exposes a number of resources that can be queried and/or manipulated. These resources can be categorised as content like banners or SEO metadata and transactional like bonuses or payment transactions.

# CMS Schema
All the CMS resources can be managed in the back-office under the Content menu.

## Banners
Banners are simple resources that only really have an image and can be set with different user states. So for the same banner space there could be images for a logged out user or logged in user for instance.

* banner
* banners

## Feeds
Feeds are basically a mirror from external RSS/Atom feeds. A use case would be if you already manage some content in an external blog and want to replicate it in some way in the casino.

* feed
* feeds

## Pages
Pages are arbitrary content resembling blog articles where a hero image, short description and long description can be provided. Some use cases for it would be a news section, articles/blog section, or user success stories, or any other general content.

* page
* pages

## Promotions
Promotions are exactly what they sound like and in XCaliber platform they are set up using different spaces. Each space needs to be requested by the partner and each space can have multiple titles, descriptions, images, CTAs, etc depending on where the promotion will be shown on the casino.

* promotion
* promotions

## Questions & Answers
Questions & answers are a particular kind of content that is set up in the format that follows its name. It's particularly useful for content like privacy policy, terms and conditions, etc. It's basically a title/description structure that can also be used for other things.

* qnaCategory
* qnaCategories

## SEO
SEO is just simple metadata that can be configured per URL and currently supports changing titles and any met or link tag.

* seo
* seos

# Platform Schema
All the platform resources can be managed under the other menus in the back-office such as Players, Payments or Casino.

## Achievements
* achievement
* achievements
* achievementChain
* achievementChains

## Bonuses
* bonus
* bonuses

## Settings
* countries
* currencies
* languages
* location

## Documents
* document
* documents

## Games
* game
* games

## Game Sessions
* gameSession
* gameSessions

## Jackpots
* jackpot
* jackpots

## Limits
* limit
* limits

## Lobbies
* lobby
* lobbies

## Payment Methods
* paymentMethod
* paymentMethods

## Sport Events
* sportEvent
* sportEvents

## Transactions
* transaction
* transactions

## Wins
* win
* wins

## Users
* viewer
* createUser
* updateUser
