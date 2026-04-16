import { createServer } from 'node:http';
import { readFile, stat } from 'node:fs/promises';
import { join, extname } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = fileURLToPath(new URL('.', import.meta.url));
const distDir = join(__dirname, 'dist');
const PORT = process.env.PORT || 3000;

const mimeTypes = {
  '.html': 'text/html',
  '.js': 'application/javascript',
  '.css': 'text/css',
  '.json': 'application/json',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.webp': 'image/webp',
  '.svg': 'image/svg+xml',
  '.mp4': 'video/mp4',
  '.gif': 'image/gif',
  '.ico': 'image/x-icon',
  '.woff': 'font/woff',
  '.woff2': 'font/woff2',
};

const indexHtml = await readFile(join(distDir, 'index.html'));

createServer(async (req, res) => {
  const url = req.url.split('?')[0];
  const filePath = join(distDir, url);

  try {
    const info = await stat(filePath);
    if (info.isFile()) {
      const data = await readFile(filePath);
      const ext = extname(filePath).toLowerCase();
      res.writeHead(200, { 'Content-Type': mimeTypes[ext] || 'application/octet-stream' });
      res.end(data);
      return;
    }
  } catch {}

  // SPA fallback — serve index.html for all routes
  res.writeHead(200, { 'Content-Type': 'text/html' });
  res.end(indexHtml);
}).listen(PORT, () => {
  console.log(`Zevolution running on port ${PORT}`);
});
