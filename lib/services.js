// Service pages (/services/[slug]). Each page is a hero plus an ordered list of
// blocks rendered by components/blocks/Blocks.jsx. Spec work is always labeled
// as spec; nothing here claims a client result.

const SPEC = "Spec ad made by Lumivance with an AI-generated presenter and set. Not a client campaign.";

export const services = [
  {
    slug: "creative-testing-sprint",
    group: "Creative",
    name: "Creative Testing Sprint",
    summary: "Twenty or more UGC-style ads, planned as one test. First ads in 72 hours.",
    thumb: "emera-b-3",
    meta: {
      title: "Creative Testing Sprint",
      description:
        "A fixed-price batch of UGC-style video ads for skincare and wellness brands: five angles, each made four ways, planned as one test. First ads 72 hours after the brief.",
    },
    hero: {
      title: ["Twenty ads.", "One test.", "A clear answer."],
      lede: "The sprint is how most brands start with us: a fixed-price batch of UGC-style video ads, built around five angles and planned so the results mean something. The first ads land 72 hours after your brief.",
      aside: "From $10,000 for twenty ads.",
      media: { pair: ["emera-b", "emera-c"] },
    },
    blocks: [
      {
        type: "points",
        label: "What you get",
        title: ["Everything a test needs.", "Nothing it doesn’t."],
        items: [
          { title: "Twenty finished ads", text: "Five angles, each made four ways: presenter to camera, presenter demo, hands only and product hero. Up to fifteen seconds each." },
          { title: "Research before the brief", text: "We read your reviews, your best sellers and the ads competitors keep paying to run, then bring you angles worth testing." },
          { title: "Every placement", text: "Each ad exported for Reels, Stories, TikTok, Shorts and feeds, with captions burned in and text kept clear of the platform buttons." },
          { title: "A test plan", text: "Which ads run against which, the budget each one needs to be judged fairly, and the number it’s judged on." },
          { title: "Names that mean something", text: "Every file named by angle, hook and execution, so your results tell you what worked, not just which file did." },
        ],
      },
      {
        type: "frames",
        label: "Up close",
        title: "Fifteen seconds, frame by frame.",
        intro: "One ad from a spec sprint for a watch brand. The opener, a sealed delivery box, is the variable under test. Everything after it is held steady so the result is about the hook.",
        slug: "emera-b",
        caption: SPEC,
      },
      {
        type: "steps",
        label: "Timeline",
        title: "From brief to files.",
        items: [
          { title: "Brief", text: "A 30-minute call and a short form: the product, who buys it, the claims you can make and what you’ve already tried.", when: "Day 1" },
          { title: "Angles", text: "Five angles and twenty scripts for you to approve or cut. Nothing goes into production without your sign-off.", when: "Days 1–2" },
          { title: "First ads", text: "The first ads arrive for review. You comment, we fix.", when: "Within 72 hours" },
          { title: "Full set", text: "The rest of the batch on the next cycle, exported for every placement, with the test plan.", when: "Next 72-hour cycle" },
        ],
      },
      {
        type: "matrix",
        label: "Structure",
        title: "How twenty ads are laid out.",
        intro: "Five hooks crossed with four executions. When a row wins, you’ve found an angle. When a column wins, you’ve found a format.",
      },
      { type: "tiers", label: "Price", title: ["Three sizes.", "One way of working."] },
      {
        type: "fit",
        label: "Fit",
        title: "Who the sprint is for.",
        yes: [
          "You sell a physical product online and already run Meta or TikTok ads",
          "Your best ad is getting old and nothing new has beaten it",
          "You can spend enough to judge twenty ads over a few weeks",
          "You want ads you can run in your own ad account",
        ],
        no: [
          "You haven’t launched yet and have no ad account",
          "You need real customers on camera giving testimonials",
          "You want a brand film rather than ads to test",
        ],
      },
      {
        type: "faq",
        label: "Questions",
        title: "About the sprint.",
        items: [
          { q: "Do you run the ads, or do we?", a: "Either. You can run them yourself with our test plan, or we can set the test up in your ad account. Ongoing media buying is part of the retainer." },
          { q: "What do you need from us?", a: "Photos of the product from every side, your logo and fonts, the claims you’re allowed to make, and, if you have it, a look at your current ads and what they cost per purchase." },
          { q: "What if none of the twenty win?", a: "Then you know which five angles don’t sell, which is worth knowing before you spend more on them, and the next batch is briefed from what the numbers showed. We don’t promise a winner. We promise a fair test." },
          { q: "Can we change the scripts?", a: "Yes. You approve every script before production, and you get a round of changes on the finished ads." },
        ],
      },
      { type: "related", label: "Related", items: ["ai-ugc-ads", "performance-creative", "pricing"] },
    ],
  },

  {
    slug: "ai-ugc-ads",
    group: "Creative",
    name: "AI UGC ads",
    summary: "Unboxings, try-ons, demos and talking-to-camera ads, with no casting or shipping.",
    thumb: "bag-unboxing-2",
    meta: {
      title: "AI UGC ads",
      description:
        "UGC-style video ads with AI-generated presenters: unboxings, try-ons, demos and talking-to-camera formats, scripted to the claims you can make. First ads 72 hours after the brief.",
    },
    hero: {
      title: ["UGC-style ads,", "without waiting on creators."],
      lede: "Unboxings, try-ons, demos and straight-to-camera ads, made with AI-generated presenters. No casting, no shipping product, no waiting on a reshoot. The first ads arrive 72 hours after your brief.",
      aside: "Every presenter is AI-generated, and labeled where platforms ask.",
      media: { pair: ["bag-unboxing", "outfit-try-on"] },
    },
    blocks: [
      {
        type: "gallery",
        label: "Formats",
        title: "The five formats we make most.",
        intro: "Each one is a different way to answer the same question: why should I care about this product in the next two seconds?",
        items: [
          { id: "emera-b-1", caption: "Unboxing. The sealed box is the hook." },
          { id: "outfit-try-on-1", caption: "Try-on. Three pieces, one outfit." },
          { id: "blender-demo-3", caption: "Demo. The product doing its job." },
          { id: "emera-c-1", caption: "To camera. One person, one reason." },
          { id: "emera-a-2", caption: "Reaction. The first look." },
        ],
      },
      {
        type: "points",
        label: "Why generated",
        title: "What changes when the presenter is generated.",
        items: [
          { title: "Speed", text: "No casting, contracts or couriers. Changing a line, a setting or a presenter is a revision, not a reshoot." },
          { title: "Range", text: "The same script with different presenters, settings and openers, so you test the hook instead of the person." },
          { title: "Control", text: "Every word is scripted to the claims you’re allowed to make. Nobody ad-libs a promise your product can’t keep." },
          { title: "Usage", text: "No creator usage windows to renew. Run the ads as long as they work." },
        ],
      },
      {
        type: "split",
        label: "The rule",
        title: "Our presenters never pretend to be customers.",
        paras: [
          "An AI presenter can show the product, explain what it does and walk through how to use it. What it can’t do is claim results as if it were a real customer.",
          "“This cleared my skin in two weeks” from someone who doesn’t exist is a fake testimonial, and the US Federal Trade Commission’s 2024 rule on fake reviews and testimonials covers AI-generated ones. So we script demonstrations and explanations, never invented experiences.",
        ],
        still: "emera-c-2",
        caption: "A demonstration, not a testimonial: the presenter shows the product and says what it is.",
      },
      {
        type: "videos",
        label: "Examples",
        title: "Three spec ads, three formats.",
        items: [
          { slug: "emera-a", title: "Reaction", text: "Opens on her face, the product already in hand." },
          { slug: "blender-demo", title: "Demo", text: "The product doing its job, explained as it goes." },
          { slug: "bike-unboxing", title: "Unboxing to first use", text: "Box, set-up and the first ride in fifteen seconds." },
        ],
      },
      {
        type: "faq",
        label: "Questions",
        title: "About AI presenters.",
        items: [
          { q: "Will viewers know it’s AI?", a: "Some will. The aim isn’t to trick anyone. It’s to make an ad that holds attention and explains the product well. Where a platform asks for an AI label, the ad gets one." },
          { q: "Are AI UGC ads allowed on Meta and TikTok?", a: "Yes. Both allow AI-generated ads, and both have rules about labeling realistic AI content and about the claims any ad can make. We follow them and tell you which ads need a label." },
          { q: "Can you use our real customers or staff?", a: "We can cut real customer or staff footage you supply into a batch alongside AI presenters. We never recreate a real person’s face or voice without their written permission." },
        ],
      },
      { type: "related", label: "Related", items: ["creative-testing-sprint", "ai-video-ads", "ai-presenters"] },
    ],
  },

  {
    slug: "ai-video-ads",
    group: "Creative",
    name: "AI video ads",
    summary: "Product heroes, motion pieces and lookbooks for when a presenter would get in the way.",
    thumb: "vazu-can-3",
    meta: {
      title: "AI video ads",
      description:
        "Product-led AI video ads: CGI-style product heroes, motion pieces and lookbooks, built from photos of your real packaging and checked against it frame by frame.",
    },
    hero: {
      title: ["Product-led video ads,", "made without a studio."],
      lede: "Some products sell best with nobody in the frame: a can sweating on ice, a pack bursting open, an outfit walking down a corridor. We make those too. Product heroes, motion pieces and lookbooks, built from photos of your real packaging.",
      aside: "Your product is shown as it is. We don’t change what it looks like or what it does.",
      media: { pair: ["vazu-can", "lookbook"] },
    },
    blocks: [
      {
        type: "frames",
        label: "Up close",
        title: "Ten seconds of soda, frame by frame.",
        intro: "A product hero for a drink brand: splash, frost, macro, packshot. Four set-ups a studio would need a day to light.",
        slug: "vazu-can",
        caption: "Spec ad made by Lumivance with AI. Not a client campaign.",
      },
      {
        type: "gallery",
        label: "Styles",
        title: "Four ways to make the product the hook.",
        items: [
          { id: "fizzbears-b-2", caption: "Motion. The product as a character." },
          { id: "vazu-can-4", caption: "Macro. Texture you can almost feel." },
          { id: "lookbook-3", caption: "Editorial. The detail that sells the piece." },
          { id: "vazu-can-6", caption: "Packshot. The end card that closes the sale." },
        ],
      },
      {
        type: "points",
        label: "Accuracy",
        title: "The product on screen is the product in the box.",
        items: [
          { title: "Built from your references", text: "We work from photos of your real product and packaging from every side, and check every frame against them." },
          { title: "No invented features", text: "If it doesn’t fizz, it doesn’t fizz in the ad. Effects dramatize what the product does. They don’t add to it." },
          { title: "Labels that match the shelf", text: "Pack copy, colors and claims match what’s printed on the real thing." },
        ],
      },
      {
        type: "videos",
        label: "Examples",
        title: "Two edits of one pack.",
        intro: "Two motion pieces for the same candy, cut to test which opening holds attention longer.",
        items: [
          { slug: "fizzbears-a", title: "Edit A", text: "Opens on an abstract landscape, reveals the pack." },
          { slug: "fizzbears-b", title: "Edit B", text: "Opens on texture, gets to the bears sooner." },
        ],
      },
      {
        type: "faq",
        label: "Questions",
        title: "About product-led ads.",
        items: [
          { q: "Do we need a 3D model of our product?", a: "No. Clear photos of the product and packaging from every side are enough to start. If you have a 3D file, we’ll use it." },
          { q: "How long can these ads be?", a: "Up to 15, 30 or 60 seconds depending on the sprint size. Most product heroes work best under fifteen." },
          { q: "Can you mix product shots with presenters?", a: "Yes. Many strong structures open on a product hero and cut to a presenter demo, or the other way round." },
        ],
      },
      { type: "related", label: "Related", items: ["ai-ugc-ads", "creative-testing-sprint", "youtube-ads"] },
    ],
  },

  {
    slug: "performance-creative",
    group: "Creative",
    name: "Creative + performance retainer",
    summary: "Twenty to forty new ads every month, and the media buying behind them.",
    thumb: "bike-unboxing-5",
    meta: {
      title: "Creative + performance retainer",
      description:
        "A monthly retainer for DTC brands: 20–40 new ads a month on 72-hour production cycles, plus Meta, TikTok and YouTube campaigns run in your own ad accounts against your target cost per purchase.",
    },
    hero: {
      title: ["New ads every month.", "Budget behind the ones that sell."],
      lede: "After a sprint, most brands need the same again next month, plus someone to run it. The retainer is both: 20 to 40 new ads a month on 72-hour cycles, and Meta, TikTok and YouTube campaigns run in your own accounts against your target cost per purchase.",
      aside: "Quoted after we review your ad account.",
      media: { pair: ["bike-unboxing", "blender-demo"] },
    },
    blocks: [
      {
        type: "steps",
        label: "A month",
        title: "What a month on retainer looks like.",
        items: [
          { title: "Read", text: "Last month’s numbers: which angles won, which formats held attention, where cost per purchase moved.", when: "Week 1" },
          { title: "Brief", text: "The next batch is briefed from those numbers: new hooks for the winning angles, new angles to replace the ones that lost.", when: "Week 1" },
          { title: "Produce", text: "New ads arrive on 72-hour cycles, so a replacement is ready before a winner wears out.", when: "Weeks 1–3" },
          { title: "Run", text: "Tests launched, budget moved to winners, tired ads retired. All in your accounts.", when: "Every week" },
        ],
      },
      {
        type: "points",
        label: "Included",
        title: "One team for the ads and the spend.",
        items: [
          { title: "20–40 new ads a month", text: "Iterations on what’s winning, and new angles to replace what isn’t." },
          { title: "Media buying", text: "Campaign set-up, budgets and bids on Meta, TikTok and YouTube, in ad accounts you own." },
          { title: "Weekly numbers", text: "Spend, cost per purchase and what changed, in plain language, every week." },
          { title: "A test roadmap", text: "What we’re testing next and why, written down where you can see it." },
        ],
      },
      {
        type: "split",
        label: "Why together",
        title: "Why the ads and the media should sit together.",
        paras: [
          "On Meta and TikTok, the ad now does much of the targeting. The platforms decide who sees what largely from how people react to the creative, so whoever makes the ads needs to see the numbers the same day the media buyer does.",
          "When one team does both, a losing hook gets replaced in days, not after a monthly hand-over between two agencies.",
        ],
        still: "bike-unboxing-3",
        caption: "Still from a spec ad for an exercise bike.",
      },
      { type: "retainer", label: "Terms", title: "How the retainer is charged." },
      {
        type: "faq",
        label: "Questions",
        title: "About the retainer.",
        items: [
          { q: "How much does it cost?", a: "It depends on how many channels, markets and ads are involved. After we’ve looked at your account, we quote a flat monthly fee or a share of ad spend, and you see the number before you commit to anything." },
          { q: "Do we have to do a sprint first?", a: "No, but most brands do. A sprint shows you how we work, for a fixed price, before you sign up for a month." },
          { q: "Who owns the ad accounts?", a: "You do. We work in your accounts with the access you give us, and you can remove it at any time." },
        ],
      },
      { type: "related", label: "Related", items: ["paid-social", "creative-testing-sprint", "framework"] },
    ],
  },

  {
    slug: "paid-social",
    group: "Paid social",
    name: "Paid social management",
    summary: "Meta, TikTok and YouTube campaigns run in your accounts, judged on cost per purchase.",
    thumb: "emera-a-4",
    meta: {
      title: "Paid social management",
      description:
        "Paid social media buying for skincare and wellness brands on Meta, TikTok and YouTube: account structure, creative testing, scaling and weekly reporting on cost per purchase.",
    },
    hero: {
      title: ["Media buying for brands", "that run on new ads."],
      lede: "We run paid social on Meta, TikTok and YouTube: account structure, testing budgets, scaling and the weekly read-out. Because we make the ads too, the test plan and the budget plan are the same plan.",
      aside: "Part of the creative + performance retainer.",
      media: { stills: ["emera-a-4", "bag-unboxing-6"] },
    },
    blocks: [
      {
        type: "points",
        label: "What we run",
        title: "The work behind the spend.",
        items: [
          { title: "Account structure", text: "Simple campaigns that let the algorithm learn: testing kept apart from scaling, few ad sets, clear names." },
          { title: "Creative testing", text: "New ads tested against your current best on a fixed budget, and judged on the number we agreed." },
          { title: "Scaling", text: "Budget moved to proven ads in steps the platforms can absorb, not doubled overnight." },
          { title: "Tracking checks", text: "Before we spend, we check that purchases are reaching the platforms through the pixel and server-side events. The numbers are only as good as the tracking." },
          { title: "Reporting", text: "Weekly: spend, cost per purchase, return on ad spend and what changed. Monthly: what we learned and what we’ll test next." },
        ],
      },
      {
        type: "steps",
        label: "First month",
        title: "The first thirty days.",
        items: [
          { title: "Audit", text: "We read your account history: what’s been tested, what worked, and where money went with nothing to show for it.", when: "Week 1" },
          { title: "Rebuild", text: "Structure simplified, tracking checked, naming fixed so results can be read.", when: "Weeks 1–2" },
          { title: "Test", text: "The first batch of new ads goes live against your current best.", when: "Week 2" },
          { title: "Scale", text: "Winners get budget. The next batch is briefed from what lost.", when: "Weeks 3–4" },
        ],
      },
      {
        type: "gallery",
        label: "Placements",
        title: "Every placement gets its own cut.",
        items: [
          { id: "emera-a-1", caption: "Reels, Stories and TikTok: vertical, sound on." },
          { id: "outfit-try-on-4", caption: "Feeds: portrait, captions for sound off." },
          { id: "fizzbears-a-3", caption: "YouTube in-stream: widescreen, brand in the first five seconds." },
        ],
      },
      {
        type: "faq",
        label: "Questions",
        title: "About media buying.",
        items: [
          { q: "What budget do we need?", a: "Enough to judge new ads properly. As a rough guide, each ad in a test needs to spend at least your target cost per purchase, often two or three times it, before it can be called. We’ll do the maths with you before you commit." },
          { q: "Do you take a percentage of spend?", a: "We charge either a flat monthly fee or a share of spend, agreed up front and never hidden inside the media cost." },
          { q: "Can you work with our existing ads?", a: "Yes. Your current best ad becomes the control that every new ad has to beat." },
        ],
      },
      { type: "related", label: "Platforms", items: ["meta-ads", "tiktok-ads", "youtube-ads"] },
    ],
  },

  {
    slug: "meta-ads",
    group: "Paid social",
    name: "Meta ads",
    summary: "Facebook and Instagram ads, with enough new creative to keep Meta’s automation fed.",
    thumb: "outfit-try-on-4",
    meta: {
      title: "Meta ads for skincare and wellness brands",
      description:
        "Facebook and Instagram ads for DTC skincare and wellness brands: new creative every month for Reels, Stories and Feed, tested and scaled in your own Ads Manager.",
    },
    hero: {
      title: ["Facebook and Instagram ads", "that don’t run out of creative."],
      lede: "Meta’s automated campaigns decide who sees your ads largely from the ads themselves. Give them three tired videos and they’ll keep showing three tired videos. We supply the volume and run the account: new ads every month, tested and scaled in your Ads Manager.",
      aside: "Reels, Stories and Feed, each cut to fit.",
      media: { pair: ["outfit-try-on", "emera-a"] },
    },
    blocks: [
      {
        type: "points",
        label: "What we do",
        title: "What we handle on Meta.",
        items: [
          { title: "Creative for every placement", text: "Vertical cuts for Reels and Stories, portrait for Feed, captions burned in, text kept clear of the buttons." },
          { title: "Automation, fed properly", text: "Advantage+ campaigns work best with many genuinely different ads. We vary hooks and formats, not twenty near-copies of one video." },
          { title: "Tests that read cleanly", text: "New ads tested against your current best on a fixed budget, so a winner is a winner and not a lucky week." },
          { title: "Policy-aware scripts", text: "Meta rejects ads that imply it knows something personal about the viewer (“Struggling with acne?”). We write around that from the first draft." },
        ],
      },
      {
        type: "frames",
        label: "Up close",
        title: "A Reels ad, second by second.",
        intro: "A try-on built for vertical feeds: the pieces in hand, the outfit on, the turn. The product is on screen in the first second.",
        slug: "outfit-try-on",
        caption: SPEC,
      },
      {
        type: "faq",
        label: "Questions",
        title: "About Meta ads.",
        items: [
          { q: "Do we need Advantage+?", a: "Not necessarily. It suits most DTC brands with steady purchase volume. Smaller accounts sometimes do better with manual campaigns while they collect data. We recommend one after the audit." },
          { q: "Facebook or Instagram?", a: "Usually both. Meta places ads across its apps and reports results by placement. We cut each ad so it looks native wherever it lands." },
          { q: "What access do you need?", a: "Partner access to your Business Manager. You keep ownership and can remove us at any time." },
        ],
      },
      { type: "related", label: "Related", items: ["paid-social", "tiktok-ads", "ai-ugc-ads"] },
    ],
  },

  {
    slug: "tiktok-ads",
    group: "Paid social",
    name: "TikTok ads",
    summary: "Ads that look like TikTok, with a reason to keep watching in the first two seconds.",
    thumb: "bike-unboxing-1",
    meta: {
      title: "TikTok ads for skincare and wellness brands",
      description:
        "TikTok ads that look native: phone-framed UGC-style creative made in volume, refreshed on 72-hour cycles and run in your own TikTok Ads Manager.",
    },
    hero: {
      title: ["TikTok ads that", "look like TikTok."],
      lede: "On TikTok, anything that looks like an ad gets swiped. The ads that work look like posts: one person, a phone camera, a reason to keep watching in the first two seconds. We make those in volume and run them in your TikTok Ads Manager.",
      aside: "Sound on, captions on, made for the For You feed.",
      media: { pair: ["bike-unboxing", "bag-unboxing"] },
    },
    blocks: [
      {
        type: "points",
        label: "What we do",
        title: "What we handle on TikTok.",
        items: [
          { title: "Native-looking creative", text: "Phone framing, natural light, on-screen text in the platform’s style. Polish where it helps, never where it gives the game away." },
          { title: "Hooks that land fast", text: "We test openers hardest, because on TikTok the first two seconds decide whether the rest gets seen." },
          { title: "Faster refresh", text: "Ads tend to wear out quicker on TikTok than on Meta. Production on 72-hour cycles means replacements are ready before results slide." },
          { title: "Spark Ads from your account", text: "Ads can run as posts on your brand’s own TikTok, so likes and comments build your profile as well as the campaign." },
        ],
      },
      {
        type: "frames",
        label: "Up close",
        title: "Box to first ride in fifteen seconds.",
        intro: "An unboxing built for TikTok: sealed box, unpacking, the assembled bike, the first ride. It answers “is it hard to set up?” without saying it.",
        slug: "bike-unboxing",
        caption: SPEC,
      },
      {
        type: "faq",
        label: "Questions",
        title: "About TikTok ads.",
        items: [
          { q: "Do we need a TikTok account with followers?", a: "No. Ads run without followers. A brand account helps if you want Spark Ads, which run your ads as posts on your profile." },
          { q: "What about trending sounds?", a: "Ads use music cleared for commercial use, so nothing gets muted or pulled for licensing." },
          { q: "Do you manage TikTok Shop?", a: "We make and run the video ads. We don’t manage TikTok Shop storefronts or affiliate programs." },
        ],
      },
      { type: "related", label: "Related", items: ["paid-social", "meta-ads", "ai-ugc-ads"] },
    ],
  },

  {
    slug: "youtube-ads",
    group: "Paid social",
    name: "YouTube ads",
    summary: "Shorts and in-stream ads, with the brand on screen before the skip button.",
    thumb: "fizzbears-a-3",
    meta: {
      title: "YouTube ads for DTC brands",
      description:
        "YouTube Shorts and in-stream ads for DTC brands: vertical and widescreen cuts with the product on screen in the first five seconds, run through Google Ads.",
    },
    hero: {
      title: ["YouTube ads that sell", "before the skip button."],
      lede: "Viewers can skip most in-stream ads after five seconds, and Shorts move as fast as TikTok. We make both: vertical cuts for Shorts and widescreen cuts for in-stream, with the product on screen early. Then we run them through Google Ads.",
      aside: "Shorts, in-stream and Demand Gen.",
      media: { pair: ["vazu-can", "emera-c"] },
    },
    blocks: [
      {
        type: "points",
        label: "What we do",
        title: "What we handle on YouTube.",
        items: [
          { title: "Two shapes from one idea", text: "A vertical cut for Shorts and a widescreen cut for in-stream, each framed for its screen rather than cropped." },
          { title: "Front-loaded edits", text: "Product, brand and the reason to care inside the first five seconds, so even a skipped ad does some work." },
          { title: "Longer demos where they pay", text: "YouTube viewers will watch a 30- or 60-second demo if it earns it. The larger sprints include those lengths." },
          { title: "Demand Gen campaigns", text: "Google’s campaign type for YouTube, Shorts, Discover and Gmail, set up and judged on cost per purchase like everything else." },
        ],
      },
      {
        type: "gallery",
        label: "Widescreen",
        title: "Built for the wide screen.",
        items: [
          { id: "fizzbears-a-5", caption: "The pack, in motion, by second four." },
          { id: "gold-cuff-2", caption: "A selfie format reframed for 16:9." },
          { id: "fizzbears-b-6", caption: "The end card: product, brand, reason to buy." },
        ],
      },
      {
        type: "faq",
        label: "Questions",
        title: "About YouTube ads.",
        items: [
          { q: "Do YouTube ads work for small DTC brands?", a: "They can, but they usually work best once Meta or TikTok is already profitable. We’ll tell you honestly whether YouTube is worth testing yet." },
          { q: "Do we need a YouTube channel?", a: "Yes. Ads are served from a channel, but it doesn’t need subscribers. We can help you set one up." },
          { q: "Can we use our TikTok ads on YouTube?", a: "Often, with changes: a new first five seconds for in-stream, and a widescreen version where it matters." },
        ],
      },
      { type: "related", label: "Related", items: ["paid-social", "ai-video-ads", "meta-ads"] },
    ],
  },
];

export const serviceGroups = ["Creative", "Paid social"];
