import { FooterColumn } from "@/sections/Footer/components/FooterColumn";
import { FooterSocials } from "@/sections/Footer/components/FooterSocials";

export const FooterContent = () => {
  return (
    <div className="text-[15.1297px] items-start box-border caret-transparent gap-x-[52.954px] flex flex-wrap justify-between leading-[24.2075px] gap-y-[52.954px] md:text-[15.667px] md:gap-x-[47.0011px] md:leading-[25.0672px] md:gap-y-[47.0011px]">
      <div className="text-[15.1297px] box-border caret-transparent gap-x-[37.8243px] flex flex-col leading-[24.2075px] min-w-full gap-y-[37.8243px] pt-[30.2594px] md:text-[15.667px] md:gap-x-[11.5%] md:flex-row md:leading-[25.0672px] md:min-w-[65%] md:gap-y-[11.5%] md:pt-[31.334px]">
        <FooterColumn
          title="Prestations"
          variant="links"
          links={[
            { text: "Tous les services", href: "/services" },
            { text: "Réparation PC", href: "/reparation-pc" },
            { text: "Sites web", href: "/sites-web" },
            { text: "Données & continuité", href: "/donnees-continuite" },
          ]}
        />
        <FooterColumn
          title="BlockHack.io"
          variant="links"
          links={[
            { text: "À propos", href: "/a-propos" },
            { text: "Contact", href: "/contact" },
            { text: "Politique de confidentialité", href: "/politique-confidentialite" },
          ]}
        />
      </div>
      <FooterSocials />
    </div>
  );
};
