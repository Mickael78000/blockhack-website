import { CarouselNavigation } from "@/sections/CaseStudiesCarousel/components/CarouselNavigation";
import { useEffect, useRef, useState } from "react";

export const CaseStudiesCarousel = () => {
  const trackRef = useRef<HTMLDivElement>(null);
  const [index, setIndex] = useState(0);
  const [lastInteraction, setLastInteraction] = useState(Date.now());
  const slideCount = 5;

  useEffect(() => {
    const intervalId = setInterval(() => {
      setIndex((currentIndex) => (currentIndex + 1) % slideCount);
    }, 8000);
    return () => clearInterval(intervalId);
  }, [lastInteraction]);

  useEffect(() => {
    const track = trackRef.current;
    if (track) {
      const slideWidth = track.clientWidth;
      track.scrollTo({ left: slideWidth * index, behavior: "smooth" });
    }
  }, [index]);

  const goToPrevious = () => {
    setIndex((currentIndex) => (currentIndex - 1 + slideCount) % slideCount);
    setLastInteraction(Date.now());
  };

  const goToNext = () => {
    setIndex((currentIndex) => (currentIndex + 1) % slideCount);
    setLastInteraction(Date.now());
  };

  return (
    <div
      role="region"
      aria-label="carousel"
      className="relative text-[15px] box-border caret-transparent clear-both leading-[24px] text-center mt-16 md:text-[16px] md:leading-[25px]"
    >
      <div
        ref={trackRef}
        className="relative text-[15px] box-border caret-transparent leading-[24px] whitespace-nowrap z-[1] overflow-x-auto overflow-y-hidden scroll-smooth snap-x snap-mandatory inset-x-0 md:text-[16px] md:leading-[25px] [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
      >
        {/* Slide 1: Umbratrade */}
        <div
          aria-label="1 of 5"
          role="group"
          className="relative text-[15px] box-border caret-transparent inline-block leading-[24px] text-left align-top w-full snap-start px-6 md:px-0 md:text-[16px] md:leading-[25px]"
        >
          <section className="relative pt-16 pb-10 px-0 md:px-24">
            <div className="flex flex-wrap md:flex-nowrap items-center leading-[24px] md:leading-[25px] mb-4">
              {["Solana", "DeFi", "Trading"].map((tag) => (
                <span
                  key={tag}
                  className="text-white text-lg bg-fuchsia-500 uppercase mr-3 mb-2.5 px-2 md:mb-0 leading-[28.8px]"
                >
                  {tag}
                </span>
              ))}
            </div>
            <h1 className="text-white text-5xl md:text-7xl font-bold leading-[1.2] my-6 md:my-8">Umbratrade</h1>
            <p className="text-[22px] md:text-[24px] font-normal leading-[1.6] text-left max-w-full md:max-w-[740px] mb-6 whitespace-normal">
              Plateforme de trading décentralisée haute performance<br className="hidden md:block" />
              construite sur Solana, offrant une exécution rapide<br className="hidden md:block" />
              et des frais minimaux pour les traders professionnels.
            </p>
            <div className="relative bg-black/50 shadow-lg saturate-100 mt-12 mx-auto rounded-lg max-w-full md:max-w-[700px] px-6 py-8">
              <blockquote className="text-[18px] md:text-[19px] font-normal leading-[1.7] mb-2.5 text-left whitespace-normal">
                Architecture de trading décentralisée optimisée pour<br className="hidden md:block" />
                les transactions haute fréquence avec technologie Anchor<br className="hidden md:block" />
                et interface React moderne pour une meilleure UX.
              </blockquote>
            </div>
            <div className="absolute bottom-12 right-6 md:right-24 flex flex-wrap justify-end gap-4">
              <img src="https://cdn.jsdelivr.net/npm/simple-icons@v8/icons/rust.svg" alt="Rust" className="w-10 h-10 md:w-12 md:h-12 invert" />
              <img src="https://cdn.jsdelivr.net/npm/simple-icons@v8/icons/typescript.svg" alt="TypeScript" className="w-10 h-10 md:w-12 md:h-12 invert" />
              <img src="https://cdn.jsdelivr.net/npm/simple-icons@v8/icons/react.svg" alt="React" className="w-10 h-10 md:w-12 md:h-12 invert" />
            </div>
          </section>
        </div>

        {/* Slide 2: DEX Router */}
        <div
          aria-label="2 of 5"
          role="group"
          className="relative inline-block w-full snap-start px-6 text-left align-top md:px-0"
        >
          <section className="relative pt-16 pb-10 px-0 md:px-24">
            <div className="flex flex-wrap md:flex-nowrap items-center leading-[24px] md:leading-[25px] mb-4">
              {["Solana", "DEX", "Routing"].map((tag) => (
                <span
                  key={tag}
                  className="text-white text-lg bg-fuchsia-500 uppercase mr-3 mb-2.5 px-2 md:mb-0 leading-[28.8px]"
                >
                  {tag}
                </span>
              ))}
            </div>
            <h1 className="text-white text-5xl md:text-7xl font-bold leading-[1.2] my-6 md:my-8">
              DEX Router V1
            </h1>
            <p className="text-[22px] md:text-[24px] font-normal leading-[1.6] text-left max-w-full md:max-w-[740px] mb-6 whitespace-normal">
              Protocole de routage intelligent pour optimiser<br className="hidden md:block" />
              l'exécution des ordres à travers plusieurs DEX Solana,<br className="hidden md:block" />
              minimisant les slippage et maximisant les rendements.
            </p>
            <div className="relative bg-black/50 shadow-lg saturate-100 mt-12 mx-auto rounded-lg max-w-full md:max-w-[700px] px-6 py-8">
              <blockquote className="text-[18px] md:text-[19px] font-normal leading-[1.7] mb-2.5 text-left whitespace-normal">
                Système de routage intelligent intégrant les meilleures<br className="hidden md:block" />
                AMM de Solana. Implémentation performante des algorithmes<br className="hidden md:block" />
                de pathfinding pour maximiser l'efficacité des échanges.
              </blockquote>
            </div>
            <div className="absolute bottom-12 right-6 md:right-24 flex flex-wrap justify-end gap-4">
              <img src="https://cdn.jsdelivr.net/npm/simple-icons@v8/icons/rust.svg" alt="Rust" className="w-10 h-10 md:w-12 md:h-12 invert" />
              <img src="https://cdn.jsdelivr.net/npm/simple-icons@v8/icons/typescript.svg" alt="TypeScript" className="w-10 h-10 md:w-12 md:h-12 invert" />
            </div>
          </section>
        </div>

        {/* Slide 3: ZK-ElGamal Proof */}
        <div
          aria-label="3 of 5"
          role="group"
          className="relative inline-block w-full snap-start px-6 text-left align-top md:px-0"
        >
          <section className="relative pt-16 pb-10 px-0 md:px-24">
            <div className="flex flex-wrap md:flex-nowrap items-center leading-[24px] md:leading-[25px] mb-4">
              {["Cryptography", "ZK Proofs", "Solana"].map((tag) => (
                <span
                  key={tag}
                  className="text-white text-lg bg-fuchsia-500 uppercase mr-3 mb-2.5 px-2 md:mb-0 leading-[28.8px]"
                >
                  {tag}
                </span>
              ))}
            </div>
            <h1 className="text-white text-5xl md:text-7xl font-bold leading-[1.2] my-6 md:my-8">
              ZK-ElGamal Proof
            </h1>
            <p className="text-[22px] md:text-[24px] font-normal leading-[1.6] text-left max-w-full md:max-w-[740px] mb-6 whitespace-normal">
              Système de preuve zéro-connaissance pour vérifier<br className="hidden md:block" />
              le chiffrement ElGamal sans révéler les données sensibles,<br className="hidden md:block" />
              fondamental pour les protocoles DeFi confidentiels.
            </p>
            <div className="relative bg-black/50 shadow-lg saturate-100 mt-12 mx-auto rounded-lg max-w-full md:max-w-[700px] px-6 py-8">
              <blockquote className="text-[18px] md:text-[19px] font-normal leading-[1.7] mb-2.5 text-left whitespace-normal">
                Implémentation avancée de preuves zéro-connaissance<br className="hidden md:block" />
                utilisant les courbes elliptiques. Composant critique pour<br className="hidden md:block" />
                les protocoles DeFi requérant la confidentialité des transactions<br className="hidden md:block" />
                tout en garantissant l'authenticité.
              </blockquote>
            </div>
            <div className="absolute bottom-12 right-6 md:right-24 flex flex-wrap justify-end gap-4">
              <img src="https://cdn.jsdelivr.net/npm/simple-icons@v8/icons/rust.svg" alt="Rust" className="w-10 h-10 md:w-12 md:h-12 invert" />
            </div>
          </section>
        </div>

        {/* Slide 4: Research Token */}
        <div
          aria-label="4 of 5"
          role="group"
          className="relative inline-block w-full snap-start px-6 text-left align-top md:px-0"
        >
          <section className="relative pt-16 pb-10 px-0 md:px-24">
            <div className="flex flex-wrap md:flex-nowrap items-center leading-[24px] md:leading-[25px] mb-4">
              {["Solana", "Tokens", "Full-Stack"].map((tag) => (
                <span
                  key={tag}
                  className="text-white text-lg bg-fuchsia-500 uppercase mr-3 mb-2.5 px-2 md:mb-0 leading-[28.8px]"
                >
                  {tag}
                </span>
              ))}
            </div>
            <h1 className="text-white text-5xl md:text-7xl font-bold leading-[1.2] my-6 md:my-8">
              Research Token
            </h1>
            <p className="text-[22px] md:text-[24px] font-normal leading-[1.6] text-left max-w-full md:max-w-[740px] mb-6 whitespace-normal">
              Écosystème de tokens complet avec contrats intelligents<br className="hidden md:block" />
              Solana et interface frontend intégrée, démontrant<br className="hidden md:block" />
              l'implémentation end-to-end d'un projet DeFi.
            </p>
            <div className="relative bg-black/50 shadow-lg saturate-100 mt-12 mx-auto rounded-lg max-w-full md:max-w-[700px] px-6 py-8">
              <blockquote className="text-[18px] md:text-[19px] font-normal leading-[1.7] mb-2.5 text-left whitespace-normal">
                Projet showcase complet intégrant la chaîne de développement<br className="hidden md:block" />
                blockchain-to-frontend. Démonstration de best practices pour<br className="hidden md:block" />
                les tokenomics, la distribution et la gouvernance.
              </blockquote>
            </div>
            <div className="absolute bottom-12 right-6 md:right-24 flex flex-wrap justify-end gap-4">
              <img src="https://cdn.jsdelivr.net/npm/simple-icons@v8/icons/rust.svg" alt="Rust" className="w-10 h-10 md:w-12 md:h-12 invert" />
              <img src="https://cdn.jsdelivr.net/npm/simple-icons@v8/icons/react.svg" alt="React" className="w-10 h-10 md:w-12 md:h-12 invert" />
              <img src="https://cdn.jsdelivr.net/npm/simple-icons@v8/icons/typescript.svg" alt="TypeScript" className="w-10 h-10 md:w-12 md:h-12 invert" />
            </div>
          </section>
        </div>

        {/* Slide 5: Anchor Escrow */}
        <div
          aria-label="5 of 5"
          role="group"
          className="relative inline-block w-full snap-start px-6 text-left align-top md:px-0"
        >
          <section className="relative pt-16 pb-10 px-0 md:px-24">
            <div className="flex flex-wrap md:flex-nowrap items-center leading-[24px] md:leading-[25px] mb-4">
              {["Solana", "Anchor", "Smart Contracts"].map((tag) => (
                <span
                  key={tag}
                  className="text-white text-lg bg-fuchsia-500 uppercase mr-3 mb-2.5 px-2 md:mb-0 leading-[28.8px]"
                >
                  {tag}
                </span>
              ))}
            </div>
            <h1 className="text-white text-5xl md:text-7xl font-bold leading-[1.2] my-6 md:my-8">
              Anchor Escrow 2025
            </h1>
            <p className="text-[22px] md:text-[24px] font-normal leading-[1.6] text-left max-w-full md:max-w-[740px] mb-6 whitespace-normal">
              Implémentation moderne d'un smart contract escrow<br className="hidden md:block" />
              utilisant le framework Anchor, démontrant les meilleures<br className="hidden md:block" />
              pratiques de sécurité et de performance.
            </p>
            <div className="relative bg-black/50 shadow-lg saturate-100 mt-12 mx-auto rounded-lg max-w-full md:max-w-[700px] px-6 py-8">
              <blockquote className="text-[18px] md:text-[19px] font-normal leading-[1.7] mb-2.5 text-left whitespace-normal">
                Contrat d'escrow robuste construisant sur le framework Anchor<br className="hidden md:block" />
                avec gestion sécurisée des fonds et vérification complète<br className="hidden md:block" />
                des comptes. Fondation pour les protocoles DeFi trustless.
              </blockquote>
            </div>
            <div className="absolute bottom-12 right-6 md:right-24 flex flex-wrap justify-end gap-4">
              <img src="https://cdn.jsdelivr.net/npm/simple-icons@v8/icons/rust.svg" alt="Rust" className="w-10 h-10 md:w-12 md:h-12 invert" />
            </div>
          </section>
        </div>
      </div>

      <CarouselNavigation
        variant="previous"
        ariaLabel="previous slide"
        onClick={goToPrevious}
        imageUrl="https://cdn.prod.website-files.com/6621233fd44f04553ba73645/6621233fd44f04553ba736c7_cursor_prev@2x.png"
        imageAlt="Slide précédente"
      />
      <CarouselNavigation
        variant="next"
        ariaLabel="next slide"
        onClick={goToNext}
        imageUrl="https://cdn.prod.website-files.com/6621233fd44f04553ba73645/6621233fd44f04553ba736dc_cursor_next@2x.png"
        imageAlt="Slide suivante"
      />
    </div>
  );
};
