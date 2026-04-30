import { ServiceCard } from "@/sections/ServicesSection/components/ServiceCard";
import { AnimatedSection } from "@/shared/components/AnimatedSection";

export const ServicesSection = () => {
  return (
    <div className="text-[15.1297px] box-border caret-transparent leading-[24.2075px] object-[0%_50%] pt-[30px] pb-[20px] md:text-[15.667px] md:leading-[25.0672px]">
      <div className="text-[15.1297px] box-border caret-transparent leading-[24.2075px] max-w-[1248.2px] w-full mx-auto px-[25px] py-5 md:text-[15.667px] md:leading-[25.0672px] md:max-w-[1292.53px]">
        <AnimatedSection direction="up">
          <h2 className="text-cyan-400 text-[42px] font-bold box-border caret-transparent leading-[50.4px] text-left my-[18.9121px] md:text-[50.9178px] md:leading-[61.1014px] md:my-[19.5838px]">
            Ingénierie, DevSecOps et AMO pour l'infrastructure numérique publique
          </h2>
        </AnimatedSection>
        <div className="text-[15.1297px] box-border caret-transparent gap-x-[33.1038px] flex flex-col auto-cols-[1fr] items-stretch content-stretch [grid-template-areas:'._._Area'] grid-cols-[1fr] grid-rows-[auto] leading-[24.2075px] gap-y-[33.1038px] mt-0 md:text-[15.667px] md:gap-x-[34.2794px] md:grid md:flex-row md:items-stretch md:content-stretch md:grid-cols-[1fr_1fr_1fr] md:leading-[25.0672px] md:gap-y-[34.2794px] md:mt-[62.6681px]">
          <AnimatedSection delay={0.1} direction="up" className="h-full">
            <ServiceCard
              iconUrl="https://cdn.prod.website-files.com/6621233fd44f04553ba73645/66ccc0b538ab927b755e1d2a_icon%20frame1.svg"
              iconAlt="audit assessment icon"
              title="Conception d'architectures réseau et télécoms"
              description="Architectures réseau robustes et gouvernables pour collectivités, établissements publics et opérateurs parapublics : segmentation, redondance, VPN/SD-WAN, supervision et documentation d'exploitation."
              hasDecorations={false}
            />
          </AnimatedSection>
          <AnimatedSection delay={0.2} direction="up" className="h-full">
            <ServiceCard
              iconUrl="https://cdn.prod.website-files.com/6621233fd44f04553ba73645/66ccc0b5689fef43d42e73bc_icon%20frame2.svg"
              iconAlt="security tooling icon"
              title="DevSecOps et S-SDLC"
              description="Intégration de la sécurité dans le cycle de vie logiciel : security by design, SAST/DAST/SCA, SBOM, gestion des secrets, IaC. Alignement sur les recommandations ANSSI et les référentiels NIS2, DORA et CRA."
              hasDecorations={false}
            />
          </AnimatedSection>
          <AnimatedSection delay={0.3} direction="up" className="h-full">
            <ServiceCard
              iconUrl="https://cdn.prod.website-files.com/6621233fd44f04553ba73645/66ccc0b5fde90790faf95ff2_icon%20frame3.svg"
              iconAlt="security education icon"
              title="AMO et marchés publics"
              description="Assistance à maîtrise d'ouvrage pour la structuration et le pilotage de projets d'infrastructure numérique : cahier des charges, analyse des offres, mémoire technique, mandataire de groupement et suivi d'exécution."
              hasDecorations={true}
            />
          </AnimatedSection>
        </div>
      </div>
    </div>
  );
};
