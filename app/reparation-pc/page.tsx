import type { Metadata } from "next";
import { ContentPage } from "@/shared/components/ContentPage";
import { PrimaryCta } from "@/shared/components/PrimaryCta";

export const metadata: Metadata = {
  title: "Réparation et sécurisation de PC à Versailles | BlockHack.io",
  description:
    "Diagnostic, dépannage, optimisation, mises à niveau et protections de base. Interventions à distance ou sur site. Devis gratuit.",
};

export default function ReparationPcPage() {
  return (
    <ContentPage>
      <h1 className="text-lg md:text-5xl font-bold font-space_grotesk mb-4 text-cyan-400">
        Retrouver un PC fluide, propre et mieux protégé
      </h1>
      <p className="text-gray-300 text-[0.5625rem] mb-8 leading-relaxed">
        Diagnostic, réparation, optimisation et conseils pour durer. Sans blabla, avec des explications à chaque étape.
      </p>
      <p className="text-gray-300 mb-10 leading-relaxed">
        Lenteur, plantages, virus suspect, disque plein : on finit par s’habituer, jusqu’au jour où ça bloque vraiment. Je commence par comprendre le problème, pas par vendre une pièce. Ensuite, on choisit ensemble : réparer, nettoyer, améliorer, ou préparer un changement de machine.
      </p>

      <h2 className="text-xs font-bold font-space_grotesk mb-4">Ce que je fais concrètement</h2>
      <div className="space-y-4 text-gray-300 leading-relaxed mb-10">
        <p>
          <strong className="text-white">Dépannage.</strong> Je cherche la cause (logiciel, disque, mémoire, surchauffe, malwares) et je traite ce qui est utile.
        </p>
        <p>
          <strong className="text-white">Nettoyage et optimisation.</strong> Démarrage trop long, stockage saturé, programmes inutiles : on allège pour retrouver de la réactivité.
        </p>
        <p>
          <strong className="text-white">Mises à niveau.</strong> Mémoire, SSD, parfois une carte graphique : uniquement si ça change vraiment le quotidien.
        </p>
        <p>
          <strong className="text-white">Systèmes.</strong> Installation de Windows ou Linux, y compris un double démarrage, avec vos fichiers préservés autant que possible.
        </p>
        <p>
          <strong className="text-white">Données et poste.</strong> Récupération quand c’est encore possible — sans garantie de résultat. Sauvegarde avant intervention. Mises à jour automatiques.
        </p>
        <p>
          <strong className="text-white">Sécurité de base.</strong> Antivirus, mises à jour, authentification à deux facteurs, gestionnaire de mots de passe, vigilance phishing et rançongiciels. Des habitudes simples, pas une forteresse promise.
        </p>
        <p>
          <strong className="text-white">Conseil matériel.</strong> Réparer, améliorer ou changer : je vous le dis franchement.
        </p>
      </div>

      <h2 className="text-xs font-bold font-space_grotesk mb-4">Ce que vous y gagnez</h2>
      <p className="text-gray-300 mb-10 leading-relaxed">
        Moins d’attente devant la machine. Moins de risque de tout perdre. Un poste plus sûr pour vos paiements, vos mails, vos dossiers. Une décision claire sur la suite, sans se faire imposer un PC neuf.
      </p>

      <h2 className="text-xs font-bold font-space_grotesk mb-4">Déroulement type</h2>
      <ol className="list-decimal list-inside text-gray-300 space-y-2 mb-10">
        <li>Vous décrivez les symptômes, l’âge approximatif du PC, si des données importantes sont dessus.</li>
        <li>Diagnostic à distance si c’est possible ; sur site si le matériel l’exige.</li>
        <li>Devis gratuit, détaillé, sans engagement. Vous validez avant toute réparation payante.</li>
        <li>Intervention, tests, compte rendu compréhensible.</li>
        <li>Conseils d’entretien. Option : un rendez-vous de contrôle plus tard.</li>
      </ol>

      <PrimaryCta />
    </ContentPage>
  );
}
