import { useEffect, useRef, useState } from "react";
import { TrustedByLogos } from "@/sections/ToolsSection/components/TrustedByLogos";
import FloatingMathScreen from "@/components/floating_math_crypto_names_screen_react";
import { AnimatedSection } from "@/components/AnimatedSection";

export const ToolsSection = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [shouldLoadVideo, setShouldLoadVideo] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);

  // Detect mobile device
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Lazy load video with Intersection Observer
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Fallback: load video after 2 seconds if observer doesn't trigger
    const fallbackTimer = setTimeout(() => {
      setShouldLoadVideo(true);
    }, 2000);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            clearTimeout(fallbackTimer);
            setShouldLoadVideo(true);
            observer.disconnect();
          }
        });
      },
      {
        rootMargin: '100px', // Start loading 100px before video is visible
        threshold: 0.01, // Lower threshold for better mobile detection
      }
    );

    observer.observe(container);

    return () => {
      clearTimeout(fallbackTimer);
      observer.disconnect();
    };
  }, []);

  useEffect(() => {
    const video = videoRef.current;
    if (!video || !shouldLoadVideo) {
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
      // On mobile, don't autoplay to save bandwidth
      if (isMobile) {
        return;
      }

      const playPromise = video.play();

      if (playPromise !== undefined) {
        playPromise.then(() => {
          setIsPlaying(true);
        }).catch(() => {
          video.muted = true;
          video.play().then(() => setIsPlaying(true)).catch(() => undefined);
        });
      }
    };

    const handlePlay = () => setIsPlaying(true);
    const handlePause = () => setIsPlaying(false);
    
    video.addEventListener('play', handlePlay);
    video.addEventListener('pause', handlePause);

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
      video.removeEventListener('play', handlePlay);
      video.removeEventListener('pause', handlePause);
    };
  }, [shouldLoadVideo, isMobile]);

  return (
    <AnimatedSection direction="up" delay={0.2}>
      <div className="relative text-[15.1297px] items-center box-border caret-transparent gap-x-[51px] flex flex-col justify-start leading-[24.2075px] w-full object-[0%_50%] gap-y-[51px] bg-[position:0px_0px] pt-[30px] pb-[20px] overflow-hidden md:text-[15.667px] md:flex-row md:justify-center md:leading-[25.0672px]">
        {/* Arrière-plan mathématique flottant avec transition de fondu */}
        <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none opacity-0 animate-fade-in" style={{ animation: 'fadeIn 1.5s ease-in-out forwards' }}>
          <FloatingMathScreen />
        </div>
      <div className="relative z-10 text-[15.1297px] box-border caret-transparent leading-[24.2075px] max-w-[1248.2px] w-full mx-auto px-[25px] py-5 md:text-[15.667px] md:leading-[25.0672px] md:max-w-[1292.53px]">
        <div className="relative text-[15.1297px] box-border caret-transparent flex flex-col gap-10 leading-[24.2075px] mt-[110px] mx-auto w-full max-w-[980px] px-[10px] md:text-[15.667px] md:leading-[25.0672px] md:mt-[235px] md:flex-row md:items-start md:gap-[51px] md:px-0">
          <div ref={containerRef} className="w-full max-w-[300px] mx-auto md:max-w-[500px] md:w-[40%]">
            <div className="relative overflow-hidden rounded-[24px] shadow-xl bg-gray-900">
              {shouldLoadVideo ? (
                <>
                  <video
                    ref={videoRef}
                    className="h-full w-full object-cover"
                    src="/videos/trusted-by.mp4"
                    autoPlay={!isMobile}
                    loop
                    muted
                    playsInline
                    preload={isMobile ? "metadata" : "auto"}
                    poster="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='800' height='600'%3E%3Crect fill='%23111827' width='800' height='600'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' fill='%2322d3ee' font-family='sans-serif' font-size='24'%3ELoading...%3C/text%3E%3C/svg%3E"
                    data-testid="trusted-video"
                  >
                    Votre navigateur ne supporte pas la balise vidéo.
                  </video>
                  {/* Play button overlay for mobile */}
                  {isMobile && !isPlaying && (
                    <button
                      onClick={() => {
                        const video = videoRef.current;
                        if (video) {
                          video.play().then(() => setIsPlaying(true)).catch(() => undefined);
                        }
                      }}
                      className="absolute inset-0 flex items-center justify-center bg-black/50 transition-opacity hover:bg-black/60"
                      aria-label="Play video"
                    >
                      <div className="w-16 h-16 rounded-full bg-cyan-400 flex items-center justify-center shadow-lg">
                        <svg className="w-8 h-8 text-gray-900 ml-1" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M8 5v14l11-7z"/>
                        </svg>
                      </div>
                    </button>
                  )}
                </>
              ) : (
                <div className="w-full h-full min-h-[300px] flex items-center justify-center bg-gray-900">
                  <p className="text-cyan-400 text-lg">Loading video...</p>
                </div>
              )}
            </div>
          </div>
          <div className="text-[15.1297px] box-border caret-transparent leading-[24.2075px] text-left md:text-[15.667px] md:leading-[25.0672px] md:w-[60%]">
            <h2 className="text-cyan-400 text-[42px] font-bold box-border caret-transparent leading-[50.4px] text-left my-[18.9121px] md:text-[50.9178px] md:leading-[61.1014px] md:my-[19.5838px]">
              La fiabilité au cœur de chaque lancement, pour un succès garanti.
            </h2>
            <TrustedByLogos />
          </div>
        </div>
      </div>
    </div>
    </AnimatedSection>
  );
};
