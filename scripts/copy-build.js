const fs = require('fs');
const path = require('path');

// Read the compiled JS from dist (tsc maintains directory structure)
const distFile = path.join(__dirname, '../dist/assets/js/main.js');
const targetFile = path.join(__dirname, '../assets/js/main.js');

// If not found, try alternative location
let actualDistFile = distFile;
if (!fs.existsSync(actualDistFile)) {
  actualDistFile = path.join(__dirname, '../dist/main.js');
}

if (fs.existsSync(actualDistFile)) {
  let content = fs.readFileSync(actualDistFile, 'utf8');
  
  // Remove standalone "use strict" at the top if IIFE already has it
  content = content.replace(/^"use strict";\s*\n/, '');
  
  fs.writeFileSync(targetFile, content, 'utf8');
  console.log('✓ Compiled TypeScript copied to assets/js/main.js');
  
  // Clean up dist directory
  fs.unlinkSync(actualDistFile);
  const distDir = path.dirname(actualDistFile);
  try {
    fs.rmdirSync(distDir);
  } catch (e) {
    // Directory might not be empty, ignore
  }
} else {
  console.error('✗ Build file not found:', distFile);
  process.exit(1);
}

