import type { Metadata } from "next";
import Image from "next/image";
import { ArrowDownRight, ArrowRight, Check, Mail, MapPin, Phone } from "lucide-react";
import { DiagnosticContactForm } from "@/features/audit-request/DiagnosticContactForm";

export const metadata: Metadata = {
  title: "BlockHack — Votre socle numérique, simple et fiable",
  description:
    "Diagnostic numérique offert pour indépendants, auto-entrepreneurs, TPE et praticiens. Informatique, site web, Google, LinkedIn, sauvegardes et sécurité à Versailles et environs.",
};

const problems = [
  "Ordinateur lent, en panne ou à mettre à niveau",
  "Accès perdus, mots de passe et comptes à reprendre en main",
  "Site web obsolète, lent ou difficile à modifier",
  "Fiche Google Business Profile incomplète ou peu visible",
  "Profil LinkedIn peu cohérent avec l’activité",
  "Sauvegardes absentes, incertaines ou non testées",
  "Outils de travail mal configurés : e-mail, agenda, réservation, cloud",
  "Besoin d’un interlocuteur local, clair et fiable",
];

const services = [
  {
    number: "01",
    name: "Diagnostic numérique",
    price: "Offert — offre de lancement",
    introduction: "Pour identifier les blocages et les priorités.",
    items: [
      "Analyse de votre ordinateur, de vos outils et de votre présence en ligne",
      "Vérification du site, de Google et de LinkedIn",
      "Identification des blocages et des risques",
      "Synthèse avec recommandations prioritaires",
    ],
    action: "Réserver mon diagnostic",
    href: "#contact",
    featured: true,
  },
  {
    number: "02",
    name: "Mise à niveau essentielle",
    price: "350 € HT",
    introduction: "Pour remettre de l’ordre dans votre visibilité en ligne.",
    items: [
      "Mise à jour du site ou des informations essentielles",
      "Optimisation de la fiche Google Business Profile",
      "Mise à niveau du profil LinkedIn",
      "Séance de prise en main",
      "Fiche mémo personnalisée",
    ],
    action: "Demander cette prestation",
    href: "#contact",
  },
  {
    number: "03",
    name: "Socle numérique complet",
    price: "550 € HT",
    introduction: "Pour disposer d’un environnement simple, fiable et sécurisé.",
    items: [
      "Diagnostic approfondi de vos outils et accès",
      "Mise à niveau du site, de Google et de LinkedIn",
      "Vérification des sauvegardes et de la sécurité de base",
      "Configuration d’un outil essentiel : agenda, e-mail, réservation, cloud…",
      "Deux séances de prise en main",
      "Fiche mémo et procédure simple",
    ],
    action: "Demander cette prestation",
    href: "#contact",
  },
  {
    number: "04",
    name: "Site moderne ou migration",
    price: "Sur devis",
    introduction: "Pour moderniser ou reconstruire un site simple.",
    items: [
      "Étude de l’existant et de vos accès",
      "Migration ou reconstruction d’un site simple",
      "Reprise des contenus utiles",
      "Mise en service, tests et prise en main",
    ],
    action: "Demander un devis",
    href: "#contact",
  },
];

const reasons = [
  ["Une vision globale", "Matériel, outils, site, Google, LinkedIn et sécurité."],
  ["Une approche claire", "Des explications simples, sans jargon inutile."],
  ["Une autonomie réelle", "Vous savez utiliser et faire évoluer l’essentiel."],
  ["Une intervention locale", "À domicile, sur site ou à distance."],
];

const audiences = [
  "Indépendants et auto-entrepreneurs",
  "TPE et micro-entreprises",
  "Praticiens du bien-être, coachs et thérapeutes",
  "Associations et petites structures",
];

function SectionHeading({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description?: string;
}) {
  return (
    <div className="mb-10 max-w-2xl">
      <p className="mb-3 text-xs font-semibold uppercase tracking-[0.16em] text-teal-300">
        {eyebrow}
      </p>
      <h2 className="text-3xl font-semibold leading-tight text-white md:text-4xl">{title}</h2>
      {description && <p className="mt-4 text-base leading-7 text-slate-300">{description}</p>}
    </div>
  );
}

