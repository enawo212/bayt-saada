"use client";

import { Droplets } from "lucide-react";
import ActionPageLayout from "@/components/ActionPageLayout";

export default function PuitsPage() {
  return (
    <ActionPageLayout
      icon={Droplets}
      label="Sadaqa Jariya"
      title="Construction de Puits"
      subtitle="Offrez de l'eau potable Ã  une communautÃ© entiÃ¨re. Un puits, c'est des milliers de vies transformÃ©es."
      montants={[
        { value: "50 â‚¬", label: "Contribution partielle" },
        { value: "300 â‚¬", label: "Financement d'un forage" },
        { value: "800 â‚¬+", label: "Puits complet" },
      ]}
      description={
        <div className="space-y-4">
          <p>
            L'eau est la source de toute vie. Dans certaines zones rurales du Maroc, des familles parcourent des kilomÃ¨tres pour s'approvisionner en eau potable. Un puits change tout : la santÃ©, l'hygiÃ¨ne, la scolarisation des enfants.
          </p>
          <p>
            Bayt Saada finance la construction de puits dans des zones Ã  fort besoin hydrique. Chaque puits construit porte le nom du donateur (si souhaitÃ©) et constitue une sadaqa jariya permanente.
          </p>
          <h3 className="font-montserrat font-bold text-xl mt-6" style={{ color: "#132C3F" }}>Impact d'un puits</h3>
          <ul className="space-y-2 list-disc list-inside">
            <li>Des centaines de bÃ©nÃ©ficiaires directs</li>
            <li>RÃ©duction des maladies hydriques</li>
            <li>Plus de temps libÃ©rÃ© pour l'Ã©ducation des enfants</li>
            <li>Une rÃ©compense continue mÃªme aprÃ¨s votre vie</li>
          </ul>
        </div>
      }
    />
  );
}

