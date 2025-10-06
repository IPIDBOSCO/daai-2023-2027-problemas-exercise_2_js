import { describe, it, expect } from 'vitest';
import { Gestor } from '../src/tareas.js';

describe('Gestor de Tareas', () => {
  it('debe gestionar tareas correctamente', () => {
    const gestor = new Gestor();

    // Agregar tareas
    gestor.agregarTarea('Reparar panel solar', 5, 'pendiente', 120);
    gestor.agregarTarea('Inspeccionar sistema de oxígeno', 4, 'pendiente', 90);
    gestor.agregarTarea(
      'Actualizar software de navegación',
      3,
      'pendiente',
      60
    );

    // Verificar estados iniciales
    expect(gestor.obtenerEstado(0)).toBe('pendiente');
    expect(gestor.obtenerEstado(1)).toBe('pendiente');
    expect(gestor.obtenerEstado(2)).toBe('pendiente');
    expect(gestor.obtenerEstado(3)).toBe('null'); // Tarea no existe

    // Cambiar estado de una tarea
    gestor.cambiarEstado(1, 'en progreso');
    expect(gestor.obtenerEstado(1)).toBe('en progreso');

    // Eliminar una tarea
    gestor.eliminarTarea(0);
    expect(gestor.obtenerEstado(0)).toBe('null'); // Tarea eliminada

    // Listar tareas pendientes
    // Puedes verificar la salida en consola manualmente si lo deseas
    gestor.listarTareasPendientes();
  });
});
