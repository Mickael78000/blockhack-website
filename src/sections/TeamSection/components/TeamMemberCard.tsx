export type TeamMemberCardProps = {
  imageUrl: string;
  imageAlt: string;
  name: string;
  title: string;
};

export const TeamMemberCard = (props: TeamMemberCardProps) => {
  return (
    <div className="text-[15.1297px] items-start bg-zinc-800 box-border caret-transparent flex shrink-0 leading-[24.2075px] p-px rounded-bl rounded-br rounded-tl rounded-tr md:text-[15.667px] md:leading-[25.0672px]">
      <div className="relative text-[15.1297px] box-border caret-transparent h-full leading-[24.2075px] w-full md:text-[15.667px] md:leading-[25.0672px]">
        <div className="relative text-[15.1297px] bg-stone-950 box-border caret-transparent h-full leading-[24.2075px] text-center z-[2] border border-zinc-800 px-[22.6946px] py-[18.9121px] rounded-bl rounded-br rounded-tl rounded-tr border-solid md:text-[15.667px] md:leading-[25.0672px] md:pt-[54.8346px] md:pb-[39.1675px] md:px-[31.334px]">
          <div className="text-[15.1297px] box-border caret-transparent h-[181.556px] leading-[24.2075px] md:text-[15.667px] md:h-[254.589px] md:leading-[25.0672px] overflow-hidden relative">
            <img
              src={props.imageUrl}
              alt={props.imageAlt}
              className="text-[15.1297px] box-border caret-transparent inline-block h-full leading-[24.2075px] max-w-full object-contain md:text-[15.667px] md:leading-[25.0672px] scale-140"
            />
            <div className="absolute inset-0 pointer-events-none" style={{
              maskImage: 'radial-gradient(ellipse at center, transparent 40%, black 80%)',
              WebkitMaskImage: 'radial-gradient(ellipse at center, transparent 40%, black 80%)',
              backdropFilter: 'blur(8px)'
            }}></div>
          </div>
          <h3 className="text-white text-[30.2594px] box-border caret-transparent leading-[34.0418px] my-5 md:text-[31.334px] md:leading-[35.2508px]">
            {props.name}
          </h3>
          <h4 className="text-xl font-normal box-border caret-transparent leading-[26px] mt-2.5 mb-5 md:text-[22.5292px] md:leading-[29.2879px]">
            {props.title}
          </h4>
          <div className="text-[15.1297px] box-border caret-transparent leading-[24.2075px] pt-2.5 md:text-[15.667px] md:leading-[25.0672px]"></div>
        </div>
        <div className="absolute text-[15.1297px] backdrop-blur-[13px] bg-black/50 box-border caret-transparent leading-[24.2075px] z-[1] inset-[0%] md:text-[15.667px] md:leading-[25.0672px]"></div>
      </div>
    </div>
  );
};
