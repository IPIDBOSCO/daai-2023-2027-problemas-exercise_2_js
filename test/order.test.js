import { describe, it, expect } from 'vitest';
import { ordenar } from '../src/ordenar.js';

describe('Ordenar productos', () => {
  it('debe ordenar los productos en orden ascendente', () => {
    const productos = [34, 12, 5, 67, 23, 89, 1, 45, 78, 56];
    const expected_asc = [1, 5, 12, 23, 34, 45, 56, 67, 78, 89];

    const sorted_asc = ordenar(productos);
    expect(sorted_asc).toEqual(expected_asc);
  });
});
