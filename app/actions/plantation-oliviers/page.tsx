"use client";

import { Leaf } from "lucide-react";
import ActionPageLayout from "@/components/ActionPageLayout";

export default function PlantationOliviersPage() {
  return (
    <ActionPageLayout
      icon={Leaf}
      label="Écologie & Solidarité"
      title="Plantation d'Oliviers"
      subtitle="Dans la région d'Amizmiz, chaque olivier planté est un geste pour la terre et pour les communautés locales."
      montants={[
        { value: "15 €", label: "1 olivier planté" },
        { value: "75 €", label: "5 oliviers" },
        { value: "150 €", label: "10 oliviers" },
      ]}
      description={
        <div className="space-y-4">
          <p>
            L'olivier est un arbre béni, mentionné dans le Coran. Planté dans la région d'Amizmiz, il sert doublement : il revitalise les terres et offre aux agriculteurs locaux une source de revenus sur le long terme.
          </p>
          <p>
            Ce programme combine engagement écologique et aide aux populations rurales. Les oliviers sont plantés sur des terres agricoles et entretenus par des familles locales qui en bénéficieront directement.
          </p>
          <h3 className="font-montserrat font-bold text-xl mt-6" style={{ color: "#132C3F" }}>Pourquoi Amizmiz ?</h3>
          <p>
            La région d'Amizmiz, dans la province d'Al Haouz, est particulièrement touchée par la précarité agricole et les effets du changement climatique. La plantation d'oliviers contribue à la reforestation et au développement économique local.
          </p>
        </div>
      }
    />
  );
}

