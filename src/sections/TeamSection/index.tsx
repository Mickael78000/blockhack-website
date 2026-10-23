import { TeamMemberCard } from "@/sections/TeamSection/components/TeamMemberCard";
import { AnimatedSection } from "@/shared/components/AnimatedSection";
import Link from "next/link";

export const TeamSection = () => {
  return (
    <div
      id="team"
      className="text-[7.5649px] bg-no-repeat bg-size-[15%] box-border caret-transparent leading-[12.1038px] bg-[position:34%_91%] pt-[30px] pb-[20px] md:text-[15.667px] md:leading-[25.0672px]"
    >
      <div className="relative text-[7.5649px] box-border caret-transparent leading-[12.1038px] max-w-[1248.2px] text-left w-full z-[5] ml-0 mr-auto mt-10 pt-[60px] pb-5 px-[25px] md:text-[15.667px] md:leading-[25.0672px] md:max-w-[1292.53px] md:ml-auto">
        <h2 className="text-cyan-400 text-[21px] font-bold font-space_grotesk box-border caret-transparent leading-[25.2px] my-[18.9121px] md:text-[50.9178px] md:leading-[61.1014px] md:my-[19.5838px]">
          Qui vous accompagne
        </h2>

        <p className="text-[9px] text-justify font-normal box-border caret-transparent leading-[15px] max-w-[1100px] w-full mb-4 text-white/80 md:text-[19px] md:leading-[32px] md:max-w-[1200px]">
          Diplômé des Arts et Métiers, j’ai travaillé dans les armées sur des projets complexes, avec des délais serrés et de vrais enjeux de sécurité. Cette rigueur, je la mets aujourd’hui au service des particuliers et des micro-entreprises.
        </p>
        <p className="text-[9px] text-justify font-normal box-border caret-transparent leading-[15px] max-w-[1100px] w-full mb-6 text-white/80 md:text-[19px] md:leading-[32px] md:max-w-[1200px]">
          Reconversion choisie : être utile près des gens, expliquer ce que je fais, respecter vos données. Un partenaire de confiance sur la durée, pas seulement un dépannage ponctuel.{" "}
          <Link href="/a-propos" className="text-cyan-400 hover:text-cyan-300">
            En savoir plus
          </Link>
          .
        </p>
        <div className="text-[7.5649px] content-center items-center box-border caret-transparent gap-x-[15.1297px] flex flex-col auto-cols-[1fr] [grid-template-areas:'._._Area'] grid-cols-[1fr] grid-rows-[auto] justify-items-center justify-center leading-[12.1038px] gap-y-[30.2594px] mt-[15.1297px] w-full md:text-[15.667px] md:gap-x-[31.334px] md:flex md:flex-row md:leading-[25.0672px] md:gap-y-[31.334px] md:mt-[58.7513px]">
          <div className="flex justify-center w-full px-4 md:w-1/2 md:px-0">
            <AnimatedSection delay={0.1} direction="up" className="w-full">
              <TeamMemberCard
                imageUrl="/images/founder.webp"
                imageAlt="Portrait de Mickaël Girondeau"
                name="Mickaël Girondeau"
                title="Ingénieur, accompagnement informatique pour particuliers et indépendants"
                subtitle="Versailles · Île-de-France · à distance ou sur site"
              />
            </AnimatedSection>
          </div>
        </div>
      </div>
    </div>
  );
};
