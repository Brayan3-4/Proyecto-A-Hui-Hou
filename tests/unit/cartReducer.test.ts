import { describe, it, expect } from '@jest/globals';
import { cartReducer, CartState } from '@/components/cart/cart-provider';

describe('Cart Reducer', () => {
  const initialState: CartState = { items: [], total: 0 };

  it('debe agregar un producto nuevo', () => {
    const action = { type: 'ADD_ITEM', payload: { id: 1, name: 'Maní tostado', price: 5000, quantity: 1 } };
    const result = cartReducer(initialState, action);
    expect(result.items.length).toBe(1);
    expect(result.total).toBe(5000);
  });

  it('debe incrementar cantidad si el producto ya existe', () => {
    const state = { items: [{ id: 1, name: 'Maní', price: 5000, quantity: 1 }], total: 5000 };
    const action = { type: 'ADD_ITEM', payload: { id: 1, name: 'Maní', price: 5000, quantity: 1 } };
    const result = cartReducer(state, action);
    expect(result.items[0].quantity).toBe(2);
  });

  it('debe eliminar un producto', () => {
    const state = { items: [{ id: 1, name: 'Maní', price: 5000, quantity: 1 }], total: 5000 };
    const action = { type: 'REMOVE_ITEM', payload: { id: 1 } };
    const result = cartReducer(state, action);
    expect(result.items.length).toBe(0);
  });
});
