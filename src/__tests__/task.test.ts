import request from 'supertest';
import app from '../server';

describe('Task API', () => {
  let userId: string;

  beforeAll(async () => {
    // Create a user for testing
    const userData = {
      name: 'Test User',
      email: 'test@example.com',
      age: 25,
    };

    const response = await request(app)
      .post('/api/users')
      .send(userData);

    userId = response.body.data.id;
  });

  describe('POST /api/tasks', () => {
    it('should create a new task', async () => {
      const taskData = {
        title: 'Test Task',
        description: 'Test Description',
        userId: userId,
      };

      const response = await request(app)
        .post('/api/tasks')
        .send(taskData)
        .expect(201);

      expect(response.body.success).toBe(true);
      expect(response.body.data.title).toBe(taskData.title);
      expect(response.body.data.userId).toBe(userId);
    });

    it('should return validation error for invalid data', async () => {
      const invalidData = {
        title: '',
        userId: 'invalid-id',
      };

      const response = await request(app)
        .post('/api/tasks')
        .send(invalidData)
        .expect(400);

      expect(response.body.success).toBe(false);
    });
  });

  describe('GET /api/tasks', () => {
    it('should return all tasks', async () => {
      const response = await request(app)
        .get('/api/tasks')
        .expect(200);

      expect(response.body.success).toBe(true);
      expect(Array.isArray(response.body.data)).toBe(true);
    });

    it('should filter tasks by userId', async () => {
      const response = await request(app)
        .get(`/api/tasks?userId=${userId}`)
        .expect(200);

      expect(response.body.success).toBe(true);
      expect(response.body.data.every((task: any) => task.userId === userId)).toBe(true);
    });
  });
});
