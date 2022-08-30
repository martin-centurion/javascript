// Arrays

const array = [];
console.log(array);
let nombre = 'Pepe';
const numeros = [1,2,3,4,65,6,7,1,2,-9,5];
//console.log(numeros);

const mixto = [1, 'Batman', false, {nombre: 'German'}, 3.4, nombre];
/*console.log(mixto);
console.log(mixto.length);
console.log(mixto[1]);
console.log(mixto[2]);
console.log(mixto[2]);
console.log(mixto[3]);
console.log(mixto[4]);*/


//recorriendo el array o iterando el array
/*for (let i = 0; i < mixto.length; i++){
    console.log(mixto[i]);
}

for (let i = 0; i < numeros.length; i++){
    console.log(numeros[i]);
}*/

/*array.push('Juan', 1, false);
console.log(array);*/

/*push: agrega al final
pop: borra al final
unshift: agrega al principio
shift: borra el principio
*/

/*mixto.push(44);
console.log(mixto);
mixto.unshift('Hola');
console.log(mixto);
mixto.pop();
console.log(mixto);
mixto.shift();
console.log(mixto);

mixto.splice(2, 1);
console.log(mixto);*/

// console.log(numeros.join('/'));
 
/*const concatenado = mixto.concat(numeros);
console.log(concatenado);


console.log(mixto.indexOf('Juan'));
console.log(mixto.indexOf(1));
console.log(mixto.indexOf('Batman'));

console.log(mixto.includes(3));
console.log(mixto.includes('Batman'));*/

//arrays de objetos

const arroz = {nombre: 'Gallo', peso: 500, precio : 180};
const productos = [];

function Producto (nombre, precio, peso) {
    this.nombre = nombre;
    this.precio = parseFloat(precio);
    this.peso = peso;

    this.sumarIva = () => {
        this.precio = this.precio * 1.21;
    }
}

const productoNuevo = new Producto ('Azucar', 195, 1000);
const productoNuevo1 = new Producto ('Peras', 250, 1000);
console.log(productoNuevo.precio);
productoNuevo.sumarIva();
console.log(productoNuevo.precio);


function cargarProductos (producto) {
    productos.push(producto);

}

function

cargarProductos(arroz);
cargarProductos(productoNuevo);
cargarProductos(productoNuevo1);


//productos.push(arroz);

console.log(productos);

/*for (let i = 0; i < productos.length; i++) {
    const element = productos[i];
    console.log(element);
}*/

for (const propiedad of productos) {
    console.log(propiedad);
}