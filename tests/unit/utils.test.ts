import { calculateTotal } from '../../src/utils/calculateTotal';

describe('Función calculateTotal', () => {
  it('calcula el total correctamente', () => {
    const items = [
      { price: 5000, quantity: 2 },
      { price: 3000, quantity: 1 },
    ];
    expect(calculateTotal(items)).toBe(13000);
  });

  it('retorna 0 con carrito vacío', () => {
    expect(calculateTotal([])).toBe(0);
  });
});
