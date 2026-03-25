# 🚀 Simple HTTP Server

[![CI](https://github.com/tomBold/SimpleHttpServer/workflows/CI/badge.svg)](https://github.com/tomBold/SimpleHttpServer/actions/workflows/ci.yml)
[![Tests](https://github.com/tomBold/SimpleHttpServer/workflows/CI/badge.svg?label=tests)](https://github.com/tomBold/SimpleHttpServer/actions/workflows/ci.yml)
[![Coverage](https://img.shields.io/badge/coverage-59%25-orange.svg)](https://github.com/tomBold/SimpleHttpServer/actions/workflows/ci.yml)
[![Build Status](https://github.com/tomBold/SimpleHttpServer/workflows/CI/badge.svg?label=build)](https://github.com/tomBold/SimpleHttpServer/actions/workflows/ci.yml)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0+-blue.svg)](https://www.typescriptlang.org/)
[![Node.js](https://img.shields.io/badge/Node.js-18.x%20%7C%2020.x-green.svg)](https://nodejs.org/)
[![Express](https://img.shields.io/badge/Express-4.18+-black.svg)](https://expressjs.com/)
[![Jest](https://img.shields.io/badge/Jest-29.6+-red.svg)](https://jestjs.io/)
[![ESLint](https://img.shields.io/badge/ESLint-8.45+-purple.svg)](https://eslint.org/)
[![License](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)

A modern, well-tested TypeScript + Node.js REST API built with Express, featuring comprehensive testing, linting, and CI/CD pipeline.

## ✨ Features

- **TypeScript** - Full type safety and modern JavaScript features
- **Comprehensive Testing** - 9 passing tests with Jest and Supertest
- **Code Quality** - ESLint configuration for consistent code style
- **CI/CD Ready** - GitHub Actions workflow for automated testing
- **Docker Support** - Containerized deployment with Docker
- **Security** - Automated security audits and dependency checks
- **Health Monitoring** - Built-in health check endpoints
- **RESTful API** - Clean, intuitive API design

## 🧪 Testing

The project includes comprehensive test coverage:

```bash
# Run all tests
npm test

# Run tests with coverage
npm run test:coverage

# Run tests in watch mode
npm run test:watch
```

**Test Results:**
- ✅ 9 tests passing
- ✅ 2 test suites
- ✅ User API tests
- ✅ Task API tests

## 🐳 Docker Support

```bash
# Build Docker image
docker build -t simple-http-server .

# Run with Docker Compose
docker-compose up

# Run in production mode
docker-compose -f docker-compose.yml up -d
```

## 🔧 Development

### Prerequisites
- Node.js 18.x or 20.x
- npm or yarn

### Project Structure
```
src/
├── __tests__/          # Test files
├── controllers/        # Route controllers
├── middleware/         # Express middleware
├── routes/            # API routes
├── validation/        # Validation schemas
├── database.ts        # In-memory database
├── server.ts          # Express server setup
└── types.ts           # TypeScript type definitions
```

⭐ **Star this repository if you found it helpful!**
