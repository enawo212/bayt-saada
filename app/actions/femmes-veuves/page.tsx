"use client";

import { Home } from "lucide-react";
import ActionPageLayout from "@/components/ActionPageLayout";

export default function FemmesVeuvesPage() {
  return (
    <ActionPageLayout
      icon={Home}
      label="Aide sociale"
      title="Femmes Veuves & Divorcées"
      subtitle="Une aide financière mensuelle pour les femmes en situation de vulnérabilité à Tanger."
      montants={[
        { value: "30 €/mois", label: "Aide mensuelle basique" },
        { value: "60 €/mois", label: "Soutien renforcé" },
        { value: "360 €/an", label: "Parrainage annuel" },
      ]}
      description={
        <div className="space-y-4">
          <p>
            Les femmes veuves et divorcées font partie des catégories les plus vulnérables de notre société. Seules avec leurs enfants, sans ressources suffisantes, elles font face à des difficultés considérables au quotidien.
          </p>
          <p>
            Bayt Saada leur apporte une aide financière mensuelle régulière, leur permettant de couvrir les dépenses essentielles : loyer, alimentation, scolarisation des enfants.
          </p>
          <h3 className="font-montserrat font-bold text-xl mt-6" style={{ color: "#132C3F" }}>Critères d'éligibilité</h3>
          <p>
            Les bénéficiaires sont sélectionnées par notre équipe sociale selon des critères stricts : situation familiale, revenus, nombre d'enfants à charge. La dignité et la confidentialité sont au cœur de notre démarche.
          </p>
        </div>
      }
    />
  );
}

