/**
 * Estas trabajando en el procesamientos de inscripción de estudiantes para un curso.
 * Cada estudiante tiene un nombre, edad, sexo, y una lista de calificaciones.
 * Tu tarea es crear un programa que lea los datos de varios estudiantes y calcule:
 * 1. El promedio de edad de los estudiantes.
 * 2. El promedio de calificaciones de todos los estudiantes.
 * 3. La cantidad de estudiantes por sexo (masculino y femenino).
 *
 * La función debe recibir la ruta absoluta de un archivo de texto que contiene los datos de los estudiantes.
 *
 * Adicional: crear una función que escriba los datos en un archivo de los estudiantes ordenados por calificación promedio.
 *
 * ? Ejemplo:
 *
 * * Archivo_estudiantes.txt
 *
 * Juan,20,M,85;90;78;85;92
 * Maria,22,F,88;92;95;80;85
 * Luis,19,M,70;75;80;65;60
 * Ana,21,F,90;85;88;92;95
 *
 * Salida esperada:
 * {
 *  "promedioEdad": 20.5,
 *  "promedioCalificaciones": 83.5,
 *  "cantidadMasculino": 2,
 *  "cantidadFemenino": 2
 * }
 */

const promedios = {
  promedioEdad: 0,
  promedioCalificaciones: 0,
  cantidadMasculino: 0,
  cantidadFemenino: 0,
};

export default function calcularPromedios(ruta_archivo) {
  // Tu código aquí
  return promedios;
}
