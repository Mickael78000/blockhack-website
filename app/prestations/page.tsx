import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Prestations et tarifs | BlockHack.io",
  description:
    "Découvrez les prestations BlockHack pour votre présence en ligne, votre site vitrine et votre environnement numérique, avec des tarifs clairs.",
};

type Offer = {
  name: string;
  scope: string;
  price: string;
};

const mainOffers: Offer[] = [
  {
    name: "Premier échange",
    scope:
      "Comprendre votre besoin et identifier les interventions à prévoir. Hors diagnostic technique approfondi.",
    price: "Offert",
  },
  {
    name: "Actualisation de votre présence en ligne",
    scope:
      "Actualisation des contenus convenus sur un site existant, jusqu’à cinq pages et dans le volume défini au devis. Mise à jour de la fiche Google Business Profile et des informations essentielles du profil LinkedIn, si pertinent. Une séance de prise en main et une fiche mémo.",
    price: "350 €",
  },
  {
    name: "Socle numérique essentiel",
    scope:
      "Forfait d’actualisation de la présence en ligne, état des lieux ciblé des outils et accès, contrôle des sauvegardes existantes et des principaux réglages de sécurité, configuration simple d’un outil essentiel. Deux séances de prise en main au total et une fiche mémo. Migration d’hébergement exclue.",
    price: "550 €",
  },
  {
    name: "Création ou refonte d’un site vitrine simple",
    scope:
      "Jusqu’à cinq pages, textes et images fournis, présentation adaptée aux mobiles, formulaire simple ou lien de réservation, mise en ligne et prise en main. Périmètre et corrections définis au devis.",
    price: "Sur devis — budget indicatif de 650 à 980 €",
  },
  {
    name: "Intervention complémentaire",
    scope:
      "Reprise importante des contenus, dépannage technique, migration de messageries, fonctionnalités supplémentaires ou configuration particulière.",
    price: "Sur devis",
  },
];

const websiteOffers: Offer[] = [
  {
    name: "Actualisation de pages existantes",
    scope:
      "Remplacement des textes, tarifs et images fournis, avec ajustements simples de présentation. Sans création de pages ni refonte graphique. Volume de contenu et corrections définis au devis.",
    price: "50 € par page",
  },
  {
    name: "Actualisation de la fiche Google Business Profile",
    scope:
      "Mise à jour des informations, horaires, description, services et photos fournis. Fiche déjà accessible. Hors récupération d’accès et traitement d’une suspension.",
    price: "80 €",
  },
  {
    name: "Migration simple d’hébergement",
    scope:
      "Sauvegarde préalable, transfert du site et de la base, configuration nécessaire au site, HTTPS et tests. Hors messageries, réparations importantes et frais d’abonnement ou de transfert du domaine.",
    price: "220 €",
  },
  {
    name: "Mise à niveau technique",
    scope:
      "Sauvegarde préalable, mise à niveau PHP vers une version maintenue et compatible, vérification du certificat TLS, redirection HTTPS, contrôle des contenus mixtes et tests essentiels. Hors correction d’incompatibilités importantes.",
    price: "120 €, après vérification préalable",
  },
  {
    name: "Sécurisation de base du site",
    scope:
      "Contrôles et corrections convenus concernant les versions, composants, accès, sauvegardes et réglages essentiels. Récapitulatif des actions réalisées et des points restant à traiter.",
    price: "Sur devis",
  },
];

const computerOffers: Offer[] = [
  {
    name: "Vérification et amélioration du PC",
    scope:
      "État des lieux du fonctionnement, du stockage, des logiciels au démarrage, des mises à jour et des sauvegardes. Améliorations convenues après diagnostic. Matériel et licences exclus.",
    price: "Sur devis",
  },
  {
    name: "Migration de Windows vers Linux",
    scope:
      "Pour un ordinateur : vérification préalable du matériel et des usages, sauvegarde des données définies au devis, installation et configuration d’une distribution adaptée, restitution des données et prise en main. Hors double démarrage, récupération de données et adaptation complexe de logiciels.",
    price: "250 €, après vérification préalable",
  },
  {
    name: "Initiation à Linux",
    scope:
      "Découverte du bureau, gestion des fichiers, installation des logiciels, mises à jour et gestes courants. Durée et exercices précisés au devis.",
    price: "120 €",
  },
  {
    name: "Initiation pratique à l’IA",
    scope:
      "Découverte des outils, formulation des demandes, exercices sur des tâches concrètes, vérification des réponses et précautions sur les données partagées. Durée précisée au devis. Hors installation d’IA locale et automatisation sur mesure.",
    price: "210 €",
  },
];

