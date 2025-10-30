// middleware.ts
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(req: NextRequest) {
  const country = req.headers.get("x-vercel-ip-country") || "Unknown";

  const res = NextResponse.next();

  // Only set cookie if it's not already present
  const existingCountry = req.cookies.get("country")?.value;
  if (!existingCountry || existingCountry !== country) {
    res.cookies.set("country", country, {
      path: "/",
      maxAge: 60 * 60 * 24 * 7, // 7 days
      sameSite: "lax",
    });
  }

  return res;
}
