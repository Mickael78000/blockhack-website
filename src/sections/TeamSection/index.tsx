import { TeamMemberCard } from "@/sections/TeamSection/components/TeamMemberCard";
import { AnimatedSection } from "@/components/AnimatedSection";

export const TeamSection = () => {
  return (
    <div className="text-[15.1297px] bg-no-repeat bg-size-[15%] box-border caret-transparent leading-[24.2075px] bg-[position:34%_91%] pt-[30px] pb-[20px] md:text-[15.667px] md:leading-[25.0672px]">
      <div className="relative text-[15.1297px] box-border caret-transparent leading-[24.2075px] max-w-[1248.2px] text-left w-full z-[5] ml-0 mr-auto mt-10 pt-[60px] pb-5 px-[25px] md:text-[15.667px] md:leading-[25.0672px] md:max-w-[1292.53px] md:ml-auto">
        <h2 className="text-cyan-400 text-[42px] font-bold box-border caret-transparent leading-[50.4px] my-[18.9121px] md:text-[50.9178px] md:leading-[61.1014px] md:my-[19.5838px]">
          Foundateur
        </h2>
        <p className="text-[24.6946px] text-center font-normal box-border caret-transparent leading-[30.3682px] max-w-[870px] w-full mb-2.5 text-justify md:text-[25.5005px] md:leading-[31.3757px] md:max-w-[900px]">
         Avec des années d’expérience, je vous apporterai la confiance et la détermination nécessaires pour guider notre succès commun.
        </p>
        <div className="text-[15.1297px] content-center items-center box-border caret-transparent gap-x-[15.1297px] flex flex-col auto-cols-[1fr] [grid-template-areas:'._._Area'] grid-cols-[1fr] grid-rows-[auto] justify-items-center justify-center leading-[24.2075px] gap-y-[30.2594px] mt-[15.1297px] w-full md:text-[15.667px] md:gap-x-[31.334px] md:flex md:flex-row md:leading-[25.0672px] md:gap-y-[31.334px] md:mt-[58.7513px]">
          <AnimatedSection delay={0.1} direction="up">
            <TeamMemberCard
            imageUrl="/images/founder.JPG"
            imageAlt="picture of mickael girondeau"
            name="Mickaël Girondeau"
            title=""
          />
          </AnimatedSection>
          
          
        </div>
        <div className="text-[15.1297px] items-start box-border caret-transparent gap-x-[30.2594px] grid auto-cols-[1fr] grid-cols-[1fr] grid-rows-[auto] justify-items-start leading-[24.2075px] gap-y-[30.2594px] mt-[30.2594px] md:text-[15.667px] md:gap-x-[31.334px] md:grid-cols-[0.5fr_1fr_1fr_0.5fr] md:leading-[25.0672px] md:gap-y-[31.334px] md:mt-[47.0011px]">
          <div className="text-[15.1297px] box-border caret-transparent hidden col-end-[span_1] col-start-[span_1] row-end-[span_1] row-start-[span_1] leading-[24.2075px] min-h-0 min-w-0 md:text-[15.667px] md:block md:leading-[25.0672px] md:min-h-[auto] md:min-w-[auto]"></div>
          
          <div className="text-[15.1297px] box-border caret-transparent hidden col-end-[span_1] col-start-[span_1] row-end-[span_1] row-start-[span_1] leading-[24.2075px] min-h-0 min-w-0 md:text-[15.667px] md:block md:leading-[25.0672px] md:min-h-[auto] md:min-w-[auto]"></div>
        </div>
      </div>
    </div>
  );
};
