import type { MetadataRoute } from "next";
import { withBasePath } from "@/lib/base-path";

// Required for `output: "export"` — this route must be fully static.
export const dynamic = "force-static";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "BUNKER — секретний коктейльний бар",
    short_name: "BUNKER",
    description: "Бар · Кухня · Коктейлі. Маяковського 1, Одеса.",
    start_url: withBasePath("/"),
    display: "standalone",
    background_color: "#0d0d0d",
    theme_color: "#0d0d0d",
    icons: [
      {
        src: withBasePath("/icons/icon-192.svg"),
        sizes: "192x192",
        type: "image/svg+xml",
      },
      {
        src: withBasePath("/icons/icon-512.svg"),
        sizes: "512x512",
        type: "image/svg+xml",
      },
    ],
  };
}
