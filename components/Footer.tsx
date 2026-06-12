"use client";

import Link from "next/link";
import Image from "next/image";
import { MapPin, Mail } from "lucide-react";

const NAVY = "#132C3F";
const ORANGE = "#E86F24";

export default function Footer() {
  return (
    <footer style={{ backgroundColor: NAVY }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Logo & description */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 relative bg-white rounded-lg p-1">
                <Image src="/logo.png" alt="Bayt Saada" fill className="object-contain" />
              </div>
              <span className="font-montserrat font-bold text-xl text-white">
                Bayt <span style={{ color: ORANGE }}>Saada</span>
              </span>
            </div>
            <p className="font-inter text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.65)" }}>
              Association caritative basée à Tanger, au service des familles nécessiteuses et des communautés vulnérables.
            </p>
          </div>

          {/* Nos Actions */}
          <div>
            <h4 className="font-montserrat font-bold text-white mb-5 text-xs uppercase tracking-widest">Nos Actions</h4>
            <ul className="space-y-2.5">
              {[
                ["Colis Alimentaire", "/actions/colis-alimentaire"],
                ["Parrainage d'Orphelin", "/actions/parrainage-orphelin"],
                ["Pôle Jeunesse", "/actions/pole-jeunesse"],
                ["Zakat Al Maal", "/actions/zakat-al-maal"],
                ["Sadaqa Jariya", "/actions/sadaqa-jariya"],
                ["Puits", "/actions/puits"],
                ["AGR — Formation", "/actions/agr"],
              ].map(([label, href]) => (
                <li key={href}>
                  <Link href={href} className="font-inter text-sm transition-colors" style={{ color: "rgba(255,255,255,0.65)" }}
                    onMouseEnter={e => (e.target as HTMLElement).style.color = ORANGE}
                    onMouseLeave={e => (e.target as HTMLElement).style.color = "rgba(255,255,255,0.65)"}
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Liens rapides */}
          <div>
            <h4 className="font-montserrat font-bold text-white mb-5 text-xs uppercase tracking-widest">Liens rapides</h4>
            <ul className="space-y-2.5">
              {[["Accueil", "/"], ["Faire un Don", "/don"], ["Contact", "/contact"]].map(([label, href]) => (
                <li key={href}>
                  <Link href={href} className="font-inter text-sm transition-colors" style={{ color: "rgba(255,255,255,0.65)" }}
                    onMouseEnter={e => (e.target as HTMLElement).style.color = ORANGE}
                    onMouseLeave={e => (e.target as HTMLElement).style.color = "rgba(255,255,255,0.65)"}
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-montserrat font-bold text-white mb-5 text-xs uppercase tracking-widest">Contact</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-sm font-inter" style={{ color: "rgba(255,255,255,0.65)" }}>
                <MapPin size={15} className="mt-0.5 shrink-0" style={{ color: ORANGE }} />
                Tanger, Maroc
              </li>
              <li className="flex items-start gap-2 text-sm font-inter">
                <Mail size={15} className="mt-0.5 shrink-0" style={{ color: ORANGE }} />
                <a href="mailto:contact@baytsaada.org" className="transition-colors" style={{ color: "rgba(255,255,255,0.65)" }}
                  onMouseEnter={e => (e.target as HTMLElement).style.color = ORANGE}
                  onMouseLeave={e => (e.target as HTMLElement).style.color = "rgba(255,255,255,0.65)"}
                >
                  contact@baytsaada.org
                </a>
              </li>
            </ul>
            <div className="flex gap-2 mt-5">
              {["IG", "FB"].map(s => (
                <a key={s} href="#" className="w-9 h-9 rounded-full flex items-center justify-center text-xs font-bold text-white transition-colors font-montserrat"
                  style={{ backgroundColor: "rgba(255,255,255,0.08)" }}
                  onMouseEnter={e => (e.target as HTMLElement).style.backgroundColor = ORANGE}
                  onMouseLeave={e => (e.target as HTMLElement).style.backgroundColor = "rgba(255,255,255,0.08)"}
                >
                  {s}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t flex flex-col sm:flex-row justify-between items-center gap-4"
          style={{ borderColor: "rgba(255,255,255,0.07)" }}>
          <p className="font-inter text-xs" style={{ color: "rgba(255,255,255,0.55)" }}>
            © {new Date().getFullYear()} Bayt Saada. Tous droits réservés.
          </p>
          <p className="font-inter text-xs" style={{ color: "rgba(255,255,255,0.55)" }}>
            Association caritative — Tanger, Maroc
          </p>
        </div>
      </div>
    </footer>
  );
}
