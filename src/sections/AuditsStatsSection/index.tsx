import { StatCard } from "@/sections/AuditsStatsSection/components/StatCard";
import { AnimatedSection } from "@/shared/components/AnimatedSection";

export const AuditsStatsSection = () => {
  return (
    <div className="text-[15.1297px] box-border caret-transparent leading-[24.2075px] text-center pb-[20px] md:text-[15.667px] md:leading-[25.0672px] md:pb-[20px]">
      <div className="text-[15.1297px] box-border caret-transparent leading-[24.2075px] max-w-[1248.2px] w-full mx-auto px-[25px] py-5 md:text-[15.667px] md:leading-[25.0672px] md:max-w-[1292.53px]">
        <AnimatedSection direction="left">
          <h2 className="text-cyan-400 text-[42px] font-bold box-border caret-transparent leading-[50.4px] text-left my-[18.9121px] md:text-[50.9178px] md:leading-[61.1014px] md:my-[19.5838px]">
          Principaux risques de l’infrastructure numérique publique
        </h2>
        </AnimatedSection>
        <AnimatedSection delay={0.1} direction="left">
          <p className="text-[23.7565px] font-normal box-border caret-transparent leading-[36.8104px] max-w-[714.879px] text-left text-justify w-full mb-[15.1297px] md:text-[24.5292px] md:leading-[38.0467px] md:max-w-[740.267px] md:mb-[62.6681px]">
          La maturité d’une infrastructure numérique se mesure à sa capacité à absorber les incidents, à résister aux attaques et à garantir la continuité de service. Voici les trois catégories de risques les plus fréquemment observées dans les projets d’infrastructure publique.
          <br className="text-[23.7565px] box-border caret-transparent leading-[36.8104px] md:text-[24.5292px] md:leading-[38.0467px]" />
        </p>
        </AnimatedSection>
        <div className="text-[15.1297px] box-border caret-transparent gap-x-[33.1038px] flex flex-col auto-cols-[1fr] [grid-template-areas:'._._Area'] grid-cols-[1fr] grid-rows-[auto] leading-[24.2075px] gap-y-[33.1038px] md:text-[15.667px] md:gap-x-[34.2794px] md:grid md:flex-row md:grid-cols-[1fr_1fr_1fr] md:leading-[25.0672px] md:gap-y-[34.2794px]">
          <AnimatedSection delay={0.2} direction="up">
            <StatCard
            title="Segmentation et cloisonnement réseau insuffisants"
            description="L’absence de segmentation VLAN stricte ou de pare-feux internes permet à un incident localisé de se propager à l’ensemble de l’infrastructure. Une architecture bien cloisonnée limite l’impact et facilite le confinement."
          />
          </AnimatedSection>
          <AnimatedSection delay={0.3} direction="up">
            <StatCard
            title="Gestion des accès et des identités"
            description="Des comptes à privilèges mal gouvernés, des secrets en clair dans les configurations ou une absence de MFA constituent les vecteurs d’intrusion les plus courants. Une stratégie IAM robuste et une gestion rigoureuse des secrets réduisent significativement la surface d’attaque."
          />
          </AnimatedSection>
          <AnimatedSection delay={0.4} direction="up">
            <StatCard
            title="Sécurité de la chaîne d’approvisionnement logicielle"
            description={
              <>
                Les dépendances logicielles non vérifiées, les images de conteneurs non durcies et l’absence de SBOM
                constituent des vecteurs d’attaque croissants pour les systèmes publics.
                Une démarche DevSecOps avec SCA, SAST et contrôle des artefacts réduit ce risque de façon mesurable.
              </>
            }
            showChart={true}
          />
          </AnimatedSection>
        </div>
      </div>
    </div>
  );
};
