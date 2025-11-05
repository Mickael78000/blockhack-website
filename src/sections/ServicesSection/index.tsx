import { ServiceCard } from "@/sections/ServicesSection/components/ServiceCard";
import { AnimatedSection } from "@/components/AnimatedSection";

export const ServicesSection = () => {
  return (
    <div className="text-[15.1297px] box-border caret-transparent leading-[24.2075px] object-[0%_50%] pt-[50px] pb-20 md:text-[15.667px] md:leading-[25.0672px]">
      <div className="text-[15.1297px] box-border caret-transparent leading-[24.2075px] max-w-[1248.2px] w-full mx-auto px-[25px] py-5 md:text-[15.667px] md:leading-[25.0672px] md:max-w-[1292.53px]">
        <AnimatedSection direction="up">
          <h2 className="text-cyan-400 text-[42px] font-bold box-border caret-transparent leading-[50.4px] text-left my-[18.9121px] md:text-[50.9178px] md:leading-[61.1014px] md:my-[19.5838px]">
            Services d'audit pour des lancements EVM résilients
          </h2>
        </AnimatedSection>
        <div className="text-[15.1297px] box-border caret-transparent gap-x-[33.1038px] flex flex-col auto-cols-[1fr] [grid-template-areas:'._._Area'] grid-cols-[1fr] grid-rows-[auto] leading-[24.2075px] gap-y-[33.1038px] mt-0 md:text-[15.667px] md:gap-x-[34.2794px] md:grid md:flex-row md:grid-cols-[1fr_1fr_1fr] md:leading-[25.0672px] md:gap-y-[34.2794px] md:mt-[62.6681px]">
          <AnimatedSection delay={0.1} direction="up">
            <ServiceCard
              iconUrl="https://cdn.prod.website-files.com/6621233fd44f04553ba73645/66ccc0b538ab927b755e1d2a_icon%20frame1.svg"
              iconAlt="audit assessment icon"
              title="Audits de Smart Contracts EVM"
              description="Revues manuelles complètes, fuzzing basé sur des scénarios et simulation d'exploits conçus pour que votre protocole atteigne le mainnet sans incidents du premier jour."
              hasDecorations={false}
            />
          </AnimatedSection>
          <AnimatedSection delay={0.2} direction="up">
            <ServiceCard
              iconUrl="https://cdn.prod.website-files.com/6621233fd44f04553ba73645/66ccc0b5689fef43d42e73bc_icon%20frame2.svg"
              iconAlt="security tooling icon"
              title="Outils d'audit sur mesure"
              description="Nous faisons évoluer Wake et des scanners propriétaires en parallèle des audits actifs, offrant à votre équipe une couverture continue ajustée à la dernière surface d'attaque."
              hasDecorations={false}
            />
          </AnimatedSection>
          <AnimatedSection delay={0.3} direction="up">
            <ServiceCard
              iconUrl="https://cdn.prod.website-files.com/6621233fd44f04553ba73645/66ccc0b5fde90790faf95ff2_icon%20frame3.svg"
              iconAlt="security education icon"
              title="Renforcement de la sécurité"
              description="Ateliers, guides opérationnels et exercices red-team qui intègrent la pensée incident BlockHack.io dans vos développeurs avant l'arrivée du trafic mainnet."
              hasDecorations={true}
            />
          </AnimatedSection>
        </div>
      </div>
    </div>
  );
};
