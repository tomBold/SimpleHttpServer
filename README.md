# Simple HTTP Server

A clean, simple HTTP server built with TypeScript and Node.js using Express.

## Features

- 🚀 TypeScript support
- 📦 Express.js framework
- 🔧 Built-in middleware (CORS, JSON parsing, logging)
- 🏥 Health check endpoints
- 🛡️ Error handling
- 🔄 Graceful shutdown
- 📝 Request logging

## Quick Start

1. Install dependencies:
```bash
npm install
```

2. Run in development mode:
```bash
npm run dev
```

3. Build for production:
```bash
npm run build
npm start
```

## Available Scripts

- `npm run dev` - Start development server with hot reload
- `npm run build` - Build TypeScript to JavaScript
- `npm start` - Start production server
- `npm run watch` - Watch TypeScript files for changes

## API Endpoints

### General
- `GET /` - Welcome message and server info
- `GET /health` - Health check endpoint
- `GET /api/status` - Server status with database stats

### Users API
- `GET /api/users` - Get all users
- `GET /api/users/:id` - Get user by ID
- `POST /api/users` - Create new user
- `PUT /api/users/:id` - Update user
- `DELETE /api/users/:id` - Delete user

### Tasks API
- `GET /api/tasks` - Get all tasks (supports ?userId=id&completed=true/false filters)
- `GET /api/tasks/:id` - Get task by ID
- `GET /api/tasks/user/:userId` - Get tasks by user ID
- `POST /api/tasks` - Create new task
- `PUT /api/tasks/:id` - Update task
- `DELETE /api/tasks/:id` - Delete task

## Sample Data Models

### User
```json
{
  "id": "1",
  "name": "John Doe",
  "email": "john@example.com",
  "age": 30,
  "createdAt": "2024-01-01T00:00:00.000Z",
  "updatedAt": "2024-01-01T00:00:00.000Z"
}
```

### Task
```json
{
  "id": "1",
  "title": "Learn TypeScript",
  "description": "Complete TypeScript tutorial",
  "completed": false,
  "userId": "1",
  "createdAt": "2024-01-01T00:00:00.000Z",
  "updatedAt": "2024-01-01T00:00:00.000Z"
}
```

## Example API Usage

### Create a user
```bash
curl -X POST http://localhost:3000/api/users \
  -H "Content-Type: application/json" \
  -d '{"name": "Alice Smith", "email": "alice@example.com", "age": 28}'
```

### Get all users
```bash
curl http://localhost:3000/api/users
```

### Create a task
```bash
curl -X POST http://localhost:3000/api/tasks \
  -H "Content-Type: application/json" \
  -d '{"title": "Build API", "description": "Create REST API", "userId": "1"}'
```

### Get tasks for a user
```bash
curl http://localhost:3000/api/tasks/user/1
```

## Environment Variables

- `PORT` - Server port (default: 3000)
- `NODE_ENV` - Environment (development/production)

## Project Structure

```
src/
  ├── server.ts        # Main server file
  ├── database.ts      # In-memory database
  ├── types.ts         # TypeScript type definitions
  └── routes/
      ├── users.ts     # User API routes
      └── tasks.ts     # Task API routes
dist/                  # Compiled JavaScript (generated)
package.json           # Dependencies and scripts
tsconfig.json          # TypeScript configuration
```
