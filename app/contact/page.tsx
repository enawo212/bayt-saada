"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, MapPin, Phone, Send, ArrowRight } from "lucide-react";

const NAVY = "#132C3F";
const ORANGE = "#E86F24";
const BEIGE = "#F5F0E8";

export default function ContactPage() {
  const [form, setForm] = useState({ nom: "", email: "", sujet: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

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
              Contactez-nous
            </span>
            <h1 className="font-montserrat font-bold text-4xl sm:text-5xl text-white mb-4">
              Nous sommes là pour vous
            </h1>
            <p className="font-inter text-lg" style={{ color: "rgba(255,255,255,0.55)" }}>
              Une question, un partenariat, un don en nature ? Écrivez-nous.
            </p>
          </motion.div>
        </div>
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 50" fill="none">
            <path d="M0,30 C360,60 1080,0 1440,30 L1440,50 L0,50 Z" fill={BEIGE} />
          </svg>
        </div>
      </section>

      {/* CONTENT */}
      <section className="py-20" style={{ backgroundColor: BEIGE }}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 grid lg:grid-cols-2 gap-16">

          {/* Infos */}
          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }}>
            <h3 className="font-montserrat font-bold text-2xl mb-8" style={{ color: NAVY }}>
              Informations de contact
            </h3>
            <div className="space-y-5">
              {[
                { icon: MapPin, label: "Adresse", val: "Tanger, Maroc", link: null },
                { icon: Mail, label: "Email", val: "contact@baytsaada.org", link: "mailto:contact@baytsaada.org" },
                { icon: Phone, label: "Téléphone", val: "À renseigner", link: null },
              ].map(({ icon: Icon, label, val, link }) => (
                <div key={label} className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-xl flex items-center justify-center shrink-0"
                    style={{ backgroundColor: "rgba(232,111,36,0.1)" }}>
                    <Icon size={20} style={{ color: ORANGE }} />
                  </div>
                  <div>
                    <p className="font-montserrat font-bold text-sm mb-0.5" style={{ color: NAVY }}>{label}</p>
                    {link
                      ? <a href={link} className="font-inter text-sm" style={{ color: ORANGE }}>{val}</a>
                      : <p className="font-inter text-sm" style={{ color: "rgba(19,44,63,0.6)" }}>{val}</p>
                    }
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-10 p-6 rounded-2xl bg-white border" style={{ borderColor: "rgba(232,111,36,0.15)" }}>
              <h4 className="font-montserrat font-bold mb-2" style={{ color: NAVY }}>Dépôt de dons en nature</h4>
              <p className="font-inter text-sm leading-relaxed" style={{ color: "rgba(19,44,63,0.6)" }}>
                Vous pouvez déposer des produits non périssables directement à notre local à Tanger. Contactez-nous au préalable pour convenir d'un horaire.
              </p>
            </div>
          </motion.div>

          {/* Form */}
          <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5, delay: 0.15 }}>
            {sent ? (
              <div className="flex flex-col items-center justify-center h-full text-center py-16 bg-white rounded-3xl">
                <div className="w-16 h-16 rounded-full flex items-center justify-center mb-4"
                  style={{ backgroundColor: "rgba(232,111,36,0.1)" }}>
                  <Send size={28} style={{ color: ORANGE }} />
                </div>
                <h3 className="font-montserrat font-bold text-2xl mb-2" style={{ color: NAVY }}>Message envoyé !</h3>
                <p className="font-inter" style={{ color: "rgba(19,44,63,0.6)" }}>Nous vous répondrons rapidement.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="bg-white rounded-3xl p-8 shadow-sm space-y-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  {[
                    { key: "nom", label: "Nom complet *", type: "text", placeholder: "Votre nom" },
                    { key: "email", label: "Email *", type: "email", placeholder: "votre@email.com" },
                  ].map(({ key, label, type, placeholder }) => (
                    <div key={key}>
                      <label className="block font-montserrat font-semibold text-sm mb-2" style={{ color: NAVY }}>{label}</label>
                      <input type={type} required
                        value={form[key as keyof typeof form]}
                        onChange={e => setForm({ ...form, [key]: e.target.value })}
                        className="w-full border rounded-xl px-4 py-3 font-inter text-sm focus:outline-none focus:ring-2"
                        style={{ borderColor: "rgba(19,44,63,0.15)", color: NAVY }}
                        placeholder={placeholder}
                      />
                    </div>
                  ))}
                </div>
                <div>
                  <label className="block font-montserrat font-semibold text-sm mb-2" style={{ color: NAVY }}>Sujet *</label>
                  <input type="text" required value={form.sujet}
                    onChange={e => setForm({ ...form, sujet: e.target.value })}
                    className="w-full border rounded-xl px-4 py-3 font-inter text-sm focus:outline-none"
                    style={{ borderColor: "rgba(19,44,63,0.15)", color: NAVY }}
                    placeholder="Objet de votre message"
                  />
                </div>
                <div>
                  <label className="block font-montserrat font-semibold text-sm mb-2" style={{ color: NAVY }}>Message *</label>
                  <textarea required rows={5} value={form.message}
                    onChange={e => setForm({ ...form, message: e.target.value })}
                    className="w-full border rounded-xl px-4 py-3 font-inter text-sm focus:outline-none resize-none"
                    style={{ borderColor: "rgba(19,44,63,0.15)", color: NAVY }}
                    placeholder="Votre message..."
                  />
                </div>
                <button type="submit"
                  className="w-full text-white font-montserrat font-bold py-4 rounded-xl flex items-center justify-center gap-2 hover:opacity-90 transition-all"
                  style={{ backgroundColor: ORANGE }}>
                  <Send size={18} /> Envoyer le message
                </button>
              </form>
            )}
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
          <p className="font-inter mb-6" style={{ color: "rgba(255,255,255,0.5)" }}>
            Vous pouvez aussi faire un don directement en ligne.
          </p>
          <a href="/don" className="inline-flex items-center gap-2 font-montserrat font-bold px-8 py-4 rounded-full text-white"
            style={{ backgroundColor: ORANGE }}>
            Faire un Don <ArrowRight size={18} />
          </a>
        </div>
      </section>
    </div>
  );
}
