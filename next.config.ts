import type { NextConfig } from "next";

// GitHub Pages serves the project from https://<user>.github.io/barbunker/,
// so the build needs a basePath/assetPrefix — but only for that deployment,
// never for local dev or `next start`.
const isGithubActions = process.env.GITHUB_ACTIONS === "true";
const repoName = "barbunker";
const basePath = isGithubActions ? `/${repoName}` : "";

const nextConfig: NextConfig = {
  output: "export",
  basePath,
  assetPrefix: basePath ? `${basePath}/` : undefined,
  trailingSlash: true,
  env: {
    // Exposed to client code so <Image> src/icon/manifest URLs can be
    // prefixed manually (see src/lib/base-path.ts) — unoptimized image
    // export does not auto-prepend basePath the way the optimizer does.
    NEXT_PUBLIC_BASE_PATH: basePath,
  },
  images: {
    // GitHub Pages is static hosting only — no image optimization server.
    unoptimized: true,
    // Placeholder artboards are SVG; real designer menu art can be JPG/PNG/WebP.
    dangerouslyAllowSVG: true,
    contentDispositionType: "inline",
    formats: ["image/avif", "image/webp"],
  },
};

export default nextConfig;
