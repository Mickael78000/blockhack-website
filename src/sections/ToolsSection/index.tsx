import { useEffect, useRef } from "react";
import { TrustedByLogos } from "@/sections/ToolsSection/components/TrustedByLogos";
import FloatingMathScreen from "@/components/floating_math_crypto_names_screen_react";

export const ToolsSection = () => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) {
      return;
    }

    // S'assurer que la boucle est définie programmatiquement
    video.loop = true;
    video.muted = true;

    const handleEnded = () => {
      // Solution de secours : redémarrer manuellement si la boucle échoue
      video.currentTime = 0;
      video.play().catch(() => undefined);
    };

    const tryPlay = () => {
      const playPromise = video.play();

      if (playPromise !== undefined) {
        playPromise.catch(() => {
          video.muted = true;
          video.play().catch(() => undefined);
        });
      }
    };

    // Ajouter un écouteur d'événement de fin comme solution de secours
    video.addEventListener("ended", handleEnded);

    if (video.readyState >= HTMLMediaElement.HAVE_CURRENT_DATA) {
      tryPlay();
    } else {
      video.addEventListener("loadeddata", tryPlay, { once: true });
    }

    return () => {
      video.removeEventListener("loadeddata", tryPlay);
      video.removeEventListener("ended", handleEnded);
    };
  }, []);

  return (
    <div className="relative text-[15.1297px] items-center box-border caret-transparent gap-x-[51px] flex flex-col justify-start leading-[24.2075px] max-w-full object-[0%_50%] gap-y-[51px] bg-[position:0px_0px] mx-auto pt-[50px] pb-20 md:text-[15.667px] md:flex-row md:justify-center md:leading-[25.0672px] md:max-w-none md:mx-0">
      {/* Arrière-plan mathématique flottant */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-30">
        <FloatingMathScreen />
      </div>
      <div className="relative z-10 text-[15.1297px] box-border caret-transparent leading-[24.2075px] max-w-[1248.2px] w-full mx-auto px-[25px] py-5 md:text-[15.667px] md:leading-[25.0672px] md:max-w-[1292.53px]">
        <div className="relative text-[15.1297px] box-border caret-transparent flex flex-col gap-10 leading-[24.2075px] mt-[110px] mx-auto w-full max-w-[980px] px-[10px] md:text-[15.667px] md:leading-[25.0672px] md:mt-[235px] md:flex-row md:items-start md:gap-[51px] md:px-0">
          <div className="w-full md:w-[40%]">
            <div className="overflow-hidden rounded-[24px] shadow-xl">
              <video
                ref={videoRef}
                className="h-full w-full object-cover"
                src="/videos/trusted-by.mp4"
                autoPlay
                loop
                muted
                playsInline
                preload="auto"
                data-testid="trusted-video"
              >
                Votre navigateur ne supporte pas la balise vidéo.
              </video>
            </div>
          </div>
          <div className="text-[15.1297px] box-border caret-transparent leading-[24.2075px] text-left md:text-[15.667px] md:leading-[25.0672px] md:w-[60%]">
            <h2 className="text-cyan-400 text-[42px] font-bold box-border caret-transparent leading-[50.4px] text-left my-[18.9121px] md:text-[50.9178px] md:leading-[61.1014px] md:my-[19.5838px]">
              Fiable pour maintenir les lancements sans incidents
            </h2>
            <TrustedByLogos />
          </div>
        </div>
      </div>
    </div>
  );
};
