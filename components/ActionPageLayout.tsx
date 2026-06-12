"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { LucideIcon, ArrowRight } from "lucide-react";

const NAVY = "#132C3F";
const ORANGE = "#E86F24";
const BEIGE = "#F5F0E8";

interface ActionPageLayoutProps {
  icon: LucideIcon;
  label: string;
  title: string;
  subtitle: string;
  description: React.ReactNode;
  montants?: { value: string; label: string }[];
  children?: React.ReactNode;
}

export default function ActionPageLayout({
  icon: Icon,
  label,
  title,
  subtitle,
  description,
  montants,
  children,
}: ActionPageLayoutProps) {
  return (
    <div style={{ backgroundColor: NAVY }}>

      {/* HERO — fond NAVY */}
      <section className="pt-36 pb-24 text-center relative overflow-hidden" style={{ backgroundColor: NAVY }}>
        <div className="absolute inset-0 pointer-events-none"
          style={{ background: `radial-gradient(ellipse at center top, rgba(232,111,36,0.06), transparent 60%)` }} />
        <div className="max-w-3xl mx-auto px-4 relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <div className="w-14 h-14 rounded-2xl flex items-center justify-center mx-auto mb-6"
              style={{ backgroundColor: "rgba(232,111,36,0.12)" }}>
              <Icon size={28} style={{ color: ORANGE }} />
            </div>
            <span className="inline-block font-inter text-xs font-semibold uppercase tracking-widest px-4 py-1.5 rounded-full mb-4"
              style={{ backgroundColor: "rgba(232,111,36,0.15)", color: ORANGE }}>
              {label}
            </span>
            <h1 className="font-montserrat font-bold text-4xl sm:text-5xl mb-4 leading-tight text-white">
              {title}
            </h1>
            <p className="font-inter text-lg leading-relaxed" style={{ color: "rgba(255,255,255,0.75)" }}>
              {subtitle}
            </p>
          </motion.div>
        </div>

        {/* Wave vers BEIGE */}
        <div className="absolute bottom-0 left-0 right-0" aria-hidden="true">
          <svg viewBox="0 0 1440 50" fill="none">
            <path d="M0,30 C360,60 1080,0 1440,30 L1440,50 L0,50 Z" fill={BEIGE} />
          </svg>
        </div>
      </section>

      {/* CONTENT — fond BEIGE */}
      <section className="py-20" style={{ backgroundColor: BEIGE }}>
        <div className="max-w-3xl mx-auto px-4 sm:px-6">

          {/* Description */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="font-inter text-base leading-relaxed space-y-4"
            style={{ color: "rgba(19,44,63,0.7)" }}>
            {description}
          </motion.div>

          {/* Montants suggérés */}
          {montants && montants.length > 0 && (
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }} className="mt-12">
              <h3 className="font-montserrat font-bold text-xl mb-6" style={{ color: NAVY }}>
                Montants suggérés
              </h3>
              <div className="grid sm:grid-cols-3 gap-4">
                {montants.map((m) => (
                  <div key={m.value} className="bg-white rounded-2xl p-5 text-center border-2"
                    style={{ borderColor: "rgba(232,111,36,0.2)" }}>
                    <div className="font-montserrat font-bold text-2xl mb-1" style={{ color: ORANGE }}>{m.value}</div>
                    <div className="font-inter text-sm" style={{ color: "rgba(19,44,63,0.6)" }}>{m.label}</div>
                  </div>
                ))}
              </div>
            </motion.div>
          )}

          {/* Children (formulaires, etc.) */}
          {children}
        </div>
      </section>

      {/* CTA — fond NAVY */}
      <section className="py-20 text-center relative overflow-hidden" style={{ backgroundColor: NAVY }}>
        <div className="absolute top-0 left-0 right-0" aria-hidden="true">
          <svg viewBox="0 0 1440 50" fill="none">
            <path d="M0,20 C360,-10 1080,50 1440,20 L1440,0 L0,0 Z" fill={BEIGE} />
          </svg>
        </div>
        <div className="max-w-xl mx-auto px-4 pt-8 relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h3 className="font-montserrat font-bold text-3xl text-white mb-3">
              Prêt à agir ?
            </h3>
            <p className="font-inter mb-8" style={{ color: "rgba(255,255,255,0.70)" }}>
              100% de votre don est reversé aux bénéficiaires.
            </p>
            <Link href="/don"
              className="inline-flex items-center gap-2 font-montserrat font-bold px-8 py-4 rounded-full text-white transition-all hover:opacity-90"
              style={{ backgroundColor: ORANGE }}>
              Faire un Don <ArrowRight size={18} />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
