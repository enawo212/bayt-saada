"use client";

import { Home } from "lucide-react";
import ActionPageLayout from "@/components/ActionPageLayout";

export default function FemmesVeuvesPage() {
  return (
    <ActionPageLayout
      icon={Home}
      label="Aide sociale"
      title="Femmes Veuves & DivorcÃ©es"
      subtitle="Une aide financiÃ¨re mensuelle pour les femmes en situation de vulnÃ©rabilitÃ© Ã  Tanger."
      montants={[
        { value: "30 â‚¬/mois", label: "Aide mensuelle basique" },
        { value: "60 â‚¬/mois", label: "Soutien renforcÃ©" },
        { value: "360 â‚¬/an", label: "Parrainage annuel" },
      ]}
      description={
        <div className="space-y-4">
          <p>
            Les femmes veuves et divorcÃ©es font partie des catÃ©gories les plus vulnÃ©rables de notre sociÃ©tÃ©. Seules avec leurs enfants, sans ressources suffisantes, elles font face Ã  des difficultÃ©s considÃ©rables au quotidien.
          </p>
          <p>
            Bayt Saada leur apporte une aide financiÃ¨re mensuelle rÃ©guliÃ¨re, leur permettant de couvrir les dÃ©penses essentielles : loyer, alimentation, scolarisation des enfants.
          </p>
          <h3 className="font-montserrat font-bold text-xl mt-6" style={{ color: "#132C3F" }}>CritÃ¨res d'Ã©ligibilitÃ©</h3>
          <p>
            Les bÃ©nÃ©ficiaires sont sÃ©lectionnÃ©es par notre Ã©quipe sociale selon des critÃ¨res stricts : situation familiale, revenus, nombre d'enfants Ã  charge. La dignitÃ© et la confidentialitÃ© sont au cÅ“ur de notre dÃ©marche.
          </p>
        </div>
      }
    />
  );
}

