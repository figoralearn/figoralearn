// src/components/Clarity.tsx
"use client";

import Script from "next/script";
import { usePathname, useSearchParams } from "next/navigation";
import { useEffect } from "react";

// ✅ Declare the Clarity API globally
declare global {
  interface Window {
    clarity?: (...args: unknown[]) => void;
  }
}

export default function Clarity() {
  const CLARITY_ID = process.env.NEXT_PUBLIC_CLARITY_ID!;
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    if (process.env.NODE_ENV !== "production" || !CLARITY_ID) return;

    const query = searchParams?.toString();
    const url = pathname + (query ? `?${query}` : "");

    // ✅ Call clarity safely only if defined
    if (typeof window !== "undefined" && typeof window.clarity === "function") {
      window.clarity("set", "page", url);
      window.clarity("pageview");
    }
  }, [pathname, searchParams, CLARITY_ID]);

  if (process.env.NODE_ENV !== "production" || !CLARITY_ID) return null;

  return (
    <Script
      id="microsoft-clarity"
      strategy="afterInteractive"
      dangerouslySetInnerHTML={{
        __html: `
          (function(c,l,a,r,i,t,y){
              c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
              t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
              y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
          })(window, document, "clarity", "script", "${CLARITY_ID}");
        `,
      }}
    />
  );
}
