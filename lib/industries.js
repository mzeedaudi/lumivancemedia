import { priceCopy } from "@/lib/offer";

// Industry pages (/industries/[slug]): the sectors Lumivance makes ads for,
// then two direct-to-consumer categories with rules of their own.
//
// Where there is no spec work in a sector yet, the page says so and shows the
// same structures from other spec work. The only client work is on the DTC
// page, and it is named and tagged as such. Nothing here claims a result, and
// platform rules are described in general terms because they change.

const PRICE = `From ${priceCopy.from}.`;
const OTHER_SPEC = "Spec ads from other categories, made with AI.";
const PRICING = { type: "pricing", title: "What it costs", intro: "The same three sizes for every sector. A sprint is a fixed price for a fixed number of finished ads." };

export const industries = [
  {
    slug: "edtech",
    name: "EdTech",
    summary: "Ads that show the first lesson, for learning apps, courses and tutoring.",
    thumb: "emera-c-1",
    meta: {
      title: "Video ads for edtech apps and online courses",
      description:
        "UGC-style video ads for edtech: learning apps, online courses and tutoring. Ads built around the first lesson, scripted to the outcomes you can prove, twenty at a time.",
    },
    hero: {
      title: "Video ads for edtech",
      lede: "Learning products are hard to sell in fifteen seconds, because the benefit arrives weeks later. The ads that work show the first lesson, not the certificate. We make them twenty at a time, with your real product on screen, and the first ones arrive 72 hours after your brief.",
      aside: PRICE,
      media: { pair: ["emera-c", "blender-demo"] },
      caption: OTHER_SPEC,
    },
    blocks: [
      {
        type: "points",
        title: "Angles that tend to work",
        items: [
          { title: "The first lesson", text: "Thirty seconds of the product doing its job: a question asked, an answer checked, a small win. It beats any description of the curriculum." },
          { title: "The stuck moment", text: "Open on the exact thing your learner can’t do yet: the verb that won’t stick, the fraction that makes no sense. Then show it getting unstuck." },
          { title: "Five minutes a day", text: "Show where it fits: on the bus, between meetings, after dinner. Most people don’t doubt the product. They doubt they’ll keep it up." },
          { title: "The parent’s view", text: "For children’s products the buyer isn’t the user. A second set of ads speaks to the parent: what the child does, and what the parent can see." },
          { title: "The deadline", text: "Exams, applications and new terms give people a reason to start this week. We plan angles around your calendar." },
        ],
      },
      {
        type: "points",
        title: "What gets edtech ads rejected",
        items: [
          { title: "Promised outcomes", text: "“Fluent in 30 days” and “guaranteed top grades” are promises you’d have to prove. We script what the product does and what your evidence supports." },
          { title: "Jobs and salaries", text: "Claims about job placement or pay rises need real figures behind them. If you have the data, we quote it exactly. If you don’t, we leave it out." },
          { title: "Ads aimed at children", text: "Platforms limit how advertisers can target under-18s, and laws such as COPPA in the US cover under-13s. For younger learners, we write for the parent." },
          { title: "Invented students", text: "An AI presenter can show a lesson. It can’t say it passed an exam, because it never sat one." },
        ],
      },
      {
        type: "split",
        title: "The product on screen is your real one",
        paras: [
          "The app or course in the ad is yours, as it actually looks. You send screen recordings of real lessons, and we cut them in beside the presenter. We don’t generate interface, lesson content or features you don’t have.",
          "The presenter is AI-generated and is there to do what a good teacher does in the first minute: point at the thing and explain it.",
        ],
        still: "emera-c-1",
        caption: "A presenter talking to camera, from our spec work. In an edtech ad, your lesson plays beside them.",
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
        title: "How a sprint would run",
        items: [
          { title: "Brief", text: "A 30-minute call: who learns with you, who pays, the outcomes you can prove and the dates that matter this term.", when: "Day 1" },
          { title: "Angles and scripts", text: "Five angles and twenty scripts. You approve every one, and so can whoever signs off your claims.", when: "Days 1–2" },
          { title: "Your recordings", text: "You send screen recordings of real lessons. We tell you exactly which screens we need.", when: "Day 2" },
          { title: "First ads, then the full set", text: "First ads within 72 hours of the brief, the rest on the next cycle, with a test plan.", when: "Days 3–6" },
        ],
      },
      PRICING,
      {
        type: "fit",
        title: "Who it’s for",
        yes: [
          "You sell a learning app, an online course or tutoring, and already run paid social",
          "You can record your real product on screen",
          "You know which outcomes you can prove",
          "You want ads to test this term, not next",
        ],
        no: [
          "You need real students on camera",
          "You want a promise of grades or jobs we’d have to invent",
          "You haven’t got a product to record yet",
        ],
      },
      {
        type: "faq",
        title: "Questions about edtech ads",
        items: [
          { q: "Can you show our app in the ads?", a: "Yes, using screen recordings you send. The product on screen is always your real one. We don’t generate interface or lessons." },
          { q: "Can you use our real students’ results?", a: "Yes, if they’re real and you have permission. We show them as on-screen figures or quotes credited to the student, not spoken by a generated presenter posing as them." },
          { q: "Do you make ads for children’s products?", a: "Yes, written for parents. We don’t make ads designed to be targeted at children." },
          { q: "What would you judge the ads on?", a: "Whatever a new customer costs you: a trial start, a sign-up or an enrolment. We agree that number before the test and name every file so you can trace results back to an angle." },
          { q: "Do you run the campaigns too?", a: "On a sprint you run them with our test plan. On the retainer we run Meta, TikTok and YouTube campaigns in your accounts." },
        ],
      },
      { type: "related", items: ["subscription-apps", "ai-ugc-ads", "ai-presenters"] },
    ],
  },

  {
    slug: "fintech",
    name: "FinTech",
    summary: "Ads that explain a money product plainly, with nothing you’d have to defend to a regulator.",
    thumb: "emera-a-6",
    meta: {
      title: "Video ads for fintech apps",
      description:
        "UGC-style video ads for fintech: banking, payments, investing and lending apps. Plain-language scripts, your real app on screen, and every claim signed off by your compliance team before production.",
    },
    hero: {
      title: "Video ads for fintech",
      lede: "Money ads have two jobs: earn trust in a few seconds, and get past a compliance review. We make UGC-style ads that explain what your product does in plain words, show the real app, and promise nothing you’d have to defend later. Twenty at a time, with the first ones 72 hours after your compliance team approves the scripts.",
      aside: PRICE,
      media: { pair: ["emera-a", "emera-c"] },
      caption: OTHER_SPEC,
    },
    blocks: [
      {
        type: "points",
        title: "Angles that tend to work",
        items: [
          { title: "The fee they’re paying now", text: "Open on a cost the viewer already has: the transfer fee, the overdraft charge, the exchange rate. Then show yours, with the real numbers." },
          { title: "The quick set-up", text: "Sign-up shown from start to finish, if it really is that quick. Speed claims are only worth making when the screen recording proves them." },
          { title: "See where it goes", text: "For budgeting and saving apps, the product is the demo: one month of spending, sorted, on screen." },
          { title: "What happens to my money", text: "Say how funds are held and who regulates you, in the wording your compliance team uses. Trust is most of the sale." },
          { title: "One job, done", text: "Splitting a bill, sending money abroad, rounding up change. One task per ad, shown from tap to done." },
        ],
      },
      {
        type: "points",
        title: "The rules for money ads",
        items: [
          { title: "No promised returns", text: "“Double your savings” is out. Rates appear only if they’re the real ones, with their conditions, and investing ads carry the risk warning your regulator requires." },
          { title: "Licences and verification", text: "In many countries, Google and Meta ask financial advertisers to prove they’re authorised before ads can run. We’ll ask which markets you’re cleared for before we script." },
          { title: "Restricted targeting", text: "In the US and several other countries, Meta puts ads for credit and other financial products in a special category with limited targeting. The creative has to do more of the work." },
          { title: "Crypto is stricter still", text: "Crypto products usually need a platform’s approval first, and some placements are closed to them altogether." },
          { title: "No invented customers", text: "A generated presenter can explain a feature. It can’t say it paid off its card or made money, because it didn’t." },
          { title: "Not financial advice", text: "Presenters describe what the product does. They don’t tell viewers what to do with their money." },
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
        type: "gallery",
        title: "The formats we’d use",
        intro: "We haven’t published fintech spec ads yet. These structures are from our other spec work.",
        items: [
          { id: "emera-c-1", caption: "To camera becomes one feature, explained plainly." },
          { id: "emera-c-6", caption: "Hands only becomes the phone in hand, from tap to done." },
          { id: "blender-demo-4", caption: "A demo becomes a walkthrough of a real screen recording." },
        ],
      },
      {
        type: "steps",
        title: "How a sprint would run",
        items: [
          { title: "Brief", text: "A call with marketing and, ideally, compliance: the product, the markets you’re licensed in, your approved wording and what you can’t say.", when: "Day 1" },
          { title: "Scripts and a claims list", text: "Twenty scripts, with every claim, rate and disclaimer listed separately for sign-off.", when: "Days 1–2" },
          { title: "Sign-off", text: "Your compliance team approves, edits or cuts. Production starts only on approved scripts.", when: "Your timing" },
          { title: "First ads, then the full set", text: "First ads 72 hours after approval, the rest on the next cycle, with the test plan.", when: "After sign-off" },
        ],
      },
      PRICING,
      {
        type: "fit",
        title: "Who it’s for",
        yes: [
          "You run a licensed money product and already advertise on paid social",
          "Someone on your side can approve claims",
          "You can record your real app on screen",
          "You want more angles to test without a new shoot each time",
        ],
        no: [
          "You want to promise returns or guaranteed approval",
          "You aren’t licensed in the markets you want to advertise in",
          "You need real customers telling their stories on camera",
        ],
      },
      {
        type: "faq",
        title: "Questions about fintech ads",
        items: [
          { q: "Will our compliance team accept AI-made ads?", a: "That’s their call, which is why they see every script before production and every finished ad before it runs. Presenters are labeled as AI where platforms require it, and they never pose as customers." },
          { q: "Can you show real rates and fees?", a: "Yes, copied from your approved wording, with the conditions and disclaimers that go with them." },
          { q: "Do you work with crypto products?", a: "We can make the ads, but crypto advertising needs platform approval first and is closed in some markets. Check what you’re cleared to run before you book." },
          { q: "What would you judge the ads on?", a: "The number that means a real customer for you, such as a funded account or an approved application, not installs. We agree it before the test." },
          { q: "Do you handle platform verification?", a: "No. Proving you’re authorised is between you, the platform and your regulator. Once you have it, we write to what it allows." },
        ],
      },
      { type: "related", items: ["subscription-apps", "ai-presenters", "creative-testing-sprint"] },
    ],
  },

  {
    slug: "ecommerce",
    name: "E-commerce",
    summary: "Product ads for online stores with a range to sell: unboxings, try-ons and demos.",
    thumb: "lookbook-1",
    meta: {
      title: "Video ads for e-commerce stores",
      description:
        "UGC-style and product-led video ads for online stores: unboxings, try-ons, demos and product heroes across your range, twenty at a time, judged on cost per purchase.",
    },
    hero: {
      title: "Video ads for e-commerce stores",
      lede: "If you run an online store, you have more products than ads, and the ads you do have wear out faster than you can reshoot them. We make unboxings, try-ons, demos and product ads in batches of twenty, from photos of your real products, so more of your range gets tested.",
      aside: PRICE,
      media: { pair: ["lookbook", "vazu-can"] },
    },
    blocks: [
      {
        type: "gallery",
        title: "What we’ve made so far",
        items: [
          { id: "bag-unboxing-6", caption: "Accessories: unboxing." },
          { id: "gold-cuff-2", caption: "Jewelry: selfie show and tell." },
          { id: "outfit-try-on-4", caption: "Fashion: try-on." },
          { id: "vazu-can-6", caption: "Drinks: packshot." },
          { id: "fizzbears-b-6", caption: "Candy: motion." },
          { id: "emera-a-4", caption: "Watches: reaction." },
        ],
      },
      {
        type: "points",
        title: "Angles that tend to work",
        items: [
          { title: "Open on the product", text: "The first frame should make it obvious what’s for sale. Mystery is for brands people already know." },
          { title: "The unboxing", text: "The parcel, the packaging, the first look. It answers “what actually arrives?” without a word." },
          { title: "The try-on or the demo", text: "The product being worn, or doing its job, filmed the way a buyer would film it." },
          { title: "One reason per ad", text: "An ad that says five things says none. Each of the twenty carries one reason to buy." },
          { title: "Across the range", text: "Twenty ads can be five products made four ways, or one best seller made twenty ways. We plan the split with you." },
        ],
      },
      {
        type: "points",
        title: "The rules we work to",
        items: [
          { title: "The product is the real one", text: "We work from photos of your product and packaging and check every frame against them. Nothing looks better in the ad than it does in the box." },
          { title: "Claims by category", text: "Skincare, supplements and anything health-related have rules of their own. We’ve written those up on separate pages." },
          { title: "No invented reviews", text: "Star ratings and quotes appear only if they’re real, current and yours. A generated presenter never plays a customer." },
          { title: "Prices, delivery and offers", text: "Prices, delivery times, returns terms and discounts shown in an ad match the store on the day it runs." },
        ],
      },
      {
        type: "frames",
        title: "One of the ads, frame by frame",
        intro: "A spec unboxing for a handbag: the gift bag, the dust bag, the reveal. Twelve seconds, filmed the way a customer would film it.",
        slug: "bag-unboxing",
      },
      {
        type: "videos",
        title: "Three more examples",
        items: [
          { slug: "outfit-try-on", title: "Try-on", text: "Three pieces in hand, then worn as one outfit." },
          { slug: "blender-demo", title: "Demo", text: "The product doing its job, explained as it goes." },
          { slug: "bike-unboxing", title: "Unboxing to first use", text: "Box, set-up and the first ride in fifteen seconds." },
        ],
      },
      { type: "related", title: "Closely related", items: ["dtc", "skincare", "supplements"] },
      PRICING,
      {
        type: "fit",
        title: "Who it’s for",
        yes: [
          "You run an online store and already advertise on Meta or TikTok",
          "You have more products worth advertising than you have ads",
          "You can send photos of the product from every side",
          "You judge ads on cost per purchase",
        ],
        no: [
          "You need real customers or creators on camera",
          "You want a brand film rather than ads to test",
          "Your product isn’t ready to photograph yet",
        ],
      },
      {
        type: "faq",
        title: "Questions about e-commerce ads",
        items: [
          { q: "Do we need to send you the product?", a: "No. Clear photos from every side are enough. If you have video of it in use, we can cut that in." },
          { q: "Can you shoot our product?", a: "We don’t do physical shoots. We work from photos of your product, and if you have footage, we can use it." },
          { q: "Which platforms are the ads for?", a: "Meta, TikTok and YouTube. Every ad is exported for each placement." },
          { q: "What would you judge the ads on?", a: "Cost per purchase, in your own ad account, where you can see it." },
          { q: "Can you match our brand’s look?", a: "Yes. You send your logo, fonts and colors, and you approve every script and every finished ad." },
        ],
      },
      { type: "related", items: ["dtc", "ai-video-ads", "work"] },
    ],
  },

  {
    slug: "dtc",
    name: "DTC brands",
    inText: "direct-to-consumer brands",
    summary: "Ads for brands that make their own product and sell it direct, judged on what a new customer costs.",
    thumb: "bag-unboxing-1",
    meta: {
      title: "Video ads for direct-to-consumer (DTC) brands",
      description:
        "UGC-style and product-led video ads for direct-to-consumer brands: new angles for Meta and TikTok, made from photos of your real product and judged on what a new customer costs.",
    },
    hero: {
      title: "Video ads for direct-to-consumer brands",
      lede: "A direct-to-consumer brand lives on paid social, and paid social lives on new ads. When your best ad tires, the cost of a new customer climbs until something replaces it. We make the replacements twenty at a time, from photos of your real product, with the first ones 72 hours after your brief.",
      aside: PRICE,
      media: { pair: ["bag-unboxing", "emera-a"] },
    },
    blocks: [
      {
        type: "videos",
        title: "Ads we’ve made for clients",
        intro: "Three ads for food and drink brands in East Africa. Everything else on this page is spec work, and it says so.",
        items: [
          { slug: "fillows-cereal", title: "Fillows, for Bidco Africa", text: "A midnight snack, given away by the crunch." },
          { slug: "shapies-cereal", title: "Shapies, for Bidco Africa", text: "Late for school, until breakfast wins." },
          { slug: "ribena-smarty-berry", title: "Ribena East Africa", text: "A blackcurrant character who talks straight to camera." },
        ],
      },
      {
        type: "points",
        title: "Angles that tend to work",
        items: [
          { title: "Why it exists", text: "The problem the product was made to fix, in one sentence. DTC brands win on a point of view, so say it early." },
          { title: "Against the usual choice", text: "Yours beside the supermarket version or the big-name one. Specific, fair, and only on the points where yours really wins." },
          { title: "The first week", text: "Unboxing, first use, where it lives in the house. It answers “what’s it like to own?” better than a feature list." },
          { title: "The starter kit", text: "Bundles and first-order offers shown as what actually arrives, laid out on a table." },
          { title: "The refill", text: "For products people reorder, show the second box as well as the first. It’s the part most ads leave out, and it’s why the first order is worth winning." },
        ],
      },
      {
        type: "points",
        title: "The rules we work to",
        items: [
          { title: "Reviews are real or absent", text: "Star ratings, review counts and customer quotes appear only if they’re yours and current. A generated presenter never plays a customer." },
          { title: "The founder is real or absent", text: "If you want your founder in an ad, send footage and we’ll cut it in. We don’t generate a stand-in and call them the founder." },
          { title: "Press and badges", text: "“As seen in” and award logos appear only if they’re true, and we’ll ask for the source." },
          { title: "Offers that exist", text: "Discounts, bundles and deadlines in an ad match what’s on your site on the day it runs." },
          { title: "Claims by category", text: "Skincare and supplements have rules of their own. We’ve written those up on separate pages." },
        ],
      },
      {
        type: "split",
        title: "What we’d judge the ads on",
        paras: [
          "For a DTC brand, an ad isn’t good because it gets cheap clicks. It’s good if it brings in new customers at a cost your margins can carry. So we agree the number before the test. We’d suggest the cost of a new customer, read alongside the value of the first order.",
          "Every file is named by angle, hook and format, and the names carry into your ad account. You can see which reason to buy is doing the work, not just which video.",
        ],
        still: "bag-unboxing-6",
        caption: "From a spec unboxing for a handbag.",
      },
      {
        type: "frames",
        title: "One of the ads, frame by frame",
        intro: "A spec ad for a watch brand: the box, the first look, the watch on the wrist. Fifteen seconds that show what arrives and how it looks worn.",
        slug: "emera-a",
      },
      {
        type: "videos",
        title: "One product, three ways to open",
        intro: "The same watch, the same length, three different first seconds. This is what a test is made of.",
        items: [
          { slug: "emera-a", title: "The reaction", text: "Opens on her face, watch already in hand." },
          { slug: "emera-b", title: "The doorstep", text: "Opens on a sealed delivery box." },
          { slug: "emera-c", title: "The pitch", text: "Opens on him talking straight to camera." },
        ],
      },
      {
        type: "gallery",
        title: "Food and drink, from our spec work",
        intro: "Two more of our spec ads, both built around the pack: a soda and a bag of sour gummies.",
        items: [
          { id: "vazu-can-3", caption: "Drinks: the can as the hero." },
          { id: "fizzbears-b-6", caption: "Candy: motion that ends on the pack." },
          { id: "vazu-can-4", caption: "Drinks: a macro on the can top." },
        ],
      },
      { type: "related", title: "Categories with rules of their own", items: ["skincare", "supplements", "health-fitness"] },
      {
        type: "steps",
        title: "How a sprint would run",
        items: [
          { title: "Brief", text: "A 30-minute call: the product, who buys it, your margins and target cost per customer, and what you’ve already tested.", when: "Day 1" },
          { title: "Angles and scripts", text: "Five angles and twenty scripts, drawn from your reviews, your best sellers and the ads competitors keep running. You approve or cut.", when: "Days 1–2" },
          { title: "Your photos", text: "Product and packaging from every side, plus your logo, fonts and colors.", when: "Day 2" },
          { title: "First ads, then the full set", text: "First ads within 72 hours of the brief, the rest on the next cycle, exported for every placement with a test plan.", when: "Days 3–6" },
        ],
      },
      PRICING,
      {
        type: "fit",
        title: "Who it’s for",
        yes: [
          "You make your own product and sell it through your own store",
          "Paid social is where most of your new customers come from",
          "Your best ad is tiring and nothing new has beaten it",
          "You know what a new customer is worth to you",
        ],
        no: [
          "You need real customers or creators on camera",
          "You sell mostly through retailers and don’t run paid social",
          "You want one brand film rather than ads to test",
        ],
      },
      {
        type: "faq",
        title: "Questions about DTC ads",
        items: [
          { q: "How is this different from hiring UGC creators?", a: "Creators give you a real person and the trust of their own audience, which we can’t. We give you speed and volume: twenty variations in days, no product to ship, no usage fees, and every line scripted to your claims. Some brands will want both." },
          { q: "Do we need to send you the product?", a: "No. Clear photos from every side are enough. If you have video of it in use, we can cut that in." },
          { q: "Can our founder be in the ads?", a: "Yes, with real footage you send. We don’t generate a stand-in." },
          { q: "Can you use our customer reviews?", a: "Yes, if they’re real and you have permission. They appear as on-screen quotes credited to the customer, not spoken by a generated presenter posing as them." },
          { q: "What would you judge the ads on?", a: "The cost of a new customer, in your own ad account, where you can see it. We agree the target before the test." },
          { q: "Do you run the campaigns too?", a: "On a sprint you run them with our test plan. On the retainer we run Meta, TikTok and YouTube campaigns in your accounts." },
        ],
      },
      { type: "related", items: ["ecommerce", "ai-ugc-ads", "performance-creative"] },
    ],
  },

  {
    slug: "subscription-apps",
    name: "Subscription apps",
    summary: "Ads that sell the first session and are honest about the trial, judged on subscribers rather than installs.",
    thumb: "blender-demo-2",
    meta: {
      title: "Video ads for subscription apps",
      description:
        "UGC-style video ads for subscription apps: built around the first session, clear about the trial and the price, and named so you can trace results from install to paid.",
    },
    hero: {
      title: "Video ads for subscription apps",
      lede: "A subscription app doesn’t need installs. It needs people who start a trial and stay. That changes what a good ad looks like: it shows the first session honestly, so the people who tap are the ones who’ll keep paying. We make those twenty at a time, with your real app on screen.",
      aside: PRICE,
      media: { pair: ["blender-demo", "outfit-try-on"] },
      caption: OTHER_SPEC,
    },
    blocks: [
      {
        type: "points",
        title: "Angles that tend to work",
        items: [
          { title: "The first session", text: "What the app does in its first two minutes, shown for real. It’s the truest preview of what someone is signing up for." },
          { title: "The thing it replaces", text: "The spreadsheet, the notes app, the three other subscriptions. Show the mess, then show yours." },
          { title: "One feature, ten seconds", text: "Pick the feature people stay for and show only that. Feature lists are for the store page." },
          { title: "The habit", text: "Where it sits in a day: a morning, a commute, a wind-down. People pay for apps they can picture using." },
          { title: "The honest trial", text: "Say what’s free, for how long, and what it costs after. It filters out the people who would have cancelled anyway." },
        ],
      },
      {
        type: "points",
        title: "The rules for subscription ads",
        items: [
          { title: "“Free” has to be true", text: "If the trial turns into a paid plan, the ad shouldn’t hide it. Misleading “free” claims are what get subscription apps into trouble with app stores and regulators." },
          { title: "Real screens only", text: "The interface in the ad is your interface, from screen recordings you send. We don’t generate screens or features." },
          { title: "Ratings that are real", text: "Star ratings, download counts and awards appear only if they’re true today, and we’ll ask for the source." },
          { title: "No invented users", text: "A generated presenter can walk through the app. It can’t say it’s been a subscriber for a year." },
        ],
      },
      {
        type: "split",
        title: "Why we care what happens after the install",
        paras: [
          "An ad can look like a winner on cost per install and still lose money, if the people it brings in never start a trial or cancel on day three. So every file in a sprint is named by angle, hook and format, and the names carry through to your ad account and your attribution tool.",
          "That way you can read each angle on the number that matters to you, whether that’s cost per trial, trial-to-paid or revenue per install, and the next batch is briefed from it.",
        ],
        still: "blender-demo-2",
        caption: "A presenter demo from our spec work. In an app ad, your screen recording takes the product’s place.",
      },
      {
        type: "gallery",
        title: "The formats we’d use",
        intro: "We haven’t published app spec ads yet. These structures are from our other spec work.",
        items: [
          { id: "blender-demo-3", caption: "A demo becomes the first session, walked through." },
          { id: "emera-c-1", caption: "To camera becomes one feature, explained." },
          { id: "emera-c-5", caption: "Hands only becomes the app in hand." },
          { id: "emera-a-2", caption: "A reaction becomes the moment the app does its trick." },
        ],
      },
      {
        type: "steps",
        title: "How a sprint would run",
        items: [
          { title: "Brief", text: "A 30-minute call: who subscribes, why they stay, what the trial includes and what you’ve already tested.", when: "Day 1" },
          { title: "Angles and scripts", text: "Five angles and twenty scripts for you to approve or cut.", when: "Days 1–2" },
          { title: "Your recordings", text: "You send screen recordings of the real app. We send a shot list so it takes you minutes, not a day.", when: "Day 2" },
          { title: "First ads, then the full set", text: "First ads within 72 hours of the brief, the rest on the next cycle, exported for every placement with a test plan.", when: "Days 3–6" },
        ],
      },
      PRICING,
      {
        type: "fit",
        title: "Who it’s for",
        yes: [
          "Your app is live, with a trial or a paywall you can describe plainly",
          "You already run app campaigns on Meta or TikTok",
          "You track beyond the install: trials, conversions or revenue",
          "You can record the real app on screen",
        ],
        no: ["The app isn’t live yet", "You want ads that hide the price", "You need real users on camera"],
      },
      {
        type: "faq",
        title: "Questions about subscription app ads",
        items: [
          { q: "Can you show our app in the ads?", a: "Yes, with screen recordings you send. The app on screen is always your real app." },
          { q: "iOS or Android?", a: "Both. You send recordings from each, and we cut versions for each store." },
          { q: "What would you judge the ads on?", a: "Cost per trial at first, then trial-to-paid once the data is in. We agree the number before the test." },
          { q: "Do you run app campaigns?", a: "On a sprint, your team runs them with our test plan. If you want us to run paid social as well, that’s the retainer, and we’d talk through your tracking set-up first." },
        ],
      },
      { type: "related", items: ["edtech", "health-fitness", "creative-testing-sprint"] },
    ],
  },

  {
    slug: "dating-apps",
    name: "Dating apps",
    summary: "Ads made for adults and split by audience, with no generated people passed off as members.",
    thumb: "outfit-try-on-5",
    meta: {
      title: "Video ads for dating apps",
      description:
        "UGC-style video ads for dating apps: split by audience and city, scripted to the rules platforms set for dating, and never showing generated people as real members.",
    },
    hero: {
      title: "Video ads for dating apps",
      lede: "Dating apps sell a feeling, to two audiences at once, in one city at a time. An ad that brings in the wrong mix can make the app worse for everyone already on it. We make ads in batches of twenty, split by who you need more of, and written to the rules platforms set for dating.",
      aside: PRICE,
      media: { pair: ["outfit-try-on", "bag-unboxing"] },
      caption: OTHER_SPEC,
    },
    blocks: [
      {
        type: "points",
        title: "Angles that tend to work",
        items: [
          { title: "What makes yours different", text: "Every app promises better matches. Show the one thing yours does that the big ones don’t, in the first three seconds." },
          { title: "The first conversation", text: "The moment after a match is where people give up. Show how your app gets it started." },
          { title: "The date, not the swipe", text: "People download dating apps to get off them. Coffee, a walk, a table for two say more than a feed of profiles." },
          { title: "Safety, said plainly", text: "Verification, reporting, who can message whom. For a lot of your audience, this is the deciding feature." },
          { title: "Made for the city", text: "Dating is local. Scripts that name the city, the neighborhood or the kind of night out sound like they’re talking to someone." },
        ],
      },
      {
        type: "points",
        title: "The rules for dating ads",
        items: [
          { title: "Approval comes first", text: "Meta only allows dating ads from advertisers it has approved, and other platforms have checks of their own. Get cleared before you book." },
          { title: "Adults only", text: "Dating ads have to be targeted at over-18s, and nobody in them should look younger." },
          { title: "Nothing suggestive", text: "Ads built on sexual content get rejected, and they bring in people who leave. We write for what the app is actually for." },
          { title: "No generated members", text: "The people in our ads are AI presenters talking about the app. They are never shown as profiles you could match with." },
          { title: "No promised matches", text: "“Meet someone tonight” is a promise the app can’t keep for everyone. We describe how it works instead." },
        ],
      },
      {
        type: "split",
        title: "Two audiences, two sets of ads",
        paras: [
          "Most dating apps need more of one group than another in any given city, and the same ad rarely works for both. So we split the sprint: some angles for each audience, tested separately.",
          "The files are named by audience, angle and city, so your team can see who each ad brought in, not just how many installs it got.",
        ],
        still: "outfit-try-on-5",
        caption: "A presenter from our spec work. Dating ads use the same to-camera and selfie formats.",
      },
      {
        type: "gallery",
        title: "The formats we’d use",
        intro: "We haven’t published dating spec ads yet. These structures are from our other spec work.",
        items: [
          { id: "emera-c-1", caption: "To camera becomes a presenter explaining how the app works." },
          { id: "outfit-try-on-4", caption: "A try-on becomes getting ready for the date." },
          { id: "bag-unboxing-2", caption: "Selfie-style becomes a quick, friendly walkthrough." },
        ],
      },
      {
        type: "steps",
        title: "How a sprint would run",
        items: [
          { title: "Brief", text: "A 30-minute call: who the app is for, which cities, who you need more of, and what the platforms have cleared you to run.", when: "Day 1" },
          { title: "Angles and scripts", text: "Angles for each audience, twenty scripts in total, for you to approve or cut.", when: "Days 1–2" },
          { title: "Your recordings", text: "Screen recordings of the real app, made with demo profiles rather than real members.", when: "Day 2" },
          { title: "First ads, then the full set", text: "First ads within 72 hours of the brief, the rest on the next cycle, with a test plan that keeps audiences apart.", when: "Days 3–6" },
        ],
      },
      PRICING,
      {
        type: "fit",
        title: "Who it’s for",
        yes: [
          "Your app is live and approved to advertise on the platforms you use",
          "You know which audience you need more of, and where",
          "You can record the app with demo profiles",
          "You want new angles every month, not one campaign a year",
        ],
        no: ["You aren’t approved for dating ads yet", "You want suggestive ads", "You want generated people shown as members"],
      },
      {
        type: "faq",
        title: "Questions about dating app ads",
        items: [
          { q: "Are the people in the ads real users?", a: "No. They’re AI presenters, and the ads never present them as members of your app." },
          { q: "Can you show real profiles?", a: "No. We use recordings made with demo profiles you set up, so no real member appears in an ad." },
          { q: "Do you handle platform approval for dating advertisers?", a: "No. That’s an application you make to each platform. Once you’re cleared, we write to its rules." },
          { q: "Can you make different ads for different audiences?", a: "Yes. Most sprints would be split that way, and the test plan keeps the results apart." },
          { q: "What would you judge the ads on?", a: "Cost per registration, split by audience and city, or whichever later step you track. We agree it before the test." },
        ],
      },
      { type: "related", items: ["subscription-apps", "tiktok-ads", "ai-presenters"] },
    ],
  },

  {
    slug: "mobile-games",
    name: "Mobile games",
    summary: "Creator-style ads cut around your real gameplay, in the volume game testing needs.",
    thumb: "emera-b-2",
    meta: {
      title: "Video ads for mobile games",
      description:
        "UGC-style video ads for mobile games: AI presenters reacting to your real gameplay footage, made in batches of twenty to eighty, with no fake mechanics.",
    },
    hero: {
      title: "Video ads for mobile games",
      lede: "Games burn through ads faster than any other category, and the ones that work often look nothing like a trailer: a person, a phone, a reaction. We make creator-style ads around your real gameplay footage, in batches of twenty to eighty, so your team always has something new to test.",
      aside: PRICE,
      media: { pair: ["emera-b", "bike-unboxing"] },
      caption: OTHER_SPEC,
    },
    blocks: [
      {
        type: "points",
        title: "Angles that tend to work",
        items: [
          { title: "The reaction", text: "A presenter playing, failing, shouting at the screen. It’s a format players already watch for fun." },
          { title: "The near miss", text: "A level lost by one move. It makes people want to try it themselves, as long as the level is really in the game." },
          { title: "The challenge", text: "“Bet you can’t clear this.” A dare, then real footage of the level." },
          { title: "Just the satisfying part", text: "Ten seconds of the loop that feels good: the merge, the clear, the upgrade. No talking." },
          { title: "The first minute", text: "What a new player actually does first. It sets honest expectations for the people who install." },
        ],
      },
      {
        type: "points",
        title: "The rules for game ads",
        items: [
          { title: "The gameplay is real", text: "Every second of gameplay in our ads is captured from your game. Regulators have banned game ads for showing mechanics the game doesn’t have." },
          { title: "No fake interface", text: "Buttons, scores and rewards on screen are your real ones. We don’t generate game screens." },
          { title: "Mind the age rating", text: "Ads follow the game’s rating, and games with real-money or casino-style play need platform approval before they can advertise." },
          { title: "Presenters aren’t players", text: "The person reacting is AI-generated. The ad doesn’t claim they’re a real streamer or a real player." },
        ],
      },
      {
        type: "split",
        title: "Made for the volume games need",
        paras: [
          "Game teams often test dozens of ads a week, and most of them fail within a day or two. That’s normal. What matters is how quickly the next batch arrives and whether it’s different enough to teach you something.",
          "A sprint crosses hooks with formats, so twenty ads is five ideas made four ways, and eighty is twenty ideas. Every file is named so your team can read results by idea, not by upload.",
        ],
        still: "emera-b-2",
        caption: "A reaction shot from our spec work. In a game ad, your gameplay plays beside it.",
      },
      {
        type: "gallery",
        title: "The formats we’d use",
        intro: "We haven’t published game spec ads yet. These structures are from our other spec work.",
        items: [
          { id: "emera-b-1", caption: "A surprised reaction becomes the near miss." },
          { id: "emera-c-1", caption: "To camera becomes the challenge." },
          { id: "gold-cuff-2", caption: "Selfie-style becomes a creator holding up the game." },
          { id: "emera-c-6", caption: "Hands only becomes thumbs on the screen." },
        ],
      },
      {
        type: "steps",
        title: "How a sprint would run",
        items: [
          { title: "Brief", text: "A 30-minute call: the game, the players you want, what your best ad looks like now and what’s stopped working.", when: "Day 1" },
          { title: "Hooks and scripts", text: "Hooks crossed with formats, for you to approve or cut.", when: "Days 1–2" },
          { title: "Your footage", text: "You send gameplay captures. We send a list of the moments we need: wins, fails, the first minute.", when: "Day 2" },
          { title: "First ads, then the full set", text: "First ads within 72 hours of the brief, the rest on the following cycles, cut for every placement.", when: "From day 3" },
        ],
      },
      PRICING,
      {
        type: "fit",
        title: "Who it’s for",
        yes: [
          "The game is live or in soft launch, and you can send gameplay captures",
          "You already run user acquisition and test creative every week",
          "You want creator-style ads without managing creators",
          "You read results by idea, not just by ad",
        ],
        no: [
          "You want gameplay that isn’t in the game",
          "The game can’t be captured yet",
          "You need playable ads (we make video only)",
        ],
      },
      {
        type: "faq",
        title: "Questions about game ads",
        items: [
          { q: "Do you make playable ads?", a: "No. We make video ads: vertical, portrait and square, with widescreen on request." },
          { q: "Can you use fake gameplay to test a concept?", a: "No. If a mechanic isn’t in the game, it isn’t in the ad. Real footage can be cut in a lot of different ways." },
          { q: "Which sprint size suits a game?", a: "It depends how fast you test. Twenty ads is five ideas made four ways. If you test every week, the forty or eighty will last you longer." },
          { q: "What would you judge the ads on?", a: "Your numbers: installs per thousand impressions and cost per install first, then retention or return on ad spend once it’s in. We agree it before the test." },
          { q: "Can the presenter look like a real streamer?", a: "No. We don’t recreate real people, and the ads don’t claim the presenter is one." },
        ],
      },
      { type: "related", items: ["subscription-apps", "tiktok-ads", "youtube-ads"] },
    ],
  },

  {
    slug: "health-fitness",
    name: "Health & fitness",
    inText: "health and fitness",
    summary: "First-session ads for fitness apps, equipment and wellness brands, with no before-and-after promises.",
    thumb: "bike-unboxing-3",
    meta: {
      title: "Video ads for health and fitness brands",
      description:
        "Video ads for fitness apps, equipment and wellness products: unboxing, set-up and first-session ads, scripted around platform rules on body image, before-and-after images and health claims.",
    },
    hero: {
      title: "Video ads for health and fitness",
      lede: "Whether it’s an app, a bike or a blender, the question in the viewer’s head is the same: “will I actually use it?” The ads that answer it show the first session, not a six-month result. We make them in batches of twenty, and some of our spec work is already in this sector.",
      aside: PRICE,
      media: { pair: ["bike-unboxing", "blender-demo"] },
    },
    blocks: [
      {
        type: "frames",
        title: "One of the ads, frame by frame",
        intro: "A spec ad for an exercise bike: sealed box, unpacking, the assembled bike, the first ride. Fifteen seconds that answer “is it hard to set up?” without saying it.",
        slug: "bike-unboxing",
      },
      {
        type: "points",
        title: "Angles that tend to work",
        items: [
          { title: "The first session", text: "The first workout, the first meal logged, the first ride. The moment of use, not the result months later." },
          { title: "Getting started is easy", text: "Box to first use in seconds, or sign-up to first workout. Starting is the objection nobody says out loud." },
          { title: "It fits your day", text: "Before work, after a run, last thing at night. Show the slot it takes, in a real room." },
          { title: "The streak", text: "For apps, the habit is the product. Day one, day three, day ten, shown on the real screen." },
          { title: "What it replaces", text: "The gym you don’t go to, the plan you gave up on. Said kindly, and never as a dig at the viewer." },
        ],
      },
      {
        type: "points",
        title: "The rules for health and fitness ads",
        items: [
          { title: "No before-and-after", text: "Side-by-side body transformations are restricted on the major platforms and easy to fake with AI, which is exactly why we don’t make them." },
          { title: "Nothing about the viewer’s body", text: "“Tired of your belly?” gets ads rejected on Meta and makes people feel worse. We talk about the product." },
          { title: "Weight loss is restricted", text: "Platforms limit weight-loss ads to adults and reject dramatic claims. We check an angle before we script it." },
          { title: "Health claims need proof", text: "An app isn’t a medical device unless it has been cleared as one. Scripts describe what it does, not what it treats." },
          { title: "Presenters don’t claim results", text: "A generated presenter can do the workout. It can’t say it lost ten kilos." },
        ],
      },
      {
        type: "videos",
        title: "Two examples from our spec work",
        items: [
          { slug: "bike-unboxing", title: "Unboxing to first ride", text: "Answers the assembly question before it’s asked." },
          { slug: "blender-demo", title: "Presenter demo", text: "A kitchen appliance shown doing its job, explained as it goes." },
        ],
      },
      {
        type: "split",
        title: "For apps, the screen is yours",
        paras: [
          "If you’re advertising an app, the workouts, plans and progress screens in the ad are your real ones, from recordings you send. We don’t generate interface or results.",
          "If you’re advertising a product, we work from photos of the real thing and check every frame against them.",
        ],
        still: "bike-unboxing-5",
        caption: "From a spec ad for an exercise bike.",
      },
      {
        type: "steps",
        title: "How a sprint would run",
        items: [
          { title: "Brief", text: "A 30-minute call: the product or app, who buys it, the claims you can make and what you’ve already tried.", when: "Day 1" },
          { title: "Angles and scripts", text: "Five angles and twenty scripts for you to approve or cut.", when: "Days 1–2" },
          { title: "Your photos or recordings", text: "Product photos from every side, or screen recordings of the app.", when: "Day 2" },
          { title: "First ads, then the full set", text: "First ads within 72 hours of the brief, the rest on the next cycle, with a test plan.", when: "Days 3–6" },
        ],
      },
      PRICING,
      {
        type: "fit",
        title: "Who it’s for",
        yes: [
          "You sell a fitness app, equipment or a wellness product, and already run paid social",
          "You can describe what it does without promising a result",
          "You can send product photos or app recordings",
          "You want new ads to test every month",
        ],
        no: [
          "You want before-and-after transformations",
          "You want weight-loss claims you can’t back up",
          "You need real customers on camera",
        ],
      },
      {
        type: "faq",
        title: "Questions about health and fitness ads",
        items: [
          { q: "Can you show body transformations?", a: "No. Before-and-after body images are restricted on the major platforms and easy to fake with AI, which is exactly why we don’t make them. We show the product in use." },
          { q: "Do you make ads for fitness apps as well as products?", a: "Yes. For apps we cut in screen recordings you send. For products we work from photos." },
          { q: "Can you show real customer results?", a: "Only if they’re real, typical and you have permission, shown as credited quotes or figures. A generated presenter never plays the customer." },
          { q: "How long are the ads?", a: "Up to fifteen seconds in the standard sprint, and up to 30 or 60 in the larger ones, which helps when the set-up is the story." },
          { q: "What would you judge the ads on?", a: "Cost per purchase for products, cost per trial or subscriber for apps. We agree it before the test." },
        ],
      },
      { type: "related", items: ["supplements", "subscription-apps", "ai-ugc-ads"] },
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
