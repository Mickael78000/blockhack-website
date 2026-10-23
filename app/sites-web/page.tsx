import type { Metadata } from "next";
import { ContentPage } from "@/shared/components/ContentPage";
import { PrimaryCta } from "@/shared/components/PrimaryCta";

export const metadata: Metadata = {
  title: "Création de sites vitrines pour indépendants | BlockHack.io",
  description:
    "Sites vitrines et pages uniques pour artisans, commerçants et freelances. Refonte, maintenance, formulaires. Devis gratuit.",
};

export default function SitesWebPage() {
  return (
    <ContentPage>
      <h1 className="text-lg md:text-5xl font-bold font-space_grotesk mb-4 text-cyan-400">
        Un site clair, qui inspire confiance et qui se met à jour
      </h1>
      <p className="text-gray-300 text-[0.5625rem] mb-8 leading-relaxed">
        Vitrines et pages uniques pour indépendants. Conçu pour être compris, contacté, et entretenu.
      </p>
      <p className="text-gray-300 mb-10 leading-relaxed">
        Beaucoup de micro-entrepreneurs ont un site trop chargé, trop lent, ou plus mis à jour. Je vous aide à avoir une page lisible, un contact évident, et une image pro sans y passer vos week-ends. On part de votre activité réelle. Ensuite, si vous le souhaitez, je reste pour la maintenance.
      </p>

      <h2 className="text-xs font-bold font-space_grotesk mb-4">Ce que je fais concrètement</h2>
      <div className="space-y-4 text-gray-300 leading-relaxed mb-10">
        <p>
          <strong className="text-white">Sites vitrines et one-page.</strong> Artisans, commerces, freelances, professions libérales : l’essentiel, bien présenté.
        </p>
        <p>
          <strong className="text-white">Refonte.</strong> On garde ce qui marche, on simplifie le reste, on accélère, on pose les bases d’un référencement honnête (titres, pages, clarté).
        </p>
        <p>
          <strong className="text-white">Outils du quotidien.</strong> Formulaire de contact, prise de rendez-vous, liens vers vos réseaux, bouton d’appel.
        </p>
        <p>
          <strong className="text-white">Conseil éditorial.</strong> Arborescence courte, textes compréhensibles, appels à l’action visibles. Vous restez la voix de votre métier.
        </p>
        <p>
          <strong className="text-white">Maintenance.</strong> Mises à jour, petites évolutions, sauvegardes, sécurité de base.
        </p>
        <p>
          <strong className="text-white">Résilience (option).</strong> Hébergement fiable, sauvegardes automatiques, protections contre les attaques les plus courantes. Pas de promesse d’invulnérabilité : de la robustesse raisonnable.
        </p>
      </div>

      <h2 className="text-xs font-bold font-space_grotesk mb-4">Ce que vous y gagnez</h2>
      <p className="text-gray-300 mb-10 leading-relaxed">
        Une image plus nette dès la première visite. Moins de messages « je n’ai pas trouvé le numéro ». Un site que vous n’avez pas peur d’ouvrir devant un client. La possibilité d’un suivi, pour ne pas tout réapprendre dans deux ans.
      </p>

      <h2 className="text-xs font-bold font-space_grotesk mb-4">Déroulement type</h2>
      <ol className="list-decimal list-inside text-gray-300 space-y-2 mb-10">
        <li>Échange : activité, objectifs, exemples de sites que vous aimez (ou pas).</li>
        <li>Proposition : périmètre, planning indicatif, devis gratuit.</li>
        <li>Réalisation : maquette simple, contenus, mise en ligne, tests sur téléphone.</li>
        <li>Remise : vous savez modifier le minimum vital, ou me le confier.</li>
        <li>Suite : forfait de maintenance optionnel, ou interventions à la demande.</li>
      </ol>

      <PrimaryCta />
    </ContentPage>
  );
}
