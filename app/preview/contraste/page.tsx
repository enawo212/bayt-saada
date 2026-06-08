"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import {
  ShoppingBasket, Users, Droplets, Leaf, BookOpen, Baby,
  Briefcase, Heart, TreePine, HandHeart, Wheat, Star, Home, ArrowRight, Check
} from "lucide-react";

const actions = [
  { title: "Colis Alimentaire", desc: "Distribution mensuelle aux familles nécessiteuses.", icon: ShoppingBasket },
  { title: "Parrainage d'Orphelin", desc: "Soutenir un orphelin dans ses besoins essentiels.", icon: Heart },
  { title: "Pôle Jeunesse", desc: "Activités hebdomadaires pour les adolescents.", icon: Users },
  { title: "Zakat Al Maal", desc: "Versez votre zakat en toute confiance.", icon: Star },
  { title: "Sadaqa Jariya", desc: "Un don dont la récompense ne s'arrête jamais.", icon: HandHeart },
  { title: "Puits", desc: "Offrez de l'eau potable à une communauté.", icon: Droplets },
  { title: "AGR — Formation", desc: "Formez des personnes vers l'autonomie.", icon: Briefcase },
  { title: "Planter un Arbre", desc: "Un geste écologique et spirituel durable.", icon: TreePine },
  { title: "Kit Scolaire", desc: "Préparer les enfants pour la rentrée.", icon: BookOpen },
  { title: "Plantation d'Oliviers", desc: "Plantation dans la région d'Amizmiz.", icon: Leaf },
  { title: "Femmes Veuves", desc: "Aide financière mensuelle.", icon: Home },
  { title: "Aqiqa", desc: "Célébrez une naissance en aidant.", icon: Baby },
  { title: "Fidya", desc: "Nourrissez des jeûneurs dans le besoin.", icon: Wheat },
];

const stats = [
  { value: "500+", label: "Familles aidées" },
  { value: "100+", label: "Orphelins parrainés" },
  { value: "13", label: "Programmes actifs" },
  { value: "Tanger", label: "Et bientôt plus" },
];

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.07, duration: 0.45 } }),
};

const NAVY = "#132C3F";
const ORANGE = "#E86F24";
const BEIGE = "#F5F0E8";

