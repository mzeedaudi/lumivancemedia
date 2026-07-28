// Central content for Lumivance — swap copy/numbers here without touching components.

export const site = {
  name: "Lumivance",
  tagline: "User acquisition for software & apps",
  email: "hello@lumivancemedia.com",
  // Leave blank to hide the row entirely — better an absent phone number than a
  // fake one. Fill in when the real line is live.
  phone: "",
  location: "Remote-first",
  // Social profiles. Blank entries are not rendered, so no dead links ship.
  social: {
    linkedin: "",
    x: "",
  },
  // Registered entity details, used in the legal pages.
  legal: {
    entity: "Lumivance Media",
    jurisdiction: "",
    address: "",
  },
};

export const nav = [
  { label: "Services", href: "/services" },
  { label: "Case Studies", href: "/case-studies" },
  { label: "Blog", href: "/blog" },
  { label: "Pricing", href: "/pricing" },
  { label: "About", href: "/about" },
];

export const stats = [
  { value: 4.2, suffix: "x", label: "Median return on ad spend", sub: "across paid acquisition accounts" },
  { value: 38, prefix: "−", suffix: "%", label: "Lower cost per install", sub: "in the first 90 days, on average" },
  { value: 120, suffix: "M+", label: "Qualified users acquired", sub: "for SaaS & mobile products" },
  { value: 30, suffix: "+", label: "Software companies scaled", sub: "from seed to Series C" },
];

export const services = [
  {
    id: "paid-acquisition",
    title: "Paid Acquisition",
    blurb:
      "Full-funnel paid media on Meta, Google, TikTok, and Apple Search Ads — engineered to drive installs and activations, not vanity clicks.",
    points: ["Creative testing at scale", "Bid & budget automation", "Geo & audience expansion"],
  },
  {
    id: "aso-seo",
    title: "ASO & SEO",
    blurb:
      "Own the search surfaces your buyers actually use. App store optimization and organic search that compound month over month.",
    points: ["Keyword & metadata strategy", "Store listing experiments", "Programmatic SEO"],
  },
  {
    id: "lifecycle",
    title: "Lifecycle & Retention",
    blurb:
      "Acquisition without retention is a leaky bucket. We design onboarding, push, and email flows that turn signups into habits.",
    points: ["Onboarding optimization", "Push & email automation", "Churn-trigger campaigns"],
  },
  {
    id: "creative",
    title: "Performance Creative",
    blurb:
      "An in-house studio shipping thumb-stopping ad creative weekly — static, motion, and UGC built to beat your control.",
    points: ["Weekly creative sprints", "UGC & motion ads", "Hook & angle research"],
  },
  {
    id: "analytics",
    title: "Attribution & Analytics",
    blurb:
      "Know exactly which dollar drove which user. Clean attribution, MMM, and dashboards your whole team can trust.",
    points: ["MMP & server-side setup", "Incrementality testing", "Live growth dashboards"],
  },
  {
    id: "strategy",
    title: "Growth Strategy",
    blurb:
      "A dedicated growth lead who owns your number. Quarterly roadmaps, weekly experiments, and a model that ties spend to revenue.",
    points: ["Growth modeling", "Channel diversification", "Quarterly roadmaps"],
  },
];

export const process = [
  {
    step: "01",
    title: "Diagnose",
    body: "We audit your funnel, attribution, and creative library, then build a growth model that maps spend to revenue.",
  },
  {
    step: "02",
    title: "Design",
    body: "A 90-day acquisition plan: channels, budgets, creative angles, and the experiments that move your north-star metric.",
  },
  {
    step: "03",
    title: "Deploy",
    body: "We launch fast and test weekly — new creative, audiences, and landing experiments shipping every single week.",
  },
  {
    step: "04",
    title: "Compound",
    body: "Winners scale, losers get cut, learnings stack. Your cost per user trends down while volume trends up.",
  },
];

