import { TeamMemberCard } from "@/sections/TeamSection/components/TeamMemberCard";
import { AnimatedSection } from "@/shared/components/AnimatedSection";

export const TeamSection = () => {
  return (
    <div className="text-[15.1297px] bg-no-repeat bg-size-[15%] box-border caret-transparent leading-[24.2075px] bg-[position:34%_91%] pt-[30px] pb-[20px] md:text-[15.667px] md:leading-[25.0672px]">
      <div className="relative text-[15.1297px] box-border caret-transparent leading-[24.2075px] max-w-[1248.2px] text-left w-full z-[5] ml-0 mr-auto mt-10 pt-[60px] pb-5 px-[25px] md:text-[15.667px] md:leading-[25.0672px] md:max-w-[1292.53px] md:ml-auto">
        <h2 className="text-cyan-400 text-[42px] font-bold font-space_grotesk box-border caret-transparent leading-[50.4px] my-[18.9121px] md:text-[50.9178px] md:leading-[61.1014px] md:my-[19.5838px]">
          Fondateur
        </h2>
        
        <p className="text-[18px] text-justify font-normal box-border caret-transparent leading-[30px] max-w-[1100px] w-full mb-4 text-white/80 md:text-[19px] md:leading-[32px] md:max-w-[1200px]">
          Diplômé des Arts et Métiers, j'ai construit mon parcours au sein des armées dans la conduite de projets immobiliers complexes, soumis au code de la commande publique et exercés dans des environnements à forts enjeux de sécurité, de coordination et de respect des délais. Cette première expérience m'a permis de développer une culture solide de la rigueur, de la gestion des risques et du pilotage d'acteurs multiples dans des contextes exigeants.
        </p>
        <p className="text-[18px] text-justify font-normal box-border caret-transparent leading-[30px] max-w-[1100px] w-full mb-6 text-white/80 md:text-[19px] md:leading-[32px] md:max-w-[1200px]">
          En 2025, j'ai engagé une reconversion structurée vers les métiers de l'informatique, en consolidant mes compétences en développement, en réseaux distribués et en architecture technique. Cette montée en compétence a été validée par la certification Alyra RS6515, qui atteste d'un socle technique solide en développement d'applications décentralisées, avec des compétences en conception, développement, tests et déploiement sur blockchain. Aujourd'hui, je souhaite mettre cette double culture projet et technique au service de missions de gestion de projet, d'infogérance, de DevOps et d'infrastructure réseaux, avec une capacité éprouvée à structurer l'action, sécuriser l'exécution et accompagner des projets dans des environnements complexes et évolutifs.
        </p>
        <div className="text-[15.1297px] content-center items-center box-border caret-transparent gap-x-[15.1297px] flex flex-col auto-cols-[1fr] [grid-template-areas:'._._Area'] grid-cols-[1fr] grid-rows-[auto] justify-items-center justify-center leading-[24.2075px] gap-y-[30.2594px] mt-[15.1297px] w-full md:text-[15.667px] md:gap-x-[31.334px] md:flex md:flex-row md:leading-[25.0672px] md:gap-y-[31.334px] md:mt-[58.7513px]">
          <div className="flex justify-center w-full px-4 md:w-1/2 md:px-0">
            <AnimatedSection delay={0.1} direction="up">
              <TeamMemberCard
              imageUrl="/images/founder.webp"
              imageAlt="picture of mickael girondeau"
              name="Mickaël Girondeau"
              title="Ingénieur DevOps spécialisé en Blockchain Assistance à maîtrise d'ouvrage pour l'infrastructure numérique publique"
              subtitle="Mandataire de groupement sur des marchés d'ingénierie, de télécoms et de fibre optique"
            />
            </AnimatedSection>
          </div>
        </div>
        <div className="text-[15.1297px] items-start box-border caret-transparent gap-x-[30.2594px] grid auto-cols-[1fr] grid-cols-[1fr] grid-rows-[auto] justify-items-start leading-[24.2075px] gap-y-[30.2594px] mt-[30.2594px] md:text-[15.667px] md:gap-x-[31.334px] md:grid-cols-[0.5fr_1fr_1fr_0.5fr] md:leading-[25.0672px] md:gap-y-[31.334px] md:mt-[47.0011px]">
          <div className="text-[15.1297px] box-border caret-transparent hidden col-end-[span_1] col-start-[span_1] row-end-[span_1] row-start-[span_1] leading-[24.2075px] min-h-0 min-w-0 md:text-[15.667px] md:block md:leading-[25.0672px] md:min-h-[auto] md:min-w-[auto]"></div>
          
          <div className="text-[15.1297px] box-border caret-transparent hidden col-end-[span_1] col-start-[span_1] row-end-[span_1] row-start-[span_1] leading-[24.2075px] min-h-0 min-w-0 md:text-[15.667px] md:block md:leading-[25.0672px] md:min-h-[auto] md:min-w-[auto]"></div>
        </div>
      </div>
    </div>
  );
};
