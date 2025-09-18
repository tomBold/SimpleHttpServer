#!/usr/bin/env node

const { execSync } = require('child_process');

console.log('🚀 Testing CI Pipeline Locally...\n');

const steps = [
  { name: 'Installing dependencies', command: 'npm ci' },
  { name: 'Running linter', command: 'npm run lint' },
  { name: 'Running tests', command: 'npm test' },
  { name: 'Building project', command: 'npm run build' },
  { name: 'Running security audit', command: 'npm audit --audit-level moderate' },
  { name: 'Running dependency check', command: 'npx audit-ci --moderate' }
];

let allPassed = true;

for (const step of steps) {
  try {
    console.log(`✅ ${step.name}...`);
    execSync(step.command, { stdio: 'pipe' });
    console.log(`   ✓ ${step.name} completed successfully\n`);
  } catch (error) {
    console.log(`❌ ${step.name} failed:`);
    console.log(`   ${error.message}\n`);
    allPassed = false;
  }
}

if (allPassed) {
  console.log('🎉 All CI steps passed! Your CI should work correctly.');
  console.log('📊 Summary:');
  console.log('   ✓ Dependencies installed');
  console.log('   ✓ Linting passed');
  console.log('   ✓ Tests passed');
  console.log('   ✓ Build successful');
  console.log('   ✓ Security audit passed');
  console.log('   ✓ Dependency check passed');
} else {
  console.log('❌ Some CI steps failed. Check the errors above.');
  process.exit(1);
}
