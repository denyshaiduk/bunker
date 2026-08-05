"use client";

import { BookOpen, Home, MapPin, Phone } from "lucide-react";
import type { MouseEvent } from "react";

const navItems = [
  { icon: Home, href: "#hero", label: "Головна" },
  { icon: BookOpen, href: "#menu", label: "Меню" },
  { icon: MapPin, href: "#contacts", label: "Контакти" },
  { icon: Phone, href: "tel:+380000000000", label: "Телефон" },
];

export function BottomNav() {
  function handleClick(event: MouseEvent<HTMLAnchorElement>, href: string) {
    if (href.startsWith("#")) {
      event.preventDefault();
      document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
    }
  }

  return (
    <nav className="fixed inset-x-0 bottom-0 z-40 flex justify-center px-4 pb-[max(1rem,env(safe-area-inset-bottom))]">
      <div className="glass-panel flex items-center gap-2 rounded-full px-3 py-3 shadow-[0_10px_40px_-10px_rgba(0,0,0,0.7)]">
        {navItems.map(({ icon: Icon, href, label }) => (
          <a
            key={label}
            href={href}
            aria-label={label}
            onClick={(event) => handleClick(event, href)}
            className="flex h-11 w-11 items-center justify-center rounded-full text-bone/70 transition-all duration-300 hover:bg-bronze/15 hover:text-bronze-light active:scale-90"
          >
            <Icon className="h-5 w-5" strokeWidth={1.6} />
          </a>
        ))}
      </div>
    </nav>
  );
}