export default function ContrastePreview() {
  return (
    <div style={{ fontFamily: "Inter, sans-serif" }}>

      {/* NAV */}
      <nav className="fixed top-0 left-0 right-0 z-50" style={{ backgroundColor: NAVY }}>
        <div className="max-w-7xl mx-auto px-6 h-18 flex items-center justify-between py-4">
          <span className="font-montserrat font-bold text-xl text-white">
            Bayt <span style={{ color: ORANGE }}>Saada</span>
          </span>
          <div className="hidden md:flex items-center gap-8">
            {["Accueil", "Nos Actions", "Contact"].map(item => (
              <a key={item} href="#" className="font-inter text-sm font-medium text-white/65 hover:text-white transition-colors">{item}</a>
            ))}
            <a href="#" className="font-montserrat font-bold text-sm px-5 py-2.5 rounded-full text-white" style={{ backgroundColor: ORANGE }}>
              Faire un Don
            </a>
          </div>
        </div>
      </nav>

      {/* HERO — fond NAVY */}
      <section className="min-h-screen flex items-center pt-20 relative overflow-hidden" style={{ backgroundColor: NAVY }}>
        <div className="absolute bottom-0 right-0 w-1/2 h-full opacity-5 pointer-events-none"
          style={{ background: `radial-gradient(ellipse at right, ${ORANGE}, transparent 70%)` }} />

        <div className="max-w-7xl mx-auto px-6 py-28 w-full grid lg:grid-cols-2 gap-16 items-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <span className="inline-block font-inter text-xs font-semibold uppercase tracking-widest px-4 py-1.5 rounded-full mb-6" style={{ backgroundColor: "rgba(232,111,36,0.15)", color: ORANGE }}>
              Association caritative — Tanger
            </span>
            <h1 className="font-montserrat font-bold leading-[1.1] mb-6 text-white" style={{ fontSize: "clamp(2.8rem, 6vw, 4.8rem)" }}>
              Ensemble,<br />
              construisons un<br />
              <span style={{ color: ORANGE }}>avenir meilleur</span>
            </h1>
            <p className="font-inter text-lg leading-relaxed mb-10" style={{ color: "rgba(255,255,255,0.55)" }}>
              Bayt Saada agit chaque jour pour les familles nécessiteuses, les orphelins et les jeunes de Tanger.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="#" className="flex items-center gap-2 font-montserrat font-bold px-8 py-4 rounded-full text-white" style={{ backgroundColor: ORANGE }}>
                Faire un Don <ArrowRight size={18} />
              </a>
              <a href="#actions" className="flex items-center gap-2 font-montserrat font-bold px-8 py-4 rounded-full border text-white" style={{ borderColor: "rgba(255,255,255,0.25)" }}>
                Nos Actions
              </a>
            </div>
          </motion.div>

          {/* Stats inline dans le hero */}
          <motion.div initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6, delay: 0.2 }} className="grid grid-cols-2 gap-4">
            {stats.map((s) => (
              <div key={s.label} className="rounded-2xl p-6 border" style={{ backgroundColor: "rgba(255,255,255,0.05)", borderColor: "rgba(255,255,255,0.08)" }}>
                <div className="font-montserrat font-bold text-4xl mb-1" style={{ color: ORANGE }}>{s.value}</div>
                <div className="font-inter text-sm text-white/50">{s.label}</div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Wave transition */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0,40 C360,80 1080,0 1440,40 L1440,60 L0,60 Z" fill={BEIGE} />
          </svg>
        </div>
      </section>

      {/* ACTIONS — fond BEIGE */}
      <section id="actions" className="py-24" style={{ backgroundColor: BEIGE }}>
        <div className="max-w-7xl mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-14 text-center">
            <span className="inline-block font-inter text-xs font-semibold uppercase tracking-widest px-4 py-1.5 rounded-full mb-4" style={{ backgroundColor: "rgba(232,111,36,0.12)", color: ORANGE }}>
              Ce que nous faisons
            </span>
            <h2 className="font-montserrat font-bold text-4xl" style={{ color: NAVY }}>Nos programmes d'action</h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {actions.map((action, i) => (
              <motion.a
                key={action.title}
                href="#"
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                className="group flex items-start gap-4 p-5 rounded-2xl bg-white border border-transparent hover:border-orange-200 hover:shadow-md transition-all duration-300"
              >
                <div className="w-11 h-11 rounded-xl flex items-center justify-center shrink-0" style={{ backgroundColor: "rgba(232,111,36,0.1)" }}>
                  <action.icon size={20} style={{ color: ORANGE }} />
                </div>
                <div>
                  <h3 className="font-montserrat font-bold text-sm mb-1 group-hover:text-orange-500 transition-colors" style={{ color: NAVY }}>{action.title}</h3>
                  <p className="font-inter text-xs leading-relaxed" style={{ color: "rgba(19,44,63,0.55)" }}>{action.desc}</p>
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* MISSION — fond NAVY */}
      <section className="py-24 relative overflow-hidden" style={{ backgroundColor: NAVY }}>
        <div className="absolute top-0 left-0 right-0">
          <svg viewBox="0 0 1440 60" fill="none">
            <path d="M0,20 C360,-20 1080,60 1440,20 L1440,0 L0,0 Z" fill={BEIGE} />
          </svg>
        </div>
        <div className="max-w-7xl mx-auto px-6 pt-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <span className="inline-block font-inter text-xs font-semibold uppercase tracking-widest px-4 py-1.5 rounded-full mb-6" style={{ backgroundColor: "rgba(232,111,36,0.15)", color: ORANGE }}>
                Notre mission
              </span>
              <h2 className="font-montserrat font-bold text-4xl text-white mb-6 leading-tight">
                Solidarité,<br />dignité et espoir
              </h2>
              <p className="font-inter leading-relaxed mb-8" style={{ color: "rgba(255,255,255,0.55)" }}>
                Fondée à Tanger, Bayt Saada — la maison du bonheur — œuvre pour améliorer les conditions de vie des familles vulnérables, des femmes en difficulté et de la jeunesse locale.
              </p>
              <ul className="space-y-3 mb-8">
                {["Aide alimentaire mensuelle", "Parrainage d'orphelins", "Formation professionnelle", "Activités pour la jeunesse"].map(item => (
                  <li key={item} className="flex items-center gap-3 font-inter text-sm" style={{ color: "rgba(255,255,255,0.7)" }}>
                    <Check size={16} style={{ color: ORANGE }} /> {item}
                  </li>
                ))}
              </ul>
              <a href="#" className="inline-flex items-center gap-2 font-montserrat font-bold px-6 py-3 rounded-full text-white" style={{ backgroundColor: ORANGE }}>
                Nous contacter <ArrowRight size={16} />
              </a>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
              className="grid grid-cols-2 gap-4">
              {[
                { icon: Heart, title: "Humanité", desc: "Dignité et bienveillance pour chacun" },
                { icon: Users, title: "Communauté", desc: "Un impact collectif et durable" },
                { icon: Star, title: "Transparence", desc: "Vos dons utilisés avec rigueur" },
                { icon: Leaf, title: "Durabilité", desc: "Des actions qui portent leurs fruits" },
              ].map((v) => (
                <div key={v.title} className="rounded-2xl p-5 border" style={{ backgroundColor: "rgba(255,255,255,0.05)", borderColor: "rgba(255,255,255,0.08)" }}>
                  <v.icon size={20} className="mb-3" style={{ color: ORANGE }} />
                  <h4 className="font-montserrat font-bold text-white text-sm mb-1">{v.title}</h4>
                  <p className="font-inter text-xs leading-relaxed" style={{ color: "rgba(255,255,255,0.45)" }}>{v.desc}</p>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA — fond BEIGE */}
      <section className="py-24 text-center relative" style={{ backgroundColor: BEIGE }}>
        <div className="absolute top-0 left-0 right-0">
          <svg viewBox="0 0 1440 60" fill="none">
            <path d="M0,40 C360,80 1080,0 1440,40 L1440,0 L0,0 Z" fill={NAVY} />
          </svg>
        </div>
        <div className="max-w-2xl mx-auto px-6 pt-8 relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="font-montserrat font-bold text-5xl mb-4 leading-tight" style={{ color: NAVY }}>
              Votre don peut<br /><span style={{ color: ORANGE }}>tout changer</span>
            </h2>
            <p className="font-inter mb-10 text-lg" style={{ color: "rgba(19,44,63,0.6)" }}>
              Chaque dirham contribue à nourrir une famille, soutenir un orphelin ou former une personne vers l'autonomie.
            </p>
            <a href="#" className="inline-flex items-center gap-2 font-montserrat font-bold text-lg px-10 py-4 rounded-full text-white shadow-xl" style={{ backgroundColor: NAVY }}>
              Faire un Don maintenant <ArrowRight size={20} />
            </a>
          </motion.div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-8 border-t text-center" style={{ backgroundColor: NAVY, borderColor: "rgba(255,255,255,0.06)" }}>
        <p className="font-inter text-sm" style={{ color: "rgba(255,255,255,0.3)" }}>
          © 2025 Bayt Saada — Association caritative, Tanger
        </p>
      </footer>

      {/* Badge preview */}
      <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 flex gap-3">
        <Link href="/preview/dark" className="font-montserrat font-bold text-xs px-4 py-2 rounded-full text-white border" style={{ borderColor: "rgba(255,255,255,0.3)", backgroundColor: NAVY }}>
          ← Voir Direction 1
        </Link>
        <div className="font-montserrat font-bold text-xs px-4 py-2 rounded-full text-white" style={{ backgroundColor: ORANGE }}>
          Direction 2 — Sections Contrastées
        </div>
      </div>
    </div>
  );
}
