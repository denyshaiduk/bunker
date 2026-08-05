import { MapPin, Phone } from "lucide-react";
import { Reveal } from "./Reveal";
import { InstagramIcon, TikTokIcon } from "./icons/TikTokIcon";

const ADDRESS_QUERY = encodeURIComponent("Маяковського 1, Одеса");
const PHONE_NUMBER = "+380000000000";

export function ContactSection() {
  return (
    <section id="contacts" className="relative px-4 py-16 sm:px-6 sm:py-20 md:px-8 md:py-24 lg:py-28">
      <Reveal className="mx-auto mb-10 max-w-xl text-center sm:mb-12 md:mb-14">
        <span className="font-body text-[11px] uppercase tracking-[0.5em] text-bronze-light/70">
          Знайти нас
        </span>
        <h2 className="font-serif-display text-gradient-bronze mt-3 text-[clamp(2.25rem,7vw,3.75rem)]">
          Контакти
        </h2>
      </Reveal>

      <Reveal className="mx-auto max-w-sm sm:max-w-md">
        <div className="glass-panel bronze-glow rounded-[20px] p-6 text-center sm:rounded-[24px] sm:p-8">
          <MapPin className="mx-auto h-6 w-6 text-bronze-light" strokeWidth={1.6} />
          <p className="font-serif-display mt-4 text-lg text-bone">вул. Маяковського 1</p>
          <p className="text-sm text-bone/50">Одеса</p>

          <a
            href={`https://www.google.com/maps/search/?api=1&query=${ADDRESS_QUERY}`}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex w-full items-center justify-center rounded-full bg-gradient-to-r from-bronze-dark via-bronze to-bronze-light px-6 py-3.5 font-body text-sm uppercase tracking-[0.25em] text-bunker-950 transition-transform hover:scale-[1.02] active:scale-95 sm:mt-8 sm:py-4"
          >
            Побудувати маршрут
          </a>

          <div className="mt-6 flex items-center justify-center gap-5 border-t border-bronze/15 pt-6 sm:mt-8">
            <a
              href={`tel:${PHONE_NUMBER}`}
              aria-label="Телефон"
              className="rounded-full p-3 text-bone/70 transition hover:text-bronze-light"
            >
              <Phone className="h-5 w-5" strokeWidth={1.6} />
            </a>
            <a
              href="https://instagram.com/bunker.bar"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="rounded-full p-3 text-bone/70 transition hover:text-bronze-light"
            >
              <InstagramIcon className="h-5 w-5" />
            </a>
            <a
              href="https://tiktok.com/@bunker.bar"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="TikTok"
              className="rounded-full p-3 text-bone/70 transition hover:text-bronze-light"
            >
              <TikTokIcon className="h-5 w-5" />
            </a>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
