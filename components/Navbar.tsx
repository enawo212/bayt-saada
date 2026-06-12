"use client";

import { useState, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, ChevronDown } from "lucide-react";

const NAVY = "#132C3F";
const ORANGE = "#E86F24";

const actions = [
  { label: "Pôle Jeunesse", href: "/actions/pole-jeunesse" },
  { label: "Colis Alimentaire", href: "/actions/colis-alimentaire" },
  { label: "Zakat Al Maal", href: "/actions/zakat-al-maal" },
  { label: "Sadaqa Jariya", href: "/actions/sadaqa-jariya" },
  { label: "Puits", href: "/actions/puits" },
  { label: "Plantation d'Oliviers", href: "/actions/plantation-oliviers" },
  { label: "Fidya", href: "/actions/fidya" },
  { label: "Femmes Veuves & Divorcées", href: "/actions/femmes-veuves" },
  { label: "Planter un Arbre", href: "/actions/planter-un-arbre" },
  { label: "Parrainage d'Orphelin", href: "/actions/parrainage-orphelin" },
  { label: "Kit Scolaire", href: "/actions/kit-scolaire" },
  { label: "Aqiqa", href: "/actions/aqiqa" },
  { label: "AGR — Formation Pro", href: "/actions/agr" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [actionsOpen, setActionsOpen] = useState(false);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const handleMouseEnter = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setActionsOpen(true);
  };

  const handleMouseLeave = () => {
    closeTimer.current = setTimeout(() => setActionsOpen(false), 200);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" || e.key === " ") { e.preventDefault(); setActionsOpen(v => !v); }
    if (e.key === "Escape") setActionsOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50" style={{ backgroundColor: NAVY }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-18 py-4">

          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <div className="w-10 h-10 relative bg-white rounded-lg p-1" style={{ outline: `2px solid ${ORANGE}`, outlineOffset: "2px" }}>
              <Image src="/logo.png" alt="Bayt Saada" fill className="object-contain" />
            </div>
            <span className="font-montserrat font-bold text-xl text-white hidden sm:block">
              Bayt <span style={{ color: ORANGE }}>Saada</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8">
            <Link href="/" className="font-inter text-sm font-medium transition-colors text-white/65 hover:text-white">
              Accueil
            </Link>

            <div className="relative"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <button
                className="flex items-center gap-1 font-inter text-sm font-medium text-white/65 hover:text-white transition-colors"
                aria-haspopup="true"
                aria-expanded={actionsOpen}
                onKeyDown={handleKeyDown}
              >
                Nos Actions <ChevronDown size={15} className={`transition-transform duration-200 ${actionsOpen ? "rotate-180" : ""}`} />
              </button>
              {actionsOpen && (
                <div
                  className="absolute top-full left-0 w-64 rounded-2xl shadow-2xl border py-2 z-50 scrollbar-hidden"
                  style={{ backgroundColor: NAVY, borderColor: "rgba(255,255,255,0.08)", maxHeight: "70vh", overflowY: "auto" }}
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                >
                  {/* pont invisible pour combler le gap */}
                  <div className="absolute -top-3 left-0 right-0 h-3" />
                  {actions.map((action) => (
                    <Link key={action.href} href={action.href}
                      className="block px-4 py-2.5 text-sm font-inter transition-colors text-white/60 hover:text-white hover:bg-white/5"
                      onClick={() => setActionsOpen(false)}
                    >
                      {action.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link href="/contact" className="font-inter text-sm font-medium text-white/65 hover:text-white transition-colors">
              Contact
            </Link>

            <Link href="/don" className="font-montserrat font-bold text-sm px-5 py-2.5 rounded-full text-white transition-all hover:opacity-90"
              style={{ backgroundColor: ORANGE }}>
              Faire un Don
            </Link>
          </nav>

          {/* Mobile burger */}
          <button className="lg:hidden text-white" onClick={() => setMenuOpen(!menuOpen)} aria-label="Menu">
            {menuOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="lg:hidden border-t" style={{ backgroundColor: NAVY, borderColor: "rgba(255,255,255,0.08)" }}>
          <div className="max-w-7xl mx-auto px-4 py-4 flex flex-col gap-1">
            <Link href="/" className="py-2.5 font-inter font-medium text-white/70 hover:text-white" onClick={() => setMenuOpen(false)}>Accueil</Link>
            <button
              className="py-2.5 font-inter font-medium text-white/70 text-left flex items-center gap-1"
              onClick={() => setActionsOpen(!actionsOpen)}
            >
              Nos Actions <ChevronDown size={15} className={`transition-transform ${actionsOpen ? "rotate-180" : ""}`} />
            </button>
            {actionsOpen && (
              <div className="pl-4 flex flex-col gap-0.5 border-l ml-2" style={{ borderColor: ORANGE }}>
                {actions.map((action) => (
                  <Link key={action.href} href={action.href}
                    className="py-2 text-sm text-white/55 hover:text-white font-inter"
                    onClick={() => setMenuOpen(false)}
                  >
                    {action.label}
                  </Link>
                ))}
              </div>
            )}
            <Link href="/contact" className="py-2.5 font-inter font-medium text-white/70 hover:text-white" onClick={() => setMenuOpen(false)}>Contact</Link>
            <Link href="/don"
              className="mt-3 text-center font-montserrat font-bold px-6 py-3 rounded-full text-white"
              style={{ backgroundColor: ORANGE }}
              onClick={() => setMenuOpen(false)}
            >
              Faire un Don
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
