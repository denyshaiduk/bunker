// On GitHub Pages the app is served from /barbunker/ (see next.config.ts),
// so every root-relative asset URL (images, icons, manifest) needs this
// prefix. `next/image`'s automatic basePath handling only kicks in when the
// built-in optimizer is used — with `images.unoptimized: true` (required for
// static export) it is not applied, so we prefix manually.
export const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export function withBasePath(path: string): string {
  return `${BASE_PATH}${path}`;
}
