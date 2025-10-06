/**
 * Eres el encargado de coordinar las tareas diarias en la estación
 * espacial internacional. Cada astronauta tiene asignadas tareas
 * específicas que deben completarse en un tiempo limitado.
 * Para mantener el orden y la eficiencia, necesitas desarrollar
 * un sistema que permita almacenar y consultar tareas.
 *
 * Crear una clase Tarea y una clase GestorDeTareas que permita:
 * - Almacenar hasta N tareas (por ejemplo, 10).
 * - Cada tarea debe tener:
 *  - Nombre
 *  - Prioridad (1 a 5)
 *  - Estado (pendiente, en progreso, completada)
 *  - Duración estimada en minutos
 *
 * Las funciones principales que debe incluir el gestor de tareas son:
 * - Agregar una nueva tarea.
 * - Eliminar una tarea por su id.
 * - cambiar el estado de una tarea.
 * - Devolver el estado de una tarea por su id (Devolver la palabra "null" si la tarea no existe).
 * - Listar en la consola con su id y nombre las tareas pendientes.
 */

class Tarea {
  // Tu código aquí
  // Atributos: id (debe ser auto-incremental), nombre, prioridad, estado, duracion (sin tilde)
  // ! Debe respetar el nombre de los atributos
}

export default class Gestor {
  // Tu código aquí
  // Atributos: tareas (vector de Tarea), max_tareas (constante)
  // ! Debe respetar el nombre de los atributos
  // Métodos públicos:
  // - agregarTarea
  // - eliminarTarea
  // - cambiarEstado
  // - obtenerEstado
  // - listarTareasPendientes
}
