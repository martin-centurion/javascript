const numeros = [1,2,3,4,5];

console.log(numeros[0]);
console.log(numeros[3]);

let resultados = numeros[1] + numeros [2];
console.log(resultados);

//Decimos que estamos recorriendo un Array cuando empleamos un bucle para acceder a cada elemento separado
//Los array en JavaScript son objetos iterables

const numeros1 = [1,2,3,4,5];

for (let index = 0; index < 5; index++) {
    alert(numeros[index]);
    console.log(numeros1);
    
}


//Al igual que un string, la propiedad length nos sirve para obtener el largo de un Array, es decir, para identificar cuantos elementos tiene.
const miArray = ['marca', 3, 'palabra'];
console.log(miArray.length);


const numeros2 = [1,2,3,4,5,6,7,8];

for (let index = 0; index < numeros2.length; index++) {
    alert(numeros2[index]);
    
}


//Agregar elementos a un Array se utiliza el metodo push, pasando como paramatro el valor (o variable) a agregar

const miArray1 = ['marca', 3, 'palabra']
miArray1.push('ultimo');
console.log(miArray1.length);
console.log(miArray1);

//Metodo Push agrega al final elementos y el metodo unshif() agrega el elemento al inicio
const miArray2 = ['marca', 3, 'palabra']
miArray2.unshift('primero');
console.log(miArray2);


//Quitar elementos del array con el metodo shift('elimina el primero') y pop('elimina el ultimo')

const nombres = ['Luis', 'Ana', 'Martin', 'Daniel'];
console.log(nombres);
nombres.pop();
console.log(nombres);
nombres.shift ();
console.log(nombres);