// Flagship case studies. Fictional clients — swap in real ones (with written
// permission to use their name, logo, and numbers) as they come in. Each has a
// brand identity (postcard colors + logo in components/BrandLogo.jsx), a
// company profile, a step-by-step engagement timeline, and an exec quote.
export const work = [
  {
    id: "sitewright",
    client: "Sitewright",
    category: "B2B SaaS",
    headline: "How Sitewright grew new paid subscriptions 84% in nine months",
    metric: "+84%",
    metricLabel: "new paid subscriptions",
    summary:
      "A website builder spending 70% of its budget defending its own brand name. We proved it, freed the money, and rebuilt the mix around users who'd never heard of them.",
    brand: { from: "#F97316", to: "#FBBF24" },
    website: "sitewright.com",
    about:
      "Sitewright sells website building and hosting to small local businesses — barbers, plumbers, dental practices, independent restaurants. The product promise is narrow and well-executed: a published, mobile-ready site with online booking and payments in a single afternoon, no developer involved, on a monthly subscription that bundles the domain, hosting, and certificate. About 140 people out of Austin, profitable, and — when they called us — growing far too slowly for a company with that retention rate.",
    profile: {
      what: "Website builder & hosting for local businesses",
      size: "≈140 people",
      hq: "Austin, TX",
      engagement: "9 months · Paid media, CRO, analytics",
    },
    challenge:
      "Sitewright came to us spending about $210k a month on paid, with roughly 70% of it going to branded search — bidding on their own name. Last-click reporting made that spend look phenomenal, which is exactly why their previous agency kept feeding it. Meanwhile non-brand CPCs in the website-builder auctions were running north of $14, new-subscription growth had been flat for five straight quarters, and nobody could say which half of the budget was actually doing anything.",
    timeline: [
      {
        phase: "Weeks 1–3",
        title: "Prove where the money was going",
        body: "We ran a branded-search holdout in two matched metro groups: paused brand bidding in one, kept it in the other. Organic clicks absorbed the vast majority of the 'lost' conversions. That one test freed roughly $60k a month — and gave the CFO a reason to trust everything that came after.",
      },
      {
        phase: "Weeks 3–6",
        title: "Fix what 'a signup' means",
        body: "Their pixel fired on account creation, but a third of accounts never published a site. We moved tracking server-side and redefined the optimization event as a published site — the moment that actually predicts a paying subscriber. Every platform started learning from real signal instead of empty accounts.",
      },
      {
        phase: "Months 2–4",
        title: "Creative about customers, not features",
        body: "We interviewed fourteen of their small-business customers and built ads around them: a barber publishing her booking page in an evening, a plumber whose site outranks the franchise down the road. The first Meta batch beat the old control on cost per published site by 38%. Not everything landed — a polished YouTube pre-roll flopped for a month until we reshot it as a founder-style talking head.",
      },
      {
        phase: "Months 4–6",
        title: "Capture intent beyond the brand",
        body: "We rebuilt non-brand search around trade verticals — restaurants, trades, salons — each with its own landing page and examples, and shipped comparison pages for the searches buyers make late in the decision. Non-brand signups became the largest single source of new subscribers for the first time in company history.",
      },
      {
        phase: "Months 6–9",
        title: "Scale against a payback ceiling",
        body: "With measurement trusted and creative compounding, we raised budgets in 20% steps against an eight-month payback ceiling. Brand search settled at 28% of the mix — defensive, right-sized, and no longer the engine's fuel.",
      },
    ],
    outcome:
      "Nine months in, new paid subscriptions were up 84% on a budget only modestly higher than where we started, blended CAC was down 31%, and non-brand volume had grown 2.4x. The growth model, dashboards, and creative library all stayed with Sitewright's in-house team.",
    quote: {
      text: "We'd been buying our own customers back for years without seeing it. Lumivance proved it in three weeks, then rebuilt the engine around people we'd never have reached.",
      name: "Dana Okafor",
      role: "VP of Marketing, Sitewright",
    },
    results: [
      ["+84%", "new paid subscriptions / mo"],
      ["−31%", "blended CAC"],
      ["2.4x", "non-brand signup volume"],
    ],
  },
  {
    id: "brightvault",
    client: "Brightvault",
    category: "Fintech",
    headline: "Funded accounts up 3.1x — with payback cut from 13 months to 7",
    metric: "3.1x",
    metricLabel: "monthly funded accounts",
    summary:
      "A savings app celebrating cheap installs that never funded. We moved the goalposts to funded accounts and rebuilt everything behind them.",
    brand: { from: "#10B981", to: "#34D399" },
    website: "brightvault.co.uk",
    about:
      "Brightvault is a consumer savings and investing app aimed at people who have never invested before. Users round up card purchases into a savings pot, set goals, and — once they're comfortable — move money into a small set of managed funds. Revenue comes from a flat monthly subscription rather than trading fees, which the founders treat as a point of principle. Around 90 people in London, FCA-regulated, and living with every advertising restriction that comes with financial promotions.",
    profile: {
      what: "Consumer savings & investing app",
      size: "≈90 people",
      hq: "London, UK",
      engagement: "11 months · Paid social, ASO, lifecycle",
    },
    challenge:
      "Brightvault's dashboards looked healthy — £1.90 installs and rising downloads — but only 9% of installs ever funded an account, and finance was quietly at war with marketing over whose numbers were real. An app update had also knocked their store rating to 2.9 stars, which was bleeding conversion from every channel at once, paid included.",
    timeline: [
      {
        phase: "Weeks 1–4",
        title: "Move the goalposts to funded",
        body: "We mapped the full event funnel and pushed funded-account events back to the platforms through the Conversions API, then told the team plainly: CPI is going to get worse, and that's the plan. Optimizing to the users who deposit costs more per install and much less per customer.",
      },
      {
        phase: "Months 1–3",
        title: "Stop the store-listing bleed",
        body: "The 2.9-star rating was taxing every campaign. We rebuilt the review prompt to trigger after a user's first successful save — not on launch — and A/B-tested screenshots until a fee-transparency concept won. Store conversion recovered 26%, which effectively made every paid click cheaper.",
      },
      {
        phase: "Months 2–5",
        title: "Creative that earns trust",
        body: "Finance ads can't hype, so we built modular, compliance-approved scripts around one honest moment: the first £100 saved. UGC creators told that story in their own words. Our one big miss — a slick lifestyle concept — died in testing within two weeks, and we documented why so it stayed dead.",
      },
      {
        phase: "Months 4–8",
        title: "Close the gap between install and deposit",
        body: "We rewired onboarding with the product team: trimmed the KYC drop-off screens, moved the first deposit prompt into day zero, and built a three-day nudge sequence for verified-but-unfunded users. Install-to-funded conversion climbed from 9% to 19%.",
      },
      {
        phase: "Months 8–11",
        title: "Scale what now works",
        body: "With unit economics finally trustworthy, we tripled monthly spend across Meta, TikTok Spark Ads, and Apple Search Ads — holding payback under seven months the whole way up.",
      },
    ],
    outcome:
      "Eleven months in, funded accounts were up 3.1x, cost per funded account down 44%, and CAC payback cut from 13.2 to 6.8 months — numbers the board now sees monthly, from a dashboard both finance and marketing sign off on.",
    quote: {
      text: "The first month they told us our CPI would get worse and we nearly walked. Funded accounts tripled. Best 'worse' we've ever bought.",
      name: "Tomás Herrera",
      role: "Head of Growth, Brightvault",
    },
    results: [
      ["3.1x", "monthly funded accounts"],
      ["6.8 mo", "CAC payback, down from 13.2"],
      ["−44%", "cost per funded account"],
    ],
  },
  {
    id: "trailform",
    client: "Trailform",
    category: "Consumer App",
    headline: "From 60k to 210k monthly installs — with retention up, not down",
    metric: "210k",
    metricLabel: "installs / month",
    summary:
      "An outdoor fitness app buying gym-goers who churned by week two. We aimed spend at trail seasons and real hikers instead.",
    brand: { from: "#F43F5E", to: "#FB923C" },
    website: "trailform.app",
    about:
      "Trailform is a hiking and trail-running app: offline topographic maps, crowd-sourced trail conditions, and GPS tracking that keeps working where cell service doesn't. Its real asset is the community — users log routes, flag washed-out bridges and snowpack, and photograph summits, which is what keeps the map current in a way no vendor dataset manages. A 40-person team in Denver, funded largely by a premium subscription for offline maps.",
    profile: {
      what: "Hiking & trail-running app",
      size: "≈40 people",
      hq: "Denver, CO",
      engagement: "8 months · Paid social, ASO, creative",
    },
    challenge:
      "Trailform was stuck at 60k installs a month with brutal seasonality and a targeting setup that lumped them in with every fitness app on the store. Generic 'get fit' audiences installed and vanished — D30 retention on paid users ran at half the organic rate — and their single polished brand video had been fatiguing for six months because there was nothing behind it.",
    timeline: [
      {
        phase: "Weeks 1–4",
        title: "Optimize for hikers, not installs",
        body: "We swapped the optimization event from install to a D7-retained user who had recorded at least one trail. Volume dipped for three weeks while the algorithms re-learned — then came back composed of people who actually go outside.",
      },
      {
        phase: "Months 1–3",
        title: "Build the creative around real summits",
        body: "Trailform's community hashtag was full of summit videos. We licensed the best of them directly from users, cut them into hook-first UGC ads, and retired the brand film. A winter-running concept we were sure about flopped in a week of testing; the money moved to what the data liked instead.",
      },
      {
        phase: "Months 2–4",
        title: "Own the trail-map searches",
        body: "ASO had been an afterthought. We rebuilt metadata around the 'trail map' and regional keyword clusters, localized screenshots by terrain — desert, alpine, coast — and lifted store conversion enough that every paid click started going further.",
      },
      {
        phase: "Months 3–6",
        title: "Let the budget follow the snowmelt",
        body: "We built a geo calendar that moved spend north with spring: southern states in March, the Rockies and Pacific Northwest by June, and a Southern-Hemisphere test in Australia for the off-season. Seasonality stopped being a problem and became the plan.",
      },
      {
        phase: "Months 6–8",
        title: "Scale the machine",
        body: "With retention-positive audiences, a weekly creative cadence, and the seasonal calendar running, we stepped budgets up 20% at a time to a new baseline of 210k installs a month.",
      },
    ],
    outcome:
      "Eight months in, installs had grown 3.5x while D30 retention on paid users rose 38% — the combination everyone had told the founders was impossible. Cost per retained user fell 27%, and the seasonal playbook now reruns each year without us.",
    quote: {
      text: "They planned our media like a field guide — the budget literally followed the snowmelt north. We tripled volume and retention went up, which we'd been told couldn't happen.",
      name: "Casey Lindqvist",
      role: "Co-founder, Trailform",
    },
    results: [
      ["3.5x", "monthly installs"],
      ["+38%", "D30 retention on paid users"],
      ["−27%", "cost per retained user"],
    ],
  },
  {
    id: "hexlab",
    client: "Hexlab",
    category: "Dev Tools",
    headline: "A self-serve engine developers didn't hate: activations up 312%",
    metric: "+312%",
    metricLabel: "activated workspaces",
    summary:
      "A CI/CD platform whose gated whitepapers produced leads sales ignored. We built acquisition that reads like documentation.",
    brand: { from: "#38BDF8", to: "#6366F1" },
    website: "hexlab.dev",
    about:
      "Hexlab is a CI/CD platform for engineering teams who have outgrown the pipeline that shipped with their code host. It runs builds and tests on faster hardware, caches aggressively between runs, and spins up a disposable preview environment for every pull request so reviewers can click through a change instead of imagining it. Sold self-serve per seat with a free tier for open source. Around 70 engineers and support staff in Berlin.",
    profile: {
      what: "CI/CD & preview-environments platform",
      size: "≈70 people",
      hq: "Berlin, DE",
      engagement: "10 months · Paid, content-led SEO, analytics",
    },
    challenge:
      "Hexlab had learned the hard way that developers don't fill in forms: their gated-whitepaper funnel produced MQLs that sales stopped calling, retargeting made their own community grumble, and paid signups activated at less than half the organic rate. Meanwhile the actual product — first pipeline green in under ten minutes — was doing none of the selling.",
    timeline: [
      {
        phase: "Weeks 1–4",
        title: "Define activation like an engineer",
        body: "We set the north-star as an activated workspace: a real repository with a first green pipeline run. Everything upstream got measured against it, and the gated-content funnel was shut down without ceremony.",
      },
      {
        phase: "Months 1–4",
        title: "Publish benchmarks, not brochures",
        body: "With their engineers we built a public build-speed benchmark comparing Hexlab against the tools developers already used — reproducible, methodology included. It became the most-linked page on the site and the single biggest source of qualified signups.",
      },
      {
        phase: "Months 2–5",
        title: "Ads that read like docs",
        body: "The creative that worked looked like documentation: terminal output, a YAML config, one plain sentence. We ran it on Reddit's engineering subreddits and sponsored two newsletters developers actually read. CTR tripled against the old display creative, and the comments went from hostile to curious.",
      },
      {
        phase: "Months 4–7",
        title: "Build the long-tail surface",
        body: "We shipped programmatic comparison and integration pages — every framework, runner, and migration path — each with working config examples. Organic signups grew until they were 41% of the total.",
      },
      {
        phase: "Months 7–10",
        title: "Make teams the channel",
        body: "Activation data showed workspaces with two or more members retained dramatically better, so we instrumented invites as a first-class channel and rebuilt onboarding to prompt them at the right moment. The PLG loop started feeding itself.",
      },
    ],
    outcome:
      "Ten months in, activated workspaces were up 312% at a 38% lower cost per activation, organic had become the largest signup source, and sales was calling accounts that had already run their pipelines — a very different conversation.",
    quote: {
      text: "Their ads looked like something our own engineers would write, which is the only reason developers clicked them.",
      name: "Yuki Tanaka",
      role: "CEO, Hexlab",
    },
    results: [
      ["+312%", "activated workspaces"],
      ["−38%", "cost per activation"],
      ["41%", "of signups now organic"],
    ],
  },
  {
    id: "skillcove",
    client: "Skillcove",
    category: "EdTech",
    headline: "Fourteen profitable markets and 2.1M new learners in 14 months",
    metric: "2.1M",
    metricLabel: "learners acquired",
    summary:
      "A creative-skills marketplace saturated at home and stalling abroad. We built a launch playbook and ran it country by country.",
    brand: { from: "#22D3EE", to: "#0EA5E9" },
    website: "skillcove.com",
    about:
      "Skillcove is a marketplace for creative-skills courses — illustration, music production, photography, ceramics — where working professionals publish structured video classes and earn a share of subscription revenue based on watch time. Learners pay one monthly fee for the whole catalogue rather than buying courses individually, which makes discovery, not checkout, the thing the business lives or dies on. About 120 people headquartered in Toronto.",
    profile: {
      what: "Online marketplace for creative-skills courses",
      size: "≈120 people",
      hq: "Toronto, CA",
      engagement: "14 months · International paid, ASO, creative",
    },
    challenge:
      "Skillcove owned its US niche but the growth curve had gone flat, and two international attempts had already failed — translated US ads that landed wrong in Japan and an underfunded German test that taught nothing. The board wanted international revenue; the team wanted to never repeat those launches.",
    timeline: [
      {
        phase: "Weeks 1–5",
        title: "Score the markets before spending",
        body: "We built a ranking model from search demand, competitor density, payment behavior, and price tolerance per market. Japan, Brazil, and Germany came out on top — Germany stayed on the list despite the failed test, because the data said the market wasn't the problem. The launch was.",
      },
      {
        phase: "Months 2–4",
        title: "Local creators instead of translation",
        body: "In each launch market we partnered with mid-size local creators in Skillcove's top categories — illustration in Japan, music production in Brazil — and let them sell the platform in their own voice. Translated US creative was retired entirely.",
      },
      {
        phase: "Months 3–6",
        title: "Localize the whole funnel, not the ads",
        body: "Store listings, landing pages, pricing display, and payment methods were localized per market — boleto support in Brazil moved conversion on its own. The relaunched Germany campaign still underperformed for six weeks until we replaced stock-style imagery with local student work; that single change flipped the market profitable.",
      },
      {
        phase: "Months 5–9",
        title: "Codify the playbook",
        body: "Everything that worked became a six-week launch sequence — market scoring, creator sourcing, localization checklist, budget ramp, kill criteria. The next six markets launched with it, each faster and cheaper than the one before.",
      },
      {
        phase: "Months 9–14",
        title: "Run it at scale",
        body: "A central creative library with per-market remix rights kept fourteen markets fed without fourteen creative teams. Blended cost per subscriber fell 35% below the US-only baseline.",
      },
    ],
    outcome:
      "Fourteen months in, Skillcove was profitably live in fourteen markets with 2.1 million new learners. International revenue went from a board slide to a third of the business — and the launch playbook keeps running without us in the room.",
    quote: {
      text: "The Germany launch missed, the playbook got better, and the next six markets hit. That's what a system looks like.",
      name: "Amara Diallo",
      role: "VP of Growth, Skillcove",
    },
    results: [
      ["2.1M", "new learners"],
      ["14", "profitable markets"],
      ["−35%", "cost per subscriber vs US baseline"],
    ],
  },
  {
    id: "parcelio",
    client: "Parcelio",
    category: "E-commerce",
    headline: "From trade-show leads to 5,400 self-serve merchant signups a month",
    metric: "+257%",
    metricLabel: "monthly merchant signups",
    summary:
      "A shipping platform built on booths and resellers. We turned it into a measurable self-serve acquisition machine.",
    brand: { from: "#A78BFA", to: "#D946EF" },
    website: "parcelio.eu",
    about:
      "Parcelio sits between an online store and its carriers. It pulls in orders from Shopify, WooCommerce, and Magento, compares live rates across national posts and couriers, prints the labels, and handles the parts merchants dread — customs paperwork, returns portals, and the tracking emails customers actually open. It bills per shipment rather than per seat, so it grows with the merchant. About 160 people in Rotterdam, strongest across the Benelux and DACH markets.",
    profile: {
      what: "Shipping & fulfillment software for online stores",
      size: "≈160 people",
      hq: "Rotterdam, NL",
      engagement: "12 months · Paid, SEO tooling, activation",
    },
    challenge:
      "Parcelio's growth had been built on trade shows and reseller deals — solid revenue, zero measurability, and a website converting at 0.8%. Their one attempt at paid social had targeted 'e-commerce' as an interest, which meant showing shipping software to people who merely shop online. Nobody had ever asked what a merchant was worth or which ones were reachable.",
    timeline: [
      {
        phase: "Weeks 1–4",
        title: "Find the real ICP in the data",
        body: "We profiled their best merchants and found the pattern: stores on Shopify and WooCommerce shipping 50–500 orders a month. Platform app-store presence became our intent signal — a merchant browsing shipping apps is a merchant in-market — and the audience work rebuilt itself from there.",
      },
      {
        phase: "Months 1–3",
        title: "A landing page per integration",
        body: "The generic homepage was replaced as an ad destination by per-platform pages — Parcelio for Shopify, for WooCommerce, for Magento — each with the exact setup flow, carriers, and pricing for that stack. Conversion on paid traffic went from 0.8% to 3.4%.",
      },
      {
        phase: "Months 2–5",
        title: "Build the tool merchants search for",
        body: "We shipped a free shipping-cost calculator comparing carrier rates by country and parcel size. It ranked for hundreds of long-tail queries within two quarters and became the highest-intent signup source on the site — merchants arrive mid-calculation, already comparing costs.",
      },
      {
        phase: "Months 4–8",
        title: "Ads from the warehouse floor",
        body: "Polished product tours tested poorly against footage of real merchants in real packing rooms talking about rate savings and missed pickups. We leaned into it: founder-shot warehouse video became the workhorse format across Meta and LinkedIn.",
      },
      {
        phase: "Months 8–12",
        title: "Chase shipments, not signups",
        body: "Signups meant nothing until a merchant shipped. With their team we rebuilt onboarding around the first label printed — carrier connection first, a setup call for high-volume signups, a nudge sequence for the rest. Median time from signup to first shipment fell from 44 days to 19.",
      },
    ],
    outcome:
      "A year in, Parcelio was signing up 5,400 merchants a month self-serve — up 257% — at a 41% lower cost per active merchant, with the calculator and integration pages compounding underneath the paid engine. Trade shows are now something they attend, not depend on.",
    quote: {
      text: "We used to buy booths and hope. Now we buy growth we can measure down to the shipment.",
      name: "Joris van Dam",
      role: "CMO, Parcelio",
    },
    results: [
      ["+257%", "monthly merchant signups"],
      ["−41%", "cost per active merchant"],
      ["19 days", "signup to first shipment, from 44"],
    ],
  },
];

