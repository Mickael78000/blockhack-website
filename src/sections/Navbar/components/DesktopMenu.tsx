import Link from "next/link";

const links = [
  { href: "/services", label: "Services" },
  { href: "/a-propos", label: "À propos" },
  { href: "/contact", label: "Contact" },
];

export const DesktopMenu = () => {
  return (
    <nav
      role="navigation"
      className="relative text-white flex flex-wrap items-center justify-end gap-x-1 max-w-[62%] md:max-w-[579.68px]"
    >
      {links.map((link) => (
        <Link
          key={link.href}
          href={link.href}
          className="relative text-white text-[7.5px] font-normal leading-[12px] px-2 py-3 md:text-[17.6254px] md:leading-[28.2006px] md:px-[15.667px] md:py-5 hover:text-cyan-400"
        >
          {link.label}
        </Link>
      ))}
    </nav>
  );
};
