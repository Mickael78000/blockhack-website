import type { Metadata, Viewport } from "next";
import "@/styles/globals.css";

export const metadata: Metadata = {
  title: "BlockHack.io — Ingénierie infrastructure numérique, réseaux et DevSecOps",
  description:
    "BlockHack.io est un prestataire d'ingénierie et d'AMO spécialisé en infrastructure numérique, réseaux, télécoms, fibre optique et DevSecOps. Intervention en marchés publics, groupement d'entreprises et assistance à maîtrise d'ouvrage. Implanté en Île-de-France.",
  other: {
    "mobile-web-app-capable": "yes",
    "apple-mobile-web-app-capable": "yes",
    "apple-mobile-web-app-status-bar-style": "black-translucent",
  },
};

export const viewport: Viewport = {
  themeColor: "#000000",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <head>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/katex@0.16.9/dist/katex.min.css"
          integrity="sha384-n8MVd4RsNIU0tAv4ct0nTaAbDJwPJzDEaqSD1odI+WdtXRGWt2kTvGFasHpSy3SV"
          crossOrigin="anonymous"
        />
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/gh/aaaakshat/cm-web-fonts@latest/fonts.css"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
