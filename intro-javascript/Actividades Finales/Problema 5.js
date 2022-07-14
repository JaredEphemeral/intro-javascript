//Problema 5:
//De la siguiente estructura de datos, contesta las siguientes preguntas creando un programa para cada una.
let info = [
    {
        nombre: "Diego",
        materias: [
            {
                nombreMateria: "español",
                calificacion: 100
            },
            {
                nombreMateria: "matemáticas",
                calificacion: 70
            },
            {
                nombreMateria: "ciencias",
                calificacion: 55
            }
        ]
    },
    {
        nombre: "Jorge",
        materias: [
            {
                nombreMateria: "español",
                calificacion: 60
            },
            {
                nombreMateria: "matemáticas",
                calificacion: 65
            },
            {
                nombreMateria: "ciencias",
                calificacion: 80
            }
        ]
    }
]
//1. Retorna en un array las calificaciones de todos los estudiantes.
function obtenerCalificaciones(arr){
    let calificaciones = [];
    arr.forEach(objeto => {
        objeto.materias.forEach(materia => {calificaciones.push(materia.calificacion)});
    });
    return calificaciones;
}
console.log(obtenerCalificaciones(info));

//2. Retorna el promedio de cada uno de los alumnos, devolviendo un arreglo con objetos como esto: 
function obtenerPromedios(arr){
    var arr2 =[];
    var promediosss = 0;
    arr.forEach(objeto => {
        arr2.push(
            obj ={
                nombre: objeto.nombre,
                promedio: ( objeto.materias.reduce((total, next) => total + next.calificacion, 0) / objeto.materias.length )
            }
        );
    });
    return arr2;
}
console.log(obtenerPromedios(info));

/**/
let alumnos = [
  { 
    "Alumno": {
      "promedio": 8.6
    }
  },
  {
    "Alumno": {
      "promedio": 5.5
    }
  },
  {
    "Alumno": {
      "promedio": 5.5
    }
  }
]
//1. Retorna la calificación mas baja
function obtenerCalificacionBaja(arr){
    let calificaciones = [];

    arr.forEach(objeto => {
        calificaciones.push(objeto.Alumno.promedio);
    });
    
    return Math.min(...calificaciones);
}
console.log(obtenerCalificacionBaja(alumnos));
//2. Retorna la calificación mas alta
function obtenerCalificacionAlta(arr){
    let calificaciones = [];

    arr.forEach(objeto => {
        calificaciones.push(objeto.Alumno.promedio);
    });
    
    return Math.max(...calificaciones);
}
console.log(obtenerCalificacionAlta(alumnos));