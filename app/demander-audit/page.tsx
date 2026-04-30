import type { Metadata } from "next";
import { AuditRequestForm } from "@features/audit-request/AuditRequestForm";

export const metadata: Metadata = {
  title: "Soumettre une demande — BlockHack.io",
  description:
    "Décrivez votre besoin en ingénierie d'infrastructure, AMO, DevSecOps ou réponse à appel d'offres. BlockHack.io vous recontacte sous 48 h ouvrables.",
};

export default function DemanderAuditPage() {
  return <AuditRequestForm />;
}
