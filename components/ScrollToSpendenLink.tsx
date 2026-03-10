"use client";

import Link from "next/link";

export const ScrollToSpendenLink = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => (
  <Link
    href="#spenden"
    className={className}
    onClick={(e) => {
      e.preventDefault();
      document
        .getElementById("spenden")
        ?.scrollIntoView({ behavior: "smooth" });
    }}
  >
    {children}
  </Link>
);
