"use client";

import Image from "next/image";
import { HeroContent } from "@/sections/Hero/components/HeroContent";
//import { ClientLogos } from "@/sections/Hero/components/ClientLogos";
import { motion, useReducedMotion } from "framer-motion";

export const Hero = () => {
  const reduceMotion = useReducedMotion();

  return (
    <div className="relative text-[7.5649px] items-center bg-no-repeat bg-size-[300px] box-border caret-transparent flex flex-col h-full leading-[12.1038px] min-h-0 bg-[position:100%_0px] mb-0 pt-0 md:text-[15.667px] md:bg-auto md:flex-row md:leading-[25.0672px] md:min-h-[1000px] md:mb-[62.6681px] md:pt-[50px]">
      <div className="relative text-[7.5649px] box-border caret-transparent flex flex-col leading-[12.1038px] max-w-[1248.2px] text-left w-full z-[5] ml-0 mr-auto mt-10 pt-[60px] pb-5 px-[25px] md:text-[15.667px] md:block md:flex-row md:leading-[25.0672px] md:max-w-[1292.53px] md:ml-auto">
        <motion.div 
          initial={reduceMotion ? false : { opacity: 0, scale: 0.8, rotate: -5 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={reduceMotion ? { duration: 0 } : { duration: 1.2, ease: [0.25, 0.1, 0.25, 1] }}
          className="relative text-[7.5649px] items-start box-border caret-transparent flex justify-end leading-[12.1038px] min-h-[auto] min-w-[auto] order-1 w-full pt-[45.3891px] inset-[0%] md:absolute md:text-[15.667px] md:leading-[25.0672px] md:min-h-0 md:min-w-0 md:order-none md:w-auto md:pt-0"
        >
          <Image
            alt=""
            src="https://c.animaapp.com/mhjqsyis9DbJQx/img/chatgpt-image-nov-4-2025-12_14_22-am.png"
            width={835}
            height={705}
            sizes="(max-width: 768px) 100vw, 60vw"
            priority
            className="relative text-base aspect-[auto_835_/_705] box-border caret-transparent shrink-0 leading-[12.1038px] mr-[-10%] min-w-[110%] w-[110%] h-auto mt-[0%] md:text-[15.667px] md:leading-[25.0672px] md:mr-[-7%] md:mt-[-31.334px] md:min-w-[auto] md:w-3/5 md:[mask-image:radial-gradient(ellipse_at_center,black_40%,transparent_80%)] md:[-webkit-mask-image:radial-gradient(ellipse_at_center,black_40%,transparent_80%)]"
          />
        </motion.div>
        <HeroContent />
        {/* <ClientLogos /> */}
      </div>
    </div>
  );
};