function OfferTable({
  offers,
  scopeHeading,
}: {
  offers: Offer[];
  scopeHeading: string;
}) {
  return (
    <div className="overflow-hidden border border-white/10 bg-[#101614]">
      <table className="w-full border-collapse text-left">
        <thead className="hidden bg-white/5 text-xs uppercase tracking-wide text-slate-300 sm:table-header-group">
          <tr>
            <th className="w-[28%] px-5 py-4 font-semibold" scope="col">
              Prestation
            </th>
            <th className="px-5 py-4 font-semibold" scope="col">
              {scopeHeading}
            </th>
            <th className="w-[23%] px-5 py-4 font-semibold" scope="col">
              Tarif
            </th>
          </tr>
        </thead>
        <tbody>
          {offers.map((offer) => (
            <tr
              key={offer.name}
              className="block border-b border-white/10 last:border-0 sm:table-row"
            >
              <th
                className="block px-5 pt-5 pb-1 text-base font-semibold text-white sm:table-cell sm:border-t sm:border-white/10 sm:px-5 sm:py-5 sm:align-top"
                scope="row"
              >
                <span className="mb-1 block text-xs font-medium text-teal-300 sm:hidden">
                  Prestation
                </span>
                {offer.name}
              </th>
              <td className="block px-5 pb-4 text-sm leading-6 text-slate-300 sm:table-cell sm:border-t sm:border-white/10 sm:px-5 sm:py-5 sm:align-top">
                <span className="mb-1 block text-xs font-medium text-teal-300 sm:hidden">
                  {scopeHeading}
                </span>
                {offer.scope}
              </td>
              <td className="block px-5 pb-5 text-sm font-semibold leading-6 text-teal-200 sm:table-cell sm:border-t sm:border-white/10 sm:px-5 sm:py-5 sm:align-top">
                <span className="mb-1 block text-xs font-medium text-teal-300 sm:hidden">
                  Tarif
                </span>
                {offer.price}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function OfferSection({
  id,
  eyebrow,
  title,
  scopeHeading,
  offers,
}: {
  id: string;
  eyebrow: string;
  title: string;
  scopeHeading: string;
  offers: Offer[];
}) {
  return (
    <section id={id} className="scroll-mt-8">
      <div className="mb-6">
        <p className="mb-2 text-xs font-semibold uppercase tracking-[0.16em] text-teal-300">
          {eyebrow}
        </p>
        <h2 className="text-2xl font-semibold leading-tight text-white md:text-3xl">
          {title}
        </h2>
      </div>
      <OfferTable offers={offers} scopeHeading={scopeHeading} />
    </section>
  );
}

export default function PrestationsPage() {
  return (
    <main className="min-h-screen bg-[#101614] text-slate-100">
      <header className="border-b border-white/10">
        <nav
          aria-label="Navigation principale"
          className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-4 px-5 py-4 md:px-8"
        >
          <Link
            href="/"
            className="text-xl font-semibold tracking-tight text-white hover:text-teal-200"
          >
            BlockHack
          </Link>
          <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-slate-300">
            <Link href="/" className="transition hover:text-white">
              Accueil
            </Link>
            <a href="#offres-principales" className="transition hover:text-white">
              Prestations
            </a>
            <Link href="/#contact" className="transition hover:text-white">
              Contact
            </Link>
          </div>
        </nav>
      </header>

      <div className="mx-auto max-w-7xl px-5 py-12 md:px-8 md:py-20">
        <Link
          href="/"
          className="mb-10 inline-flex items-center gap-2 text-sm font-medium text-teal-200 transition hover:text-white"
        >
          <ArrowLeft aria-hidden="true" size={16} />
          Retour à l’accueil
        </Link>

        <div className="mb-12 max-w-3xl">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.16em] text-teal-300">
            Des solutions lisibles
          </p>
          <h1 className="text-4xl font-semibold leading-tight text-white md:text-5xl">
            Des prestations simples et cadrées
          </h1>
          <p className="mt-5 text-base leading-7 text-slate-300">
            Chaque intervention est définie selon votre besoin. Le périmètre,
            les contenus et les éventuelles corrections sont précisés au devis
            avant le démarrage.
          </p>
        </div>

        <div className="space-y-14">
          <OfferSection
            id="offres-principales"
            eyebrow="Les offres principales"
            title="Un accompagnement adapté à votre besoin"
            scopeHeading="Contenu"
            offers={mainOffers}
          />
          <OfferSection
            id="site-web"
            eyebrow="Site web"
            title="Actualisation, hébergement et sécurité"
            scopeHeading="Périmètre"
            offers={websiteOffers}
          />
          <OfferSection
            id="assistance-numerique"
            eyebrow="Assistance numérique"
            title="Ordinateur, Linux et outils numériques"
            scopeHeading="Périmètre proposé"
            offers={computerOffers}
          />
        </div>

        <div className="mt-14 flex flex-col items-start justify-between gap-5 border border-teal-300/20 bg-[#151d19] p-6 md:flex-row md:items-center md:p-8">
          <div>
            <h2 className="text-xl font-semibold text-white">
              Besoin d’une prestation adaptée ?
            </h2>
            <p className="mt-2 text-sm leading-6 text-slate-300">
              Décrivez votre situation pour obtenir un périmètre clair et un
              devis lorsque c’est nécessaire.
            </p>
          </div>
          <Link
            href="/#contact"
            className="inline-flex min-h-11 shrink-0 items-center gap-2 rounded-md bg-teal-300 px-4 py-2 text-sm font-semibold text-[#10201c] transition hover:bg-teal-200"
          >
            Parler de mon besoin
            <ArrowRight aria-hidden="true" size={16} />
          </Link>
        </div>
      </div>

      <footer className="border-t border-white/10 bg-[#0b100e]">
        <div className="mx-auto flex max-w-7xl flex-col gap-5 px-5 py-7 text-sm text-slate-400 md:flex-row md:items-center md:justify-between md:px-8">
          <p>© {new Date().getFullYear()} BlockHack — Versailles et environs</p>
          <nav
            aria-label="Liens de pied de page"
            className="flex flex-wrap gap-x-6 gap-y-2"
          >
            <Link className="hover:text-white" href="/mentions-legales">
              Mentions légales
            </Link>
            <Link className="hover:text-white" href="/politique-confidentialite">
              Politique de confidentialité
            </Link>
            <Link className="hover:text-white" href="/#contact">
              Contact
            </Link>
          </nav>
        </div>
      </footer>
    </main>
  );
}
