import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mentions légales — BlockHack",
  description: "Mentions légales du site BlockHack.io.",
};

export default function MentionsLegalesPage() {
  return (
    <main className="min-h-screen bg-[#101614] px-5 py-16 text-slate-100 md:px-8 md:py-24">
      <article className="mx-auto max-w-3xl">
        <a href="/" className="text-sm text-teal-200 hover:text-white">← Retour à l’accueil</a>
        <h1 className="mt-8 text-4xl font-semibold text-white">Mentions légales</h1>
        <section className="mt-10 border-t border-white/10 pt-6">
          <h2 className="text-xl font-semibold text-white">Éditeur du site</h2>
          <p className="mt-3 leading-7 text-slate-300">
            BlockHack.io est édité par Mickaël Girondeau, entrepreneur individuel, exerçant sous
            l’enseigne BlockHack.io. L’activité est située à Versailles et intervient dans ses environs.
          </p>
          <p className="mt-3 leading-7 text-slate-300">
            Contact : <a className="text-teal-200 hover:text-white" href="mailto:contact@blockhack.io">contact@blockhack.io</a>
            {" · "}<a className="text-teal-200 hover:text-white" href="tel:+33626336810">06 26 33 68 10</a>
          </p>
        </section>
        <section className="mt-8 border-t border-white/10 pt-6">
          <h2 className="text-xl font-semibold text-white">Informations complémentaires</h2>
          <p className="mt-3 leading-7 text-slate-300">
            Les informations d’immatriculation de l’éditeur et les coordonnées de l’hébergeur doivent
            être confirmées et complétées par l’éditeur avant publication de ces mentions.
          </p>
        </section>
      </article>
    </main>
  );
}