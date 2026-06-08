"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import {
  ShoppingBasket, Users, Droplets, Leaf, BookOpen, Baby,
  Briefcase, Heart, TreePine, HandHeart, Wheat, Star, Home, ArrowRight, Check
} from "lucide-react";

const NAVY = "#132C3F";
const ORANGE = "#E86F24";
const BEIGE = "#F5F0E8";

const actions = [
  { title: "Colis Alimentaire", desc: "Distribution mensuelle aux familles nécessiteuses.", icon: ShoppingBasket, href: "/actions/colis-alimentaire" },
  { title: "Parrainage d'Orphelin", desc: "Soutenir un orphelin dans ses besoins essentiels.", icon: Heart, href: "/actions/parrainage-orphelin" },
  { title: "Pôle Jeunesse", desc: "Activités hebdomadaires pour les adolescents.", icon: Users, href: "/actions/pole-jeunesse" },
  { title: "Zakat Al Maal", desc: "Versez votre zakat en toute confiance.", icon: Star, href: "/actions/zakat-al-maal" },
  { title: "Sadaqa Jariya", desc: "Un don dont la récompense ne s'arrête jamais.", icon: HandHeart, href: "/actions/sadaqa-jariya" },
  { title: "Puits", desc: "Offrez de l'eau potable à une communauté.", icon: Droplets, href: "/actions/puits" },
  { title: "AGR — Formation", desc: "Formez des personnes vers l'autonomie.", icon: Briefcase, href: "/actions/agr" },
  { title: "Planter un Arbre", desc: "Un geste écologique et spirituel durable.", icon: TreePine, href: "/actions/planter-un-arbre" },
  { title: "Kit Scolaire", desc: "Préparer les enfants pour la rentrée.", icon: BookOpen, href: "/actions/kit-scolaire" },
  { title: "Plantation d'Oliviers", desc: "Plantation dans la région d'Amizmiz.", icon: Leaf, href: "/actions/plantation-oliviers" },
  { title: "Femmes Veuves & Divorcées", desc: "Aide financière mensuelle.", icon: Home, href: "/actions/femmes-veuves" },
  { title: "Aqiqa", desc: "Célébrez une naissance en aidant.", icon: Baby, href: "/actions/aqiqa" },
  { title: "Fidya", desc: "Nourrissez des jeûneurs dans le besoin.", icon: Wheat, href: "/actions/fidya" },
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

export default function HomePage() {
  return (
    <>
      {/* ── HERO — fond NAVY ── */}
      <section className="min-h-screen flex items-center pt-20 relative overflow-hidden" style={{ backgroundColor: NAVY }}>
        <div className="absolute bottom-0 right-0 w-1/2 h-full pointer-events-none"
          style={{ background: `radial-gradient(ellipse at right bottom, rgba(232,111,36,0.07), transparent 65%)` }} />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-28 w-full grid lg:grid-cols-2 gap-16 items-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.65 }}>
            <span className="inline-block font-inter text-xs font-semibold uppercase tracking-widest px-4 py-1.5 rounded-full mb-6"
              style={{ backgroundColor: "rgba(232,111,36,0.15)", color: ORANGE }}>
              Association caritative — Tanger
            </span>
            <h1 className="font-montserrat font-bold leading-[1.1] mb-6 text-white"
              style={{ fontSize: "clamp(2.8rem, 6vw, 4.8rem)" }}>
              Ensemble,<br />
              construisons un<br />
              <span style={{ color: ORANGE }}>avenir meilleur</span>
            </h1>
            <p className="font-inter text-lg leading-relaxed mb-10 max-w-lg"
              style={{ color: "rgba(255,255,255,0.55)" }}>
              Bayt Saada agit chaque jour pour les familles nécessiteuses, les orphelins et les jeunes de Tanger. Chaque don change une vie.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/don"
                className="flex items-center gap-2 font-montserrat font-bold px-8 py-4 rounded-full text-white transition-all hover:opacity-90"
                style={{ backgroundColor: ORANGE }}>
                Faire un Don <ArrowRight size={18} />
              </Link>
              <Link href="#actions"
                className="flex items-center gap-2 font-montserrat font-bold px-8 py-4 rounded-full text-white border transition-all hover:bg-white/5"
                style={{ borderColor: "rgba(255,255,255,0.2)" }}>
                Nos Actions
              </Link>
            </div>
          </motion.div>

          {/* Stats dans le hero */}
          <motion.div initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.65, delay: 0.2 }} className="grid grid-cols-2 gap-4">
            {stats.map((s, i) => (
              <motion.div key={s.label} custom={i} initial="hidden" animate="visible" variants={fadeUp}
                className="rounded-2xl p-6 border"
                style={{ backgroundColor: "rgba(255,255,255,0.04)", borderColor: "rgba(255,255,255,0.07)" }}>
                <div className="font-montserrat font-bold text-4xl mb-1" style={{ color: ORANGE }}>{s.value}</div>
                <div className="font-inter text-sm" style={{ color: "rgba(255,255,255,0.45)" }}>{s.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Wave vers BEIGE */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0,40 C360,80 1080,0 1440,40 L1440,60 L0,60 Z" fill={BEIGE} />
          </svg>
        </div>
      </section>

      {/* ── ACTIONS — fond BEIGE ── */}
      <section id="actions" className="py-24" style={{ backgroundColor: BEIGE }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} className="mb-14 text-center">
            <span className="inline-block font-inter text-xs font-semibold uppercase tracking-widest px-4 py-1.5 rounded-full mb-4"
              style={{ backgroundColor: "rgba(232,111,36,0.12)", color: ORANGE }}>
              Ce que nous faisons
            </span>
            <h2 className="font-montserrat font-bold text-4xl" style={{ color: NAVY }}>
              Nos programmes d'action
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {actions.map((action, i) => (
              <motion.div key={action.href} custom={i} initial="hidden" whileInView="visible"
                viewport={{ once: true }} variants={fadeUp}>
                <Link href={action.href}
                  className="group flex items-start gap-4 p-5 rounded-2xl bg-white border border-transparent hover:shadow-md transition-all duration-300"
                  style={{ borderColor: "transparent" }}
                  onMouseEnter={e => (e.currentTarget as HTMLElement).style.borderColor = "rgba(232,111,36,0.25)"}
                  onMouseLeave={e => (e.currentTarget as HTMLElement).style.borderColor = "transparent"}
                >
                  <div className="w-11 h-11 rounded-xl flex items-center justify-center shrink-0"
                    style={{ backgroundColor: "rgba(232,111,36,0.1)" }}>
                    <action.icon size={20} style={{ color: ORANGE }} />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-montserrat font-bold text-sm mb-1 group-hover:text-orange-500 transition-colors"
                      style={{ color: NAVY }}>
                      {action.title}
                    </h3>
                    <p className="font-inter text-xs leading-relaxed" style={{ color: "rgba(19,44,63,0.55)" }}>
                      {action.desc}
                    </p>
                  </div>
                  <ArrowRight size={14} className="shrink-0 mt-1 opacity-0 group-hover:opacity-100 transition-opacity" style={{ color: ORANGE }} />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── MISSION — fond NAVY ── */}
      <section className="py-24 relative overflow-hidden" style={{ backgroundColor: NAVY }}>
        {/* Wave depuis BEIGE */}
        <div className="absolute top-0 left-0 right-0">
          <svg viewBox="0 0 1440 60" fill="none">
            <path d="M0,20 C360,-20 1080,60 1440,20 L1440,0 L0,0 Z" fill={BEIGE} />
          </svg>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}>
              <span className="inline-block font-inter text-xs font-semibold uppercase tracking-widest px-4 py-1.5 rounded-full mb-6"
                style={{ backgroundColor: "rgba(232,111,36,0.15)", color: ORANGE }}>
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
                  <li key={item} className="flex items-center gap-3 font-inter text-sm"
                    style={{ color: "rgba(255,255,255,0.7)" }}>
                    <Check size={16} style={{ color: ORANGE }} /> {item}
                  </li>
                ))}
              </ul>
              <Link href="/contact"
                className="inline-flex items-center gap-2 font-montserrat font-bold px-6 py-3 rounded-full text-white transition-all hover:opacity-90"
                style={{ backgroundColor: ORANGE }}>
                Nous contacter <ArrowRight size={16} />
              </Link>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }} className="grid grid-cols-2 gap-4">
              {[
                { icon: Heart, title: "Humanité", desc: "Dignité et bienveillance pour chacun" },
                { icon: Users, title: "Communauté", desc: "Un impact collectif et durable" },
                { icon: Star, title: "Transparence", desc: "Vos dons utilisés avec rigueur" },
                { icon: Leaf, title: "Durabilité", desc: "Des actions qui portent leurs fruits" },
              ].map((v) => (
                <div key={v.title} className="rounded-2xl p-5 border"
                  style={{ backgroundColor: "rgba(255,255,255,0.04)", borderColor: "rgba(255,255,255,0.07)" }}>
                  <v.icon size={20} className="mb-3" style={{ color: ORANGE }} />
                  <h4 className="font-montserrat font-bold text-white text-sm mb-1">{v.title}</h4>
                  <p className="font-inter text-xs leading-relaxed" style={{ color: "rgba(255,255,255,0.4)" }}>{v.desc}</p>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── CTA DON — fond BEIGE ── */}
      <section className="py-24 text-center relative" style={{ backgroundColor: BEIGE }}>
        {/* Wave depuis NAVY */}
        <div className="absolute top-0 left-0 right-0">
          <svg viewBox="0 0 1440 60" fill="none">
            <path d="M0,40 C360,80 1080,0 1440,40 L1440,0 L0,0 Z" fill={NAVY} />
          </svg>
        </div>

        <div className="max-w-2xl mx-auto px-4 pt-10 relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}>
            <h2 className="font-montserrat font-bold text-5xl mb-4 leading-tight" style={{ color: NAVY }}>
              Votre don peut<br /><span style={{ color: ORANGE }}>tout changer</span>
            </h2>
            <p className="font-inter mb-10 text-lg" style={{ color: "rgba(19,44,63,0.6)" }}>
              Chaque dirham contribue à nourrir une famille, soutenir un orphelin ou former une personne vers l'autonomie.
            </p>
            <Link href="/don"
              className="inline-flex items-center gap-2 font-montserrat font-bold text-lg px-10 py-4 rounded-full text-white shadow-xl transition-all hover:opacity-90 hover:-translate-y-0.5"
              style={{ backgroundColor: NAVY }}>
              Faire un Don maintenant <ArrowRight size={20} />
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
}
