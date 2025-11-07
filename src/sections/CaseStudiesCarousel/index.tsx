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
        {/* Slide 1: Research Token */}
        <div
          aria-label="1 of 5"
          role="group"
          className="relative text-[15px] box-border caret-transparent inline-block leading-[24px] text-left align-top w-full snap-start px-6 md:px-0 md:text-[16px] md:leading-[25px]"
        >
          <section className="relative pt-16 pb-10 px-0 md:px-24">
            <div className="flex flex-wrap md:flex-nowrap items-center leading-[24px] md:leading-[25px] mb-4">
              {["Solana", "DeFi", "Tokenization"].map((tag) => (
                <span
                  key={tag}
                  className="text-white text-lg bg-fuchsia-500 uppercase mr-3 mb-2.5 px-2 md:mb-0 leading-[28.8px]"
                >
                  {tag}
                </span>
              ))}
            </div>
            <h1 className="text-white text-5xl md:text-7xl font-bold leading-[1.2] my-6 md:my-8">
              <a
                href="https://github.com/Mickael78000/research-token"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline underline-offset-4"
              >
                Research Token
              </a>
            </h1>
            <p className="text-[22px] md:text-[24px] font-normal leading-[1.6] text-left max-w-full md:max-w-[740px] mb-6 whitespace-normal">
              Application de tokenisation de la recherche scientifique<br className="hidden md:block" />
              avec score RIS et financement simulé,<br className="hidden md:block" />
              construite pour démontrer un flux DeFi complet.
            </p>
            <div className="relative bg-black/50 shadow-lg saturate-100 mt-12 mx-auto rounded-lg max-w-full md:max-w-[700px] px-6 py-8">
              <blockquote className="text-[18px] md:text-[19px] font-normal leading-[1.7] mb-2.5 text-left whitespace-normal">
                Prototype full-stack Next.js + TypeScript avec<br className="hidden md:block" />
                intégration Solana (mock) et squelette Anchor,<br className="hidden md:block" />
                mettant en avant les meilleures pratiques UI/UX.
              </blockquote>
            </div>
            <div className="absolute bottom-12 right-6 md:right-24 flex flex-wrap justify-end gap-4">
              <svg role="img" aria-label="Solana" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="w-10 h-10 md:w-12 md:h-12"><title>Solana</title><path fill="#ffffff" d="m23.8764 18.0313-3.962 4.1393a.9201.9201 0 0 1-.306.2106.9407.9407 0 0 1-.367.0742H.4599a.4689.4689 0 0 1-.2522-.0733.4513.4513 0 0 1-.1696-.1962.4375.4375 0 0 1-.0314-.2545.4438.4438 0 0 1 .117-.2298l3.9649-4.1393a.92.92 0 0 1 .3052-.2102.9407.9407 0 0 1 .3658-.0746H23.54a.4692.4692 0 0 1 .2523.0734.4531.4531 0 0 1 .1697.196.438.438 0 0 1 .0313.2547.4442.4442 0 0 1-.1169.2297zm-3.962-8.3355a.9202.9202 0 0 0-.306-.2106.941.941 0 0 0-.367-.0742H.4599a.4687.4687 0 0 0-.2522.0734.4513.4513 0 0 0-.1696.1961.4376.4376 0 0 0-.0314.2546.444.444 0 0 0 .117.2297l3.9649 4.1394a.9204.9204 0 0 0 .3052.2102c.1154.049.24.0744.3658.0746H23.54a.469.469 0 0 0 .2523-.0734.453.453 0 0 0 .1697-.1961.4382.4382 0 0 0 .0313-.2546.4444.4444 0 0 0-.1169-.2297zM.46 6.7225h18.7815a.9411.9411 0 0 0 .367-.0742.9202.9202 0 0 0 .306-.2106l3.962-4.1394a.4442.4442 0 0 0 .117-.2297.4378.4378 0 0 0-.0314-.2546.453.453 0 0 0-.1697-.196.469.469 0 0 0-.2523-.0734H4.7596a.941.941 0 0 0-.3658.0745.9203.9203 0 0 0-.3052.2102L.1246 5.9687a.4438.4438 0 0 0-.1169.2295.4375.4375 0 0 0 .0312.2544.4512.4512 0 0 0 .1692.196.4689.4689 0 0 0 .2518.0739z"/></svg>
              <img src="https://cdn.jsdelivr.net/npm/simple-icons@v8/icons/typescript.svg" alt="TypeScript" className="w-10 h-10 md:w-12 md:h-12 invert" />
            </div>
          </section>
        </div>

        {/* Slide 2: Meme Hunt */}
        <div
          aria-label="2 of 5"
          role="group"
          className="relative inline-block w-full snap-start px-6 text-left align-top md:px-0"
        >
          <section className="relative pt-16 pb-10 px-0 md:px-24">
            <div className="flex flex-wrap md:flex-nowrap items-center leading-[24px] md:leading-[25px] mb-4">
              {["Solana", "Web3", "Social"].map((tag) => (
                <span
                  key={tag}
                  className="text-white text-lg bg-fuchsia-500 uppercase mr-3 mb-2.5 px-2 md:mb-0 leading-[28.8px]"
                >
                  {tag}
                </span>
              ))}
            </div>
            <h1 className="text-white text-5xl md:text-7xl font-bold leading-[1.2] my-6 md:my-8">
              <a
                href="https://github.com/Mickael78000/meme-hunt"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline underline-offset-4"
              >
                Meme Hunt
              </a>
            </h1>
            <p className="text-[22px] md:text-[24px] font-normal leading-[1.6] text-left max-w-full md:max-w-[740px] mb-6 whitespace-normal">
              Application de découverte et d’interaction avec les memes,<br className="hidden md:block" />
              prête pour l’intégration Web3,<br className="hidden md:block" />
              construite avec une base front moderne.
            </p>
            <div className="relative bg-black/50 shadow-lg saturate-100 mt-12 mx-auto rounded-lg max-w-full md:max-w-[700px] px-6 py-8">
              <blockquote className="text-[18px] md:text-[19px] font-normal leading-[1.7] mb-2.5 text-left whitespace-normal">
                Exploration UX pour l’engagement communautaire,<br className="hidden md:block" />
                architecture prête pour la connexion wallet,<br className="hidden md:block" />
                et pipelines de contenu performants.
              </blockquote>
            </div>
            <div className="absolute bottom-12 right-6 md:right-24 flex flex-wrap justify-end gap-4">
              <img src="https://cdn.simpleicons.org/solana/000000" alt="Solana" className="w-10 h-10 md:w-12 md:h-12 invert" />
              <img src="https://cdn.jsdelivr.net/npm/simple-icons@v8/icons/typescript.svg" alt="TypeScript" className="w-10 h-10 md:w-12 md:h-12 invert" />
            </div>
          </section>
        </div>

        {/* Slide 3: ETH Voting DApp */}
        <div
          aria-label="3 of 5"
          role="group"
          className="relative inline-block w-full snap-start px-6 text-left align-top md:px-0"
        >
          <section className="relative pt-16 pb-10 px-0 md:px-24">
            <div className="flex flex-wrap md:flex-nowrap items-center leading-[24px] md:leading-[25px] mb-4">
              {["Ethereum", "DApp", "Voting"].map((tag) => (
                <span
                  key={tag}
                  className="text-white text-lg bg-fuchsia-500 uppercase mr-3 mb-2.5 px-2 md:mb-0 leading-[28.8px]"
                >
                  {tag}
                </span>
              ))}
            </div>
            <h1 className="text-white text-5xl md:text-7xl font-bold leading-[1.2] my-6 md:my-8">
              <a
                href="https://github.com/Mickael78000/eth-voting-dapp"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline underline-offset-4"
              >
                ETH Voting DApp
              </a>
            </h1>
            <p className="text-[22px] md:text-[24px] font-normal leading-[1.6] text-left max-w-full md:max-w-[740px] mb-6 whitespace-normal">
              Application de vote décentralisé sur Ethereum,<br className="hidden md:block" />
              garantissant transparence et immutabilité,<br className="hidden md:block" />
              pour des décisions on-chain vérifiables.
            </p>
            <div className="relative bg-black/50 shadow-lg saturate-100 mt-12 mx-auto rounded-lg max-w-full md:max-w-[700px] px-6 py-8">
              <blockquote className="text-[18px] md:text-[19px] font-normal leading-[1.7] mb-2.5 text-left whitespace-normal">
                Contrats en Solidity pour la gestion des scrutins,<br className="hidden md:block" />
                intégration Web3 et interface React,<br className="hidden md:block" />
                avec sécurité et clarté des résultats.
              </blockquote>
            </div>
            <div className="absolute bottom-12 right-6 md:right-24 flex flex-wrap justify-end gap-4">
              <img src="https://cdn.jsdelivr.net/npm/simple-icons@v8/icons/ethereum.svg" alt="Ethereum" className="w-10 h-10 md:w-12 md:h-12 invert" />
              <img src="https://cdn.jsdelivr.net/npm/simple-icons@v8/icons/solidity.svg" alt="Solidity" className="w-10 h-10 md:w-12 md:h-12 invert" />
              <img src="https://cdn.jsdelivr.net/npm/simple-icons@v8/icons/typescript.svg" alt="TypeScript" className="w-10 h-10 md:w-12 md:h-12 invert" />
            </div>
          </section>
        </div>
 
        {/* Slide 4: programMickael78000 */}
        <div
          aria-label="4 of 5"
          role="group"
          className="relative inline-block w-full snap-start px-6 text-left align-top md:px-0"
        >
          <section className="relative pt-16 pb-10 px-0 md:px-24">
            <div className="flex flex-wrap md:flex-nowrap items-center leading-[24px] md:leading-[25px] mb-4">
              {["Solana", "Anchor", "Voting"].map((tag) => (
                <span
                  key={tag}
                  className="text-white text-lg bg-fuchsia-500 uppercase mr-3 mb-2.5 px-2 md:mb-0 leading-[28.8px]"
                >
                  {tag}
                </span>
              ))}
            </div>
            <h1 className="text-white text-5xl md:text-7xl font-bold leading-[1.2] my-6 md:my-8">
              <a
                href="https://github.com/Mickael78000/sol-voting-dapp"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline underline-offset-4"
              >
                SOL Voting DApp
              </a>
            </h1>
            <p className="text-[22px] md:text-[24px] font-normal leading-[1.6] text-left max-w-full md:max-w-[740px] mb-6 whitespace-normal">
              Application Solana full‑stack implémentant le système de vote D21,
              supportant des votes positifs et négatifs,<br className="hidden md:block" />
              frontend Next.js + Tailwind + Wallet Adapter UI.
            </p>
            <div className="relative bg-black/50 shadow-lg saturate-100 mt-12 mx-auto rounded-lg max-w-full md:max-w-[700px] px-6 py-8">
              <blockquote className="text-[18px] md:text-[19px] font-normal leading-[1.7] mb-2.5 text-left whitespace-normal">
                API route typée construisant une transaction non signée,<br className="hidden md:block" />
                pour le programme on-chain Anchor,<br className="hidden md:block" />
                stack TypeScript, sécurité et clarté des résultats.
              </blockquote>
            </div>
            <div className="absolute bottom-12 right-6 md:right-24 flex flex-wrap justify-end gap-4">
              <svg role="img" aria-label="Solana" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="w-10 h-10 md:w-12 md:h-12"><title>Solana</title><path fill="#ffffff" d="m23.8764 18.0313-3.962 4.1393a.9201.9201 0 0 1-.306.2106.9407.9407 0 0 1-.367.0742H.4599a.4689.4689 0 0 1-.2522-.0733.4513.4513 0 0 1-.1696-.1962.4375.4375 0 0 1-.0314-.2545.4438.4438 0 0 1 .117-.2298l3.9649-4.1393a.92.92 0 0 1 .3052-.2102.9407.9407 0 0 1 .3658-.0746H23.54a.4692.4692 0 0 1 .2523.0734.4531.4531 0 0 1 .1697.196.438.438 0 0 1 .0313.2547.4442.4442 0 0 1-.1169.2297zm-3.962-8.3355a.9202.9202 0 0 0-.306-.2106.941.941 0 0 0-.367-.0742H.4599a.4687.4687 0 0 0-.2522.0734.4513.4513 0 0 0-.1696.1961.4376.4376 0 0 0-.0314.2546.444.444 0 0 0 .117.2297l3.9649 4.1394a.9204.9204 0 0 0 .3052.2102c.1154.049.24.0744.3658.0746H23.54a.469.469 0 0 0 .2523-.0734.453.453 0 0 0 .1697-.1961.4382.4382 0 0 0 .0313-.2546.4444.4444 0 0 0-.1169-.2297zM.46 6.7225h18.7815a.9411.9411 0 0 0 .367-.0742.9202.9202 0 0 0 .306-.2106l3.962-4.1394a.4442.4442 0 0 0 .117-.2297.4378.4378 0 0 0-.0314-.2546.453.453 0 0 0-.1697-.196.469.469 0 0 0-.2523-.0734H4.7596a.941.941 0 0 0-.3658.0745.9203.9203 0 0 0-.3052.2102L.1246 5.9687a.4438.4438 0 0 0-.1169.2295.4375.4375 0 0 0 .0312.2544.4512.4512 0 0 0 .1692.196.4689.4689 0 0 0 .2518.0739z"/></svg>
              <img src="https://cdn.jsdelivr.net/npm/simple-icons@v8/icons/rust.svg" alt="Rust" className="w-10 h-10 md:w-12 md:h-12 invert" />
              <img src="https://cdn.jsdelivr.net/npm/simple-icons@v8/icons/typescript.svg" alt="TypeScript" className="w-10 h-10 md:w-12 md:h-12 invert" />
            </div>
          </section>
        </div>

        {/* Slide 5: SOR ZK Proofs */}
        <div
          aria-label="5 of 5"
          role="group"
          className="relative inline-block w-full snap-start px-6 text-left align-top md:px-0"
        >
          <section className="relative pt-16 pb-10 px-0 md:px-24">
            <div className="flex flex-wrap md:flex-nowrap items-center leading-[24px] md:leading-[25px] mb-4">
              {["Solana", "ZK Proofs", "Routing"].map((tag) => (
                <span
                  key={tag}
                  className="text-white text-lg bg-fuchsia-500 uppercase mr-3 mb-2.5 px-2 md:mb-0 leading-[28.8px]"
                >
                  {tag}
                </span>
              ))}
            </div>
            <h1 className="text-white text-5xl md:text-7xl font-bold leading-[1.2] my-6 md:my-8">
              <a
                href="https://github.com/Mickael78000/sor-zk-proof"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline underline-offset-4"
              >
                SOR ZK Proofs
              </a>
            </h1>
            <p className="text-[22px] md:text-[24px] font-normal leading-[1.6] text-left max-w-full md:max-w-[740px] mb-6 whitespace-normal">
              Expérimentations de preuves à divulgation nulle,<br className="hidden md:block" />
              appliquées au Smart Order Routing sur Solana,<br className="hidden md:block" />
              visant confidentialité et vérifiabilité.
            </p>
            <div className="relative bg-black/50 shadow-lg saturate-100 mt-12 mx-auto rounded-lg max-w-full md:max-w-[700px] px-6 py-8">
              <blockquote className="text-[18px] md:text-[19px] font-normal leading-[1.7] mb-2.5 text-left whitespace-normal">
                Constructions ZK sur courbes elliptiques,<br className="hidden md:block" />
                preuves pour valider le chiffrement et le routing,<br className="hidden md:block" />
                fondation cryptographique pour DeFi privée.
              </blockquote>
            </div>
            <div className="absolute bottom-12 right-6 md:right-24 flex flex-wrap justify-end gap-4">
              <svg role="img" aria-label="Solana" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="w-10 h-10 md:w-12 md:h-12"><title>Solana</title><path fill="#ffffff" d="m23.8764 18.0313-3.962 4.1393a.9201.9201 0 0 1-.306.2106.9407.9407 0 0 1-.367.0742H.4599a.4689.4689 0 0 1-.2522-.0733.4513.4513 0 0 1-.1696-.1962.4375.4375 0 0 1-.0314-.2545.4438.4438 0 0 1 .117-.2298l3.9649-4.1393a.92.92 0 0 1 .3052-.2102.9407.9407 0 0 1 .3658-.0746H23.54a.4692.4692 0 0 1 .2523.0734.4531.4531 0 0 1 .1697.196.438.438 0 0 1 .0313.2547.4442.4442 0 0 1-.1169.2297zm-3.962-8.3355a.9202.9202 0 0 0-.306-.2106.941.941 0 0 0-.367-.0742H.4599a.4687.4687 0 0 0-.2522.0734.4513.4513 0 0 0-.1696.1961.4376.4376 0 0 0-.0314.2546.444.444 0 0 0 .117.2297l3.9649 4.1394a.9204.9204 0 0 0 .3052.2102c.1154.049.24.0744.3658.0746H23.54a.469.469 0 0 0 .2523-.0734.453.453 0 0 0 .1697-.1961.4382.4382 0 0 0 .0313-.2546.4444.4444 0 0 0-.1169-.2297zM.46 6.7225h18.7815a.9411.9411 0 0 0 .367-.0742.9202.9202 0 0 0 .306-.2106l3.962-4.1394a.4442.4442 0 0 0 .117-.2297.4378.4378 0 0 0-.0314-.2546.453.453 0 0 0-.1697-.196.469.469 0 0 0-.2523-.0734H4.7596a.941.941 0 0 0-.3658.0745.9203.9203 0 0 0-.3052.2102L.1246 5.9687a.4438.4438 0 0 0-.1169.2295.4375.4375 0 0 0 .0312.2544.4512.4512 0 0 0 .1692.196.4689.4689 0 0 0 .2518.0739z"/></svg>
              <img src="https://cdn.jsdelivr.net/npm/simple-icons@v8/icons/rust.svg" alt="Rust" className="w-10 h-10 md:w-12 md:h-12 invert" />
              <img src="https://cdn.jsdelivr.net/npm/simple-icons@v8/icons/typescript.svg" alt="TypeScript" className="w-10 h-10 md:w-12 md:h-12 invert" />
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
