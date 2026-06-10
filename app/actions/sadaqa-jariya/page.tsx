"use client";

import { HandHeart } from "lucide-react";
import ActionPageLayout from "@/components/ActionPageLayout";

export default function SadaqaJariyaPage() {
  return (
    <ActionPageLayout
      icon={HandHeart}
      label="Don perpétuel"
      title="Sadaqa Jariya"
      subtitle="Un don dont la récompense continue après votre départ. Investissez dans l'éternité."
      montants={[
        { value: "50 €", label: "Petit projet durable" },
        { value: "200 €", label: "Infrastructure communautaire" },
        { value: "500 €+", label: "Grand projet jariya" },
      ]}
      description={
        <div className="space-y-4">
          <p>
            Le Prophète ﷺ a dit : « Quand l'être humain meurt, ses œuvres s'arrêtent sauf trois : une sadaqa jariya, une science dont on tire profit, ou un enfant pieux qui prie pour lui. »
          </p>
          <p>
            La sadaqa jariya désigne tout don dont les bénéfices continuent de profiter aux gens après votre mort : construction d'un puits, plantation d'arbres, financement d'une école, etc.
          </p>
          <p>
            Chez Bayt Saada, vos dons en sadaqa jariya financent des projets durables : puits d'eau potable, plantations d'oliviers, formation professionnelle.
          </p>
        </div>
      }
    />
  );
}

