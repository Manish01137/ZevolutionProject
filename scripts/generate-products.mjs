// Auto-generates productsData.js entries for Zerra and Creststone
// from the actual image files in src/assets/images/

import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, "..");
const IMAGES = path.join(ROOT, "src/assets/images");

// ── helpers ────────────────────────────────────────────────────────────────

const slugify = (s) =>
  s
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, " ")
    .trim()
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-");

const toCamel = (s) =>
  s
    .replace(/[^a-zA-Z0-9]+(.)/g, (_, c) => c.toUpperCase())
    .replace(/^./, (c) => c.toLowerCase())
    .replace(/[^a-zA-Z0-9]/g, "");

// Strip (1), (2), .., trailing spaces, etc. to get base product name
const baseName = (fileNameNoExt) => {
  let n = fileNameNoExt;
  n = n.replace(/\(\d+\)/g, ""); // remove (1), (2)
  n = n.replace(/\.{2,}/g, ""); // remove ..
  n = n.replace(/\s+\d+$/, ""); // trailing numbers
  n = n.replace(/\s+/g, " ").trim();
  return n;
};

const prettify = (s) => {
  // lowercase except first letter of each word, unless all caps
  const words = s.split(/\s+/);
  return words
    .map((w) => {
      if (w.length <= 2) return w.toUpperCase();
      if (w === w.toUpperCase()) return w.charAt(0) + w.slice(1).toLowerCase();
      return w.charAt(0).toUpperCase() + w.slice(1);
    })
    .join(" ");
};

const listImages = (dir) => {
  if (!fs.existsSync(dir)) return [];
  return fs
    .readdirSync(dir)
    .filter((f) => /\.(jpe?g|png|webp)$/i.test(f))
    .sort();
};

// ── ZERRA ──────────────────────────────────────────────────────────────────
// Flat: one product per base-name; gallery = all matching images

const ZERRA_DIR = path.join(IMAGES, "zerra");
const ZERRA_FOLDERS = {
  Sandstone: "Sandstone",
  Marble: "Marble",
  Limestone: "Limestone",
  Concrete: "Concrete",
  "Slate & Quartzite": "slate&Quartzite",
};

const zerraProducts = [];
const zerraImports = [];
let zerraCounter = 0;

for (const [category, folder] of Object.entries(ZERRA_FOLDERS)) {
  const dir = path.join(ZERRA_DIR, folder);
  const imgs = listImages(dir);

  // group by base name
  const groups = new Map();
  for (const img of imgs) {
    const ext = path.extname(img);
    const noExt = path.basename(img, ext);
    const base = baseName(noExt);
    const key = base.toLowerCase();
    if (!groups.has(key)) groups.set(key, { displayName: prettify(base), files: [] });
    groups.get(key).files.push(img);
  }

  for (const { displayName, files } of groups.values()) {
    const slug = slugify(displayName);
    const varName = "zerra" + toCamel(category + " " + displayName);
    const imageVars = files.map((file, i) => {
      const v = `${varName}${i === 0 ? "" : i}`;
      zerraImports.push(
        `import ${v} from "../assets/images/zerra/${folder}/${file}";`
      );
      return v;
    });

    zerraProducts.push({
      name: displayName,
      slug,
      category,
      imageVars,
      varName,
    });
    zerraCounter++;
  }
}

// ── CRESTONE ───────────────────────────────────────────────────────────────

const CRESTONE_DIR = path.join(IMAGES, "Crestone");
const CATALOGS = [
  { dir: "Catelog1", label: "Stone Textures" },
  { dir: "catelog2", label: "Marble & Sandstone" },
  { dir: "catelog3", label: "Rammed Earth" },
  { dir: "catelog4", label: "FCC Architectural Boards" },
  { dir: "catelog5", label: "Premium Stone" },
];

const crestImports = [];
const crestProducts = [];
let crestCounter = 0;

// Clean name: remove trailing _, Chinese chars, strip (1)/(2), collapse spaces
const cleanName = (raw) => {
  let n = raw
    .replace(/_$/, "")
    .replace(/[一-鿿]/g, "") // strip CJK
    .replace(/\(\d+\)/g, "")
    .trim();
  return prettify(n.replace(/\s+/g, " "));
};

