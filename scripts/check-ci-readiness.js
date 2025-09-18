#!/usr/bin/env node

const { execSync } = require('child_process');
const fs = require('fs');

console.log('🔍 Checking CI Readiness...\n');

const checks = [
  {
    name: 'Package.json exists',
    check: () => fs.existsSync('package.json')
  },
  {
    name: 'CI workflow exists',
    check: () => fs.existsSync('.github/workflows/ci.yml')
  },
  {
    name: 'Dependencies can be installed',
    check: () => {
      try {
        execSync('npm ci --dry-run', { stdio: 'pipe' });
        return true;
      } catch {
        return false;
      }
    }
  },
  {
    name: 'Linting passes',
    check: () => {
      try {
        execSync('npm run lint', { stdio: 'pipe' });
        return true;
      } catch {
        return false;
      }
    }
  },
  {
    name: 'Tests pass',
    check: () => {
      try {
        execSync('npm test', { stdio: 'pipe' });
        return true;
      } catch {
        return false;
      }
    }
  },
  {
    name: 'Build succeeds',
    check: () => {
      try {
        execSync('npm run build', { stdio: 'pipe' });
        return true;
      } catch {
        return false;
      }
    }
  }
];

let allPassed = true;

for (const check of checks) {
  try {
    const result = check.check();
    if (result) {
      console.log(`✅ ${check.name}`);
    } else {
      console.log(`❌ ${check.name}`);
      allPassed = false;
    }
  } catch (error) {
    console.log(`❌ ${check.name} - Error: ${error.message}`);
    allPassed = false;
  }
}

console.log('\n' + '='.repeat(50));

if (allPassed) {
  console.log('🎉 All CI checks passed! Your CI should work correctly.');
  console.log('\n📋 Next steps:');
  console.log('1. Commit and push your changes to GitHub');
  console.log('2. The CI workflow will run automatically');
  console.log('3. The CI badge will update to show the status');
  console.log('\n🔗 CI Workflow URL:');
  console.log('https://github.com/tombo/SimpleHttpServer/actions/workflows/ci.yml');
} else {
  console.log('❌ Some CI checks failed. Fix the issues above before pushing.');
  process.exit(1);
}
