import { ReactNode } from "react";

export default function SpanPrimary({ children }: { children?: ReactNode }) {
  return <span className="text-primary">{children}</span>;
}
