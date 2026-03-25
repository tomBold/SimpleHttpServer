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

## 🚀 Quick Start

```bash
# Clone the repository
git clone https://github.com/tombo/SimpleHttpServer.git
cd SimpleHttpServer

# Install dependencies
npm install

# Run development server
npm run dev

# Server runs on http://localhost:3000
```

## 📋 Available Scripts

| Script | Description |
|--------|-------------|
| `npm run dev` | Start development server with hot reload |
| `npm run build` | Build TypeScript to JavaScript |
| `npm start` | Start production server |
| `npm test` | Run test suite |
| `npm run test:watch` | Run tests in watch mode |
| `npm run test:coverage` | Run tests with coverage report |
| `npm run lint` | Run ESLint for code quality |
| `npm run lint:fix` | Fix ESLint issues automatically |

## 🔗 API Endpoints

### Core Endpoints
- `GET /` - Welcome message with server info
- `GET /health` - Health check and server status

### User Management
- `GET /api/users` - Get all users
- `GET /api/users/:id` - Get user by ID
- `POST /api/users` - Create new user
- `PUT /api/users/:id` - Update user
- `DELETE /api/users/:id` - Delete user

### Task Management
- `GET /api/tasks` - Get all tasks (with optional filtering)
- `GET /api/tasks/:id` - Get task by ID
- `GET /api/tasks/user/:userId` - Get tasks by user
- `POST /api/tasks` - Create new task
- `PUT /api/tasks/:id` - Update task
- `DELETE /api/tasks/:id` - Delete task

## 💡 Example Usage

### Create a User
```bash
curl -X POST http://localhost:3000/api/users \
  -H "Content-Type: application/json" \
  -d '{
    "name": "John Doe",
    "email": "john@example.com",
    "age": 30
  }'
```

### Create a Task
```bash
curl -X POST http://localhost:3000/api/tasks \
  -H "Content-Type: application/json" \
  -d '{
    "title": "Learn TypeScript",
    "description": "Complete TypeScript tutorial",
    "userId": "1"
  }'
```

### Get All Users
```bash
curl http://localhost:3000/api/users
```

### Health Check
```bash
curl http://localhost:3000/health
```

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

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🆘 Support

If you have any questions or need help, please:
- Open an issue on GitHub
- Check the existing documentation
- Review the test files for usage examples

---

⭐ **Star this repository if you found it helpful!**
