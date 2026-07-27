// Channel service pages, surfaced as sub-items under "Services" in the navbar.
// Each renders at /services/<slug> via app/services/[slug]/page.jsx.

export const channels = [
  {
    slug: "paid-media",
    name: "Paid Media",
    menuDesc: "Full-funnel social & display",
    eyebrow: "Paid Media",
    title: "Paid media that pays for itself",
    intro:
      "Full-funnel paid social and display across Meta, TikTok, LinkedIn and programmatic — run by allocation systems that reweight budgets toward winners every fifteen minutes, against your payback ceiling.",
    stats: [
      ["4.2x", "median ROAS across managed accounts"],
      ["−38%", "average CPA reduction in 90 days"],
      ["15min", "budget reallocation cycles"],
    ],
    deliverables: [
      "Account architecture rebuilt for learning speed",
      "Weekly creative testing sprints",
      "Algorithmic budget allocation across channels",
      "Retargeting and remarketing systems",
      "Audience and geo expansion programs",
      "Payback-based reporting your CFO can trust",
    ],
    steps: [
      { t: "Audit", b: "We tear down your accounts, events and creative library, and find where spend is leaking." },
      { t: "Rebuild", b: "Clean structure, server-side signals, and a creative pipeline that never starves the algorithm." },
      { t: "Compound", b: "Weekly cycles of testing and reallocation push CPA down while volume scales up." },
    ],
    cta: {
      title: "Ready for paid media with real payback?",
      body: "Book a free teardown — we’ll audit your accounts and show you where the efficient growth is hiding.",
    },
  },
  {
    slug: "paid-search",
    name: "Paid Search",
    menuDesc: "Google & Bing intent capture",
    eyebrow: "Paid Search",
    title: "Own the moment of intent",
    intro:
      "Google and Microsoft search campaigns engineered around buying intent — clean structure, relentless query mining, and smart-bidding guardrails that keep the machine honest.",
    stats: [
      ["−41%", "average cost per lead after restructure"],
      ["96%", "brand impression share defended"],
      ["3.6x", "median search ROAS"],
    ],
    deliverables: [
      "Intent-tiered keyword and campaign structure",
      "Responsive search ad testing at scale",
      "Smart-bidding strategy with guardrails",
      "Continuous negative keyword mining",
      "Landing page and CRO experiments",
      "Offline conversion feedback into bidding",
    ],
    steps: [
      { t: "Map intent", b: "We rebuild your account around what searches actually mean — from problem-aware to ready-to-buy." },
      { t: "Feed the machine", b: "Clean conversion data and value signals so automated bidding optimizes toward revenue, not clicks." },
      { t: "Squeeze the funnel", b: "Query mining, ad testing and landing experiments keep cost per acquisition trending down." },
    ],
    cta: {
      title: "Capturing intent, or paying for clicks?",
      body: "Get a free search account teardown — structure, wasted spend, and the queries you’re missing.",
    },
  },
  {
    slug: "youtube-ads",
    name: "YouTube Ads",
    menuDesc: "Video that converts, not just plays",
    eyebrow: "YouTube Ads",
    title: "Turn watch time into signups",
    intro:
      "YouTube campaigns built for performance, not applause — hook-first creative, tight audience signals, and measurement that proves the channel actually causes growth.",
    stats: [
      ["−33%", "CPA vs. paid social averages"],
      ["2.4x", "brand search lift from video campaigns"],
      ["6s", "hooks tested before a dollar scales"],
    ],
    deliverables: [
      "Hook-first performance creative production",
      "Video action and demand gen campaign builds",
      "Audience signals from your first-party data",
      "Ad sequencing and remarketing flows",
      "Geo-lift incrementality measurement",
      "Creative iteration from retention curves",
    ],
    steps: [
      { t: "Hook", b: "We script and test opening seconds relentlessly — the first six seconds decide your CPA." },
      { t: "Target", b: "Custom intent, customer match and lookalike signals point the algorithm at real buyers." },
      { t: "Prove", b: "Geo experiments and brand-lift studies separate real impact from platform-claimed credit." },
    ],
    cta: {
      title: "Video budget going to views, not users?",
      body: "Book a free teardown of your YouTube setup — creative, targeting and measurement.",
    },
  },
  {
    slug: "tiktok-ads",
    name: "TikTok Ads",
    menuDesc: "Creative-led installs at scale",
    eyebrow: "TikTok Ads",
    title: "Win the feed, then the install",
    intro:
      "On TikTok, the creative is the targeting. We run performance campaigns powered by a weekly pipeline of native, sound-on creative — optimized to users who stay, not just users who tap.",
    stats: [
      ["−36%", "cost per install vs. account averages"],
      ["8/wk", "native creatives shipped and tested"],
      ["2.1x", "D30 retention on optimized cohorts"],
    ],
    deliverables: [
      "TikTok pixel and Events API setup",
      "Weekly native and UGC creative sprints",
      "Spark Ads with creator partnerships",
      "Post-install event optimization",
      "Hook and angle testing frameworks",
      "Retention-cohort reporting, not CPI theatre",
    ],
    steps: [
      { t: "Make it native", b: "Creator-style, sound-on creative that belongs in the feed — nothing that screams ad." },
      { t: "Optimize past the install", b: "Events API signals point delivery at users who activate and pay, not just download." },
      { t: "Refresh relentlessly", b: "TikTok creative decays in days. A weekly pipeline keeps winners fresh and CPIs falling." },
    ],
    cta: {
      title: "Cheap installs are easy. Retained users aren't.",
      body: "Book a free teardown — we’ll show you what your TikTok spend is really buying, cohort by cohort.",
    },
  },
  {
    slug: "shopping-ads",
    name: "Shopping Ads",
    menuDesc: "Feed-led Shopping & PMax",
    eyebrow: "Shopping Ads",
    title: "Win the digital shelf",
    intro:
      "Google Shopping and Performance Max run from the feed up — because in shopping, the product data is the campaign. We optimize titles, attributes and structure until every SKU earns its spend.",
    stats: [
      ["+52%", "ROAS after feed rebuilds"],
      ["100%", "of SKUs mapped to margin data"],
      ["−27%", "wasted spend cut from PMax"],
    ],
    deliverables: [
      "Product feed optimization and testing",
      "Title, attribute and image experiments",
      "PMax structure with real controls",
      "SKU-level bidding by profitability",
      "Price competitiveness monitoring",
      "Promotions and seasonal strategy",
    ],
    steps: [
      { t: "Fix the feed", b: "Titles, attributes and taxonomy rebuilt around how shoppers actually search." },
      { t: "Structure for control", b: "PMax and Shopping campaigns segmented so budget follows margin, not just volume." },
      { t: "Optimize by SKU", b: "Profit-weighted bidding and continuous query mining keep every product accountable." },
    ],
    cta: {
      title: "Is every SKU pulling its weight?",
      body: "Get a free feed and PMax teardown — we’ll show you where margin is leaking.",
    },
  },
  {
    slug: "telegram-ads",
    name: "Telegram Ads",
    menuDesc: "In-chat reach at massive scale",
    eyebrow: "Telegram Ads",
    title: "Growth where your users actually chat",
    intro:
      "Telegram’s ad platform reaches nearly a billion users with some of the cheapest attention in paid media — if you understand its native formats, channel culture and mini-app funnels. We do.",
    stats: [
      ["950M+", "monthly users reachable"],
      ["−47%", "CPA vs. Meta for fintech & crypto clients"],
      ["10x", "cheaper clicks in emerging markets"],
    ],
    deliverables: [
      "Official Telegram Ads platform setup",
      "Channel and interest targeting strategy",
      "Native-format creative that doesn’t feel like ads",
      "Mini-app and bot onboarding funnels",
      "Community and channel growth programs",
      "Compliance-safe setup for regulated verticals",
    ],
    steps: [
      { t: "Position", b: "We find the channels and interests where your users already spend hours a day." },
      { t: "Convert in-chat", b: "Bot flows and mini-apps turn a tap into an activated user without leaving Telegram." },
      { t: "Scale carefully", b: "Frequency and creative rotation tuned to a platform where users punish spam instantly." },
    ],
    cta: {
      title: "Your competitors aren’t here yet.",
      body: "Book a call and we’ll map whether Telegram’s audience matches your product — before the auction gets crowded.",
    },
  },
  {
    slug: "reddit-ads",
    name: "Reddit Ads",
    menuDesc: "Community-led performance",
    eyebrow: "Reddit Ads",
    title: "Show up where decisions get researched",
    intro:
      "Buyers research software on Reddit before they ever hit your landing page. We run Reddit campaigns that respect community culture — native-tone creative, subreddit precision, and measurement that holds up.",
    stats: [
      ["2.9x", "conversion rate with community targeting"],
      ["−35%", "CPA with native-tone creative"],
      ["#1", "research surface for software buyers"],
    ],
    deliverables: [
      "Subreddit and interest targeting strategy",
      "Native-tone creative that earns upvotes, not scorn",
      "Conversion API and pixel implementation",
      "Keyword and context targeting",
      "Community presence and AMA strategy",
      "Brand safety and comment monitoring",
    ],
    steps: [
      { t: "Listen first", b: "We map the subreddits where your category is discussed and how the community talks." },
      { t: "Blend in, stand out", b: "Creative written in Reddit’s register — direct, specific, allergic to marketing speak." },
      { t: "Measure honestly", b: "CAPI events and holdout tests prove Reddit’s real contribution to pipeline." },
    ],
    cta: {
      title: "Reddit already talks about your category.",
      body: "Book a free teardown — we’ll show you the subreddits, the angle, and the numbers to expect.",
    },
  },
  {
    slug: "snapchat-ads",
    name: "Snapchat Ads",
    menuDesc: "Gen Z reach & AR formats",
    eyebrow: "Snapchat Ads",
    title: "Reach the audience others can't",
    intro:
      "Snapchat reaches younger users that Meta and Google increasingly miss — at CPMs they can’t match. We run performance campaigns and AR formats that turn that reach into installs and signups.",
    stats: [
      ["75%", "of 13–34s reachable in core markets"],
      ["−29%", "CPI vs. TikTok on app campaigns"],
      ["5x", "engagement on AR lens formats"],
    ],
    deliverables: [
      "Snap pixel and Conversions API setup",
      "Vertical-first performance creative",
      "App install and purchase optimization",
      "AR lens and filter production",
      "Story and collection ad programs",
      "Cohort-based retention reporting",
    ],
    steps: [
      { t: "Instrument", b: "Clean signal setup so Snap’s delivery optimizes toward users who stay, not just tap." },
      { t: "Create native", b: "Fast, vertical, sound-on creative made for how Snapchat is actually used." },
      { t: "Scale winners", b: "Creative and audience iteration against retention cohorts, not install counts." },
    ],
    cta: {
      title: "Missing the under-30 audience?",
      body: "Book a call — we’ll size Snapchat’s audience for your product and project the unit economics.",
    },
  },
  {
    slug: "chatgpt-ads",
    name: "ChatGPT Ads",
    menuDesc: "Be the answer in AI chat",
    eyebrow: "AI Chat Advertising",
    title: "Get recommended by the AI your buyers ask",
    intro:
      "Buyers now ask AI assistants what software to use. We manage sponsored placements in AI chat surfaces and engineer your content so assistants cite and recommend you — the newest acquisition channel, before it gets expensive.",
    stats: [
      ["800M+", "weekly users asking AI for recommendations"],
      ["First-mover", "CPCs before the auction matures"],
      ["3.4x", "conversion rate of AI-referred visitors"],
    ],
    deliverables: [
      "Sponsored placement management in AI chat surfaces",
      "Conversational ad creative and testing",
      "Answer-engine optimization (AEO) for citations",
      "Brand-mention monitoring across assistants",
      "Landing experiences built for AI-referred intent",
      "Incrementality measurement for AI channels",
    ],
    steps: [
      { t: "Get cited", b: "We structure your content and proof so assistants recommend you organically." },
      { t: "Buy the moment", b: "Sponsored placements against the exact questions your buyers ask AI." },
      { t: "Convert the click", b: "AI-referred visitors arrive pre-sold — we build landing flows that don’t squander it." },
    ],
    cta: {
      title: "The next channel is already here.",
      body: "Book a call and we’ll show you what your buyers are asking AI — and whether you’re the answer.",
    },
  },
];

export function getChannel(slug) {
  return channels.find((c) => c.slug === slug);
}

export function getChannelSlugs() {
  return channels.map((c) => c.slug);
}
