"use client";

import Script from "next/script";
import { usePathname, useSearchParams } from "next/navigation";
import { useEffect } from "react";

export default function Clarity() {
  const CLARITY_ID = process.env.NEXT_PUBLIC_CLARITY_ID;
  const pathname = usePathname();
  const searchParams = useSearchParams();

  // Only in production
  if (process.env.NODE_ENV !== "production" || !CLARITY_ID) return null;

  // Inject the clarity script
  useEffect(() => {
    const query = searchParams?.toString();
    const url = pathname + (query ? `?${query}` : "");

    // Tell Clarity a "page view" happened
    if (typeof window !== "undefined" && (window as any).clarity) {
      (window as any).clarity("pageview");
    }

    // Optionally, you could also log route info
    // (window as any).clarity("set", "page", url);
  }, [pathname, searchParams]);

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
