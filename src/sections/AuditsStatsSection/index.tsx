import { StatCard } from "@/sections/AuditsStatsSection/components/StatCard";
import { AnimatedSection } from "@/components/AnimatedSection";

export const AuditsStatsSection = () => {
  return (
    <div className="text-[15.1297px] box-border caret-transparent leading-[24.2075px] text-center pb-[30.2594px] md:text-[15.667px] md:leading-[25.0672px] md:pb-[97.9189px]">
      <div className="text-[15.1297px] box-border caret-transparent leading-[24.2075px] max-w-[1248.2px] w-full mx-auto px-[25px] py-5 md:text-[15.667px] md:leading-[25.0672px] md:max-w-[1292.53px]">
        <AnimatedSection direction="left">
          <h2 className="text-cyan-400 text-[42px] font-bold box-border caret-transparent leading-[50.4px] text-left my-[18.9121px] md:text-[50.9178px] md:leading-[61.1014px] md:my-[19.5838px]">
          Des audits qui vous protègent
        </h2>
        </AnimatedSection>
        <AnimatedSection delay={0.1} direction="left">
          <p className="text-[23.7565px] font-normal box-border caret-transparent leading-[36.8104px] max-w-[714.879px] text-left text-justify w-full mb-[15.1297px] md:text-[24.5292px] md:leading-[38.0467px] md:max-w-[740.267px] md:mb-[62.6681px]">
          Basé sur les statistiques internes de 1442 jours.
          <br className="text-[23.7565px] box-border caret-transparent leading-[36.8104px] md:text-[24.5292px] md:leading-[38.0467px]" />
        </p>
        </AnimatedSection>
        <div className="text-[15.1297px] box-border caret-transparent gap-x-[33.1038px] flex flex-col auto-cols-[1fr] [grid-template-areas:'._._Area'] grid-cols-[1fr] grid-rows-[auto] leading-[24.2075px] gap-y-[33.1038px] md:text-[15.667px] md:gap-x-[34.2794px] md:grid md:flex-row md:grid-cols-[1fr_1fr_1fr] md:leading-[25.0672px] md:gap-y-[34.2794px]">
          <AnimatedSection delay={0.2} direction="up">
            <StatCard
            title="175 audits"
            description="Notre expérience et notre portfolio parlent d'eux-mêmes – approuvés par des leaders de l'industrie tels que Safe, AAVE, Lido et Axelar."
          />
          </AnimatedSection>
          <AnimatedSection delay={0.3} direction="up">
            <StatCard
            title="190 problèmes critiques et élevés dans 83 audits"
            description="Nous avons découvert plus de 1977 problèmes jusqu'à présent. 10% d'entre eux représentent des découvertes critiques et élevées."
          />
          </AnimatedSection>
          <AnimatedSection delay={0.4} direction="up">
            <StatCard
            title="1 jour pour une découverte"
            description={
              <>
                Nos auditeurs découvrent un problème critique ou élevé tous les 8 jours
                ouvrables. Il faut 2 jours ouvrables pour un problème critique, élevé, moyen ou faible
                et moins d'un jour pour toute découverte, en mars 2025.
                <br />‍
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
