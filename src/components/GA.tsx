// src/components/GoogleAnalytics.tsx
"use client";

import Script from "next/script";
import { useEffect } from "react";
import { usePathname, useSearchParams } from "next/navigation";

// ✅ Define type-safe constant
const GA_ID = process.env.NEXT_PUBLIC_GA_ID ?? "";

function pushPageview(url: string, GA_ID: string): void {
  if (typeof window === "undefined" || !GA_ID) return;

  window.dataLayer = window.dataLayer || [];

  window.dataLayer.push({
    event: "page_view",
    page_path: url,
  });

  if (typeof window.gtag === "function") {
    window.gtag("config", GA_ID, { page_path: url });
  }
}

export default function GoogleAnalytics() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    if (process.env.NODE_ENV !== "production" || !GA_ID) return;

    const query = searchParams?.toString();
    const url = pathname + (query ? `?${query}` : "");
    pushPageview(url, GA_ID);
  }, [pathname, searchParams]);

  // Don't render anything if not in production or GA_ID missing
  if (process.env.NODE_ENV !== "production" || !GA_ID) return null;

  return (
    <>
      {/* Load GA4 script asynchronously */}
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
        strategy="afterInteractive"
      />

      {/* Initialize gtag and dataLayer */}
      <Script
        id="ga-init"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            window.gtag = window.gtag || gtag;
            gtag('js', new Date());
            gtag('config', '${GA_ID}', { page_path: window.location.pathname });
          `,
        }}
      />
    </>
  );
}
