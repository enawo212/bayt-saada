"use client";

import { BookOpen } from "lucide-react";
import ActionPageLayout from "@/components/ActionPageLayout";

export default function KitScolairePage() {
  return (
    <ActionPageLayout
      icon={BookOpen}
      label="Ã‰ducation"
      title="Kit Scolaire"
      subtitle="Offrez Ã  un enfant les fournitures dont il a besoin pour commencer l'annÃ©e scolaire dans les meilleures conditions."
      montants={[
        { value: "20 â‚¬", label: "Kit scolaire complet" },
        { value: "60 â‚¬", label: "3 kits scolaires" },
        { value: "100 â‚¬", label: "5 kits scolaires" },
      ]}
      description={
        <div className="space-y-4">
          <p>
            La rentrÃ©e scolaire est souvent une pÃ©riode difficile pour les familles prÃ©caires. Le coÃ»t des fournitures reprÃ©sente une charge que beaucoup ne peuvent pas assumer.
          </p>
          <p>
            Bayt Saada prÃ©pare et distribue des kits scolaires complets Ã  chaque rentrÃ©e : cartable, cahiers, stylos, rÃ¨gles, compas, livres et tout le nÃ©cessaire pour une annÃ©e rÃ©ussie.
          </p>
          <h3 className="font-montserrat font-bold text-xl mt-6" style={{ color: "#132C3F" }}>Contenu d'un kit</h3>
          <ul className="space-y-2 list-disc list-inside">
            <li>Cartable de qualitÃ©</li>
            <li>Cahiers, classeurs et feuilles</li>
            <li>Stylos, crayons, taille-crayon, gomme</li>
            <li>RÃ¨gle, compas, Ã©querre</li>
            <li>Trousse complÃ¨te</li>
          </ul>
        </div>
      }
    />
  );
}

