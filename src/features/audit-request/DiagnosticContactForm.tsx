"use client";

import { useState } from "react";
import { ArrowRight, CheckCircle2, CircleAlert } from "lucide-react";

const initialForm = { name: "", email: "", phone: "", need: "", message: "" };

export function DiagnosticContactForm() {
  const [formData, setFormData] = useState(initialForm);
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  function updateField(event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) {
    setFormData((current) => ({ ...current, [event.target.name]: event.target.value }));
  }

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("sending");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      setStatus(response.ok ? "success" : "error");
      if (response.ok) setFormData(initialForm);
    } catch {
      setStatus("error");
    }
  }

  const fieldClass = "mt-2 min-h-12 w-full rounded-md border border-white/15 bg-[#101614] px-3 py-2.5 text-sm text-white placeholder:text-slate-500 focus:border-teal-300 focus:outline-none focus:ring-1 focus:ring-teal-300";

  return (
    <form onSubmit={handleSubmit} className="border border-white/10 bg-[#151d19] p-5 sm:p-7">
      <h3 className="text-xl font-semibold text-white">Réserver mon diagnostic offert</h3>
      <p className="mt-2 text-sm leading-6 text-slate-300">Décrivez votre besoin, je vous recontacterai pour convenir de la suite.</p>
      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="diagnostic-name" className="text-sm font-medium text-slate-200">Nom <span aria-hidden="true">*</span></label>
          <input id="diagnostic-name" name="name" autoComplete="name" required value={formData.name} onChange={updateField} className={fieldClass} placeholder="Votre nom" />
        </div>
        <div>
          <label htmlFor="diagnostic-email" className="text-sm font-medium text-slate-200">E-mail <span aria-hidden="true">*</span></label>
          <input id="diagnostic-email" type="email" name="email" autoComplete="email" required value={formData.email} onChange={updateField} className={fieldClass} placeholder="vous@exemple.fr" />
        </div>
        <div>
          <label htmlFor="diagnostic-phone" className="text-sm font-medium text-slate-200">Téléphone</label>
          <input id="diagnostic-phone" type="tel" name="phone" autoComplete="tel" value={formData.phone} onChange={updateField} className={fieldClass} placeholder="06 00 00 00 00" />
        </div>
        <div>
          <label htmlFor="diagnostic-need" className="text-sm font-medium text-slate-200">Type de besoin <span aria-hidden="true">*</span></label>
          <select id="diagnostic-need" name="need" required value={formData.need} onChange={updateField} className={fieldClass}>
            <option value="" className="bg-[#101614]">Choisir un besoin</option>
            <option className="bg-[#101614]">Diagnostic numérique</option>
            <option className="bg-[#101614]">Assistance informatique</option>
            <option className="bg-[#101614]">Mise à niveau essentielle</option>
            <option className="bg-[#101614]">Socle numérique complet</option>
            <option className="bg-[#101614]">Site moderne ou migration</option>
            <option className="bg-[#101614]">Autre besoin</option>
          </select>
        </div>
        <div className="sm:col-span-2">
          <label htmlFor="diagnostic-message" className="text-sm font-medium text-slate-200">Message <span aria-hidden="true">*</span></label>
          <textarea id="diagnostic-message" name="message" required rows={4} value={formData.message} onChange={updateField} className={`${fieldClass} resize-y`} placeholder="En quelques mots, qu’est-ce qui vous bloque aujourd’hui ?" />
        </div>
      </div>
      {status === "success" && (
        <p role="status" className="mt-5 flex items-start gap-2 text-sm text-teal-200">
          <CheckCircle2 aria-hidden="true" className="mt-0.5 shrink-0" size={17} /> Votre demande est envoyée. Merci, je reviens vers vous rapidement.
        </p>
      )}
      {status === "error" && (
        <p role="alert" className="mt-5 flex items-start gap-2 text-sm text-rose-300">
          <CircleAlert aria-hidden="true" className="mt-0.5 shrink-0" size={17} /> L’envoi a échoué. Vous pouvez écrire à contact@blockhack.io.
        </p>
      )}
      <button type="submit" disabled={status === "sending"} className="mt-6 inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-md bg-teal-300 px-5 py-3 font-semibold text-[#10201c] transition hover:bg-teal-200 disabled:cursor-wait disabled:opacity-60 sm:w-auto">
        {status === "sending" ? "Envoi en cours…" : "Réserver mon diagnostic offert"}
        {status !== "sending" && <ArrowRight aria-hidden="true" size={17} />}
      </button>
      <p className="mt-4 text-xs leading-5 text-slate-400">
        Les informations transmises servent uniquement à répondre à votre demande. Consultez la <a className="underline underline-offset-2 hover:text-white" href="/politique-confidentialite">politique de confidentialité</a>.
      </p>
    </form>
  );
}