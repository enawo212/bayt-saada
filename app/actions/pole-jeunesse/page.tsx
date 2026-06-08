"use client";

import { useState } from "react";
import { Users, Send } from "lucide-react";
import ActionPageLayout from "@/components/ActionPageLayout";
import { motion } from "framer-motion";

function InscriptionForm() {
  const [form, setForm] = useState({
    nomParent: "", prenomEnfant: "", age: "", genre: "", email: "", telephone: "", activite: "",
  });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  if (sent) {
    return (
      <div className="mt-12 p-8 rounded-3xl text-center" style={{ backgroundColor: "#FAF8F5" }}>
        <div className="w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-4" style={{ backgroundColor: "rgba(232,111,36,0.1)" }}>
          <Send size={24} style={{ color: "#E86F24" }} />
        </div>
        <h3 className="font-montserrat font-bold text-xl mb-2" style={{ color: "#132C3F" }}>Inscription envoyée !</h3>
        <p className="font-inter text-sm" style={{ color: "rgba(19,44,63,0.6)" }}>
          Nous vous contacterons dans les plus brefs délais pour confirmer l'inscription.
        </p>
      </div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.25 }}
      className="mt-12"
    >
      <h3 className="font-montserrat font-bold text-xl mb-6" style={{ color: "#132C3F" }}>
        Formulaire d'inscription
      </h3>
      <form onSubmit={handleSubmit} className="space-y-5">
        <div className="grid sm:grid-cols-2 gap-5">
          <div>
            <label className="block font-montserrat font-semibold text-sm mb-2" style={{ color: "#132C3F" }}>Nom du parent / tuteur *</label>
            <input
              type="text" required
              value={form.nomParent}
              onChange={e => setForm({ ...form, nomParent: e.target.value })}
              className="w-full border rounded-xl px-4 py-3 font-inter text-sm focus:outline-none"
              style={{ borderColor: "rgba(19,44,63,0.2)", color: "#132C3F" }}
              placeholder="Nom complet"
            />
          </div>
          <div>
            <label className="block font-montserrat font-semibold text-sm mb-2" style={{ color: "#132C3F" }}>Prénom de l'enfant *</label>
            <input
              type="text" required
              value={form.prenomEnfant}
              onChange={e => setForm({ ...form, prenomEnfant: e.target.value })}
              className="w-full border rounded-xl px-4 py-3 font-inter text-sm focus:outline-none"
              style={{ borderColor: "rgba(19,44,63,0.2)", color: "#132C3F" }}
              placeholder="Prénom"
            />
          </div>
        </div>
        <div className="grid sm:grid-cols-2 gap-5">
          <div>
            <label className="block font-montserrat font-semibold text-sm mb-2" style={{ color: "#132C3F" }}>Âge *</label>
            <input
              type="number" min="10" max="20" required
              value={form.age}
              onChange={e => setForm({ ...form, age: e.target.value })}
              className="w-full border rounded-xl px-4 py-3 font-inter text-sm focus:outline-none"
              style={{ borderColor: "rgba(19,44,63,0.2)", color: "#132C3F" }}
              placeholder="Entre 10 et 20 ans"
            />
          </div>
          <div>
            <label className="block font-montserrat font-semibold text-sm mb-2" style={{ color: "#132C3F" }}>Genre *</label>
            <select
              required
              value={form.genre}
              onChange={e => setForm({ ...form, genre: e.target.value })}
              className="w-full border rounded-xl px-4 py-3 font-inter text-sm focus:outline-none"
              style={{ borderColor: "rgba(19,44,63,0.2)", color: "#132C3F" }}
            >
              <option value="">Sélectionner</option>
              <option value="fille">Fille</option>
              <option value="garcon">Garçon</option>
            </select>
          </div>
        </div>
        <div className="grid sm:grid-cols-2 gap-5">
          <div>
            <label className="block font-montserrat font-semibold text-sm mb-2" style={{ color: "#132C3F" }}>Email *</label>
            <input
              type="email" required
              value={form.email}
              onChange={e => setForm({ ...form, email: e.target.value })}
              className="w-full border rounded-xl px-4 py-3 font-inter text-sm focus:outline-none"
              style={{ borderColor: "rgba(19,44,63,0.2)", color: "#132C3F" }}
              placeholder="votre@email.com"
            />
          </div>
          <div>
            <label className="block font-montserrat font-semibold text-sm mb-2" style={{ color: "#132C3F" }}>Téléphone *</label>
            <input
              type="tel" required
              value={form.telephone}
              onChange={e => setForm({ ...form, telephone: e.target.value })}
              className="w-full border rounded-xl px-4 py-3 font-inter text-sm focus:outline-none"
              style={{ borderColor: "rgba(19,44,63,0.2)", color: "#132C3F" }}
              placeholder="+212 6XX XX XX XX"
            />
          </div>
        </div>
        <div>
          <label className="block font-montserrat font-semibold text-sm mb-2" style={{ color: "#132C3F" }}>Activité souhaitée</label>
          <select
            value={form.activite}
            onChange={e => setForm({ ...form, activite: e.target.value })}
            className="w-full border rounded-xl px-4 py-3 font-inter text-sm focus:outline-none"
            style={{ borderColor: "rgba(19,44,63,0.2)", color: "#132C3F" }}
          >
            <option value="">Toutes les activités</option>
            <option value="randonnee">Randonnée</option>
            <option value="couture">Atelier couture</option>
            <option value="autre">Autre atelier</option>
          </select>
        </div>
        <button
          type="submit"
          className="w-full text-white font-montserrat font-bold py-4 rounded-xl transition-all flex items-center justify-center gap-2 hover:opacity-90"
          style={{ backgroundColor: "#E86F24" }}
        >
          <Send size={18} />
          Envoyer l'inscription
        </button>
      </form>
    </motion.div>
  );
}

export default function PoleJeunessePage() {
  return (
    <ActionPageLayout
      icon={Users}
      label="Pôle Jeunesse"
      title="Pôle Jeunesse"
      subtitle="Des activités enrichissantes chaque semaine pour les adolescents de Tanger."
      description={
        <div className="space-y-4">
          <p>
            Le Pôle Jeunesse de Bayt Saada propose des activités hebdomadaires pour les adolescents, dans un cadre bienveillant et stimulant. Notre objectif : leur offrir des sorties, des apprentissages et un espace de socialisation positif.
          </p>
          <h3 className="font-montserrat font-bold text-xl mt-6" style={{ color: "#132C3F" }}>Programme des activités</h3>
          <div className="grid sm:grid-cols-2 gap-4 not-prose">
            {[
              { jour: "Samedi", cible: "Adolescents (garçons)", activite: "Randonnée & sport nature" },
              { jour: "Dimanche", cible: "Adolescentes (filles)", activite: "Randonnée, atelier couture & créatif" },
            ].map((item) => (
              <div key={item.jour} className="border rounded-2xl p-5" style={{ borderColor: "rgba(232,111,36,0.25)" }}>
                <div className="font-montserrat font-bold text-sm mb-1" style={{ color: "#E86F24" }}>{item.jour}</div>
                <div className="font-inter font-semibold text-sm mb-1" style={{ color: "#132C3F" }}>{item.cible}</div>
                <div className="font-inter text-sm" style={{ color: "rgba(19,44,63,0.6)" }}>{item.activite}</div>
              </div>
            ))}
          </div>
          <p>
            Les activités sont encadrées par des bénévoles qualifiés. Elles sont gratuites pour les familles bénéficiaires et ouvertes sur inscription.
          </p>
        </div>
      }
    >
      <InscriptionForm />
    </ActionPageLayout>
  );
}
