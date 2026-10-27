import { heroStats, priceCopy } from "@/lib/offer";

// Industry pages (/industries/[slug]): the sectors Lumivance makes ads for,
// then two direct-to-consumer categories with rules of their own.
//
// Each sector page runs in the same order: the short answer, where the money
// is lost, the rules, the arithmetic, results, how we compare, the angles,
// how we work, a self-check and the questions. Mobile games and subscription
// apps differ where their buyers differ (payback for games, a long guide for
// subscriptions).
//
// Client work is on the DTC and E-commerce pages, named and tagged. Case
// studies come from lib/cases.js; placeholders there never reach the live site.
// Platform rules are described in general terms because they change.

const PRICE = `From ${priceCopy.from}.`;
const OTHER_SPEC = "Spec ads from other categories, made with AI.";
const PRICING = { type: "pricing", title: "What it costs", intro: "The same three sizes for every sector. A sprint is a fixed price for a fixed number of finished ads." };
const CLIENTS = { type: "clients" };

// Update when a real case study is published.
const RESULTS = "Client ads for Bidco Africa, Ribena East Africa, Oraimo and Hillson are on this site. No client results are published yet.";
const FEES = `Sprints from ${priceCopy.from}, fixed. Media buying on a retainer, quoted after an account review.`;

const facts = (judged) => [
  ["What we make", "UGC-style and product-led video ads, 20, 40 or 80 at a time"],
  ["Channels", "Meta, TikTok and YouTube"],
  ["Judged on", judged],
  ["Published results", RESULTS],
  ["Fees", FEES],
];

const calculator = (unit, units, cost) => ({
  type: "calculator",
  title: "Do the maths",
  intro: `What the same budget buys if each ${unit} costs less. Change the numbers to yours.`,
  calc: { unit, units, cost },
});

const cases = (industry) => ({
  type: "cases",
  industry,
  title: "Results we can show you",
  intro: "Each written from the client’s own ad account: what was tested, what won, and what a customer cost before and after.",
});

const compare = (judged) => ({
  type: "compare",
  title: "Lumivance, in-house or a generalist agency",
  intro: "Three ways to keep new ads coming. This compares how each is set up, not what any of them will achieve.",
  rows: [
    ["What you pay for", "A fixed price per batch of finished ads", "Salaries, tools and shoots", "A monthly fee, often a share of ad spend"],
    ["New ads a month", "Twenty to eighty, planned as one test", "As many as the team has time to make", "Usually a handful per campaign"],
    ["Judged on", judged, "Whatever the team agrees", "Often clicks, views or installs"],
    ["Sector rules", "Written into every script and signed off before production", "Known well, if someone owns them", "Learned on your account"],
    ["First new ads", "72 hours after the brief", "After the next shoot", "Usually a few weeks"],
  ],
});

const verdicts = (thing) => ({
  ready: `Ready. New ads to test are the fastest lever you have left, and that’s what we make.`,
  close: `Close. Sort out the unticked ones first, or alongside the first sprint, so the test reads cleanly on ${thing}.`,
  early: `Early. Tracking and the bidding event come before more ads. On a retainer, that’s where we’d start.`,
});

const checklist = (title, items, thing) => ({
  type: "checklist",
  title,
  intro: "Tick what’s true. It takes thirty seconds and nothing is sent anywhere.",
  items,
  verdicts: verdicts(thing),
});

const ongoing = { title: "Read, cut, scale", text: "Results read on the number we agreed, losers cut, winners given budget, and the next batch briefed from what won.", when: "Ongoing" };

const costQ = (sector) => ({
  q: `How much does a ${sector} marketing agency cost?`,
  a: `With us, ads are a fixed price per sprint: ${priceCopy.all}. If you want us to run the campaigns as well, that’s a monthly retainer, quoted after we’ve looked at your ad account. Ad spend always goes to the platforms directly.`,
});

const timeQ = (step) => ({
  q: "How long until we see results?",
  a: `The first ads arrive 72 hours after the brief. A fair read on which angles win usually takes one to two weeks of spend. Reading them on ${step} takes longer, because that step happens later.`,
});

