
class Productos {
    constructor(nombre, precio, color) {
        this.name = nombre;
        this.price = precio;
        this.color = color;
        this.agregarCarrito = () => {
            Carrito.push(this.name);
            total = this.price + total;
        };
    }
}

const producto1 = new Productos ('yerba', 750, 'verde');
const producto2 = new Productos ('jabon', 150, 'azul');
const producto3 = new Productos ('azucar', 450, 'marron');
const producto4 = new Productos ('arroz', 200, 'gris');
const producto5 = new Productos ('balde', 550, 'verde');
const producto6 = new Productos ('Martillo', 200, 'negro');


let total = 0;
const Carrito = [];

let comprar = true;

while (comprar) {
    let producto = prompt('Escoja producto:\nYerba\nJabon\nAzucar');
if (producto === 'yerba') {
    producto1.agregarCarrito();
    alert('Seleccionaste ' + producto);
} else if (producto === 'jabon'){
    producto2.agregarCarrito();
    alert('Seleccionaste ' + producto);
} else if (producto === 'azucar'){
    producto3.agregarCarrito();
    alert('Seleccionaste ' + producto);
} else if (producto === 'salir') {
    comprar = false;
    alert('Los productos escogidos:\n' + Carrito.join('\n') + '\nPrecio total de compra: $' + total);
} else {
    alert('No compraste nada');   
}
}


//const colorProducto = ['naranja', 'amarillo', 'verde', 'violeta'];


// const shampoo = {
//     nombre: 'plusbelle',
//     precio: 250,
//     color: 'naranja',
//     alternativas : {
//         primero: 'chico',
//         segundo: 'grande',
//     }
// }

// let hijosDeShampoo = (shampoo.hijos);
// console.log((hijosDeShampoo).primero);

//console.log(producto3.price);

//const coloresDeProducto = [];


// let compra = prompt('Ingrese un producto');
// Carrito.push(compra);
// compra = prompt('Ingrese un producto');
// Carrito.push(compra);
// compra = prompt('Ingrese un producto');
// Carrito.push(compra);
// alert('Usted se lleva los siguiente:\n' + Carrito[0] + '\n' + Carrito[1] + '\n' + Carrito[2]);

// for (i = 0; i < Carrito.length ; i++) {
//     alert(Carrito[i]);
// }

//producto4.mostrarNombre();

//coloresDeProducto.push(producto1.color, producto2.color, producto3.color, producto4.color, producto5.color);
//coloresDeProducto.unshift(producto6.color);

//console.log(coloresDeProducto);