import { FooterColumn } from "@/sections/Footer/components/FooterColumn";
import { FooterSocials } from "@/sections/Footer/components/FooterSocials";

export const FooterContent = () => {
  return (
    <div className="text-[15.1297px] items-start box-border caret-transparent gap-x-[52.954px] flex flex-wrap justify-between leading-[24.2075px] gap-y-[52.954px] md:text-[15.667px] md:gap-x-[47.0011px] md:leading-[25.0672px] md:gap-y-[47.0011px]">
      <div className="text-[15.1297px] box-border caret-transparent gap-x-[37.8243px] flex flex-col leading-[24.2075px] min-w-full gap-y-[37.8243px] pt-[30.2594px] md:text-[15.667px] md:gap-x-[11.5%] md:flex-row md:leading-[25.0672px] md:min-w-[65%] md:gap-y-[11.5%] md:pt-[31.334px]">
        <FooterColumn
          title={
            <>
              Besoin d'un audit de sécurité ?{" "}
              <br className="text-[22.6946px] box-border caret-transparent leading-[25.5314px] text-nowrap md:text-[17.6254px] md:leading-[19.8286px]" />
              Faites-le nous savoir
            </>
          }
          variant="contact"
          contactButtonText="Contact"
          contactButtonHref="#contact"
        />
        <FooterColumn
          title="À propos"
          variant="links"
          links={[
            { text: "Services", href: "#services" },
            { text: "Audits", href: "#audits" },
            // {
            //   text: "Carrière",
            //   href: "https://ackeeblockchain.recruitee.com/",
            //   hasExternalIcon: true,
            // },
          ]}
        />
        <FooterColumn
          title="Outils"
          variant="links"
          links={[
            {
              text: "Foundry",
              href: "https://getfoundry.sh/",
              hasExternalIcon: true,
            },
            {
              text: "Solidity",
              href: "#solidity-extension",
            },
          ]}
        />
        {/* <FooterColumn
          title="Apprendre"
          variant="links"
          links={[
            { text: "Recherche", href: "#research" },
            {
              text: "École d'Ethereum",
              href: "#school-of-ethereum",
            },
            {
              text: (
                <>
                  Bootcamp d'Auditeurs
                  <br />
                  Ethereum
                </>
              ),
              href: "#ethereum-auditors-bootcamp",
            },
          ]}
        /> */}
      </div>
      <FooterSocials />
    </div>
  );
};
