"use client";

import { ShoppingBasket } from "lucide-react";
import ActionPageLayout from "@/components/ActionPageLayout";

export default function ColisAlimentairePage() {
  return (
    <ActionPageLayout
      icon={ShoppingBasket}
      label="Aide alimentaire"
      title="Colis Alimentaire"
      subtitle="Chaque mois, nous distribuons des colis alimentaires aux familles nÃ©cessiteuses de Tanger."
      montants={[
        { value: "25 â‚¬", label: "1 colis pour une famille" },
        { value: "75 â‚¬", label: "3 colis mensuels" },
        { value: "300 â‚¬", label: "Parrainez une famille 1 an" },
      ]}
      description={
        <div className="space-y-4">
          <p>
            Le programme de colis alimentaires de Bayt Saada permet Ã  des familles dans le besoin de recevoir chaque mois les produits essentiels pour subvenir Ã  leurs besoins alimentaires.
          </p>
          <p>
            Chaque colis est soigneusement prÃ©parÃ© et contient des denrÃ©es non pÃ©rissables : huile, farine, sucre, lÃ©gumineuses, conserves et produits de premiÃ¨re nÃ©cessitÃ©.
          </p>
          <h3 className="font-montserrat font-bold text-xl mt-6" style={{ color: "#132C3F" }}>Comment contribuer ?</h3>
          <ul className="space-y-2 list-disc list-inside">
            <li><strong>Don mensuel</strong> â€” Engagez-vous sur la durÃ©e pour assurer une rÃ©gularitÃ© aux familles.</li>
            <li><strong>Don unique</strong> â€” Un versement ponctuel qui finance immÃ©diatement un ou plusieurs colis.</li>
            <li><strong>Apport en nature</strong> â€” DÃ©posez directement des produits non pÃ©rissables Ã  notre local.</li>
          </ul>
          <p>
            Chaque don est traÃ§able et les familles bÃ©nÃ©ficiaires sont sÃ©lectionnÃ©es selon des critÃ¨res stricts de vulnÃ©rabilitÃ© sociale.
          </p>
        </div>
      }
    />
  );
}

