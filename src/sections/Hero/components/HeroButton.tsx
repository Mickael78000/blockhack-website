"use client";

import Link from 'next/link';

export const HeroButton = () => {
  return (
    <Link
      href="/contact"
      className="relative text-white text-[9.4561px] font-semibold items-center bg-blue-700 box-border caret-transparent gap-x-[13.2385px] flex auto-cols-[1fr] grid-cols-[1fr_1fr] grid-rows-[auto_auto] justify-center leading-[12.2929px] max-w-[340px] order-last gap-y-[13.2385px] px-[15.1297px] py-[7.56485px] rounded-[3.78243px] md:text-[19.5838px] md:gap-x-[13.7086px] md:leading-[25.4589px] md:gap-y-[13.7086px] md:px-[15.667px] md:py-[7.83351px] md:rounded-[3.91675px] hover:bg-fuchsia-500"
    >
      <div className="text-[9.4561px] box-border caret-transparent leading-[12.2929px] md:text-[19.5838px] md:leading-[25.4589px]">
        Demander un devis gratuit
      </div>
      <div className="text-[9.4561px] items-center box-border caret-transparent flex justify-start leading-[12.2929px] w-[8.32134px] md:text-[19.5838px] md:leading-[25.4589px] md:w-[8.61686px] before:accent-auto before:caret-transparent before:text-white before:table before:text-[9.4561px] before:not-italic before:normal-nums before:font-semibold before:col-end-2 before:col-start-1 before:row-end-2 before:row-start-1 before:tracking-[normal] before:leading-[12.2929px] before:list-outside before:list-disc before:pointer-events-auto before:text-left before:indent-[0px] before:normal-case before:visible before:border-separate before:font-space_grotesk before:md:text-[19.5838px] before:md:leading-[25.4589px] after:accent-auto after:caret-transparent after:clear-both after:text-white after:table after:text-[9.4561px] after:not-italic after:normal-nums after:font-semibold after:col-end-2 after:col-start-1 after:row-end-2 after:row-start-1 after:tracking-[normal] after:leading-[12.2929px] after:list-outside after:list-disc after:pointer-events-auto after:text-left after:indent-[0px] after:normal-case after:visible after:border-separate after:font-space_grotesk after:md:text-[19.5838px] after:md:leading-[25.4589px]">
        <img
          src="https://c.animaapp.com/mhjqsyis9DbJQx/assets/icon-1.svg"
          alt="Icon"
          className="text-[9.4561px] box-border caret-transparent h-full leading-[12.2929px] w-full md:text-[19.5838px] md:leading-[25.4589px]"
        />
      </div>
    </Link>
  );
};
