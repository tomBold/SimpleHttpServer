import request from 'supertest';
import app from '../server';

describe('User API', () => {
  describe('GET /api/users', () => {
    it('should return all users', async () => {
      const response = await request(app)
        .get('/api/users')
        .expect(200);

      expect(response.body.success).toBe(true);
      expect(Array.isArray(response.body.data)).toBe(true);
    });
  });

  describe('POST /api/users', () => {
    it('should create a new user', async () => {
      const userData = {
        name: 'Test User',
        email: 'test@example.com',
        age: 25,
      };

      const response = await request(app)
        .post('/api/users')
        .send(userData)
        .expect(201);

      expect(response.body.success).toBe(true);
      expect(response.body.data.name).toBe(userData.name);
      expect(response.body.data.email).toBe(userData.email);
    });

    it('should return validation error for invalid data', async () => {
      const invalidData = {
        name: '',
        email: 'invalid-email',
        age: -1,
      };

      const response = await request(app)
        .post('/api/users')
        .send(invalidData)
        .expect(400);

      expect(response.body.success).toBe(false);
      expect(response.body.error).toContain('validation');
    });
  });

  describe('GET /api/users/:id', () => {
    it('should return user by id', async () => {
      // First create a user
      const userData = {
        name: 'Test User',
        email: 'test2@example.com',
        age: 30,
      };

      const createResponse = await request(app)
        .post('/api/users')
        .send(userData);

      const userId = createResponse.body.data.id;

      const response = await request(app)
        .get(`/api/users/${userId}`)
        .expect(200);

      expect(response.body.success).toBe(true);
      expect(response.body.data.id).toBe(userId);
    });

    it('should return 404 for non-existent user', async () => {
      const response = await request(app)
        .get('/api/users/999')
        .expect(404);

      expect(response.body.success).toBe(false);
      expect(response.body.error).toContain('not found');
    });
  });
});
