const fs = require('fs');
const path = require('path');

const outDir = path.join(__dirname, '..', 'out');
const basePath = '/beautyparlor';

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

// Fix all HTML files to use correct base path
const htmlFiles = ['index.html', '404.html', 'about.html', 'bridal-packages.html', 'contact.html', 'gallery.html', 'privacy.html', 'services.html', 'terms.html', 'testimonials.html'];

htmlFiles.forEach(file => {
  const filePath = path.join(outDir, file);
  if (fs.existsSync(filePath)) {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Replace absolute paths with base path
    content = content.replace(/href="\/_next\//g, `href="${basePath}/_next/`);
    content = content.replace(/src="\/_next\//g, `src="${basePath}/_next/`);
    content = content.replace(/href="\/favicon/g, `href="${basePath}/favicon`);
    
    fs.writeFileSync(filePath, content);
    console.log(`Updated paths in ${file}`);
  }
});

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
