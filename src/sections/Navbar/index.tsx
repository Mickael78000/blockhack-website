import { NavbarLogo } from "@/sections/Navbar/components/NavbarLogo";
import { DesktopMenu } from "@/sections/Navbar/components/DesktopMenu";

export const Navbar = () => {
  return (
    <div
      role="banner"
      className="absolute text-[7.5649px] items-center box-border caret-transparent flex justify-between leading-[12.1038px] w-full z-[1000] pt-[15.1297px] md:text-[15.667px] md:leading-[25.0672px] md:pt-[15.667px]"
    >
      <div className="text-[7.5649px] items-center box-border caret-transparent flex justify-between leading-[12.1038px] max-w-[1248.2px] w-full mx-auto px-[25px] md:text-[15.667px] md:leading-[25.0672px] md:max-w-[1292.53px]">
        <NavbarLogo />
        <DesktopMenu />
      </div>
    </div>
  );
};
