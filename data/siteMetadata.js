// import { env } from "@/env.mjs";

/** @type {import("pliny/config").PlinyConfig } */
const siteMetadata = {
  title: 'Dexter Mehta',
  author: 'Dexter Mehta',
  headerTitle: 'Dexter Mehta',
  description: `A personal blog where I write about software engineering and my developer journey. Also, it's my portfolio.`,
  language: 'en-us',
  theme: 'dark', // system, dark or light
  siteUrl: 'http://localhost:3000',

  siteRepo: 'https://github.com/Dexter2099/dexter-personal-site',
  siteLogo: '/static/images/site/logo.png',
  socialBanner: '/static/images/twitter-card.png',
  // mastodon: 'https://mastodon.social/@mastodonuser',
  email: 'Dexter.mehta01@gmail.com',
  github: 'https://github.com/Dexter2099',

  // facebook: 'https://facebook.com',
  // youtube: 'https://youtube.com',
  linkedin: 'https://www.linkedin.com/in/dexter-developer/',
  // threads: 'https://www.threads.net',

  spotify: 'https://open.spotify.com/user/dex048?si=982b9a3640564b22',

  locale: 'en-US',

  /* ------------------------------------------------------------------ */
  /*  Analytics (required by Pliny ≥ 0.2)                               */
  /*  Set to `false` for each provider until you’re ready to enable it. */
  /* ------------------------------------------------------------------ */
  analytics: {
    plausibleAnalytics: false,
    // simpleAnalytics: false,
    // umamiAnalytics: false,
    // posthogAnalytics: false,
    // googleAnalytics: false,
  },

  // If you want to use an analytics provider you have to add it to the
  // content security policy in the `next.config.js` file.
  // supports Plausible, Simple Analytics, Umami, Posthog or Google Analytics.

  // plausibleAnalytics: {
  //   plausibleDataDomain: '', // e.g. yourdomain.com
  // },
  // simpleAnalytics: {},
  // posthogAnalytics: {
  //   posthogProjectApiKey: '', // e.g. 123e4567-e89b-12d3-a456-426614174000
  // },
  // googleAnalytics: {
  //   googleAnalyticsId: '', // e.g. G-XXXXXXX
  // },

  newsletter: {
    // supports mailchimp, buttondown, convertkit, klaviyo, revue, emailoctopus
    // provider: 'buttondown',
  },

  comments: {
    // If you want to use a comments provider you have to add it to the
    // content security policy in the `next.config.js` file.
    // Select a provider and use the environment variables associated to it
    // https://vercel.com/docs/environment-variables
    provider: 'giscus', // supported providers: giscus, utterances, disqus
    giscusConfig: {
      // Visit the link below, and follow the steps in the 'configuration' section
      // https://giscus.app/
      repo: process.env.NEXT_PUBLIC_GISCUS_REPO,
      repositoryId: process.env.NEXT_PUBLIC_GISCUS_REPOSITORY_ID,
      category: process.env.NEXT_PUBLIC_GISCUS_CATEGORY,
      categoryId: process.env.NEXT_PUBLIC_GISCUS_CATEGORY_ID,
      mapping: 'pathname', // supported options: pathname, url, title
      reactions: '1', // Emoji reactions: 1 = enable / 0 = disable
      // Send discussion metadata periodically to the parent window: 1 = enable / 0 = disable
      metadata: '0',
      // theme example: light, dark, dark_dimmed, dark_high_contrast
      // transparent_dark, preferred_color_scheme, custom
      theme: 'light',
      // theme when dark mode
      darkTheme: 'transparent_dark',
      // If the theme option above is set to 'custom`
      // please provide a link below to your custom theme css file.
      // example: https://giscus.app/themes/custom_example.css
      themeURL: '',
      // This corresponds to the `data-lang="en"` in giscus's configurations
      lang: 'en',
    },
  },

  search: {
    provider: 'kbar', // kbar or algolia
    kbarConfig: {
      searchDocumentsPath: 'search.json', // path to load documents to search
    },
    // provider: 'algolia',
    // algoliaConfig: {
    //   appId: 'R2IYF7ETH7',
    //   apiKey: '599cec31baffa4868cae4e79f180729b',
    //   indexName: 'docsearch',
    // },
  },
}

module.exports = siteMetadata
