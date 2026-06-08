"use client";

import { Leaf } from "lucide-react";
import ActionPageLayout from "@/components/ActionPageLayout";

export default function PlantationOliviersPage() {
  return (
    <ActionPageLayout
      icon={Leaf}
      label="Ã‰cologie & SolidaritÃ©"
      title="Plantation d'Oliviers"
      subtitle="Dans la rÃ©gion d'Amizmiz, chaque olivier plantÃ© est un geste pour la terre et pour les communautÃ©s locales."
      montants={[
        { value: "15 â‚¬", label: "1 olivier plantÃ©" },
        { value: "75 â‚¬", label: "5 oliviers" },
        { value: "150 â‚¬", label: "10 oliviers" },
      ]}
      description={
        <div className="space-y-4">
          <p>
            L'olivier est un arbre bÃ©ni, mentionnÃ© dans le Coran. PlantÃ© dans la rÃ©gion d'Amizmiz, il sert doublement : il revitalise les terres et offre aux agriculteurs locaux une source de revenus sur le long terme.
          </p>
          <p>
            Ce programme combine engagement Ã©cologique et aide aux populations rurales. Les oliviers sont plantÃ©s sur des terres agricoles et entretenus par des familles locales qui en bÃ©nÃ©ficieront directement.
          </p>
          <h3 className="font-montserrat font-bold text-xl mt-6" style={{ color: "#132C3F" }}>Pourquoi Amizmiz ?</h3>
          <p>
            La rÃ©gion d'Amizmiz, dans la province d'Al Haouz, est particuliÃ¨rement touchÃ©e par la prÃ©caritÃ© agricole et les effets du changement climatique. La plantation d'oliviers contribue Ã  la reforestation et au dÃ©veloppement Ã©conomique local.
          </p>
        </div>
      }
    />
  );
}

