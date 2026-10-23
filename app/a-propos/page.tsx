import type { Metadata } from "next";
import { ContentPage } from "@/shared/components/ContentPage";
import { PrimaryCta } from "@/shared/components/PrimaryCta";

export const metadata: Metadata = {
  title: "À propos — Mickaël Girondeau | BlockHack.io",
  description:
    "Ingénieur et ancien militaire, reconversion vers l’accompagnement informatique des particuliers et micro-entreprises à Versailles et à distance.",
};

export default function AProposPage() {
  return (
    <ContentPage>
      <h1 className="text-lg md:text-5xl font-bold font-space_grotesk mb-4 text-cyan-400">
        De la rigueur des environnements exigeants, au service de votre quotidien numérique
      </h1>
      <p className="text-gray-300 text-[0.5625rem] mb-8 leading-relaxed">
        Ingénieur, ancien militaire, je mets aujourd’hui cette discipline au service des particuliers et des micro-entreprises — avec pédagogie et discrétion.
      </p>
      <p className="text-gray-300 mb-6 leading-relaxed">
        Je m’appelle Mickaël Girondeau. J’ai appris à travailler dans des contextes où l’on n’a pas le droit à l’à-peu-près : délais, sécurité, coordination, situations tendues. Diplômé des Arts et Métiers, j’ai conduit des projets complexes, souvent liés à la commande publique et à des enjeux de sûreté.
      </p>
      <p className="text-gray-300 mb-10 leading-relaxed">
        J’ai choisi une reconversion vers l’informatique pour être utile près des gens : particuliers, artisans, commerçants, freelances, professions libérales. Moins de grands discours, plus de service rendu. Une relation claire : respect, engagement sur ce qui a été promis.
      </p>

      <h2 className="text-xs font-bold font-space_grotesk mb-4">Ce que ça change pour vous</h2>
      <div className="space-y-4 text-gray-300 leading-relaxed mb-10">
        <p>
          <strong className="text-white">Rigueur opérationnelle.</strong> Diagnostic, ordre des actions, vérification. On ne « tente un truc » au hasard sur vos fichiers.
        </p>
        <p>
          <strong className="text-white">Pédagogie.</strong> Je vous dis ce que je fais, dans un langage normal.
        </p>
        <p>
          <strong className="text-white">Discrétion.</strong> Vos photos, vos factures, vos mails, vos dossiers clients : respect total. Je n’accède qu’à ce qui est nécessaire.
        </p>
        <p>
          <strong className="text-white">Résilience.</strong> Réparer aujourd’hui, et vous laisser moins fragile demain : sauvegarde, mises à jour, site entretenu, plan B.
        </p>
      </div>

      <h2 className="text-xs font-bold font-space_grotesk mb-4">BlockHack.io</h2>
      <p className="text-gray-300 mb-10 leading-relaxed">
        Micro-entreprise basée à Versailles (Île-de-France). Interventions à distance partout où c’est pertinent, et en présentiel lorsque le matériel ou la situation l’exigent.
      </p>

      <PrimaryCta />
    </ContentPage>
  );
}
