const fs = require('fs');
const path = require('path');

const outDir = path.join(__dirname, '..', 'out');

// List of pages that need index.html in their directory
const pages = [
  'about',
  'bridal-packages',
  'contact',
  'gallery',
  'privacy',
  'services',
  'terms',
  'testimonials',
  '_not-found'
];

pages.forEach(page => {
  const pageDir = path.join(outDir, page);
  const htmlFile = path.join(outDir, `${page}.html`);
  
  // Create directory if it doesn't exist
  if (!fs.existsSync(pageDir)) {
    fs.mkdirSync(pageDir, { recursive: true });
  }
  
  // Copy HTML file to index.html in the directory
  if (fs.existsSync(htmlFile)) {
    const content = fs.readFileSync(htmlFile, 'utf8');
    fs.writeFileSync(path.join(pageDir, 'index.html'), content);
    console.log(`Created index.html for ${page}`);
  }
});

console.log('Done!');
