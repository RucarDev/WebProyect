import fs from 'fs';
import Path from 'path';
import sharp from 'sharp';

const PUBLIC_DIR = "c:/Users/Usuario/Desktop/WEB/WebProyect/public";
const PROJECTS_JS = "c:/Users/Usuario/Desktop/WEB/WebProyect/src/data/projects.js";

async function optimize() {
  let content = fs.readFileSync(PROJECTS_JS, 'utf-8');
  const matches = content.match(/\/[a-zA-Z0-9_\-\/\\]+\.(png|jpg|jpeg)/g) || [];
  const uniquePaths = [...new Set(matches)];

  for (const fileUrl of uniquePaths) {
    const inputPath = Path.join(PUBLIC_DIR, fileUrl);
    if (!fs.existsSync(inputPath)) {
      console.log(`Skipping missing file: ${inputPath}`);
      continue;
    }

    const parsed = Path.parse(inputPath);
    const outputPath = Path.join(parsed.dir, parsed.name + ".webp");
    const outputUrl = fileUrl.replace(/\.(png|jpg|jpeg)$/, '.webp');

    console.log(`Converting ${fileUrl}...`);
    try {
      await sharp(inputPath).webp({ quality: 80 }).toFile(outputPath);
      content = content.split(fileUrl).join(outputUrl);
      console.log(`Successfully converted to WebP: ${outputUrl}`);
    } catch (e) {
      console.error(`Error converting ${fileUrl}:`, e.message);
    }
  }

  fs.writeFileSync(PROJECTS_JS, content);
  console.log("Done updating projects.js!");
}
optimize();
