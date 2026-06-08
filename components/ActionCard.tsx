"use client";

import Link from "next/link";
import { LucideIcon } from "lucide-react";

interface ActionCardProps {
  title: string;
  description: string;
  href: string;
  icon: LucideIcon;
  color?: string;
}

export default function ActionCard({ title, description, href, icon: Icon, color = "bg-orange/10" }: ActionCardProps) {
  return (
    <Link
      href={href}
      className="group block bg-white rounded-2xl p-6 shadow-sm hover:shadow-lg transition-all duration-300 border border-transparent hover:border-orange/20"
    >
      <div className={`w-12 h-12 ${color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
        <Icon size={24} className="text-orange" />
      </div>
      <h3 className="font-montserrat font-bold text-navy text-lg mb-2 group-hover:text-orange transition-colors">
        {title}
      </h3>
      <p className="font-inter text-navy/60 text-sm leading-relaxed">{description}</p>
      <div className="mt-4 flex items-center gap-1 text-orange text-sm font-montserrat font-semibold opacity-0 group-hover:opacity-100 transition-opacity">
        En savoir plus →
      </div>
    </Link>
  );
}