export default function HomePage() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#101614] text-slate-100">
      <header className="relative z-10 border-b border-white/10">
        <nav
          aria-label="Navigation principale"
          className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 py-4 md:px-8"
        >
          <a href="#accueil" className="flex items-center gap-3" aria-label="BlockHack, accueil">
            <Image src="/images/blockhack-logo.webp" alt="" width={44} height={44} priority className="h-11 w-11 object-contain" />
            <span className="hidden text-xl font-semibold tracking-tight text-white sm:inline">BlockHack</span>
          </a>
          <div className="hidden items-center gap-7 text-sm text-slate-300 md:flex">
            <a className="transition hover:text-white" href="#problemes">Vos besoins</a>
            <a className="transition hover:text-white" href="/prestations">Prestations</a>
            <a className="transition hover:text-white" href="#blockhack">Pourquoi BlockHack</a>
          </div>
          <a
            href="#contact"
            className="inline-flex min-h-11 items-center justify-center gap-2 rounded-md bg-teal-300 px-4 py-2 text-sm font-semibold text-[#10201c] transition hover:bg-teal-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-200"
          >
            Réserver mon diagnostic <ArrowRight aria-hidden="true" size={16} />
          </a>
        </nav>
      </header>

      <section id="accueil" className="relative border-b border-white/10">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 py-16 md:grid-cols-[1.2fr_0.8fr] md:px-8 md:py-24">
          <div>
            <p className="mb-5 text-sm font-medium text-teal-300">Le numérique au service de votre activité</p>
            <h1 className="max-w-3xl text-4xl font-semibold leading-[1.08] tracking-tight text-white sm:text-5xl md:text-6xl">
              Votre socle numérique, simple, fiable et maîtrisé.
            </h1>
            <p className="mt-6 text-lg font-medium text-slate-200">
              Pour indépendants, auto-entrepreneurs, TPE et praticiens.
            </p>
            <p className="mt-5 max-w-2xl text-base leading-7 text-slate-300">
              Votre site ne fonctionne plus ? Vos clients ne vous trouvent pas facilement ? Vos outils,
              sauvegardes ou accès vous font perdre du temps ?
            </p>
            <p className="mt-3 max-w-2xl text-base leading-7 text-white">
              BlockHack remet votre environnement numérique en état de travailler pour vous.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href="#contact"
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-md bg-teal-300 px-5 py-3 font-semibold text-[#10201c] transition hover:bg-teal-200"
              >
                Réserver mon diagnostic offert <ArrowRight aria-hidden="true" size={17} />
              </a>
              <a
                href="/prestations"
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-md border border-white/20 px-5 py-3 font-medium text-white transition hover:border-white/50"
              >
                Découvrir les prestations <ArrowDownRight aria-hidden="true" size={17} />
              </a>
            </div>
            <ul className="mt-8 flex flex-wrap gap-2" aria-label="Domaines d’intervention">
              {["Assistance informatique", "Site, Google et LinkedIn", "Sauvegardes et sécurité de base"].map((item) => (
                <li key={item} className="rounded-full border border-white/15 px-3 py-1.5 text-xs text-slate-300">
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <aside className="border-l border-teal-300/50 py-2 pl-6 md:ml-auto md:max-w-sm md:pl-8">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-teal-300">Premier pas</p>
            <p className="mt-4 text-2xl font-semibold leading-snug text-white">Un état des lieux, puis des choix clairs.</p>
            <p className="mt-4 text-sm leading-6 text-slate-300">
              Le diagnostic offert permet de repérer vos priorités avant de décider quoi faire, et dans quel ordre.
            </p>
            <a href="#prestations" className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-teal-200 hover:text-white">
              Voir les prestations <ArrowRight aria-hidden="true" size={16} />
            </a>
          </aside>
        </div>
      </section>

        {/* New Effects */}
        <GridPattern />
        <FloatingParticles />
        <FloatingGeometries />
        <LightBeams />
      </div>
      <div className="relative z-10">
        <div className="fixed text-[7.5649px] box-border caret-transparent leading-[12.1038px] left-[0%] top-[0%] md:text-[15.667px] md:leading-[25.0672px] before:accent-auto before:caret-transparent before:text-white/70 before:table before:text-[7.5649px] before:not-italic before:normal-nums before:font-medium before:col-end-2 before:col-start-1 before:row-end-2 before:row-start-1 before:tracking-[normal] before:leading-[12.1038px] before:list-outside before:list-disc before:pointer-events-auto before:text-start before:indent-[0px] before:normal-case before:visible before:border-separate before:font-space_grotesk before:md:text-[15.667px] before:md:leading-[25.0672px] after:accent-auto after:caret-transparent after:clear-both after:text-white/70 after:table after:text-[7.5649px] after:not-italic after:normal-nums after:font-medium after:col-end-2 after:col-start-1 after:row-end-2 after:row-start-1 after:tracking-[normal] after:leading-[12.1038px] after:list-outside after:list-disc after:pointer-events-auto after:text-start after:indent-[0px] after:normal-case after:visible after:border-separate after:font-space_grotesk after:md:text-[15.667px] after:md:leading-[25.0672px]"></div>
        <div className="text-[7.5649px] box-border caret-transparent leading-[12.1038px] overflow-hidden md:text-[15.667px] md:leading-[25.0672px]">
          <div className="relative text-[7.5649px] bg-no-repeat bg-cover box-border caret-transparent leading-[12.1038px] bg-[position:50%_0px] rounded-[7px] md:text-[15.667px] md:leading-[25.0672px]">
            <div className="absolute text-[7.5649px] aspect-[0_/_1] bg-[radial-gradient(circle,rgba(255,255,255,0.19)_1px,rgba(0,0,0,0)_0px)] bg-repeat-round bg-size-[60px_60px] box-border caret-transparent h-full leading-[12.1038px] min-h-[1000px] bg-center inset-[0%] md:text-[15.667px] md:leading-[25.0672px]"></div>
            <div className="relative text-[7.5649px] box-border caret-transparent leading-[12.1038px] md:text-[15.667px] md:leading-[25.0672px]">
              <Navbar />
              <div className="text-[7.5649px] box-border caret-transparent leading-[12.1038px] overflow-hidden md:text-[15.667px] md:leading-[25.0672px]">
                <Hero />
              </div>
              {/* <div className="text-[7.5649px] box-border caret-transparent leading-[12.1038px] bg-[position:0px_0px] pt-[30px] md:text-[15.667px] md:leading-[25.0672px]">
                <div className="text-[7.5649px] box-border caret-transparent leading-[12.1038px] max-w-[1248.2px] w-full mx-auto px-[25px] py-5 md:text-[15.667px] md:leading-[25.0672px] md:max-w-[1292.53px]">
                  <CaseStudiesCarousel />
                </div>
                <h3 className="mt-5 text-xl font-semibold text-white">{service.name}</h3>
                <p className="mt-2 text-lg font-semibold text-teal-200">{service.price}</p>
                <p className="mt-3 min-h-12 text-sm leading-6 text-slate-300">{service.introduction}</p>
                <ul className="mt-5 flex-1 space-y-3 border-t border-white/10 pt-5">
                  {service.items.map((item) => (
                    <li key={item} className="flex gap-2 text-sm leading-5 text-slate-300">
                      <Check aria-hidden="true" className="mt-0.5 shrink-0 text-teal-300" size={15} />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <a
                  href={service.href}
                  className="mt-7 inline-flex min-h-11 items-center justify-between gap-2 border-t border-white/10 pt-4 text-sm font-semibold text-white transition hover:text-teal-200"
                >
                  {service.action} <ArrowRight aria-hidden="true" size={16} />
                </a>
              </article>
            ))}
          </div>
          <p className="mt-5 text-xs leading-5 text-slate-400">
            Le devis est établi après diagnostic, afin de définir précisément le périmètre, les accès et les contenus à reprendre.
          </p>
          <a
            href="/prestations"
            className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-teal-200 transition hover:text-white"
          >
            Voir le détail des prestations et tarifs
            <ArrowRight aria-hidden="true" size={16} />
          </a>
        </div>
      </section>

      <section className="border-b border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-6 px-5 py-10 md:flex-row md:items-center md:px-8">
          <div>
            <p className="text-lg font-semibold text-white">Vous ne savez pas encore quelle prestation choisir ?</p>
            <p className="mt-1 text-sm text-slate-300">Faisons le point ensemble, sans engagement.</p>
          </div>
          <a href="#contact" className="inline-flex min-h-11 items-center gap-2 rounded-md bg-teal-300 px-4 py-2 text-sm font-semibold text-[#10201c] transition hover:bg-teal-200">
            Réserver mon diagnostic offert <ArrowRight aria-hidden="true" size={16} />
          </a>
        </div>
      </section>

      <section id="blockhack" className="mx-auto grid max-w-7xl gap-12 px-5 py-16 md:grid-cols-[0.9fr_1.1fr] md:px-8 md:py-24">
        <div>
          <SectionHeading eyebrow="Une relation de confiance" title="Pourquoi BlockHack ?" />
          <p className="text-lg leading-8 text-slate-200">
            Je ne me limite pas à fournir une prestation : je vous aide à reprendre la maîtrise de vos outils numériques.
          </p>
        </div>
        <dl className="grid gap-x-8 sm:grid-cols-2">
          {reasons.map(([title, detail], index) => (
            <div key={title} className="border-t border-white/10 py-5">
              <dt className="flex items-center gap-3 font-semibold text-white">
                <span className="text-xs font-medium text-teal-300">0{index + 1}</span>{title}
              </dt>
              <dd className="mt-2 pl-8 text-sm leading-6 text-slate-300">{detail}</dd>
            </div>
          ))}
        </dl>
      </section>

      <section className="border-y border-white/10 bg-[#151d19]">
        <div className="mx-auto grid max-w-7xl gap-8 px-5 py-16 md:grid-cols-[0.7fr_1.3fr] md:items-center md:px-8 md:py-20">
          <SectionHeading eyebrow="Des structures à taille humaine" title="Pour qui ?" />
          <div>
            <ul className="grid gap-3 sm:grid-cols-2">
              {audiences.map((audience) => (
                <li key={audience} className="flex min-h-14 items-center gap-3 border-b border-white/10 py-3 text-sm font-medium text-slate-100">
                  <span aria-hidden="true" className="h-1.5 w-1.5 shrink-0 rounded-full bg-teal-300" />
                  {audience}
                </li>
              ))}
            </ul>
            <p className="mt-6 max-w-2xl text-sm leading-6 text-slate-300">
              BlockHack aide les structures sans service informatique interne à disposer d’outils fiables, compréhensibles et adaptés à leur activité.
            </p>
          </div>
        </div>
      </section>

      <section id="contact" className="mx-auto grid max-w-7xl gap-12 px-5 py-16 md:grid-cols-[0.8fr_1.2fr] md:px-8 md:py-24">
        <div>
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.16em] text-teal-300">À vous de jouer</p>
          <h2 className="text-3xl font-semibold leading-tight text-white md:text-4xl">Faites le point sur votre environnement numérique.</h2>
          <p className="mt-5 text-base leading-7 text-slate-300">
            Réservez un diagnostic offert pour identifier les blocages, les risques et les actions prioritaires.
          </p>
          <div className="mt-8 space-y-4 border-t border-white/10 pt-6 text-sm text-slate-300">
            <a className="flex items-center gap-3 hover:text-white" href="https://blockhack.io"><ArrowRight aria-hidden="true" size={16} className="text-teal-300" />blockhack.io</a>
            <a className="flex items-center gap-3 hover:text-white" href="tel:+33626336810"><Phone aria-hidden="true" size={16} className="text-teal-300" />06 26 33 68 10</a>
            <a className="flex items-center gap-3 hover:text-white" href="mailto:contact@blockhack.io"><Mail aria-hidden="true" size={16} className="text-teal-300" />contact@blockhack.io</a>
            <p className="flex items-center gap-3"><MapPin aria-hidden="true" size={16} className="text-teal-300" />Versailles et environs</p>
          </div>
        </div>
        <DiagnosticContactForm />
      </section>

      <footer className="border-t border-white/10 bg-[#0b100e]">
        <div className="mx-auto flex max-w-7xl flex-col gap-5 px-5 py-7 text-sm text-slate-400 md:flex-row md:items-center md:justify-between md:px-8">
          <p>© {new Date().getFullYear()} BlockHack — Versailles et environs</p>
          <nav aria-label="Liens de pied de page" className="flex flex-wrap gap-x-6 gap-y-2">
            <a className="hover:text-white" href="/mentions-legales">Mentions légales</a>
            <a className="hover:text-white" href="/politique-confidentialite">Politique de confidentialité</a>
            <a className="hover:text-white" href="/prestations">Prestations et tarifs</a>
            <a className="hover:text-white" href="/contact">Contact</a>
          </nav>
        </div>
      </footer>
    </main>
  );
}