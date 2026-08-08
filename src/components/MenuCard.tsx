"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { withBasePath } from "@/lib/base-path";
import { categoryMinPrice, formatPrice, type MenuCategory } from "@/lib/menu-data";

interface MenuCardProps {
  category: MenuCategory;
  onOpen: () => void;
}

export function MenuCard({ category, onOpen }: MenuCardProps) {
  const cover = category.items[0];
  const aspectRatio = cover.width / cover.height;
  const minPrice = categoryMinPrice(category);
  const priceFrom = category.items.length > 1 || cover.priceFrom;

  return (
    <motion.button
      type="button"
      onClick={onOpen}
      whileHover={{ y: -6 }}
      whileTap={{ scale: 0.97 }}
      className="bronze-border group relative block w-full overflow-hidden rounded-[22px] bg-bunker-900/60 text-left shadow-[0_20px_50px_-25px_rgba(0,0,0,0.85)] transition-shadow duration-500 hover:shadow-[0_25px_70px_-20px_rgba(182,122,43,0.35)]"
    >
      <span className="rivet left-3 top-3" />
      <span className="rivet right-3 top-3" />
      <span className="rivet bottom-3 left-3" />
      <span className="rivet bottom-3 right-3" />

      <div className="relative w-full" style={{ aspectRatio }}>
        <Image
          src={withBasePath(cover.image)}
          alt={`Меню — ${category.title}`}
          fill
          sizes="(min-width: 1280px) 23vw, (min-width: 1024px) 30vw, (min-width: 640px) 45vw, 90vw"
          className="object-contain p-2.5 transition-transform duration-700 ease-out group-hover:scale-[1.02] sm:p-3"
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-bunker-950/70 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
        {category.items.length > 1 && (
          <span className="glass-panel absolute right-3 top-3 rounded-full px-3 py-1 text-[10px] uppercase tracking-[0.2em] text-bronze-light/90">
            {category.items.length} позицій
          </span>
        )}
      </div>

      <div className="flex items-center justify-between gap-3 px-4 py-3.5 sm:px-5 sm:py-4">
        <div className="min-w-0">
          <h3 className="font-display truncate text-lg text-bone">{category.title}</h3>
          <p className="truncate text-xs text-bone/50">{category.subtitle}</p>
        </div>
        <span className="shrink-0 rounded-full border border-bronze-light/50 bg-bunker-900/70 px-3 py-1 text-xs font-semibold text-bronze-light">
          {priceFrom ? `від ${minPrice} ₴` : formatPrice({ price: minPrice })}
        </span>
      </div>
    </motion.button>
  );
}

