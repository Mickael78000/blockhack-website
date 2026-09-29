import { StatCard } from "@/sections/AuditsStatsSection/components/StatCard";
import { AnimatedSection } from "@/shared/components/AnimatedSection";

export const AuditsStatsSection = () => {
  return (
    <div className="text-[15.1297px] box-border caret-transparent leading-[24.2075px] text-center pb-[20px] md:text-[15.667px] md:leading-[25.0672px] md:pb-[20px]">
      <div className="text-[15.1297px] box-border caret-transparent leading-[24.2075px] max-w-[1248.2px] w-full mx-auto px-[25px] py-5 md:text-[15.667px] md:leading-[25.0672px] md:max-w-[1292.53px]">
        <AnimatedSection direction="left">
          <h2 className="text-cyan-400 text-[42px] font-bold font-space_grotesk box-border caret-transparent leading-[50.4px] text-left my-[18.9121px] md:text-[50.9178px] md:leading-[61.1014px] md:my-[19.5838px]">
            Ce que vous gagnez
          </h2>
        </AnimatedSection>
        <AnimatedSection delay={0.1} direction="left">
          <p className="text-[18px] font-normal box-border caret-transparent leading-[28px] text-left text-justify w-full mb-[15.1297px] md:text-[19px] md:leading-[30px] md:mb-[62.6681px]">
            Moins de galères devant l’écran, plus de clarté sur ce qui a été fait, et un filet de sécurité raisonnable pour vos fichiers et votre activité.
          </p>
        </AnimatedSection>
        <div className="text-[15.1297px] box-border caret-transparent gap-x-[33.1038px] flex flex-col auto-cols-[1fr] [grid-template-areas:'._._Area'] grid-cols-[1fr] grid-rows-[auto] leading-[24.2075px] gap-y-[33.1038px] md:text-[15.667px] md:gap-x-[34.2794px] md:grid md:flex-row md:grid-cols-[1fr_1fr_1fr] md:leading-[25.0672px] md:gap-y-[34.2794px]">
          <AnimatedSection delay={0.2} direction="up">
            <StatCard
              title="Du temps"
              description="Moins d’attente, moins de bricolage, moins de recherche de documents. Vous vous concentrez sur votre métier ou votre quotidien."
            />
          </AnimatedSection>
          <AnimatedSection delay={0.3} direction="up">
            <StatCard
              title="De la clarté"
              description="J’explique ce que je fais, dans un langage normal. Vous n’êtes pas laissé dans le noir, ni obligé d’être « calé en informatique »."
            />
          </AnimatedSection>
          <AnimatedSection delay={0.4} direction="up">
            <StatCard
              title="De la tranquillité"
              description="Sauvegardes, mises à jour, bons réflexes de sécurité. Pas d’invulnérabilité promise : une robustesse raisonnable, tenue dans la durée si vous le souhaitez."
              showChart={true}
            />
          </AnimatedSection>
        </div>
      </div>
    </div>
  );
};
