// Industry pages (/industries/[slug]). Where we have no spec work in a category
// yet, the page says so and shows the same structures from other categories.

const SPEC = "Spec ad made by Lumivance with an AI-generated presenter and set. Not a client campaign.";

export const industries = [
  {
    slug: "skincare",
    name: "Skincare & beauty",
    summary: "Texture, routine and ingredient ads that stay inside the claims you can prove.",
    thumb: "emera-c-5",
    meta: {
      title: "Ads for skincare and beauty brands",
      description:
        "UGC-style video ads for skincare and beauty brands: texture, routine and ingredient angles, scripted around platform policies on personal attributes, before-and-after images and medical claims.",
    },
    hero: {
      title: ["Skincare ads that show", "the texture, not a promise."],
      lede: "Beauty buyers want to see the product on skin: the texture, the routine, the finish. Ad platforms want you to avoid before-and-after promises and anything that sounds like a diagnosis. We make ads that do the first and stay clear of the second.",
      aside: "Scripted from the claims you can back up.",
      media: { stills: ["bag-unboxing-2", "emera-a-3"] },
      caption: "Format examples from our spec work in other categories",
    },
    blocks: [
      {
        type: "points",
        label: "What sells",
        title: "Angles that tend to work in skincare.",
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
        label: "What gets rejected",
        title: "What gets skincare ads rejected, and how we avoid it.",
        items: [
          { title: "Personal attributes", text: "“Tired of your breakouts?” implies the platform knows your skin, and Meta doesn’t allow it. We write “for breakout-prone skin” instead." },
          { title: "Before-and-after", text: "Side-by-side transformations and promises of dramatic results are restricted on the major platforms. We show the product working, not an outcome." },
          { title: "Medical claims", text: "Treat, cure, heal: those are drug words. Unless your product is regulated as a drug, scripts stay in cosmetic language." },
          { title: "Invented results", text: "An AI presenter can’t say a product cleared her skin. She never had skin. We script demonstrations, not experiences." },
        ],
      },
      {
        type: "gallery",
        label: "Formats",
        title: "The structures, from other categories.",
        intro: "We haven’t published skincare spec ads yet. These are the same structures from our other spec work, and how each one translates.",
        items: [
          { id: "bag-unboxing-3", caption: "Unboxing becomes the first look at a new serum." },
          { id: "emera-c-5", caption: "Hands only becomes the texture shot." },
          { id: "emera-a-4", caption: "On the wrist becomes on the skin." },
        ],
      },
      {
        type: "faq",
        label: "Questions",
        title: "About skincare ads.",
        items: [
          { q: "Can you show the product on real skin?", a: "Our presenters are AI-generated, so the skin on screen is generated too. For texture shots, we can also cut in close-ups you film of the real product." },
          { q: "Do you check our claims?", a: "We script from a claims list you approve, and we flag anything that reads like a drug claim or a promise. Final sign-off on claims stays with you. We aren’t your regulatory advisers." },
          { q: "Can you make ads for a launch?", a: "Yes. A sprint before launch gives you twenty ads ready to test on day one." },
        ],
      },
      { type: "related", label: "Related", items: ["ai-ugc-ads", "creative-testing-sprint", "supplements"] },
    ],
  },

  {
    slug: "supplements",
    name: "Supplements & nutrition",
    summary: "Ritual, taste and ingredient ads that stay on the right side of health-claim rules.",
    thumb: "blender-demo-4",
    meta: {
      title: "Ads for supplement and nutrition brands",
      description:
        "Video ads for supplement brands that sell the daily habit: ritual, taste and ingredient angles in structure-and-function language, checked against platform restrictions before production.",
    },
    hero: {
      title: ["Supplement ads that", "sell the habit, not a cure."],
      lede: "Supplement buyers are buying a routine: something they’ll take every day and feel good about. The ads that work show the habit, the scoop, the shake, the morning, and never claim to treat anything. We make those in volume, ready for platform review.",
      aside: "Structure-and-function language only.",
      media: { stills: ["blender-demo-3", "bike-unboxing-5"] },
      caption: "Format examples from our kitchen and fitness spec work",
    },
    blocks: [
      {
        type: "points",
        label: "What sells",
        title: "Angles that tend to work for supplements.",
        items: [
          { title: "The ritual", text: "The scoop, the stir, the first sip. Showing the habit makes it easy to picture having it." },
          { title: "The ingredient story", text: "Where the key ingredient comes from and what it does, in claims your label already supports." },
          { title: "The taste test", text: "For powders and gummies, taste is the objection. Deal with it on camera." },
          { title: "The simplification", text: "One capsule against a cupboard of bottles. One scoop against three products." },
        ],
      },
      {
        type: "points",
        label: "The rules",
        title: "The lines supplement ads can’t cross.",
        items: [
          { title: "Disease claims", text: "“Supports healthy sleep” is a structure-and-function claim. “Cures insomnia” is a drug claim. Our scripts use the first kind only." },
          { title: "Substantiation", text: "In the US, the FTC expects health claims in ads to be backed by competent and reliable scientific evidence. We script from the claims you can support." },
          { title: "Restricted categories", text: "Weight loss and some ingredients are restricted or banned on certain platforms. We check before we write a word." },
          { title: "No fake customers", text: "AI presenters demonstrate and explain. They never claim to have taken the product." },
        ],
      },
      {
        type: "gallery",
        label: "Formats",
        title: "The structures, from other categories.",
        intro: "Supplement spec work isn’t published yet. These structures come from our kitchen and fitness spec ads.",
        items: [
          { id: "blender-demo-3", caption: "A demo becomes the morning shake." },
          { id: "bike-unboxing-5", caption: "First use becomes the habit in action." },
          { id: "emera-c-4", caption: "Hands only becomes the scoop and stir." },
        ],
      },
      {
        type: "faq",
        label: "Questions",
        title: "About supplement ads.",
        items: [
          { q: "Can you say our product boosts immunity?", a: "Only in words your substantiation supports, and never as a treatment. We’ll suggest compliant phrasing. Final sign-off is yours." },
          { q: "Do platforms allow supplement ads?", a: "Generally yes, with restrictions. Weight loss is the most restricted category. We’ll tell you before production if an angle is likely to be rejected." },
          { q: "Gummies, powders or capsules?", a: "All three. Each has its own best opener: the chew, the pour, the swallow." },
        ],
      },
      { type: "related", label: "Related", items: ["fitness-wellness", "ai-ugc-ads", "creative-testing-sprint"] },
    ],
  },

  {
    slug: "fitness-wellness",
    name: "Fitness & wellness",
    summary: "Unboxing, set-up and first-use ads for equipment, apparel and wellness gear.",
    thumb: "bike-unboxing-3",
    meta: {
      title: "Ads for fitness and wellness brands",
      description:
        "Video ads for fitness equipment, apparel and wellness products that answer the real objection fast: unboxing, set-up and first use, in fifteen seconds.",
    },
    hero: {
      title: ["Fitness ads that get", "to the first workout fast."],
      lede: "For equipment, apparel and wellness gear, the question in every viewer’s head is “will I actually use it?” The ads that answer it show the box, the set-up and the first session, fast. Our spec work in this category does exactly that.",
      aside: "Unboxing, set-up, first use.",
      media: { pair: ["bike-unboxing", "blender-demo"] },
    },
    blocks: [
      {
        type: "frames",
        label: "Up close",
        title: "From the box to the first ride.",
        intro: "A spec ad for an exercise bike: sealed box, unpacking, the assembled bike, the first ride. Fifteen seconds that answer “is it hard to set up?” without saying it.",
        slug: "bike-unboxing",
        caption: SPEC,
      },
      {
        type: "points",
        label: "What sells",
        title: "Angles that tend to work in fitness and wellness.",
        items: [
          { title: "Set-up is easy", text: "Box to first use in seconds. Assembly is the biggest objection nobody says out loud." },
          { title: "It fits your space", text: "The product in a real room, not a showroom: the corner of a flat, the end of a bed." },
          { title: "The first session", text: "The moment of use, not a six-month result. Promises of results are where these ads get rejected." },
          { title: "The routine", text: "Where it fits in a day: before work, after a run, last thing at night." },
        ],
      },
      {
        type: "videos",
        label: "Examples",
        title: "Two spec ads from this category.",
        items: [
          { slug: "bike-unboxing", title: "Unboxing to first ride", text: "Answers the assembly question before it’s asked." },
          { slug: "blender-demo", title: "Presenter demo", text: "A kitchen appliance shown doing its job, explained as it goes." },
        ],
      },
      {
        type: "faq",
        label: "Questions",
        title: "About fitness ads.",
        items: [
          { q: "Can you show body transformations?", a: "No. Before-and-after body images are restricted on the major platforms and easy to fake with AI, which is exactly why we don’t make them. We show the product in use." },
          { q: "How long are the ads?", a: "Up to fifteen seconds in the standard sprint, and up to 30 or 60 in the larger ones, which helps when the set-up is the story." },
        ],
      },
      { type: "related", label: "Related", items: ["supplements", "ai-ugc-ads", "tiktok-ads"] },
    ],
  },

  {
    slug: "ecommerce",
    name: "DTC & eCommerce",
    summary: "Fashion, accessories, drinks and more: the categories most of our spec work comes from.",
    thumb: "lookbook-1",
    meta: {
      title: "Ads for DTC and eCommerce brands",
      description:
        "Performance creative for direct-to-consumer brands beyond skincare and wellness: fashion, accessories, jewelry, drinks and candy, made and tested the same way.",
    },
    hero: {
      title: ["Ads for brands that sell", "straight to customers."],
      lede: "Skincare and wellness are our focus, but the method works for any physical product sold online. Most of our spec work so far comes from other categories: fashion, accessories, jewelry, drinks and candy. It’s all here to judge.",
      aside: "Same sprint, same method, any product you can ship.",
      media: { pair: ["lookbook", "vazu-can"] },
    },
    blocks: [
      {
        type: "gallery",
        label: "Categories",
        title: "What we’ve made so far.",
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
        label: "What carries over",
        title: "What works across categories.",
        items: [
          { title: "Open on the product", text: "Whatever you sell, the first frame should make it obvious what the ad is about." },
          { title: "One reason per ad", text: "An ad that tries to say five things says none. Each ad in a sprint carries one reason to buy." },
          { title: "Test the opener", text: "The first two seconds decide whether the rest gets seen. That’s where most of the variation in a sprint goes." },
          { title: "Judge on purchases", text: "Clicks and views are clues. Cost per purchase is the verdict." },
        ],
      },
      {
        type: "faq",
        label: "Questions",
        title: "About other categories.",
        items: [
          { q: "Do you work with brands outside skincare and wellness?", a: "Yes. Those are our focus, not our limit. If you sell a physical product online, the sprint works the same way." },
          { q: "Can you shoot our product?", a: "We don’t do physical shoots. We work from photos of your product, and if you have footage, we can cut it in." },
        ],
      },
      { type: "related", label: "Related", items: ["ai-video-ads", "ai-ugc-ads", "work"] },
    ],
  },
];