export const industries = [
  // ─────────────────────────────────────────────────────────────── EdTech
  {
    slug: "edtech",
    name: "EdTech",
    summary: "Ads built around your real first lesson, judged on learners who pay, not downloads.",
    thumb: "emera-c-1",
    meta: {
      title: "EdTech app marketing agency: video ads for learning apps",
      description:
        "EdTech app marketing with UGC-style video ads for language, study and skills apps, online courses and tutoring. Built around your real first lesson and judged on paying learners, twenty ads at a time.",
    },
    hero: {
      title: "EdTech video ads for learners who stay and pay",
      lede: "Learning apps don’t need more installs. They need people who finish a first lesson, come back on day seven and subscribe. We make video ads built around your real first lesson, twenty at a time, and judge them on paying learners.",
      aside: PRICE,
      stats: heroStats,
      media: { photos: ["edtech-a", "edtech-b"] },
    },
    blocks: [
      CLIENTS,
      {
        type: "answer",
        title: "The short answer",
        text: "An edtech marketing agency finds learners for language, study, skills and tutoring products and turns them into paying ones. Lumivance does it with video: UGC-style ads built around your real product, made in batches of twenty so every angle gets tested, and run on Meta, TikTok and YouTube by your team or ours.",
        facts: facts("Cost per paying learner, agreed before the test"),
      },
      {
        type: "funnel",
        title: "Where learning apps lose money",
        intro: "Most of the money goes after the install. Each stage fails in its own way, and the ad can fix more of it than people expect.",
        stages: [
          { stage: "First lesson", wrong: "The ad promised fluency in a month. The app opens on a placement test and people leave before lesson one.", change: "Ads that show the real first lesson, so the people who install expect exactly what they get.", metric: "Cost per first lesson finished" },
          { stage: "Day 7 habit", wrong: "People start keen and stop on day three, because nothing showed what a normal day with the app looks like.", change: "Angles about where it fits: five minutes on the bus, after dinner, between meetings.", metric: "Learners active on day 7" },
          { stage: "Subscription", wrong: "The paywall arrives as a surprise, so the free trial feels like a trick.", change: "Ads that say what’s free and what it costs after. Fewer trials, more of them paid.", metric: "Cost per paying learner" },
          { stage: "Renewal", wrong: "Learners sold a shortcut cancel when they find out there isn’t one.", change: "Promise only what the product does, so renewals aren’t fighting the ad that brought people in.", metric: "Learners still paying at day 90" },
        ],
      },
      {
        type: "rules",
        title: "The rules learning app ads play by",
        rows: [
          { rule: "No promised outcomes", handle: "“Fluent in 30 days” and “guaranteed top grades” are promises you’d have to prove. We script what the product does and what your evidence supports." },
          { rule: "Jobs and salaries need data", handle: "Claims about placements or pay rises appear only with your real figures behind them, quoted exactly. Otherwise we leave them out." },
          { rule: "Children are reached through parents", handle: "Platforms limit how advertisers reach under-18s, and laws such as COPPA in the US cover under-13s. For younger learners we write for the parent." },
          { rule: "No invented students", handle: "An AI presenter can show a lesson. It can’t say it passed an exam, because it never sat one." },
          { rule: "The calendar sets the price", handle: "Back to school, exam season and New Year push auction prices up. We plan batches so tested ads are ready before those weeks, not during them." },
        ],
      },
      calculator("paying learner", "Paying learners", 40),
      cases("edtech"),
      { type: "cta", text: "Plenty of installs and not many paying learners? Tell us what you’re running and we’ll tell you where we think the money is going." },
      compare("Cost per paying learner"),
      {
        type: "points",
        title: "Angles we’d test first",
        items: [
          { title: "The first lesson", text: "Thirty seconds of the product doing its job: a question asked, an answer checked, a small win. It beats any description of the curriculum." },
          { title: "The stuck moment", text: "Open on the exact thing your learner can’t do yet: the verb that won’t stick, the fraction that makes no sense. Then show it getting unstuck." },
          { title: "Five minutes a day", text: "Show where it fits. Most people don’t doubt the product. They doubt they’ll keep it up." },
          { title: "The parent’s view", text: "For children’s products the buyer isn’t the user. A second set of ads speaks to the parent: what the child does, and what the parent can see." },
          { title: "The deadline", text: "Exams, applications and new terms give people a reason to start this week. We plan angles around your calendar." },
        ],
      },
      {
        type: "gallery",
        title: "The formats we’d use",
        intro: "We haven’t published edtech spec ads yet. These structures are from our other spec work, and this is how each one translates.",
        items: [
          { id: "emera-c-2", caption: "To camera becomes the tutor explaining one idea." },
          { id: "blender-demo-3", caption: "A demo becomes the first lesson, walked through." },
          { id: "emera-a-2", caption: "A reaction becomes the moment an answer comes back right." },
          { id: "emera-c-5", caption: "Hands only becomes a phone in hand, mid-lesson." },
        ],
      },
      {
        type: "steps",
        title: "From first call to scale",
        items: [
          { title: "Brief", text: "A 30-minute call: who learns with you, who pays, the outcomes you can prove and the dates that matter this term.", when: "Day 1" },
          { title: "Angles and scripts", text: "Five angles and twenty scripts. You approve every one, and so can whoever signs off your claims.", when: "Days 1–2" },
          { title: "Your recordings", text: "Screen recordings of real lessons. We send a shot list so it takes minutes, not a day.", when: "Day 2" },
          { title: "First ads, then the full set", text: "First ads within 72 hours of the brief, the rest on the next cycle, with a test plan.", when: "Days 3–6" },
          ongoing,
        ],
      },
      checklist(
        "Is your learning app ready to scale paid?",
        [
          "You know what a paying learner costs you today",
          "Your campaigns optimise for a trial or a purchase, not the install",
          "You can see results ad by ad, not just by campaign",
          "You can screen-record a real first lesson",
          "Tested ads are ready before the next exam season or New Year",
        ],
        "paying learners"
      ),
      PRICING,
      {
        type: "faq",
        title: "Questions about edtech marketing",
        items: [
          costQ("edtech"),
          { q: "How do you optimise for learners instead of installs?", a: "By judging every ad on paying learners from the first day of the test, and naming each file by angle and hook so results trace back to the idea. If your account bids on installs, we’ll say so before we start." },
          { q: "Can you show our app in the ads?", a: "Yes, using screen recordings you send. The product on screen is always your real one. We don’t generate interface or lessons." },
          { q: "Can you use our real students’ results?", a: "Yes, if they’re real and you have permission. We show them as on-screen figures or quotes credited to the student, not spoken by a generated presenter posing as them." },
          { q: "Do you make ads for children’s learning apps?", a: "Yes, written for parents. We don’t make ads designed to be targeted at children." },
          { q: "How do you handle back-to-school and New Year?", a: "We plan backwards from them. The ads for a busy season are made and tested weeks before it, so you go into the expensive auctions with winners rather than guesses." },
          timeQ("paying learners"),
          { q: "Do you run the campaigns too?", a: "On a sprint you run them with our test plan. On the retainer we run Meta, TikTok and YouTube campaigns in your accounts." },
        ],
      },
      { type: "related", items: ["subscription-apps", "ai-ugc-ads", "ai-presenters"] },
    ],
  },

  // ─────────────────────────────────────────────────────────────── FinTech
  {
    slug: "fintech",
    name: "FinTech",
    summary: "Plain-language ads that get through compliance, judged on verified, funded customers.",
    thumb: "emera-a-6",
    meta: {
      title: "Fintech app marketing agency: video ads for money apps",
      description:
        "Fintech app marketing with plain-language video ads for banking, payments, savings, lending and investing apps. Your real app on screen, every claim signed off by compliance, judged on verified customers rather than downloads.",
    },
    hero: {
      title: "Fintech video ads that pay off in verified customers, not downloads",
      lede: "A download is worth nothing until someone passes the identity check and puts money in. We make plain-language video ads that show your real app, get through compliance, and are judged on verified, funded customers. Twenty at a time, the first ones 72 hours after your compliance team approves the scripts.",
      aside: PRICE,
      stats: heroStats,
      media: { photos: ["fintech-b", "fintech-a"] },
    },
    blocks: [
      CLIENTS,
      {
        type: "answer",
        title: "The short answer",
        text: "A fintech marketing agency finds customers for banking, payments, savings, lending and investing apps, and gets them through sign-up, the identity check and a first deposit. Lumivance does it with video ads that explain one thing plainly, show the real app, and carry only the claims your compliance team has approved.",
        facts: facts("Cost per verified customer or first deposit"),
      },
      {
        type: "funnel",
        title: "Where fintech apps lose money",
        intro: "Money apps lose most people between the download and the first deposit. The ad sets up every one of those steps.",
        stages: [
          { stage: "Sign-up", wrong: "The ad sold a feature, the app opens on a long form, and people give up halfway.", change: "Show the sign-up as it really is, so the people who start expect it.", metric: "Cost per completed sign-up" },
          { stage: "Identity check", wrong: "The ID check comes as a surprise. People don’t have their card to hand, so they leave.", change: "Ads that mention the check and how long it takes. It filters out people who were never going to finish.", metric: "Cost per verified account" },
          { stage: "First deposit", wrong: "Verified accounts sit empty because nobody gave them a first thing to do.", change: "Ads built around one first task: send money home, set one goal, split one bill.", metric: "Cost per funded account" },
          { stage: "Lifetime value", wrong: "Customers who never use the account twice make the cost per sign-up look better than it is.", change: "Read each angle on the customers it brought in after 30 days, and brief the next batch from that.", metric: "Customers active at day 30" },
        ],
      },
      {
        type: "rules",
        title: "The rules money ads play by",
        rows: [
          { rule: "No promised returns", handle: "“Double your savings” is out. Rates appear only if they’re the real ones, with their conditions, and investing ads carry the risk warning your regulator requires." },
          { rule: "Licences and verification", handle: "In many countries Google and Meta ask financial advertisers to prove they’re authorised before ads can run. We ask which markets you’re cleared for before we script." },
          { rule: "Restricted targeting", handle: "In the US and several other countries, Meta puts credit and other financial ads in a special category with limited targeting. The creative has to do more of the work, so we write for a broad audience." },
          { rule: "Crypto is stricter still", handle: "Crypto products usually need a platform’s approval first, and some placements are closed to them. Check what you’re cleared to run before you book." },
          { rule: "No invented customers, no advice", handle: "A generated presenter can explain a feature. It can’t say it paid off its card, and it never tells viewers what to do with their money." },
        ],
      },
      calculator("verified customer", "Verified customers", 60),
      cases("fintech"),
      { type: "cta", text: "Lots of sign-ups and not many funded accounts? Tell us what you’re running and we’ll tell you where we think people are dropping out." },
      compare("Cost per verified or funded customer"),
      {
        type: "points",
        title: "Angles we’d test first",
        items: [
          { title: "The fee they’re paying now", text: "Open on a cost the viewer already has: the transfer fee, the overdraft charge, the exchange rate. Then show yours, with the real numbers." },
          { title: "The quick set-up", text: "Sign-up shown from start to finish, if it really is that quick. Speed claims are only worth making when the screen recording proves them." },
          { title: "See where it goes", text: "For budgeting and saving apps, the product is the demo: one month of spending, sorted, on screen." },
          { title: "What happens to my money", text: "Say how funds are held and who regulates you, in the wording your compliance team uses. Trust is most of the sale." },
          { title: "One job, done", text: "Splitting a bill, sending money abroad, rounding up change. One task per ad, shown from tap to done." },
        ],
      },
      {
        type: "split",
        title: "Compliance signs off before we make anything",
        paras: [
          "Every script goes to your compliance or legal team before production, with each claim, rate and disclaimer pulled out into one list so it’s quick to check. Nothing is generated until they’ve approved it.",
          "Rates, fees and disclaimers are copied from your approved wording, word for word. If a rate changes, tell us and we’ll re-cut the ads it appears in.",
        ],
        still: "emera-a-6",
        caption: "A presenter from our spec work. In a fintech ad, a recording of your app plays beside them.",
      },
      {
        type: "steps",
        title: "From first call to scale",
        items: [
          { title: "Brief", text: "A call with marketing and, ideally, compliance: the product, the markets you’re licensed in, your approved wording and what you can’t say.", when: "Day 1" },
          { title: "Scripts and a claims list", text: "Twenty scripts, with every claim, rate and disclaimer listed separately for sign-off.", when: "Days 1–2" },
          { title: "Sign-off", text: "Your compliance team approves, edits or cuts. Production starts only on approved scripts.", when: "Your timing" },
          { title: "First ads, then the full set", text: "First ads 72 hours after approval, the rest on the next cycle, with the test plan.", when: "After sign-off" },
          ongoing,
        ],
      },
      checklist(
        "Is your fintech app ready to scale paid?",
        [
          "You know what a verified, funded customer costs you today",
          "Your campaigns optimise for a verified account or deposit, not the install",
          "You’re cleared to advertise financial services in every market you target",
          "Someone on your side can approve claims within a few days",
          "You can screen-record the real sign-up, identity check included",
        ],
        "verified customers"
      ),
      PRICING,
      {
        type: "faq",
        title: "Questions about fintech marketing",
        items: [
          costQ("fintech"),
          { q: "How do you keep fintech ads compliant?", a: "Your compliance team sees every script, with each claim listed separately, before anything is made, and every finished ad before it runs. Rates and disclaimers are copied from your approved wording." },
          { q: "How do you optimise for verified customers instead of installs?", a: "We judge each ad on the step that means a real customer for you, such as a passed identity check or a first deposit, and name every file so the result traces back to the angle." },
          { q: "Will our compliance team accept AI-made ads?", a: "That’s their call, which is why they approve every script first. Presenters are labeled as AI where platforms require it, and they never pose as customers." },
          { q: "Can you show real rates and fees?", a: "Yes, copied from your approved wording, with the conditions and disclaimers that go with them." },
          { q: "Do you work with crypto products?", a: "We can make the ads, but crypto advertising needs platform approval first and is closed in some markets. Check what you’re cleared to run before you book." },
          { q: "Do you need access to our customer data?", a: "No. We need results by ad, for whichever step you judge on. Customer data stays with you." },
          timeQ("verified customers"),
        ],
      },
      { type: "related", items: ["subscription-apps", "ai-presenters", "creative-testing-sprint"] },
    ],
  },

  // ─────────────────────────────────────────────────────────────── E-commerce
  {
    slug: "ecommerce",
    name: "E-commerce",
    summary: "Unboxings, try-ons and demos across your range, judged on first orders against your margin.",
    thumb: "lookbook-1",
    meta: {
      title: "E-commerce marketing agency: video ads for online stores",
      description:
        "E-commerce marketing with UGC-style and product-led video ads for online stores: unboxings, try-ons, demos and product heroes across your range, twenty at a time, judged on cost per first order.",
    },
    hero: {
      title: "E-commerce video ads, judged on orders, not clicks",
      lede: "If you run an online store, you have more products than ads, and the ads you have wear out faster than you can reshoot them. We make unboxings, try-ons and demos twenty at a time from photos of your real products, and judge them on what a first order costs you.",
      aside: PRICE,
      stats: heroStats,
      media: { photos: ["ecommerce-a", "ecommerce-b"] },
    },
    blocks: [
      CLIENTS,
      {
        type: "answer",
        title: "The short answer",
        text: "An e-commerce marketing agency brings buyers to an online store with ads, then turns first orders into repeat ones. Lumivance makes the ads: unboxings, try-ons, demos and product heroes from photos of your real products, twenty at a time, run on Meta, TikTok and YouTube by your team or ours.",
        facts: facts("Cost per first order, read against your margin"),
      },
      {
        type: "funnel",
        title: "From first look to repeat order",
        intro: "An order can be lost at four points between the scroll and the second purchase. Each one has a fix in the ad.",
        stages: [
          { stage: "Discovery", wrong: "The first frame doesn’t show what’s for sale, so people scroll past an ad they’d have liked.", change: "Open on the product. Mystery is for brands people already know.", metric: "Hook rate" },
          { stage: "Product view", wrong: "The ad and the product page don’t match, so the click lands somewhere that feels like a different shop.", change: "Ads made from the same photos, prices and offers as the page they send people to.", metric: "Add-to-cart rate" },
          { stage: "First order", wrong: "The ad says five things and none of them is the reason this person would buy.", change: "One reason to buy per ad, twenty reasons tested at once.", metric: "Cost per first order" },
          { stage: "Repeat order", wrong: "Angles that win on cheap first orders can bring in one-time buyers.", change: "Read each angle on second orders too, and give the next batch to the angles that bring customers back.", metric: "Second orders in 60 days" },
        ],
      },
      {
        type: "rules",
        title: "What makes e-commerce ads different",
        rows: [
          { rule: "Revenue isn’t profit", handle: "A high return on ad spend can still lose money on a low-margin product. We ask for margins and plan which products get ads first." },
          { rule: "The product is the real one", handle: "We work from photos of your product and packaging and check every frame against them. Nothing looks better in the ad than it does in the box." },
          { rule: "No invented reviews", handle: "Star ratings and quotes appear only if they’re real, current and yours. A generated presenter never plays a customer." },
          { rule: "Prices, delivery and offers", handle: "Prices, delivery times, returns and discounts in an ad match the store on the day it runs." },
          { rule: "Some categories have their own rules", handle: "Skincare, supplements and anything health-related have rules of their own. We’ve written those up on separate pages." },
        ],
      },
      calculator("first order", "First orders", 30),
      {
        type: "videos",
        title: "Ads we’ve made for clients",
        intro: "Two product ads for brands selling in East Africa. The rest of the ads on this page are spec work, and they say so.",
        items: [
          { slug: "oraimo-scrubber", title: "Cordless scrubber, for Oraimo", text: "Opens on the chore, then shows the product on a sink, tiles and a bathtub." },
          { slug: "hillson-safety-shoes", title: "Safety shoes, for Hillson", text: "The shoe on a factory floor: laced up, walked in, and shown up close." },
        ],
      },
      cases("ecommerce"),
      { type: "cta", text: "Selling plenty of one product and none of the rest? Tell us your range and we’ll tell you which products we’d test first." },
      compare("Cost per first order, against margin"),
      {
        type: "points",
        title: "Angles we’d test first",
        items: [
          { title: "Open on the product", text: "The first frame should make it obvious what’s for sale." },
          { title: "The unboxing", text: "The parcel, the packaging, the first look. It answers “what actually arrives?” without a word." },
          { title: "The try-on or the demo", text: "The product being worn, or doing its job, filmed the way a buyer would film it." },
          { title: "One reason per ad", text: "An ad that says five things says none. Each of the twenty carries one reason to buy." },
          { title: "Across the range", text: "Twenty ads can be five products made four ways, or one best seller made twenty ways. We plan the split with you." },
        ],
      },
      {
        type: "videos",
        title: "What the ads look like",
        intro: "Spec ads we made to show the formats, made with AI.",
        items: [
          { slug: "bag-unboxing", title: "Unboxing", text: "The gift bag, the dust bag, the reveal." },
          { slug: "outfit-try-on", title: "Try-on", text: "Three pieces in hand, then worn as one outfit." },
          { slug: "blender-demo", title: "Demo", text: "The product doing its job, explained as it goes." },
        ],
      },
      {
        type: "steps",
        title: "From first call to scale",
        items: [
          { title: "Brief", text: "A 30-minute call: your range, margins, best sellers, and what you’ve already tested.", when: "Day 1" },
          { title: "Products and angles", text: "Which products get ads and why, then twenty scripts for you to approve or cut.", when: "Days 1–2" },
          { title: "Your photos", text: "Product and packaging from every side, plus your logo, fonts and colours.", when: "Day 2" },
          { title: "First ads, then the full set", text: "First ads within 72 hours of the brief, the rest on the next cycle, exported for every placement.", when: "Days 3–6" },
          ongoing,
        ],
      },
      checklist(
        "Is your store ready to scale paid?",
        [
          "You know your margin on the products you advertise",
          "Purchases are tracked back to the ad that brought them",
          "You have photos of each product from every side, in good light",
          "You have more products worth advertising than you have ads",
          "You replace your ads at least once a month",
        ],
        "first orders"
      ),
      PRICING,
      {
        type: "faq",
        title: "Questions about e-commerce marketing",
        items: [
          costQ("e-commerce"),
          { q: "Do we need to send you the product?", a: "No. Clear photos from every side are enough. If you have video of it in use, we can cut that in." },
          { q: "How do you decide which products get ads?", a: "By margin and demand. A best seller with a thin margin may get fewer ads than a slower product that pays for its own customer. We agree the split with you before scripting." },
          { q: "Do you work with creators and UGC?", a: "Our presenters are AI-generated. If you have creator footage you own the rights to, we can cut it in." },
          { q: "How do you prepare for Black Friday and Christmas?", a: "We make and test the ads weeks earlier, so the winners are known before the auctions get expensive." },
          { q: "Which platforms are the ads for?", a: "Meta, TikTok and YouTube. Every ad is exported for each placement." },
          { q: "Can you match our brand’s look?", a: "Yes. You send your logo, fonts and colours, and you approve every script and every finished ad." },
          timeQ("repeat orders"),
        ],
      },
      { type: "related", items: ["dtc", "skincare", "ai-video-ads"] },
    ],
  },

  // ─────────────────────────────────────────────────────────────── DTC
  {
    slug: "dtc",
    name: "DTC brands",
    inText: "direct-to-consumer brands",
    summary: "Ads for brands that make their own product and sell it direct, judged on what a new customer costs.",
    thumb: "bag-unboxing-1",
    meta: {
      title: "DTC marketing agency: video ads for direct-to-consumer brands",
      description:
        "DTC marketing with UGC-style and product-led video ads for direct-to-consumer brands: new angles for Meta and TikTok, made from photos of your real product and judged on what a new customer costs.",
    },
    hero: {
      title: "Video ads for direct-to-consumer brands, judged on new customers",
      lede: "A direct-to-consumer brand lives on paid social, and paid social lives on new ads. When your best ad tires, the cost of a new customer climbs until something replaces it. We make the replacements twenty at a time, from photos of your real product, with the first ones 72 hours after your brief.",
      aside: PRICE,
      stats: heroStats,
      media: { photos: ["dtc-a", "dtc-b"] },
    },
    blocks: [
      CLIENTS,
      {
        type: "answer",
        title: "The short answer",
        text: "A DTC marketing agency finds new customers for brands that make their own product and sell it direct, mostly through paid social. Lumivance makes the ads that do the finding: UGC-style and product-led video, twenty at a time, from photos of your real product, judged on what a new customer costs against the value of their first order.",
        facts: facts("Cost per new customer, against first-order value"),
      },
      {
        type: "funnel",
        title: "Where DTC brands lose money",
        intro: "For a brand that sells direct, every stage from the scroll to the second box is paid for. These are the four where it leaks.",
        stages: [
          { stage: "First look", wrong: "Your best ad has run for months. The same people have seen it ten times, and it costs more each week.", change: "A steady supply of new openers, so a tired ad always has something ready to replace it.", metric: "Hook rate on new openers" },
          { stage: "Product page", wrong: "The ad sells a lifestyle and the page sells a product, and the gap loses the click.", change: "Ads that show what actually arrives, so the page confirms the ad.", metric: "Cost per add-to-cart" },
          { stage: "First order", wrong: "Discounts win the first order and teach people to wait for the next one.", change: "Angles that give a reason to buy at full price, with offers tested separately.", metric: "Cost per new customer" },
          { stage: "Reorder", wrong: "Nobody shows the second box, so people treat it as a one-off.", change: "Ads about the routine and the refill, for products people use up.", metric: "Reorders in 60 days" },
        ],
      },
      {
        type: "rules",
        title: "The rules we work to",
        rows: [
          { rule: "Reviews are real or absent", handle: "Star ratings, review counts and customer quotes appear only if they’re yours and current. A generated presenter never plays a customer." },
          { rule: "The founder is real or absent", handle: "If you want your founder in an ad, send footage and we’ll cut it in. We don’t generate a stand-in and call them the founder." },
          { rule: "Press and badges are checked", handle: "“As seen in” and award logos appear only if they’re true, and we’ll ask for the source." },
          { rule: "Offers that exist", handle: "Discounts, bundles and deadlines in an ad match what’s on your site on the day it runs." },
          { rule: "Some categories have their own rules", handle: "Skincare and supplements have rules of their own. We’ve written those up on separate pages." },
        ],
      },
      calculator("new customer", "New customers", 45),
      {
        type: "videos",
        title: "Ads we’ve made for clients",
        intro: "Three ads for food and drink brands in East Africa. The rest of the ads on this page are spec work, and they say so.",
        items: [
          { slug: "fillows-cereal", title: "Fillows, for Bidco Africa", text: "A midnight snack, given away by the crunch." },
          { slug: "shapies-cereal", title: "Shapies, for Bidco Africa", text: "Late for school, until breakfast wins." },
          { slug: "ribena-smarty-berry", title: "Ribena East Africa", text: "A blackcurrant character who talks straight to camera." },
        ],
      },
      cases("dtc"),
      { type: "cta", text: "Your best ad is tiring and nothing new has beaten it? Tell us what’s running and we’ll show you the angles we’d test next." },
      compare("Cost per new customer, against first-order value"),
      {
        type: "points",
        title: "Angles we’d test first",
        items: [
          { title: "Why it exists", text: "The problem the product was made to fix, in one sentence. DTC brands win on a point of view, so say it early." },
          { title: "Against the usual choice", text: "Yours beside the supermarket version or the big-name one. Specific, fair, and only on the points where yours really wins." },
          { title: "The first week", text: "Unboxing, first use, where it lives in the house. It answers “what’s it like to own?” better than a feature list." },
          { title: "The starter kit", text: "Bundles and first-order offers shown as what actually arrives, laid out on a table." },
          { title: "The refill", text: "For products people reorder, show the second box as well as the first. It’s why the first order is worth winning." },
        ],
      },
      {
        type: "videos",
        title: "One product, three ways to open",
        intro: "Spec ads for a watch: the same product, the same length, three different first seconds. This is what a test is made of.",
        items: [
          { slug: "emera-a", title: "The reaction", text: "Opens on her face, watch already in hand." },
          { slug: "emera-b", title: "The doorstep", text: "Opens on a sealed delivery box." },
          { slug: "emera-c", title: "The pitch", text: "Opens on him talking straight to camera." },
        ],
      },
      { type: "related", title: "Categories with rules of their own", items: ["skincare", "supplements", "health-fitness"] },
      {
        type: "steps",
        title: "From first call to scale",
        items: [
          { title: "Brief", text: "A 30-minute call: the product, who buys it, your margins and target cost per customer, and what you’ve already tested.", when: "Day 1" },
          { title: "Angles and scripts", text: "Five angles and twenty scripts, drawn from your reviews, your best sellers and the ads competitors keep running.", when: "Days 1–2" },
          { title: "Your photos", text: "Product and packaging from every side, plus your logo, fonts and colours.", when: "Day 2" },
          { title: "First ads, then the full set", text: "First ads within 72 hours of the brief, the rest on the next cycle, exported for every placement with a test plan.", when: "Days 3–6" },
          ongoing,
        ],
      },
      checklist(
        "Is your brand ready to scale paid?",
        [
          "You know what a new customer costs and what their first order is worth",
          "Paid social brings in most of your new customers",
          "Purchases are tracked back to the ad that brought them",
          "You can send product photos from every side",
          "You have a plan for when your best ad tires",
        ],
        "new customers"
      ),
      PRICING,
      {
        type: "faq",
        title: "Questions about DTC marketing",
        items: [
          costQ("DTC"),
          { q: "How is this different from hiring UGC creators?", a: "Creators give you a real person and the trust of their own audience, which we can’t. We give you speed and volume: twenty variations in days, no product to ship, no usage fees, and every line scripted to your claims. Some brands will want both." },
          { q: "Do we need to send you the product?", a: "No. Clear photos from every side are enough. If you have video of it in use, we can cut that in." },
          { q: "Can our founder be in the ads?", a: "Yes, with real footage you send. We don’t generate a stand-in." },
          { q: "Can you use our customer reviews?", a: "Yes, if they’re real and you have permission. They appear as on-screen quotes credited to the customer, not spoken by a generated presenter posing as them." },
          { q: "What would you judge the ads on?", a: "The cost of a new customer, in your own ad account, where you can see it. We agree the target before the test." },
          timeQ("reorders"),
          { q: "Do you run the campaigns too?", a: "On a sprint you run them with our test plan. On the retainer we run Meta, TikTok and YouTube campaigns in your accounts." },
        ],
      },
      { type: "related", items: ["ecommerce", "ai-ugc-ads", "performance-creative"] },
    ],
  },

  // ─────────────────────────────────────────────────────────────── Subscription apps
  {
    slug: "subscription-apps",
    name: "Subscription apps",
    summary: "A guide and a service: ads that sell the first session honestly, judged on subscribers who stay.",
    thumb: "blender-demo-2",
    meta: {
      title: "Subscription app marketing: a guide, and the ads to go with it",
      description:
        "Subscription app marketing explained: lifetime value, bidding on subscriptions, creative strategy, churn and measurement. Plus UGC-style video ads built around the first session and judged on paying subscribers.",
    },
    hero: {
      title: "Subscription app marketing that brings in subscribers who stay",
      lede: "A subscription app doesn’t need installs. It needs people who start a trial and keep paying. That changes what a good ad looks like, how you bid and what you measure. This page is the guide we’d give a new client, and the service that goes with it.",
      aside: PRICE,
      stats: heroStats,
      media: { photos: ["subscription-a", "subscription-b"] },
    },
    blocks: [
      CLIENTS,
      {
        type: "answer",
        title: "The short answer",
        text: "Subscription app marketing is paying to acquire people whose subscriptions, over months, are worth more than they cost to win. Lumivance makes the video ads for it, built around the real first session and honest about the trial, and judges them on paying subscribers rather than installs.",
        facts: facts("Cost per paying subscriber, then trial-to-paid"),
      },
      {
        type: "article",
        title: "The guide",
        sections: [
          {
            id: "different",
            heading: "Why subscription marketing is different",
            paras: [
              "A shop knows what an order was worth the day it happens. A subscription app doesn’t. The value of a new user arrives month by month, and most of it depends on whether they’re still there in month three.",
              "That gap changes everything downstream. Bidding has to aim at an event that predicts payment, not the install. Creative has to attract people who will stay, not just people who will tap. And churn, which looks like a product problem, is often set up by the ad that brought someone in.",
            ],
          },
          {
            id: "ltv",
            heading: "Know what a subscriber is worth before you scale",
            paras: [
              "Before you spend more, write down what a paying subscriber is worth over a period you trust. For monthly plans, three or six months of real retention is usually enough to start. For annual plans, the first renewal rate is the number that matters most.",
              "Do it by channel and by month of joining. Subscribers who arrive in January rarely behave like those who arrive in June, and an ad that wins on cheap trials can bring in a cohort that cancels fast. Your target cost per subscriber comes from this number, not from what a competitor says they pay.",
            ],
          },
          {
            id: "acquisition",
            heading: "Acquire people who subscribe and stay",
            paras: [
              "Optimise for the deepest event you have enough volume on: a trial start if you must, a first payment if you can. Installs are the easiest event to buy and the weakest signal of value.",
              "Use the ad to filter. An ad that is clear about what the app does, and what it costs after the trial, will bring in fewer people and more of the right ones. That trade is almost always worth making.",
            ],
          },
          {
            id: "creative",
            heading: "Creative strategy for subscription apps",
            paras: ["The ad is the first minute of the subscription. The angles that tend to hold up over months are the ones that show the product honestly:"],
            list: [
              "The first session: what the app does in its first two minutes, shown for real.",
              "The thing it replaces: the spreadsheet, the notes app, the three other subscriptions.",
              "One feature, ten seconds: the feature people stay for, and nothing else.",
              "The habit: where it sits in a day, so people can picture using it.",
              "The honest trial: what’s free, for how long, and what it costs after.",
            ],
          },
          {
            id: "bidding",
            heading: "Bid on subscriptions, not installs",
            paras: [
              "Once you have steady volume on a payment event, move bidding to it, or to a value target if the platform supports one. Change targets in small steps; large jumps reset what the platform has learned.",
              "Until you have that volume, bid on the trial and judge the ads yourself on trial-to-paid. Naming every file by angle and hook means you can read that by idea, not just by video.",
            ],
          },
          {
            id: "churn",
            heading: "Churn starts in the ad",
            paras: [
              "Most cancellations happen early, often before the first charge. Some of that is onboarding. Some of it is the ad, which promised something the first week didn’t deliver.",
              "So read every angle on how its subscribers behave after they pay, not only on what they cost. An angle with a slightly higher cost per trial and a much better trial-to-paid rate is the winner.",
            ],
          },
          {
            id: "channels",
            heading: "Scaling across channels",
            paras: [
              "Most subscription apps start on one channel and stay there too long. Meta, TikTok and YouTube reach different people at different prices, and the same angle rarely wins on all three.",
              "Add a channel when the first one is stable, give it its own ads cut for its format, and judge it on the same subscriber number. Budget follows the cohorts that pay back, not the cheapest installs.",
            ],
          },
          {
            id: "measurement",
            heading: "What to measure, and where",
            paras: [
              "Keep three views separate: acquisition (cost per trial and per subscriber), retention (trial-to-paid and renewals by cohort) and efficiency (spend against the revenue those cohorts bring in). Mixing them hides the problem.",
              "On iOS, platform numbers are modelled and incomplete, so read them alongside your own subscription data. When they disagree, your billing records win.",
            ],
          },
          {
            id: "compound",
            heading: "Why it compounds",
            paras: [
              "Each month’s subscribers either pay for next month’s ads or don’t. A cohort that stays funds the next test; one that cancels makes every later month harder. Getting the ad right early is the cheapest growth a subscription app will ever buy.",
            ],
          },
        ],
      },
      cases("subscription-apps"),
      { type: "cta", text: "Trials coming in and cancelling before the first charge? Tell us what you’re running and we’ll tell you which ads we think are causing it." },
      {
        type: "rules",
        title: "The rules for subscription ads",
        rows: [
          { rule: "“Free” has to be true", handle: "If the trial turns into a paid plan, the ad doesn’t hide it. Misleading “free” claims are what get subscription apps into trouble with app stores and regulators." },
          { rule: "Real screens only", handle: "The interface in the ad is yours, from screen recordings you send. We don’t generate screens or features." },
          { rule: "Ratings that are real", handle: "Star ratings, download counts and awards appear only if they’re true today, and we’ll ask for the source." },
          { rule: "No invented users", handle: "A generated presenter can walk through the app. It can’t say it’s been a subscriber for a year." },
        ],
      },
      calculator("paying subscriber", "Paying subscribers", 50),
      compare("Cost per paying subscriber"),
      {
        type: "steps",
        title: "From first call to scale",
        items: [
          { title: "Brief", text: "A 30-minute call: who subscribes, why they stay, what the trial includes and what you’ve already tested.", when: "Day 1" },
          { title: "Angles and scripts", text: "Five angles and twenty scripts for you to approve or cut.", when: "Days 1–2" },
          { title: "Your recordings", text: "Screen recordings of the real app. We send a shot list so it takes minutes, not a day.", when: "Day 2" },
          { title: "First ads, then the full set", text: "First ads within 72 hours of the brief, the rest on the next cycle, exported for every placement with a test plan.", when: "Days 3–6" },
          ongoing,
        ],
      },
      checklist(
        "Is your subscription app ready to scale paid?",
        [
          "You know what a paying subscriber is worth over three to six months",
          "Your campaigns optimise for a trial or payment, not the install",
          "You can read trial-to-paid by ad or by angle",
          "Your trial terms can be said plainly in one sentence",
          "You can screen-record the real first session",
        ],
        "paying subscribers"
      ),
      PRICING,
      {
        type: "faq",
        title: "Questions about subscription app marketing",
        items: [
          { q: "What’s the best bidding strategy for a subscription app?", a: "Bid on the deepest event you have steady volume on: a first payment if you can, a trial start if you must. Move to a value target once the platform has enough payments to learn from, and change targets in small steps." },
          { q: "How do you reduce churn with ads?", a: "By not causing it. Ads that are honest about the first week and the price bring in people who expect what they get. We read every angle on trial-to-paid, not just on cost per trial." },
          { q: "What lifetime value window should we use?", a: "One you have real data for. For monthly plans, three to six months of actual retention is a sound start. For annual plans, use the first renewal rate." },
          { q: "How important are the ads, compared with bidding?", a: "Once bidding is set up sensibly, the ads are the biggest lever left. The platform finds people; the ad decides which of them tap, and what they expect when they do." },
          { q: "Which channels should a subscription app use?", a: "Start where you can get steady volume on a payment event, usually Meta. Add TikTok or YouTube once that’s stable, with ads made for each, judged on the same subscriber number." },
          { q: "What should we track?", a: "Cost per trial, cost per paying subscriber, trial-to-paid, and renewals by month of joining. Keep acquisition, retention and revenue in separate views." },
          costQ("subscription app"),
        ],
      },
      { type: "related", items: ["edtech", "health-fitness", "creative-testing-sprint"] },
    ],
  },

  // ─────────────────────────────────────────────────────────────── Dating apps
  {
    slug: "dating-apps",
    name: "Dating apps",
    summary: "Ads split by audience and city, made for adults, judged on paying subscribers.",
    thumb: "outfit-try-on-5",
    meta: {
      title: "Dating app marketing agency: video ads for dating apps",
      description:
        "Dating app marketing with video ads split by audience and city, written to the platforms’ dating rules, never showing generated people as members, and judged on paying subscribers.",
    },
    hero: {
      title: "Dating app ads that grow paying subscribers, city by city",
      lede: "Dating apps don’t grow on installs. They grow when the right people complete a profile, match, and decide it’s worth paying for. We make video ads split by audience and city, written to the rules platforms set for dating, and judged on paying subscribers.",
      aside: PRICE,
      stats: heroStats,
      media: { photos: ["dating-a", "dating-b"] },
    },
    blocks: [
      CLIENTS,
      {
        type: "answer",
        title: "The short answer",
        text: "A dating app marketing agency finds members for a dating app, keeps the balance of who joins healthy, and turns members into paying subscribers. Lumivance makes the video ads, split by audience and city, and runs them on Meta, TikTok and YouTube wherever you’re approved to advertise.",
        facts: facts("Cost per paying subscriber, by audience and city"),
      },
      {
        type: "funnel",
        title: "Where dating apps lose money",
        intro: "A dating app is only as good as who’s in it. Each stage below is a place where the wrong ad makes it worse.",
        stages: [
          { stage: "Profile", wrong: "People install, see the sign-up and leave before adding a photo.", change: "Ads that show how quick the profile really is, with the app’s real screens and demo profiles.", metric: "Cost per completed profile" },
          { stage: "First match", wrong: "One audience floods in and the other doesn’t, so new members see nobody worth matching.", change: "Separate ads for each audience and city, so you can buy more of who you’re short of.", metric: "New members by audience and city" },
          { stage: "Subscription", wrong: "Members can’t see what paying changes, so they stay free.", change: "Ads about the moment paying helps: the first conversation, being seen, the safety features.", metric: "Cost per paying subscriber" },
          { stage: "Renewal", wrong: "Members who joined for a promise of a match tonight leave when it doesn’t happen.", change: "Describe how the app works instead of promising outcomes, so renewals aren’t fighting the ad.", metric: "Subscribers still paying at day 90" },
        ],
      },
      {
        type: "rules",
        title: "The rules dating ads play by",
        rows: [
          { rule: "Approval comes first", handle: "Meta only allows dating ads from advertisers it has approved, and other platforms have checks of their own. Get cleared before you book; we write to each platform’s rules once you are." },
          { rule: "Adults only", handle: "Dating ads are targeted at over-18s, and nobody in them looks younger." },
          { rule: "Nothing suggestive", handle: "Ads built on sexual content get rejected, and they bring in people who leave. We write for what the app is actually for." },
          { rule: "No generated members", handle: "The people in our ads are AI presenters talking about the app. They are never shown as profiles you could match with, and screen recordings use demo profiles." },
          { rule: "No promised matches", handle: "“Meet someone tonight” is a promise the app can’t keep for everyone. We describe how it works instead." },
        ],
      },
      calculator("paying subscriber", "Paying subscribers", 60),
      cases("dating-apps"),
      { type: "cta", text: "Cost per subscriber creeping up, or one side of the app filling faster than the other? Tell us which cities and we’ll tell you where we’d start." },
      compare("Cost per paying subscriber, by audience and city"),
      {
        type: "points",
        title: "Angles we’d test first",
        items: [
          { title: "What makes yours different", text: "Every app promises better matches. Show the one thing yours does that the big ones don’t, in the first three seconds." },
          { title: "The first conversation", text: "The moment after a match is where people give up. Show how your app gets it started." },
          { title: "The date, not the swipe", text: "People download dating apps to get off them. Coffee, a walk, a table for two say more than a feed of profiles." },
          { title: "Safety, said plainly", text: "Verification, reporting, who can message whom. For a lot of your audience, this is the deciding feature." },
          { title: "Made for the city", text: "Dating is local. Scripts that name the city, the neighbourhood or the kind of night out sound like they’re talking to someone." },
        ],
      },
      {
        type: "gallery",
        title: "The formats we’d use",
        intro: "We haven’t published dating spec ads yet. These structures are from our other spec work.",
        items: [
          { id: "emera-c-1", caption: "To camera becomes one feature, explained by a presenter." },
          { id: "outfit-try-on-5", caption: "Getting ready becomes the night out the app leads to." },
          { id: "emera-a-2", caption: "A reaction becomes the moment a match comes in." },
          { id: "emera-c-5", caption: "Hands only becomes the app in hand, with demo profiles." },
        ],
      },
      {
        type: "steps",
        title: "From first call to scale",
        items: [
          { title: "Brief", text: "A 30-minute call: who the app is for, which cities, who you need more of, and what the platforms have cleared you to run.", when: "Day 1" },
          { title: "Angles and scripts", text: "Angles for each audience, twenty scripts in total, for you to approve or cut.", when: "Days 1–2" },
          { title: "Your recordings", text: "Screen recordings of the real app, made with demo profiles rather than real members.", when: "Day 2" },
          { title: "First ads, then the full set", text: "First ads within 72 hours of the brief, the rest on the next cycle, with a test plan that keeps audiences apart.", when: "Days 3–6" },
          ongoing,
        ],
      },
      checklist(
        "Is your dating app ready to scale paid?",
        [
          "You’re approved to run dating ads on the platforms you use",
          "Your campaigns bid on a completed profile or a subscription, not the install",
          "You can see new members by audience and city",
          "You have demo profiles for screen recordings",
          "You know what a paying subscriber is worth over 90 days",
        ],
        "paying subscribers"
      ),
      PRICING,
      {
        type: "faq",
        title: "Questions about dating app marketing",
        items: [
          costQ("dating app"),
          { q: "How do you get dating ads approved on Meta?", a: "Approval is an application you make to Meta as the advertiser. We don’t make it for you, but once you’re cleared we write every script to the platform’s dating rules." },
          { q: "How do you keep a healthy balance of who joins?", a: "With separate ads for each audience and city, so budget can go to whoever you’re short of. The test plan keeps their results apart." },
          { q: "Are the people in the ads real users?", a: "No. They’re AI presenters, and the ads never present them as members of your app." },
          { q: "Can you show real profiles?", a: "No. We use recordings made with demo profiles you set up, so no real member appears in an ad." },
          { q: "Can you market niche or faith-based dating apps?", a: "Yes. A narrow audience makes the ads more specific, not less: the values, the community, and what’s different about meeting there." },
          timeQ("paying subscribers"),
          { q: "What would you judge the ads on?", a: "Cost per completed profile and per paying subscriber, split by audience and city. We agree it before the test." },
        ],
      },
      { type: "related", items: ["subscription-apps", "ai-presenters", "creative-testing-sprint"] },
    ],
  },

  // ─────────────────────────────────────────────────────────────── Mobile games
  {
    slug: "mobile-games",
    name: "Mobile games",
    summary: "Weekly batches of ads cut from your real gameplay, judged on payback, not installs.",
    thumb: "fizzbears-a-3",
    meta: {
      title: "Mobile game UA creative: video ads for mobile games",
      description:
        "Mobile game user acquisition creative: weekly batches of video ads cut from your real gameplay, reactions, near misses and challenges, judged on D7 and D30 return on ad spend rather than installs.",
    },
    hero: {
      title: "Mobile game ads that keep up with your spend",
      lede: "A game burns through ads faster than any other app. The studios that scale are the ones with a new batch ready every week. We make video ads from your real gameplay, reactions, near misses and the satisfying ten seconds, and judge them on payback, not install counts.",
      aside: PRICE,
      stats: heroStats,
      media: { photos: ["games-a", "games-b"] },
    },
    blocks: [
      CLIENTS,
      {
        type: "answer",
        title: "The short answer",
        text: "A mobile game UA agency buys players for a game and judges them on whether they pay back what they cost. Lumivance supplies the part most studios run short of: video ads cut from your real gameplay, in batches big enough to test every week, and media buying on Meta, TikTok and YouTube if you want it.",
        facts: facts("Cost per install first, then D7 and D30 return on ad spend"),
      },
      cases("mobile-games"),
      {
        type: "points",
        title: "Creative is the lever. Pull it every week.",
        items: [
          { title: "A new batch every week", text: "Twenty, forty or eighty ads per sprint, so there’s always something fresh to rotate in before the current winner tires." },
          { title: "Real gameplay, always", text: "Every second of gameplay is captured from your game. Regulators have banned game ads for showing mechanics the game doesn’t have." },
          { title: "Hooks crossed with formats", text: "Five hooks, each made four ways: reaction, near miss, challenge and gameplay only. A test that tells you which idea works, not just which video." },
          { title: "Named so you can read them", text: "Every file is named by hook and format, and the names carry into your ad account and attribution tool." },
        ],
      },
      {
        type: "steps",
        title: "The loop, built for games",
        items: [
          { title: "Audit", text: "Every ad that ran in the last ninety days, read on cost per install and early return, not views.", when: "Week 1" },
          { title: "Plan and build", text: "Hooks and formats chosen from what your players already respond to, scripted and approved.", when: "Week 1" },
          { title: "Ship", text: "First ads 72 hours after the brief, cut for every placement.", when: "Week 2" },
          { title: "Measure", text: "Each hook read at D7, then D30, against the cost of the players it brought in.", when: "Weeks 2–4" },
          { title: "Scale and repeat", text: "Winners get budget and variations, losers are cut, and the next batch is briefed from what won.", when: "Every week" },
        ],
      },
      {
        type: "points",
        title: "We judge on payback, not installs",
        intro: "Cheap installs that never spend are the most expensive players a game can buy.",
        items: [
          { title: "D7", text: "The first read. Is this hook bringing in players who come back and spend a little? It’s where most losers are cut." },
          { title: "D30", text: "The real verdict for most casual games. Spend scales only on hooks whose cohorts are on course to pay back." },
          { title: "D90", text: "For games with longer payback, the cohort curve that decides how far a winning hook can be pushed." },
          { title: "On iOS", text: "Platform numbers are modelled and incomplete, so they’re read alongside your attribution tool’s cohorts. When they disagree, your own data wins." },
        ],
      },
      {
        type: "points",
        title: "The channels",
        items: [
          { title: "Meta", text: "The broadest reach for most genres, and the fastest place to test a new hook." },
          { title: "TikTok", text: "Where reactions and challenges feel native, and where ads tire fastest." },
          { title: "YouTube", text: "Longer gameplay and Shorts, for games that sell on depth as well as the hook." },
          { title: "Ad networks", text: "If your team also buys on networks such as AppLovin or Unity, tell us their sizes and we’ll export to them." },
        ],
      },
      {
        type: "rules",
        title: "The rules game ads play by",
        rows: [
          { rule: "The gameplay is real", handle: "Every second is captured from your game. If a mechanic isn’t in the game, it isn’t in the ad." },
          { rule: "No fake interface", handle: "Buttons, scores and rewards on screen are your real ones. We don’t generate game screens." },
          { rule: "Mind the age rating", handle: "Ads follow the game’s rating, and games with real-money or casino-style play need platform approval before they can advertise." },
          { rule: "Presenters aren’t players", handle: "The person reacting is AI-generated. The ad doesn’t claim they’re a real streamer or a real player." },
        ],
      },
      { type: "cta", text: "Your best ad is a month old and D7 return keeps slipping? Tell us about the game and we’ll tell you which hooks we’d test next." },
      {
        type: "points",
        title: "Why studios would work with us",
        items: [
          { title: "Volume without a shoot", text: "Batches of forty or eighty from footage you already have, without booking talent or a studio." },
          { title: "Fixed price per batch", text: "You know what each week of creative costs before it starts." },
          { title: "Payback, not views", text: "Every ad is judged on the players it brings in, at D7 and D30." },
          { title: "You talk to the makers", text: "The people who write and cut your ads are the people on the call." },
        ],
      },
      {
        type: "points",
        title: "Your store page gets the same treatment",
        intro: "Paid installs land on your store page. It should say what the winning ad said.",
        items: [
          { title: "App preview videos", text: "Cut from the same footage as the winning hooks, so the store confirms the ad." },
          { title: "Custom product pages", text: "A video per winning angle, for the custom store pages Apple and Google let you send each ad to." },
          { title: "Seasonal events", text: "New ads and store videos for live events, made in the same batch." },
        ],
      },
      {
        type: "videos",
        title: "What a motion ad looks like",
        intro: "Two edits of one spec motion piece, made with AI. In a game ad, your gameplay takes the product’s place.",
        items: [
          { slug: "fizzbears-a", title: "Edit A", text: "Opens wide, reveals the subject." },
          { slug: "fizzbears-b", title: "Edit B", text: "Opens on texture, gets there sooner." },
        ],
      },
      checklist(
        "Is your game ready to scale paid?",
        [
          "You know your D7 and D30 return on ad spend by campaign",
          "Your best ad is less than a month old",
          "You can capture real gameplay, including fails and near misses",
          "Results are visible ad by ad, not just by campaign",
          "You can test new ads every week",
        ],
        "payback"
      ),
      PRICING,
      {
        type: "faq",
        title: "Mobile game UA, honest answers",
        items: [
          { q: "What do you do for mobile game user acquisition?", a: "We make the ads: video cut from your real gameplay, in weekly batches. On a retainer we also run Meta, TikTok and YouTube campaigns in your accounts." },
          { q: "Which channels do you run?", a: "Meta, TikTok and YouTube. If you buy on ad networks yourselves, we export the same ads to their sizes." },
          { q: "What kinds of games do you work with?", a: "Casual, puzzle, merge, idle and mid-core games with gameplay that reads in a few seconds. Real-money and casino-style games need platform approval before we can help." },
          { q: "Do you make playable ads?", a: "No. We make video ads: vertical, portrait and square, with widescreen on request." },
          { q: "Can you use fake gameplay to test a concept?", a: "No. If a mechanic isn’t in the game, it isn’t in the ad. Real footage can be cut in a lot of different ways." },
          { q: "Can the presenter look like a real streamer?", a: "No. We don’t recreate real people, and the ads don’t claim the presenter is one." },
          { q: "How do you measure success on iOS?", a: "With what your attribution set-up reports, read alongside the platforms’ own numbers. Every file is named by hook and format, so results trace back to the idea." },
          { q: "Which sprint size suits a game?", a: "It depends how fast you test. Twenty ads is five ideas made four ways. If you test every week, forty or eighty last longer." },
          { q: "When should a studio bring in outside help?", a: "When the team can’t make new ads as fast as the old ones tire, or when one ad is carrying the whole game." },
          costQ("mobile game UA"),
        ],
      },
      { type: "related", items: ["creative-testing-sprint", "ai-video-ads", "paid-social"] },
    ],
  },

  // ─────────────────────────────────────────────────────────────── Health and fitness
  {
    slug: "health-fitness",
    name: "Health & fitness",
    inText: "health and fitness",
    summary: "Ads that show the first session, not a six-month result, judged on paying members and buyers.",
    thumb: "bike-unboxing-3",
    meta: {
      title: "Health and fitness app marketing agency: video ads",
      description:
        "Health and fitness marketing with video ads for fitness, nutrition, sleep and wellbeing apps and products. The first session shown honestly, no before-and-after, judged on paying members and purchases.",
    },
    hero: {
      title: "Health and fitness ads for people who start, and keep going",
      lede: "Whether it’s an app, a bike or a blender, the question in the viewer’s head is the same: “will I actually use it?” The ads that answer it show the first session, not a six-month result. We make them twenty at a time and judge them on paying members and buyers.",
      aside: PRICE,
      stats: heroStats,
      media: { photos: ["health-a", "health-b"] },
    },
    blocks: [
      CLIENTS,
      {
        type: "answer",
        title: "The short answer",
        text: "A health and fitness marketing agency finds customers for fitness, nutrition, sleep and wellbeing apps and products, and turns trials into paying members. Lumivance does it with video ads that show the first session rather than a promised result, written to the platforms’ health rules and judged on paying members or purchases.",
        facts: facts("Cost per paying member or purchase"),
      },
      {
        type: "funnel",
        title: "Where health and fitness brands lose money",
        intro: "Most people who start a fitness app or buy the kit mean it. The money is lost when the ad set them up for the wrong first week.",
        stages: [
          { stage: "Onboarding", wrong: "A long quiz before anything happens, and people leave before the first workout.", change: "Ads that show what the first session asks of you, so the people who install are ready for it.", metric: "Cost per first session" },
          { stage: "Trial start", wrong: "Trials arrive on a promise of a new body and leave when week one feels like work.", change: "Ads about the first week, not the twelfth: how long, how hard, and where.", metric: "Cost per trial" },
          { stage: "Paid member", wrong: "January trials flood in at the year’s highest prices, and few convert.", change: "Fresh ads made and tested before New Year, and January cohorts judged on their own.", metric: "Cost per paying member" },
          { stage: "Renewal", wrong: "People sold a result cancel when it takes longer than the ad implied.", change: "Promise the habit, not the outcome, so the ad that brought them in isn’t the reason they leave.", metric: "Members still paying at day 90" },
        ],
      },
      {
        type: "rules",
        title: "The rules health ads play by",
        rows: [
          { rule: "No before-and-after", handle: "Side-by-side body transformations are restricted on the major platforms and easy to fake with AI, which is exactly why we don’t make them." },
          { rule: "Nothing about the viewer’s body", handle: "“Tired of your belly?” gets ads rejected on Meta and makes people feel worse. We talk about the product." },
          { rule: "Weight loss is restricted", handle: "Platforms limit weight-loss ads to adults and reject dramatic claims. We check an angle before we script it." },
          { rule: "Health claims need proof", handle: "An app isn’t a medical device unless it has been cleared as one. Scripts describe what it does, not what it treats." },
          { rule: "Presenters don’t claim results", handle: "A generated presenter can do the workout. It can’t say it lost ten kilos." },
        ],
      },
      calculator("paying member", "Paying members", 50),
      cases("health-fitness"),
      {
        type: "videos",
        title: "Two examples from our spec work",
        items: [
          { slug: "bike-unboxing", title: "Unboxing to first ride", text: "Answers the assembly question before it’s asked." },
          { slug: "blender-demo", title: "Presenter demo", text: "A kitchen appliance shown doing its job, explained as it goes." },
        ],
      },
      { type: "cta", text: "Trials going up and paying members staying flat? Tell us what’s running and we’ll tell you where we’d look first." },
      compare("Cost per paying member or purchase"),
      {
        type: "points",
        title: "Angles we’d test first",
        items: [
          { title: "The first session", text: "The first workout, the first meal logged, the first ride. The moment of use, not the result months later." },
          { title: "Getting started is easy", text: "Box to first use in seconds, or sign-up to first workout. Starting is the objection nobody says out loud." },
          { title: "It fits your day", text: "Before work, after a run, last thing at night. Show the slot it takes, in a real room." },
          { title: "The streak", text: "For apps, the habit is the product. Day one, day three, day ten, shown on the real screen." },
          { title: "What it replaces", text: "The gym you don’t go to, the plan you gave up on. Said kindly, and never as a dig at the viewer." },
        ],
      },
      {
        type: "steps",
        title: "From first call to scale",
        items: [
          { title: "Brief", text: "A 30-minute call: the product or app, who buys it, the claims you can make and what you’ve already tried.", when: "Day 1" },
          { title: "Angles and scripts", text: "Five angles and twenty scripts for you to approve or cut.", when: "Days 1–2" },
          { title: "Your photos or recordings", text: "Product photos from every side, or screen recordings of the app.", when: "Day 2" },
          { title: "First ads, then the full set", text: "First ads within 72 hours of the brief, the rest on the next cycle, with a test plan.", when: "Days 3–6" },
          ongoing,
        ],
      },
      checklist(
        "Is your health or fitness brand ready to scale paid?",
        [
          "Your campaigns optimise for a trial or a purchase, not the install",
          "Your ads show the product in use, with no before-and-after images",
          "New ads for January are planned before December starts",
          "You judge New Year customers separately from the rest of the year",
          "You refresh your ads every week or two",
        ],
        "paying members"
      ),
      PRICING,
      {
        type: "faq",
        title: "Questions about health and fitness marketing",
        items: [
          costQ("health and fitness"),
          { q: "How do you plan for January?", a: "We make and test the January ads in December, so you go into the most expensive weeks of the year with known winners, and we judge January cohorts on their own." },
          { q: "How do you improve trial-to-paid with ads?", a: "By showing the first week honestly. People who know what the first workout asks of them are the ones who still have the app when the trial ends." },
          { q: "Can you show body transformations?", a: "No. Before-and-after body images are restricted on the major platforms and easy to fake with AI, which is exactly why we don’t make them." },
          { q: "Do you make ads for fitness apps as well as products?", a: "Yes. For apps we cut in screen recordings you send. For products we work from photos." },
          { q: "Do AI-made ads work for health brands?", a: "They can show the product in use quickly and in volume, which is what testing needs. A generated presenter is never a customer, so they never claim results." },
          { q: "Can you show real customer results?", a: "Only if they’re real, typical and you have permission, shown as credited quotes or figures." },
          timeQ("paying members"),
        ],
      },
      { type: "related", items: ["supplements", "subscription-apps", "ai-presenters"] },
    ],
  },
];


