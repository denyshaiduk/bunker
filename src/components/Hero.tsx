"use client";

import { motion } from "framer-motion";
import { ArrowDown, MapPin } from "lucide-react";

export function Hero() {
  function scrollToMenu() {
    document.getElementById("menu")?.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <section
      id="hero"
      className="relative flex min-h-[100svh] flex-col items-center justify-center overflow-hidden px-4 pb-10 text-center sm:px-6"
    >
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(120%_90%_at_50%_20%,rgba(182,122,43,0.16),transparent_55%)]" />
        <div
          className="animate-flicker absolute inset-x-0 top-0 h-1/2 bg-[radial-gradient(60%_60%_at_50%_0%,rgba(255,220,170,0.09),transparent_70%)]"
        />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0)_0%,rgba(13,13,13,0.85)_100%)]" />
        <div className="absolute inset-0 bg-[repeating-linear-gradient(90deg,rgba(255,255,255,0.015)_0px,transparent_2px,transparent_64px)]" />
      </div>

      <motion.p
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.1 }}
        className="font-body text-[11px] uppercase tracking-[0.5em] text-bronze-light/80"
      >
        Секретний об&apos;єкт
      </motion.p>

      <motion.h1
        initial={{ opacity: 0, y: 30, scale: 0.94, filter: "blur(10px)" }}
        animate={{ opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }}
        transition={{ duration: 1.1, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
        className="font-display text-gradient-bronze mt-4 text-[clamp(3.5rem,19vw,9rem)] leading-none"
      >
        BUNKER
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 14 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="font-serif-display mt-4 text-base tracking-[0.3em] text-bone/80 sm:text-lg"
      >
        Бар · Кухня · Коктейлі
      </motion.p>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.7 }}
        className="mt-3 flex flex-wrap items-center justify-center gap-2 text-center text-sm text-bone/55"
      >
        <MapPin className="h-4 w-4 shrink-0 text-bronze" strokeWidth={1.6} />
        <span>вул. Маяковського 1, Одеса</span>
      </motion.div>

      <motion.button
        onClick={scrollToMenu}
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.9 }}
        whileHover={{ scale: 1.04 }}
        whileTap={{ scale: 0.97 }}
        className="glass-panel bronze-glow mt-8 rounded-full px-7 py-3.5 font-body text-sm uppercase tracking-[0.25em] text-bone transition-colors hover:text-white sm:mt-10 sm:px-8 sm:py-4"
      >
        Переглянути меню
      </motion.button>

      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-4 text-bronze/70 sm:bottom-8"
        aria-hidden
      >
        <ArrowDown className="h-6 w-6" strokeWidth={1.5} />
      </motion.div>
    </section>
  );
}
