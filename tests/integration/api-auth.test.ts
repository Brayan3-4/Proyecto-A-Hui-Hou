import request from 'supertest';
import app from '../../src/server';

describe('API /auth', () => {
  it('registra usuario correctamente', async () => {
    const res = await request(app)
      .post('/api/auth/register')
      .send({ email: `qa${Date.now()}@test.com`, password: 'Aa123456' });
    expect(res.statusCode).toBe(201);
    expect(res.body).toHaveProperty('user');
  });

  it('falla al registrar correo duplicado', async () => {
    const email = `dup${Date.now()}@test.com`;
    await request(app).post('/api/auth/register').send({ email, password: 'Aa123456' });
    const res = await request(app).post('/api/auth/register').send({ email, password: 'Aa123456' });
    expect(res.statusCode).toBe(400);
  });
});
