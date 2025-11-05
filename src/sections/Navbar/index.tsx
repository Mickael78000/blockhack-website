import { NavbarLogo } from "@/sections/Navbar/components/NavbarLogo";
import { DesktopMenu } from "@/sections/Navbar/components/DesktopMenu";
import { MobileMenuButton } from "@/sections/Navbar/components/MobileMenuButton";

export const Navbar = () => {
  return (
    <div
      role="banner"
      className="absolute text-[15.1297px] items-center box-border caret-transparent flex justify-between leading-[24.2075px] w-full z-[1000] pt-[15.1297px] md:text-[15.667px] md:leading-[25.0672px] md:pt-[15.667px] before:accent-auto before:caret-transparent before:text-white/70 before:table before:text-[15.1297px] before:not-italic before:normal-nums before:font-medium before:col-end-2 before:col-start-1 before:row-end-2 before:row-start-1 before:tracking-[normal] before:leading-[24.2075px] before:list-outside before:list-disc before:pointer-events-auto before:text-start before:indent-[0px] before:normal-case before:visible before:border-separate before:font-space_grotesk before:md:text-[15.667px] before:md:leading-[25.0672px] after:accent-auto after:caret-transparent after:clear-both after:text-white/70 after:table after:text-[15.1297px] after:not-italic after:normal-nums after:font-medium after:col-end-2 after:col-start-1 after:row-end-2 after:row-start-1 after:tracking-[normal] after:leading-[24.2075px] after:list-outside after:list-disc after:pointer-events-auto after:text-start after:indent-[0px] after:normal-case after:visible after:border-separate after:font-space_grotesk after:md:text-[15.667px] after:md:leading-[25.0672px]"
    >
      <div className="text-[15.1297px] items-center box-border caret-transparent flex justify-between leading-[24.2075px] max-w-[1248.2px] w-full mx-auto px-[25px] md:text-[15.667px] md:leading-[25.0672px] md:max-w-[1292.53px]">
        <NavbarLogo />
        <DesktopMenu />
      </div>
      <div
        aria-label="menu"
        role="button"
        className="relative text-2xl box-border caret-transparent block float-right leading-[38.4px] min-h-[auto] min-w-[auto] p-[18px] md:hidden md:min-h-0 md:min-w-0"
      >
        <div className="font-normal box-border caret-transparent hidden leading-6 font-webflow_icons md:block before:accent-auto before:caret-transparent before:text-white/70 before:text-2xl before:not-italic before:normal-nums before:font-normal before:tracking-[normal] before:leading-6 before:list-outside before:list-disc before:pointer-events-auto before:text-start before:indent-[0px] before:normal-case before:visible before:border-separate before:font-webflow_icons"></div>
      </div>
      <MobileMenuButton />
      <div className="absolute text-[15.1297px] box-border caret-transparent hidden leading-[24.2075px] z-[1] overflow-hidden right-0 top-0 md:text-[15.667px] md:leading-[25.0672px]"></div>
    </div>
  );
};
