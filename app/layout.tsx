import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Saina Labs — L'IA travaille. Vous dirigez.",
  description: "Saina Labs automatise les tâches répétitives de votre entreprise grâce à des outils IA conçus pour les entrepreneurs malgaches.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  );
}
