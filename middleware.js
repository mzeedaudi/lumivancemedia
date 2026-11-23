import { NextResponse } from "next/server";
import { caseStudies } from "@/lib/cases";

// /case-studies only exists once the live site has a real case study (see
// lib/cases.js). Until then the address, which the earlier site also used,
// sends visitors and search engines to the Work page. This lives here rather
// than in the page because Next can't redirect from a page built ahead of time.
export function middleware(request) {
  if (caseStudies.length) return NextResponse.next();
  return NextResponse.redirect(new URL("/work", request.url), 308);
}

export const config = { matcher: "/case-studies" };
