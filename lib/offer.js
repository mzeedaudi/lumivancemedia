// What Lumivance sells and on what terms. The structure follows Admiral
// Media's published model: AI creative priced per batch (20/40/80 ads), and a
// retainer quoted only after an account review. The prices are Lumivance's
// own, 25% below Admiral's figures. Every price on the site is built from this
// file, so change figures here only.

export const usd = (n) => `$${n.toLocaleString("en-US")}`;

export const sprint = {
  name: "Creative Testing Sprint",
  href: "/services/creative-testing-sprint",
  tiers: [
    {
      name: "Sprint 20",
      ads: 20,
      maxLength: "15 seconds",
      price: 7500,
      who: "Brands starting out. Five angles, each made four ways.",
    },
    {
      name: "Sprint 40",
      ads: 40,
      maxLength: "30 seconds",
      price: 12000,
      who: "Brands spending enough to judge forty ads within a month.",
    },
    {
      name: "Sprint 80",
      ads: 80,
      maxLength: "60 seconds",
      price: 21750,
      who: "Brands testing several products, offers or markets at once.",
    },
  ],
  included: [
    "Research into your reviews, best sellers and the ads competitors keep running",
    "Angles, hooks and scripts, planned as one test and approved by you",
    "AI presenters, scenes and product shots, checked against your real product",
    "Edit, captions, music and sound",
    "Exports in 9:16, 4:5 and 1:1 for Meta, TikTok and YouTube",
    "A test plan: what runs against what, and the number each ad is judged on",
  ],
  terms: [
    "First ads 72 hours after the brief",
    "Billed per batch, with no setup fee",
    "Order the next batch when you’re ready, or stop",
  ],
};

// Sentences that quote the prices, so copy elsewhere never drifts from the table.
const [small, medium, large] = sprint.tiers;
export const priceCopy = {
  from: `${usd(small.price)} for twenty ads`,
  all: `${usd(small.price)} for twenty ads, ${usd(medium.price)} for forty or ${usd(large.price)} for eighty`,
};

export const retainer = {
  name: "Creative and performance retainer",
  href: "/services/performance-creative",
  price: "Quoted after we review your ad account",
  included: [
    "20 to 40 new ads every month, on 72-hour production cycles",
    "Meta, TikTok and YouTube campaigns run in your own ad accounts",
    "Winners iterated and tired ads retired, every week",
    "Weekly numbers against your target cost per purchase",
    "A test roadmap you can see at any time",
  ],
  terms: [
    "A flat monthly fee or a share of ad spend, agreed up front",
    "Ad spend goes to the platforms directly, never through us",
    "Month to month, with 30 days’ notice",
  ],
};

export const notIncluded = [
  "Ad spend. You pay Meta, TikTok and Google directly",
  "Real creators, influencers or paid talent",
  "Physical shoots and product photography",
  "Website, landing page and store changes",
];
