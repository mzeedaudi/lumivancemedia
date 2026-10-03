import Block from "@/components/blocks/Block";
import Faq from "@/components/blocks/Faq";
import Fit from "@/components/blocks/Fit";
import FrameStrip from "@/components/blocks/FrameStrip";
import Gallery from "@/components/blocks/Gallery";
import Matrix from "@/components/blocks/Matrix";
import { Retainer, Tiers } from "@/components/blocks/Offer";
import Points from "@/components/blocks/Points";
import Prose from "@/components/blocks/Prose";
import Related from "@/components/blocks/Related";
import SpecTable from "@/components/blocks/SpecTable";
import Split from "@/components/blocks/Split";
import Steps from "@/components/blocks/Steps";
import VideoRow from "@/components/blocks/VideoRow";

// Renders a page's sections from data (lib/services.js and friends), numbering
// them in the gutter in the order they appear.
export default function Blocks({ blocks, start = 1 }) {
  return blocks.map((b, i) => {
    const ink = b.tone === "ink";
    return (
      <Block
        key={`${b.type}-${i}`}
        id={b.id}
        num={String(i + start).padStart(2, "0")}
        label={b.label}
        title={b.title}
        intro={b.intro}
        ink={ink}
      >
        {render(b, ink)}
      </Block>
    );
  });
}

function render(b, ink) {
  switch (b.type) {
    case "points":
      return <Points items={b.items} ink={ink} />;
    case "steps":
      return <Steps items={b.items} />;
    case "frames":
      return <FrameStrip slug={b.slug} caption={b.caption} ink={ink} />;
    case "gallery":
      return <Gallery items={b.items} ink={ink} />;
    case "videos":
      return <VideoRow items={b.items} ink={ink} />;
    case "split":
      return <Split paras={b.paras} still={b.still} caption={b.caption} ink={ink} />;
    case "fit":
      return <Fit yes={b.yes} no={b.no} />;
    case "faq":
      return <Faq items={b.items} ink={ink} />;
    case "specs":
      return <SpecTable rows={b.rows} />;
    case "prose":
      return <Prose sections={b.sections} />;
    case "matrix":
      return <Matrix />;
    case "tiers":
      return <Tiers />;
    case "retainer":
      return <Retainer />;
    case "related":
      return <Related keys={b.items} />;
    default:
      throw new Error(`Unknown block type: ${b.type}`);
  }
}
