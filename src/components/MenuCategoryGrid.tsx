"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { X } from "lucide-react";
import { withBasePath } from "@/lib/base-path";
import { formatPrice, type MenuCategory } from "@/lib/menu-data";

interface MenuCategoryGridProps {
  category: MenuCategory;
  onSelectItem: (index: number) => void;
  onClose: () => void;
}

export function MenuCategoryGrid({ category, onSelectItem, onClose }: MenuCategoryGridProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.35 }}
      className="fixed inset-0 z-50 flex flex-col bg-bunker-950/97 backdrop-blur-xl"
      onClick={(event) => {
        if (event.target === event.currentTarget) onClose();
      }}
    >
      <div className="flex items-start justify-between gap-4 px-5 pt-[max(1.25rem,env(safe-area-inset-top))] pb-3 sm:px-8">
        <div className="min-w-0">
          <span className="font-body text-[10px] uppercase tracking-[0.4em] text-bronze-light/60">
            Меню
          </span>
          <h3 className="font-serif-display text-gradient-bronze mt-1 truncate text-2xl sm:text-3xl">
            {category.title}
          </h3>
          <p className="mt-1 truncate text-xs text-bone/50">{category.subtitle}</p>
          <span className="mt-3 block h-px w-16 bg-gradient-to-r from-bronze-light/70 to-transparent" />
        </div>
        <button
          onClick={onClose}
          aria-label="Закрити"
          className="glass-panel shrink-0 rounded-full p-2 text-bone/80 transition hover:text-white"
        >
          <X className="h-5 w-5" strokeWidth={1.6} />
        </button>
      </div>

      <div className="flex-1 overflow-y-auto px-4 pb-[max(2rem,env(safe-area-inset-bottom))] pt-6 sm:px-6">
        <div className="mx-auto grid max-w-5xl grid-cols-2 gap-x-4 gap-y-12 sm:grid-cols-3 sm:gap-x-6 sm:gap-y-14 lg:grid-cols-4">
          {category.items.map((item, i) => (
            <motion.button
              key={item.image}
              type="button"
              onClick={() => onSelectItem(i)}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: Math.min(i * 0.05, 0.4), ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -5 }}
              whileTap={{ scale: 0.96 }}
              className="group relative pt-5 text-left"
            >
              <span className="absolute left-1/2 top-0 z-10 -translate-x-1/2 rounded-full border-[1.5px] border-bronze-light/70 bg-gradient-to-b from-[#4a2d13] via-[#2a1808] to-[#150b04] px-4 py-2 text-sm font-semibold tracking-wide text-bronze-light shadow-[0_10px_24px_-8px_rgba(0,0,0,0.95),inset_0_1px_0_rgba(255,214,158,0.25)] transition-transform duration-500 group-hover:scale-110">
                <span className="font-serif-display">{formatPrice(item)}</span>
              </span>

              <div className="bronze-border relative w-full overflow-hidden rounded-[18px] bg-bunker-900/60 shadow-[0_16px_40px_-22px_rgba(0,0,0,0.85)] transition-shadow duration-500 group-hover:shadow-[0_20px_55px_-18px_rgba(182,122,43,0.4)]">
                <div className="relative w-full" style={{ aspectRatio: item.width / item.height }}>
                  <Image
                    src={withBasePath(item.image)}
                    alt={item.title}
                    fill
                    sizes="(min-width: 1024px) 22vw, (min-width: 640px) 30vw, 45vw"
                    className="object-contain p-2 transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                  />
                </div>
              </div>

              <p className="font-display mt-2.5 truncate text-center text-sm tracking-wide text-bone/90">
                {item.title}
              </p>
            </motion.button>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
