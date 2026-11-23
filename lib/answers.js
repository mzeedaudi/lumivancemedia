import { sprint, usd } from "@/lib/offer";

// Guides that answer one question a buyer types into Google or an AI assistant.
// Each opens with the answer, then shows the working, and lists its sources.
// Market figures are quoted as published ranges and never presented as ours.
// When a figure changes, update UPDATED and ISO below as well.

const UPDATED = "18 November 2026";
const ISO = "2026-11-18";

const dated = { updated: UPDATED, published: ISO, modified: ISO };
const perAd = (t) => usd(Math.round(t.price / t.ads));
const [s20, s40, s80] = sprint.tiers;

export const SOURCE = {
  insense: { label: "Insense, UGC creator rates (September 2026)", href: "https://insense.pro/blog/ugc-creator-rates" },
  spark: { label: "SparkUGC, UGC creator rates 2026 (October 2026)", href: "https://www.sparkugc.com/resources/ugc-creator-rates-2026" },
  inbeat: { label: "inBeat, UGC rates (updated August 2026)", href: "https://inbeat.agency/blog/ugc-rates" },
  conbersa: { label: "Conbersa, UGC usage rights explained (June 2026)", href: "https://www.conbersa.ai/learn/ugc-usage-rights-explained" },
  convrt: { label: "Convrt, how much UGC costs (November 2026)", href: "https://convrt.media/guides/how-much-does-ugc-cost/" },
  ftc: { label: "US Federal Trade Commission, final rule banning fake reviews and testimonials", href: "https://www.ftc.gov/news-events/news/press-releases/2024/08/federal-trade-commission-announces-final-rule-banning-fake-reviews-testimonials" },
  tiktokAi: { label: "TikTok Ads, misleading and false content policy", href: "https://ads.tiktok.com/resources/help/article/tiktok-ads-policy-misleading-and-false-content" },
  tiktokLabel: { label: "TikTok Ads, ad disclaimers in Ads Manager", href: "https://ads.tiktok.com/help/article/about-ad-disclaimers-in-tiktok-ads-manager" },
  metaLearning: { label: "Meta Business Help, about learning limited", href: "https://en-gb.facebook.com/business/help/269269737396981" },
  blip: { label: "Blip, how many ads to run in a Meta campaign", href: "https://withblip.com/blog/how-many-ads-to-run-meta-campaign/" },
  tiktokBest: { label: "TikTok Ads, creative best practices", href: "https://ads.tiktok.com/help/article/creative-best-practices" },
  tiktokGuide: { label: "TikTok for Business, video advertising guide", href: "https://ads.tiktok.com/business/en/guides/video-advertising-guide" },
  tiktokSpecs: { label: "TikTok Ads, auction in-feed ad specifications", href: "https://ads.tiktok.com/help/article/tiktok-auction-in-feed-ads" },
  tiktokReserved: { label: "TikTok Ads, reservation in-feed ad specifications", href: "https://ads.tiktok.com/resources/help/article/tiktok-reservation-in-feed-ads-reach-frequency?lang=en" },
  metaMobile: { label: "Meta, how to make better video ads for mobile", href: "https://www.facebook.com/business/news/want-to-better-video-ads-for-mobile-well-show-you-how" },
  metaTailored: { label: "Meta, tailored campaigns creative guidance", href: "https://www.facebook.com/business/ads/automation/tailored-campaigns" },
  google: { label: "Google Ads Help, about video ad specs", href: "https://support.google.com/google-ads/answer/13547298" },
};

export const sources = (...keys) => ({
  type: "sources",
  title: "Sources",
  intro: "Checked on the date at the top of this page. Platform guidance changes, so confirm it before you launch.",
  items: keys.map((k) => SOURCE[k]),
});

