"use client";

import { Briefcase } from "lucide-react";
import ActionPageLayout from "@/components/ActionPageLayout";

export default function AGRPage() {
  return (
    <ActionPageLayout
      icon={Briefcase}
      label="Formation professionnelle"
      title="AGR — Formation Pro"
      subtitle="Former des personnes nécessiteuses à un métier pour les aider à conquérir leur autonomie économique."
      montants={[
        { value: "50 €", label: "Matériel de formation" },
        { value: "150 €", label: "Formation d'1 participant" },
        { value: "500 €", label: "Financement d'un atelier" },
      ]}
      description={
        <div className="space-y-4">
          <p>
            Les Activités Génératrices de Revenu (AGR) constituent l'un des piliers de l'action de Bayt Saada. Notre conviction : donner aux personnes dans le besoin les compétences pour subvenir elles-mêmes à leurs besoins est bien plus puissant qu'un simple don.
          </p>
          <p>
            Nous organisons des formations pratiques et certifiantes, animées par des professionnels bénévoles ou rémunérés, dans des domaines accessibles et porteurs.
          </p>
          <h3 className="font-montserrat font-bold text-xl mt-6" style={{ color: "#132C3F" }}>Nos ateliers de formation</h3>
          <div className="grid sm:grid-cols-2 gap-4 not-prose">
            {[
              { nom: "✂️ Couture & Mode", desc: "Apprendre à confectionner des vêtements et créer son activité." },
              { nom: "🔧 Plomberie", desc: "Formation aux bases de la plomberie pour trouver un emploi rapidement." },
              { nom: "⚡ Électricité", desc: "Initiation à l'électricité résidentielle et aux installations de base." },
              { nom: "🎂 Pâtisserie", desc: "Maîtriser les bases de la pâtisserie pour créer une micro-activité." },
              { nom: "🍞 Boulangerie", desc: "Formation à la fabrication du pain et des viennoiseries." },
            ].map((atelier) => (
              <div key={atelier.nom} className="border rounded-2xl p-5" style={{ borderColor: "rgba(232,111,36,0.25)" }}>
                <div className="font-montserrat font-bold text-sm mb-1" style={{ color: "#132C3F" }}>{atelier.nom}</div>
                <div className="font-inter text-sm" style={{ color: "rgba(19,44,63,0.6)" }}>{atelier.desc}</div>
              </div>
            ))}
          </div>
          <p className="mt-4">
            À l'issue de chaque formation, les participants sont accompagnés dans leurs démarches de création d'activité ou de recherche d'emploi.
          </p>
        </div>
      }
    />
  );
}

