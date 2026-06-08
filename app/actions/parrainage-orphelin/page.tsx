"use client";

import { Heart } from "lucide-react";
import ActionPageLayout from "@/components/ActionPageLayout";

export default function ParrainageOrphelinPage() {
  return (
    <ActionPageLayout
      icon={Heart}
      label="Parrainage"
      title="Parrainage d'Orphelin"
      subtitle="Offrez Ã  un orphelin la stabilitÃ©, l'Ã©ducation et l'amour dont il a besoin pour grandir sereinement."
      montants={[
        { value: "30 â‚¬/mois", label: "Parrainage mensuel basique" },
        { value: "50 â‚¬/mois", label: "Parrainage complet" },
        { value: "600 â‚¬/an", label: "Parrainage annuel" },
      ]}
      description={
        <div className="space-y-4">
          <p>
            Le parrainage d'orphelins est l'une des actions les plus nobles en Islam. En parrainant un enfant orphelin, vous devenez son soutien direct et lui offrez des conditions de vie dignes.
          </p>
          <p>
            Votre don mensuel couvre : les besoins alimentaires, les fournitures scolaires, les soins mÃ©dicaux de base et un suivi rÃ©gulier par notre Ã©quipe.
          </p>
          <h3 className="font-montserrat font-bold text-xl mt-6" style={{ color: "#132C3F" }}>Le processus de parrainage</h3>
          <ul className="space-y-2 list-disc list-inside">
            <li>Choisissez le montant de votre parrainage</li>
            <li>Recevez un rapport rÃ©gulier sur la situation de l'enfant parrainÃ©</li>
            <li>Gardez un lien avec le progrÃ¨s et le bien-Ãªtre de l'enfant</li>
          </ul>
          <p>
            Tous les orphelins parrainÃ©s vivent Ã  Tanger et sont suivis de prÃ¨s par notre Ã©quipe bÃ©nÃ©vole.
          </p>
        </div>
      }
    />
  );
}

