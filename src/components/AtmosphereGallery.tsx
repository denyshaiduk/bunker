"use client";

import Image from "next/image";
import { atmosphereShots } from "@/lib/gallery-data";
import { withBasePath } from "@/lib/base-path";
import { Reveal } from "./Reveal";

const sizeToAspect: Record<string, string> = {
  sm: "4 / 5",
  md: "3 / 4",
  lg: "4 / 5",
  wide: "16 / 10",
  tall: "3 / 5",
};

export function AtmosphereGallery() {
  return (
    <section className="relative px-4 py-16 sm:px-6 sm:py-20 md:px-8 md:py-24 lg:py-28">
      <Reveal className="mx-auto mb-10 max-w-xl text-center sm:mb-12 md:mb-14">
        <span className="font-body text-[11px] uppercase tracking-[0.5em] text-bronze-light/70">
          Всередині об'єкта
        </span>
        <h2 className="font-serif-display text-gradient-bronze mt-3 text-[clamp(2.25rem,7vw,3.75rem)]">
          Атмосфера
        </h2>
      </Reveal>

      <div className="mx-auto max-w-6xl columns-2 gap-3 sm:columns-3 sm:gap-4 lg:columns-4">
        {atmosphereShots.map((shot, i) => (
          <Reveal
            key={shot.src}
            delay={(i % 4) * 0.08}
            className="mb-3 break-inside-avoid sm:mb-4"
          >
            <div
              className="bronze-border group relative overflow-hidden rounded-[20px] bg-bunker-900/50"
              style={{ aspectRatio: sizeToAspect[shot.size] }}
            >
              <Image
                src={withBasePath(shot.src)}
                alt={shot.alt}
                fill
                sizes="(min-width: 640px) 33vw, 50vw"
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-bunker-950/60 via-transparent to-transparent" />
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