// Full case-study library (compact cards). 25 across the software landscape.
export const caseStudies = [
  { id: "hyperloop", client: "Hyperloop", category: "Dev Tools", metric: "+318%", metricLabel: "free-to-paid signups", headline: "Turning a developer tool into a self-serve growth engine", summary: "A CI/CD platform relied on outbound. We built a PLG funnel that made signups compound." },
  { id: "paperplane", client: "Paperplane", category: "Productivity", metric: "1.9M", metricLabel: "installs in 9 months", headline: "From niche note app to category contender", summary: "ASO plus performance creative took a sleepy app to seven figures of installs." },
  { id: "quanta", client: "Quanta", category: "Fintech", metric: "−47%", metricLabel: "cost per funded account", headline: "Halving CAC for a neobank in a crowded market", summary: "Creative testing and server-side tracking cut acquisition cost nearly in half." },
  { id: "lumen", client: "Lumen Health", category: "Healthtech", metric: "5.3x", metricLabel: "return on ad spend", headline: "Compliant acquisition that still scales", summary: "We grew a telehealth brand inside strict ad policies without sacrificing volume." },
  { id: "stacked", client: "Stacked", category: "B2B SaaS", metric: "+241%", metricLabel: "pipeline sourced", headline: "Marketing-sourced pipeline more than tripled", summary: "An RevOps platform needed pipeline, not leads. We rebuilt the funnel around revenue." },
  { id: "orbital", client: "Orbital", category: "AI / ML", metric: "62k", metricLabel: "waitlist signups", headline: "A launch that turned hype into a waitlist", summary: "We engineered demand for an AI launch and converted attention into a real pipeline." },
  { id: "nimbus", client: "Nimbus", category: "Cloud", metric: "−33%", metricLabel: "cost per qualified lead", headline: "Cheaper, better leads for a cloud platform", summary: "Intent-based targeting and landing experiments lifted lead quality while cutting cost." },
  { id: "vertex", client: "Vertex", category: "Cybersecurity", metric: "3.6x", metricLabel: "demo-to-close rate", headline: "Acquisition that sales actually wanted", summary: "We aligned targeting to ICP so security buyers showed up sales-ready." },
  { id: "fathom", client: "Fathom", category: "Analytics", metric: "+187%", metricLabel: "trial starts", headline: "Privacy-first analytics finds its audience", summary: "Channel diversification beyond search nearly tripled qualified trials." },
  { id: "cadence", client: "Cadence", category: "HR Tech", metric: "−39%", metricLabel: "cost per demo", headline: "Filling the demo calendar for an HR suite", summary: "We replaced expensive search clicks with a creative-led social engine." },
  { id: "meridian", client: "Meridian", category: "Fintech", metric: "$24M", metricLabel: "deposits driven", headline: "Driving real deposits, not just downloads", summary: "Optimizing to funded accounts grew deposits while keeping payback under target." },
  { id: "sprout", client: "Sprout", category: "EdTech", metric: "2.7M", metricLabel: "learners acquired", headline: "Scaling a learning app across 14 markets", summary: "Localized creative and geo expansion opened profitable new growth curves." },
  { id: "tessera", client: "Tessera", category: "Marketplace", metric: "+204%", metricLabel: "first purchases", headline: "Solving the marketplace cold-start problem", summary: "Balanced supply-and-demand campaigns turned browsers into first-time buyers." },
  { id: "halcyon", client: "Halcyon", category: "Consumer App", metric: "4.4x", metricLabel: "D30 retention lift", headline: "Acquisition and retention finally aligned", summary: "We paired install campaigns with lifecycle flows so users stuck around." },
  { id: "ledgerly", client: "Ledgerly", category: "Fintech", metric: "−52%", metricLabel: "CAC payback", headline: "Payback period cut by more than half", summary: "Tighter attribution and creative velocity made every dollar work harder." },
  { id: "northpeak", client: "Northpeak", category: "B2B SaaS", metric: "+96%", metricLabel: "SQLs per month", headline: "Doubling qualified sales conversations", summary: "A full-funnel rebuild nearly doubled sales-qualified leads in two quarters." },
  { id: "pulse", client: "Pulse", category: "Healthtech", metric: "1.2M", metricLabel: "app installs", headline: "A wellness app breaks through the noise", summary: "Performance UGC and ASO drove over a million installs at target CPI." },
  { id: "forge", client: "Forge", category: "Dev Tools", metric: "+275%", metricLabel: "active workspaces", headline: "Activating developers, not just acquiring them", summary: "We optimized for activated workspaces, multiplying real product usage." },
  { id: "aurora-pay", client: "Aurora Pay", category: "Crypto", metric: "3.1x", metricLabel: "verified users", headline: "Compliant crypto growth that lasts", summary: "We scaled verified signups across compliant channels and creative angles." },
  { id: "beacon", client: "Beacon", category: "MarTech", metric: "−44%", metricLabel: "cost per trial", headline: "Trials up, costs down for a martech tool", summary: "Offer testing and landing-page experiments slashed cost per trial." },
  { id: "verdant", client: "Verdant", category: "E-commerce", metric: "6.2x", metricLabel: "blended ROAS", headline: "Profitable scale for a DTC subscription", summary: "We rebuilt the acquisition mix to scale spend while holding ROAS." },
  { id: "atlas", client: "Atlas", category: "PropTech", metric: "+158%", metricLabel: "qualified inquiries", headline: "More qualified inquiries for a property platform", summary: "Geo-targeted campaigns and intent signals lifted high-value inquiries." },
  { id: "synth", client: "Synth", category: "AI / ML", metric: "410k", metricLabel: "product signups", headline: "From AI demo to durable signup engine", summary: "We converted launch buzz into a repeatable, measurable signup machine." },
  { id: "harbor", client: "Harbor", category: "Travel", metric: "+233%", metricLabel: "bookings from paid", headline: "Rebuilding paid for a travel marketplace", summary: "Seasonal creative and dynamic budgets more than tripled paid bookings." },
  { id: "kindred", client: "Kindred", category: "Streaming", metric: "2.0M", metricLabel: "new subscribers", headline: "Subscriber growth that survives churn", summary: "Acquisition tuned to retained subscribers, not just trial signups." },
];

