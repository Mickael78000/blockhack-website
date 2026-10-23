import { HeroButton } from "@/sections/Hero/components/HeroButton";

export const HeroContent = () => {
  return (
    <div className="relative text-white/70 text-[10px] leading-[15px] md:text-[15.667px] md:leading-[25.0672px] flex flex-col items-start box-border caret-transparent max-w-[747.029px] w-full min-h-[auto] -order-1 pt-8 md:pt-0 md:max-w-[773.559px] md:min-h-0 md:min-w-0 md:order-none">
      <h1 className="text-white text-[18px] font-bold font-space_grotesk box-border caret-transparent leading-[24px] max-w-[726.226px] mt-0 mb-[18px] md:text-[54.8346px] md:leading-[65.8015px] md:max-w-[752.017px] md:my-[19.5838px]">
        Ne laissez plus l'informatique vous freiner : BlockHack.io vous simplifie la vie et vous aide à concrétiser vos projets.
      </h1>

      <p className="text-white/90 text-[13px] font-normal box-border caret-transparent leading-[19px] max-w-[544.669px] w-full mb-[28px] text-justify md:text-[19.6254px] md:leading-[30.2006px] md:max-w-[564.013px] md:mb-[62.6681px]">
        Réparez et améliorez votre PC sans craindre de dépenser une fortune. Créons ensemble votre site web et laissez BlockHack.io vous accompagner dans vos projets numériques.
        <br />
        Pour les particuliers et les micro-entrepreneurs qui souhaitent avancer sans se perdre dans la technique.
        <br />
        <strong>Devis gratuit et sans engagement.</strong>
      </p>

      <HeroButton />
    </div>
  );
};