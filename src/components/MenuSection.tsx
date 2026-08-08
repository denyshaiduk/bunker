"use client";

import { withBasePath } from "@/lib/base-path";
import { Reveal } from "./Reveal";

const MENU_PDF = withBasePath("/bunker-menu.pdf");

export function MenuSection() {
  return (
    <section id="menu" className="relative px-4 py-16 sm:px-6 sm:py-20 md:px-8 md:py-24 lg:py-28">
      <Reveal className="mx-auto mb-8 max-w-xl text-center sm:mb-10">
        <span className="font-body text-[11px] uppercase tracking-[0.5em] text-bronze-light/70">
          Карта бару
        </span>
        <h2 className="font-serif-display text-gradient-bronze mt-3 text-[clamp(2.25rem,7vw,3.75rem)]">
          Меню
        </h2>
        <a
          href={MENU_PDF}
          target="_blank"
          rel="noopener noreferrer"
          className="glass-panel mt-5 inline-block rounded-full px-5 py-2 text-xs uppercase tracking-[0.2em] text-bone/80 transition hover:text-white"
        >
          Відкрити PDF
        </a>
      </Reveal>

      <Reveal className="mx-auto max-w-4xl">
        <div className="bronze-border overflow-hidden rounded-[18px] bg-bunker-900/40">
          <iframe
            src={MENU_PDF}
            title="Меню BUNKER"
            className="h-[80vh] min-h-[520px] w-full"
            loading="lazy"
          />
        </div>
      </Reveal>
    </section>
  );
}


