"use client";

import { Baby } from "lucide-react";
import ActionPageLayout from "@/components/ActionPageLayout";

export default function AqiqaPage() {
  return (
    <ActionPageLayout
      icon={Baby}
      label="Tradition islamique"
      title="Aqiqa"
      subtitle="Célébrez la naissance d'un enfant en offrant un repas aux familles dans le besoin."
      montants={[
        { value: "100 €", label: "Aqiqa pour une fille (1 mouton)" },
        { value: "200 €", label: "Aqiqa pour un garçon (2 moutons)" },
        { value: "Montant libre", label: "Contribution partielle" },
      ]}
      description={
        <div className="space-y-4">
          <p>
            L'aqiqa est une sounna confirmée (sounna mouakkada) qui consiste à sacrifier un ou deux moutons lors de la naissance d'un enfant, généralement le 7e jour. La viande est ensuite partagée avec les pauvres et les proches.
          </p>
          <p>
            Bayt Saada se charge de l'organisation de l'aqiqa en votre nom : achat de l'animal, abattage selon les règles islamiques, préparation et distribution aux familles bénéficiaires de Tanger.
          </p>
          <h3 className="font-montserrat font-bold text-xl mt-6" style={{ color: "#132C3F" }}>Comment ça fonctionne ?</h3>
          <ul className="space-y-2 list-disc list-inside">
            <li>Vous choisissez votre don et précisez le prénom de l'enfant</li>
            <li>Nous organisons le sacrifice en votre nom</li>
            <li>La viande est distribuée aux familles nécessiteuses</li>
            <li>Vous recevez une confirmation de l'action réalisée</li>
          </ul>
        </div>
      }
    />
  );
}

