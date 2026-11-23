import { SOURCE as BASE, sources as cite } from "@/lib/answers";
import { sprint, usd } from "@/lib/offer";

// Blog posts added in November 2026, written for the questions brands type
// into Google and AI assistants about AI video ads. Same shape as
// lib/answers.js: the answer first, then the working, an FAQ and sources.
// Figures are quoted from the sources listed on each post and never
// presented as our own results. When a rule or figure changes, update the
// post and its `modified` date.

const ISO = "2026-11-23";
const dated = { published: ISO, modified: ISO };
const perAd = (t) => usd(Math.round(t.price / t.ads));
const [s20, , s80] = sprint.tiers;

// Sources these posts add to the shared list in lib/answers.js.
const SOURCE = {
  ...BASE,
  metaGenAi: { label: "Meta, expanding GenAI transparency for Meta’s ads products (updated June 2026)", href: "https://about.fb.com/news/2025/02/gen-ai-transparency-metas-ads-products/" },
  googleAiLabels: { label: "Google Ads Advertising Policies Help, updates to AI labeling requirements (July 2026)", href: "https://support.google.com/adspolicy/answer/17257106?hl=en" },
  googleAiSetting: { label: "Google Ads Help, use AI content label settings and disclosures", href: "https://support.google.com/google-ads/answer/17140115?hl=en" },
  euArt50: { label: "EU AI Act, Article 50: transparency obligations", href: "https://artificialintelligenceact.eu/article/50/" },
  clutch: { label: "Clutch, video production pricing guide (updated September 2026)", href: "https://clutch.co/agencies/video-production/pricing" },
};
const sources = (...keys) => ({ ...cite(), items: keys.map((k) => SOURCE[k]) });

