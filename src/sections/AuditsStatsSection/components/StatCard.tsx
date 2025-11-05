export type StatCardProps = {
  title: string;
  description: React.ReactNode;
  variant?: string;
  showChart?: boolean;
};

export const StatCard = (props: StatCardProps) => {
  return (
    <div
      className={`relative text-[15.1297px] box-border caret-transparent flex leading-[24.2075px] mt-[30.2594px] md:text-[15.667px] md:leading-[25.0672px] md:mt-0${props.variant ? ` ${props.variant}` : ""}`}
    >
      <div className="relative text-[15.1297px] shadow-[rgba(255,255,255,0.17)_1px_1px_3px_0px_inset,rgba(0,0,0,0.67)_5px_5px_28px_4px] box-border caret-transparent saturate-100 leading-[24.2075px] md:text-[15.667px] md:leading-[25.0672px]">
        <div className="absolute text-[15.1297px] backdrop-blur-[13px] bg-black/50 box-border caret-transparent leading-[24.2075px] z-[1] inset-[0%] md:text-[15.667px] md:leading-[25.0672px]"></div>
        <div className="relative text-[15.1297px] bg-stone-950 box-border caret-transparent h-full leading-[24.2075px] text-left z-[2] border border-zinc-800 px-[22.6946px] py-[30.2594px] rounded-bl rounded-br rounded-tl rounded-tr border-solid md:text-[15.667px] md:leading-[25.0672px] md:pt-[54.8346px] md:pb-[47.0011px] md:px-[47.0011px]">
          <div className="text-[15.1297px] items-start box-border caret-transparent gap-x-[15.1297px] grid flex-col auto-cols-[1fr] grid-cols-[1fr] grid-rows-[auto_auto] h-full justify-around leading-[24.2075px] gap-y-0 md:text-[15.667px] md:gap-x-[15.667px] md:grid-rows-[141.003px_auto] md:leading-[25.0672px]">
            <h3 className="text-white text-[30.2594px] box-border caret-transparent leading-[34.0418px] my-5 md:text-[31.334px] md:leading-[35.2508px]">
              {props.title}
            </h3>
            <p className="text-[19.0209px] font-light box-border caret-transparent leading-[29.2335px] mb-2.5 text-justify md:text-[19.6254px] md:leading-[30.2006px]">
              {props.description}
            </p>
          </div>
          {props.showChart && (
            <div className="relative text-[15.1297px] items-center box-border caret-transparent gap-x-0 flex justify-start leading-[24.2075px] gap-y-0 md:text-[15.667px] md:leading-[25.0672px]">
              <div className="absolute text-xs font-light bg-black/70 box-border caret-transparent leading-[19.2px] px-[15px] left-[230px] -top-5"></div>
              <div className="absolute text-xs font-light bg-black/70 box-border caret-transparent leading-[19.2px] px-[15px] left-[180px] -top-5"></div>
              <div className="absolute text-xs font-light bg-black/70 box-border caret-transparent leading-[19.2px] px-[15px] left-[100px] -top-5"></div>
              <div className="absolute text-xs font-light bg-black/70 box-border caret-transparent leading-[19.2px] px-[15px] left-[50px] -top-5"></div>
              <div className="absolute text-xs font-light bg-black/70 box-border caret-transparent leading-[19.2px] px-[15px] left-[0%] -top-5"></div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
