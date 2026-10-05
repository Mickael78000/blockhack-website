import type { Metadata } from "next";
import { ContentPage } from "@/shared/components/ContentPage";
import { PrimaryCta } from "@/shared/components/PrimaryCta";

export const metadata: Metadata = {
  title: "Sauvegarde et organisation des données | BlockHack.io",
  description:
    "Classement, sauvegardes testées, migration de PC et plan simple en cas de panne. Particuliers et micro-entrepreneurs. Devis gratuit.",
};

export default function DonneesContinuitePage() {
  return (
    <ContentPage>
      <h1 className="text-lg md:text-5xl font-bold font-space_grotesk mb-4 text-cyan-400">
        Retrouver vos fichiers — et savoir les récupérer s’il arrive quelque chose
      </h1>
      <p className="text-gray-300 text-[0.5625rem] mb-8 leading-relaxed">
        Classement, sauvegardes testées, migration de PC, et un plan simple pour continuer après une panne, un vol ou un incident.
      </p>
      <p className="text-gray-300 mb-10 leading-relaxed">
        Les disques se remplissent, les photos se multiplient, les PDF se perdent dans « Téléchargements ». Le jour où le PC lâche, on découvre qu’il n’y avait pas de vrai filet. J’organise vos fichiers, je mets en place des sauvegardes vérifiées, et je vous prépare un plan simple « et si ça arrive ». L’idée n’est pas un système compliqué. C’est une méthode que vous pouvez tenir.
      </p>

      <h2 className="text-xs font-bold font-space_grotesk mb-4">Ce que je fais concrètement</h2>
      <div className="space-y-4 text-gray-300 leading-relaxed mb-10">
        <p>
          <strong className="text-white">Organisation.</strong> Tri des fichiers, photos, documents ; règles simples de nommage et de dossiers.
        </p>
        <p>
          <strong className="text-white">Sauvegardes.</strong> Disque local, cloud, ou les deux, selon votre budget et votre confort. Toujours avec un test de restauration.
        </p>
        <p>
          <strong className="text-white">Archivage.</strong> Ce qui doit rester accessible, ce qui peut être rangé au calme.
        </p>
        <p>
          <strong className="text-white">Migration.</strong> Ancien PC vers nouveau, changement de disque, reprise de comptes, sans tout recommencer à zéro.
        </p>
        <p>
          <strong className="text-white">Protection.</strong> Mots de passe, accès, chiffrement des dossiers vraiment sensibles, sans usine à gaz.
        </p>
        <p>
          <strong className="text-white">Continuité.</strong> Que faire si vol, panne ou rançongiciel : comment récupérer, comment travailler en mode dégradé le temps de la réparation. Un cadre, pas une assurance miracle.
        </p>
      </div>

      <h2 className="text-xs font-bold font-space_grotesk mb-4">Ce que vous y gagnez</h2>
      <p className="text-gray-300 mb-10 leading-relaxed">
        Ne plus chercher un document pendant une heure. Dormir plus tranquille : une copie existe, et on l’a testée. Changer de machine sans semaine blanche. Savoir réagir, au lieu de paniquer.
      </p>

      <h2 className="text-xs font-bold font-space_grotesk mb-4">Déroulement type</h2>
      <ol className="list-decimal list-inside text-gray-300 space-y-2 mb-10">
        <li>État des lieux : où sont vos données aujourd’hui ?</li>
        <li>Plan : ce qu’on range, ce qu’on sauvegarde, dans quel ordre.</li>
        <li>Devis gratuit, adapté au volume et à l’urgence.</li>
        <li>Mise en place avec vous, pour que vous sachiez relancer une sauvegarde.</li>
        <li>Petit guide : les gestes à retenir, écrits simplement.</li>
      </ol>

      <PrimaryCta />
    </ContentPage>
  );
}
