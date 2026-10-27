import { ads } from "@/lib/site";

// The brands Lumivance has made ads for, as plain names: taken from the client
// ads on the site, so the list can't claim anyone who isn't there.
const names = [...new Set(Object.values(ads).map((a) => a.client).filter(Boolean))];
const list = new Intl.ListFormat("en", { style: "long", type: "conjunction" }).format(names);

export default function Clients() {
  return (
    <p className="text-[17px]">
      <span className="text-graphite">Brands we’ve made ads for: </span>
      <span className="font-semibold">{list}.</span>
      <span className="text-graphite"> Ads run on Meta, TikTok and YouTube.</span>
    </p>
  );
}
