"use client";

import { AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { menuCategories } from "@/lib/menu-data";
import { MenuCard } from "./MenuCard";
import { MenuCategoryGrid } from "./MenuCategoryGrid";
import { MenuLightbox } from "./MenuLightbox";
import { Reveal } from "./Reveal";

export function MenuSection() {
  const [activeCategory, setActiveCategory] = useState<number | null>(null);
  const [activeItem, setActiveItem] = useState<number | null>(null);

  useEffect(() => {
    if (activeCategory === null) return;
    const previousOverflow = document.documentElement.style.overflow;
    document.documentElement.style.overflow = "hidden";
    return () => {
      document.documentElement.style.overflow = previousOverflow;
    };
  }, [activeCategory]);

  useEffect(() => {
    if (activeCategory === null) return;
    function handleKeyDown(event: KeyboardEvent) {
      if (event.key !== "Escape") return;
      if (activeItem !== null) setActiveItem(null);
      else setActiveCategory(null);
    }
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [activeCategory, activeItem]);

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
              index={i}
              onOpen={() => {
                setActiveCategory(i);
                setActiveItem(null);
              }}
            />
          </Reveal>
        ))}
      </div>

      <AnimatePresence>
        {activeCategory !== null && activeItem === null && (
          <MenuCategoryGrid
            category={menuCategories[activeCategory]}
            onSelectItem={setActiveItem}
            onClose={() => setActiveCategory(null)}
          />
        )}
      </AnimatePresence>

      <AnimatePresence>
        {activeCategory !== null && activeItem !== null && (
          <MenuLightbox
            category={menuCategories[activeCategory]}
            index={activeItem}
            onIndexChange={setActiveItem}
            onClose={() => setActiveItem(null)}
          />
        )}
      </AnimatePresence>
    </section>
  );
}

