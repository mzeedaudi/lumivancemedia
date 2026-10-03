// Guides (/resources/[slug]) and the glossary. Written from general practice;
// no statistics are quoted that we can't source.

export const guides = [
  {
    slug: "creative-testing-guide",
    name: "How to test ad creative",
    summary: "Angles, matrices, fair budgets and the order to read the numbers in.",
    thumb: "emera-b-2",
    meta: {
      title: "How to test ad creative without wasting spend",
      description:
        "A practical guide to creative testing for DTC brands: start with angles, build a test matrix, give each ad a fair budget, read the numbers in order, then cut, iterate or scale.",
    },
    hero: {
      title: ["How to test ad creative", "without wasting spend."],
      lede: "Most ad tests change three things at once and teach nothing. This is the method we use for every sprint, written down so you can use it with or without us.",
      media: { stills: ["emera-b-2", "emera-c-1"] },
    },
    blocks: [
      {
        type: "prose",
        label: "The guide",
        sections: [
          {
            heading: "Start with angles, not ads",
            paras: [
              "An angle is a reason to buy: it saves time, it’s gentle on sensitive skin, it replaces three products. A hook is how an ad opens. An execution is how it’s made: a presenter talking, a demo, hands only, a product hero.",
              "Most tests change all three at once, so when an ad wins you can’t say why. Choose four or five angles first. Everything else in the test exists to find out which of them sells.",
            ],
          },
          {
            heading: "Build a matrix",
            paras: [
              "Cross your angles with three or four executions and make one ad per cell. Five angles by four executions is twenty ads.",
              "Read the results by row and by column. A row that wins tells you the reason to buy. A column that wins tells you the format your buyers respond to. Both are worth more than a single winning ad, because they tell you what to make next.",
            ],
            still: "emera-c-1",
            caption: "One execution from a twenty-ad matrix: presenter, to camera.",
          },
          {
            heading: "Give every ad a fair budget",
            paras: [
              "An ad needs enough spend to be judged. A common rule of thumb is to let each ad spend at least your target cost per purchase, often two or three times it, before deciding on purchases alone. Less than that and you’re reading noise.",
              "If your budget can’t carry twenty ads at that level, test fewer at once. Ten ads judged properly beat twenty judged on luck.",
            ],
          },
          {
            heading: "Read the numbers in order",
            paras: ["Every ad has to do four jobs in sequence, and each has its own number:"],
            list: [
              "Hook rate: did people stop? Three-second views divided by impressions.",
              "Hold rate: did they stay? How many of those viewers kept watching.",
              "Click-through rate: did they want more?",
              "Cost per purchase: did they buy?",
            ],
          },
          {
            heading: "Cut, iterate, scale",
            paras: [
              "An ad that fails early, on hook rate, can be cut cheaply. An ad that hooks people but doesn’t convert is worth iterating: keep the opener, change the offer or the ending. An ad that hits your target cost per purchase gets budget, raised in steps rather than overnight.",
            ],
          },
          {
            heading: "Name everything",
            paras: [
              "Name files and ads by angle, hook, execution, shape and version, for example ROUTINE_HOOK-B_DEMO_9x16_V03. Six weeks later your results will still make sense, and so will the next brief.",
            ],
          },
          {
            heading: "Refresh before fatigue",
            paras: [
              "Rising frequency, falling click-through and a creeping cost per purchase mean an ad is wearing out. Have the next batch ready before that happens, not after.",
            ],
          },
        ],
      },
      { type: "related", label: "Related", items: ["framework", "creative-testing-sprint", "glossary"] },
    ],
  },

  {
    slug: "delivery-specs",
    name: "Delivery specs",
    summary: "Exactly what arrives at the end of a sprint: shapes, sizes, files and names.",
    thumb: "outfit-try-on-1",
    meta: {
      title: "Lumivance delivery specs",
      description:
        "What every Lumivance ad is delivered as: 9:16, 4:5 and 1:1 exports, file formats, captions, safe zones, sound and naming.",
    },
    hero: {
      title: ["What arrives at the end", "of a sprint."],
      lede: "Every ad, in every shape your placements need, named so your results can be read. Platforms change their specs from time to time, so check theirs before you upload. These are ours.",
      media: { stills: ["outfit-try-on-1", "vazu-can-3"] },
    },
    blocks: [
      {
        type: "specs",
        label: "Shapes",
        title: "Every ad, in every shape.",
        rows: [
          ["Vertical 9:16", "1080 × 1920. Reels, Stories, TikTok and YouTube Shorts."],
          ["Portrait 4:5", "1080 × 1350. Facebook and Instagram feeds."],
          ["Square 1:1", "1080 × 1080. Feeds and placements that crop to square."],
          ["Widescreen 16:9", "1920 × 1080. YouTube in-stream, on request."],
        ],
      },
      {
        type: "specs",
        label: "Files",
        title: "Files, sound and captions.",
        rows: [
          ["Length", "Up to 15, 30 or 60 seconds, by sprint size."],
          ["Format", "MP4, H.264 video, AAC audio."],
          ["Captions", "Burned in, so the ad works with the sound off."],
          ["Safe zones", "Text, logos and faces kept out of the top and bottom of vertical frames, where platform buttons and captions sit."],
          ["Sound", "Mixed for sound on. Music cleared for use in ads."],
          ["Names", "ANGLE_HOOK_EXECUTION_SHAPE_VERSION, for example ROUTINE_HOOK-B_DEMO_9x16_V03."],
          ["Delivery", "A shared folder, organized by angle, with the test plan alongside."],
        ],
      },
      { type: "related", label: "Related", items: ["creative-testing-sprint", "creative-testing-guide", "pricing"] },
    ],
  },

  {
    slug: "ai-presenters",
    name: "AI presenters and the testimonial rules",
    summary: "What an AI presenter can say in an ad, and what turns it into a fake testimonial.",
    thumb: "emera-c-2",
    meta: {
      title: "AI presenters and the rules on testimonials",
      description:
        "What AI-generated presenters can and can’t say in ads: demonstrations versus testimonials, the FTC’s 2024 rule on fake reviews and testimonials, and platform labeling.",
    },
    hero: {
      title: ["What an AI presenter", "can and can’t say."],
      lede: "AI presenters are a fast way to make UGC-style ads. They also make it easy to break the rules on testimonials without noticing. Here’s where we draw the line, and why.",
      media: { stills: ["emera-c-2", "emera-a-1"] },
    },
    blocks: [
      {
        type: "prose",
        label: "The guide",
        sections: [
          {
            heading: "The short version",
            paras: [
              "An AI presenter can demonstrate a product, explain what it does and recommend it in the brand’s voice. It can’t pretend to be a customer who used the product and got results.",
            ],
          },
          {
            heading: "What the FTC rule says",
            paras: [
              "In 2024 the US Federal Trade Commission finalized a rule banning fake consumer reviews and testimonials, including ones that claim to come from people who don’t exist, such as AI-generated ones, or from people who never actually used the product. It took effect in October 2024.",
              "Rules elsewhere differ in detail but point the same way: an endorsement has to reflect a real person’s honest experience.",
            ],
          },
          {
            heading: "What that means for UGC-style ads",
            paras: ["The line is between showing and claiming:"],
            list: [
              "“Here’s how this serum goes on.” A demonstration. Fine.",
              "“It’s fragrance-free and made for sensitive skin.” A product claim. Fine, if it’s true.",
              "“I’ve used this every morning for a month and my skin has never been clearer.” A testimonial from someone who doesn’t exist. Not fine.",
            ],
          },
          {
            heading: "Real reviews, used properly",
            paras: [
              "If you have genuine customer reviews, they can appear in an ad as on-screen quotes credited to the customer, with their permission. They shouldn’t be read out by a generated person posing as the reviewer.",
            ],
          },
          {
            heading: "Platform labels",
            paras: [
              "Meta and TikTok both have rules for labeling realistic AI-generated content, and both review the claims in every ad. We follow their current rules and tell you which ads need a label before they go live.",
            ],
          },
          {
            heading: "This isn’t legal advice",
            paras: [
              "It’s how we work and why. Your own counsel has the final word on your claims and disclosures.",
            ],
          },
        ],
      },
      { type: "related", label: "Related", items: ["ai", "ai-ugc-ads", "skincare"] },
    ],
  },
];

