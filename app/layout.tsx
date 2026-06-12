import type { Metadata } from "next";
import { Montserrat, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Bayt Saada — Association caritative à Tanger",
  description:
    "Bayt Saada est une association caritative basée à Tanger. Nous agissons pour les familles nécessiteuses à travers des colis alimentaires, le parrainage d'orphelins, la formation professionnelle et bien plus.",
  keywords: ["association", "caritative", "Tanger", "Maroc", "don", "zakat", "orphelins"],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <body
        className={`${montserrat.variable} ${inter.variable} font-inter bg-beige text-navy antialiased`}
      >
        <Navbar />
        <main>{children}</main>
        <Footer />
      {/* impeccable-live-start */}
<script src="http://localhost:8400/live.js"></script>
{/* impeccable-live-end */}
</body>
    </html>
  );
}
