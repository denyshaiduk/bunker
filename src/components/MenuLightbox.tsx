"use client";

import { AnimatePresence, motion, type PanInfo } from "framer-motion";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { useCallback, useEffect, useState } from "react";
import { formatPrice, type MenuCategory } from "@/lib/menu-data";
import { ZoomableImage } from "./ZoomableImage";

interface MenuLightboxProps {
  category: MenuCategory;
  index: number;
  onIndexChange: (index: number) => void;
  onClose: () => void;
}

export function MenuLightbox({ category, index, onIndexChange, onClose }: MenuLightboxProps) {
  const [zoomed, setZoomed] = useState(false);
  const items = category.items;
  const item = items[index];

  const go = useCallback(
    (direction: 1 | -1) => {
      const next = (index + direction + items.length) % items.length;
      onIndexChange(next);
    },
    [index, items.length, onIndexChange]
  );

  useEffect(() => {
    if (items.length < 2) return;
    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "ArrowLeft") go(-1);
      else if (event.key === "ArrowRight") go(1);
    }
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [go, items.length]);

  function handleDragEnd(_: unknown, info: PanInfo) {
    if (zoomed) return;
    if (info.offset.x < -80) go(1);
    else if (info.offset.x > 80) go(-1);
  }

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
      <div className="flex items-center justify-between px-5 pt-[max(1.25rem,env(safe-area-inset-top))]">
        <span className="font-body text-xs uppercase tracking-[0.3em] text-bone/50">
          {category.title} · {index + 1} / {items.length}
        </span>
        <button
          onClick={onClose}
          aria-label="Закрити"
          className="glass-panel rounded-full p-2 text-bone/80 transition hover:text-white"
        >
          <X className="h-5 w-5" strokeWidth={1.6} />
        </button>
      </div>

      <div className="relative flex-1 overflow-hidden">
        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={item.image}
            className="absolute inset-0"
            drag={zoomed || items.length < 2 ? false : "x"}
            dragElastic={0.15}
            dragConstraints={{ left: 0, right: 0 }}
            onDragEnd={handleDragEnd}
            initial={{ opacity: 0, x: 24 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -24 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
          >
            <ZoomableImage src={item.image} alt={item.title} onZoomChange={setZoomed} />
          </motion.div>
        </AnimatePresence>

        {items.length > 1 && (
          <>
            <button
              onClick={() => go(-1)}
              aria-label="Попередня позиція"
              className="absolute left-2 top-1/2 hidden -translate-y-1/2 rounded-full p-3 text-bone/70 transition hover:text-white sm:block"
            >
              <ChevronLeft className="h-7 w-7" strokeWidth={1.5} />
            </button>
            <button
              onClick={() => go(1)}
              aria-label="Наступна позиція"
              className="absolute right-2 top-1/2 hidden -translate-y-1/2 rounded-full p-3 text-bone/70 transition hover:text-white sm:block"
            >
              <ChevronRight className="h-7 w-7" strokeWidth={1.5} />
            </button>
          </>
        )}
      </div>

      <div className="px-5 pb-[max(1.5rem,env(safe-area-inset-bottom))] pt-3 text-center">
        <h3 className="font-display text-gradient-bronze text-xl">{item.title}</h3>
        <p className="mt-1.5 inline-block rounded-full border border-bronze-light/50 bg-bunker-900/70 px-3.5 py-1 text-sm font-semibold text-bronze-light">
          {formatPrice(item)}
        </p>
      </div>
    </motion.div>
  );
}