// Glossary (/resources/glossary). Plain definitions, alphabetical.
export const glossary = [
  { term: "Angle", def: "A reason to buy, stated from the customer’s side: it saves time, it’s gentle, it replaces three products. Tests are built around angles." },
  { term: "AOV", def: "Average order value: revenue divided by the number of orders." },
  { term: "Attribution window", def: "How long after someone clicks or views an ad a purchase can still be credited to it, for example seven days after a click." },
  { term: "CAC", def: "Customer acquisition cost: everything spent to win a new customer, divided by the number of new customers." },
  { term: "Concept", def: "One creative idea for an ad, before it’s made into variations." },
  { term: "CPA", def: "Cost per acquisition: ad spend divided by conversions. When the conversion is a sale, it’s cost per purchase." },
  { term: "CPC", def: "Cost per click: ad spend divided by clicks." },
  { term: "CPM", def: "Cost per thousand impressions. What the platform charges for reach." },
  { term: "Creative fatigue", def: "When an ad performs worse the more the same people see it: frequency rises, click-through falls, cost per purchase climbs." },
  { term: "CTR", def: "Click-through rate: clicks divided by impressions." },
  { term: "CVR", def: "Conversion rate: purchases divided by clicks or visits." },
  { term: "Demand Gen", def: "A Google Ads campaign type that runs on YouTube, including Shorts, as well as Discover and Gmail." },
  { term: "Execution", def: "How an ad is made: presenter to camera, demo, hands only, product hero. The same angle can be made several ways." },
  { term: "Frequency", def: "The average number of times each person has seen an ad." },
  { term: "Hold rate", def: "Of the people who watched the first three seconds, the share who kept watching. Definitions vary; we agree one with you." },
  { term: "Hook", def: "The first two or three seconds of an ad: the part that decides whether the rest gets seen." },
  { term: "Hook rate", def: "Three-second video views divided by impressions. Also called thumb-stop rate." },
  { term: "Incrementality", def: "Sales that wouldn’t have happened without the ads. Measured by comparing people who saw them with a held-out group who didn’t." },
  { term: "Iteration", def: "A new version of an ad that keeps what worked, often the hook, and changes one thing." },
  { term: "LTV", def: "Lifetime value: the revenue or profit a customer brings in over their whole relationship with your brand." },
  { term: "MER", def: "Marketing efficiency ratio: total revenue divided by total marketing spend, across every channel." },
  { term: "Placement", def: "Where an ad appears: Reels, Stories, Feed, the For You feed, Shorts, in-stream." },
  { term: "ROAS", def: "Return on ad spend: revenue attributed to ads divided by what the ads cost." },
  { term: "Safe zone", def: "The part of the frame that platform buttons, captions and profile details don’t cover." },
  { term: "Spark Ads", def: "A TikTok format that runs an organic post, from the brand’s account or a creator’s with permission, as an ad." },
  { term: "Spec ad", def: "An ad made speculatively, without a client brief or payment, to show what a studio can do. Ours are labeled as spec." },
  { term: "UGC", def: "User-generated content: video that looks like a real person filmed it on a phone. UGC-style ads borrow the look." },
  { term: "Variant", def: "One version of an ad within a test. A twenty-ad sprint has twenty variants." },
];
