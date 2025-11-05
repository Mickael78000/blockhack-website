export type CarouselNavigationProps = {
  variant: "previous" | "next" | "dots";
  ariaLabel?: string;
  imageUrl?: string;
  imageAlt?: string;
  onClick?: () => void;
  dots?: Array<{
    ariaLabel: string;
    isActive: boolean;
    onClick?: () => void;
  }>;
};

export const CarouselNavigation = (props: CarouselNavigationProps) => {
  if (props.variant === "previous") {
    return (
      <div
        role="button"
        aria-label={props.ariaLabel || "previous slide"}
        onClick={props.onClick}
        className="absolute box-border caret-transparent m-auto text-white text-[40px] items-center hidden justify-center leading-[64px] w-10 z-[3] overflow-hidden left-0 inset-y-0 md:flex cursor-pointer transition-all duration-300 hover:drop-shadow-[0_0_20px_rgba(34,211,238,0.8)]"
      >
        <img
          src={
            props.imageUrl ||
            "https://cdn.prod.website-files.com/6621233fd44f04553ba73645/6621233fd44f04553ba736c7_cursor_prev@2x.png"
          }
          alt={props.imageAlt || ""}
          className="aspect-[auto_42_/_65] box-border caret-transparent inline-block h-[65px] max-w-full w-[42px] md:block"
        />
      </div>
    );
  }

  if (props.variant === "next") {
    return (
      <div
        role="button"
        aria-label={props.ariaLabel || "next slide"}
        onClick={props.onClick}
        className="absolute box-border caret-transparent m-auto text-white text-[40px] items-center hidden justify-center leading-[64px] w-10 z-[4] overflow-hidden right-0 inset-y-0 md:flex cursor-pointer transition-all duration-300 hover:drop-shadow-[0_0_20px_rgba(34,211,238,0.8)]"
      >
        <img
          src={
            props.imageUrl ||
            "https://cdn.prod.website-files.com/6621233fd44f04553ba73645/6621233fd44f04553ba736dc_cursor_next@2x.png"
          }
          alt={props.imageAlt || ""}
          className="aspect-[auto_42_/_65] box-border caret-transparent inline-block h-[65px] max-w-full w-[42px] md:block"
        />
      </div>
    );
  }

  return (
    <div className="absolute box-border caret-transparent m-auto text-[15.1297px] h-10 leading-[24.2075px] z-[2] pt-2.5 left-[89px] top-[0%] md:text-[15.667px] md:leading-[25.0672px]">
      {props.dots?.map((dot, index) => (
        <div
          key={index}
          aria-label={dot.ariaLabel}
          role="button"
          onClick={dot.onClick}
          className={
            dot.isActive
              ? "relative text-[15.1297px] bg-white/40 box-border caret-transparent inline-block h-[15.1297px] leading-[24.2075px] w-[15.1297px] mb-[7.56485px] mx-[11px] rounded-[100%] cursor-pointer md:text-[15.667px] md:h-[15.667px] md:leading-[25.0672px] md:w-[15.667px] md:mb-[7.83351px] before:accent-auto before:text-transparent before:block before:text-sm before:not-italic before:normal-nums before:font-medium before:tracking-[normal] before:leading-[22.4px] before:list-outside before:list-disc before:pointer-events-auto before:absolute before:text-center before:indent-[0px] before:normal-case before:visible before:border-separate before:-left-px before:-top-2 before:font-space_grotesk"
              : "relative text-[15.1297px] bg-white/40 box-border caret-transparent inline-block h-[15.1297px] leading-[24.2075px] w-[15.1297px] mb-[7.56485px] mx-[11px] rounded-[100%] cursor-pointer md:text-[15.667px] md:h-[15.667px] md:leading-[25.0672px] md:w-[15.667px] md:mb-[7.83351px] before:accent-auto before:text-transparent before:block before:text-sm before:not-italic before:normal-nums before:font-medium before:tracking-[normal] before:leading-[22.4px] before:list-outside before:list-disc before:pointer-events-auto before:absolute before:text-center before:indent-[0px] before:normal-case before:visible before:border-separate before:-left-px before:-top-2 before:font-space_grotesk after:accent-auto after:bg-white after:caret-transparent after:text-white/70 after:block after:text-[15.1297px] after:not-italic after:normal-nums after:font-medium after:h-px after:tracking-[normal] after:leading-[24.2075px] after:list-outside after:list-disc after:opacity-20 after:pointer-events-auto after:absolute after:text-center after:indent-[0px] after:normal-case after:visible after:w-[13px] after:border-separate after:left-2 after:top-0.5 after:font-space_grotesk after:md:text-[15.667px] after:md:leading-[25.0672px]"
          }
        ></div>
      ))}
    </div>
  );
};
