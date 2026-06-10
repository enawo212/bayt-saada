"use client";

import { Droplets } from "lucide-react";
import ActionPageLayout from "@/components/ActionPageLayout";

export default function PuitsPage() {
  return (
    <ActionPageLayout
      icon={Droplets}
      label="Sadaqa Jariya"
      title="Construction de Puits"
      subtitle="Offrez de l'eau potable à une communauté entière. Un puits, c'est des milliers de vies transformées."
      montants={[
        { value: "50 €", label: "Contribution partielle" },
        { value: "300 €", label: "Financement d'un forage" },
        { value: "800 €+", label: "Puits complet" },
      ]}
      description={
        <div className="space-y-4">
          <p>
            L'eau est la source de toute vie. Dans certaines zones rurales du Maroc, des familles parcourent des kilomètres pour s'approvisionner en eau potable. Un puits change tout : la santé, l'hygiène, la scolarisation des enfants.
          </p>
          <p>
            Bayt Saada finance la construction de puits dans des zones à fort besoin hydrique. Chaque puits construit porte le nom du donateur (si souhaité) et constitue une sadaqa jariya permanente.
          </p>
          <h3 className="font-montserrat font-bold text-xl mt-6" style={{ color: "#132C3F" }}>Impact d'un puits</h3>
          <ul className="space-y-2 list-disc list-inside">
            <li>Des centaines de bénéficiaires directs</li>
            <li>Réduction des maladies hydriques</li>
            <li>Plus de temps libéré pour l'éducation des enfants</li>
            <li>Une récompense continue même après votre vie</li>
          </ul>
        </div>
      }
    />
  );
}

