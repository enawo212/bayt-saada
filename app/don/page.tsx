"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { CreditCard, Shield, Heart, ArrowRight } from "lucide-react";

const NAVY = "#132C3F";
const ORANGE = "#E86F24";
const BEIGE = "#F5F0E8";

const montants = [10, 25, 50, 100, 200, 500];

const programmes = [
  { value: "general", label: "Don général" },
  { value: "colis-alimentaire", label: "Colis Alimentaire" },
  { value: "parrainage-orphelin", label: "Parrainage d'Orphelin" },
  { value: "puits", label: "Construction d'un Puits" },
  { value: "zakat", label: "Zakat Al Maal" },
  { value: "sadaqa", label: "Sadaqa Jariya" },
  { value: "agr", label: "Formation AGR" },
  { value: "kit-scolaire", label: "Kit Scolaire" },
  { value: "femmes-veuves", label: "Femmes Veuves & Divorcées" },
];

export default function DonPage() {
  const [montant, setMontant] = useState<number | "">("");
  const [montantCustom, setMontantCustom] = useState("");
  const [programme, setProgramme] = useState("general");
  const [frequence, setFrequence] = useState<"unique" | "mensuel">("unique");

  const montantFinal = montant || (montantCustom ? parseFloat(montantCustom) : 0);

  return (
    <div style={{ backgroundColor: NAVY }}>

      {/* HERO */}
      <section className="pt-36 pb-24 text-center relative overflow-hidden" style={{ backgroundColor: NAVY }}>
        <div className="absolute inset-0 pointer-events-none"
          style={{ background: `radial-gradient(ellipse at center top, rgba(232,111,36,0.06), transparent 60%)` }} />
        <div className="max-w-2xl mx-auto px-4 relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <span className="inline-block font-inter text-xs font-semibold uppercase tracking-widest px-4 py-1.5 rounded-full mb-4"
              style={{ backgroundColor: "rgba(232,111,36,0.15)", color: ORANGE }}>
              Faire un Don
            </span>
            <h1 className="font-montserrat font-bold text-4xl sm:text-5xl text-white mb-4">
              Votre générosité,<br />notre force
            </h1>
            <p className="font-inter text-lg" style={{ color: "rgba(255,255,255,0.55)" }}>
              100% de votre don est reversé aux bénéficiaires.
            </p>
          </motion.div>
        </div>
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 50" fill="none">
            <path d="M0,30 C360,60 1080,0 1440,30 L1440,50 L0,50 Z" fill={BEIGE} />
          </svg>
        </div>
      </section>

      {/* FORMULAIRE */}
      <section className="py-20" style={{ backgroundColor: BEIGE }}>
        <div className="max-w-2xl mx-auto px-4 sm:px-6">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-white rounded-3xl shadow-sm p-8 sm:p-10 border"
            style={{ borderColor: "rgba(19,44,63,0.07)" }}>

            {/* Fréquence */}
            <div className="mb-7">
              <p className="font-montserrat font-bold text-sm mb-3" style={{ color: NAVY }}>Type de don</p>
              <div className="flex rounded-xl overflow-hidden border" style={{ borderColor: "rgba(19,44,63,0.12)" }}>
                {(["unique", "mensuel"] as const).map((f) => (
                  <button key={f} onClick={() => setFrequence(f)}
                    className="flex-1 py-3 font-montserrat font-semibold text-sm capitalize transition-all"
                    style={{
                      backgroundColor: frequence === f ? NAVY : "transparent",
                      color: frequence === f ? "white" : NAVY,
                    }}>
                    {f === "unique" ? "Don unique" : "Don mensuel"}
                  </button>
                ))}
              </div>
            </div>

            {/* Programme */}
            <div className="mb-7">
              <p className="font-montserrat font-bold text-sm mb-3" style={{ color: NAVY }}>Programme</p>
              <select value={programme} onChange={e => setProgramme(e.target.value)}
                className="w-full border rounded-xl px-4 py-3 font-inter text-sm focus:outline-none appearance-none"
                style={{ borderColor: "rgba(19,44,63,0.15)", color: NAVY }}>
                {programmes.map(p => <option key={p.value} value={p.value}>{p.label}</option>)}
              </select>
            </div>

            {/* Montants */}
            <div className="mb-7">
              <p className="font-montserrat font-bold text-sm mb-3" style={{ color: NAVY }}>Montant (€)</p>
              <div className="grid grid-cols-3 gap-3 mb-3">
                {montants.map((m) => (
                  <button key={m} onClick={() => { setMontant(m); setMontantCustom(""); }}
                    className="py-3 rounded-xl font-montserrat font-bold text-sm transition-all border-2"
                    style={{
                      backgroundColor: montant === m ? ORANGE : "transparent",
                      borderColor: montant === m ? ORANGE : "rgba(19,44,63,0.12)",
                      color: montant === m ? "white" : NAVY,
                    }}>
                    {m} €
                  </button>
                ))}
              </div>
              <input type="number" min="1" placeholder="Autre montant..."
                value={montantCustom}
                onChange={e => { setMontantCustom(e.target.value); setMontant(""); }}
                className="w-full border rounded-xl px-4 py-3 font-inter text-sm focus:outline-none"
                style={{ borderColor: "rgba(19,44,63,0.15)", color: NAVY }}
              />
            </div>

            {/* Récap */}
            {montantFinal > 0 && (
              <div className="mb-7 p-4 rounded-xl" style={{ backgroundColor: "rgba(232,111,36,0.07)" }}>
                <div className="flex justify-between items-center">
                  <div>
                    <p className="font-montserrat font-bold text-sm" style={{ color: NAVY }}>Récapitulatif</p>
                    <p className="font-inter text-xs mt-0.5" style={{ color: "rgba(19,44,63,0.55)" }}>
                      {frequence === "mensuel" ? "Don mensuel" : "Don unique"} — {programmes.find(p => p.value === programme)?.label}
                    </p>
                  </div>
                  <span className="font-montserrat font-bold text-2xl" style={{ color: ORANGE }}>{montantFinal} €</span>
                </div>
              </div>
            )}

            {/* Paiement */}
            <div className="space-y-3">
              <button
                className="w-full text-white font-montserrat font-bold py-4 rounded-xl flex items-center justify-center gap-2 hover:opacity-90 transition-all"
                style={{ backgroundColor: ORANGE }}
                onClick={() => alert("Redirection Stripe — à configurer")}>
                <CreditCard size={20} /> Payer par carte bancaire
              </button>
              <button
                className="w-full font-montserrat font-bold py-4 rounded-xl flex items-center justify-center gap-2 border-2 hover:opacity-80 transition-all"
                style={{ borderColor: "#003087", color: "#003087" }}
                onClick={() => alert("Redirection PayPal — à configurer")}>
                PayPal
              </button>
            </div>

            {/* Trust */}
            <div className="mt-6 flex items-center justify-center gap-6 pt-5 border-t"
              style={{ borderColor: "rgba(19,44,63,0.07)" }}>
              <div className="flex items-center gap-1.5">
                <Shield size={13} style={{ color: "rgba(19,44,63,0.35)" }} />
                <span className="font-inter text-xs" style={{ color: "rgba(19,44,63,0.4)" }}>Paiement sécurisé</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Heart size={13} style={{ color: "rgba(19,44,63,0.35)" }} />
                <span className="font-inter text-xs" style={{ color: "rgba(19,44,63,0.4)" }}>100% reversé</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA bas */}
      <section className="py-16 text-center relative" style={{ backgroundColor: NAVY }}>
        <div className="absolute top-0 left-0 right-0">
          <svg viewBox="0 0 1440 50" fill="none">
            <path d="M0,20 C360,-10 1080,50 1440,20 L1440,0 L0,0 Z" fill={BEIGE} />
          </svg>
        </div>
        <div className="max-w-xl mx-auto px-4 pt-8">
          <p className="font-inter mb-4" style={{ color: "rgba(255,255,255,0.45)" }}>
            Une question avant de donner ? Contactez-nous.
          </p>
          <a href="/contact" className="inline-flex items-center gap-2 font-montserrat font-bold px-6 py-3 rounded-full border text-white"
            style={{ borderColor: "rgba(255,255,255,0.2)" }}>
            Nous contacter <ArrowRight size={16} />
          </a>
        </div>
      </section>
    </div>
  );
}
