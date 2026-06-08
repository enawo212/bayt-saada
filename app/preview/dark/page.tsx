"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import {
  ShoppingBasket, Users, Droplets, Leaf, BookOpen, Baby,
  Briefcase, Heart, TreePine, HandHeart, Wheat, Star, Home, ArrowRight
} from "lucide-react";

const actions = [
  { title: "Colis Alimentaire", icon: ShoppingBasket, href: "#" },
  { title: "Parrainage d'Orphelin", icon: Heart, href: "#" },
  { title: "Pôle Jeunesse", icon: Users, href: "#" },
  { title: "Zakat Al Maal", icon: Star, href: "#" },
  { title: "Sadaqa Jariya", icon: HandHeart, href: "#" },
  { title: "Puits", icon: Droplets, href: "#" },
  { title: "Plantation d'Oliviers", icon: Leaf, href: "#" },
  { title: "Fidya", icon: Wheat, href: "#" },
  { title: "Femmes Veuves", icon: Home, href: "#" },
  { title: "Planter un Arbre", icon: TreePine, href: "#" },
  { title: "Kit Scolaire", icon: BookOpen, href: "#" },
  { title: "Aqiqa", icon: Baby, href: "#" },
  { title: "AGR — Formation", icon: Briefcase, href: "#" },
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
const NAVY_LIGHT = "#1a3a52";
const NAVY_MID = "#0e2030";

export default function DarkPreview() {
  return (
    <div style={{ backgroundColor: NAVY, color: "white", fontFamily: "Inter, sans-serif" }}>

      {/* NAV */}
      <nav className="fixed top-0 left-0 right-0 z-50 border-b" style={{ backgroundColor: "rgba(19,44,63,0.95)", backdropFilter: "blur(12px)", borderColor: "rgba(255,255,255,0.06)" }}>
        <div className="max-w-7xl mx-auto px-6 h-18 flex items-center justify-between py-4">
          <span className="font-montserrat font-bold text-xl text-white">
            Bayt <span style={{ color: ORANGE }}>Saada</span>
          </span>
          <div className="hidden md:flex items-center gap-8">
            {["Accueil", "Nos Actions", "Contact"].map(item => (
              <a key={item} href="#" className="font-inter text-sm font-medium transition-colors" style={{ color: "rgba(255,255,255,0.65)" }}
                onMouseEnter={e => (e.target as HTMLElement).style.color = "white"}
                onMouseLeave={e => (e.target as HTMLElement).style.color = "rgba(255,255,255,0.65)"}
              >{item}</a>
            ))}
            <a href="#" className="font-montserrat font-bold text-sm px-5 py-2.5 rounded-full text-white transition-all" style={{ backgroundColor: ORANGE }}>
              Faire un Don
            </a>
          </div>
        </div>
      </nav>

      {/* HERO */}
      <section className="min-h-screen flex items-center pt-20 relative overflow-hidden">
        {/* Glow effects */}
        <div className="absolute top-1/4 right-0 w-96 h-96 rounded-full blur-3xl pointer-events-none" style={{ backgroundColor: "rgba(232,111,36,0.08)" }} />
        <div className="absolute bottom-0 left-1/4 w-64 h-64 rounded-full blur-3xl pointer-events-none" style={{ backgroundColor: "rgba(232,111,36,0.05)" }} />

        <div className="max-w-7xl mx-auto px-6 py-24 w-full">
          <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} className="max-w-3xl">
            <div className="flex items-center gap-2 mb-8">
              <div className="w-8 h-px" style={{ backgroundColor: ORANGE }} />
              <span className="font-inter text-sm font-medium uppercase tracking-widest" style={{ color: ORANGE }}>
                Association caritative — Tanger
              </span>
            </div>
            <h1 className="font-montserrat font-bold leading-[1.1] mb-8" style={{ fontSize: "clamp(3rem, 7vw, 5.5rem)", color: "white" }}>
              Ensemble,<br />
              construisons un<br />
              <span style={{ color: ORANGE }}>avenir meilleur</span>
            </h1>
            <p className="font-inter text-lg leading-relaxed mb-10 max-w-xl" style={{ color: "rgba(255,255,255,0.55)" }}>
              Bayt Saada agit chaque jour pour les familles nécessiteuses, les orphelins et les jeunes de Tanger. Chaque don change une vie.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="#" className="flex items-center gap-2 font-montserrat font-bold px-8 py-4 rounded-full text-white transition-all hover:opacity-90" style={{ backgroundColor: ORANGE }}>
                Faire un Don <ArrowRight size={18} />
              </a>
              <a href="#actions" className="flex items-center gap-2 font-montserrat font-bold px-8 py-4 rounded-full transition-all border" style={{ borderColor: "rgba(255,255,255,0.2)", color: "rgba(255,255,255,0.8)" }}>
                Nos Actions
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* STATS */}
      <section className="py-16 border-y" style={{ borderColor: "rgba(255,255,255,0.06)", backgroundColor: NAVY_MID }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((s, i) => (
              <motion.div key={s.label} custom={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center">
                <div className="font-montserrat font-bold text-5xl mb-1" style={{ color: ORANGE }}>{s.value}</div>
                <div className="font-inter text-sm" style={{ color: "rgba(255,255,255,0.45)" }}>{s.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ACTIONS */}
      <section id="actions" className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-14">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-px" style={{ backgroundColor: ORANGE }} />
              <span className="font-inter text-sm font-medium uppercase tracking-widest" style={{ color: ORANGE }}>Ce que nous faisons</span>
            </div>
            <h2 className="font-montserrat font-bold text-4xl text-white">Nos programmes d'action</h2>
          </motion.div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
            {actions.map((action, i) => (
              <motion.a
                key={action.title}
                href={action.href}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                className="group flex flex-col items-start p-5 rounded-2xl border transition-all duration-300 cursor-pointer"
                style={{ backgroundColor: NAVY_LIGHT, borderColor: "rgba(255,255,255,0.06)" }}
                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.borderColor = ORANGE; (e.currentTarget as HTMLElement).style.backgroundColor = "rgba(232,111,36,0.08)"; }}
                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.06)"; (e.currentTarget as HTMLElement).style.backgroundColor = NAVY_LIGHT; }}
              >
                <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-3 transition-colors" style={{ backgroundColor: "rgba(232,111,36,0.12)" }}>
                  <action.icon size={20} style={{ color: ORANGE }} />
                </div>
                <span className="font-montserrat font-bold text-sm text-white leading-snug">{action.title}</span>
                <ArrowRight size={14} className="mt-2 opacity-0 group-hover:opacity-100 transition-opacity" style={{ color: ORANGE }} />
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* MISSION */}
      <section className="py-24 border-t" style={{ backgroundColor: NAVY_MID, borderColor: "rgba(255,255,255,0.06)" }}>
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
          <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <div className="flex items-center gap-2 mb-6">
              <div className="w-8 h-px" style={{ backgroundColor: ORANGE }} />
              <span className="font-inter text-sm font-medium uppercase tracking-widest" style={{ color: ORANGE }}>Notre mission</span>
            </div>
            <h2 className="font-montserrat font-bold text-4xl text-white mb-6 leading-tight">
              Solidarité,<br />dignité et espoir
            </h2>
            <p className="font-inter leading-relaxed mb-4" style={{ color: "rgba(255,255,255,0.55)" }}>
              Fondée à Tanger, Bayt Saada — la maison du bonheur — œuvre pour améliorer les conditions de vie des familles vulnérables, des femmes en difficulté et de la jeunesse locale.
            </p>
            <p className="font-inter leading-relaxed mb-8" style={{ color: "rgba(255,255,255,0.55)" }}>
              Nos actions s'étendent de l'aide alimentaire d'urgence à la formation professionnelle, en passant par le parrainage d'orphelins.
            </p>
            <a href="#" className="inline-flex items-center gap-2 font-montserrat font-bold px-6 py-3 rounded-full border transition-all hover:text-white" style={{ borderColor: ORANGE, color: ORANGE }}>
              Nous contacter <ArrowRight size={16} />
            </a>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="grid grid-cols-2 gap-4">
            {[
              { icon: Heart, title: "Humanité", desc: "Chaque personne mérite dignité et bienveillance" },
              { icon: Users, title: "Communauté", desc: "Agir ensemble pour un impact durable" },
              { icon: Star, title: "Transparence", desc: "Vos dons utilisés avec rigueur" },
              { icon: Leaf, title: "Durabilité", desc: "Des actions qui portent leurs fruits" },
            ].map((v) => (
              <div key={v.title} className="rounded-2xl p-6 border" style={{ backgroundColor: NAVY_LIGHT, borderColor: "rgba(255,255,255,0.06)" }}>
                <v.icon size={22} className="mb-3" style={{ color: ORANGE }} />
                <h4 className="font-montserrat font-bold text-white text-sm mb-1">{v.title}</h4>
                <p className="font-inter text-xs leading-relaxed" style={{ color: "rgba(255,255,255,0.45)" }}>{v.desc}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 text-center relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] rounded-full blur-3xl" style={{ backgroundColor: "rgba(232,111,36,0.07)" }} />
        </div>
        <div className="max-w-2xl mx-auto px-6 relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="font-montserrat font-bold text-5xl text-white mb-4 leading-tight">
              Votre don peut<br /><span style={{ color: ORANGE }}>tout changer</span>
            </h2>
            <p className="font-inter mb-10" style={{ color: "rgba(255,255,255,0.5)" }}>
              Chaque dirham contribue à nourrir une famille, soutenir un orphelin ou former une personne vers l'autonomie.
            </p>
            <a href="#" className="inline-flex items-center gap-2 font-montserrat font-bold text-lg px-10 py-4 rounded-full text-white" style={{ backgroundColor: ORANGE }}>
              Faire un Don maintenant <ArrowRight size={20} />
            </a>
          </motion.div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-8 border-t text-center" style={{ borderColor: "rgba(255,255,255,0.06)" }}>
        <p className="font-inter text-sm" style={{ color: "rgba(255,255,255,0.3)" }}>
          © 2025 Bayt Saada — Association caritative, Tanger
        </p>
      </footer>

      {/* Badge preview */}
      <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 flex gap-3">
        <div className="font-montserrat font-bold text-xs px-4 py-2 rounded-full text-white" style={{ backgroundColor: ORANGE }}>
          Direction 1 — Dark & Bold
        </div>
        <Link href="/preview/contraste" className="font-montserrat font-bold text-xs px-4 py-2 rounded-full border text-white" style={{ borderColor: "rgba(255,255,255,0.3)" }}>
          Voir Direction 2 →
        </Link>
      </div>
    </div>
  );
}
