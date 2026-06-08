"use client";

import { Briefcase } from "lucide-react";
import ActionPageLayout from "@/components/ActionPageLayout";

export default function AGRPage() {
  return (
    <ActionPageLayout
      icon={Briefcase}
      label="Formation professionnelle"
      title="AGR â€” Formation Pro"
      subtitle="Former des personnes nÃ©cessiteuses Ã  un mÃ©tier pour les aider Ã  conquÃ©rir leur autonomie Ã©conomique."
      montants={[
        { value: "50 â‚¬", label: "MatÃ©riel de formation" },
        { value: "150 â‚¬", label: "Formation d'1 participant" },
        { value: "500 â‚¬", label: "Financement d'un atelier" },
      ]}
      description={
        <div className="space-y-4">
          <p>
            Les ActivitÃ©s GÃ©nÃ©ratrices de Revenu (AGR) constituent l'un des piliers de l'action de Bayt Saada. Notre conviction : donner aux personnes dans le besoin les compÃ©tences pour subvenir elles-mÃªmes Ã  leurs besoins est bien plus puissant qu'un simple don.
          </p>
          <p>
            Nous organisons des formations pratiques et certifiantes, animÃ©es par des professionnels bÃ©nÃ©voles ou rÃ©munÃ©rÃ©s, dans des domaines accessibles et porteurs.
          </p>
          <h3 className="font-montserrat font-bold text-xl mt-6" style={{ color: "#132C3F" }}>Nos ateliers de formation</h3>
          <div className="grid sm:grid-cols-2 gap-4 not-prose">
            {[
              { nom: "âœ‚ï¸ Couture & Mode", desc: "Apprendre Ã  confectionner des vÃªtements et crÃ©er son activitÃ©." },
              { nom: "ðŸ”§ Plomberie", desc: "Formation aux bases de la plomberie pour trouver un emploi rapidement." },
              { nom: "âš¡ Ã‰lectricitÃ©", desc: "Initiation Ã  l'Ã©lectricitÃ© rÃ©sidentielle et aux installations de base." },
              { nom: "ðŸŽ‚ PÃ¢tisserie", desc: "MaÃ®triser les bases de la pÃ¢tisserie pour crÃ©er une micro-activitÃ©." },
              { nom: "ðŸž Boulangerie", desc: "Formation Ã  la fabrication du pain et des viennoiseries." },
            ].map((atelier) => (
              <div key={atelier.nom} className="border rounded-2xl p-5" style={{ borderColor: "rgba(232,111,36,0.25)" }}>
                <div className="font-montserrat font-bold text-sm mb-1" style={{ color: "#132C3F" }}>{atelier.nom}</div>
                <div className="font-inter text-sm" style={{ color: "rgba(19,44,63,0.6)" }}>{atelier.desc}</div>
              </div>
            ))}
          </div>
          <p className="mt-4">
            Ã€ l'issue de chaque formation, les participants sont accompagnÃ©s dans leurs dÃ©marches de crÃ©ation d'activitÃ© ou de recherche d'emploi.
          </p>
        </div>
      }
    />
  );
}