export const testimonials = [
  {
    quote:
      "Lumivance is the first agency that talked about revenue instead of impressions. Within a quarter our cost per install dropped by a third and volume doubled.",
    name: "Mara Whitfield",
    role: "VP Growth, Trailform",
  },
  {
    quote:
      "They operate like an in-house team that happens to be world-class at paid. The weekly creative cadence alone changed our trajectory.",
    name: "Daniel Osei",
    role: "Co-founder, Brightvault",
  },
  {
    quote:
      "We finally trust our numbers. The attribution work paid for the entire engagement before we even scaled spend.",
    name: "Priya Nair",
    role: "Head of Marketing, Sitewright",
  },
];

// Retainers are quoted separately from ad spend, which the client pays the
// platforms directly. `excluded` items render struck-through on the pricing
// table so each tier shows what it doesn't cover, not just what it does.
export const pricing = [
  {
    name: "Launch",
    price: "$2,500",
    cadence: "/mo",
    adSpend: "+ ad spend (min. $1,500/mo recommended)",
    tagline: "For founders running ads for the first time",
    features: [
      "1 paid channel (Meta or Google)",
      "Account setup and pixel/tracking configuration",
      "2 ad creatives per month (copy + design brief)",
      "Audience research and targeting strategy",
      "Bi-weekly performance report",
      "Monthly strategy call (60 min)",
    ],
    excluded: [
      "Multi-channel management",
      "Creative production",
      "Landing page optimisation",
    ],
    cta: "Start with Launch",
    featured: false,
  },
  {
    name: "Scale",
    price: "$5,000",
    cadence: "/mo",
    adSpend: "+ ad spend (min. $5,000/mo recommended)",
    tagline: "For teams ready to build a real acquisition engine",
    features: [
      "2 paid channels (Meta + Google or TikTok)",
      "Full campaign build-out and optimisation",
      "4–6 ad creatives per month",
      "A/B testing framework (creative, audience, landing page)",
      "Weekly performance reports + Slack access",
      "Bi-weekly strategy calls (60 min)",
      "CAC and ROAS benchmarking vs. industry",
    ],
    excluded: ["Dedicated creative production"],
    cta: "Scale my growth",
    featured: true,
  },
  {
    name: "Accelerate",
    price: "$9,000",
    cadence: "/mo",
    adSpend: "+ ad spend (min. $15,000/mo recommended)",
    tagline: "For growth-stage teams scaling aggressively",
    features: [
      "All 3 channels (Meta, Google, TikTok)",
      "Full funnel strategy (awareness → conversion)",
      "8–12 ad creatives per month (full production)",
      "Dedicated creative strategist",
      "Landing page CRO recommendations + copy",
      "Weekly calls + real-time Slack access",
      "Monthly growth review with board-ready deck",
      "Retargeting and lifecycle ad sequences",
    ],
    excluded: [],
    cta: "Accelerate my growth",
    featured: false,
  },
];

