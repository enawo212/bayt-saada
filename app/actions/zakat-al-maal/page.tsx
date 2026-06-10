"use client";

import { Star } from "lucide-react";
import ActionPageLayout from "@/components/ActionPageLayout";

export default function ZakatAlMaalPage() {
  return (
    <ActionPageLayout
      icon={Star}
      label="Obligation religieuse"
      title="Zakat Al Maal"
      subtitle="Acquittez-vous de votre zakat en toute confiance. Bayt Saada la distribue aux bénéficiaires éligibles à Tanger."
      description={
        <div className="space-y-4">
          <p>
            La Zakat Al Maal est le troisième pilier de l'Islam. Elle représente 2,5% de votre épargne annuelle lorsqu'elle atteint le nisab (seuil minimal). C'est une obligation pour tout musulman qui en a les moyens.
          </p>
          <p>
            Bayt Saada collecte et redistribue la zakat aux familles nécessiteuses de Tanger et des environs, en priorité aux 8 catégories définies par le Coran : les pauvres, les nécessiteux, etc.
          </p>
          <h3 className="font-montserrat font-bold text-xl mt-6" style={{ color: "#132C3F" }}>Calculer sa Zakat</h3>
          <p>
            Pour calculer votre zakat : additionnez votre épargne, or et argent détenus depuis un an lunaire complet, puis appliquez 2,5%. Notre équipe reste disponible pour vous accompagner si vous avez des questions.
          </p>
        </div>
      }
    />
  );
}

