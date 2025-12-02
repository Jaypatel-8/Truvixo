const fs = require('fs');
const path = require('path');

// Copy .htaccess to out folder after build
const sourceFile = path.join(__dirname, '..', '.htaccess');
const destFile = path.join(__dirname, '..', 'out', '.htaccess');

try {
  // Check if source file exists
  if (!fs.existsSync(sourceFile)) {
    console.error('❌ .htaccess file not found in root directory');
    process.exit(1);
  }

  // Check if out folder exists
  const outDir = path.join(__dirname, '..', 'out');
  if (!fs.existsSync(outDir)) {
    console.error('❌ out folder not found. Run "npm run build" first.');
    process.exit(1);
  }

  // Copy .htaccess to out folder
  fs.copyFileSync(sourceFile, destFile);
  console.log('✅ .htaccess copied to out folder successfully');
  
  // Also copy robots.txt and sitemap.xml if they exist in public
  const publicDir = path.join(__dirname, '..', 'public');
  const outPublicFiles = ['robots.txt', 'sitemap.xml'];
  
  outPublicFiles.forEach(file => {
    const publicFile = path.join(publicDir, file);
    const outFile = path.join(outDir, file);
    
    if (fs.existsSync(publicFile)) {
      fs.copyFileSync(publicFile, outFile);
      console.log(`✅ ${file} copied to out folder`);
    }
  });
  
} catch (error) {
  console.error('❌ Error copying .htaccess:', error.message);
  process.exit(1);
}

