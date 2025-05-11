import request from 'supertest';
import { app } from '../api/server'; // Adjust the import based on your server setup

describe('API Tests', () => {
  it('should respond with a 200 status for the root endpoint', async () => {
    const response = await request(app).get('/');
    expect(response.status).toBe(200);
  });

  it('should return JSON data for the /api endpoint', async () => {
    const response = await request(app).get('/api');
    expect(response.status).toBe(200);
    expect(response.headers['content-type']).toMatch(/json/);
  });

  it('should handle 404 for unknown routes', async () => {
    const response = await request(app).get('/unknown-route');
    expect(response.status).toBe(404);
  });

  // Add more tests for specific routes and functionalities as needed
});