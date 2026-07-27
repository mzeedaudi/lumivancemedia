# Image specs (Nano Banana Pro JSON prompts)

Structured JSON prompts for the site's photography and social imagery.
Each spec pins the scene, camera, lighting, and brand palette so renders
are reproducible — re-run the same spec and you get the same image; tweak
one field (e.g. `lighting` or `camera.angle`) to iterate on just that.

| Spec | Image | Target file | Aspect |
| --- | --- | --- | --- |
| `01-about-story.json` | Senior team strategy session (About page story section) | `public/images/about-story.jpg` | 3:2 |
| `02-creative-studio.json` | Creative director reviewing ad variants (Services) | `public/images/creative-studio.jpg` | 3:2 |
| `03-growth-war-room.json` | Analysts at a wall dashboard, cinematic wide (CTA/Contact band) | `public/images/growth-war-room.jpg` | 16:9 |
| `04-og-share-image.json` | Branded social-share card | `public/og.png` | 1200×630 |

## How to render

**Option A — Gemini (free):** open the Gemini app or Google AI Studio,
pick the image model ("Thinking" / Nano Banana Pro), paste a spec's full
JSON with the instruction: *"Render this specification as a
high-fidelity image."* Download and save to the target file above.

**Option B — in Claude chat:** with credits on the connected Higgsfield
account, ask Claude to generate from these specs (Nano Banana Pro,
2 credits per 1k image).

## Brand constants used in every spec

- Ink base `#150C33` · soft `#1E1246` · panel `#281959` · midnight `#101540`
- Brand indigo `#6366F1` · violet `#8B5CF6` · fuchsia `#D946EF`
- Spark gold `#F4C77B` · aqua `#2DD4BF`
- Photography rule: no readable text on screens, no visible logos,
  candid editorial energy — never posed stock-photo smiles at camera.
