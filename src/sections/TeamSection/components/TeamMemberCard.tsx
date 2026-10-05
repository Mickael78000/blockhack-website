export type TeamMemberCardProps = {
  imageUrl: string;
  imageAlt: string;
  name: string;
  title: string;
  subtitle?: string;
};

export const TeamMemberCard = (props: TeamMemberCardProps) => {
  return (
    <div className="text-[7.5649px] items-start bg-zinc-800 box-border caret-transparent flex shrink-0 leading-[12.1038px] p-px rounded-bl rounded-br rounded-tl rounded-tr md:text-[15.667px] md:leading-[25.0672px]">
      <div className="relative text-[7.5649px] box-border caret-transparent h-full leading-[12.1038px] w-full md:text-[15.667px] md:leading-[25.0672px]">
        <div className="relative text-[7.5649px] bg-stone-950 box-border caret-transparent h-full leading-[12.1038px] text-center z-[2] border border-zinc-800 px-[22.6946px] py-[18.9121px] rounded-bl rounded-br rounded-tl rounded-tr border-solid md:text-[15.667px] md:leading-[25.0672px] md:pt-[54.8346px] md:pb-[39.1675px] md:px-[31.334px]">
          <div className="text-[7.5649px] box-border caret-transparent h-[181.556px] leading-[12.1038px] md:text-[15.667px] md:h-[254.589px] md:leading-[25.0672px] overflow-hidden relative">
            <img
              src={props.imageUrl}
              alt={props.imageAlt}
              className="text-[7.5649px] box-border caret-transparent inline-block h-full leading-[12.1038px] max-w-full object-contain md:text-[15.667px] md:leading-[25.0672px] scale-140"
            />
            <div className="absolute inset-0 pointer-events-none hidden md:block" style={{
              maskImage: 'radial-gradient(ellipse at center, transparent 40%, black 80%)',
              WebkitMaskImage: 'radial-gradient(ellipse at center, transparent 40%, black 80%)',
              backdropFilter: 'blur(8px)'
            }}></div>
          </div>
          <h3 className="text-white text-[15.1297px] font-semibold font-space_grotesk box-border caret-transparent leading-[17.0209px] my-5 md:text-[31.334px] md:leading-[35.2508px]">
            {props.name}
          </h3>
          <h4 className="text-[0.625rem] font-medium box-border caret-transparent leading-[13px] mt-2.5 mb-5 md:text-[22.5292px] md:leading-[29.2879px]">
            {props.title}
          </h4>
          {props.subtitle && (
            <p className="text-[0.4375rem] text-white/60 box-border caret-transparent leading-[10px] mb-4">
              {props.subtitle}
            </p>
          )}
          <div className="text-[7.5649px] box-border caret-transparent leading-[12.1038px] pt-2.5 md:text-[15.667px] md:leading-[25.0672px]"></div>
        </div>
        <div className="absolute text-[7.5649px] bg-black/80 box-border caret-transparent leading-[12.1038px] z-[1] inset-[0%] md:text-[15.667px] md:leading-[25.0672px] md:bg-black/50 md:backdrop-blur-[13px]"></div>
      </div>
    </div>
  );
};
