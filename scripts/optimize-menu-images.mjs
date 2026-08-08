// One-off asset optimization: re-encodes the heavy PNG/JPG menu artboards as WebP
// (same pixel dimensions, ~lossy q82) so the exported static site ships far less
// image weight. Run with: node scripts/optimize-menu-images.mjs
import { readdir, stat } from "node:fs/promises";
import { join, extname, basename } from "node:path";
import sharp from "sharp";

const ROOT = join(import.meta.dirname, "..", "public", "menu");

async function walk(dir) {
  const entries = await readdir(dir, { withFileTypes: true });
  const files = [];
  for (const entry of entries) {
    const full = join(dir, entry.name);
    if (entry.isDirectory()) files.push(...(await walk(full)));
    else if ([".png", ".jpg", ".jpeg"].includes(extname(entry.name).toLowerCase())) files.push(full);
  }
  return files;
}

const files = await walk(ROOT);
let totalBefore = 0;
let totalAfter = 0;

for (const file of files) {
  const before = (await stat(file)).size;
  const dest = join(file, "..", `${basename(file, extname(file))}.webp`);
  await sharp(file).webp({ quality: 82 }).toFile(dest);
  const after = (await stat(dest)).size;
  totalBefore += before;
  totalAfter += after;
  console.log(
    `${file.replace(ROOT, "menu")} -> ${(before / 1024).toFixed(0)}KB => ${(after / 1024).toFixed(0)}KB`
  );
}

console.log(
  `\nTotal: ${(totalBefore / 1024 / 1024).toFixed(2)}MB -> ${(totalAfter / 1024 / 1024).toFixed(2)}MB`
);
