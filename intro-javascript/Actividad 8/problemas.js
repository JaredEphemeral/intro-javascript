// Ejercicios de Objetos y sus métodos básicos:
/** Del siguiente objeto: **/
    var student = {
        name: "David Rayy",
        age: 34,
        job: "engineer",
        hobbies: ['Sky', 'football', 'walking my dog']
    };
/*1. Muestra en pantalla el valor de la propiedad name mediante dot notation */
console.log(student.name);
/*   2. Muestra en pantalla el valor de la propiedad age mediante bracket notation */
console.log(student['age']);
/*   3. Modifica el valor de la propiedad name y que el nuevo valor sea: "Steve Jobs" */
student.name= "Steve Jobs";
console.log(student.name);


/**
 * Escriba un programa de JavaScript para enumerar las propiedades de un objeto de JavaScript.
    Objeto de muestra: */
    var student = {
        name: "David Rayy",
        sclass: "VI",
        rollno: 12
    };

    let ennumerados = Object.keys(student)
    console.log(ennumerados);
/**
 * Verifica si la propiedad name se encuentra dentro del siguiente objeto: */
     var student2 = {
        name: "David Rayy",
        sclass: "VI",
        rollno: 12
    };

    if('name' in student2){
        console.log("Si esta name");
    }
    else{
        console.log("No esta name");
    }
    
/** 
 * Escriba un programa de JavaScript para eliminar la propiedad rollno del siguiente objeto. 
 * Imprima también el objeto antes o después de eliminar la propiedad. 
 * Objeto para usar:*/
  var student3 = {
        name: "David Rayy",
        sclass: "VI",
        rollno: 12
    };
    console.log(student3);
    delete student3['rollno'];
    console.log(student3);
/**
 * Escriba un programa para modificar el valor de la segunda propiedad del siguiente objeto: */
    var student4 = {
        name: "David Rayy",
        age: 34,
        job: "engineer",
        hobbies: ['Sky', 'football', 'walking my dog']
    };
/*La nueva edad debe ser 35.*/ 
student4[1] = 0;
console.log(student4);

/**
 * Escriba un programa para añadir una nueva propiedad al siguiente objeto: */
  var student = {
        name: "David Rayy",
        age: 34,
        job: "engineer",
        hobbies: ['Sky', 'football', 'walking my dog']
    };
  /*  La nueva propiedad debe ser: pet y agregue un valor, ejemplo: cat, dog.
 */
student['pet'] = ['cat', 'dog'];
console.log(student);

/**
 * Crea un código para llenar un objecto vacio:
 * 
 * const objeto = {}
 * 
 * Con las siguiente propiedades:
    * color
    * tamaño
    * peso
    * cantidad
    * 
*/
const objeto = {};
Object.defineProperties(objeto, {
    "color" : { value : "azul", writable: true},
    "tamaño": { value: "Grande", writable: true },
    "peso": { value: 80.20, writable: true },
    "cantidad":{ value: 2 , writable: true}
});
console.log(objeto);


/*una función que reciba un objeto y un string…
El string va a ser el nombre de una propiedad, y
esa función tiene que validar si existe esa propiedad dentro del objeto que le mandes
la función debe retornar true o false*/

function llenarObjeto(objeto, propiedad){
    return objeto.hasOwnProperty('propiedad')
}

const objNuevo = {};
if(!(llenarObjeto(objNuevo,'mascota'))){
    objNuevo['mascota'] = '';
}
console.log(objNuevo);

/*Create an object that will be filled only by a function inside of it,
    and not from someone outside of it's function.. example:
let myObject = {
    myFunction: function ()... // This function is supposed to fill this object
}
myObject.myNewProp = "Hello world" // This should throw an exception or error because we don't want this object to be filled from outside...
It supposed to be filled using it's own function
Add any type of element on the object.. arrays, objects, int, strings, etc*/
const objec = {
    funcion: function funcionLlenar( propiedad ){
        objec[propiedad] = '';
    }
}
objec.funcion('Años');
console.log(objec);

/*var simpleExercise = [{a: 11, b:224, name: "M48 Bulldog"}, {a:23, b:56, name: "Object 140"}, {a: 32, b:75, name: "T57 Heavy"}];
Hacer una función para que reciba ese arreglo de objetos
y que retorne la suma de "a" y "b" de cada objeto y concatenarlo
// al String "name" para que devuelva algo así:
//     ["235 M48 Bulldog-=-79 Object 140-=-107 T57 Heavy" ]*/
var simpleExercise = [{a: 11, b:224, name: "M48 Bulldog"}, {a:23, b:56, name: "Object 140"}, {a: 32, b:75, name: "T57 Heavy"}]
function funcionSimple (arreglo) {
    console.log( )
}