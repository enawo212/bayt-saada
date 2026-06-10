"use client";

import { ShoppingBasket } from "lucide-react";
import ActionPageLayout from "@/components/ActionPageLayout";

export default function ColisAlimentairePage() {
  return (
    <ActionPageLayout
      icon={ShoppingBasket}
      label="Aide alimentaire"
      title="Colis Alimentaire"
      subtitle="Chaque mois, nous distribuons des colis alimentaires aux familles nécessiteuses de Tanger."
      montants={[
        { value: "25 €", label: "1 colis pour une famille" },
        { value: "75 €", label: "3 colis mensuels" },
        { value: "300 €", label: "Parrainez une famille 1 an" },
      ]}
      description={
        <div className="space-y-4">
          <p>
            Le programme de colis alimentaires de Bayt Saada permet à des familles dans le besoin de recevoir chaque mois les produits essentiels pour subvenir à leurs besoins alimentaires.
          </p>
          <p>
            Chaque colis est soigneusement préparé et contient des denrées non périssables : huile, farine, sucre, légumineuses, conserves et produits de première nécessité.
          </p>
          <h3 className="font-montserrat font-bold text-xl mt-6" style={{ color: "#132C3F" }}>Comment contribuer ?</h3>
          <ul className="space-y-2 list-disc list-inside">
            <li><strong>Don mensuel</strong> — Engagez-vous sur la durée pour assurer une régularité aux familles.</li>
            <li><strong>Don unique</strong> — Un versement ponctuel qui finance immédiatement un ou plusieurs colis.</li>
            <li><strong>Apport en nature</strong> — Déposez directement des produits non périssables à notre local.</li>
          </ul>
          <p>
            Chaque don est traçable et les familles bénéficiaires sont sélectionnées selon des critères stricts de vulnérabilité sociale.
          </p>
        </div>
      }
    />
  );
}

