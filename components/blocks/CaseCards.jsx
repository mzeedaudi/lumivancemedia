import Link from "next/link";
import Image from "next/image";
import { photo } from "@/lib/photos";

// Case study teasers: the headline number, who it was for and a link. One or
// two cards lie on their side (picture beside the text) so the row stays
// full; three or more stand up in a grid. A placeholder says so on the card;
// placeholders never reach the live site.
export default function CaseCards({ items }) {
  const side = items.length <= 2;
  return (
    <ul className={`grid gap-3 lg:gap-4 ${side ? (items.length === 2 ? "lg:grid-cols-2" : "") : "sm:grid-cols-2 lg:grid-cols-3"}`}>
      {items.map((c) => {
        const ph = photo(c.photo);
        return (
          <li key={c.slug}>
            <Link
              href={`/case-studies/${c.slug}`}
              className={`tile group flex h-full overflow-hidden ${side ? "flex-col sm:flex-row" : "flex-col"}`}
            >
              <div className={`relative overflow-hidden bg-frame ${side ? "aspect-[4/3] sm:aspect-auto sm:w-[44%] sm:flex-none" : "aspect-[4/3]"}`}>
                <Image
                  src={ph.src}
                  alt=""
                  fill
                  sizes={side ? "(min-width: 1024px) 260px, (min-width: 640px) 40vw, 90vw" : "(min-width: 1024px) 400px, (min-width: 640px) 45vw, 90vw"}
                  className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                />
                {c.placeholder && <span className="tag absolute left-3 top-3 rounded-full bg-dot px-2.5 py-1 text-white">Placeholder</span>}
              </div>
              <div className={`flex flex-1 flex-col ${side ? "p-6 lg:p-7" : "p-6"}`}>
                <p>
                  <span className="display block text-[40px] leading-none text-accent">{c.metric.value}</span>
                  <span className="meta mt-1 block">{c.metric.label}</span>
                </p>
                <h3 className="h3 mt-3 transition-colors group-hover:text-accent">{c.title}</h3>
                <p className="meta mt-1">
                  {c.client} · {c.channels.join(", ")}
                </p>
                <span className="link mt-auto inline-block pt-4 text-[16px]">
                  Read the case study <span aria-hidden="true">›</span>
                </span>
              </div>
            </Link>
          </li>
        );
      })}
    </ul>
  );
}
