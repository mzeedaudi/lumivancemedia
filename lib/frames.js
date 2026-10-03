import { ads } from "@/lib/site";

// Stills cut from each spec ad at six evenly spaced points (public/work/frames,
// named <slug>-<1..6>.jpg). Referenced by id, e.g. "bag-unboxing-3".
export const FRAME_POINTS = [0.08, 0.25, 0.42, 0.58, 0.75, 0.92];

const SIZE = { "3 / 4": [720, 960], "4 / 3": [960, 720], "16 / 9": [1280, 720] };

export function frame(id) {
  const match = /^(.+)-([1-6])$/.exec(id);
  if (!match || !ads[match[1]]) throw new Error(`Unknown frame: ${id}`);
  const [, slug, n] = match;
  const ad = ads[slug];
  const [width, height] = SIZE[ad.ratio];
  const at = Math.floor(ad.seconds * FRAME_POINTS[n - 1]);
  return {
    slug,
    src: `/work/frames/${id}.jpg`,
    width,
    height,
    ratio: ad.ratio,
    at: `0:${String(at).padStart(2, "0")}`,
    alt: `Still from a Lumivance spec ad: ${ad.alt.charAt(0).toLowerCase()}${ad.alt.slice(1)}`,
  };
}