const seenSlugs = new Set();
const uniqueSlug = (base) => {
  let s = base;
  let i = 2;
  while (seenSlugs.has(s)) s = `${base}-${i++}`;
  seenSlugs.add(s);
  return s;
};

const addCrestProduct = (catDir, catLabel, productPath, displayName) => {
  const imgs = listImages(productPath);
  if (imgs.length === 0) return;
  const relFromCrestone = path.relative(CRESTONE_DIR, productPath);
  const slug = uniqueSlug(slugify(displayName));
  const varName = "crest" + toCamel(relFromCrestone + " " + displayName).slice(0, 80);
  const imageVars = imgs.map((file, i) => {
    const v = `${varName}${i === 0 ? "" : i}`;
    crestImports.push(
      `import ${v} from "../assets/images/Crestone/${relFromCrestone}/${file}";`
    );
    return v;
  });
  crestProducts.push({
    name: displayName,
    slug,
    category: catLabel,
    imageVars,
    varName,
  });
  crestCounter++;
};

for (const { dir: catDir, label: catLabel } of CATALOGS) {
  const catPath = path.join(CRESTONE_DIR, catDir);
  if (!fs.existsSync(catPath)) continue;

  const productDirs = fs
    .readdirSync(catPath)
    .filter((f) => fs.statSync(path.join(catPath, f)).isDirectory())
    .sort();

  for (const productDir of productDirs) {
    const productPath = path.join(catPath, productDir);
    const directImgs = listImages(productPath);
    const subDirs = fs
      .readdirSync(productPath)
      .filter((f) => fs.statSync(path.join(productPath, f)).isDirectory())
      .sort();

    if (directImgs.length > 0 && subDirs.length === 0) {
      // simple product: direct images
      addCrestProduct(catDir, catLabel, productPath, cleanName(productDir));
    } else if (subDirs.length > 0) {
      // nested: each subdir is a product, name it with parent context
      const parentName = cleanName(productDir);
      for (const sub of subDirs) {
        const subPath = path.join(productPath, sub);
        const subName = cleanName(sub);
        addCrestProduct(catDir, catLabel, subPath, `${parentName} ${subName}`.trim());
      }
      // also include any direct images as their own "overview" product
      if (directImgs.length > 0) {
        addCrestProduct(catDir, catLabel, productPath, parentName);
      }
    }
  }
}

// ── emit generated file ────────────────────────────────────────────────────

const out = [];
out.push("// AUTO-GENERATED by scripts/generate-products.mjs — do not edit by hand");
out.push("// Run: node scripts/generate-products.mjs > src/data/generatedProducts.js");
out.push("");
out.push("// ── Zerra imports ─────────────────────────────────────────────────");
out.push(...zerraImports);
out.push("");
out.push("// ── Creststone imports ────────────────────────────────────────────");
out.push(...crestImports);
out.push("");
out.push("export const zerraProducts = [");
for (const p of zerraProducts) {
  out.push("  {");
  out.push(`    name: ${JSON.stringify(p.name)},`);
  out.push(`    slug: ${JSON.stringify(p.slug)},`);
  out.push(`    category: ${JSON.stringify(p.category)},`);
  out.push(`    image: ${p.imageVars[0]},`);
  out.push(`    gallery: [${p.imageVars.join(", ")}],`);
  out.push("  },");
}
out.push("];");
out.push("");
out.push("export const crestoneProducts = [");
for (const p of crestProducts) {
  out.push("  {");
  out.push(`    name: ${JSON.stringify(p.name)},`);
  out.push(`    slug: ${JSON.stringify(p.slug)},`);
  out.push(`    category: ${JSON.stringify(p.category)},`);
  out.push(`    image: ${p.imageVars[0]},`);
  out.push(`    gallery: [${p.imageVars.join(", ")}],`);
  out.push("  },");
}
out.push("];");
out.push("");

console.log(out.join("\n"));

// stderr summary
console.error(`\n✓ Generated ${zerraCounter} Zerra products (${zerraImports.length} images)`);
console.error(`✓ Generated ${crestCounter} Creststone products (${crestImports.length} images)`);
