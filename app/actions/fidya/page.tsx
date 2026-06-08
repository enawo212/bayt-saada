"use client";

import { Wheat } from "lucide-react";
import ActionPageLayout from "@/components/ActionPageLayout";

export default function FidyaPage() {
  return (
    <ActionPageLayout
      icon={Wheat}
      label="Obligation religieuse"
      title="Fidya"
      subtitle="Nourrissez des personnes dans le besoin au nom de ceux qui ne peuvent jeÃ»ner."
      montants={[
        { value: "5 â‚¬", label: "Fidya pour 1 jour" },
        { value: "150 â‚¬", label: "Fidya pour 1 mois (Ramadan)" },
        { value: "Montant libre", label: "Selon votre situation" },
      ]}
      description={
        <div className="space-y-4">
          <p>
            La fidya est une compensation pour les personnes qui ne peuvent pas jeÃ»ner en raison d'une maladie chronique, d'un grand Ã¢ge ou d'une incapacitÃ© permanente. Elle consiste Ã  nourrir un pauvre par jour de jeÃ»ne manquÃ©.
          </p>
          <p>
            Bayt Saada redistribue votre fidya sous forme de repas ou de denrÃ©es alimentaires aux familles nÃ©cessiteuses de Tanger, notamment durant le mois de Ramadan.
          </p>
          <h3 className="font-montserrat font-bold text-xl mt-6" style={{ color: "#132C3F" }}>Qui est concernÃ© ?</h3>
          <ul className="space-y-2 list-disc list-inside">
            <li>Les personnes malades de faÃ§on chronique</li>
            <li>Les personnes trÃ¨s Ã¢gÃ©es incapables de jeÃ»ner</li>
            <li>Les femmes enceintes ou allaitantes (selon avis religieux)</li>
          </ul>
        </div>
      }
    />
  );
}

