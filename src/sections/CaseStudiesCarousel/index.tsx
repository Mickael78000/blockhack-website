import { CarouselNavigation } from "@/sections/CaseStudiesCarousel/components/CarouselNavigation";
import { useEffect, useRef, useState } from "react";

export const CaseStudiesCarousel = () => {
  const trackRef = useRef<HTMLDivElement>(null);
  const [index, setIndex] = useState(0);
  const [lastInteraction, setLastInteraction] = useState(Date.now());
  const slideCount = 4;

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % slideCount);
    }, 8000);
    return () => clearInterval(id);
  }, [lastInteraction]);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    const slideWidth = track.clientWidth; // each slide uses w-full
    track.scrollTo({ left: slideWidth * index, behavior: "smooth" });
  }, [index]);

  const goToPrevious = () => {
    setIndex((i) => (i - 1 + slideCount) % slideCount);
    setLastInteraction(Date.now());
  };

  const goToNext = () => {
    setIndex((i) => (i + 1) % slideCount);
    setLastInteraction(Date.now());
  };

  return (
    <div
      role="region"
      aria-label="carousel"
      className="relative text-[15.1297px] box-border caret-transparent clear-both leading-[24.2075px] text-center mt-[60px] md:text-[15.667px] md:leading-[25.0672px]"
    >
      <div
        ref={trackRef}
        className="relative text-[15.1297px] box-border caret-transparent leading-[24.2075px] text-nowrap z-[1] overflow-x-auto overflow-y-hidden scroll-smooth snap-x snap-mandatory inset-x-0 md:text-[15.667px] md:leading-[25.0672px] [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
      >
        <div
          aria-label="1 of 4"
          role="group"
          className="relative text-[15.1297px] box-border caret-transparent inline-block leading-[24.2075px] text-left align-top w-full snap-start px-[25px] md:text-[15.667px] md:leading-[25.0672px] md:px-0"
        >
          <div className="text-[15.1297px] box-border caret-transparent leading-[24.2075px] pt-[60px] pb-10 px-0 md:text-[15.667px] md:leading-[25.0672px] md:px-[100px]">
            <div className="text-[15.1297px] items-center box-border caret-transparent flex flex-wrap justify-start leading-[24.2075px] md:text-[15.667px] md:flex-nowrap md:leading-[25.0672px]">
              <div className="text-white text-lg bg-fuchsia-500 box-border caret-transparent leading-[28.8px] uppercase mr-3 mb-2.5 px-2 md:mb-0">
                <div className="box-border caret-transparent">Ethereum</div>
              </div>
              <div className="text-white text-lg bg-fuchsia-500 box-border caret-transparent leading-[28.8px] uppercase mr-3 mb-2.5 px-2 md:mb-0">
                <div className="box-border caret-transparent">Audit</div>
              </div>
              <div className="text-white text-lg bg-fuchsia-500 box-border caret-transparent leading-[28.8px] uppercase mr-3 mb-2.5 px-2 md:mb-0">
                <div className="box-border caret-transparent">celo</div>
              </div>
            </div>
            <h1 className="text-white text-[52.954px] font-bold box-border caret-transparent leading-[52.954px] my-[18.9121px] md:text-[70.5016px] md:leading-[84.6019px] md:my-[19.5838px]">
              cLabs
            </h1>
            <p className="text-[23.7565px] font-normal box-border caret-transparent leading-[36.8104px] max-w-full w-full mb-2.5 whitespace-normal text-justify md:text-[24.5292px] md:leading-[38.0467px] md:max-w-[740.267px]">
              cLabs est membre de l'Alliance pour la Prospérité et fait partie de la
              communauté travaillant sur{" "}
              <a
                href="https://celo.org/"
                className="text-[21.7565px] font-light box-border caret-transparent leading-[34.8104px] md:text-[22.5292px] md:leading-[36.0467px]"
              >
                Celo.
              </a>
            </p>
            <div className="relative text-[15.1297px] bg-black/50 shadow-[rgba(0,0,0,0.67)_5px_5px_28px_4px] box-border caret-transparent saturate-100 leading-[24.2075px] max-w-full w-full mt-[60px] mx-auto px-0 rounded-bl rounded-br rounded-tl rounded-tr md:text-[15.667px] md:leading-[25.0672px] md:px-2.5 md:max-w-[696px]">
              <div className="relative text-[15.1297px] box-border caret-transparent leading-[24.2075px] z-[2] p-5 md:text-[15.667px] md:leading-[25.0672px] md:p-[30px]">
                <div className="text-[15.1297px] box-border caret-transparent leading-[24.2075px] md:text-[15.667px] md:leading-[25.0672px]">
                  <blockquote className="text-[19.0209px] font-normal box-border caret-transparent leading-[24px] mb-2.5 px-5 py-2.5 text-justify md:text-[19.6254px] whitespace-normal break-words">
                    Nous aidons cLabs à sécuriser l'écosystème blockchain en
                    effectuant des évaluations de sécurité pour les projets suivants :
                    <br className="text-[17.0209px] box-border caret-transparent md:text-[17.6254px]" />
                  </blockquote>
                </div>
                <img
                  src="https://cdn.prod.website-files.com/6621233fd44f04553ba73645/6621233fd44f04553ba73728_image_processing20201222-718-1nix7h2-removebg-preview.png"
                  alt="cLabs logo"
                  className="relative text-[15.1297px] box-border caret-transparent inline-block leading-[24.2075px] max-w-full w-[184px] ml-auto mt-2.5 md:static md:text-[15.667px] md:leading-[25.0672px] md:mt-0"
                />
                <img
                  alt="GoodGhosting logo"
                  src="https://cdn.prod.website-files.com/6621233fd44f04553ba73645/6621233fd44f04553ba736f9_output-onlinepngtools-2-removebg-preview.png"
                  className="relative text-[15.1297px] box-border caret-transparent inline-block leading-[24.2075px] max-w-full w-[184px] ml-auto mt-2.5 md:static md:text-[15.667px] md:leading-[25.0672px] md:mt-0"
                />
                <img
                  src="https://cdn.prod.website-files.com/6621233fd44f04553ba73645/6621233fd44f04553ba73724_output-onlinepngtools-3.png"
                  alt="SushiSwap logo"
                  className="relative text-[15.1297px] box-border caret-transparent inline-block leading-[24.2075px] max-w-full w-[154px] ml-auto mt-2.5 md:static md:text-[15.667px] md:leading-[25.0672px] md:mt-0"
                />
                <img
                  src="https://cdn.prod.website-files.com/6621233fd44f04553ba73645/6621233fd44f04553ba73725_Celo Logo Monochrome Reverse.png"
                  alt="Celo logo"
                  className="relative text-[15.1297px] box-border caret-transparent inline-block leading-[24.2075px] max-w-full w-[139px] ml-auto mt-2.5 md:static md:text-[15.667px] md:leading-[25.0672px] md:mt-0"
                />
              </div>
              <div className="absolute text-[15.1297px] backdrop-blur-[13px] bg-black/50 box-border caret-transparent leading-[24.2075px] z-[1] inset-[0%] md:text-[15.667px] md:leading-[25.0672px]"></div>
            </div>
          </div>
        </div>
        <div
          aria-label="2 of 4"
          role="group"
          className="relative text-[15.1297px] box-border caret-transparent inline-block leading-[24.2075px] text-left align-top w-full snap-start px-[25px] md:text-[15.667px] md:leading-[25.0672px] md:px-0"
        >
          <div className="text-[15.1297px] box-border caret-transparent leading-[24.2075px] pt-[60px] pb-10 px-0 md:text-[15.667px] md:leading-[25.0672px] md:px-[100px]">
            <div className="text-[15.1297px] items-center box-border caret-transparent flex flex-wrap justify-start leading-[24.2075px] md:text-[15.667px] md:flex-nowrap md:leading-[25.0672px]">
              <div className="text-white text-lg bg-fuchsia-500 box-border caret-transparent leading-[28.8px] uppercase mr-3 mb-2.5 px-2 md:mb-0">
                <div className="box-border caret-transparent">ETHEREUM</div>
              </div>
              <div className="text-white text-lg bg-fuchsia-500 box-border caret-transparent leading-[28.8px] uppercase mr-3 mb-2.5 px-2 md:mb-0">
                <div className="box-border caret-transparent">Audit</div>
              </div>
              <div className="text-white text-lg bg-fuchsia-500 box-border caret-transparent leading-[28.8px] uppercase mr-3 mb-2.5 px-2 md:mb-0">
                <div className="box-border caret-transparent">fund</div>
              </div>
            </div>
            <h1 className="text-white text-[52.954px] font-bold box-border caret-transparent leading-[52.954px] my-[18.9121px] md:text-[70.5016px] md:leading-[84.6019px] md:my-[19.5838px]">
              Rockaway Blockchain Fund
            </h1>
            <p className="text-[23.7565px] font-normal box-border caret-transparent leading-[36.8104px] max-w-full w-full mb-2.5 whitespace-normal text-justify md:text-[24.5292px] md:leading-[38.0467px] md:max-w-[740.267px]">
              Le plus grand fonds d'investissement européen axé sur l'investissement dans
              la blockchain et les actifs numériques, avec une valeur cible de 100
              millions de dollars.
            </p>
            <div className="relative text-[15.1297px] bg-black/50 shadow-[rgba(0,0,0,0.67)_5px_5px_28px_4px] box-border caret-transparent saturate-100 leading-[24.2075px] max-w-full w-full mt-[60px] mx-auto px-0 rounded-bl rounded-br rounded-tl rounded-tr md:text-[15.667px] md:leading-[25.0672px] md:px-2.5 md:max-w-[696px]">
              <div className="relative text-[15.1297px] box-border caret-transparent leading-[24.2075px] z-[2] p-5 md:text-[15.667px] md:leading-[25.0672px] md:p-[30px]">
                <div className="text-[15.1297px] box-border caret-transparent leading-[24.2075px] md:text-[15.667px] md:leading-[25.0672px]">
                  <blockquote className="text-[19.0209px] font-normal box-border caret-transparent leading-[24px] mb-2.5 px-5 py-2.5 text-justify md:text-[19.6254px] whitespace-normal break-words">
                    Nous sommes heureux de soutenir RBF dans leurs décisions d'investissement par
                    notre processus de diligence technique.
                  </blockquote>
                  <div className="text-[15.1297px] items-center box-border caret-transparent flex flex-col auto-cols-[1fr] grid-cols-[1fr_1fr] grid-rows-[auto_auto] leading-[24.2075px] md:text-[15.667px] md:items-end md:flex-row md:leading-[25.0672px]">
                    <div className="text-[15.1297px] box-border caret-transparent h-12 leading-[24.2075px] w-12 mr-3 md:text-[15.667px] md:leading-[25.0672px]"></div>
                    <img
                      src="https://cdn.prod.website-files.com/6621233fd44f04553ba73645/6621233fd44f04553ba73674_img_logo_rockaway.svg"
                      alt="rockway logo"
                      className="relative text-[15.1297px] box-border caret-transparent leading-[24.2075px] max-w-full w-[139px] ml-auto mt-2.5 md:static md:text-[15.667px] md:leading-[25.0672px] md:mt-0"
                    />
                  </div>
                </div>
              </div>
              <div className="absolute text-[15.1297px] backdrop-blur-[13px] bg-black/50 box-border caret-transparent leading-[24.2075px] z-[1] inset-[0%] md:text-[15.667px] md:leading-[25.0672px]"></div>
            </div>
          </div>
        </div>
        <div
          aria-label="3 of 4"
          role="group"
          className="relative text-[15.1297px] box-border caret-transparent inline-block leading-[24.2075px] text-left align-top w-full snap-start px-[25px] md:text-[15.667px] md:leading-[25.0672px] md:px-0"
        >
          <div className="text-[15.1297px] box-border caret-transparent leading-[24.2075px] pt-[60px] pb-10 px-0 md:text-[15.667px] md:leading-[25.0672px] md:px-[100px]">
            <div className="text-[15.1297px] items-center box-border caret-transparent flex flex-wrap justify-start leading-[24.2075px] md:text-[15.667px] md:flex-nowrap md:leading-[25.0672px]">
              <div className="text-white text-lg bg-fuchsia-500 box-border caret-transparent leading-[28.8px] uppercase mr-3 mb-2.5 px-2 md:mb-0">
                <div className="box-border caret-transparent">Ethereum</div>
              </div>
              <div className="text-white text-lg bg-fuchsia-500 box-border caret-transparent leading-[28.8px] uppercase mr-3 mb-2.5 px-2 md:mb-0">
                <div className="box-border caret-transparent">Audit</div>
              </div>
              <div className="text-white text-lg bg-fuchsia-500 box-border caret-transparent leading-[28.8px] uppercase mr-3 mb-2.5 px-2 md:mb-0">
                <div className="box-border caret-transparent">defi</div>
              </div>
            </div>
            <h1 className="text-white text-[52.954px] font-bold box-border caret-transparent leading-[52.954px] my-[18.9121px] md:text-[70.5016px] md:leading-[84.6019px] md:my-[19.5838px]">
              Marinade Finance
            </h1>
            <p className="text-[23.7565px] font-normal box-border caret-transparent leading-[36.8104px] max-w-full w-full mb-2.5 whitespace-normal text-justify md:text-[24.5292px] md:leading-[38.0467px] md:max-w-[740.267px]">
              <a
                href="https://celo.org/"
                className="text-[21.7565px] font-light box-border caret-transparent leading-[34.8104px] md:text-[22.5292px] md:leading-[36.0467px]"
              >
                Protocole de staking liquide construit sur Ethereum.
              </a>
            </p>
            <div className="relative text-[15.1297px] bg-black/50 shadow-[rgba(0,0,0,0.67)_5px_5px_28px_4px] box-border caret-transparent saturate-100 leading-[24.2075px] max-w-full w-full mt-[60px] mx-auto px-0 rounded-bl rounded-br rounded-tl rounded-tr md:text-[15.667px] md:leading-[25.0672px] md:px-2.5 md:max-w-[696px]">
              <div className="relative text-[15.1297px] box-border caret-transparent leading-[24.2075px] z-[2] p-5 md:text-[15.667px] md:leading-[25.0672px] md:p-[30px]">
                <div className="text-[15.1297px] box-border caret-transparent leading-[24.2075px] md:text-[15.667px] md:leading-[25.0672px]">
                  <blockquote className="text-[19.0209px] font-normal box-border caret-transparent leading-[24px] mb-2.5 px-5 py-2.5 text-justify md:text-[19.6254px] whitespace-normal break-words">
                    La portée de l'audit était de 4 semaines d'ingénierie, nous avons co-audité avec
                    Kudelski Security et Nedodyme.
                    <br className="text-[17.0209px] box-border caret-transparent md:text-[17.6254px]" />
                    <br className="text-[17.0209px] box-border caret-transparent md:text-[17.6254px]" />
                    Marinade a été présenté comme &quot;Le staking le plus fiable sur
                    Ethereum&quot; lors de la conférence Ethereum Breakpoint.
                  </blockquote>
                  <div className="text-[15.1297px] items-center box-border caret-transparent flex flex-col auto-cols-[1fr] grid-cols-[1fr_1fr] grid-rows-[auto_auto] leading-[24.2075px] md:text-[15.667px] md:items-end md:flex-row md:leading-[25.0672px]">
                    <img
                      src="https://cdn.prod.website-files.com/6621233fd44f04553ba73645/6621233fd44f04553ba736fd_marinade.png"
                      alt="Marinade.Finance logo"
                      className="relative text-[15.1297px] box-border caret-transparent leading-[24.2075px] max-w-full w-[139px] ml-auto mt-2.5 md:static md:text-[15.667px] md:leading-[25.0672px] md:mt-0"
                    />
                  </div>
                </div>
              </div>
              <div className="absolute text-[15.1297px] backdrop-blur-[13px] bg-black/50 box-border caret-transparent leading-[24.2075px] z-[1] inset-[0%] md:text-[15.667px] md:leading-[25.0672px]"></div>
            </div>
          </div>
        </div>
        <div
          aria-label="4 of 4"
          role="group"
          className="relative text-[15.1297px] box-border caret-transparent inline-block leading-[24.2075px] text-left align-top w-full snap-start px-[25px] md:text-[15.667px] md:leading-[25.0672px] md:px-0"
        >
          <div className="text-[15.1297px] box-border caret-transparent leading-[24.2075px] pt-[60px] pb-10 px-0 md:text-[15.667px] md:leading-[25.0672px] md:px-[100px]">
            <div className="text-[15.1297px] items-center box-border caret-transparent flex flex-wrap justify-start leading-[24.2075px] md:text-[15.667px] md:flex-nowrap md:leading-[25.0672px]">
              <div className="text-white text-lg bg-fuchsia-500 box-border caret-transparent leading-[28.8px] uppercase mr-3 mb-2.5 px-2 md:mb-0">
                <div className="box-border caret-transparent">ethereum</div>
              </div>
              <div className="text-white text-lg bg-fuchsia-500 box-border caret-transparent leading-[28.8px] uppercase mr-3 mb-2.5 px-2 md:mb-0">
                <div className="box-border caret-transparent">Audit</div>
              </div>
              <div className="text-white text-lg bg-fuchsia-500 box-border caret-transparent leading-[28.8px] uppercase mr-3 mb-2.5 px-2 md:mb-0">
                <div className="box-border caret-transparent">gaming</div>
              </div>
            </div>
            <h1 className="text-white text-[52.954px] font-bold box-border caret-transparent leading-[52.954px] my-[18.9121px] md:text-[70.5016px] md:leading-[84.6019px] md:my-[19.5838px]">
              Community Gaming
            </h1>
            <p className="text-[23.7565px] font-normal box-border caret-transparent leading-[36.8104px] max-w-full w-full mb-2.5 whitespace-normal text-justify md:text-[24.5292px] md:leading-[38.0467px] md:max-w-[740.267px]">
              La plateforme de Community Gaming crée une expérience fluide pour
              les organisateurs de tournois afin d'héberger des tournois locaux et pour
              les joueurs de compétitionner et d'être payés instantanément lorsqu'ils gagnent.
            </p>
            <div className="relative text-[15.1297px] bg-black/50 shadow-[rgba(0,0,0,0.67)_5px_5px_28px_4px] box-border caret-transparent saturate-100 leading-[24.2075px] max-w-full w-full mt-[60px] mx-auto px-0 rounded-bl rounded-br rounded-tl rounded-tr md:text-[15.667px] md:leading-[25.0672px] md:px-2.5 md:max-w-[696px]">
              <div className="relative text-[15.1297px] box-border caret-transparent leading-[24.2075px] z-[2] p-5 md:text-[15.667px] md:leading-[25.0672px] md:p-[30px]">
                <div className="text-[15.1297px] box-border caret-transparent leading-[24.2075px] md:text-[15.667px] md:leading-[25.0672px]">
                  <blockquote className="text-[19.0209px] font-normal box-border caret-transparent leading-[24px] mb-2.5 px-5 py-2.5 text-justify md:text-[19.6254px] whitespace-normal break-words">
                    Nous avons effectué une revue rapide de 5 jours-homme des smart
                    contracts Ethereum.{" "}
                    <br className="text-[17.0209px] box-border caret-transparent md:text-[17.6254px]" />
                    <br className="text-[17.0209px] box-border caret-transparent md:text-[17.6254px]" />
                    L'audit n'a pas été publié.
                  </blockquote>
                  <div className="text-[15.1297px] items-center box-border caret-transparent flex flex-col auto-cols-[1fr] grid-cols-[1fr_1fr] grid-rows-[auto_auto] leading-[24.2075px] md:text-[15.667px] md:items-end md:flex-row md:leading-[25.0672px]">
                    <div className="text-[15.1297px] box-border caret-transparent h-12 leading-[24.2075px] w-12 mr-3 md:text-[15.667px] md:leading-[25.0672px]"></div>
                    <img
                      src="https://cdn.prod.website-files.com/6621233fd44f04553ba73645/6621233fd44f04553ba73729_white-logo-transparent.png"
                      alt="Community Gaming logo"
                      className="relative text-[15.1297px] aspect-[auto_145_/_60] box-border caret-transparent h-[60px] leading-[24.2075px] max-w-full w-[145px] ml-auto mt-2.5 md:static md:text-[15.667px] md:leading-[25.0672px] md:mt-0"
                    />
                  </div>
                </div>
              </div>
              <div className="absolute text-[15.1297px] backdrop-blur-[13px] bg-black/50 box-border caret-transparent leading-[24.2075px] z-[1] inset-[0%] md:text-[15.667px] md:leading-[25.0672px]"></div>
            </div>
          </div>
        </div>
      </div>
      <CarouselNavigation
        variant="previous"
        ariaLabel="previous slide"
        onClick={goToPrevious}
        imageUrl="https://cdn.prod.website-files.com/6621233fd44f04553ba73645/6621233fd44f04553ba736c7_cursor_prev@2x.png"
        imageAlt=""
      />
      <CarouselNavigation
        variant="next"
        ariaLabel="next slide"
        onClick={goToNext}
        imageAlt=""
        imageUrl="https://cdn.prod.website-files.com/6621233fd44f04553ba73645/6621233fd44f04553ba736dc_cursor_next@2x.png"
      />
    </div>
  );
};
