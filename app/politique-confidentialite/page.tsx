import type { Metadata } from "next";
import { Navbar } from "@/sections/Navbar";
import { Footer } from "@/sections/Footer";

export const metadata: Metadata = {
  title: "Politique de confidentialité — BlockHack.io",
  description:
    "Informations sur le traitement de vos données personnelles par BlockHack.io, conformément au RGPD.",
};

export default function PolitiqueConfidentialitePage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />

      <div className="relative pt-32 pb-20 px-6">
        <div className="container mx-auto max-w-3xl relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold font-space_grotesk mb-4 text-cyan-400">
            Politique de confidentialité
          </h1>
          <p className="text-gray-400 text-sm mb-12">
            Dernière mise à jour : mai 2025
          </p>

          <section className="mb-10">
            <h2 className="text-2xl font-bold font-space_grotesk mb-4">1. Responsable de traitement</h2>
            <p className="text-gray-300 leading-relaxed">
              Le responsable de traitement est <strong>Mickaël Girondeau</strong>, exploitant sous
              l'enseigne BlockHack.io (micro-entreprise), joignable à{" "}
              <a href="mailto:contact@blockhack.io" className="text-cyan-400 hover:text-cyan-300 transition-colors">
                contact@blockhack.io
              </a>.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold font-space_grotesk mb-4">2. Données collectées</h2>
            <p className="text-gray-300 leading-relaxed mb-3">
              Via le formulaire de demande, les données suivantes peuvent être collectées :
            </p>
            <ul className="list-disc list-inside text-gray-300 space-y-1">
              <li>Nom complet (obligatoire)</li>
              <li>Adresse e-mail (obligatoire)</li>
              <li>Entreprise / organisation (optionnel)</li>
              <li>Type de prestation, contexte organisationnel, niveau d'urgence</li>
              <li>Objet et message libre décrivant la demande</li>
              <li>Pièces jointes éventuelles (transmises uniquement par votre client de messagerie)</li>
            </ul>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold font-space_grotesk mb-4">3. Finalité et base légale</h2>
            <p className="text-gray-300 leading-relaxed">
              Les données sont collectées dans le seul but de traiter votre demande et de vous
              recontacter dans ce cadre. La base légale est l'exécution de mesures précontractuelles
              prises à votre demande (<strong>art. 6.1.b du RGPD</strong>). Aucune donnée n'est
              utilisée à des fins de prospection commerciale, d'enrichissement de base CRM ou de
              profilage sans recueil préalable d'un consentement distinct.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold font-space_grotesk mb-4">4. Durée de conservation</h2>
            <p className="text-gray-300 leading-relaxed">
              Les données sont conservées pour une durée maximale de <strong>12 mois</strong> à
              compter de la réception de la demande. Passé ce délai, elles sont supprimées ou
              anonymisées.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold font-space_grotesk mb-4">5. Destinataires des données</h2>
            <p className="text-gray-300 leading-relaxed">
              Les données sont transmises exclusivement via votre propre client de messagerie
              (protocole <code className="text-cyan-400">mailto:</code>) et ne transitent par aucun
              serveur tiers, base de données ou service d'envoi d'e-mails applicatif côté site.
              Elles ne sont ni cédées, ni vendues, ni partagées avec des tiers.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold font-space_grotesk mb-4">6. Vos droits</h2>
            <p className="text-gray-300 leading-relaxed mb-3">
              Conformément au RGPD, vous disposez des droits suivants :
            </p>
            <ul className="list-disc list-inside text-gray-300 space-y-1">
              <li>Droit d'accès à vos données</li>
              <li>Droit de rectification</li>
              <li>Droit à l'effacement («&nbsp;droit à l'oubli&nbsp;»)</li>
              <li>Droit d'opposition au traitement</li>
              <li>Droit à la portabilité</li>
              <li>Droit de retirer votre consentement à tout moment (si applicable)</li>
            </ul>
            <p className="text-gray-300 leading-relaxed mt-4">
              Pour exercer ces droits, contactez-nous à{" "}
              <a href="mailto:contact@blockhack.io" className="text-cyan-400 hover:text-cyan-300 transition-colors">
                contact@blockhack.io
              </a>. Nous nous engageons à répondre dans un délai d'un mois.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold font-space_grotesk mb-4">7. Réclamation auprès de la CNIL</h2>
            <p className="text-gray-300 leading-relaxed">
              Si vous estimez que vos droits ne sont pas respectés, vous pouvez introduire une
              réclamation auprès de la Commission Nationale de l'Informatique et des Libertés (CNIL) :{" "}
              <a
                href="https://www.cnil.fr"
                target="_blank"
                rel="noopener noreferrer"
                className="text-cyan-400 hover:text-cyan-300 transition-colors"
              >
                www.cnil.fr
              </a>.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold font-space_grotesk mb-4">8. Cookies et traceurs</h2>
            <p className="text-gray-300 leading-relaxed">
              Ce site n'utilise pas de cookies de traçage, de cookies publicitaires ni d'outils
              d'analyse comportementale tiers. Aucun cookie de mesure d'audience n'est déposé sans
              consentement préalable.
            </p>
          </section>
        </div>
      </div>

      <Footer />
    </div>
  );
}
