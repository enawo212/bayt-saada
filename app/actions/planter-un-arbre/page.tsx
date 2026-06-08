"use client";

import { motion } from "framer-motion";
import { TreePine, Video, Award, Check } from "lucide-react";
import Link from "next/link";

const arbres = [
  {
    nom: "Arbre A",
    description: "Description à compléter",
    prix: 10,
    emoji: "🌱",
  },
  {
    nom: "Arbre B",
    description: "Description à compléter",
    prix: 20,
    emoji: "🌿",
  },
  {
    nom: "Arbre C",
    description: "Description à compléter",
    prix: 35,
    emoji: "🌳",
  },
  {
    nom: "Arbre D",
    description: "Description à compléter",
    prix: 50,
    emoji: "🌲",
  },
];

const etapes = [
  { num: "01", titre: "Choisissez votre arbre", desc: "Sélectionnez le type d'arbre et la quantité souhaitée." },
  { num: "02", titre: "Faites votre don", desc: "Paiement sécurisé par carte ou PayPal." },
  { num: "03", titre: "On plante en votre nom", desc: "Votre arbre est planté au Maroc par notre équipe." },
  { num: "04", titre: "Recevez votre preuve", desc: "Certificat officiel + vidéo de plantation envoyés par email." },
];

export default function PlanterUnArbrePage() {
  return (
    <div className="pt-20">

      {/* HERO */}
      <section className="py-20 text-center" style={{ backgroundColor: "#FAF8F5" }}>
        <div className="max-w-3xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6" style={{ backgroundColor: "rgba(232,111,36,0.1)" }}>
              <TreePine size={32} style={{ color: "#E86F24" }} />
            </div>
            <span className="inline-block font-montserrat font-semibold text-sm px-4 py-1.5 rounded-full mb-4 uppercase tracking-wider" style={{ backgroundColor: "rgba(232,111,36,0.1)", color: "#E86F24" }}>
              Sadaqa Jariya
            </span>
            <h1 className="font-montserrat font-bold text-4xl sm:text-5xl mb-4 leading-tight" style={{ color: "#132C3F" }}>
              Planter un Arbre
            </h1>
            <p className="font-inter text-lg leading-relaxed" style={{ color: "rgba(19,44,63,0.6)" }}>
              Le Prophète ﷺ a dit : « Si l'heure arrive alors que l'un d'entre vous tient un plant dans sa main, qu'il le plante. »
            </p>
          </motion.div>
        </div>
      </section>

      {/* CARTES ARBRES */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-montserrat font-bold text-2xl text-center mb-10"
            style={{ color: "#132C3F" }}
          >
            Choisissez votre arbre
          </motion.h2>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
            {arbres.map((arbre, i) => (
              <motion.div
                key={arbre.nom}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.4 }}
                className="group flex flex-col rounded-2xl overflow-hidden border bg-white hover:shadow-lg transition-all duration-300 hover:border-orange-300"
                style={{ borderColor: "rgba(19,44,63,0.1)" }}
              >
                {/* Image placeholder */}
                <div
                  className="w-full aspect-square flex items-center justify-center text-6xl"
                  style={{ backgroundColor: "#FAF8F5" }}
                >
                  {arbre.emoji}
                </div>

                {/* Infos */}
                <div className="p-4 flex flex-col flex-1">
                  <h3 className="font-montserrat font-bold text-base mb-1" style={{ color: "#132C3F" }}>
                    {arbre.nom}
                  </h3>
                  <p className="font-inter text-xs mb-3 flex-1" style={{ color: "rgba(19,44,63,0.5)" }}>
                    {arbre.description}
                  </p>
                  <div className="font-montserrat font-bold text-lg mb-3" style={{ color: "#E86F24" }}>
                    {arbre.prix} €
                  </div>
                  <Link
                    href="/don"
                    className="w-full text-center text-white font-montserrat font-bold text-sm py-2.5 rounded-xl transition-all hover:opacity-90"
                    style={{ backgroundColor: "#E86F24" }}
                  >
                    Je plante
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* PREUVE — CERTIFICAT + VIDÉO */}
      <section className="py-16" style={{ backgroundColor: "#FAF8F5" }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-montserrat font-bold text-2xl mb-3" style={{ color: "#132C3F" }}>
              Votre arbre, votre preuve
            </h2>
            <p className="font-inter mb-10" style={{ color: "rgba(19,44,63,0.6)" }}>
              Après chaque plantation, vous recevez deux preuves concrètes de votre geste.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 gap-6">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-8 shadow-sm text-left"
            >
              <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4" style={{ backgroundColor: "rgba(232,111,36,0.1)" }}>
                <Award size={24} style={{ color: "#E86F24" }} />
              </div>
              <h3 className="font-montserrat font-bold text-lg mb-2" style={{ color: "#132C3F" }}>
                Certificat de plantation
              </h3>
              <p className="font-inter text-sm leading-relaxed" style={{ color: "rgba(19,44,63,0.6)" }}>
                Un certificat officiel nominatif au nom du donateur (ou de la personne dédicacée), avec la date et le lieu de plantation.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-8 shadow-sm text-left"
            >
              <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4" style={{ backgroundColor: "rgba(232,111,36,0.1)" }}>
                <Video size={24} style={{ color: "#E86F24" }} />
              </div>
              <h3 className="font-montserrat font-bold text-lg mb-2" style={{ color: "#132C3F" }}>
                Vidéo de plantation
              </h3>
              <p className="font-inter text-sm leading-relaxed" style={{ color: "rgba(19,44,63,0.6)" }}>
                Une vidéo filmée sur le terrain au moment de la plantation de votre arbre, envoyée directement par email.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ÉTAPES */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-montserrat font-bold text-2xl text-center mb-12"
            style={{ color: "#132C3F" }}
          >
            Comment ça fonctionne ?
          </motion.h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {etapes.map((etape, i) => (
              <motion.div
                key={etape.num}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center"
              >
                <div className="font-montserrat font-bold text-4xl mb-3" style={{ color: "rgba(232,111,36,0.2)" }}>
                  {etape.num}
                </div>
                <h4 className="font-montserrat font-bold text-sm mb-2" style={{ color: "#132C3F" }}>
                  {etape.titre}
                </h4>
                <p className="font-inter text-xs leading-relaxed" style={{ color: "rgba(19,44,63,0.55)" }}>
                  {etape.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16" style={{ backgroundColor: "#132C3F" }}>
        <div className="max-w-2xl mx-auto px-4 text-center">
          <div className="flex justify-center gap-2 mb-4 text-2xl">🌱🌿🌳🌲</div>
          <h2 className="font-montserrat font-bold text-white text-3xl mb-4">
            Plantez dès aujourd'hui
          </h2>
          <p className="font-inter mb-8" style={{ color: "rgba(255,255,255,0.6)" }}>
            Un geste simple, une récompense éternelle.
          </p>
          <div className="flex flex-wrap gap-2 justify-center mb-6">
            {["Sadaqa Jariya", "Certificat inclus", "Vidéo incluse", "100% Maroc"].map(tag => (
              <span key={tag} className="flex items-center gap-1 text-xs font-inter px-3 py-1 rounded-full" style={{ backgroundColor: "rgba(255,255,255,0.1)", color: "rgba(255,255,255,0.8)" }}>
                <Check size={12} style={{ color: "#E86F24" }} /> {tag}
              </span>
            ))}
          </div>
          <Link
            href="#"
            onClick={e => { e.preventDefault(); window.scrollTo({ top: 0, behavior: "smooth" }); }}
            className="inline-block text-white font-montserrat font-bold px-8 py-4 rounded-full transition-all hover:opacity-90"
            style={{ backgroundColor: "#E86F24" }}
          >
            Choisir mon arbre ↑
          </Link>
        </div>
      </section>

    </div>
  );
}
