export interface AtmosphereShot {
  src: string;
  alt: string;
  /** relative row-span for masonry composition */
  size: "sm" | "md" | "lg" | "wide" | "tall";
}

// NOTE: Replace placeholders in `/public/gallery/` with real interior photography.
export const atmosphereShots: AtmosphereShot[] = [
  { src: "/gallery/01.svg", alt: "Барна стійка BUNKER", size: "lg" },
  { src: "/gallery/02.svg", alt: "Лампи Едісона під склепінням", size: "tall" },
  { src: "/gallery/03.svg", alt: "Бронзові деталі інтер'єру", size: "sm" },
  { src: "/gallery/04.svg", alt: "Приготування коктейлю", size: "md" },
  { src: "/gallery/05.svg", alt: "Заклепки та металеві двері", size: "wide" },
  { src: "/gallery/06.svg", alt: "Шафа з віскі", size: "md" },
  { src: "/gallery/07.svg", alt: "Затишна ніша бункера", size: "sm" },
  { src: "/gallery/08.svg", alt: "Дим та світло бару", size: "tall" },
];
