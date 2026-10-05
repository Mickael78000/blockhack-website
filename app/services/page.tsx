import type { Metadata } from "next";
import Link from "next/link";
import { ContentPage } from "@/shared/components/ContentPage";
import { PrimaryCta } from "@/shared/components/PrimaryCta";

export const metadata: Metadata = {
  title: "Services informatiques pour particuliers et micro-entrepreneurs | BlockHack.io",
  description:
    "Réparation et sécurisation de PC, création et maintenance de sites web, gestion des données et continuité d’activité. Accompagnement dans la durée.",
};

export default function ServicesPage() {
  return (
    <ContentPage wide>
      <h1 className="text-lg md:text-5xl font-bold font-space_grotesk mb-4 text-cyan-400">
        Trois services, un même fil : vous accompagner dans la durée
      </h1>
      <p className="text-gray-300 text-base mb-8 leading-relaxed font-bold font-space_grotesk">
        Réparer et sécuriser votre PC, créer et faire vivre votre site, protéger vos données. Ponctuel si besoin, suivi si vous le souhaitez. Devis gratuit, sans engagement.
      </p>
      <p className="text-gray-300 mb-12 leading-relaxed">
        Beaucoup d’interventions se limitent à « dépanner et partir ». Je propose trois pôles complémentaires, pensés pour les particuliers et les très petites structures. Vous pouvez n’en prendre qu’un. Vous pouvez aussi construire un suivi : mises à jour, sauvegardes, petites évolutions.
      </p>

      <section className="mb-14">
        <h2 className="text-base font-bold font-space_grotesk mb-4">
          Réparation, sécurisation et amélioration de PC
        </h2>
        <p className="text-gray-300 mb-4 leading-relaxed">
          Votre ordinateur est l’outil du quotidien. Quand il ralentit ou inquiète, tout le reste suit. Je diagnostique, je répare, j’optimise, et je mets en place les protections de base — sans jargon.
        </p>
        <ul className="list-disc list-inside text-gray-300 space-y-2 mb-4">
          <li>Diagnostic et dépannage</li>
          <li>Nettoyage, optimisation, mises à niveau (RAM, SSD, etc.)</li>
          <li>Installation Windows, Linux, double système</li>
          <li>Sauvegarde, récupération dans la mesure du possible, sécurisation du poste</li>
          <li>Antivirus, mises à jour, 2FA, mots de passe, réflexes anti-arnaques</li>
        </ul>
        <Link href="/reparation-pc" className="text-cyan-400 hover:text-cyan-300">
          Détail de la prestation réparation PC
        </Link>
      </section>

      <section className="mb-14">
        <h2 className="text-xs font-bold font-space_grotesk mb-4">
          Création et maintenance de sites web
        </h2>
        <p className="text-gray-300 mb-4 leading-relaxed">
          Un site clair, rapide, facile à contacter. Conçu pour les indépendants, puis entretenu — pas abandonné six mois plus tard.
        </p>
        <ul className="list-disc list-inside text-gray-300 space-y-2 mb-4">
          <li>Site vitrine ou page unique</li>
          <li>Refonte, performance, bases du référencement</li>
          <li>Formulaire, prise de rendez-vous, réseaux sociaux</li>
          <li>Conseil sur la structure, les textes et les appels à l’action</li>
          <li>Maintenance et hébergement plus robuste, si vous le souhaitez</li>
        </ul>
        <Link href="/sites-web" className="text-cyan-400 hover:text-cyan-300">
          Détail de la prestation sites web
        </Link>
      </section>

      <section className="mb-14">
        <h2 className="text-xs font-bold font-space_grotesk mb-4">
          Gestion des données et continuité d’activité
        </h2>
        <p className="text-gray-300 mb-4 leading-relaxed">
          Ranger ce qui compte, copier au bon endroit, et vérifier que la copie se restaure vraiment. Pour un particulier comme pour une micro-entreprise.
        </p>
        <ul className="list-disc list-inside text-gray-300 space-y-2 mb-4">
          <li>Tri, classement, archivage</li>
          <li>Sauvegardes locales et/ou cloud, avec test de restauration</li>
          <li>Migration d’un ancien PC vers un nouveau</li>
          <li>Protection des dossiers importants</li>
          <li>Conduite à tenir en cas de panne, vol ou incident</li>
        </ul>
        <Link href="/donnees-continuite" className="text-cyan-400 hover:text-cyan-300">
          Détail de la prestation données
        </Link>
      </section>

      <p className="text-gray-300 mb-8 leading-relaxed">
        Les suivis sont optionnels. Ils servent à ceux qui veulent de la régularité. Vous restez libre. Je reste joignable.
      </p>
      <PrimaryCta />
    </ContentPage>
  );
}
