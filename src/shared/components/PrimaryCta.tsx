import type { ReactNode } from "react";
import Link from "next/link";

type PrimaryCtaProps = {
  href?: string;
  children?: ReactNode;
  className?: string;
};

export const PrimaryCta = ({
  href = "/contact",
  children = "Demander un devis gratuit",
  className = "",
}: PrimaryCtaProps) => {
  return (
    <Link
      href={href}
      className={`inline-flex items-center justify-center text-white font-semibold font-space_grotesk bg-blue-700 hover:bg-fuchsia-500 px-6 py-3 rounded-[7px] text-[0.5625rem] md:text-xl ${className}`}
    >
      {children}
    </Link>
  );
};
