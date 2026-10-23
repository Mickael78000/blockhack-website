export type EducationCardProps = {
  href: string;
  title: string;
  description: string;
  partnerLogoSrc: string;
  partnerLogoAlt: string;
  dateLabel: string;
  dateValue: string;
  buttonText: string;
  buttonIconSrc: string;
  buttonIconAlt: string;
};

export const EducationCard = (props: EducationCardProps) => {
  return (
    <a
      href={props.href}
      className="text-[7.5649px] font-light bg-zinc-800 box-border caret-transparent flex shrink-0 h-full leading-[12.1038px] max-w-full p-px rounded-bl rounded-br rounded-tl rounded-tr md:text-[15.667px] md:leading-[25.0672px] hover:bg-transparent"
    >
      <div className="relative text-[7.5649px] bg-stone-950 box-border caret-transparent h-full leading-[12.1038px] w-full z-[2] border border-zinc-800 px-[22.6946px] py-[18.9121px] rounded-bl rounded-br rounded-tl rounded-tr border-solid md:text-[15.667px] md:leading-[25.0672px] md:w-auto md:pt-[54.8346px] md:pb-[39.1675px] md:px-[47.0011px]">
        <h3 className="text-white text-[15.1297px] font-medium box-border caret-transparent leading-[17.0209px] my-5 md:text-[31.334px] md:leading-[35.2508px]">
          {props.title}
        </h3>
        <p className="text-[9.5105px] font-normal box-border caret-transparent leading-[14.2386px] mb-2.5 text-justify md:text-[19.6254px] md:leading-[29.4174px]">
          {props.description}
        </p>
        <div className="text-[7.5649px] box-border caret-transparent leading-[12.1038px] mt-[45.3891px] md:text-[15.667px] md:leading-[25.0672px] md:mt-[47.0011px]">
          <div className="text-white/50 text-[5.6737px] box-border caret-transparent tracking-[1.53188px] leading-[9.0778px] uppercase mb-[18.9121px] md:text-[11.7503px] md:tracking-[1.58629px] md:leading-[18.8004px] md:mb-[19.5838px]">
            Educational partner of
          </div>
          <img
            src={props.partnerLogoSrc}
            alt={props.partnerLogoAlt}
            className="text-[7.5649px] box-border caret-transparent inline-block h-[37.8243px] leading-[12.1038px] max-w-full md:text-[15.667px] md:h-[39.1675px] md:leading-[25.0672px]"
          />
        </div>
        <div className="text-[7.5649px] box-border caret-transparent leading-[12.1038px] mt-[45.3891px] md:text-[15.667px] md:leading-[25.0672px] md:mt-[47.0011px]">
          <div className="text-[8.5105px] font-normal box-border caret-transparent leading-[13.2386px] md:text-[17.6254px] md:leading-[27.4174px]">
            {props.dateLabel}
          </div>
          <div className="text-white text-[10.4017px] font-semibold box-border caret-transparent leading-[16.6427px] mb-5 md:text-[21.5422px] md:leading-[34.4674px]">
            {props.dateValue}
          </div>
          <div className="text-white text-[9.4561px] font-medium items-center box-border caret-transparent gap-x-[11.3473px] inline-flex justify-start leading-[15.1297px] gap-y-[11.3473px] mt-auto pr-[7.56485px] py-[7.56485px] md:text-[19.5838px] md:gap-x-[11.7503px] md:leading-[31.334px] md:gap-y-[11.7503px] md:pr-[7.83351px] md:py-[7.83351px] hover:text-fuchsia-500 hover:border-fuchsia-500">
            <div className="text-[9.4561px] box-border caret-transparent leading-[15.1297px] md:text-[19.5838px] md:leading-[31.334px]">
              {props.buttonText}
            </div>
            <div className="text-[9.4561px] items-center box-border caret-transparent flex justify-start leading-[15.1297px] w-[8.32134px] md:text-[19.5838px] md:leading-[31.334px] md:w-[8.61686px] before:accent-auto before:caret-transparent before:text-white before:table before:text-[9.4561px] before:not-italic before:normal-nums before:font-medium before:col-end-2 before:col-start-1 before:row-end-2 before:row-start-1 before:tracking-[normal] before:leading-[15.1297px] before:list-outside before:list-disc before:pointer-events-auto before:text-left before:indent-[0px] before:normal-case before:visible before:border-separate before:font-space_grotesk before:md:text-[19.5838px] before:md:leading-[31.334px] after:accent-auto after:caret-transparent after:clear-both after:text-white after:table after:text-[9.4561px] after:not-italic after:normal-nums after:font-medium after:col-end-2 after:col-start-1 after:row-end-2 after:row-start-1 after:tracking-[normal] after:leading-[15.1297px] after:list-outside after:list-disc after:pointer-events-auto after:text-left after:indent-[0px] after:normal-case after:visible after:border-separate after:font-space_grotesk after:md:text-[19.5838px] after:md:leading-[31.334px]">
              <img
                src={props.buttonIconSrc}
                alt={props.buttonIconAlt}
                className="text-[9.4561px] box-border caret-transparent h-full leading-[15.1297px] w-full md:text-[19.5838px] md:leading-[31.334px]"
              />
            </div>
          </div>
        </div>
      </div>
    </a>
  );
};
