"use client";

import { BookOpen } from "lucide-react";
import ActionPageLayout from "@/components/ActionPageLayout";

export default function KitScolairePage() {
  return (
    <ActionPageLayout
      icon={BookOpen}
      label="Éducation"
      title="Kit Scolaire"
      subtitle="Offrez à un enfant les fournitures dont il a besoin pour commencer l'année scolaire dans les meilleures conditions."
      montants={[
        { value: "20 €", label: "Kit scolaire complet" },
        { value: "60 €", label: "3 kits scolaires" },
        { value: "100 €", label: "5 kits scolaires" },
      ]}
      description={
        <div className="space-y-4">
          <p>
            La rentrée scolaire est souvent une période difficile pour les familles précaires. Le coût des fournitures représente une charge que beaucoup ne peuvent pas assumer.
          </p>
          <p>
            Bayt Saada prépare et distribue des kits scolaires complets à chaque rentrée : cartable, cahiers, stylos, règles, compas, livres et tout le nécessaire pour une année réussie.
          </p>
          <h3 className="font-montserrat font-bold text-xl mt-6" style={{ color: "#132C3F" }}>Contenu d'un kit</h3>
          <ul className="space-y-2 list-disc list-inside">
            <li>Cartable de qualité</li>
            <li>Cahiers, classeurs et feuilles</li>
            <li>Stylos, crayons, taille-crayon, gomme</li>
            <li>Règle, compas, équerre</li>
            <li>Trousse complète</li>
          </ul>
        </div>
      }
    />
  );
}

