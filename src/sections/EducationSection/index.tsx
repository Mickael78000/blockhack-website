// import { EducationCard } from "@/sections/EducationSection/components/EducationCard";
import Link from "next/link";

export const EducationSection = () => {
  return (
    <div className="relative text-[15.1297px] box-border caret-transparent leading-[24.2075px] bg-[position:0px_100%] pt-[30px] md:text-[15.667px] md:leading-[25.0672px] md:bg-left-top">
      <div className="relative text-[15.1297px] box-border caret-transparent leading-[24.2075px] max-w-[1248.2px] text-left w-full z-[5] ml-0 mr-auto mt-10 pt-[60px] pb-5 px-[25px] md:text-[15.667px] md:leading-[25.0672px] md:max-w-[1292.53px] md:ml-auto before:accent-auto before:caret-transparent before:text-white/70 before:table before:text-[15.1297px] before:not-italic before:normal-nums before:font-medium before:col-end-2 before:col-start-1 before:row-end-2 before:row-start-1 before:tracking-[normal] before:leading-[24.2075px] before:list-outside before:list-disc before:pointer-events-auto before:text-left before:indent-[0px] before:normal-case before:visible before:border-separate before:font-space_grotesk before:md:text-[15.667px] before:md:leading-[25.0672px] after:accent-auto after:caret-transparent after:clear-both after:text-white/70 after:table after:text-[15.1297px] after:not-italic after:normal-nums after:font-medium after:col-end-2 after:col-start-1 after:row-end-2 after:row-start-1 after:tracking-[normal] after:leading-[24.2075px] after:list-outside after:list-disc after:pointer-events-auto after:text-left after:indent-[0px] after:normal-case after:visible after:border-separate after:font-space_grotesk after:md:text-[15.667px] after:md:leading-[25.0672px]">
        <h2 className="text-cyan-400 text-[42px] font-bold font-space_grotesk box-border caret-transparent leading-[50.4px] my-[18.9121px] md:text-[50.9178px] md:leading-[61.1014px] md:my-[19.5838px]">
          Structurer une démarche DevSecOps pragmatique
        </h2>
        <p className="text-[20px] font-normal box-border caret-transparent leading-[32px] max-w-[946px] w-full mb-2.5 text-center mx-auto md:text-[21px] md:leading-[34px] md:max-w-[976px]">
          La sécurité ne s’ajoute pas en fin de projet : elle se construit à chaque étape du cycle de vie.
          <br /><br />
          Mettre en place un S-SDLC efficace suppose d’aligner les pratiques des équipes de développement,
          d’exploitation et de maîtrise d’ouvrage sur des exigences de sécurité concrètes et mesurables.
          <br /><br />
          BlockHack.io accompagne vos équipes dans l’outillage, la documentation et la gouvernance
          de cette démarche — de la définition des exigences jusqu’à l’intégration dans les pipelines CI/CD.
          <br /><br />
          <span className="block text-center w-full">
            Security by design. Security by default. Documenté, exploitable, transmissible.
          </span>
        </p>
        {/* <div className="text-[15.1297px] box-border caret-transparent gap-x-[30.2594px] grid flex-col auto-cols-[1fr] grid-cols-[1fr] grid-rows-[auto] leading-[24.2075px] max-w-[877.523px] gap-y-[30.2594px] w-full mt-[60.5188px] md:text-[15.667px] md:gap-x-[31.334px] md:flex-row md:grid-cols-[1fr_1fr] md:leading-[25.0672px] md:max-w-[908.687px] md:gap-y-[31.334px] md:mt-[54.8346px]">
          <EducationCard
            href="#school-of-ethereum"
            title="École d'Ethereum"
            description="Faites passer vos compétences techniques au niveau supérieur et obtenez une certification en langage Solidity et blockchain Ethereum."
            partnerLogoSrc="https://cdn.prod.website-files.com/6621233fd44f04553ba73645/6650bb42e9969a77baaf02bf_Group 186.svg"
            partnerLogoAlt="Ethereum Foundation"
            dateLabel="Date"
            dateValue="Bientôt disponible"
            buttonText="Postuler maintenant"
            buttonIconSrc="https://c.animaapp.com/mhjqsyis9DbJQx/assets/icon-2.svg"
            buttonIconAlt="Icon"
          />
          <EducationCard
            href="#ethereum-auditors-bootcamp"
            title="Bootcamp d'Auditeurs Ethereum"
            description="Apprenez à auditer les smart contracts Ethereum et aidez à sécuriser l'écosystème."
            partnerLogoSrc="https://cdn.prod.website-files.com/6621233fd44f04553ba73645/6650bb42e9969a77baaf02bf_Group 186.svg"
            partnerLogoAlt="Ethereum Foundation"
            dateLabel="Date"
            dateValue="Bientôt disponible"
            buttonText="Postuler maintenant"
            buttonIconSrc="https://c.animaapp.com/mhjqsyis9DbJQx/assets/icon-2.svg"
            buttonIconAlt="Icon"
          />
        </div> */}
        <div className="flex justify-center mt-10 mb-6">
          <Link
            href="/demander-audit"
            className="relative text-white text-[37.8242px] font-semibold font-space_grotesk items-center bg-blue-700 box-border caret-transparent gap-x-[26.477px] flex justify-center leading-[49.1716px] px-[30.2594px] py-[15.1297px] rounded-[7.56486px] md:text-[39.1676px] md:gap-x-[27.4172px] md:leading-[50.9178px] md:px-[31.334px] md:py-[15.667px] md:rounded-[7.8335px] hover:bg-fuchsia-500"
          >
            Soumettre une demande
          </Link>
        </div>
        <div className="relative text-[15.1297px] shadow-[rgba(0,0,0,0.67)_5px_5px_28px_4px] box-border caret-transparent hidden saturate-100 leading-[24.2075px] max-w-[756.485px] w-full mt-[50px] px-0 md:text-[15.667px] md:leading-[25.0672px] md:max-w-[783.351px] md:px-2.5"></div>
        <div className="relative text-[15.1297px] shadow-[rgba(0,0,0,0.67)_5px_5px_28px_4px] box-border caret-transparent hidden saturate-100 float-right leading-[24.2075px] max-w-[756.485px] w-full ml-auto mt-[100px] px-0 md:text-[15.667px] md:leading-[25.0672px] md:max-w-[783.351px] md:mt-[190px] md:px-2.5"></div>
      </div>
    </div>
  );
};
