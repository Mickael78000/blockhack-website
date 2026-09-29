import type { Metadata } from "next";
import { AuditRequestForm } from "@features/audit-request/AuditRequestForm";

export const metadata: Metadata = {
  title: "Demander un devis informatique gratuit | BlockHack.io",
  description:
    "Décrivez votre besoin : PC, site web ou données. Devis gratuit, sans engagement. Réponse sous quelques jours ouvrés.",
};

export default function ContactPage() {
  return <AuditRequestForm />;
}
