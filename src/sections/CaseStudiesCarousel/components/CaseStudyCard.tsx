export type CaseStudyCardProps = {
  tags: string[];
  title: string;
  description: string;
  testimonialQuote: string;
  testimonialAuthor: string;
  logoUrl: string;
  logoAlt: string;
  logoClassName?: string;
  figureClassName?: string;
  additionalContent?: React.ReactNode;
};

export const CaseStudyCard = (props: CaseStudyCardProps) => {
  return (
    <div className="text-[15.1297px] box-border caret-transparent leading-[24.2075px] pt-[60px] pb-10 px-0 md:text-[15.667px] md:leading-[25.0672px] md:px-[100px]">
      <div className="text-[15.1297px] box-border caret-transparent leading-[24.2075px] md:text-[15.667px] md:leading-[25.0672px]">
        <div
          role="list"
          className="text-[15.1297px] items-center box-border caret-transparent flex flex-wrap justify-start leading-[24.2075px] md:text-[15.667px] md:flex-nowrap md:leading-[25.0672px]"
        >
          {props.tags.map((tag, index) => (
            <div
              key={index}
              role="listitem"
              className="text-[15.1297px] box-border caret-transparent leading-[24.2075px] md:text-[15.667px] md:leading-[25.0672px]"
            >
              <div className="text-white text-lg bg-fuchsia-500 box-border caret-transparent leading-[28.8px] uppercase mr-3 mb-2.5 px-2 md:mb-0">
                <div className="box-border caret-transparent">{tag}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <h1 className="text-white text-[52.954px] font-bold box-border caret-transparent leading-[52.954px] my-[18.9121px] md:text-[70.5016px] md:leading-[84.6019px] md:my-[19.5838px]">
        {props.title}
      </h1>
      <p className="text-[21.7565px] font-normal box-border caret-transparent leading-[34.8104px] max-w-[714.879px] text-left w-full mb-2.5 md:text-[22.5292px] md:leading-[36.0467px] md:max-w-[740.267px]">
        {props.description}
      </p>
      <div className="relative text-[15.1297px] bg-stone-950 shadow-none box-border caret-transparent saturate-100 leading-[24.2075px] max-w-[696px] text-left w-full border border-zinc-800 mt-[60px] mx-auto px-0 rounded-bl rounded-br rounded-tl rounded-tr border-solid md:text-[15.667px] md:shadow-[rgba(0,0,0,0.67)_5px_5px_28px_4px] md:leading-[25.0672px] md:px-2.5">
        <div className="relative text-[15.1297px] box-border caret-transparent leading-[24.2075px] z-[2] p-5 md:text-[15.667px] md:leading-[25.0672px] md:p-[30px]">
          <div className="text-[15.1297px] box-border caret-transparent leading-[24.2075px] md:text-[15.667px] md:leading-[25.0672px] before:accent-auto before:caret-transparent before:text-white/70 before:table before:text-[15.1297px] before:not-italic before:normal-nums before:font-medium before:col-end-2 before:col-start-1 before:row-end-2 before:row-start-1 before:tracking-[normal] before:leading-[24.2075px] before:list-outside before:list-disc before:pointer-events-auto before:text-left before:indent-[0px] before:normal-case before:visible before:border-separate before:font-space_grotesk before:md:text-[15.667px] before:md:leading-[25.0672px] after:accent-auto after:caret-transparent after:clear-both after:text-white/70 after:table after:text-[15.1297px] after:not-italic after:normal-nums after:font-medium after:col-end-2 after:col-start-1 after:row-end-2 after:row-start-1 after:tracking-[normal] after:leading-[24.2075px] after:list-outside after:list-disc after:pointer-events-auto after:text-left after:indent-[0px] after:normal-case after:visible after:border-separate after:font-space_grotesk after:md:text-[15.667px] after:md:leading-[25.0672px]">
            <p className="text-[17.0209px] font-light box-border caret-transparent leading-[20.8033px] mb-[15px] md:text-[17.6254px] md:leading-[21.5421px]">
              <em className="text-[17.0209px] italic box-border caret-transparent leading-[20.8033px] md:text-[17.6254px] md:leading-[21.5421px]">
                {props.testimonialQuote}
              </em>
            </p>
            <p className="text-[17.0209px] font-light box-border caret-transparent leading-[20.8033px] mb-[15px] md:text-[17.6254px] md:leading-[21.5421px]">
              {props.testimonialAuthor}
            </p>
            <figure
              className={
                props.figureClassName ||
                "relative text-[15.1297px] box-border caret-transparent table float-right leading-[24.2075px] max-w-[150px] ml-[15px] md:text-[15.667px] md:leading-[25.0672px]"
              }
            >
              <div className="text-transparent text-[0px] box-border inline-block leading-[0px]">
                <img
                  src={props.logoUrl}
                  alt={props.logoAlt}
                  className={
                    props.logoClassName ||
                    "box-border max-h-[60px] max-w-full text-center w-full md:text-left"
                  }
                />
              </div>
            </figure>
            {props.additionalContent}
          </div>
        </div>
        <div className="absolute text-[15.1297px] backdrop-blur-[13px] bg-black/50 box-border caret-transparent leading-[24.2075px] z-[1] inset-[0%] md:text-[15.667px] md:leading-[25.0672px]"></div>
      </div>
    </div>
  );
};
