// What Lumivance sells and on what terms. Structure and numbers follow Admiral
// Media's published model: AI creative priced per batch (20/40/80 ads), and a
// retainer quoted only after an account review. Change figures here only.

export const usd = (n) => `$${n.toLocaleString("en-US")}`;

export const sprint = {
  name: "Creative Testing Sprint",
  href: "/services/creative-testing-sprint",
  tiers: [
    {
      name: "Sprint 20",
      ads: 20,
      length: "Up to 15 seconds each",
      price: 10000,
      perAd: 500,
      note: "Where most brands should start: five angles, each made four ways.",
    },
    {
      name: "Sprint 40",
      ads: 40,
      length: "Up to 30 seconds each",
      price: 16000,
      perAd: 400,
      note: "For brands spending enough to judge forty ads within a month.",
    },
    {
      name: "Sprint 80",
      ads: 80,
      length: "Up to 60 seconds each",
      price: 29000,
      perAd: 363,
      note: "For several products, offers or markets tested at once.",
    },
  ],
  included: [
    "Research: your reviews, best sellers and the ads competitors keep running",
    "Angles, hooks and scripts, planned as one test and approved by you",
    "AI presenters, scenes and product shots, checked against your real product",
    "Edit, captions, music and sound",
    "Exports in 9:16, 4:5 and 1:1 for Meta, TikTok and YouTube",
    "A test plan: what runs against what, and the number each ad is judged on",
  ],
  terms: [
    "First ads 72 hours after the brief",
    "Billed per batch. No setup fee",
    "Order the next batch when you’re ready, or stop",
  ],
};

export const retainer = {
  name: "Creative + performance retainer",
  href: "/services/performance-creative",
  price: "Quoted after we review your ad account",
  included: [
    "20–40 new ads every month, on 72-hour production cycles",
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
  "Ad spend: you pay Meta, TikTok and Google directly",
  "Real creators, influencers or paid talent",
  "Physical shoots and product photography",
  "Website, landing page and store changes",
];
