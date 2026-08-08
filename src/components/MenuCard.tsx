"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Clock } from "lucide-react";
import { withBasePath } from "@/lib/base-path";
import { categoryMinPrice, formatPrice, type MenuCategory } from "@/lib/menu-data";

interface MenuCardProps {
  category: MenuCategory;
  index: number;
  onOpen: () => void;
}

export function MenuCard({ category, index, onOpen }: MenuCardProps) {
  const cover = category.items[0];
  const aspectRatio = cover.width / cover.height;
  const minPrice = categoryMinPrice(category);
  const priceFrom = category.items.length > 1 || cover.priceFrom;
  const comingSoon = category.comingSoon;

  return (
    <motion.button
      type="button"
      onClick={onOpen}
      disabled={comingSoon}
      whileHover={comingSoon ? undefined : { y: -8 }}
      whileTap={comingSoon ? undefined : { scale: 0.97 }}
      className={`bronze-border group relative block w-full overflow-hidden rounded-[26px] bg-gradient-to-b from-bunker-900/80 to-bunker-950/80 text-left shadow-[0_25px_60px_-28px_rgba(0,0,0,0.9)] transition-shadow duration-500 ${
        comingSoon
          ? "cursor-not-allowed opacity-70"
          : "hover:shadow-[0_30px_80px_-20px_rgba(182,122,43,0.4)]"
      }`}
    >
      <span className="rivet left-3 top-3" />
      <span className="rivet right-3 top-3" />
      <span className="rivet bottom-3 left-3" />
      <span className="rivet bottom-3 right-3" />

      <span className="font-serif-display pointer-events-none absolute -left-1 -top-2 z-10 text-[3.25rem] leading-none text-bronze-light/10 transition-colors duration-500 group-hover:text-bronze-light/20 sm:text-[3.75rem]">
        {String(index + 1).padStart(2, "0")}
      </span>

      <div className="relative w-full" style={{ aspectRatio }}>
        <Image
          src={withBasePath(cover.image)}
          alt={`Меню — ${category.title}`}
          fill
          sizes="(min-width: 1280px) 23vw, (min-width: 1024px) 30vw, (min-width: 640px) 45vw, 90vw"
          className={`object-contain p-2.5 transition-transform duration-700 ease-out sm:p-3 ${
            comingSoon ? "grayscale" : "group-hover:scale-[1.04]"
          }`}
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-bunker-950/80 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
        {comingSoon ? (
          <span className="glass-panel absolute right-3 top-3 flex items-center gap-1.5 rounded-full px-3 py-1 text-[10px] uppercase tracking-[0.2em] text-bone/80">
            <Clock className="h-3 w-3" strokeWidth={1.8} />
            Скоро в меню
          </span>
        ) : (
          category.items.length > 1 && (
            <span className="glass-panel absolute right-3 top-3 rounded-full px-3 py-1 text-[10px] uppercase tracking-[0.2em] text-bronze-light/90">
              {category.items.length} позицій
            </span>
          )
        )}
      </div>

      <div className="relative flex items-center justify-between gap-3 border-t border-bronze-light/10 px-4 py-4 sm:px-5">
        <div className="min-w-0">
          <h3 className="font-display truncate text-lg text-bone sm:text-xl">{category.title}</h3>
          <p className="mt-0.5 truncate text-xs text-bone/50">{category.subtitle}</p>
        </div>
        {comingSoon ? (
          <span className="shrink-0 rounded-full border border-bone/20 bg-bunker-900/70 px-4 py-1.5 text-xs uppercase tracking-[0.15em] text-bone/50">
            Скоро
          </span>
        ) : (
          <span className="font-serif-display shrink-0 rounded-full border border-bronze-light/60 bg-gradient-to-b from-[#43290f] to-[#170c05] px-4 py-1.5 text-sm text-bronze-light shadow-[0_8px_20px_-8px_rgba(0,0,0,0.9)] transition-transform duration-500 group-hover:scale-105">
            {priceFrom ? `від ${minPrice} ₴` : formatPrice({ price: minPrice })}
          </span>
        )}
      </div>
    </motion.button>
  );
}


