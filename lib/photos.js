// Illustrations made with AI in Higgsfield for the industry and case study
// pages. They show the kind of person and moment an ad is for; they are not
// customers, clients or work. Files live in public/photos as 896x1120 JPEG; next/image serves them as WebP or AVIF.
const p = (alt) => ({ alt, width: 896, height: 1120 });

export const photos = {
  "edtech-a": p("A young woman on a sofa in the evening doing a language lesson on her phone, notebook beside her"),
  "edtech-b": p("A teenager studying at a kitchen table with a phone propped against a mug and a textbook open"),
  "fintech-a": p("Hands holding a phone above an identity card on a desk, as if verifying an account"),
  "fintech-b": p("A smiling shop owner among rolls of fabric checks a payment on her phone"),
  "ecommerce-a": p("Hands opening a parcel on a bed to find a pair of new white sneakers"),
  "ecommerce-b": p("A packing table with boxes, a leather bag and a bottle being packed for delivery"),
  "dtc-a": p("A founder arranging rows of amber glass bottles on wooden shelves in a bright studio"),
  "dtc-b": p("A hand reaching for a bottle on a bathroom shelf during a morning routine"),
  "subscription-a": p("A man relaxing on a sofa in the evening, looking at his phone"),
  "subscription-b": p("A woman at a cafe window using an app on her phone beside a coffee and a planner"),
  "dating-a": p("Two people laughing together on a first date at a cafe"),
  "dating-b": p("A man on a balcony at golden hour smiling at a message on his phone"),
  "games-a": p("A young man on a bus commute playing a game on his phone held sideways"),
  "games-b": p("Friends on a sofa playing a mobile game together and reacting"),
  "health-a": p("A woman doing a home workout following a phone propped on the floor of her living room"),
  "health-b": p("A runner checking her phone after a morning run"),
};

export function photo(id) {
  const ph = photos[id];
  if (!ph) throw new Error(`Unknown photo: ${id}`);
  return { id, src: `/photos/${id}.jpg`, ...ph };
}