export const faqs = [
  {
    q: "What kinds of companies do you work with?",
    a: "We specialize in software — B2B SaaS, consumer apps, fintech, and developer tools. If your growth lives in app stores, search, and paid social, we’re built for you.",
  },
  {
    q: "Is there a long-term contract?",
    a: "No. We work on a rolling monthly basis with a 30-day notice period. We’d rather earn your renewal every month than lock you in.",
  },
  {
    q: "How fast will we see results?",
    a: "Most clients see meaningful efficiency gains within the first 60–90 days as creative testing and attribution mature. We set clear 30/60/90-day milestones up front.",
  },
  {
    q: "Do you handle creative, or just media buying?",
    a: "Both. Our in-house studio ships performance creative weekly — static, motion, and UGC — so your media never starves for fresh angles.",
  },
  {
    q: "Who owns the ad accounts and data?",
    a: "You do, always. We work inside your accounts and hand over every asset, audience, and dashboard. There’s no lock-in on your data.",
  },
];

// Social proof. Swap in your real review-platform profile, awards, and press.
export const reviewSummary = {
  platform: "Verified Reviews",
  profileHref: "#",
  score: 4.9,
  count: 80,
  tags: [
    "High-quality work (21)",
    "Timely (16)",
    "Communicative (14)",
    "Performance-driven (12)",
    "Transparent (9)",
    "+ 6 more",
  ],
};

