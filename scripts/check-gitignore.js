#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

console.log('🔍 Checking .gitignore effectiveness...\n');

// Files and directories that should be ignored
const shouldBeIgnored = [
  'node_modules',
  'dist',
  'coverage',
  'logs',
  '.env',
  '.env.test',
  '.env.production',
  '.env.local',
  'test-report.json',
  'test-output.txt',
  '.eslintcache',
  '*.log',
  '.DS_Store',
  'Thumbs.db'
];

// Check if files exist and should be ignored
const checkFiles = [
  'node_modules',
  'dist',
  'coverage',
  'logs',
  '.env',
  '.env.test',
  'test-report.json',
  '.eslintcache',
  '.DS_Store',
  'Thumbs.db'
];

console.log('📁 Checking for files that should be ignored:');
let issuesFound = false;

for (const file of checkFiles) {
  if (fs.existsSync(file)) {
    if (file === 'node_modules' && fs.statSync(file).isDirectory()) {
      console.log(`✅ ${file}/ - Directory exists (should be ignored)`);
    } else if (file === 'dist' && fs.statSync(file).isDirectory()) {
      console.log(`✅ ${file}/ - Directory exists (should be ignored)`);
    } else if (file === 'coverage' && fs.statSync(file).isDirectory()) {
      console.log(`✅ ${file}/ - Directory exists (should be ignored)`);
    } else if (file === 'logs' && fs.statSync(file).isDirectory()) {
      console.log(`✅ ${file}/ - Directory exists (should be ignored)`);
    } else {
      console.log(`✅ ${file} - File exists (should be ignored)`);
    }
  } else {
    console.log(`⚪ ${file} - Not present`);
  }
}

// Check .gitignore file
console.log('\n📄 Checking .gitignore file:');
if (fs.existsSync('.gitignore')) {
  const gitignoreContent = fs.readFileSync('.gitignore', 'utf8');
  console.log('✅ .gitignore file exists');
  
  // Check for important patterns
  const importantPatterns = [
    'node_modules/',
    'dist/',
    'coverage/',
    'logs/',
    '.env',
    '*.log',
    '.DS_Store',
    'Thumbs.db'
  ];
  
  console.log('\n🔍 Checking for important ignore patterns:');
  for (const pattern of importantPatterns) {
    if (gitignoreContent.includes(pattern)) {
      console.log(`✅ ${pattern} - Found in .gitignore`);
    } else {
      console.log(`❌ ${pattern} - Missing from .gitignore`);
      issuesFound = true;
    }
  }
} else {
  console.log('❌ .gitignore file not found!');
  issuesFound = true;
}

// Check for common problematic files
console.log('\n🚨 Checking for common problematic files:');
const problematicFiles = [
  'package-lock.json', // This should usually be committed
  'yarn.lock', // This should usually be committed
  '.gitignore', // This should be committed
  'README.md', // This should be committed
  'src/', // This should be committed
  '.github/', // This should be committed
];

for (const file of problematicFiles) {
  if (fs.existsSync(file)) {
    console.log(`✅ ${file} - Present (should be committed)`);
  } else {
    console.log(`⚪ ${file} - Not present`);
  }
}

console.log('\n' + '='.repeat(50));

if (issuesFound) {
  console.log('❌ Some issues found with .gitignore configuration.');
  console.log('\n🔧 Recommendations:');
  console.log('1. Make sure all important patterns are in .gitignore');
  console.log('2. Test with: git status --ignored');
  console.log('3. Check if any sensitive files are being tracked');
} else {
  console.log('🎉 .gitignore looks good!');
  console.log('\n📋 Next steps:');
  console.log('1. Run: git status --ignored (to see ignored files)');
  console.log('2. Run: git add . (to stage changes)');
  console.log('3. Run: git commit -m "Fix CI and improve project setup"');
  console.log('4. Run: git push origin main');
  console.log('\n🔗 After pushing, your CI badge should update automatically!');
}

console.log('\n💡 Pro tip: Use "git status --ignored" to see all ignored files');
