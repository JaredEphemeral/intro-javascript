/*Problema 1*/
var animals = ['eagle', 'parrot', 'monkey', 'boar', 'lion'];
var comingSoonAnimals = ['panter', 'dragon', 'turtle'];
var arreglosCocatenados = animals.concat(comingSoonAnimals);
console.log(arreglosCocatenados);

/*Problema 1.1*/
var arreglo = [4,6,1,0,8,2,45,11,5,33,50,101];
arreglo.sort(function(a,b){return a-b});
console.log(arreglo);

/*Problema 1.2*/
arreglosCocatenados.push('cow');
console.log(arreglosCocatenados);

/*Problema 1.3*/
arreglosCocatenados.pop('eagle');
console.log(arreglosCocatenados);
/*Problema 1.4*/
console.log(arreglosCocatenados.indexOf('parrot'));