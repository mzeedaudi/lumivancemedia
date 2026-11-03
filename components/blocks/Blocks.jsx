import Answer from "@/components/blocks/Answer";
import Article from "@/components/blocks/Article";
import Block from "@/components/blocks/Block";
import Calculator from "@/components/blocks/Calculator";
import CaseCards from "@/components/blocks/CaseCards";
import Checklist from "@/components/blocks/Checklist";
import Clients from "@/components/blocks/Clients";
import Compare from "@/components/blocks/Compare";
import Faq from "@/components/blocks/Faq";
import Fit from "@/components/blocks/Fit";
import FrameStrip from "@/components/blocks/FrameStrip";
import Funnel from "@/components/blocks/Funnel";
import Gallery from "@/components/blocks/Gallery";
import Matrix from "@/components/blocks/Matrix";
import MidCta from "@/components/blocks/MidCta";
import { Retainer, Tiers } from "@/components/blocks/Offer";
import Points from "@/components/blocks/Points";
import Prose from "@/components/blocks/Prose";
import Related from "@/components/blocks/Related";
import RulesTable from "@/components/blocks/RulesTable";
import SpecTable from "@/components/blocks/SpecTable";
import Split from "@/components/blocks/Split";
import Steps from "@/components/blocks/Steps";
import VideoRow from "@/components/blocks/VideoRow";
import { casesFor } from "@/lib/cases";

// The shape each kind of block prefers. Text-and-list blocks sit beside their
// heading; media and tables go full width under it.
const PREFERRED = {
  points: "side",
  steps: "side",
  faq: "side",
  specs: "side",
  videos: "side",
  frames: "stack",
  gallery: "stack",
  split: "stack",
  fit: "stack",
  prose: "stack",
  matrix: "stack",
  tiers: "stack",
  pricing: "stack",
  retainer: "stack",
  related: "stack",
  answer: "stack",
  funnel: "stack",
  rules: "stack",
  calculator: "stack",
  cases: "stack",
  cta: "stack",
  compare: "stack",
  checklist: "side",
  article: "stack",
  clients: "stack",
};

// A case study section with nothing to show (no published cases for that
// sector yet) is left out rather than shown empty.
const shown = (b) => b.type !== "cases" || casesFor(b.industry).length > 0;

// Renders a page's sections from data (lib/services.js and friends). When two
// neighbors would both sit beside their heading, the second is stacked
// instead, so no two adjacent sections share a layout.
export default function Blocks({ blocks }) {
  let previous = null;
  return blocks.filter(shown).map((b, i) => {
    let layout = PREFERRED[b.type];
    if (layout === "side" && previous === "side") layout = "stack";
    previous = layout;
    const stacked = layout === "stack";
    return (
      <Block
        key={`${b.type}-${i}`}
        id={b.id}
        title={b.title ?? (b.type === "related" ? "Related pages" : undefined)}
        intro={b.intro}
        layout={layout}
        narrow={stacked && ["steps", "faq", "specs", "prose"].includes(b.type)}
        compact={b.type === "clients" || b.type === "cta"}
      >
        {render(b, stacked)}
      </Block>
    );
  });
}

function render(b, stacked) {
  switch (b.type) {
    case "points":
      return <Points items={b.items} columns={stacked} />;
    case "steps":
      return <Steps items={b.items} />;
    case "frames":
      return <FrameStrip slug={b.slug} />;
    case "gallery":
      return <Gallery items={b.items} />;
    case "videos":
      return <VideoRow items={b.items} />;
    case "split":
      return <Split paras={b.paras} still={b.still} caption={b.caption} />;
    case "fit":
      return <Fit yes={b.yes} no={b.no} />;
    case "faq":
      return <Faq items={b.items} />;
    case "specs":
      return <SpecTable rows={b.rows} />;
    case "prose":
      return <Prose sections={b.sections} />;
    case "matrix":
      return <Matrix />;
    case "tiers":
      return <Tiers details />;
    case "pricing":
      return <Tiers />;
    case "retainer":
      return <Retainer />;
    case "related":
      return <Related keys={b.items} />;
    case "answer":
      return <Answer text={b.text} facts={b.facts} />;
    case "funnel":
      return <Funnel stages={b.stages} />;
    case "rules":
      return <RulesTable rows={b.rows} />;
    case "calculator":
      return <Calculator {...b.calc} />;
    case "cases":
      return <CaseCards items={casesFor(b.industry)} />;
    case "cta":
      return <MidCta text={b.text} label={b.label} />;
    case "compare":
      return <Compare rows={b.rows} />;
    case "checklist":
      return <Checklist items={b.items} verdicts={b.verdicts} />;
    case "article":
      return <Article sections={b.sections} />;
    case "clients":
      return <Clients />;
    default:
      throw new Error(`Unknown block type: ${b.type}`);
  }
}
