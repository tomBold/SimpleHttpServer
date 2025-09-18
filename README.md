# Simple HTTP Server

A basic TypeScript + Node.js REST API example with Express.

## Quick Start

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Server runs on http://localhost:3000
```

## API Endpoints

- `GET /` - Welcome message
- `GET /health` - Health check
- `GET /api/users` - Get all users
- `POST /api/users` - Create user
- `GET /api/tasks` - Get all tasks
- `POST /api/tasks` - Create task

## Example Usage

```bash
# Create a user
curl -X POST http://localhost:3000/api/users \
  -H "Content-Type: application/json" \
  -d '{"name": "John Doe", "email": "john@example.com", "age": 30}'

# Get all users
curl http://localhost:3000/api/users
```

## Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm test` - Run tests
