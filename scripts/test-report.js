#!/usr/bin/env node

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

console.log('🧪 Running test suite...\n');

try {
  // Run tests with coverage
  const output = execSync('npm run test:coverage', { 
    encoding: 'utf8',
    stdio: 'pipe'
  });

  // Extract coverage information
  const coverageMatch = output.match(/All files\s+\|\s+(\d+\.\d+)/);
  const coverage = coverageMatch ? Math.round(parseFloat(coverageMatch[1])) : 0;

  // Extract test results
  const testMatch = output.match(/Tests:\s+(\d+)\s+passed/);
  const testsPassed = testMatch ? parseInt(testMatch[1]) : 0;

  const suiteMatch = output.match(/Test Suites:\s+(\d+)\s+passed/);
  const suitesPassed = suiteMatch ? parseInt(suiteMatch[1]) : 0;

  // Generate test report
  const report = {
    timestamp: new Date().toISOString(),
    tests: {
      passed: testsPassed,
      suites: suitesPassed,
      coverage: coverage
    },
    status: 'PASSING',
    badges: {
      tests: `https://img.shields.io/badge/tests-${testsPassed}%20passing-brightgreen.svg`,
      coverage: `https://img.shields.io/badge/coverage-${coverage}%25-${coverage >= 80 ? 'brightgreen' : coverage >= 60 ? 'orange' : 'red'}.svg`
    }
  };

  // Write report to file
  fs.writeFileSync(
    path.join(__dirname, '..', 'test-report.json'), 
    JSON.stringify(report, null, 2)
  );

  console.log('✅ Test Report Generated:');
  console.log(`   📊 Tests: ${testsPassed} passing`);
  console.log(`   📈 Coverage: ${coverage}%`);
  console.log(`   📁 Suites: ${suitesPassed} passed`);
  console.log(`   📄 Report saved to: test-report.json`);

} catch (error) {
  console.error('❌ Test execution failed:', error.message);
  process.exit(1);
}
