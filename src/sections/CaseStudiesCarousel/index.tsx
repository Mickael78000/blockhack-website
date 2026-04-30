"use client";

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
        {/* Slide 1: Architecture réseau collectivité */}
        <div
          aria-label="1 of 5"
          role="group"
          className="relative text-[15px] box-border caret-transparent inline-block leading-[24px] text-left align-top w-full snap-start px-6 md:px-0 md:text-[16px] md:leading-[25px]"
        >
          <section className="relative pt-16 pb-10 px-0 md:px-24">
            <div className="flex flex-wrap md:flex-nowrap items-center leading-[24px] md:leading-[25px] mb-4">
              {["Collectivité", "Réseau", "SD-WAN"].map((tag) => (
                <span
                  key={tag}
                  className="text-white text-lg bg-fuchsia-500 uppercase mr-3 mb-2.5 px-2 md:mb-0 leading-[28.8px]"
                >
                  {tag}
                </span>
              ))}
            </div>
            <h1 className="text-white text-5xl md:text-7xl font-bold leading-[1.2] my-6 md:my-8">
              Architecture réseau multi-sites
            </h1>
            <p className="text-[22px] md:text-[24px] font-normal leading-[1.6] text-left max-w-full md:max-w-[740px] mb-6 whitespace-normal">
              Conception d'une architecture réseau redondante pour un groupement de communes,<br className="hidden md:block" />
              intégrant segmentation VLAN, liens de secours 4G/fibre et supervision centralisée,<br className="hidden md:block" />
              avec documentation d'exploitation et plan de réversibilité.
            </p>
            <div className="relative bg-black/50 shadow-lg saturate-100 mt-12 mx-auto rounded-lg max-w-full md:max-w-[700px] px-6 py-8">
              <blockquote className="text-[18px] md:text-[19px] font-normal leading-[1.7] mb-2.5 text-left whitespace-normal">
                AMO complète : cahier des charges, analyse des offres, suivi de déploiement<br className="hidden md:block" />
                et recette technique — conformément aux exigences du code de la commande publique.
              </blockquote>
            </div>
            <div className="absolute bottom-12 right-6 md:right-24 flex flex-wrap justify-end gap-4">
              <img src="https://cdn.jsdelivr.net/npm/simple-icons@v8/icons/linux.svg" alt="Linux" className="w-10 h-10 md:w-12 md:h-12 invert" />
              <img src="https://cdn.jsdelivr.net/npm/simple-icons@v8/icons/docker.svg" alt="Docker" className="w-10 h-10 md:w-12 md:h-12 invert" />
            </div>
          </section>
        </div>

        {/* Slide 2: DevSecOps S-SDLC */}
        <div
          aria-label="2 of 5"
          role="group"
          className="relative inline-block w-full snap-start px-6 text-left align-top md:px-0"
        >
          <section className="relative pt-16 pb-10 px-0 md:px-24">
            <div className="flex flex-wrap md:flex-nowrap items-center leading-[24px] md:leading-[25px] mb-4">
              {["DevSecOps", "S-SDLC", "NIS2"].map((tag) => (
                <span
                  key={tag}
                  className="text-white text-lg bg-fuchsia-500 uppercase mr-3 mb-2.5 px-2 md:mb-0 leading-[28.8px]"
                >
                  {tag}
                </span>
              ))}
            </div>
            <h1 className="text-white text-5xl md:text-7xl font-bold leading-[1.2] my-6 md:my-8">
              Démarche DevSecOps pour un établissement public de santé
            </h1>
            <p className="text-[22px] md:text-[24px] font-normal leading-[1.6] text-left max-w-full md:max-w-[740px] mb-6 whitespace-normal">
              Accompagnement d'une DSI hospitalière dans la mise en place d'un S-SDLC :<br className="hidden md:block" />
              SAST, DAST, SCA intégrés à la chaîne CI/CD, gestion des secrets,<br className="hidden md:block" />
              SBOM et alignement sur les recommandations ANSSI.
            </p>
            <div className="relative bg-black/50 shadow-lg saturate-100 mt-12 mx-auto rounded-lg max-w-full md:max-w-[700px] px-6 py-8">
              <blockquote className="text-[18px] md:text-[19px] font-normal leading-[1.7] mb-2.5 text-left whitespace-normal">
                Traduction des exigences NIS2 en pratiques concrètes :<br className="hidden md:block" />
                security by design, gestion des vulnérabilités, IaC sécurisée<br className="hidden md:block" />
                et tableau de bord de conformité à destination de la direction.
              </blockquote>
            </div>
            <div className="absolute bottom-12 right-6 md:right-24 flex flex-wrap justify-end gap-4">
              <img src="https://cdn.jsdelivr.net/npm/simple-icons@v8/icons/docker.svg" alt="Docker" className="w-10 h-10 md:w-12 md:h-12 invert" />
              <img src="https://cdn.jsdelivr.net/npm/simple-icons@v8/icons/kubernetes.svg" alt="Kubernetes" className="w-10 h-10 md:w-12 md:h-12 invert" />
              <img src="https://cdn.jsdelivr.net/npm/simple-icons@v8/icons/typescript.svg" alt="TypeScript" className="w-10 h-10 md:w-12 md:h-12 invert" />
            </div>
          </section>
        </div>

        {/* Slide 3: Marchés publics */}
        <div
          aria-label="3 of 5"
          role="group"
          className="relative inline-block w-full snap-start px-6 text-left align-top md:px-0"
        >
          <section className="relative pt-16 pb-10 px-0 md:px-24">
            <div className="flex flex-wrap md:flex-nowrap items-center leading-[24px] md:leading-[25px] mb-4">
              {["Marché public", "Fibre optique", "VRD"].map((tag) => (
                <span
                  key={tag}
                  className="text-white text-lg bg-fuchsia-500 uppercase mr-3 mb-2.5 px-2 md:mb-0 leading-[28.8px]"
                >
                  {tag}
                </span>
              ))}
            </div>
            <h1 className="text-white text-5xl md:text-7xl font-bold leading-[1.2] my-6 md:my-8">
              Déploiement fibre et VRD en groupement d'entreprises
            </h1>
            <p className="text-[22px] md:text-[24px] font-normal leading-[1.6] text-left max-w-full md:max-w-[740px] mb-6 whitespace-normal">
              Rôle de mandataire d'un groupement pour un marché public de déploiement<br className="hidden md:block" />
              de fibre optique et travaux de VRD sur un campus universitaire :<br className="hidden md:block" />
              coordination technique, pièces administratives et mémoire technique.
            </p>
            <div className="relative bg-black/50 shadow-lg saturate-100 mt-12 mx-auto rounded-lg max-w-full md:max-w-[700px] px-6 py-8">
              <blockquote className="text-[18px] md:text-[19px] font-normal leading-[1.7] mb-2.5 text-left whitespace-normal">
                Constitution du dossier de candidature, rédaction du mémoire technique,<br className="hidden md:block" />
                coordination des cotraitants et suivi de l'exécution<br className="hidden md:block" />
                jusqu'à la réception des travaux.
              </blockquote>
            </div>
            <div className="absolute bottom-12 right-6 md:right-24 flex flex-wrap justify-end gap-4">
              <img src="https://cdn.jsdelivr.net/npm/simple-icons@v8/icons/linux.svg" alt="Linux" className="w-10 h-10 md:w-12 md:h-12 invert" />
              <img src="https://cdn.jsdelivr.net/npm/simple-icons@v8/icons/gnubash.svg" alt="Bash" className="w-10 h-10 md:w-12 md:h-12 invert" />
            </div>
          </section>
        </div>
 
        {/* Slide 4: VPN SD-WAN établissement */}
        <div
          aria-label="4 of 5"
          role="group"
          className="relative inline-block w-full snap-start px-6 text-left align-top md:px-0"
        >
          <section className="relative pt-16 pb-10 px-0 md:px-24">
            <div className="flex flex-wrap md:flex-nowrap items-center leading-[24px] md:leading-[25px] mb-4">
              {["VPN", "SD-WAN", "Supervision"].map((tag) => (
                <span
                  key={tag}
                  className="text-white text-lg bg-fuchsia-500 uppercase mr-3 mb-2.5 px-2 md:mb-0 leading-[28.8px]"
                >
                  {tag}
                </span>
              ))}
            </div>
            <h1 className="text-white text-5xl md:text-7xl font-bold leading-[1.2] my-6 md:my-8">
              Infrastructure VPN et supervision pour un opérateur public
            </h1>
            <p className="text-[22px] md:text-[24px] font-normal leading-[1.6] text-left max-w-full md:max-w-[740px] mb-6 whitespace-normal">
              Conception et mise en œuvre d'une infrastructure VPN site-à-site<br className="hidden md:block" />
              avec basculement automatique sur lien 4G, supervision SNMP/Syslog<br className="hidden md:block" />
              et documentation d'exploitation orientée équipe de production.
            </p>
            <div className="relative bg-black/50 shadow-lg saturate-100 mt-12 mx-auto rounded-lg max-w-full md:max-w-[700px] px-6 py-8">
              <blockquote className="text-[18px] md:text-[19px] font-normal leading-[1.7] mb-2.5 text-left whitespace-normal">
                Architecture simple, robuste et exploitable :<br className="hidden md:block" />
                procédures de bascule, runbooks d'exploitation<br className="hidden md:block" />
                et plan de continuité de service validé par le MOA.
              </blockquote>
            </div>
            <div className="absolute bottom-12 right-6 md:right-24 flex flex-wrap justify-end gap-4">
              <img src="https://cdn.jsdelivr.net/npm/simple-icons@v8/icons/wireguard.svg" alt="WireGuard" className="w-10 h-10 md:w-12 md:h-12 invert" />
              <img src="https://cdn.jsdelivr.net/npm/simple-icons@v8/icons/ansible.svg" alt="Ansible" className="w-10 h-10 md:w-12 md:h-12 invert" />
            </div>
          </section>
        </div>

        {/* Slide 5: IaC sécurité infogérance */}
        <div
          aria-label="5 of 5"
          role="group"
          className="relative inline-block w-full snap-start px-6 text-left align-top md:px-0"
        >
          <section className="relative pt-16 pb-10 px-0 md:px-24">
            <div className="flex flex-wrap md:flex-nowrap items-center leading-[24px] md:leading-[25px] mb-4">
              {["IaC", "DevOps", "Infogérance"].map((tag) => (
                <span
                  key={tag}
                  className="text-white text-lg bg-fuchsia-500 uppercase mr-3 mb-2.5 px-2 md:mb-0 leading-[28.8px]"
                >
                  {tag}
                </span>
              ))}
            </div>
            <h1 className="text-white text-5xl md:text-7xl font-bold leading-[1.2] my-6 md:my-8">
              Infogérance sécurisée et Infrastructure as Code
            </h1>
            <p className="text-[22px] md:text-[24px] font-normal leading-[1.6] text-left max-w-full md:max-w-[740px] mb-6 whitespace-normal">
              Mise en œuvre d'une infrastructure as code pour un organisme parapublic :<br className="hidden md:block" />
              déploiement reproductible, gestion des secrets, durcissement des images,<br className="hidden md:block" />
              et plan de réversibilité documenté.
            </p>
            <div className="relative bg-black/50 shadow-lg saturate-100 mt-12 mx-auto rounded-lg max-w-full md:max-w-[700px] px-6 py-8">
              <blockquote className="text-[18px] md:text-[19px] font-normal leading-[1.7] mb-2.5 text-left whitespace-normal">
                Pipelines CI/CD avec contrôle de conformité à chaque étape,<br className="hidden md:block" />
                documentation d'exploitation et transfert de compétences<br className="hidden md:block" />
                vers les équipes internes du commanditaire.
              </blockquote>
            </div>
            <div className="absolute bottom-12 right-6 md:right-24 flex flex-wrap justify-end gap-4">
              <img src="https://cdn.jsdelivr.net/npm/simple-icons@v8/icons/terraform.svg" alt="Terraform" className="w-10 h-10 md:w-12 md:h-12 invert" />
              <img src="https://cdn.jsdelivr.net/npm/simple-icons@v8/icons/ansible.svg" alt="Ansible" className="w-10 h-10 md:w-12 md:h-12 invert" />
              <img src="https://cdn.jsdelivr.net/npm/simple-icons@v8/icons/gitlab.svg" alt="GitLab" className="w-10 h-10 md:w-12 md:h-12 invert" />
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
