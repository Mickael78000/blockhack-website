import { HeroButton } from "@/sections/Hero/components/HeroButton";

export const HeroContent = () => {
  return (
    <div className="relative text-[15.1297px] items-start box-border caret-transparent flex flex-col justify-start leading-[24.2075px] max-w-[747.029px] min-h-[auto] min-w-[auto] -order-1 w-full pt-8 md:pt-0 md:text-[15.667px] md:leading-[25.0672px] md:max-w-[773.559px] md:min-h-0 md:min-w-0 md:order-none">
      <h1 className="text-white text-[45.3891px] font-bold box-border caret-transparent leading-[45.3891px] max-w-[726.226px] mt-0 mb-[18.9121px] md:text-[54.8346px] md:leading-[65.8015px] md:max-w-[752.017px] md:my-[19.5838px]">
        Lancez des dApps Solana et EVM sécurisées avec les audits BlockHack.io
      </h1>
      <p className="text-[19.0209px] font-normal box-border caret-transparent leading-[29.2335px] max-w-[544.669px] w-full mb-[37.8243px] text-justify md:text-[19.6254px] md:leading-[30.2006px] md:max-w-[564.013px] md:mb-[62.6681px]">
        BlockHack.io audite chaque couche de vos smart contracts Solana et EVM afin que toute
        application décentralisée puisse atteindre le mainnet sans subir
        de piratages précoces. Nos spécialistes combinent une revue rigoureuse et
        des outils sur mesure pour verrouiller les vulnérabilités avant que les attaquants ne le puissent.
      </p>
      <HeroButton />
    </div>
  );
};
