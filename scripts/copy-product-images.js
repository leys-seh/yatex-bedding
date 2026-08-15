import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const PROJECT_ROOT = path.resolve(__dirname, "..");
const PUBLIC_DIR = path.join(PROJECT_ROOT, "public");
const DEFAULT_DEST = path.join(PUBLIC_DIR, "assets", "products");

function copyProductImages(sourceDir, destDir = DEFAULT_DEST) {
  if (!fs.existsSync(sourceDir)) {
    console.error(`Source directory not found: ${sourceDir}`);
    process.exit(1);
  }

  const validExtensions = new Set([".webp", ".jpg", ".jpeg", ".png", ".gif", ".svg"]);
  const files = fs.readdirSync(sourceDir);

  const imageFiles = files.filter((file) => {
    const ext = path.extname(file).toLowerCase();
    return validExtensions.has(ext);
  });

  if (imageFiles.length === 0) {
    console.log("No image files found in source directory.");
    return;
  }

  fs.mkdirSync(destDir, { recursive: true });

  console.log(`\nCopying ${imageFiles.length} image(s) to: ${destDir}\n`);

  imageFiles.forEach((file) => {
    const srcPath = path.join(sourceDir, file);
    const destPath = path.join(destDir, file);
    fs.copyFileSync(srcPath, destPath);
    console.log(`  ✓ ${file}`);
  });

  console.log(`\nDone. Images are ready at: ${destDir}`);
}

const sourcePath = process.argv[2];

if (!sourcePath) {
  console.log("Usage: node scripts/copy-product-images.js <source-directory> [destination-directory]");
  console.log(`\nExample:`);
  console.log(`  node scripts/copy-product-images.js "C:\\Users\\cinar\\Desktop\\Yeni klasör (4)"`);
  console.log(`\nDefault destination:`);
  console.log(`  ${DEFAULT_DEST}`);
  process.exit(1);
}

const destPath = process.argv[3] || DEFAULT_DEST;
copyProductImages(sourcePath, destPath);
