// Case studies (/case-studies and /case-studies/[slug]).
//
// Every entry marked `placeholder: true` is invented, to show the layout until
// the real write-ups arrive. Placeholders appear locally and on Vercel
// previews, always labeled, and never on the live site (see LUMIVANCE_DRAFTS in
// next.config.mjs). To publish a real one: replace the client, numbers and
// text with the real ones, then delete `placeholder: true`.

const DRAFTS = Boolean(process.env.LUMIVANCE_DRAFTS);

// The way every engagement runs, used where a case study has no steps of its own.
const APPROACH = [
  { title: "Read the account", text: "Every ad that ran in the last ninety days, sorted by what each one cost per customer, not per click.", when: "Week 1" },
  { title: "Five angles, twenty ads", text: "Five reasons to buy, each made four ways, scripted to the sector’s rules and approved by the client before production.", when: "Week 1" },
  { title: "A clean test", text: "The twenty ads launched side by side with even budgets, so the result says which angle sells rather than which ad got lucky.", when: "Weeks 2–3" },
  { title: "Scale and re-brief", text: "Budget moved to the winners, the losers cut, and the next batch briefed from what the first one proved.", when: "Week 4 on" },
];

const all = [
  // EdTech
  {
    slug: "language-app-cost-per-paying-learner",
    placeholder: true,
    industry: "edtech",
    client: "A language-learning app",
    title: "How first-lesson ads cut a language app’s cost per paying learner by 38%",
    metric: { value: "−38%", label: "cost per paying learner" },
    photo: "edtech-a",
    channels: ["Meta", "TikTok"],
    services: ["Creative Testing Sprint", "Paid social"],
    timeline: "8 weeks",
    kpis: [
      { value: "−38%", label: "cost per paying learner" },
      { value: "+52%", label: "first lessons finished" },
      { value: "4 of 20", label: "ads moved to scale" },
    ],
    challenge: [
      "Installs were cheap and paying learners were not. The ads promised fluency, people downloaded expecting it in a week, and most never finished a first lesson.",
    ],
    solution: [
      "We replaced the promise with the product: twenty ads built around a single real lesson, opening on the exact phrase a learner gets stuck on, then showing it click.",
    ],
    result:
      "Fewer installs, more of them finished a lesson, and the cost of a paying learner fell by over a third. The winning angle, “the stuck moment”, now briefs every new batch.",
    creatives: ["emera-c", "blender-demo", "emera-a"],
  },
  {
    slug: "exam-prep-season-signups",
    placeholder: true,
    industry: "edtech",
    client: "An exam-prep platform",
    title: "Exam-season ads that brought an exam-prep platform 61% more sign-ups",
    metric: { value: "+61%", label: "sign-ups in exam season" },
    photo: "edtech-b",
    channels: ["Meta", "YouTube"],
    services: ["Creative Testing Sprint"],
    timeline: "6 weeks",
    kpis: [
      { value: "+61%", label: "sign-ups" },
      { value: "−22%", label: "cost per sign-up" },
      { value: "2", label: "audiences, students and parents" },
    ],
    challenge: ["One set of ads was trying to speak to students and the parents paying for them, and convincing neither."],
    solution: ["Two sets of ads: one for students, built around the deadline; one for parents, built around what they can see their child do."],
    result: "The parent ads became the cheaper source of paid sign-ups, which nobody had tested before.",
    creatives: ["emera-c", "emera-b"],
  },

  // FinTech
  {
    slug: "mobile-money-verified-accounts",
    placeholder: true,
    industry: "fintech",
    client: "A mobile money app",
    title: "How plain-language ads cut a mobile money app’s cost per verified account by 44%",
    metric: { value: "−44%", label: "cost per verified account" },
    photo: "fintech-b",
    channels: ["Meta", "TikTok"],
    services: ["Creative Testing Sprint", "Paid social"],
    timeline: "10 weeks",
    kpis: [
      { value: "−44%", label: "cost per verified account" },
      { value: "+31%", label: "identity checks completed" },
      { value: "0", label: "ads rejected for compliance" },
    ],
    challenge: ["Sign-ups were dropping out at the identity check. The ads never mentioned it, so it came as a surprise."],
    solution: ["Ads that showed the whole sign-up, ID check included, in under fifteen seconds, with every claim signed off by compliance first."],
    result: "Fewer people started, more finished, and a verified account cost less than half of what it had.",
    creatives: ["emera-a", "emera-c"],
  },
  {
    slug: "savings-app-first-deposits",
    placeholder: true,
    industry: "fintech",
    client: "A savings app",
    title: "A savings app that more than doubled first deposits from the same budget",
    metric: { value: "2.3x", label: "first deposits" },
    photo: "fintech-a",
    channels: ["Meta"],
    services: ["Creative Testing Sprint"],
    timeline: "6 weeks",
    kpis: [
      { value: "2.3x", label: "first deposits" },
      { value: "−19%", label: "cost per install" },
      { value: "1", label: "angle that did most of the work" },
    ],
    challenge: ["The account was optimised for installs, and the installs weren’t depositing."],
    solution: ["Twenty ads that each showed one real saving goal being set up, judged on first deposit, not on the install."],
    result: "The “one goal, set up on camera” angle more than doubled first deposits at the same spend.",
    creatives: ["emera-c", "blender-demo"],
  },

  // E-commerce
  {
    slug: "sneaker-store-new-customer-roas",
    placeholder: true,
    industry: "ecommerce",
    client: "An online sneaker store",
    title: "How unboxing ads took a sneaker store to 3.1x return on new customers",
    metric: { value: "3.1x", label: "ROAS on new customers" },
    photo: "ecommerce-a",
    channels: ["Meta", "TikTok"],
    services: ["Creative Testing Sprint", "Paid social"],
    timeline: "8 weeks",
    kpis: [
      { value: "3.1x", label: "ROAS on new customers" },
      { value: "+74%", label: "first orders" },
      { value: "12", label: "products tested in one sprint" },
    ],
    challenge: ["The store had over two hundred products and ads for six of them, all tired."],
    solution: ["An eighty-ad sprint across twelve products: unboxings, on-foot try-ons and close-ups, filmed the way a buyer films a parcel."],
    result: "Three products the store had never advertised became its best new-customer sellers.",
    creatives: ["bag-unboxing", "outfit-try-on", "lookbook"],
  },
  {
    slug: "home-goods-first-order-cost",
    placeholder: true,
    industry: "ecommerce",
    client: "A home goods store",
    title: "Demo ads that cut a home goods store’s cost per first order by 31%",
    metric: { value: "−31%", label: "cost per first order" },
    photo: "ecommerce-b",
    channels: ["Meta"],
    services: ["Creative Testing Sprint"],
    timeline: "5 weeks",
    kpis: [
      { value: "−31%", label: "cost per first order" },
      { value: "+18%", label: "average first order" },
      { value: "20", label: "ads tested" },
    ],
    challenge: ["Product photos on a white background were the only creative, and they’d stopped working."],
    solution: ["The products shown in use, in a real kitchen and living room, one reason to buy per ad."],
    result: "Demos beat packshots on every product tested, and first orders cost almost a third less.",
    creatives: ["blender-demo", "vazu-can"],
  },

  // DTC
  {
    slug: "skincare-brand-new-customer-cost",
    placeholder: true,
    industry: "dtc",
    client: "A skincare brand",
    title: "How routine ads cut a skincare brand’s cost per new customer by 36%",
    metric: { value: "−36%", label: "cost per new customer" },
    photo: "dtc-b",
    channels: ["Meta", "TikTok"],
    services: ["Creative Testing Sprint", "Paid social"],
    timeline: "8 weeks",
    kpis: [
      { value: "−36%", label: "cost per new customer" },
      { value: "+27%", label: "second orders in 60 days" },
      { value: "0", label: "before-and-after claims" },
    ],
    challenge: ["The best ad had run for five months. Every replacement made bigger claims and did worse."],
    solution: ["Twenty ads about the routine, not the result: where the bottle sits, how it feels, the second box arriving."],
    result: "The routine angle beat the old winner, and the customers it brought reordered more often.",
    creatives: ["emera-a", "gold-cuff"],
  },
  {
    slug: "snack-brand-first-orders",
    placeholder: true,
    industry: "dtc",
    client: "A snack brand",
    title: "A snack brand that grew first orders 48% with pack-first ads",
    metric: { value: "+48%", label: "first orders" },
    photo: "dtc-a",
    channels: ["TikTok"],
    services: ["Creative Testing Sprint"],
    timeline: "6 weeks",
    kpis: [
      { value: "+48%", label: "first orders" },
      { value: "−24%", label: "cost per first order" },
      { value: "40", label: "ads tested" },
    ],
    challenge: ["Lifestyle ads were getting watched and not bought. Viewers couldn’t tell what was for sale."],
    solution: ["Every ad opened on the pack. Forty variations of the first second, the rest kept the same."],
    result: "Pack-first openers won, and first orders grew by almost half on the same budget.",
    creatives: ["fizzbears-a", "vazu-can"],
  },

  // Subscription apps
  {
    slug: "meditation-app-trial-to-paid",
    placeholder: true,
    industry: "subscription-apps",
    client: "A meditation app",
    title: "How honest-trial ads lifted a meditation app’s trial-to-paid rate by 29%",
    metric: { value: "+29%", label: "trial-to-paid" },
    photo: "subscription-b",
    channels: ["Meta", "TikTok"],
    services: ["Creative Testing Sprint", "Paid social"],
    timeline: "10 weeks",
    kpis: [
      { value: "+29%", label: "trial-to-paid" },
      { value: "−21%", label: "cost per paying subscriber" },
      { value: "5", label: "angles tested" },
    ],
    challenge: ["Trials were cheap and most cancelled before the first charge."],
    solution: ["Ads that said what was free, for how long and what it cost after, and showed the first session as it really is."],
    result: "Fewer trials, more of them paid, and a paying subscriber cost a fifth less.",
    creatives: ["emera-c", "blender-demo"],
  },
  {
    slug: "productivity-app-cost-per-trial",
    placeholder: true,
    industry: "subscription-apps",
    client: "A productivity app",
    title: "Feature-first ads that cut a productivity app’s cost per trial by 41%",
    metric: { value: "−41%", label: "cost per trial" },
    photo: "subscription-a",
    channels: ["Meta", "YouTube"],
    services: ["Creative Testing Sprint"],
    timeline: "6 weeks",
    kpis: [
      { value: "−41%", label: "cost per trial" },
      { value: "+12%", label: "trial-to-paid" },
      { value: "1", label: "feature per ad" },
    ],
    challenge: ["The ads listed nine features. People couldn’t say what the app was for."],
    solution: ["One feature per ad, ten seconds each, chosen from what paying users actually use."],
    result: "Two features carried the account. The other seven moved to the store page.",
    creatives: ["blender-demo", "emera-c"],
  },

  // Dating apps
  {
    slug: "city-dating-app-subscribers",
    placeholder: true,
    industry: "dating-apps",
    client: "A city dating app",
    title: "How city-by-city ads cut a dating app’s cost per paying subscriber by 33%",
    metric: { value: "−33%", label: "cost per paying subscriber" },
    photo: "dating-a",
    channels: ["Meta", "TikTok"],
    services: ["Creative Testing Sprint", "Paid social"],
    timeline: "8 weeks",
    kpis: [
      { value: "−33%", label: "cost per paying subscriber" },
      { value: "+40%", label: "completed profiles" },
      { value: "4", label: "cities with their own ads" },
    ],
    challenge: ["One national set of ads was filling one city and starving three others."],
    solution: ["Separate ads for each city and audience, naming real neighbourhoods and real nights out."],
    result: "Every city filled more evenly, and paying subscribers cost a third less.",
    creatives: ["emera-a", "outfit-try-on"],
  },
  {
    slug: "faith-dating-app-registrations",
    placeholder: true,
    industry: "dating-apps",
    client: "A faith-based dating app",
    title: "A faith-based dating app that grew registrations from women by 57%",
    metric: { value: "+57%", label: "registrations from women" },
    photo: "dating-b",
    channels: ["Meta"],
    services: ["Creative Testing Sprint"],
    timeline: "6 weeks",
    kpis: [
      { value: "+57%", label: "registrations from women" },
      { value: "−18%", label: "cost per registration" },
      { value: "2", label: "audiences with their own ads" },
    ],
    challenge: ["Men outnumbered women four to one, and the ads were part of why."],
    solution: ["A separate set of ads for women, led by safety and values, with the app’s real verification shown on screen."],
    result: "Registrations from women grew by more than half, which made the app better for everyone in it.",
    creatives: ["emera-c", "emera-a"],
  },

  // Mobile games
  //
  // 8 Ball Pool: real work, real ads. The numbers below are examples until the
  // real ones are confirmed, so it stays a placeholder (preview-only) for now.
  // To publish: replace every number in kpis, metric and winners with the real
  // ones, check the learnings still match them, add the quote if Miniclip gives
  // one, delete `placeholder` and `placeholderNote`, and delete `pending` from
  // the three pool-* ads in lib/site.js.
  {
    slug: "8-ball-pool",
    featured: true,
    placeholder: true,
    placeholderNote: "Draft: real ads, example numbers. The figures are placeholders until the real ones are confirmed. Hidden on the live site.",
    industry: "mobile-games",
    client: "8 Ball Pool",
    publisher: "Miniclip",
    title: "How moment-led creative kept 8 Ball Pool’s ads fresh fifteen years in",
    subtitle: "Event hooks, pure gameplay and an anniversary film for one of mobile’s longest-running games, every shot of play taken from the game itself.",
    metric: { value: "+38%", label: "click-through rate" },
    photo: "pool-a",
    photo2: "pool-b",
    coverCaption: "From the fifteenth-anniversary film we made for 8 Ball Pool.",
    channels: ["Instagram", "TikTok", "YouTube"],
    services: ["Performance creative", "AI video production"],
    timeline: "Ongoing",
    kpis: [
      { value: "+38%", label: "click-through rate" },
      { value: "+24%", label: "installs per 1,000 views" },
      { value: "−19%", label: "cost per install" },
    ],
    challenge: ["After fifteen years, a pool table on its own no longer stops the scroll."],
    about: [
      "8 Ball Pool is Miniclip’s online pool game, played on phones around the world for fifteen years. Its regulars know it inside out, and new players have seen a hundred pool games before.",
      "So the ads have two jobs: give lapsed players a reason to come back this week, and show new ones how good a clean break feels, without ever showing play that isn’t in the game.",
    ],
    challenges: [
      { title: "A game everyone has seen", text: "After fifteen years, a pool table on its own no longer stops the scroll. The ads needed a reason to look again." },
      { title: "Moments don’t wait", text: "Football tournaments, holidays and the anniversary arrive on fixed dates. The ads had to be ready for that week, not the month after." },
      { title: "Real gameplay, every time", text: "Game ads are judged hard for showing play that isn’t in the game. Every shot had to be captured from 8 Ball Pool itself." },
      { title: "More, without losing the look", text: "More formats, lengths and placements, without drifting from the game’s own art and tone." },
    ],
    approach: [
      { title: "Find the moment", text: "Plan around what players already care about that week: the football, the season, the milestone.", when: "Every month" },
      { title: "Build on real play", text: "Capture the shots that feel good, the clean break and the long pot, straight from the game.", when: "Every batch" },
      { title: "AI builds the stage", text: "AI makes the world around the game, like the bars and players in the anniversary film. Never the gameplay.", when: "Where it fits" },
      { title: "Cut, test, keep winners", text: "Each idea cut in several lengths and openers, read on the numbers, and the winners re-cut for the next moment.", when: "Ongoing" },
    ],
    winnersIntro: "Three routes, one game. Each was cut for every placement and read on its own numbers.",
    winners: [
      { slug: "pool-football", title: "Football fever", text: "Event hook. Rides the football moment with a meme players already share. +41% click-through rate." },
      { slug: "pool-break", title: "Nothing feels better", text: "Gameplay hook. Nine seconds of clean breaks on four tables. −22% cost per install." },
      { slug: "pool-anniversary", title: "Fifteen years", text: "Brand film. Lifetime totals over scenes built with AI. +2.1x shares." },
    ],
    result: "Ads tied to a moment beat ads about the game in general, and the shortest gameplay cut became the cheapest source of installs.",
    learnings: [
      { title: "Moments beat messages", text: "An ad about something players care about this week does more than an ad about the game in general." },
      { title: "The game is the hook", text: "Nine seconds of a clean break did more than any line of copy. The most satisfying part of the game is the best ad for it." },
      { title: "AI builds the stage, not the game", text: "AI made a fifteen-year anniversary film possible without a shoot, while every second of play stayed real." },
    ],
    creatives: ["pool-football", "pool-break", "pool-anniversary"],
  },
  {
    slug: "puzzle-game-d7-roas",
    placeholder: true,
    industry: "mobile-games",
    client: "A puzzle game",
    title: "How weekly creative testing lifted a puzzle game’s D7 ROAS by 45%",
    metric: { value: "+45%", label: "D7 ROAS" },
    photo: "games-a",
    channels: ["Meta", "TikTok", "YouTube"],
    services: ["Creative Testing Sprint", "Paid social"],
    timeline: "12 weeks",
    kpis: [
      { value: "+45%", label: "D7 ROAS" },
      { value: "60+", label: "variations tested" },
      { value: "−28%", label: "cost per install" },
    ],
    challenge: ["One ad was carrying the game, and it was tiring by the week."],
    solution: ["A new batch every week from real gameplay: near misses, reactions and the satisfying ten seconds."],
    result: "Near-miss openers won, and the game stopped depending on a single ad.",
    creatives: ["fizzbears-a", "fizzbears-b"],
  },
  {
    slug: "merge-game-cpi",
    placeholder: true,
    industry: "mobile-games",
    client: "A casual merge game",
    title: "Reaction ads that cut a merge game’s cost per install by 28%",
    metric: { value: "−28%", label: "cost per install" },
    photo: "games-b",
    channels: ["TikTok"],
    services: ["Creative Testing Sprint"],
    timeline: "6 weeks",
    kpis: [
      { value: "−28%", label: "cost per install" },
      { value: "+19%", label: "day-1 retention" },
      { value: "40", label: "ads tested" },
    ],
    challenge: ["Gameplay-only ads were cheap to make and had stopped standing out."],
    solution: ["A presenter reacting to real levels, cut forty ways, with every second of gameplay captured from the game."],
    result: "Reactions beat gameplay-only ads on cost and on who stayed after day one.",
    creatives: ["fizzbears-b", "emera-a"],
  },

  // Health and fitness
  {
    slug: "home-workout-paying-members",
    placeholder: true,
    industry: "health-fitness",
    client: "A home workout app",
    title: "How first-workout ads cut a fitness app’s cost per paying member by 40%",
    metric: { value: "−40%", label: "cost per paying member" },
    photo: "health-a",
    channels: ["Meta", "TikTok"],
    services: ["Creative Testing Sprint", "Paid social"],
    timeline: "10 weeks",
    kpis: [
      { value: "−40%", label: "cost per paying member" },
      { value: "+35%", label: "trials that became paid" },
      { value: "0", label: "before-and-after images" },
    ],
    challenge: ["The ads sold a body in twelve weeks. Trials came in and left before day three."],
    solution: ["Ads that showed the first workout in a real living room: how long it takes, how hard it is, where the phone goes."],
    result: "More trials turned into paying members, and each one cost forty percent less.",
    creatives: ["bike-unboxing", "blender-demo"],
  },
  {
    slug: "fasting-app-january-trials",
    placeholder: true,
    industry: "health-fitness",
    client: "A fasting app",
    title: "A fasting app that grew January trials by 66% without raising its cost per trial",
    metric: { value: "+66%", label: "January trials" },
    photo: "health-b",
    channels: ["Meta"],
    services: ["Creative Testing Sprint"],
    timeline: "8 weeks",
    kpis: [
      { value: "+66%", label: "January trials" },
      { value: "0%", label: "rise in cost per trial" },
      { value: "80", label: "ads ready before New Year" },
    ],
    challenge: ["January auctions are the most expensive of the year, and last year’s ads went in tired."],
    solution: ["Eighty new ads made in December, so there was something fresh to rotate every week of January."],
    result: "Trials grew by two thirds in the busiest month while the cost of each one held still.",
    creatives: ["bike-unboxing", "emera-c"],
  },
];

// Featured case studies lead every list; the rest keep their order.
export const caseStudies = all
  .filter((c) => DRAFTS || !c.placeholder)
  .map((c) => ({ approach: APPROACH, ...c }))
  .sort((x, y) => Number(Boolean(y.featured)) - Number(Boolean(x.featured)));

export const casesFor = (industry) => caseStudies.filter((c) => c.industry === industry);

export const caseStudy = (slug) => caseStudies.find((c) => c.slug === slug);
