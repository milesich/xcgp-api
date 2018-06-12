/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

// See https://docusaurus.io/docs/site-config.html for all the possible
// site configuration options.

const siteConfig = {
  title: 'XCaliber Gaming Platform API',
  tagline: 'XCaliber Gaming Platform API documentation.',
  disableTitleTagline: true,
  url: 'https://xcaliber-tech.github.io/',
  baseUrl: '/xcgp-api/',

  // Used for publishing and more
  projectName: 'xcgp-api',
  organizationName: 'xcaliber-tech',

  headerLinks: [
    { doc: 'usage', label: 'Reference' },
    { doc: 'guides/graphql/overview', label: 'Guides' },
    { page: 'explorer', label: 'Explorer' },
  ],

  /* path to images for header/footer */
  headerIcon: 'img/xcaliber.svg',
  footerIcon: 'img/xcaliber.svg',
  favicon: 'img/favicon.png',

  /* colors for website */
  colors: {
    primaryColor: '#343c43',
    secondaryColor: '#54839b',
  },

  /* custom fonts for website */
  /*fonts: {
    myFont: [
      "Times New Roman",
      "Serif"
    ],
    myOtherFont: [
      "-apple-system",
      "system-ui"
    ]
  },*/

  // This copyright info is used in /core/Footer.js and blog rss/atom feeds.
  copyright: `Copyright © 2014 - ${new Date().getFullYear()} XCaliber`,

  // Syntax highlight
  highlight: {
    // Highlight.js theme to use for syntax highlighting in code blocks
    theme: 'github',
  },
  usePrism: [
    'graphql',
  ],

  editUrl: 'https://github.com/xcaliber-tech/xcgp-api/edit/master/docs/',

  // Add custom scripts here that would be placed in <script> tags
  scripts: ['https://buttons.github.io/buttons.js'],

  /* On page navigation for the current documentation page */
  onPageNav: 'separate',

  wrapPagesHTML: true,

  // You may provide arbitrary config keys to be used as needed by your
  // template. For example, if you need your repo's URL...
  //   repoUrl: 'https://github.com/facebook/test-site',
};

module.exports = siteConfig;