// Direct-to-consumer categories with rules of their own. They sit under DTC
// brands rather than in the main list of sectors.
export const categories = [
  {
    slug: "skincare",
    parent: "dtc",
    name: "Skincare & beauty",
    summary: "Texture, routine and ingredient ads that stay inside the claims you can prove.",
    thumb: "emera-c-5",
    meta: {
      title: "Ads for skincare and beauty brands",
      description:
        "UGC-style video ads for skincare and beauty brands: texture, routine and ingredient angles, scripted around platform policies on personal attributes, before-and-after images and medical claims.",
    },
    hero: {
      title: "Ads for skincare and beauty brands",
      lede: "Beauty buyers want to see the product on skin: the texture, the routine, the finish. Ad platforms want you to avoid before-and-after promises and anything that sounds like a diagnosis. We make ads that do the first and stay clear of the second.",
      aside: "Scripted from the claims you can back up.",
      media: { stills: ["bag-unboxing-2", "emera-a-3"] },
      caption: "Stills from our spec ads in other categories, made with AI.",
    },
    blocks: [
      {
        type: "points",
        title: "Angles that tend to work",
        items: [
          { title: "The texture shot", text: "A close-up of the product on skin: how it spreads, how it sinks in, the finish it leaves." },
          { title: "The routine", text: "Where it fits in a real morning or evening, next to products the viewer already owns." },
          { title: "The ingredient", text: "What’s in it and why, in a sentence, the way people actually talk about niacinamide or retinol." },
          { title: "The skin type", text: "Who it’s for, said plainly: oily, dry, sensitive. Specific beats universal." },
          { title: "The unboxing", text: "Packaging, first impressions, the moment it’s opened. A format beauty buyers already watch for fun." },
        ],
      },
      {
        type: "points",
        title: "What gets skincare ads rejected",
        items: [
          { title: "Personal attributes", text: "“Tired of your breakouts?” implies the platform knows your skin, and Meta doesn’t allow it. We write “for breakout-prone skin” instead." },
          { title: "Before-and-after", text: "Side-by-side transformations and promises of dramatic results are restricted on the major platforms. We show the product working, not an outcome." },
          { title: "Medical claims", text: "Treat, cure, heal: those are drug words. Unless your product is regulated as a drug, scripts stay in cosmetic language." },
          { title: "Invented results", text: "An AI presenter can’t say a product cleared her skin. She never had skin. We script demonstrations, not experiences." },
        ],
      },
      {
        type: "gallery",
        title: "What these would look like",
        intro: "We haven’t published skincare spec ads yet. These are the same structures from our other spec work, and how each one translates.",
        items: [
          { id: "bag-unboxing-3", caption: "Unboxing becomes the first look at a new serum." },
          { id: "emera-c-5", caption: "Hands only becomes the texture shot." },
          { id: "emera-a-4", caption: "On the wrist becomes on the skin." },
        ],
      },
      PRICING,
      {
        type: "faq",
        title: "Questions about skincare ads",
        items: [
          { q: "Can you show the product on real skin?", a: "Our presenters are AI-generated, so the skin on screen is generated too. For texture shots, we can also cut in close-ups you film of the real product." },
          { q: "Do you check our claims?", a: "We script from a claims list you approve, and we flag anything that reads like a drug claim or a promise. Final sign-off on claims stays with you. We aren’t your regulatory advisers." },
          { q: "Can you make ads for a launch?", a: "Yes. A sprint before launch gives you twenty ads ready to test on day one." },
        ],
      },
      { type: "related", items: ["dtc", "supplements", "ai-ugc-ads"] },
    ],
  },

  {
    slug: "supplements",
    parent: "dtc",
    name: "Supplements & nutrition",
    summary: "Ritual, taste and ingredient ads that stay on the right side of health-claim rules.",
    thumb: "blender-demo-4",
    meta: {
      title: "Ads for supplement and nutrition brands",
      description:
        "Video ads for supplement brands that sell the daily habit: ritual, taste and ingredient angles in structure-and-function language, checked against platform restrictions before production.",
    },
    hero: {
      title: "Ads for supplement and nutrition brands",
      lede: "Supplement buyers are buying a routine: something they’ll take every day and feel good about. The ads that work show the habit, the scoop, the shake, the morning, and never claim to treat anything. We make those in volume, ready for platform review.",
      aside: "Structure-and-function language only.",
      media: { stills: ["blender-demo-3", "bike-unboxing-5"] },
      caption: "Stills from our kitchen and fitness spec ads, made with AI.",
    },
    blocks: [
      {
        type: "points",
        title: "Angles that tend to work",
        items: [
          { title: "The ritual", text: "The scoop, the stir, the first sip. Showing the habit makes it easy to picture having it." },
          { title: "The ingredient story", text: "Where the key ingredient comes from and what it does, in claims your label already supports." },
          { title: "The taste test", text: "For powders and gummies, taste is the objection. Deal with it on camera." },
          { title: "The simplification", text: "One capsule against a cupboard of bottles. One scoop against three products." },
        ],
      },
      {
        type: "points",
        title: "The rules for supplement ads",
        items: [
          { title: "Disease claims", text: "“Supports healthy sleep” is a structure-and-function claim. “Cures insomnia” is a drug claim. Our scripts use the first kind only." },
          { title: "Substantiation", text: "In the US, the FTC expects health claims in ads to be backed by competent and reliable scientific evidence. We script from the claims you can support." },
          { title: "Restricted categories", text: "Weight loss and some ingredients are restricted or banned on certain platforms. We check before we write a word." },
          { title: "No fake customers", text: "AI presenters demonstrate and explain. They never claim to have taken the product." },
        ],
      },
      {
        type: "gallery",
        title: "What these would look like",
        intro: "Supplement spec work isn’t published yet. These structures come from our kitchen and fitness spec ads.",
        items: [
          { id: "blender-demo-3", caption: "A demo becomes the morning shake." },
          { id: "bike-unboxing-5", caption: "First use becomes the habit in action." },
          { id: "emera-c-4", caption: "Hands only becomes the scoop and stir." },
        ],
      },
      PRICING,
      {
        type: "faq",
        title: "Questions about supplement ads",
        items: [
          { q: "Can you say our product boosts immunity?", a: "Only in words your substantiation supports, and never as a treatment. We’ll suggest compliant phrasing. Final sign-off is yours." },
          { q: "Do platforms allow supplement ads?", a: "Generally yes, with restrictions. Weight loss is the most restricted category. We’ll tell you before production if an angle is likely to be rejected." },
          { q: "Gummies, powders or capsules?", a: "All three. Each has its own best opener: the chew, the pour, the swallow." },
        ],
      },
      { type: "related", items: ["dtc", "health-fitness", "ai-ugc-ads"] },
    ],
  },
];

// Every sector as one phrase ("edtech, fintech, … and health and fitness"),
// for copy that lists them. Built from the list above so it cannot go stale.
export const sectorList = new Intl.ListFormat("en", { style: "long", type: "conjunction" }).format(
  industries.map((i) => i.inText ?? i.name.toLowerCase())
);
