import request from 'supertest';
import app from '../../src/server';

describe('API /products', () => {
  it('lista productos correctamente', async () => {
    const res = await request(app).get('/api/products');
    expect(res.statusCode).toBe(200);
    expect(Array.isArray(res.body)).toBe(true);
  });

  it('crea producto correctamente', async () => {
    const res = await request(app)
      .post('/api/products')
      .send({ name: 'Nueces mixtas', price: 12000, stock: 50 });
    expect(res.statusCode).toBe(201);
    expect(res.body).toHaveProperty('name', 'Nueces mixtas');
  });
});