export const answerGuides = [
  // ─────────────────────────────────────────────────────────────── Cost
  {
    ...dated,
    slug: "ugc-video-ads-cost",
    category: "Costs",
    topic: "UGC video ad costs",
    name: "How much UGC video ads cost",
    summary: "Creator rates, the fees added on top, and what twenty ads really cost.",
    thumb: "bag-unboxing-2",
    meta: {
      title: "How much do UGC video ads cost in 2026?",
      description:
        "A UGC video ad usually costs $150 to $300 from a mid-level creator, before usage rights and whitelisting. See the all-in cost, AI options and a worked budget for twenty ads.",
    },
    hero: {
      title: "How much do UGC video ads cost?",
      lede: "The price per video is only part of the bill. Here’s what brands pay in 2026, what gets added on top, and how to budget for a proper test.",
      aside: `Updated ${UPDATED}`,
    },
    blocks: [
      {
        type: "answer",
        title: "The short answer",
        text: "A UGC video from a mid-level creator usually costs $150 to $300 before extras. Add paid usage rights, whitelisting and the time it takes to manage creators, and the all-in cost is often 1.5 to 2.5 times that, so budget about $225 to $750 per ad.",
        facts: [
          ["Beginner creator", "$50 to $400 per video"],
          ["Mid-level creator", "Most quotes fall between $150 and $300"],
          ["Premium creator", "$500 to $3,000 or more per video"],
          ["AI UGC tools", "About $5 to $25 per finished video, on a subscription"],
          ["A Lumivance sprint", `${perAd(s80)} to ${perAd(s20)} per finished ad, depending on batch size`],
        ],
      },
      {
        type: "article",
        title: "The full answer",
        sections: [
          {
            id: "creator-rates",
            heading: "What creators charge per video",
            paras: [
              "Rates depend on the creator’s experience, the length of the video and how specialised your product is. Published guides don’t agree on exact bands, so treat these as ranges rather than a price list.",
            ],
            table: {
              label: "UGC creator rates by experience",
              columns: ["Creator level", "Typical price per video", "Good for"],
              rows: [
                ["Beginner", "$50 to $400", "Simple products and first tests"],
                ["Mid-level", "$150 to $1,000, most often $150 to $300", "Most paid social testing"],
                ["Premium", "$500 to $3,000 or more", "Proven ad creators and specialist categories"],
              ],
            },
          },
          {
            id: "added-fees",
            heading: "The fees added on top",
            paras: [
              "The base rate often covers the video and little else. Running it as a paid ad, or from the creator’s own account, usually costs more. Ask what’s included before you agree a price, because marketplaces and independent creators handle rights differently.",
            ],
            table: {
              label: "Common UGC add-on fees",
              columns: ["Add-on", "Usual cost", "What it pays for"],
              rows: [
                ["Paid usage rights", "20% to 50% of the base rate", "Running the video as an ad, often for 30, 60 or 90 days"],
                ["Whitelisting", "About 30% of the base rate per month, or 50% to 100% as a one-off", "Running the ad from the creator’s handle"],
                ["Raw footage", "30% to 50% of the base rate", "The unedited clips, so you can recut the ad"],
                ["Extra hooks", "About $50 each", "New openings on the same video"],
              ],
            },
          },
          {
            id: "worked-example",
            heading: "A worked example: twenty ads from creators",
            paras: [
              "Say you commission twenty videos at a $250 base rate, buy paid usage at 40%, and whitelist your five best ads for one month at 30%. This is an illustration, and your quotes will differ.",
            ],
            table: {
              label: "Worked budget for twenty creator videos",
              columns: ["Line", "Calculation", "Cost"],
              rows: [
                ["Twenty videos", "20 × $250", "$5,000"],
                ["Paid usage rights", "40% of $5,000", "$2,000"],
                ["Whitelisting", "5 × $75", "$375"],
                ["Total", "About $369 per video", "$7,375"],
              ],
            },
            after: "That total leaves out shipping product to twenty people, writing the briefs, chasing late deliveries and editing the videos into a test.",
          },
          {
            id: "ai-ugc-cost",
            heading: "What AI UGC costs, and what that price leaves out",
            paras: [
              "AI UGC tools work out at roughly $5 to $25 per finished video on a monthly subscription. That’s the cheapest way to get a video file, but the subscription doesn’t write the script, choose the angle, check the product looks right or plan the test.",
              "If you have someone in-house who can do those jobs, a tool may be all you need. If you don’t, the cost moves from the invoice to your team’s time.",
            ],
            link: { href: "/resources/ai-ugc-vs-creators", label: "Compare AI UGC with human creators" },
          },
          {
            id: "managed-batch",
            heading: "What a managed batch costs",
            paras: [
              "A sprint is a fixed price for finished ads, planned as one test. Research, scripts, production, editing, captions and exports are included. Ad spend is not: you pay the platforms directly.",
            ],
            table: {
              label: "Lumivance sprint prices",
              columns: ["Sprint", "Finished ads", "Maximum length", "Price", "Per ad"],
              rows: sprint.tiers.map((t) => [t.name, String(t.ads), t.maxLength, usd(t.price), perAd(t)]),
            },
            after: "We aren’t the cheapest way to get one video. The price makes sense when you want a full test without managing twenty creators.",
          },
          {
            id: "test-budget",
            heading: "Don’t forget the money to test them",
            paras: [
              "Ads need spend before you can judge them. A common rule of thumb is to let each ad spend two to three times your target cost per customer. Twenty ads at a $40 target need about $1,600 to $2,400 in ad spend.",
            ],
            link: { href: "/resources/how-many-ads-to-test-on-meta", label: "Work out how many ads your budget can test" },
          },
        ],
      },
      { type: "cta", text: "Want a fixed price for your next batch of ads? Tell us what you sell and we’ll tell you which size fits.", label: "Get a recommendation" },
      {
        type: "faq",
        title: "Questions about UGC costs",
        items: [
          { q: "How much should I pay for one UGC video?", a: "For a mid-level creator, most published guides point to $150 to $300 before usage rights. Beginners can cost less, and proven ad creators can charge $500 or more." },
          { q: "Do usage rights come with a UGC video?", a: "Not always. Some marketplaces include standard rights, while many independent creators charge extra to run the video as a paid ad. Get the rights, the channels and the time period in writing." },
          { q: "What is whitelisting?", a: "It means running your ad from the creator’s account, so it appears under their name. On TikTok this is done with Spark Ads, and on Meta with partnership ads. Creators usually charge extra for it." },
          { q: "Why do UGC prices vary so much?", a: "Experience, video length, category, usage rights and whether the creator has proven ad results all change the price. The published guides also measure different things, so compare what each quote includes." },
          { q: "Is AI UGC always cheaper?", a: "The video file is cheaper. The total may not be if your team still has to write scripts, check every frame against the real product and plan the test." },
          { q: "Does a Lumivance sprint include ad spend?", a: "No. Ad spend goes directly to Meta, TikTok or Google, and you stay in control of it." },
        ],
      },
      sources("insense", "spark", "inbeat", "conbersa", "convrt"),
      { type: "related", title: "Read next", items: ["ai-video-ads-cost", "ai-ugc-vs-creators", "how-many-ads-to-test-on-meta"] },
    ],
  },

  // ─────────────────────────────────────────────────────────────── AI vs creators
  {
    ...dated,
    slug: "ai-ugc-vs-creators",
    category: "AI video ads",
    topic: "AI UGC vs human creators",
    name: "AI UGC vs human creators",
    summary: "Where each one wins, the legal line, and how to use both in one test.",
    thumb: "emera-c-2",
    meta: {
      title: "AI UGC vs human creators: which should you use for ads?",
      description:
        "Use AI UGC for fast product explainers and testing many angles. Use human creators for real experiences and testimonials. Compare cost, speed, rules and how to combine both.",
    },
    hero: {
      title: "AI UGC vs human creators: which should you use?",
      lede: "It isn’t a question of which is better. Each does a different job, and one of those jobs AI isn’t allowed to do.",
      aside: `Updated ${UPDATED}`,
    },
    blocks: [
      {
        type: "answer",
        title: "The short answer",
        text: "Use AI UGC when you need many versions of an idea quickly and the ad explains or demonstrates a product. Use human creators when the ad depends on a real person’s experience, such as a testimonial, a result or a creator’s own audience.",
        facts: [
          ["Choose AI UGC for", "Product explainers, new hooks and testing many angles"],
          ["Choose creators for", "Testimonials, real results and borrowed audience trust"],
          ["Typical cost", "AI: about $5 to $25 per video. Creators: often $150 to $300 before rights"],
          ["The hard rule", "AI presenters must never pose as real customers"],
          ["Best approach", "Find the winning angle with volume, then film it with real people if it needs them"],
        ],
      },
      {
        type: "article",
        title: "The full answer",
        sections: [
          {
            id: "side-by-side",
            heading: "AI UGC and creators, side by side",
            paras: ["The differences that matter when you’re planning a test:"],
            table: {
              label: "AI UGC compared with human creators",
              columns: ["", "AI UGC", "Human creators"],
              rows: [
                ["Cost per video", "About $5 to $25 on a tool subscription", "Often $150 to $300, plus usage rights"],
                ["New versions", "Quick to change a hook or script", "Usually means a reshoot or a new fee"],
                ["Real experience", "None", "Yes, if they have used the product"],
                ["Testimonials", "Not allowed to pose as a customer", "Allowed when honest and genuine"],
                ["Product handling", "Must be checked against the real product", "Holds and uses the real thing"],
                ["Own audience", "None", "Can run from their account as a whitelisted ad"],
              ],
            },
          },
          {
            id: "where-ai-wins",
            heading: "Where AI UGC does the job well",
            paras: ["AI earns its place when the ad’s job is to explain something clearly and you need to compare a lot of ideas."],
            list: [
              "Testing several reasons to buy before spending on a shoot.",
              "Making new openings for an ad that already works.",
              "Showing an app beside a presenter, using real screen recordings.",
              "Adapting one idea for different audiences, offers or languages.",
              "Keeping new ads coming when your best one starts to tire.",
            ],
          },
          {
            id: "where-creators-win",
            heading: "Where human creators are the better choice",
            paras: ["Some ads only work because a real person is behind them."],
            list: [
              "Testimonials and first-hand results.",
              "Products where touch, fit or texture is the selling point.",
              "Categories where trust is the whole sale, such as health.",
              "Campaigns that benefit from the creator’s own followers.",
              "Founder stories, which need the actual founder.",
            ],
          },
          {
            id: "legal-line",
            heading: "The line you can’t cross",
            paras: [
              "A generated presenter can explain what a product does. It can’t say it used the product, got a result or is a happy customer, because none of that happened.",
              "In the US, the Federal Trade Commission’s rule on fake reviews and testimonials covers testimonials that misrepresent that they come from someone who doesn’t exist, and it names AI-generated fake reviews. The FTC can seek civil penalties against knowing violators. Other countries have their own consumer protection rules, so take legal advice if you’re unsure.",
            ],
          },
          {
            id: "platform-labels",
            heading: "Platform labels for AI ads",
            paras: [
              "TikTok requires advertisers to disclose ads containing images, video or audio that are fully generated or significantly changed by AI, and undisclosed ads can be rejected or restricted. Rules differ between platforms and change often, so check each platform’s current policy before you launch.",
            ],
          },
          {
            id: "use-both",
            heading: "How to use both in one plan",
            paras: ["You don’t have to pick a side. A practical order of work:"],
            list: [
              "Test five angles with AI-made ads, because it’s the quickest way to learn which reason to buy works.",
              "Keep the angle that brings customers in at your target cost.",
              "Brief real creators on that angle if it needs a real experience.",
              "Run both against each other and let cost per customer decide.",
            ],
            link: { href: "/resources/ai-presenters", label: "Read what AI presenters can and can’t say" },
          },
        ],
      },
      { type: "cta", text: "Not sure which suits your product? Tell us what you sell and we’ll say honestly whether AI is the right fit.", label: "Ask us" },
      {
        type: "faq",
        title: "Questions about AI UGC",
        items: [
          { q: "Do AI UGC ads work?", a: "They can, but no one can promise it for your product. Test them against your current ads and judge them on what a new customer costs." },
          { q: "Are AI UGC ads legal?", a: "Using AI to make an ad is generally allowed. The problem is misleading people, such as presenting a generated person as a real customer or making claims you can’t support." },
          { q: "Do I have to label AI ads?", a: "On TikTok, ads with fully generated or significantly AI-altered content must be disclosed. Check each platform’s current rules and the law in the countries where you advertise." },
          { q: "Can an AI presenter say “I love this product”?", a: "We don’t write that. First-person experience claims imply the presenter has used the product, so scripts describe what the product does instead." },
          { q: "Will viewers know the presenter is AI?", a: "Some will. That’s one more reason to keep the ad honest, label it where required, and never pretend the presenter is a customer." },
          { q: "Can I test AI and creator ads together?", a: "Yes. Name each file clearly so you can compare them by format and judge both on cost per customer." },
        ],
      },
      sources("ftc", "tiktokAi", "tiktokLabel", "spark", "insense"),
      { type: "related", title: "Read next", items: ["ugc-video-ads-cost", "ai-presenters", "ai-ugc-ads"] },
    ],
  },

  // ─────────────────────────────────────────────────────────────── How many ads
  {
    ...dated,
    slug: "how-many-ads-to-test-on-meta",
    category: "Testing",
    topic: "How many ads to test",
    name: "How many ads to test on Meta",
    summary: "A simple formula for how many ads your budget can judge fairly.",
    thumb: "emera-b-3",
    meta: {
      title: "How many ads should you test on Meta?",
      description:
        "Divide your test budget by three times your target cost per customer to see how many Meta ads you can judge fairly. Includes worked examples and learning phase maths.",
    },
    hero: {
      title: "How many ads should you test on Meta?",
      lede: "More ads only help if each one gets enough spend to prove something. Your budget sets the number.",
      aside: `Updated ${UPDATED}`,
    },
    blocks: [
      {
        type: "answer",
        title: "The short answer",
        text: "Test as many ads as your budget can judge fairly. Divide your test budget by three times your target cost per customer: $3,000 at a $50 target gives you 20 ads. Launch them in groups of about three to six per ad set.",
        facts: [
          ["The formula", "Test budget ÷ (target cost per customer × 3)"],
          ["Example", "$3,000 ÷ ($50 × 3) = 20 ads"],
          ["Per ad set", "About 3 to 6 distinct ads is a common starting point"],
          ["Learning phase", "About 50 optimisation events per ad set after the last significant edit"],
          ["What to vary", "The reason to buy first, then the hook and format"],
        ],
      },
      {
        type: "article",
        title: "The full answer",
        sections: [
          {
            id: "formula",
            heading: "The formula, with examples",
            paras: [
              "A common rule of thumb is to let an ad spend two to three times your target cost per customer before you judge it on results. We use three here because it’s the safer read.",
            ],
            table: {
              label: "How many ads a test budget can judge",
              columns: ["Test budget", "Target cost per customer", "Spend per ad", "Ads you can judge"],
              rows: [
                ["$1,500", "$50", "$150", "10"],
                ["$3,000", "$50", "$150", "20"],
                ["$6,000", "$50", "$150", "40"],
                ["$3,000", "$25", "$75", "40"],
                ["$3,000", "$100", "$300", "10"],
              ],
            },
            after: "If the answer is smaller than you hoped, test fewer ads. Ten ads judged properly teach you more than twenty judged on luck.",
          },
          {
            id: "learning-phase",
            heading: "What the learning phase means for your test",
            paras: [
              "Meta says an ad set flagged Learning limited moves to active once it gets 50 optimisation events after its last significant edit. In practice, one ad set at a $50 cost per customer needs about $2,500 in spend to get there.",
              "If you can’t reach that, Meta’s suggestions include combining ad sets, widening the audience, raising the budget or optimising for an event that happens more often. Fewer, better-funded ad sets usually beat many small ones.",
            ],
          },
          {
            id: "batch",
            heading: "Launch in batches, not one at a time",
            paras: [
              "Changing the creative in an ad set counts as a significant edit, and so does pausing it. Adding one new ad every few days keeps disturbing the ad set. Plan your new ads as a batch and launch them together.",
            ],
          },
          {
            id: "what-to-test",
            heading: "Make each ad a different idea",
            paras: [
              "Twenty small variations of one idea tell you very little. Choose about five reasons to buy, then make each one in four formats. That gives you twenty ads, and the results show both which reason sells and which format works.",
            ],
            link: { href: "/resources/creative-testing-guide", label: "See how to build a test matrix" },
          },
          {
            id: "uneven-spend",
            heading: "Expect uneven spend",
            paras: [
              "Meta won’t split your budget evenly between the ads in an ad set. It moves spend towards the ads it expects to do well, so some ads may get very little. An ad with almost no spend hasn’t lost, it just hasn’t been tested. If you need an even comparison, use Meta’s A/B testing tool.",
            ],
          },
          {
            id: "read-results",
            heading: "Read the results in order",
            paras: ["Each number tells you which part of the ad to fix:"],
            list: [
              "Hook rate: did people stop scrolling?",
              "Hold rate: did they keep watching?",
              "Click-through rate: did they want to know more?",
              "Cost per customer: did they buy?",
            ],
          },
        ],
      },
      { type: "cta", text: "Know your budget and target cost? Send them over and we’ll suggest how many ads to make.", label: "Plan my test" },
      {
        type: "faq",
        title: "Questions about testing Meta ads",
        items: [
          { q: "How many ads should I run per ad set?", a: "About three to six distinct ads is a common starting point. Your budget matters more than the number: every ad needs enough spend to be judged." },
          { q: "How much budget do I need to test Meta ads?", a: "Multiply the number of ads by three times your target cost per customer. Twenty ads at a $50 target need about $3,000." },
          { q: "How long should a Meta ad test run?", a: "Run it for at least a full week so weekdays and weekends both count, and until each ad has had a fair share of spend." },
          { q: "Should I test hooks or whole concepts first?", a: "Start with concepts, meaning the reason to buy. Once you know what sells, test new hooks on the winner." },
          { q: "When should I turn off a losing ad?", a: "Cut an ad early if almost nobody stops to watch it. Otherwise, wait until it has spent two to three times your target cost per customer." },
          { q: "Does adding new ads reset the learning phase?", a: "Meta counts a change to creative as a significant edit, which can send the ad set back into learning. That’s why launching in batches is usually better." },
        ],
      },
      sources("metaLearning", "blip"),
      { type: "related", title: "Read next", items: ["creative-testing-guide", "ad-creative-fatigue", "creative-testing-sprint"] },
    ],
  },

  // ─────────────────────────────────────────────────────────────── Fatigue
  {
    ...dated,
    slug: "ad-creative-fatigue",
    category: "Testing",
    topic: "Spotting creative fatigue",
    name: "How to spot ad creative fatigue",
    summary: "The signs an ad is tired, what else it could be, and what to do next.",
    thumb: "vazu-can-2",
    meta: {
      title: "Ad creative fatigue: how to spot it and how often to refresh",
      description:
        "An ad is fatigued when frequency rises while click-through falls and cost per customer climbs. Learn how to diagnose it, rule out other causes and refresh your ads.",
    },
    hero: {
      title: "How do you know when an ad is tired?",
      lede: "A rising cost per customer doesn’t always mean the ad has worn out. Here’s how to tell, and what to do about it.",
      aside: `Updated ${UPDATED}`,
    },
    blocks: [
      {
        type: "answer",
        title: "The short answer",
        text: "An ad is tired when frequency rises while click-through falls and cost per customer climbs, compared with its own best week. There’s no fixed expiry date. TikTok suggests refreshing creative every two to four weeks, or sooner if performance drops.",
        facts: [
          ["Main signs", "Frequency up, click-through down, cost per customer up"],
          ["Compare against", "The same ad’s best seven days"],
          ["TikTok’s guidance", "Refresh every 2 to 4 weeks, or sooner if results decline"],
          ["First fix", "Put a new hook on the same ad"],
          ["Avoid", "Waiting until the ad has stopped working to brief the next one"],
        ],
      },
      {
        type: "article",
        title: "The full answer",
        sections: [
          {
            id: "signs",
            heading: "The signs, and what each one means",
            paras: ["Look at them together. One number moving on its own is rarely enough."],
            table: {
              label: "Signs of creative fatigue",
              columns: ["Signal", "What you’ll see", "What it usually means"],
              rows: [
                ["Frequency", "Rising week on week", "The same people are seeing the ad again"],
                ["Hook rate", "Falling", "The opening no longer stops people"],
                ["Click-through rate", "Falling", "Fewer viewers want to know more"],
                ["Cost per customer", "Rising", "The ad is bringing in customers less efficiently"],
              ],
            },
          },
          {
            id: "working-rule",
            heading: "A simple rule to work from",
            paras: [
              "This is our working rule, not a platform rule. Compare the last seven days with the ad’s best seven days. If click-through is down by a fifth, cost per customer is up by a fifth and frequency is rising, treat the ad as tired.",
              "Adjust the rule to your account. A small audience will tire faster than a large one, and an ad with little spend may just need more data.",
            ],
          },
          {
            id: "other-causes",
            heading: "Check it isn’t something else",
            paras: ["Before you replace a good ad, rule out the other reasons results can drop:"],
            list: [
              "Your website or checkout changed, or got slower.",
              "An offer ended or a price went up.",
              "Tracking broke, so sales aren’t being counted.",
              "A busy season pushed auction prices up across the board.",
              "You made a big change to the budget, audience or ad set.",
            ],
          },
          {
            id: "ad-level",
            heading: "Check each ad on its own",
            paras: [
              "One ad can tire while another in the same ad set is still doing well. Look at each ad separately before you replace anything, and keep the ones that are still working.",
            ],
          },
          {
            id: "what-to-do",
            heading: "What to do with a tired ad",
            paras: ["Start with the cheapest change, and move on only if it doesn’t work:"],
            list: [
              "New hook: replace the first three seconds and keep the rest.",
              "New format: tell the same story as a demo, unboxing or talking presenter.",
              "New angle: give people a different reason to buy.",
            ],
            after: "On TikTok, the platform’s advice is to add new creative to the existing ad group rather than start a new one.",
          },
          {
            id: "stay-ahead",
            heading: "Have the next batch ready",
            paras: [
              "The expensive part of fatigue is the gap between an ad tiring and its replacement arriving. Start the next batch while your current winner is still working, so you always have something tested and ready to take over.",
            ],
            link: { href: "/services/creative-testing-sprint", label: "See how a sprint keeps new ads coming" },
          },
        ],
      },
      { type: "cta", text: "Is your best ad starting to slip? Tell us what’s running and we’ll suggest what to test next.", label: "Get ideas" },
      {
        type: "faq",
        title: "Questions about ad fatigue",
        items: [
          { q: "What is creative fatigue?", a: "It’s when an ad loses its effect because your audience has seen it too often. People stop paying attention, so results fall and costs rise." },
          { q: "How often should I refresh my ads?", a: "There’s no single answer. TikTok’s guide suggests every two to four weeks, or sooner if results decline. Let your own numbers decide." },
          { q: "What frequency is too high?", a: "No number applies to every account. Watch the trend instead: rising frequency matters when click-through is falling and cost per customer is climbing." },
          { q: "Should I turn off a tired ad straight away?", a: "Not always. If it still brings in customers at your target cost, keep it running while you test its replacement." },
          { q: "Can a tired ad work again later?", a: "It can, particularly with a new audience or after a long break. Treat it as a new test and judge it on current results." },
          { q: "Does a bigger budget make ads tire faster?", a: "It can. More spend reaches the same audience more often, especially if that audience is small." },
        ],
      },
      sources("tiktokGuide", "tiktokBest"),
      { type: "related", title: "Read next", items: ["how-many-ads-to-test-on-meta", "creative-testing-guide", "performance-creative"] },
    ],
  },

  // ─────────────────────────────────────────────────────────────── Length
  {
    ...dated,
    slug: "video-ad-length",
    category: "Production",
    topic: "How long a video ad should run",
    name: "How long a video ad should be",
    summary: "Recommended lengths for TikTok, Meta and YouTube, and when to go longer.",
    thumb: "blender-demo-2",
    meta: {
      title: "How long should a video ad be on TikTok, Meta and YouTube?",
      description:
        "A good starting point for a direct-response video ad is 15 to 30 seconds. See what TikTok, Meta and YouTube recommend, when a longer ad makes sense, and how to test length.",
    },
    hero: {
      title: "How long should a video ad be?",
      lede: "Platforms allow far longer ads than most people will watch. Here’s what they recommend, and how to find the right length for your product.",
      aside: `Updated ${UPDATED}`,
    },
    blocks: [
      {
        type: "answer",
        title: "The short answer",
        text: "Start at 15 to 30 seconds for most direct-response video ads. TikTok says 21 to 34 seconds performs best for in-feed ads, while Meta’s mobile video guidance is to keep an ad as short as it can be and consider 15 seconds or less. Test length once you’ve found an idea that works.",
        facts: [
          ["TikTok in-feed", "21 to 34 seconds recommended"],
          ["Meta mobile guidance", "Consider 15 seconds or less"],
          ["YouTube", "Varies by format and campaign type"],
          ["Shape", "9:16 for TikTok, Reels and Stories; 4:5 for Meta Feed"],
          ["Most important part", "The first three seconds"],
        ],
      },
      {
        type: "article",
        title: "The full answer",
        sections: [
          {
            id: "by-platform",
            heading: "Recommended length by platform",
            paras: ["What a platform allows and what it recommends are very different numbers."],
            table: {
              label: "Video ad length by platform",
              columns: ["Platform", "Recommended", "Allowed", "Shape"],
              rows: [
                ["TikTok in-feed", "21 to 34 seconds", "Up to 10 minutes", "9:16"],
                ["Meta", "As short as the message allows; consider 15 seconds or less", "Far longer, and limits vary by placement", "4:5 for Feed, 9:16 for Stories and Reels"],
                ["YouTube", "No single figure", "Varies by format", "16:9, 9:16 or 1:1"],
              ],
            },
            after: "TikTok’s advice varies by buying type: its reservation in-feed specification recommends 9 to 15 seconds. Meta’s 15-second advice comes from its general mobile video guidance, so treat it as a starting point for Reels too.",
          },
          {
            id: "first-seconds",
            heading: "The opening matters more than the length",
            paras: [
              "Meta advises getting your key message or branding into the first three seconds. TikTok says to introduce your proposition in the first three seconds and prioritise the hook in the first six. If nobody gets past the opening, the length of the rest doesn’t matter.",
            ],
          },
          {
            id: "when-short",
            heading: "When a short ad is enough",
            paras: ["Stay near 15 seconds when the product explains itself:"],
            list: [
              "The benefit is obvious the moment you see it.",
              "People already know the category.",
              "You’re testing lots of hooks.",
              "You’re retargeting people who already know you.",
            ],
          },
          {
            id: "when-longer",
            heading: "When a longer ad earns its time",
            paras: ["Go to 30 or 60 seconds when people need more before they’ll act:"],
            list: [
              "The product needs a demonstration.",
              "It’s a higher-priced purchase.",
              "Setup or ease of use is the main doubt.",
              "An app needs a walkthrough of its first session.",
            ],
          },
          {
            id: "sound-off",
            heading: "Make it work with the sound off",
            paras: [
              "Meta’s mobile video guidance is to make your message clear visually, because many people watch feed videos without sound. Use captions and on-screen text, then add sound for the people who turn it on.",
            ],
          },
          {
            id: "test-length",
            heading: "How to test length",
            paras: [
              "Start with one idea that’s already working, then cut it to two or three lengths with the same opening. Compare them on cost per customer, not on watch time. A shorter ad can get more views and still bring in fewer buyers.",
            ],
            link: { href: "/resources/delivery-specs", label: "See our delivery specs" },
          },
        ],
      },
      { type: "cta", text: "Not sure what length suits your product? Tell us what you sell and we’ll suggest where to start.", label: "Ask us" },
      {
        type: "faq",
        title: "Questions about video ad length",
        items: [
          { q: "What is the best length for a TikTok ad?", a: "TikTok’s small business guide says 21 to 34 seconds performs best for in-feed ads. Some buying formats recommend less, so check the one you’re using." },
          { q: "What is the best length for a Facebook or Instagram ad?", a: "Meta’s guidance is to make the ad as short as it can be while getting the message across, and to consider 15 seconds or less." },
          { q: "Are 6-second ads worth making?", a: "They can work for simple products and for reminding people who already know you. Most new customers need a little more explanation." },
          { q: "Do 60-second ads work?", a: "They can when the product needs a demonstration. Put the strongest moment first, because many viewers won’t reach the end." },
          { q: "Should I make one video for every platform?", a: "One idea can work everywhere, but export it in the right shape for each placement and check that nothing important is covered by the platform’s buttons." },
          { q: "How long are the ads in a Lumivance sprint?", a: `Up to ${s20.maxLength} in ${s20.name}, up to ${s40.maxLength} in ${s40.name} and up to ${s80.maxLength} in ${s80.name}.` },
        ],
      },
      sources("tiktokGuide", "tiktokSpecs", "tiktokReserved", "tiktokBest", "metaMobile", "metaTailored", "google"),
      { type: "related", title: "Read next", items: ["delivery-specs", "ad-creative-fatigue", "ugc-video-ads-cost"] },
    ],
  },
];
