import type { Metadata } from "next";
import { redirect } from "next/navigation";

export const metadata: Metadata = {
  title: "Demander un devis informatique gratuit | BlockHack.io",
  description:
    "Les demandes de devis passent désormais par la page Contact.",
};

export default function DemanderAuditRedirectPage() {
  redirect("/contact");
}
