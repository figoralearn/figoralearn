// app/components/GeotrackedPrice.tsx
"use client";

import { useEffect, useState } from "react";

export default function GeotrackedPrice({
  className,
  priceIN,
  priceUS,
}: {
  className?: string;
  priceIN: string;
  priceUS: string;
}) {
  const [country, setCountry] = useState<string>("Unknown");
  const [displayedPrice, setDisplayedPrice] = useState<string>(priceUS);

  useEffect(() => {
    // ✅ Read cookie on client side
    const cookieMatch = document.cookie.match(/(^| )country=([^;]+)/);
    const countryFromCookie = cookieMatch
      ? decodeURIComponent(cookieMatch[2])
      : "Unknown";
    setCountry(countryFromCookie);

    // ✅ Compute displayed price based on country
    let countryMessage: string;
    switch (countryFromCookie) {
      case "IN":
        countryMessage = `₹${priceIN}`;
        break;
      default:
        countryMessage = `$${priceUS}`;
    }

    setDisplayedPrice(countryMessage);
  }, [priceIN, priceUS]);

  return <p className={className}>{displayedPrice}</p>;
}
