"use client";

import { HandHeart } from "lucide-react";
import ActionPageLayout from "@/components/ActionPageLayout";

export default function SadaqaJariyaPage() {
  return (
    <ActionPageLayout
      icon={HandHeart}
      label="Don perpÃ©tuel"
      title="Sadaqa Jariya"
      subtitle="Un don dont la rÃ©compense continue aprÃ¨s votre dÃ©part. Investissez dans l'Ã©ternitÃ©."
      montants={[
        { value: "50 â‚¬", label: "Petit projet durable" },
        { value: "200 â‚¬", label: "Infrastructure communautaire" },
        { value: "500 â‚¬+", label: "Grand projet jariya" },
      ]}
      description={
        <div className="space-y-4">
          <p>
            Le ProphÃ¨te ï·º a dit : Â« Quand l'Ãªtre humain meurt, ses Å“uvres s'arrÃªtent sauf trois : une sadaqa jariya, une science dont on tire profit, ou un enfant pieux qui prie pour lui. Â»
          </p>
          <p>
            La sadaqa jariya dÃ©signe tout don dont les bÃ©nÃ©fices continuent de profiter aux gens aprÃ¨s votre mort : construction d'un puits, plantation d'arbres, financement d'une Ã©cole, etc.
          </p>
          <p>
            Chez Bayt Saada, vos dons en sadaqa jariya financent des projets durables : puits d'eau potable, plantations d'oliviers, formation professionnelle.
          </p>
        </div>
      }
    />
  );
}

