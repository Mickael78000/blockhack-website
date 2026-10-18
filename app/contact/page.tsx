import type { Metadata } from "next";
import { DiagnosticContactForm } from "@/features/audit-request/DiagnosticContactForm";

export const metadata: Metadata = {
  title: "Contact — BlockHack",
  description: "Contactez BlockHack ou réservez votre diagnostic numérique offert à Versailles et environs.",
};

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-[#101614] px-5 py-16 text-slate-100 md:px-8 md:py-24">
      <div className="mx-auto grid max-w-6xl gap-12 md:grid-cols-[0.8fr_1.2fr]">
        <section>
          <a href="/" className="text-sm text-teal-200 hover:text-white">← Retour à l’accueil</a>
          <p className="mt-12 text-xs font-semibold uppercase tracking-[0.16em] text-teal-300">Contact</p>
          <h1 className="mt-3 text-4xl font-semibold leading-tight text-white">Faisons le point sur votre besoin.</h1>
          <p className="mt-5 leading-7 text-slate-300">
            Réservez un diagnostic offert pour identifier les blocages, les risques et les actions prioritaires.
          </p>
          <div className="mt-8 space-y-3 border-t border-white/10 pt-5 text-sm text-slate-300">
            <p>06 26 33 68 10</p>
            <p>contact@blockhack.io</p>
            <p>Versailles et environs</p>
          </div>
        </section>
        <DiagnosticContactForm />
      </div>
    </main>
  );
}