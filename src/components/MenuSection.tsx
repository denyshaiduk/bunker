"use client";

import { AnimatePresence } from "framer-motion";
import { useState } from "react";
import { menuCategories } from "@/lib/menu-data";
import { MenuCard } from "./MenuCard";
import { MenuLightbox } from "./MenuLightbox";
import { Reveal } from "./Reveal";

export function MenuSection() {
  const [activeCategory, setActiveCategory] = useState<number | null>(null);
  const [activeItem, setActiveItem] = useState(0);

  return (
    <section id="menu" className="relative px-4 py-16 sm:px-6 sm:py-20 md:px-8 md:py-24 lg:py-28">
      <Reveal className="mx-auto mb-10 max-w-xl text-center sm:mb-12 md:mb-14">
        <span className="font-body text-[11px] uppercase tracking-[0.5em] text-bronze-light/70">
          Карта бару
        </span>
        <h2 className="font-serif-display text-gradient-bronze mt-3 text-[clamp(2.25rem,7vw,3.75rem)]">
          Меню
        </h2>
      </Reveal>

      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3 xl:grid-cols-4 xl:gap-6">
        {menuCategories.map((category, i) => (
          <Reveal key={category.slug} delay={(i % 3) * 0.08}>
            <MenuCard
              category={category}
              onOpen={() => {
                setActiveCategory(i);
                setActiveItem(0);
              }}
            />
          </Reveal>
        ))}
      </div>

      <AnimatePresence>
        {activeCategory !== null && (
          <MenuLightbox
            category={menuCategories[activeCategory]}
            index={activeItem}
            onIndexChange={setActiveItem}
            onClose={() => setActiveCategory(null)}
          />
        )}
      </AnimatePresence>
    </section>
  );
}

