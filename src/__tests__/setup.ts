// Test setup file
import { config } from 'dotenv';

// Load test environment variables (optional)
try {
  config({ path: '.env.test' });
} catch (error) {
  // .env.test file doesn't exist, that's okay
}

// Set test environment
process.env.NODE_ENV = 'test';
