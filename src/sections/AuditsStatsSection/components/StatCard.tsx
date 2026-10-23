export type StatCardProps = {
  title: string;
  description: React.ReactNode;
  variant?: string;
  showChart?: boolean;
};

export const StatCard = (props: StatCardProps) => {
  return (
    <div
      className={`relative text-[7.5649px] box-border caret-transparent flex leading-[12.1038px] mt-[30.2594px] h-full md:text-[15.667px] md:leading-[25.0672px] md:mt-0${props.variant ? ` ${props.variant}` : ""}`}
    >
      <div className="relative text-[7.5649px] shadow-[rgba(255,255,255,0.17)_1px_1px_3px_0px_inset,rgba(0,0,0,0.67)_5px_5px_28px_4px] box-border caret-transparent saturate-100 leading-[12.1038px] h-full md:text-[15.667px] md:leading-[25.0672px]">
        <div className="absolute text-[7.5649px] bg-black/80 box-border caret-transparent leading-[12.1038px] z-[1] inset-[0%] md:text-[15.667px] md:leading-[25.0672px] md:bg-black/50 md:backdrop-blur-[13px]"></div>
        <div className="relative text-[7.5649px] bg-stone-950 box-border caret-transparent h-full leading-[12.1038px] text-left z-[2] border border-zinc-800 px-[22.6946px] py-[20px] rounded-bl rounded-br rounded-tl rounded-tr border-solid md:text-[15.667px] md:leading-[25.0672px] md:pt-[24px] md:pb-[24px] md:px-[47.0011px]">
          <div className="text-[7.5649px] items-start box-border caret-transparent gap-x-[15.1297px] grid flex-col auto-cols-[1fr] grid-cols-[1fr] grid-rows-[auto_auto] h-full leading-[12.1038px] gap-y-0 md:text-[15.667px] md:gap-x-[15.667px] md:grid-rows-[auto_auto] md:leading-[25.0672px]">
            <h3 className="text-white text-[14px] font-semibold font-space_grotesk box-border caret-transparent leading-[17px] mt-0 mb-6 md:text-[30px] md:leading-[36px]">
              {props.title}
            </h3>
            <p className="text-[8.5px] font-normal box-border caret-transparent leading-[14px] mb-0 text-left md:text-[18px] md:leading-[30px]">
              {props.description}
            </p>
          </div>
          {props.showChart && (
            <div className="relative text-[7.5649px] items-center box-border caret-transparent gap-x-0 flex justify-start leading-[12.1038px] gap-y-0 md:text-[15.667px] md:leading-[25.0672px]">
              <div className="absolute text-[0.375rem] font-light bg-black/70 box-border caret-transparent leading-[9.6px] px-[15px] left-[230px] -top-5"></div>
              <div className="absolute text-[0.375rem] font-light bg-black/70 box-border caret-transparent leading-[9.6px] px-[15px] left-[180px] -top-5"></div>
              <div className="absolute text-[0.375rem] font-light bg-black/70 box-border caret-transparent leading-[9.6px] px-[15px] left-[100px] -top-5"></div>
              <div className="absolute text-[0.375rem] font-light bg-black/70 box-border caret-transparent leading-[9.6px] px-[15px] left-[50px] -top-5"></div>
              <div className="absolute text-[0.375rem] font-light bg-black/70 box-border caret-transparent leading-[9.6px] px-[15px] left-[0%] -top-5"></div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
