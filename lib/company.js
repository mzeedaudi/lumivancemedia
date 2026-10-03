// Content for the company pages: about, framework, how we use AI, FAQ, work.

export const about = {
  meta: {
    title: "About",
    description:
      "Lumivance is a small performance creative studio for skincare and wellness brands. Who runs it, the rules it works by, and what it isn’t.",
  },
  hero: {
    title: ["A small studio", "with one job."],
    lede: "Lumivance makes video ads for skincare and wellness brands and judges them by one number: what they cost per purchase. We’re new, so we’d rather show you exactly how we work than borrow a track record we haven’t built yet.",
    media: { stills: ["emera-a-6", "lookbook-2"] },
  },
  principles: [
    { title: "Judge ads by what they sell", text: "Views and likes are clues. Cost per purchase is the verdict." },
    { title: "Label spec work as spec", text: "Everything on this site that wasn’t made for a paying client says so, right next to it." },
    { title: "Never fake a customer", text: "Our AI presenters demonstrate and explain. They never claim to have used your product." },
    { title: "Your accounts, your data", text: "We work inside ad accounts you own. Leave whenever you like and take everything with you." },
    { title: "Honest weeks, including bad ones", text: "Weekly numbers in plain language, whether they went up or down." },
  ],
  not: [
    { title: "Not a creator marketplace", text: "We don’t source or manage real creators. Our presenters are generated." },
    { title: "Not an influencer agency", text: "No seeding, no gifting, no affiliate programs." },
    { title: "Not a brand or web agency", text: "We don’t do logos, packaging or websites. We make ads and run them." },
    { title: "Not a promise of results", text: "Nobody honest can promise a winning ad. We promise a fair test and a straight read of it." },
  ],
};

export const framework = {
  meta: {
    title: "Our testing framework",
    description:
      "The Lumivance testing framework: research, angles, a test matrix, production on 72-hour cycles, a fair test and a decision for every ad — then round again.",
  },
  hero: {
    title: ["Every ad is a question.", "This is how we ask it."],
    lede: "The loop behind every sprint and every month on retainer: research, angles, a matrix, production on 72-hour cycles, a fair test, and a decision for every ad. Then round again, briefed from what the last round showed.",
    media: { stills: ["emera-b-3", "emera-c-3"] },
  },
  blocks: [
    {
      type: "steps",
      label: "The loop",
      title: "Seven steps, then round again.",
      items: [
        { title: "Research", text: "Your reviews, your best sellers, the ads competitors keep paying to run, and your own past results.", when: "Day 1" },
        { title: "Angles", text: "Four or five reasons to buy, each one specific enough to be wrong.", when: "Days 1–2" },
        { title: "Matrix", text: "Angles crossed with executions, one ad per cell, so every result says something.", when: "Day 2" },
        { title: "Produce", text: "Scripts approved, ads made and checked, on 72-hour cycles.", when: "Days 2–6" },
        { title: "Test", text: "Every ad gets a fair budget in your account, against your current best.", when: "Week 2" },
        { title: "Read", text: "The numbers in order: hook, hold, click, purchase.", when: "Weeks 2–3" },
        { title: "Decide", text: "Cut, iterate or scale, with the reason written down.", when: "Week 3" },
      ],
    },
    {
      type: "matrix",
      label: "The matrix",
      title: "How twenty ads are laid out.",
      intro: "Rows are angles, columns are executions. A winning row tells you what to say; a winning column tells you how to make it.",
    },
    {
      type: "points",
      label: "The numbers",
      title: "What we read, in order, and what we change.",
      items: [
        { title: "Hook rate", text: "Did they stop? If it’s low, the opener is the problem. New first two seconds." },
        { title: "Hold rate", text: "Did they stay? If it’s low, the middle drags. Tighter edit, product on screen sooner." },
        { title: "Click-through rate", text: "Did they want more? If it’s low, the reason to click isn’t there. Sharper offer or ending." },
        { title: "Cost per purchase", text: "Did they buy? If clicks are high and purchases low, look past the ad: the page, the price, the offer." },
      ],
    },
    {
      type: "points",
      label: "Decision rules",
      title: "Agreed before the test, not after.",
      items: [
        { title: "When to judge", text: "Each ad is judged once it has spent a set multiple of your target cost per purchase, agreed up front." },
        { title: "Cut", text: "Weak on early signals with no sign of recovering: stopped, and the reason written down." },
        { title: "Iterate", text: "A strong hook with weak conversion: keep the opener, change one thing." },
        { title: "Scale", text: "At or under your target cost per purchase: more budget, raised in steps." },
      ],
    },
    { type: "related", label: "Related", items: ["creative-testing-guide", "creative-testing-sprint", "performance-creative"] },
  ],
};

