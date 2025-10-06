import { describe, it, expect } from 'vitest';
import path from 'path';
import calcularPromedios from '../src/archivo.js';

const path = path.join(process.cwd(), 'data/student_data.txt');

const expected_result = {
  promedioEdad: 19.69,
  promedioCalificaciones: 84.93,
  cantidadMasculino: 56,
  cantidadFemenino: 44,
};

describe('Análisis de datos de estudiantes', () => {
  it('debe devolver el análisis correcto de los datos del archivo', () => {
    const results = calcularPromedios(path);

    expect(results.promedioEdad).toBeCloseTo(expected_result.promedioEdad, 1);
    expect(results.promedioCalificaciones).toBeCloseTo(
      expected_result.promedioCalificaciones,
      1
    );
    expect(results.cantidadMasculino).toBe(expected_result.cantidadMasculino);
    expect(results.cantidadFemenino).toBe(expected_result.cantidadFemenino);
  });
});
