//### Problema 1:
//Crea una función para encontrar la diferencia de edad entre el miembro mas viejo y el más jóven de la familia. 
//Retorna como resultado un objeto indicando las edades de cada miembro, y la diferencia de edad.
//```jsx
const Family = [
    {
      name: 'John',
      age: 13
    },
    {
      name: 'Mark',
      age: 56,
    },
    {
      name: 'Rachel',
      age: 45,
    },
    {
      name: 'Nate',
      age: 67,
    },
    {
      name: 'Jeniffer',
      age: 65,
    }
  ];

  function obtenerDiferencia(arr){
    arr.sort( (a,b) => a.age - b.age );
    var obj = {
        oldest: arr[arr.length-1].age,
        youngest: arr[0].age,
        'age-difference': arr[arr.length-1].age - arr[0].age
    };
    return obj;
  }
  console.log(obtenerDiferencia(Family));