export const ai = {
  meta: {
    title: "How we use AI",
    description:
      "How Lumivance uses generative AI: what is generated, what isn’t, the lines we don’t cross, labels and rights, plus a plain fact sheet about the studio.",
  },
  hero: {
    title: ["How we use AI,", "and where we stop."],
    lede: "Our ads are made with generative AI. That’s what makes twenty ads in 72 hours possible. Here’s what’s generated, what isn’t, and the lines we don’t cross. It doubles as a plain fact sheet about Lumivance, for people and for AI assistants.",
    media: { stills: ["emera-a-1", "vazu-can-1"] },
  },
  blocks: [
    {
      type: "points",
      label: "Made how",
      title: "What’s generated, and what isn’t.",
      items: [
        { title: "Generated: presenters, voices and sets", text: "The people, voices and places in our UGC-style ads are AI-generated." },
        { title: "Generated from your references: the product", text: "Product shots are built from photos of your real product and checked against them, frame by frame." },
        { title: "Written by people: scripts and claims", text: "Every script is written by us from the claims you approve. Nothing is improvised." },
        { title: "Decided by people: everything else", text: "Which ads get made, which get kept and what gets tested next are human decisions." },
      ],
    },
    {
      type: "points",
      label: "Lines",
      title: "The lines we don’t cross.",
      items: [
        { title: "No fake customers", text: "An AI presenter never claims to have used your product or got results from it." },
        { title: "No real people without permission", text: "We don’t recreate anyone’s face or voice without their written consent, and we don’t make celebrity lookalikes." },
        { title: "No invented product", text: "The product on screen matches the one in the box: shape, color, label and what it does." },
        { title: "No claims you can’t support", text: "If you can’t back it up, we don’t script it." },
      ],
    },
    {
      type: "points",
      label: "Labels and rights",
      title: "Labels, usage and rights.",
      items: [
        { title: "Platform labels", text: "We follow Meta’s and TikTok’s current rules on labeling AI-generated content and tell you which ads need a label before they go live." },
        { title: "Usage", text: "Run every ad we deliver anywhere, for as long as you like, with no usage fees." },
        { title: "Rights", text: "We assign you whatever rights we hold in the ads we make for you. Copyright in AI-generated material is still unsettled law, so we don’t claim more than that." },
        { title: "Your files", text: "We generate with commercial AI tools. If any of your assets can’t be uploaded to third-party services, tell us and we’ll work around it." },
      ],
    },
    {
      type: "specs",
      label: "Fact sheet",
      title: "Lumivance in brief.",
      rows: [
        ["Name", "Lumivance Media"],
        ["What we do", "Performance creative: UGC-style and product-led video ads made with AI, and the paid social media buying behind them."],
        ["Who for", "Direct-to-consumer brands, mainly in skincare, beauty, supplements and wellness."],
        ["Services", "Creative Testing Sprint; creative + performance retainer; Meta, TikTok and YouTube ads."],
        ["Prices", "Sprints from $10,000 for twenty ads. Retainers quoted after an account review."],
        ["Where", "Remote, working worldwide."],
        ["Track record", "A new studio. No client results are published yet; all work shown is spec work and labeled as such."],
        ["Not", "A creator marketplace, an influencer agency or a web agency."],
        ["Contact", "hello@lumivancemedia.com"],
      ],
    },
    { type: "related", label: "Related", items: ["ai-presenters", "ai-ugc-ads", "about"] },
  ],
};

// FAQ, grouped. The homepage shows the entries marked `home`.
export const faqGroups = [
  {
    group: "The work",
    items: [
      { home: true, q: "Will AI ads look fake?", a: "Some generated footage does. Ours goes through selection and editing, and anything with the usual tells (wrong hands, warped text on packs, faces that drift) is thrown out. A person checks every ad before you see it." },
      { home: true, q: "Are the people in your ads real?", a: "No. Presenters, voices and sets are AI-generated. They demonstrate and explain your product. They never pose as customers or claim results." },
      { q: "What formats do you deliver?", a: "Every ad in 9:16, 4:5 and 1:1, with 16:9 for YouTube on request. Captions are burned in. Our delivery specs page has the details." },
      { q: "Do you work outside skincare and wellness?", a: "Yes. They’re our focus, not our limit. If you sell a physical product online, the sprint works the same way." },
    ],
  },
  {
    group: "Working together",
    items: [
      { q: "What do you need from us?", a: "Photos of the product from every side, your logo and fonts, the claims you’re allowed to make and, if you have it, a look at your current ads and what they cost per purchase." },
      { home: true, q: "Who runs the ads?", a: "On a sprint, you can run them with our test plan, or we can set the test up in your account. On the retainer, we run your Meta, TikTok and YouTube campaigns in your own accounts." },
      { q: "How fast is it?", a: "The first ads arrive 72 hours after the brief, and the rest of the batch on the next 72-hour cycle." },
      { q: "Do we see everything before it goes live?", a: "Yes. You approve every script before production and every finished ad before it runs." },
      { q: "Who owns the ads?", a: "You can use every ad we deliver, anywhere, for as long as you like, with no usage fees, and we assign you whatever rights we hold in them. Copyright law on AI-generated material is still settling, which is why we put it that way." },
    ],
  },
  {
    group: "Pricing",
    items: [
      { home: true, q: "What does a sprint cost?", a: "$10,000 for twenty ads, $16,000 for forty or $29,000 for eighty. Billed per batch, with no setup fee." },
      { q: "What does the retainer cost?", a: "It’s quoted after we review your ad account: a flat monthly fee or a share of ad spend, agreed before you commit." },
      { q: "Is ad spend included?", a: "No. You pay Meta, TikTok and Google directly. Spend never passes through us." },
      { q: "Can we cancel?", a: "Sprints are billed one batch at a time, so there’s nothing to cancel. The retainer runs month to month with 30 days’ notice." },
      { home: true, q: "What if the ads don’t work?", a: "We don’t promise results; nobody honest can. We promise a fair test, read straight, and a next batch briefed from what it showed." },
    ],
  },
];

// The Work page groups every spec ad by how it's made.
export const workGroups = [
  {
    label: "UGC-style",
    title: "Presenter-led.",
    intro: "Unboxings, try-ons, demos and straight-to-camera ads with AI-generated presenters.",
    slugs: ["emera-a", "emera-b", "emera-c", "bag-unboxing", "outfit-try-on", "gold-cuff", "blender-demo", "bike-unboxing"],
  },
  {
    label: "Product-led",
    title: "Nobody in the frame.",
    intro: "Product heroes, motion pieces and a lookbook, for when a presenter would get in the way.",
    slugs: ["vazu-can", "lookbook", "fizzbears-a", "fizzbears-b"],
  },
];
