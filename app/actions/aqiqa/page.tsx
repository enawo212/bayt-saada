"use client";

import { Baby } from "lucide-react";
import ActionPageLayout from "@/components/ActionPageLayout";

export default function AqiqaPage() {
  return (
    <ActionPageLayout
      icon={Baby}
      label="Tradition islamique"
      title="Aqiqa"
      subtitle="CÃ©lÃ©brez la naissance d'un enfant en offrant un repas aux familles dans le besoin."
      montants={[
        { value: "100 â‚¬", label: "Aqiqa pour une fille (1 mouton)" },
        { value: "200 â‚¬", label: "Aqiqa pour un garÃ§on (2 moutons)" },
        { value: "Montant libre", label: "Contribution partielle" },
      ]}
      description={
        <div className="space-y-4">
          <p>
            L'aqiqa est une sounna confirmÃ©e (sounna mouakkada) qui consiste Ã  sacrifier un ou deux moutons lors de la naissance d'un enfant, gÃ©nÃ©ralement le 7e jour. La viande est ensuite partagÃ©e avec les pauvres et les proches.
          </p>
          <p>
            Bayt Saada se charge de l'organisation de l'aqiqa en votre nom : achat de l'animal, abattage selon les rÃ¨gles islamiques, prÃ©paration et distribution aux familles bÃ©nÃ©ficiaires de Tanger.
          </p>
          <h3 className="font-montserrat font-bold text-xl mt-6" style={{ color: "#132C3F" }}>Comment Ã§a fonctionne ?</h3>
          <ul className="space-y-2 list-disc list-inside">
            <li>Vous choisissez votre don et prÃ©cisez le prÃ©nom de l'enfant</li>
            <li>Nous organisons le sacrifice en votre nom</li>
            <li>La viande est distribuÃ©e aux familles nÃ©cessiteuses</li>
            <li>Vous recevez une confirmation de l'action rÃ©alisÃ©e</li>
          </ul>
        </div>
      }
    />
  );
}

