import type { ReactNode } from "react";

export type FooterColumnProps = {
  title: ReactNode;
  variant: "contact" | "links";
  links?: Array<{
    text: React.ReactNode;
    href: string;
    hasExternalIcon?: boolean;
  }>;
  contactButtonText?: string;
  contactButtonHref?: string;
};

export const FooterColumn = (props: FooterColumnProps) => {
  if (props.variant === "contact") {
    return (
      <div className="text-[15.1297px] box-border caret-transparent leading-[24.2075px] text-nowrap md:text-[15.667px] md:leading-[25.0672px]">
        <h3 className="text-white text-[22.6946px] font-bold box-border caret-transparent leading-[25.5314px] text-nowrap md:text-[17.6254px] md:leading-[19.8286px]">
          {props.title}
        </h3>
        <div className="text-[15.1297px] box-border caret-transparent flex leading-[24.2075px] text-nowrap md:text-[15.667px] md:leading-[25.0672px] items-start justify-start pt-[37.8243px] md:pt-[39.1675px]">
          <a
            href={props.contactButtonHref}
            className="items-center box-border caret-transparent flex text-nowrap relative text-white text-[18.9121px] font-semibold bg-blue-700 gap-x-[13.2385px] auto-cols-[1fr] grid-cols-[1fr_1fr] grid-rows-[auto_auto] justify-center leading-[24.5858px] max-w-[300px] order-last gap-y-[13.2385px] px-[15.1297px] py-[7.56485px] rounded-[3.78243px] md:text-[19.5838px] md:gap-x-[13.7086px] md:leading-[25.4589px] md:gap-y-[13.7086px] md:px-[15.667px] md:py-[7.83351px] md:rounded-[3.91675px] hover:bg-fuchsia-500"
          >
            <div className="box-border caret-transparent text-nowrap text-[18.9121px] leading-[24.5858px] md:text-[19.5838px] md:leading-[25.4589px]">
              {props.contactButtonText}
            </div>
            <div className="items-center box-border caret-transparent flex justify-start text-nowrap before:accent-auto before:caret-transparent before:table before:not-italic before:normal-nums before:col-end-2 before:col-start-1 before:row-end-2 before:row-start-1 before:tracking-[normal] before:list-outside before:list-disc before:pointer-events-auto before:text-left before:indent-[0px] before:normal-case before:text-nowrap before:visible before:border-separate before:font-space_grotesk after:accent-auto after:caret-transparent after:clear-both after:table after:not-italic after:normal-nums after:col-end-2 after:col-start-1 after:row-end-2 after:row-start-1 after:tracking-[normal] after:list-outside after:list-disc after:pointer-events-auto after:text-left after:indent-[0px] after:normal-case after:text-nowrap after:visible after:border-separate after:font-space_grotesk text-[18.9121px] leading-[24.5858px] w-[8.32134px] md:text-[19.5838px] md:leading-[25.4589px] md:w-[8.61686px] before:text-white before:text-[18.9121px] before:font-semibold before:leading-[24.5858px] before:md:text-[19.5838px] before:md:leading-[25.4589px] after:text-white after:text-[18.9121px] after:font-semibold after:leading-[24.5858px] after:md:text-[19.5838px] after:md:leading-[25.4589px]">
              <img
                src="https://c.animaapp.com/mhjqsyis9DbJQx/assets/icon-1.svg"
                alt="Icon"
                className="box-border caret-transparent h-full text-nowrap w-full text-[18.9121px] leading-[24.5858px] md:text-[19.5838px] md:leading-[25.4589px]"
              />
            </div>
          </a>
        </div>
      </div>
    );
  }

  return (
    <div className="text-[15.1297px] box-border caret-transparent leading-[24.2075px] text-nowrap md:text-[15.667px] md:leading-[25.0672px]">
      <div className="text-[15.1297px] box-border caret-transparent flex leading-[24.2075px] text-nowrap md:text-[15.667px] md:leading-[25.0672px] gap-x-[18.9121px] flex-col gap-y-[18.9121px] md:gap-x-[19.5838px] md:gap-y-[19.5838px]">
        <h3 className="text-white text-[22.6946px] font-bold box-border caret-transparent tracking-[1.26068px] leading-[25.5314px] uppercase text-nowrap md:text-[17.6254px] md:tracking-[0.979091px] md:leading-[19.8286px]">
          {props.title}
        </h3>
        {props.links?.map((link, index) => (
          <a
            key={index}
            href={link.href}
            className="text-[15.1297px] font-normal items-center box-border caret-transparent gap-x-[5.67364px] flex shrink-0 justify-start leading-[24.2075px] max-w-full gap-y-[5.67364px] text-nowrap pr-[3.78243px] md:text-[15.667px] md:gap-x-[5.87513px] md:leading-[25.0672px] md:gap-y-[5.87513px] md:pr-[3.91675px] hover:text-cyan-400 hover:border-cyan-400"
          >
            <div className="text-[15.1297px] box-border caret-transparent leading-[24.2075px] text-nowrap md:text-[15.667px] md:leading-[25.0672px]">
              {link.text}
            </div>
            {link.hasExternalIcon && (
              <div className="text-[15.1297px] items-center box-border caret-transparent flex justify-start leading-[24.2075px] text-nowrap w-[7.56485px] md:text-[15.667px] md:leading-[25.0672px] md:w-[7.83351px] before:accent-auto before:caret-transparent before:text-white/70 before:table before:text-[15.1297px] before:not-italic before:normal-nums before:font-normal before:col-end-2 before:col-start-1 before:row-end-2 before:row-start-1 before:tracking-[normal] before:leading-[24.2075px] before:list-outside before:list-disc before:pointer-events-auto before:text-left before:indent-[0px] before:normal-case before:text-nowrap before:visible before:border-separate before:font-space_grotesk before:md:text-[15.667px] before:md:leading-[25.0672px] after:accent-auto after:caret-transparent after:clear-both after:text-white/70 after:table after:text-[15.1297px] after:not-italic after:normal-nums after:font-normal after:col-end-2 after:col-start-1 after:row-end-2 after:row-start-1 after:tracking-[normal] after:leading-[24.2075px] after:list-outside after:list-disc after:pointer-events-auto after:text-left after:indent-[0px] after:normal-case after:text-nowrap after:visible after:border-separate after:font-space_grotesk after:md:text-[15.667px] after:md:leading-[25.0672px]">
                <img
                  src="https://c.animaapp.com/mhjqsyis9DbJQx/assets/icon-3.svg"
                  alt="Icon"
                  className="text-[15.1297px] box-border caret-transparent h-full leading-[24.2075px] text-nowrap w-full md:text-[15.667px] md:leading-[25.0672px]"
                />
              </div>
            )}
          </a>
        ))}
      </div>
    </div>
  );
};
