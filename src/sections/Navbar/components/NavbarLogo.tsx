export const NavbarLogo = () => {
  return (
    <a
      href="/"
      className="relative text-[15.1297px] font-light items-center box-border caret-transparent flex float-left h-[200px] pt-2 pb-2 justify-center md:justify-start leading-[24.2075px] z-[99] -mt-[57px] md:text-[15.667px] md:h-[220px] md:pt-4 md:pb-4 md:leading-[25.0672px] md:z-auto md:-mt-[57px] gap-x-4"
    >
      <img
        src="/images/blockhack-logo.webp"
        alt="BlockHack.io logo"
        width={200}
        height={200}
        className="h-full w-auto object-contain"
      />
      <span className="hidden md:inline text-white text-[80px] font-bold font-space_grotesk tracking-wide md:text-[90px] leading-none">
        BlockHack.io
      </span>
    </a>
  );
};
