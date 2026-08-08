import { withBasePath } from "@/lib/base-path";
import { FullMenu } from "./FullMenu";
import { Reveal } from "./Reveal";

const MENU_PDF = withBasePath("/bunker-menu.pdf");

export function MenuSection() {
  return (
    <section id="menu" className="relative min-h-screen px-4 py-16 sm:px-6 sm:py-20 md:px-8 md:py-24 lg:py-28">
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
          className="mt-4 inline-block text-[11px] uppercase tracking-[0.2em] text-bone/40 underline-offset-4 transition hover:text-bone/70 hover:underline"
        >
          Завантажити PDF
        </a>
      </Reveal>

      <Reveal>
        <FullMenu />
      </Reveal>
    </section>
  );
}