export const newPosts = [
  // ─────────────────────────────────────────────────────────────── What they are
  {
    ...dated,
    slug: "what-are-ai-video-ads",
    category: "AI video ads",
    topic: "AI video ads, explained",
    name: "What AI video ads are",
    summary: "What counts as an AI video ad, how one gets made, and where it earns its place.",
    thumb: "vazu-can-3",
    keywords: ["AI video ads", "AI-generated video ads", "AI video ads for brands", "AI UGC ads", "AI product videos", "AI ad creative"],
    meta: {
      title: "What are AI video ads? A plain guide for brands",
      description:
        "AI video ads are paid video ads where some or all of the presenter, voice, scenes or product shots were made with generative AI. What they are, how they’re made, and when brands should use them.",
    },
    hero: {
      title: "What are AI video ads?",
      lede: "The term gets stretched to cover everything from an animated product photo to a fully generated presenter. Here’s what it means in practice, how the ads get made, and where they earn a place in a brand’s ad account.",
    },
    blocks: [
      {
        type: "answer",
        title: "The short answer",
        text: "An AI video ad is a paid video ad where some or all of what you see or hear was made with generative AI: the presenter, the voice, the setting, the product shots or the motion. Brands use them to make many versions of an idea quickly and find out which one sells, at a lower cost per ad than a shoot. They still need a sharp reason to buy, an accurate product and honest claims to work.",
        facts: [
          ["What gets generated", "Presenters, voices, scenes, product shots or motion, in any mix"],
          ["Common formats", "Presenter ads filmed selfie-style, product demos, product hero shots, motion pieces"],
          ["Where they run", "Facebook, Instagram, TikTok, YouTube and Shorts"],
          ["Main advantage", "Many versions of one idea, fast, so you can test what sells"],
          ["Main risk", "A product that looks wrong, or a presenter who pretends to be a customer"],
        ],
      },
      {
        type: "article",
        title: "The full answer",
        sections: [
          {
            id: "definition",
            heading: "What counts as an AI video ad",
            paras: [
              "There’s no official definition, and the phrase gets used loosely. In practice it means an ad where generative AI made part of the footage or sound, rather than just helping with the edit. Auto-captions and a color grade don’t make an ad “AI”. A generated presenter talking to camera about your blender does.",
              "Most AI video ads sit somewhere on a scale. At one end, real product photos are turned into short moving shots. In the middle, a generated presenter holds the product and talks about it in a generated voice. At the far end, every frame is generated, from the kitchen counter to the steam coming off the coffee.",
            ],
            table: {
              label: "The main kinds of AI video ad",
              columns: ["Kind", "What’s generated", "Good for"],
              rows: [
                ["Presenter ad", "A person talking to camera, filmed selfie-style", "Explaining a product the way a friend would, without claiming to be a customer"],
                ["Product demo", "Hands, a setting and the product doing its job", "Showing how something works in fifteen seconds"],
                ["Product hero", "Studio-style shots: splashes, frost, slow turns", "Drinks, beauty, food and anything that sells on looks"],
                ["Motion piece", "Graphics, type and an animated product", "Offers, launches and loud, short openers"],
                ["App ad", "A presenter beside real screen recordings", "Showing an app in use, with its real interface"],
              ],
            },
          },
          {
            id: "how-made",
            heading: "How an AI video ad gets made",
            paras: ["The generating is the quick part. Most of the work happens either side of it."],
            list: [
              "Research: what customers say in reviews, what competitors keep paying to run, and what has worked for you before.",
              "Angle and script: one reason to buy per ad, written the way a person would actually say it.",
              "Product reference: photos of the real product from every side, so the generated version matches it.",
              "Generation: presenter, scenes and shots, made as short clips and picked through for the good takes.",
              "Checking: labels, logos, colors, hands and on-screen text, compared frame by frame with the real thing.",
              "Edit: pacing, captions, music, sound and an end card, then exports in every shape the placements need.",
            ],
            after: "Skip the first two steps and you get a nicely made ad with nothing to say. Skip the checking and you get a bottle whose label changes halfway through.",
          },
          {
            id: "why-brands-use-them",
            heading: "Why brands use them",
            paras: [
              "The honest reason is volume. Paid social rewards brands that test a lot of ideas, because nobody can predict which reason to buy will land with which audience. A shoot gives you a handful of ads from one day on set. A good AI workflow can give you twenty versions of five ideas in a week, and change the opening of any of them in an afternoon.",
              "That changes what a test can look like. Instead of betting a quarter’s budget on one concept, you can put five angles in front of real buyers, see which one brings customers in at the right price, and only then spend more on it.",
              "Lower cost per ad matters too, but it’s a side effect. If AI ads were cheaper and taught you nothing, they’d be a bad deal.",
            ],
          },
          {
            id: "where-they-fall-short",
            heading: "Where they fall short",
            paras: ["AI video is good at a lot of things, and bad at a few that matter."],
            list: [
              "Real experience. A generated person has never used your product, so they can’t give a testimonial. In the US, the FTC’s rule on fake reviews and testimonials covers AI-generated ones by name.",
              "Touch and texture. If the sale depends on how a fabric falls or how a cream feels, real footage still wins.",
              "Fine detail. Small print, busy packaging and exact logos need careful checking, and sometimes real product shots cut in.",
              "Trust-heavy categories. Health, money and anything regulated need extra care with claims, whoever makes the ad.",
            ],
            link: { href: "/resources/ai-ugc-vs-creators", label: "Compare AI UGC with human creators" },
          },
          {
            id: "do-they-work",
            heading: "Do they work?",
            paras: [
              "Sometimes, and nobody can promise it for your product. An AI ad has the same jobs as any other ad: stop the scroll, hold attention, make someone want to click, then make them buy. How it was made matters less than whether the angle is right and the product on screen looks like the one that arrives in the post.",
              "The only fair test is your own account. Run AI ads against your current best and judge both on cost per customer, not views.",
            ],
            link: { href: "/resources/do-ai-video-ads-work", label: "Read what decides whether AI video ads sell" },
          },
          {
            id: "rules",
            heading: "The rules to know",
            paras: [
              "Making an ad with AI is allowed on the major platforms. Misleading people with it isn’t. TikTok asks advertisers to disclose ads with content that’s fully generated or significantly edited by AI. Meta adds an “AI info” label to some AI-made ads. Google added an AI label setting in July 2026. In the EU, the AI Act’s transparency rules have applied since 2 August 2026.",
            ],
            link: { href: "/resources/ai-ad-disclosure-rules", label: "Read the labeling rules, platform by platform" },
          },
          {
            id: "getting-started",
            heading: "How to start without wasting money",
            paras: ["If you’ve never run AI video ads, a small, well-planned test beats a big launch."],
            list: [
              "Pick one product with clear reasons to buy.",
              "Write down four or five angles, one sentence each.",
              "Make each angle in a few different ways, so a result tells you something.",
              "Give every ad enough spend to be judged, then cut, iterate or scale.",
            ],
            link: { href: "/resources/creative-testing-guide", label: "Read how to test ad creative" },
          },
        ],
      },
      { type: "cta", text: "Curious what AI video ads could look like for your product? Tell us what you sell and we’ll suggest five angles to test.", label: "Get five angles" },
      {
        type: "faq",
        title: "Questions about AI video ads",
        items: [
          { q: "What is an AI video ad?", a: "A paid video ad where some or all of the footage, presenter, voice or motion was made with generative AI. It runs like any other ad on Meta, TikTok or YouTube." },
          { q: "Are AI-generated ads allowed on Facebook, Instagram and TikTok?", a: "Yes, as long as they follow each platform’s ad policies. TikTok requires disclosure of ads with significantly AI-generated content, and Meta labels some AI-made ads itself. Misleading claims and fake testimonials aren’t allowed, however the ad was made." },
          { q: "What’s the difference between AI UGC and AI video ads?", a: "AI UGC is one kind of AI video ad: a generated presenter filmed selfie-style, like a creator video. AI video ads also include product demos, studio-style product shots and motion pieces." },
          { q: "Can AI make an ad with my real product in it?", a: "Yes, from good photos of the product. The result has to be checked against the real thing frame by frame, because generated video can drift on labels, logos and colors." },
          { q: "How long does it take to make an AI video ad?", a: "The generating takes hours. Research, scripting, checking and editing take longer. The first ads of a Lumivance sprint arrive 72 hours after the brief is agreed." },
          { q: "Do AI video ads replace creators and shoots?", a: "Not entirely. They’re best for testing ideas quickly. Testimonials, real results and products that sell on touch still need real people and real footage." },
        ],
      },
      sources("ftc", "tiktokAi", "metaGenAi", "googleAiLabels", "euArt50"),
      { type: "related", title: "Read next", items: ["ai-video-ads", "do-ai-video-ads-work", "ai-video-ads-cost"] },
    ],
  },

  // ─────────────────────────────────────────────────────────────── Cost
  {
    ...dated,
    slug: "ai-video-ads-cost",
    category: "Costs",
    topic: "What AI video ads cost",
    name: "How much AI video ads cost",
    summary: "Tool, freelancer, studio or shoot: what each way of buying AI video ads costs, and what it leaves out.",
    thumb: "blender-demo-3",
    keywords: ["AI video ads cost", "AI video ad pricing", "cost of AI-generated ads", "AI UGC ads cost", "AI video ad agency pricing"],
    meta: {
      title: "How much do AI video ads cost in 2026?",
      description:
        "AI video ads cost about $5 to $25 per video on a tool subscription, or a few hundred dollars per finished ad from a studio that plans and checks them. Compare tools, freelancers, studios and shoots.",
    },
    hero: {
      title: "How much do AI video ads cost?",
      lede: "From a few dollars to a few hundred per ad, depending on who does the work around the generating. Here’s what each option costs in 2026, and what the price leaves out.",
    },
    blocks: [
      {
        type: "answer",
        title: "The short answer",
        text: `On a tool subscription, an AI video works out at roughly $5 to $25, but you do the scripting, checking and editing yourself. A managed batch from a studio usually costs a few hundred dollars per finished ad, with strategy, checking and a test plan included; ours run from ${perAd(s80)} to ${perAd(s20)} per ad. A traditional shoot generally costs more per ad and gives you fewer versions to test.`,
        facts: [
          ["AI tool subscription", "About $5 to $25 per video, plus your team’s time"],
          ["Freelancer", "Quotes vary widely, so compare what each one includes"],
          ["Studio batch", `A Lumivance sprint: ${perAd(s80)} to ${perAd(s20)} per finished ad`],
          ["Traditional production", "About $42,000 average per project on Clutch, across all kinds of video"],
          ["Never included", "Ad spend, which you pay the platforms directly"],
        ],
      },
      {
        type: "article",
        title: "The full answer",
        sections: [
          {
            id: "four-ways",
            heading: "Four ways to buy AI video ads",
            paras: ["The price per video depends less on the AI than on how much of the work around it you’re paying someone else to do."],
            table: {
              label: "Ways to buy AI video ads",
              columns: ["Option", "What you pay for", "What you still do yourself"],
              rows: [
                ["AI tool, in-house", "A monthly subscription", "Strategy, scripts, generating, checking, editing and testing"],
                ["Freelancer", "Generating and editing, sometimes scripts", "Strategy, briefing, checking and the test plan"],
                ["Studio or agency", "Research, scripts, production, checking, edit, exports and a test plan", "Approving scripts, and running the ads or handing over access"],
                ["Traditional shoot", "Crew, talent, location and edit", "Usually the test plan, and briefing the next shoot"],
              ],
            },
          },
          {
            id: "tool-cost",
            heading: "Doing it yourself with a tool",
            paras: [
              "AI UGC and video tools typically work out at about $5 to $25 per finished video on a monthly plan. That’s the cheapest way to get a video file. Whether it’s the cheapest way to get an ad that sells depends on who does the rest.",
              "The generating takes minutes. The hours go elsewhere: deciding what to say, writing a script someone would actually say out loud, regenerating until the product looks right, cutting it together and exporting every size. If someone on your team is good at all of that and has the time, a tool is excellent value. If not, the cost just moves from the invoice to their week.",
            ],
          },
          {
            id: "freelancer-cost",
            heading: "Hiring a freelancer",
            paras: [
              "Freelance rates for AI video are all over the place, and the published price guides haven’t caught up, so we won’t pretend there’s a standard figure. When you compare quotes, compare what’s in them: how many finished ads, how many rounds of changes, whether scripts are included, which sizes you get, and who holds the rights to run them as paid ads.",
              "What a freelancer rarely includes is the test itself: which ads run against which, what each one gets to spend, and how you’ll decide what won. Without that, twenty ads are just twenty files.",
            ],
          },
          {
            id: "studio-cost",
            heading: "Using a studio or agency",
            paras: [
              "A managed batch costs more per ad than a tool and, usually, less per ad than a shoot. You’re paying for the thinking and the checking as much as the production. Here’s how our sprints are priced, as one example of how a batch is put together.",
            ],
            table: {
              label: "Lumivance sprint prices",
              columns: ["Sprint", "Finished ads", "Maximum length", "Price", "Per ad"],
              rows: sprint.tiers.map((t) => [t.name, String(t.ads), t.maxLength, usd(t.price), perAd(t)]),
            },
            after: "Research, angles, scripts you approve, production, checking, captions, music, every shape for Meta, TikTok and YouTube, and a test plan are included. Ad spend isn’t.",
          },
          {
            id: "shoot-cost",
            heading: "How a traditional shoot compares",
            paras: [
              "Clutch, which collects client reviews of production companies, puts the average video production project on its platform at about $42,000 in its 2026 pricing guide, with most agencies charging $100 to $149 an hour. It also notes that most projects come in under $10,000. Those figures cover every kind of video, from explainers to brand films, so treat them as a sense of scale rather than a quote.",
              "The bigger difference is what the money buys. A shoot day produces a few polished ads from one idea. That’s the right buy when the idea is proven and the ad needs real people, real places or the real product in someone’s hands. It’s an expensive way to find out which idea works.",
            ],
            link: { href: "/resources/ai-video-ads-vs-traditional-production", label: "Compare AI video ads with a traditional shoot" },
          },
          {
            id: "hidden-costs",
            heading: "The costs nobody puts on the quote",
            paras: ["Whichever route you take, budget for these as well:"],
            list: [
              "Ad spend to test with. Every ad needs enough budget to be judged. A common rule of thumb is two to three times your target cost per customer, per ad.",
              "Fixes. Generated product shots that drift from the real packaging have to be redone, and the odd ad gets rejected in review.",
              "Labels and approvals. Someone has to check claims, disclosures and platform rules before launch.",
              "Your own time. Briefing, feedback and approvals take a few hours per batch, whoever makes the ads.",
            ],
          },
          {
            id: "worked-example",
            heading: "A worked budget for a first test",
            paras: [
              "Say you sell a $45 skincare product and want to find out which of five reasons to buy works best. You want twenty ads, and you’re aiming for a $30 cost per customer. This is an illustration, and your numbers will differ.",
            ],
            table: {
              label: "Worked budget for a twenty-ad first test",
              columns: ["Line", "Calculation", "Cost"],
              rows: [
                ["Twenty finished ads", `One ${s20.name}`, usd(s20.price)],
                ["Test spend", "20 ads × $30 × 2 to 3", "$1,200 to $1,800"],
                ["Total", "Ads plus test spend", `${usd(s20.price + 1200)} to ${usd(s20.price + 1800)}`],
              ],
            },
            after: "If one angle wins, the next batch builds on it instead of starting from zero, and that’s where a test pays for itself.",
            link: { href: "/resources/how-many-ads-to-test-on-meta", label: "Work out how many ads your budget can test" },
          },
        ],
      },
      { type: "cta", text: "Want a straight number for your product? Tell us what you sell and what you spend, and we’ll say which sprint fits, or whether a tool would do.", label: "Get a recommendation" },
      {
        type: "faq",
        title: "Questions about AI video ad costs",
        items: [
          { q: "How much does one AI video ad cost?", a: `On a tool subscription, roughly $5 to $25 per video before your own time. From a studio, a few hundred dollars per finished, checked ad is typical. Ours cost ${perAd(s80)} to ${perAd(s20)} each, depending on batch size.` },
          { q: "Are AI video ads cheaper than UGC creators?", a: "Per video, usually. Mid-level creators often charge $150 to $300 before usage rights. But creators bring real experience, which AI can’t, so the two don’t always do the same job." },
          { q: "Why do AI video ad prices vary so much?", a: "Because the AI is the cheap part. The price mostly reflects how much strategy, scripting, checking and editing comes with it, and whether there’s a test plan." },
          { q: "Does the price include ad spend?", a: "Not from us, and rarely from anyone. Ad spend is paid directly to Meta, TikTok or Google." },
          { q: "Who owns AI-generated ads?", a: "Check the contract and the tool’s terms. You want the finished files and the right to run them as paid ads, in writing. Copyright in fully AI-generated material is unsettled in many countries, so the contract matters more than usual." },
          { q: "What’s the cheapest way to start?", a: "If you have someone with the time and a good eye, a tool subscription. If you don’t, a small batch with a test plan usually costs less than learning by trial and error on ad spend." },
        ],
      },
      sources("clutch", "insense", "spark", "inbeat", "convrt"),
      { type: "related", title: "Read next", items: ["ugc-video-ads-cost", "ai-video-ads-vs-traditional-production", "creative-testing-sprint"] },
    ],
  },

  // ─────────────────────────────────────────────────────────────── Choosing an agency
  {
    ...dated,
    slug: "how-to-choose-an-ai-video-ad-agency",
    category: "Hiring an agency",
    topic: "Choosing an AI video ad agency",
    name: "How to choose an AI video ad agency",
    summary: "The questions to ask before you hire anyone to make AI video ads, and the answers to walk away from.",
    thumb: "lookbook-3",
    keywords: ["AI video ad agency", "AI ad agency", "AI UGC agency", "best AI video ad agency", "hire an AI video ad agency", "AI creative agency for brands"],
    meta: {
      title: "How to choose an AI video ad agency: 14 questions to ask",
      description:
        "Before you hire an AI video ad agency, ask how they test, who checks your product, what their AI presenters may say, who owns your ad accounts and how they handle AI labels. The answers to look for, and the red flags.",
    },
    hero: {
      title: "How to choose an AI video ad agency",
      lede: "Plenty of studios can generate a good-looking video now. Far fewer can tell you which of twenty ads will sell, or why. These are the questions that separate them, including the ones we’d want you to ask us.",
    },
    blocks: [
      {
        type: "answer",
        title: "The short answer",
        text: "Choose an AI video ad agency on how it decides what to make and how it judges the results, not on how polished its showreel looks. Ask how they test, how they check your product is accurate, what their AI presenters are allowed to say, whose ad accounts the ads run in, and how they handle platform labels. Be wary of anyone who promises results, or shows client work they can’t name.",
        facts: [
          ["The question that matters most", "How will we know which ads worked, and why?"],
          ["Check the work", "Is it labeled as client work or spec, and can they name the client?"],
          ["Check the process", "Research, angles and a test plan before any production"],
          ["Check the rules", "No fake testimonials, and a clear answer on AI labels"],
          ["Red flag", "Guaranteed results before anyone has seen your ad account"],
        ],
      },
      {
        type: "article",
        title: "The full answer",
        sections: [
          {
            id: "what-you-are-buying",
            heading: "What you’re actually buying",
            paras: [
              "The software is the same for everyone. Any agency can sign up for the same video models you can, so the generating isn’t what you’re paying for. You’re paying for judgment: which reasons to buy are worth testing, how to say them in the first two seconds, whether the product on screen matches the one in the box, and how to read the results without fooling yourself.",
              "That’s why a showreel only tells you half the story. It proves an agency can make something that looks good. It doesn’t prove they can make something that sells, and those are different skills.",
            ],
          },
          {
            id: "questions-work",
            heading: "Questions about their work",
            list: [
              "Which of these ads were made for paying clients, and which are spec? A good agency labels this without being asked. Every ad on our site says which it is.",
              "Can you name the clients? If the logos on the site can’t be named on a call, ask why.",
              "What happened when the ads ran? If they share results, ask what they were measured against. If they don’t have any yet, an honest “not yet” beats a vague claim.",
            ],
          },
          {
            id: "questions-process",
            heading: "Questions about how they work",
            list: [
              "What happens before production? Look for research into your reviews, your competitors’ ads and your past results, then a short list of angles.",
              "How is a batch planned? Twenty unrelated ads teach you very little. Twenty ads planned as a test, with angles crossed with formats, tell you what to say and how to say it.",
              "Who checks the product? Ask how they make sure labels, logos, colors and packaging match the real thing, and what happens when they don’t.",
              "How many rounds of changes do we get, and on what? Scripts are cheap to change. Finished ads aren’t.",
            ],
          },
          {
            id: "questions-rules",
            heading: "Questions about the rules",
            list: [
              "What are your AI presenters allowed to say? The right answer: they can demonstrate and explain, but never claim to have used the product. In the US, the FTC’s rule on fake reviews and testimonials covers AI-generated ones.",
              "How do you handle AI labels? TikTok requires disclosure of significantly AI-generated ads, Google has an AI label setting, and the EU AI Act asks for disclosure of realistic generated video. They should know which applies to your ads.",
              "Where do the faces and voices come from? Generated presenters should be original rather than lookalikes of real people, and a cloned voice needs that person’s written consent.",
            ],
          },
          {
            id: "questions-money",
            heading: "Questions about money and ownership",
            list: [
              "Whose ad accounts do the ads run in? It should be yours, so the data stays with you.",
              "Can we run the finished ads anywhere, for as long as we like? Get the answer in writing.",
              "Is ad spend separate? It should be, paid straight to the platforms.",
              "Can we leave whenever we want, and take everything with us?",
            ],
          },
          {
            id: "red-flags",
            heading: "Answers to walk away from",
            list: [
              "“We guarantee a return on ad spend of…” No one can promise that before seeing your account, product and margins.",
              "“Our AI creators share their honest experience.” A generated person has no experience to share.",
              "“We run everything from our own ad account.” You want the data in yours.",
              "“Testing? We just make the ads.” Then you’ll be the one working out which ones worked.",
              "A portfolio full of famous logos, and no way to check any of them.",
            ],
          },
          {
            id: "our-answers",
            heading: "Our answers, for the record",
            paras: [
              "Since we wrote the questions, here are our answers. Every ad on our site says whether it’s client work or spec. Each sprint starts with research and five angles, and the ads are planned as one test, with a written plan. Our presenters demonstrate and explain; they never pose as customers. We work inside ad accounts you own, the ad spend goes straight to the platforms, and you can leave whenever you like and take everything with you.",
              "We don’t promise results. We promise a fair test and a straight read of it.",
            ],
            link: { href: "/how-we-use-ai", label: "Read how we use AI, and the lines we don’t cross" },
          },
        ],
      },
      { type: "cta", text: "Shortlisting agencies? Send us your product and current ads, and we’ll answer every one of these questions for your account.", label: "Ask us the questions" },
      {
        type: "faq",
        title: "Questions about hiring an AI video ad agency",
        items: [
          { q: "What does an AI video ad agency do?", a: "It plans, makes and often runs video ads made with generative AI: research, angles, scripts, generated presenters and product shots, editing, sizing for each platform and, in the better ones, a test plan that shows which ads sell." },
          { q: "How much does an AI video ad agency cost?", a: "Usually a price per batch of ads, or a monthly retainer. Expect a few hundred dollars per finished ad from a studio that includes strategy and testing. Ad spend is always separate." },
          { q: "Is an agency better than using AI tools myself?", a: "Not always. If you have someone with the time and skill to script, check and test, a tool may be enough. An agency makes sense when you want the thinking and checking done for you." },
          { q: "How do I check an agency’s work is real?", a: "Ask which ads were made for paying clients, ask them to name those clients, and ask what the ads were measured against. Honest agencies label spec work as spec." },
          { q: "What should an AI video ad agency never do?", a: "Present a generated person as a real customer, make claims you can’t support, promise results, or keep your ad data in its own accounts." },
          { q: "How long should a first project take?", a: "A first batch takes days to make, then a few weeks of testing before you judge it. Anyone who calls a winner after two days of spend is guessing." },
        ],
      },
      sources("ftc", "tiktokAi", "googleAiSetting", "euArt50"),
      { type: "related", title: "Read next", items: ["how-to-brief-ai-video-ads", "ai-video-ads-cost", "ai"] },
    ],
  },

  // ─────────────────────────────────────────────────────────────── Do they work
  {
    ...dated,
    slug: "do-ai-video-ads-work",
    category: "AI video ads",
    topic: "Do AI video ads work?",
    name: "Do AI video ads work?",
    summary: "What decides whether an AI-made ad sells, and how to find out for your own product.",
    thumb: "emera-a-3",
    keywords: ["do AI video ads work", "AI-generated ads performance", "AI UGC ads results", "are AI ads effective", "AI video ads conversion"],
    meta: {
      title: "Do AI video ads work? What decides whether they sell",
      description:
        "AI video ads work when the angle is right, the product looks real and the test is fair. Why some AI ads sell and most don’t, whether viewers can tell, and how to test them against your current ads.",
    },
    hero: {
      title: "Do AI video ads work?",
      lede: "They can. Plenty don’t. The difference usually has little to do with the AI and a lot to do with what the ad says and how it’s tested.",
    },
    blocks: [
      {
        type: "answer",
        title: "The short answer",
        text: "AI video ads work when they’d work as ordinary ads: a clear reason to buy, an opening that stops the scroll, a product that looks exactly like the real one, and honest claims. They tend to fail when they’re generic, get the product wrong or pretend a generated person is a customer. The only reliable way to know is to test them against your current ads and judge both on cost per customer.",
        facts: [
          ["They work best for", "Testing many angles and openings quickly"],
          ["They struggle with", "Testimonials, texture and products that sell on touch"],
          ["What viewers punish", "Generic scripts, wrong products and fake experiences"],
          ["How to judge them", "Cost per customer, not views or likes"],
          ["A fair test", "Same budget and audience, against your current best ad"],
        ],
      },
      {
        type: "article",
        title: "The full answer",
        sections: [
          {
            id: "the-honest-answer",
            heading: "The honest answer",
            paras: [
              "Nobody can tell you AI video ads will work for your product, us included. Anyone quoting a blanket uplift is selling something. What we can say is that an ad doesn’t sell because of how it was made. It sells because someone saw it, understood why they’d want the thing, and believed it.",
              "AI changes the cost and speed of making ads. It doesn’t change why people buy.",
            ],
          },
          {
            id: "why-some-work",
            heading: "Why some AI ads sell",
            paras: ["The AI ads that hold up in testing tend to have a few things in common:"],
            list: [
              "One clear reason to buy, said in the first two seconds.",
              "A script written the way people talk, not the way a brochure reads.",
              "The real product, accurate down to the label, doing its job on screen.",
              "A format that suits the platform: vertical, captioned and made to work with the sound off.",
              "Enough versions that the test found the good one, instead of hoping the first one was it.",
            ],
            after: "That last point is the real advantage. Most ads don’t win. AI makes it affordable to try enough of them that one does.",
          },
          {
            id: "why-most-fail",
            heading: "Why most fail",
            list: [
              "They’re generic. A smiling presenter saying “this changed my routine” could be selling anything, so they sell nothing.",
              "The product is wrong. A label that shifts, a lid that changes color, a bottle that’s the wrong size. Viewers notice, and so do the people who buy and get something different.",
              "They fake experience. A generated person claiming results is a fake testimonial. In the US it falls foul of the FTC’s rule, and it tends to read as false anyway.",
              "They’re judged on the wrong number. Cheap views and long watch times feel like wins. Cost per customer is the verdict.",
            ],
          },
          {
            id: "can-people-tell",
            heading: "Will people know it’s AI?",
            paras: [
              "Some will. Faces and voices have improved enormously, but hands, product handling and small text can still give generated video away, and the platforms are adding labels that tell viewers outright. Plan on viewers knowing.",
              "That’s less of a problem than it sounds. People don’t mind an ad being an ad. They mind being lied to. An AI presenter who demonstrates a product and says what it does is just a presenter. One who pretends to be a customer is where the trust goes.",
            ],
          },
          {
            id: "how-to-test",
            heading: "How to find out for your product",
            paras: ["Run a test that can actually give you an answer:"],
            list: [
              "Pick four or five angles and make each in more than one format, so you learn what to say and how to say it.",
              "Run the AI ads against your current best ad, in the same campaign set-up, to the same audience.",
              "Give each ad enough spend to be judged, often two to three times your target cost per customer.",
              "Read the numbers in order: hook rate, hold rate, click-through, then cost per customer.",
              "Name every file by angle and format, so the result still makes sense in six weeks.",
            ],
            link: { href: "/resources/how-many-ads-to-test-on-meta", label: "Work out how many ads your budget can test" },
          },
          {
            id: "when-not",
            heading: "When we’d tell you not to use AI",
            paras: [
              "If your product sells on how it feels in the hand, if your best ads are customer testimonials, or if your category runs on trust in real people, start with real footage. AI might still help with openings and variations, but it shouldn’t carry the ad.",
              "And if you only have the budget to test two or three ads, the speed advantage hardly matters. Spend it on the strongest idea you have, however it gets made.",
            ],
          },
        ],
      },
      { type: "cta", text: "Want to know whether AI would work for your product? Send it over and we’ll tell you straight, even if the answer is no.", label: "Ask us" },
      {
        type: "faq",
        title: "Questions about AI ad performance",
        items: [
          { q: "Do AI-generated ads perform worse than real ones?", a: "Not as a rule. Badly made ones do, and so do badly made real ones. Test them side by side in your own account and judge both on cost per customer." },
          { q: "What do AI video ads work best for?", a: "Explaining or demonstrating a product, trying many openings and angles quickly, and replacing tired ads before they wear out." },
          { q: "Why do my AI ads get views but no sales?", a: "Usually the angle is vague, the offer is unclear, or the product doesn’t look like the real one. Views mean the opening worked; sales need everything after it to work too." },
          { q: "Do people trust AI ads?", a: "They trust honest ones more. Avoid fake testimonials, label ads where the platform requires it, and keep claims to what you can prove." },
          { q: "How long should I test AI video ads before deciding?", a: "Long enough for each ad to spend two to three times your target cost per customer. For most budgets that’s somewhere between one and three weeks." },
        ],
      },
      sources("ftc", "tiktokBest", "metaMobile"),
      { type: "related", title: "Read next", items: ["what-are-ai-video-ads", "ai-ugc-vs-creators", "creative-testing-guide"] },
    ],
  },

  // ─────────────────────────────────────────────────────────────── Labeling rules
  {
    ...dated,
    slug: "ai-ad-disclosure-rules",
    category: "Rules",
    topic: "Labeling AI ads",
    name: "AI ad labeling rules",
    summary: "What Meta, TikTok, Google and the EU expect when an ad is made with AI, as of November 2026.",
    thumb: "emera-c-3",
    keywords: ["AI ad disclosure", "label AI-generated ads", "Meta AI info label", "TikTok AI-generated content ads", "Google Ads AI label", "EU AI Act deepfake disclosure"],
    meta: {
      title: "Do you have to label AI video ads? Meta, TikTok, Google and EU rules",
      description:
        "TikTok requires advertisers to disclose significantly AI-generated ads. Meta labels some AI ads itself. Google added an AI label setting in July 2026, and the EU AI Act’s disclosure rules apply from 2 August 2026. What each means for brands.",
    },
    hero: {
      title: "Do you have to label AI video ads?",
      lede: "Often, and the rules depend on where the ad runs and who sees it. Here’s where each platform and the EU stood in November 2026, in plain English.",
    },
    blocks: [
      {
        type: "answer",
        title: "The short answer",
        text: "Often, yes. TikTok requires advertisers to disclose ads with content that’s fully generated or significantly edited by AI. Google lets advertisers label AI assets and shows labels on ads aimed at places with AI laws, including the EU. Meta adds an “AI info” label to some AI-made ads itself. In the EU, the AI Act has required realistic AI-generated video to be disclosed since 2 August 2026. Labels are the easy part; never presenting a generated person as a real customer matters more.",
        facts: [
          ["TikTok", "Disclose ads with fully generated or significantly AI-edited content"],
          ["Meta", "Labels some AI-made ads “AI info”, shown under “About this ad”"],
          ["Google and YouTube", "An AI label setting since July 2026, with on-ad labels in some regions"],
          ["EU AI Act", "Disclosure of realistic AI-generated video, from 2 August 2026"],
          ["Everywhere", "No fake testimonials, however the ad was made"],
        ],
      },
      {
        type: "article",
        title: "The full answer",
        sections: [
          {
            id: "why-changing",
            heading: "Why this keeps changing",
            paras: [
              "Two years ago most of this didn’t exist. Now every major ad platform has some way of marking AI content, and Google names the EU, India and New York as places whose laws require disclosures on some AI-made ads. The rules don’t line up neatly and they keep moving, so check the current version before every launch. This page reflects what was published as of the date at the top.",
            ],
          },
          {
            id: "tiktok",
            heading: "TikTok",
            paras: [
              "TikTok’s ad policy requires advertisers to disclose ads containing images, video or audio that are fully generated or significantly edited with AI, and Ads Manager has a disclaimer setting for it. Ads that should have been disclosed and weren’t can be rejected, or restricted once they’re live.",
              "In practice: if a generated presenter appears, or the scenes are generated, turn the disclosure on. TikTok’s line is “significantly” edited, so routine work like captions, color and trims shouldn’t count. If you’re unsure, disclose.",
            ],
          },
          {
            id: "meta",
            heading: "Meta: Facebook and Instagram",
            paras: [
              "Meta labels ads itself. Ads made or significantly edited with Meta’s own generative AI features get an “AI info” label, and Meta has said it is also detecting ads made with other companies’ AI tools through industry-standard signals, the information many AI tools now attach to the files they make. The label sits under “About this ad”, in the menu on every ad.",
              "Meta has been changing these tools often, so look for any AI disclosure setting in Ads Manager when you upload. Its advertising standards apply either way: no misleading claims, and no generated people presented as real customers. Ads about politics, elections and social issues have stricter disclosure rules of their own.",
            ],
          },
          {
            id: "google",
            heading: "Google and YouTube",
            paras: [
              "In July 2026 Google added an AI label setting to Google Ads. Advertisers can mark assets as AI-generated or edited, and those ads then show a disclosure in the “How this ad was made” section of My Ad Center, which viewers reach from the menu on ads across Search, YouTube and Discover. For campaigns aimed at the EU, India, New York, California, South Korea and Vietnam, Google also shows a visible label on the ad.",
              "Google now allows text or visual AI labels inside image and video creatives without breaking its rules on text overlays and watermarks, and it may label some assets made with its own AI tools automatically. Election ads have their own rule: synthetic or altered content must be disclosed with a checkbox in the campaign settings.",
              "Google is clear that using its label setting doesn’t, on its own, mean you comply with any particular law.",
            ],
          },
          {
            id: "eu",
            heading: "The EU AI Act",
            paras: [
              "Article 50 of the EU AI Act has applied since 2 August 2026. The part that matters for advertisers says that anyone using AI to generate or manipulate image, audio or video content that counts as a “deep fake” must disclose that it has been artificially generated or manipulated.",
              "The Act defines a deep fake as AI-made content that resembles real people, objects, places or events and would falsely appear authentic. A realistic generated presenter in a realistic kitchen can fall inside that, so for ads shown in the EU, assume realistic AI video needs a clear label. Where the work is obviously creative or fictional, the Act asks only for a disclosure that doesn’t spoil it.",
              "None of this is legal advice. If the EU is a big market for you, get your counsel’s view on your specific ads.",
            ],
          },
          {
            id: "testimonials",
            heading: "The rule that matters more than any label",
            paras: [
              "A label tells people how an ad was made. It doesn’t make a false claim true. A generated presenter saying “I’ve used this for a month and my skin has never been better” is a fake testimonial whether or not there’s an AI label in the corner, and in the US the FTC’s rule on fake reviews and testimonials covers exactly that.",
              "The safe pattern is simple. AI presenters can demonstrate and explain; they don’t claim experiences they never had. Genuine reviews can appear as on-screen quotes, credited and used with permission.",
            ],
            link: { href: "/resources/ai-presenters", label: "Read what an AI presenter can and can’t say" },
          },
          {
            id: "checklist",
            heading: "A checklist before launch",
            list: [
              "Does the ad contain generated people, voices or scenes? Turn on TikTok’s AI disclosure and Google’s AI label setting.",
              "Will it be shown in the EU? Put a clear label in the creative, since the AI Act asks for disclosure of realistic AI video.",
              "Does anyone on screen claim to have used the product? Rewrite it as a demonstration, or use a real customer.",
              "Is every claim about the product true, and can you prove it?",
              "Have you read each platform’s current policy page this month?",
            ],
          },
        ],
      },
      { type: "cta", text: "Not sure which of your ads need a label? Send them over and we’ll tell you what we’d do.", label: "Ask us" },
      {
        type: "faq",
        title: "Questions about labeling AI ads",
        items: [
          { q: "Do I have to label AI-generated ads on TikTok?", a: "Yes, if the ad contains images, video or audio that are fully generated or significantly edited by AI. TikTok can reject or restrict ads that should have been disclosed." },
          { q: "Does Meta label AI ads?", a: "Meta adds an “AI info” label to ads made or significantly edited with its own generative AI tools, and says it detects ads made with other AI tools through industry-standard signals. The label appears under “About this ad”." },
          { q: "Does Google require AI labels on ads?", a: "Election ads with synthetic content must be disclosed. For other ads, Google added an AI label setting in July 2026 and shows on-ad labels for campaigns in regions whose laws require them, including the EU." },
          { q: "Does the EU AI Act apply to ads?", a: "Its transparency rules cover AI-generated video that counts as a deep fake, which can include realistic AI ads shown in the EU. They have applied since 2 August 2026." },
          { q: "Will an AI label hurt my ad’s performance?", a: "There’s no reliable public data either way yet. Test labeled ads like any others and judge them on cost per customer." },
          { q: "Does a label make an AI testimonial acceptable?", a: "No. A generated person claiming to have used your product is a fake testimonial, label or no label." },
        ],
      },
      sources("tiktokAi", "tiktokLabel", "metaGenAi", "googleAiLabels", "googleAiSetting", "euArt50", "ftc"),
      { type: "related", title: "Read next", items: ["ai-presenters", "ai-ugc-vs-creators", "ai"] },
    ],
  },

  // ─────────────────────────────────────────────────────────────── Briefing
  {
    ...dated,
    slug: "how-to-brief-ai-video-ads",
    category: "Hiring an agency",
    topic: "Briefing AI video ads",
    name: "How to brief AI video ads",
    summary: "What to send before anyone makes AI video ads for you, with a brief you can copy.",
    thumb: "gold-cuff-2",
    keywords: ["AI video ad brief", "how to brief AI ads", "video ad creative brief template", "AI UGC brief", "brief an AI video agency"],
    meta: {
      title: "How to brief AI video ads (with a template you can copy)",
      description:
        "A good AI video ad brief covers the customer, four or five reasons to buy, the claims you can prove, photos of the real product, brand rules, platforms and how success will be judged. What to include, what to leave out, and a template.",
    },
    hero: {
      title: "How to brief AI video ads",
      lede: "AI makes the making fast, which means a vague brief turns into twenty vague ads in record time. Here’s what to send, and a brief you can copy.",
    },
    blocks: [
      {
        type: "answer",
        title: "The short answer",
        text: "Brief AI video ads the way you’d brief any performance ad, plus one thing: plenty of reference for the real product. Send who the customer is, four or five reasons they buy, the claims you can prove, photos of the product from every side, your brand rules, the platforms you’ll run on, and the number you’ll judge the ads by. Leave the scripts to the writers, but say what must never be said.",
        facts: [
          ["Most useful input", "Customer reviews, in the customers’ own words"],
          ["Product reference", "Photos from every side in even light, plus packaging"],
          ["Claims", "Only what you can prove, with the proof attached"],
          ["Success measure", "Usually cost per customer, agreed up front"],
          ["Leave out", "Ten competing messages, or a script for every ad"],
        ],
      },
      {
        type: "article",
        title: "The full answer",
        sections: [
          {
            id: "why-it-matters",
            heading: "Why the brief matters more with AI",
            paras: [
              "On a shoot, a weak brief gets rescued somewhere along the way. The director asks questions, the talent improvises, the editor finds something. AI production is quicker and more literal. It makes what it’s told, and it makes it twenty times.",
              "The good news is that a brief for AI video ads isn’t longer than any other. It just has to be specific in the places that matter.",
            ],
          },
          {
            id: "customer",
            heading: "1. The customer, in their own words",
            paras: [
              "Skip the persona with a stock-photo name. What helps is what real customers say: reviews, support emails, survey answers, the comments under your posts. A line like “I stopped needing a second coat” is worth more than a page of brand positioning, because it’s an angle someone has already bought into.",
              "Paste in twenty or thirty real reviews, good and bad. The complaints matter too. They show what people worried about before they bought.",
            ],
          },
          {
            id: "angles",
            heading: "2. Four or five reasons to buy",
            paras: [
              "Write each one as a single sentence from the customer’s side: it saves ten minutes in the morning, it’s safe for sensitive skin, it replaces three bottles in the cupboard. If you aren’t sure which is strongest, good. That’s what the test is for.",
              "Resist sending ten. Five angles made four ways each is a test. Ten angles made twice each is noise.",
            ],
          },
          {
            id: "claims",
            heading: "3. The claims you can prove",
            paras: [
              "List every claim the ads may make, with where the proof lives: a lab test, a certification, a published guarantee. Then list the ones they can’t make: no medical claims, no “best in the world”, no before-and-after shots unless you have real ones.",
              "This matters more with AI, because a generated presenter can’t speak from experience. Everything they say has to be true about the product, not about them.",
            ],
          },
          {
            id: "product",
            heading: "4. Reference for the real product",
            paras: ["Generated video drifts. Labels blur, lids change color, a 250ml bottle quietly grows. The fix is reference, and plenty of it:"],
            list: [
              "Photos of the product from every side, in even light, on a plain background.",
              "Close-ups of the label, logo and any text that has to be legible.",
              "The packaging, open and closed, if unboxing is part of the story.",
              "The product in use, on skin, on a counter or in a hand, so the scale comes out right.",
              "For apps, screen recordings of the real interface, never mock-ups.",
            ],
            link: { href: "/resources/ai-product-video-accuracy", label: "Read how to keep your product accurate in AI video" },
          },
          {
            id: "brand",
            heading: "5. Brand rules, briefly",
            paras: [
              "Logo files, fonts, colors and the words you never use. Add a couple of ads you love and a couple you can’t stand, with a line on why. That tells a creative team more about your taste than a forty-page guideline.",
              "Say what the presenters should feel like, too: age, style, setting, tone. “Someone who looks like they actually cook” is a useful brief.",
            ],
          },
          {
            id: "platforms-success",
            heading: "6. Where it runs and how you’ll judge it",
            paras: [
              "Name the platforms and placements: Reels, Stories, TikTok, Shorts, YouTube in-stream. That decides the shapes, the length and where text can safely sit.",
              "Then agree the number. For most brands it’s cost per customer, or cost per install for apps, with a target. Agreeing it before production stops anyone declaring a winner on views.",
            ],
          },
          {
            id: "template",
            heading: "A brief you can copy",
            paras: ["Copy this into a document and fill it in. Most brands can do it in an hour, and the reviews and photos can be links."],
            table: {
              label: "AI video ad brief template",
              columns: ["Section", "What to write"],
              rows: [
                ["Product", "What it is, the price, where it’s sold, and the offer if there is one"],
                ["Customer", "Who buys it, with 20 to 30 real reviews pasted in"],
                ["Reasons to buy", "Four or five, one sentence each, from the customer’s side"],
                ["Allowed claims", "Each claim, with its proof"],
                ["Banned claims", "What the ads must never say or imply"],
                ["Product reference", "Photos from every side, labels, packaging and the product in use"],
                ["Brand", "Logo, fonts, colors, words to avoid, two ads you like and two you don’t"],
                ["Presenters", "Who they should feel like, and where they are"],
                ["Platforms", "Where the ads will run, and the placements"],
                ["Success", "The number you’ll judge by, and the target"],
                ["Budget", "Monthly ad spend, so the test can be sized to it"],
                ["Approvals", "Who signs off scripts and finished ads, and how quickly"],
              ],
            },
          },
        ],
      },
      { type: "cta", text: "Got a brief half written? Send what you have and we’ll tell you what’s missing.", label: "Send your brief" },
      {
        type: "faq",
        title: "Questions about briefing",
        items: [
          { q: "What should a video ad brief include?", a: "The product, the customer, four or five reasons to buy, the claims you can prove, product reference, brand rules, platforms, and the number you’ll judge success by." },
          { q: "Should I write the scripts myself?", a: "Usually not. Give the angles and the rules, and let the writers draft scripts for you to approve. You’ll get more variety and still have the final say." },
          { q: "What product photos do AI video ads need?", a: "Clear photos from every side in even light, close-ups of the label and logo, the packaging, and a shot of the product in use so the scale is right." },
          { q: "How long should a brief be?", a: "Two or three pages is plenty. Reviews, photos and brand files can be links." },
          { q: "What’s the most common briefing mistake?", a: "Too many messages. Pick four or five reasons to buy and let the test find the best one." },
        ],
      },
      { type: "related", title: "Read next", items: ["how-to-choose-an-ai-video-ad-agency", "ai-product-video-accuracy", "creative-testing-sprint"] },
    ],
  },

  // ─────────────────────────────────────────────────────────────── E-commerce
  {
    ...dated,
    slug: "ai-video-ads-for-ecommerce",
    category: "AI video ads",
    topic: "AI video ads for online shops",
    name: "AI video ads for e-commerce brands",
    summary: "The six AI video ad formats online shops should test first, and which products suit each.",
    thumb: "bag-unboxing-4",
    keywords: ["AI video ads for ecommerce", "AI product video ads", "ecommerce video ads", "AI ads for Shopify brands", "AI UGC for ecommerce", "product demo video ads"],
    meta: {
      title: "AI video ads for e-commerce: six formats to test first",
      description:
        "The AI video ad formats that suit online shops: product demos, unboxings, problem and solution, comparisons, product hero shots and offer ads. Which products suit each, and how to test them.",
    },
    hero: {
      title: "AI video ads for e-commerce brands",
      lede: "Online shops have one big advantage with AI video: the product is right there to show. These are the six formats we’d test first, and the products that suit each one.",
    },
    blocks: [
      {
        type: "answer",
        title: "The short answer",
        text: "For e-commerce brands, the AI video ads worth testing first are product demos, unboxings, problem and solution ads, side-by-side comparisons, product hero shots and offer ads. Each shows the real product doing something specific. Make each format around a few different reasons to buy, run them as one test, and keep the ones that bring customers in at your target cost.",
        facts: [
          ["Best first format", "A product demo: the product doing its job in fifteen seconds"],
          ["For products that sell on looks", "Product hero shots: splashes, frost, slow turns"],
          ["For new customers", "Problem and solution, in the customer’s words"],
          ["For sales and launches", "Offer ads with one clear deal"],
          ["The non-negotiable", "The product on screen matches the one that ships"],
        ],
      },
      {
        type: "article",
        title: "The full answer",
        sections: [
          {
            id: "why-ecommerce",
            heading: "Why e-commerce suits AI video",
            paras: [
              "Most online shops sell physical things with a clear job. A blender blends, a bag carries, a serum goes on before moisturizer. That’s easy to show and quick to understand in a feed, which is exactly what short video ads need.",
              "The other reason is range. A shop with forty products and three seasonal offers needs far more ads than one shoot a quarter can produce. AI makes it realistic to have fresh ads for more of the catalog, more of the time.",
            ],
          },
          {
            id: "demo",
            heading: "1. The product demo",
            paras: [
              "The product doing its job, explained as it goes: a blender crushing ice, a cordless scrubber getting grout clean, a phone stand holding a phone at just the right angle. Fifteen seconds is usually plenty.",
              "Suits kitchen, home, gadgets, tools and anything that does something visible.",
            ],
          },
          {
            id: "unboxing",
            heading: "2. The unboxing",
            paras: [
              "Box to first use, filmed selfie-style. It answers the questions people have before they buy: what arrives, how big it is, how hard it is to set up. It works best when the packaging is part of the appeal, or when assembly is the worry.",
              "Suits fitness equipment, accessories, gifts and subscription boxes.",
            ],
          },
          {
            id: "problem-solution",
            heading: "3. Problem and solution",
            paras: [
              "Open on the problem, in the customer’s words, then show the product fixing it. The words matter more than the visuals here, so lift them straight from reviews. “My coffee was always cold by the time I sat down” beats anything a copywriter could invent.",
              "Suits products that fix an everyday annoyance, which is most of them.",
            ],
          },
          {
            id: "comparison",
            heading: "4. The comparison",
            paras: [
              "Your product beside the thing it replaces: three bottles against one, the tangle of cables against the single charger. Keep it fair and true. Naming a competitor raises the bar on proof considerably, so most brands compare with the old way of doing things instead.",
              "Suits products with an obvious before and after, or a clear saving.",
            ],
          },
          {
            id: "hero",
            heading: "5. The product hero",
            paras: [
              "Studio-style shots that make the product look its best: a can in a splash of fruit, a bottle frosting over, a bracelet turning in soft light. These used to need a studio day and a specialist. AI makes them quick, as long as the product itself stays accurate.",
              "Suits drinks, beauty, jewelry, food and anything that sells on looks.",
            ],
          },
          {
            id: "offer",
            heading: "6. The offer ad",
            paras: [
              "One deal, said plainly, with the product on screen the whole time: free delivery this week, two for one, a bundle price. Motion graphics and bold type do most of the work. Save these for when you actually have an offer, because a sale that never ends teaches people to wait.",
              "Suits launches, seasonal sales, bundles and first-order discounts.",
            ],
          },
          {
            id: "how-to-test",
            heading: "How to test them",
            paras: [
              "Don’t make one of each and see what happens. Pick four or five reasons to buy, then make each one in three or four of these formats. Twenty ads planned that way tell you two things at once: which reason to buy works, and which format your buyers respond to.",
              "Judge them on cost per purchase. A product hero can rack up watch time and sell nothing, and a plain demo can do the opposite.",
            ],
            link: { href: "/resources/creative-testing-guide", label: "Read how to plan a creative test" },
          },
          {
            id: "accuracy",
            heading: "The one rule for shops",
            paras: [
              "Whatever the format, the product in the ad has to be the product in the box: same size, same color, same label. Getting that wrong costs more than a weak ad. It costs refunds and reviews.",
            ],
            link: { href: "/resources/ai-product-video-accuracy", label: "How to keep products accurate" },
          },
        ],
      },
      { type: "cta", text: "Selling online? Tell us your best seller and we’ll suggest which of these formats to test first.", label: "Get a suggestion" },
      {
        type: "faq",
        title: "Questions about e-commerce video ads",
        items: [
          { q: "What kind of video ads work best for e-commerce?", a: "Product demos, unboxings and problem-and-solution ads are the usual starting points, because they show the product doing something specific. Test several to find which suits your buyers." },
          { q: "Can AI make video ads from product photos?", a: "Yes. Good photos from every side are the main input. The results need checking against the real product before they run." },
          { q: "How many video ads does an online shop need?", a: "Enough to test four or five reasons to buy properly, with new ones ready before the current winners tire. For many shops that means new ads every month." },
          { q: "Are AI product videos good enough for Meta and TikTok?", a: "They can be, if they’re vertical, captioned, accurate and made for the feed rather than for a homepage banner." },
          { q: "Should I use presenter ads or product-only ads?", a: "Test both. Presenter ads explain; product-only ads show. Your cost per purchase will tell you which your buyers prefer." },
        ],
      },
      { type: "related", title: "Read next", items: ["ecommerce", "ai-video-ads", "ai-product-video-accuracy"] },
    ],
  },

  // ─────────────────────────────────────────────────────────────── Product accuracy
  {
    ...dated,
    slug: "ai-product-video-accuracy",
    category: "Production",
    topic: "Getting the product right",
    name: "Keeping products accurate in AI video",
    summary: "Why generated video gets products wrong, how to check every frame, and when to use real footage instead.",
    thumb: "vazu-can-4",
    keywords: ["AI product videos", "AI product video accuracy", "AI-generated product ads", "product consistency in AI video", "AI product ad mistakes"],
    meta: {
      title: "How to keep your product accurate in AI video ads",
      description:
        "Generated video can change a product’s label, size or color from one frame to the next. Why it happens, the checks to run on every AI product video, and when to use real product footage instead.",
    },
    hero: {
      title: "How to keep your product accurate in AI video ads",
      lede: "The quickest way to waste an AI video ad is to show a product that isn’t quite yours. Here’s why it happens, and how we check for it.",
    },
    blocks: [
      {
        type: "answer",
        title: "The short answer",
        text: "AI video models redraw the product in every frame, so labels, logos, colors and proportions can drift. Keep products accurate by starting from good reference photos of the real thing, generating short shots rather than long ones, checking every frame against the product, and using real product footage for close-ups where detail matters. An ad that shows the wrong product costs more in refunds and trust than it ever saves.",
        facts: [
          ["Most common error", "Text on labels that blurs or changes"],
          ["Also watch", "Size, color, lids, buttons and how the product is held"],
          ["Best prevention", "Clear reference photos from every side"],
          ["Best fix", "Real product shots for close-ups, generated scenes around them"],
          ["Final check", "Frame by frame, against the real product, before launch"],
        ],
      },
      {
        type: "article",
        title: "The full answer",
        sections: [
          {
            id: "why-drift",
            heading: "Why AI gets products wrong",
            paras: [
              "A video model doesn’t place your product into a scene the way a camera does. It redraws everything, every frame, from what it has learned and what you’ve shown it. Most of the time the result is close. Close isn’t good enough when someone is about to buy the thing.",
              "Text is the usual casualty. Models handle faces far better than small print, so a label that reads perfectly in the first frame can turn into near-letters a second later. Proportions drift too: a 50ml bottle can end up looking like a 200ml one once a hand wraps around it.",
            ],
          },
          {
            id: "why-it-matters",
            heading: "Why it matters more than it looks",
            list: [
              "Returns and reviews. If the ad shows a bigger bottle or a different color, some buyers will feel misled, and they’ll say so where other buyers can read it.",
              "Ad rejections. Platforms review ads against their rules on misleading content, and a product that doesn’t match what’s sold can fall foul of them.",
              "Trust in the next ad. People who spot one fake-looking detail start looking for more.",
            ],
          },
          {
            id: "reference",
            heading: "Start with better reference",
            paras: ["Most accuracy problems start before anything is generated, with thin reference. What we ask for:"],
            list: [
              "The product from the front, back, both sides, top and bottom, in even light.",
              "Close-ups of every label, logo and line of text that must read correctly.",
              "The product beside something familiar, like a hand or a phone, for scale.",
              "The packaging, open and closed.",
              "Brand colors as codes if you have them, because a photo looks different on every screen.",
            ],
          },
          {
            id: "shorter-shots",
            heading: "Generate short, cut often",
            paras: [
              "The longer a generated shot runs, the more chances the product has to change. We generate in short clips and cut between them, which suits the pace of paid social anyway.",
              "Movement matters too. A product sitting on a counter stays truer than one being turned, opened and poured. Save the handling for the shots where it earns its place.",
            ],
          },
          {
            id: "check",
            heading: "Check every frame",
            paras: ["Before an ad goes anywhere, someone compares it with the real product, frame by frame. The checklist:"],
            list: [
              "Text: every word on the label legible and spelled right, or deliberately out of focus.",
              "Logo: the right shape, color and position.",
              "Size: the product in proportion to hands, faces and furniture.",
              "Parts: the right number of buttons, the right lid, the cable where the cable should be.",
              "Handling: fingers and grip that look physically possible.",
              "Consistency: the product looks the same at the end as it did at the start.",
            ],
            after: "Anything that fails gets regenerated, fixed in the edit, or replaced with real footage.",
          },
          {
            id: "real-footage",
            heading: "When to use real product footage",
            paras: [
              "For tight close-ups of labels, ingredients or fine detail, real footage is still the safer choice. A few seconds of the actual product, filmed on a phone against a plain background, can be cut into a generated ad or set into a generated scene.",
              "It’s also the honest choice for anything a buyer has to judge closely before paying: the weave of a fabric, the finish on a watch, the true color of a foundation shade.",
            ],
          },
          {
            id: "apps",
            heading: "A note for apps",
            paras: [
              "For apps the rule is simpler: show the real interface. Screen recordings of the actual app beside a generated presenter are accurate by definition. A generated mock-up of your app isn’t, and users notice the moment they install it.",
            ],
          },
        ],
      },
      { type: "cta", text: "Worried AI can’t get your product right? Send photos and we’ll tell you honestly which shots it can handle and which need real footage.", label: "Send photos" },
      {
        type: "faq",
        title: "Questions about product accuracy",
        items: [
          { q: "Why does AI change my product’s label?", a: "Video models redraw every frame and are weaker at small text than at faces and shapes, so lettering can blur or shift. Good reference photos, short shots and real close-ups fix most of it." },
          { q: "Can AI video show my exact product?", a: "Very close to it, with good reference and careful checking. For tight close-ups of text or fine detail, real footage cut into the ad is more reliable." },
          { q: "What photos do I need for AI product videos?", a: "Every side in even light, close-ups of labels and logos, the packaging, and a shot for scale." },
          { q: "Who should check AI product videos?", a: "Someone who knows the product well, comparing each frame with the real thing. We check every ad before delivery, and you approve it before it runs." },
          { q: "Is it misleading to use AI product videos?", a: "Not if the product shown matches the product sold. It becomes misleading when the ad shows something bigger, better or different from what arrives." },
        ],
      },
      sources("tiktokAi"),
      { type: "related", title: "Read next", items: ["how-to-brief-ai-video-ads", "ai-video-ads-for-ecommerce", "delivery-specs"] },
    ],
  },

  // ─────────────────────────────────────────────────────────────── AI vs a shoot
  {
    ...dated,
    slug: "ai-video-ads-vs-traditional-production",
    category: "Costs",
    topic: "AI ads or a shoot?",
    name: "AI video ads vs traditional production",
    summary: "Cost, speed, control and trust: when AI video ads make sense, and when to book a shoot.",
    thumb: "outfit-try-on-2",
    keywords: ["AI video ads vs traditional video production", "AI ads vs a real shoot", "AI commercial production", "AI video production for brands", "AI video vs studio production"],
    meta: {
      title: "AI video ads vs traditional production: when each makes sense",
      description:
        "AI video ads are faster and cheaper per version, so they suit testing many ideas. A traditional shoot costs more but gives you real people, real places and real product handling. How to choose, and how to use both.",
    },
    hero: {
      title: "AI video ads vs a traditional shoot",
      lede: "It isn’t a fight. Each is good at a different job, and most brands that spend seriously on ads end up using both. Here’s how to tell which job you have.",
    },
    blocks: [
      {
        type: "answer",
        title: "The short answer",
        text: "Choose AI video ads when you need many versions of an idea quickly, to find out which reason to buy works. Choose a traditional shoot when the idea is already proven and the ad needs real people, real places or the product in someone’s hands. AI costs less per version and is quicker to change; a shoot costs more but gives you footage nobody can question. The usual order is to test with AI, then shoot the winner if it needs it.",
        facts: [
          ["Cost per version", "AI: much lower. A shoot: high, set by crew and days"],
          ["Speed", "AI: days. A shoot: weeks of planning, then the edit"],
          ["Changes", "AI: a new opening in hours. A shoot: often a reshoot"],
          ["Real experience", "AI: none. A shoot: real people, real use"],
          ["Best for", "AI: finding the idea. A shoot: scaling a proven one"],
        ],
      },
      {
        type: "article",
        title: "The full answer",
        sections: [
          {
            id: "side-by-side",
            heading: "Side by side",
            table: {
              label: "AI video ads compared with a traditional shoot",
              columns: ["", "AI video ads", "Traditional shoot"],
              rows: [
                ["Typical output", "Many versions of several ideas", "A few polished ads from one idea"],
                ["Time to first ad", "Days", "Weeks, once planning is counted"],
                ["Changing the opening", "Hours", "Usually a new edit, sometimes a reshoot"],
                ["People on screen", "Generated presenters", "Actors, creators or real customers"],
                ["Testimonials", "Can’t be faked", "Allowed when genuine"],
                ["Product handling", "Checked frame by frame", "The real product in real hands"],
                ["Locations", "Any setting, generated", "Wherever you can get permission and a crew"],
                ["Cost", "Lower per version", "Higher, mostly fixed by crew and days"],
              ],
            },
          },
          {
            id: "cost",
            heading: "What each costs",
            paras: [
              "A shoot’s cost is mostly fixed: crew, kit, talent, location and days, before a single ad is cut. Clutch’s 2026 pricing guide puts the average video production project on its platform at about $42,000, with most agencies charging $100 to $149 an hour. That spans every kind of video, so treat it as a sense of scale rather than a quote.",
              "AI production costs grow with the number of ads and the work around them, and a managed batch usually comes to a few hundred dollars per finished ad. The bigger difference is what the money buys: twenty versions to test, or three to hope about.",
            ],
            link: { href: "/resources/ai-video-ads-cost", label: "See what AI video ads cost" },
          },
          {
            id: "ai-wins",
            heading: "When AI video is the better choice",
            list: [
              "You don’t yet know which reason to buy works, and want to test four or five.",
              "Your best ad is tiring and you need new openings quickly.",
              "You sell many products, or in several markets and languages.",
              "The ad’s job is to explain or demonstrate, not to prove someone’s experience.",
              "You need studio-style product shots without booking a studio.",
            ],
          },
          {
            id: "shoot-wins",
            heading: "When to book a shoot",
            list: [
              "The idea is proven and you’re about to put serious budget behind it.",
              "The ad depends on a real person: a customer, a founder, a creator people know.",
              "Touch, fit or texture is the selling point.",
              "You need broadcast-grade footage for TV or a brand film.",
              "Your category runs on trust, and every face on screen needs to be real.",
            ],
          },
          {
            id: "both",
            heading: "How the two work together",
            paras: [
              "Brands that get the most from both use them in order. AI-made ads find the angle cheaply. The winning angle then gets the shoot, briefed with real numbers instead of a hunch. When the shoot’s ads start to tire, AI makes new openings and variations around the same message.",
              "That changes what a shoot is for. Instead of paying a production budget to find out whether an idea works, you pay it to make the best version of an idea you already know works.",
            ],
          },
          {
            id: "quality",
            heading: "What about quality?",
            paras: [
              "On a phone, in a feed, at the speed people scroll, well-made AI video holds up for a lot of formats: presenter ads, demos, product heroes, motion pieces. It holds up less well in long takes, tight close-ups of hands and products, and anything that needs exact detail.",
              "Polish isn’t what sells on paid social anyway. TikTok’s own creative advice favors video made for the platform over repurposed commercials, and plenty of plain, phone-shot ads beat glossy ones because they look like the rest of the feed. Match the finish to the platform, not to a showreel.",
            ],
          },
        ],
      },
      { type: "cta", text: "Deciding between a shoot and an AI batch? Tell us what you sell and what you’ve tried, and we’ll say which we’d do first.", label: "Ask us" },
      {
        type: "faq",
        title: "Questions about AI and traditional production",
        items: [
          { q: "Is AI video cheaper than traditional video production?", a: "Per version, almost always. A shoot’s cost is mostly fixed by crew and days, while AI production grows with the number of ads. A single brand film can still be worth a shoot." },
          { q: "Can AI replace a video production company?", a: "For testing many ideas and for many feed formats, it can do the job. For testimonials, real people, real places and broadcast work, you still need a crew." },
          { q: "Do AI ads look as good as real footage?", a: "In a feed, for many formats, yes. In long takes and close-ups of hands and products, real footage is still more reliable." },
          { q: "Should I test with AI before a shoot?", a: "If you don’t yet know which message works, yes. It’s a cheaper way to find the angle, and the shoot can then be briefed from real results." },
          { q: "Which is better for TikTok?", a: "Whichever feels native to the feed. TikTok recommends vertical video made for the platform. AI and real footage can both do that; a TV spot cut down to 9:16 usually can’t." },
        ],
      },
      sources("clutch", "tiktokBest", "tiktokGuide"),
      { type: "related", title: "Read next", items: ["ai-video-ads-cost", "what-are-ai-video-ads", "ai-ugc-vs-creators"] },
    ],
  },

  // ─────────────────────────────────────────────────────────────── East Africa
  {
    ...dated,
    slug: "ai-video-ads-east-africa",
    category: "AI video ads",
    topic: "AI video ads in East Africa",
    name: "AI video ads in Kenya and East Africa",
    summary: "What changes when you make AI video ads for Kenyan and East African buyers: language, faces, places and prices.",
    thumb: "fillows-cereal-2",
    keywords: ["AI video ads Kenya", "AI video ads East Africa", "AI ad agency Kenya", "video ads for Kenyan brands", "TikTok ads Kenya", "AI UGC Africa"],
    meta: {
      title: "AI video ads for brands in Kenya and East Africa",
      description:
        "How to make AI video ads that work for Kenyan and East African buyers: English, Swahili or Sheng, local faces and settings, prices in shillings, M-Pesa, and phone-first formats. From a studio that has made ads for brands in the region.",
    },
    hero: {
      title: "AI video ads for brands in Kenya and East Africa",
      lede: "Most advice about AI video ads is written for American and European feeds. Selling in Nairobi, Kampala or Dar es Salaam changes a few important things. We’ve made ads for brands selling in the region, and these are the details we watch.",
    },
    blocks: [
      {
        type: "answer",
        title: "The short answer",
        text: "AI video ads work in East Africa when they look and sound local: presenters who look like the people watching, settings people recognize, the right mix of English, Swahili and Sheng, and prices in local currency with a familiar way to pay, such as M-Pesa. Make them vertical and captioned for phones, and test more than one angle and language, because what sells in Nairobi may not sell in Kampala.",
        facts: [
          ["Language", "English, Swahili or Sheng, chosen per audience and tested"],
          ["Faces and places", "Presenters and settings your buyers recognize"],
          ["Prices", "In shillings, with the payment method people use"],
          ["Format", "Vertical, captioned and made for phones"],
          ["Our work in the region", "Ads for Bidco Africa, Ribena East Africa, Oraimo and Hillson"],
        ],
      },
      {
        type: "article",
        title: "The full answer",
        sections: [
          {
            id: "why-local",
            heading: "Why local detail decides it",
            paras: [
              "People scroll past ads that weren’t made for them. In East Africa that happens a lot, because so much ad creative is made somewhere else and run here with a new logo on the end. A presenter in a Californian kitchen selling cooking oil to a family in Nairobi is an ad that gets skipped.",
              "AI makes local detail affordable. The same idea can be made with presenters who look like the people watching, in settings that look like home, speaking the way your buyers speak. That used to mean a separate shoot for every market.",
            ],
          },
          {
            id: "language",
            heading: "English, Swahili or Sheng",
            paras: [
              "Kenya has two official languages, English and Swahili, and in Nairobi plenty of younger buyers mix both with Sheng. Each says something different about a brand. English can feel aspirational, or formal. Swahili feels warmer and travels further beyond the big towns. Sheng says you’re in on the joke, and it dates quickly.",
              "Don’t guess; test it. Make the same angle in two languages and let cost per customer choose. Generated voices handle Swahili far better than they used to, but have a fluent speaker check every line for pronunciation and tone before it runs. A wrong word in a local language is worse than no local language at all.",
              "Uganda, Tanzania, Rwanda and the rest of the region each have their own mix, so treat every market as its own test.",
            ],
          },
          {
            id: "faces-places",
            heading: "Faces, places and products people recognize",
            list: [
              "Presenters who look like your buyers in age, style and setting. Generated presenters make this easy, so there’s no excuse for defaulting to a look from another continent.",
              "Settings that feel real: a city apartment kitchen, a matatu stage, a duka counter, a campus hostel. Small details like the plug sockets or the shape of the gas cylinder give a scene away when they’re wrong.",
              "Products as they’re actually sold locally, including sachets and small pack sizes where that’s how people buy.",
              "Light and weather that match the place. Generated scenes default to wherever the model learned most, which usually isn’t here.",
            ],
          },
          {
            id: "money",
            heading: "Prices and payment",
            paras: [
              "Show prices in shillings, or the local currency of each market, never converted dollars. If you sell online, say how people pay. In Kenya that very often means M-Pesa, and an ad that shows a familiar way to pay answers a question before anyone asks it.",
              "Local offers make strong angles too: free delivery within Nairobi, pay on delivery, a smaller starter size. Test them like any other reason to buy.",
            ],
          },
          {
            id: "phones",
            heading: "Made for phones, and for the sound off",
            paras: [
              "Most people will see your ad on a phone, often while scrolling fast, often with the sound off. Make ads vertical, put the point in the first two seconds, and burn the captions in so the ad works in silence. Meta and TikTok both recommend vertical, captioned video made for mobile.",
              "TikTok, Facebook, Instagram and YouTube all reach big audiences across the region, so the same core idea usually needs a version for each rather than one ad for everywhere.",
            ],
          },
          {
            id: "our-work",
            heading: "What we’ve made for the region",
            paras: [
              "We’ve made ads for Bidco Africa (its Fillows and Shapies cereals), Ribena East Africa, Oraimo and Hillson. They’re on our site, labeled as client work, next to our spec ads. No client results are published yet, so you won’t find numbers here, just the ads themselves.",
              "We work remotely, with brands anywhere, and the process is the same for Nairobi as for anywhere else: research, five angles, twenty ads planned as a test, and a straight read of the results.",
            ],
            link: { href: "/work", label: "See the ads on our Work page" },
          },
        ],
      },
      { type: "cta", text: "Selling in Kenya or East Africa? Tell us what you sell and where, and we’ll suggest the angles and languages we’d test first.", label: "Talk to us" },
      {
        type: "faq",
        title: "Questions about AI video ads in East Africa",
        items: [
          { q: "Can I hire an AI video ad agency for a Kenyan brand?", a: "Yes. Lumivance works remotely with brands anywhere, including in Kenya and East Africa, and has made ads for Bidco Africa, Ribena East Africa, Oraimo and Hillson." },
          { q: "Can AI video ads be made in Swahili?", a: "Yes. Generated voices handle Swahili far better than they used to, but every line should be checked by a fluent speaker before the ad runs." },
          { q: "Should my ads be in English or Swahili?", a: "Test both. The right choice depends on the product, the audience and the city, and your cost per customer will tell you." },
          { q: "Which platforms work for video ads in Kenya?", a: "TikTok, Facebook, Instagram and YouTube all reach large audiences. Make a version for each rather than one ad for all of them." },
          { q: "Should ads show prices in shillings and M-Pesa?", a: "Yes, if that’s how your customers pay. A familiar price and payment method answers a common question before checkout." },
          { q: "Do the platforms’ AI labeling rules apply in Kenya?", a: "Platform rules, such as TikTok’s AI disclosure, apply wherever the ad runs. Check local advertising rules as well, and take advice if you’re unsure." },
        ],
      },
      sources("tiktokBest", "metaMobile", "tiktokAi"),
      { type: "related", title: "Read next", items: ["dtc", "ai-video-ads-for-ecommerce", "what-are-ai-video-ads"] },
    ],
  },
];