export const featuredReview = {
  score: 5.0,
  quote:
    "We’re highly impressed by their innovative acquisition strategies and seamless execution. CPI dropped 38% in our first quarter together.",
  industry: "Mobile App · Fintech",
  location: "San Francisco, California",
  size: "50–200 employees",
  budget: "$10,000 – $49,999 / mo",
  period: "Jan 2023 – Present",
  name: "Jordan Avery",
  role: "Head of Growth",
  company: "Series B fintech",
};

export const awards = [
  { org: "GrowthList", title: "Top 10 User Acquisition Agencies — 2024" },
  { org: "App Growth Awards", title: "Best Mobile Growth Partner — 2024" },
  { org: "Performance World", title: "Performance Agency of the Year — Finalist" },
];

export const press = {
  featured: {
    name: "Forbes",
    blurb:
      "Forbes makes the case for partnering with service providers instead of contracting them — exactly how we think about growth: a partnership, not a transaction.",
    href: "https://www.forbes.com/sites/katevitasek/2024/02/12/why-your-business-should-partner-with-service-providers-and-not-contract-them/",
  },
  outlets: ["MarTech Today", "SaaS Weekly", "AppGrowth", "Founder Daily", "Growth Memo"],
};

export const values = [
  {
    title: "Revenue, not vanity",
    body: "We optimize to the metric on your P&L — qualified users and payback — not impressions you can’t bank.",
  },
  {
    title: "Velocity as a moat",
    body: "We ship experiments and creative weekly. Speed of learning is the only durable advantage in acquisition.",
  },
  {
    title: "Radical transparency",
    body: "Live dashboards, open accounts, plain-English reporting. You always know where the budget went and why.",
  },
  {
    title: "Senior by default",
    body: "No juniors learning on your spend. The people in the pitch are the people on your account.",
  },
];

// "World-class talent" showcase. Drop photos in /public/team to replace the
// initials fallback. Keep filenames as-is or update src here.
export const talent = [
  { src: "/team/talent-1.jpg", role: "Paid Media", accent: "spark" },
  { src: "/team/talent-2.webp", role: "Data & Analytics", accent: "indigo" },
  { src: "/team/talent-3.jpg", role: "Growth Strategist", accent: "violet" },
  { src: "/team/talent-4.jpg", role: "ASO & SEO", accent: "fuchsia" },
  { src: "/team/talent-5.jpg", role: "Lifecycle & Retention", accent: "indigo" },
  { src: "/team/talent-6.jpg", role: "Performance Creative", accent: "fuchsia" },
];

export const team = [
  { name: "Elena Marković", role: "Founder & Growth Lead", initials: "EM" },
  { name: "Tomas Reyes", role: "Head of Paid Media", initials: "TR" },
  { name: "Aisha Bello", role: "Creative Director", initials: "AB" },
  { name: "Kenji Watanabe", role: "Head of Analytics", initials: "KW" },
];
