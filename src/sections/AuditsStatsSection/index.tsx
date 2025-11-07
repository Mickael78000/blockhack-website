import { StatCard } from "@/sections/AuditsStatsSection/components/StatCard";
import { AnimatedSection } from "@/components/AnimatedSection";

export const AuditsStatsSection = () => {
  return (
    <div className="text-[15.1297px] box-border caret-transparent leading-[24.2075px] text-center pb-[20px] md:text-[15.667px] md:leading-[25.0672px] md:pb-[20px]">
      <div className="text-[15.1297px] box-border caret-transparent leading-[24.2075px] max-w-[1248.2px] w-full mx-auto px-[25px] py-5 md:text-[15.667px] md:leading-[25.0672px] md:max-w-[1292.53px]">
        <AnimatedSection direction="left">
          <h2 className="text-cyan-400 text-[42px] font-bold box-border caret-transparent leading-[50.4px] text-left my-[18.9121px] md:text-[50.9178px] md:leading-[61.1014px] md:my-[19.5838px]">
          Statistiques des hacks de smart contracts
        </h2>
        </AnimatedSection>
        <AnimatedSection delay={0.1} direction="left">
          <p className="text-[23.7565px] font-normal box-border caret-transparent leading-[36.8104px] max-w-[714.879px] text-left text-justify w-full mb-[15.1297px] md:text-[24.5292px] md:leading-[38.0467px] md:max-w-[740.267px] md:mb-[62.6681px]">
          Plus de 3,7 milliards de dollars ont été volés dans des hacks de smart contracts en 2023-2024. Voici les trois types de vulnérabilités les plus critiques à prévenir.
          <br className="text-[23.7565px] box-border caret-transparent leading-[36.8104px] md:text-[24.5292px] md:leading-[38.0467px]" />
        </p>
        </AnimatedSection>
        <div className="text-[15.1297px] box-border caret-transparent gap-x-[33.1038px] flex flex-col auto-cols-[1fr] [grid-template-areas:'._._Area'] grid-cols-[1fr] grid-rows-[auto] leading-[24.2075px] gap-y-[33.1038px] md:text-[15.667px] md:gap-x-[34.2794px] md:grid md:flex-row md:grid-cols-[1fr_1fr_1fr] md:leading-[25.0672px] md:gap-y-[34.2794px]">
          <AnimatedSection delay={0.2} direction="up">
            <StatCard
            title="Attaques par réentrance"
            description="La faille la plus célèbre : le hack du DAO en 2016 (60M$ volés). Plus récemment, Cream Finance a perdu 130M$ en 2021. Ces attaques exploitent l'ordre d'exécution des fonctions pour drainer les fonds avant la mise à jour des soldes."
          />
          </AnimatedSection>
          <AnimatedSection delay={0.3} direction="up">
            <StatCard
            title="Vulnérabilités de contrôle d'accès"
            description="Ronin Network a perdu 625M$ en 2022 à cause de clés privées compromises. Poly Network : 611M$ volés en 2021 via une fonction privilégiée mal protégée. Ces failles permettent aux attaquants de prendre le contrôle total des contrats."
          />
          </AnimatedSection>
          <AnimatedSection delay={0.4} direction="up">
            <StatCard
            title="Manipulation d'oracles"
            description={
              <>
                Mango Markets : 116M$ en 2022 par manipulation de prix. Cream Finance : 130M$ via oracle exploité.
                Les attaquants manipulent les flux de prix externes pour tromper les protocoles DeFi et extraire des fonds.
                Ces vulnérabilités représentent 20% des pertes totales en 2023.
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
