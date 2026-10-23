import { PrimaryCta } from "@/shared/components/PrimaryCta";

export const EducationSection = () => {
  return (
    <div className="relative text-[7.5649px] box-border caret-transparent leading-[12.1038px] bg-[position:0px_100%] pt-[30px] md:text-[15.667px] md:leading-[25.0672px] md:bg-left-top">
      <div className="relative text-[7.5649px] box-border caret-transparent leading-[12.1038px] max-w-[1248.2px] text-left w-full z-[5] ml-0 mr-auto mt-10 pt-[60px] pb-5 px-[25px] md:text-[15.667px] md:leading-[25.0672px] md:max-w-[1292.53px] md:ml-auto">
        <h2 className="text-cyan-400 text-[21px] font-bold font-space_grotesk box-border caret-transparent leading-[25.2px] my-[18.9121px] md:text-[50.9178px] md:leading-[61.1014px] md:my-[19.5838px]">
          Comment ça se passe
        </h2>
        <p className="text-[10px] font-normal box-border caret-transparent leading-[16px] max-w-[946px] w-full mb-2.5 text-center mx-auto md:text-[21px] md:leading-[34px] md:max-w-[976px]">
          Vous me décrivez le besoin, je pose quelques questions, vous recevez un devis gratuit.
          <br /><br />
          J’interviens à distance ou sur site, selon le cas. Puis un point clair : ce qui a été fait, et les suites utiles.
          <br /><br />
          <span className="block text-center w-full">
            Sans engagement. Avec des explications à chaque étape.
          </span>
        </p>
        <div className="flex justify-center mt-10 mb-6">
          <PrimaryCta />
        </div>
      </div>
    </div>
  );
};
