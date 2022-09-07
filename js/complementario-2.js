function saludar () {
    alert('Bienvenidos a Tienda de Ropa');
}

function ingreseSuNombre () {
    let nombre = prompt ('Hola, ingrese su nombre');
    alert(`La verdad que un gusto, ${nombre}. Gracias por visitarnos.`)
}

class Productos {
    constructor(prenda, talle, precio) {
        this.prenda = prenda;
        this.talle = talle;
        this.precio = precio;
        this.agregarCarrito = () => {
            Carrito.push(this.prenda);
            total = this.precio + total;
        };
    }
}

const producto1 = new Productos ('remera', 'xs', 800);
const producto2 = new Productos ('pantalon', 's', 850);
const producto3 = new Productos ('camisa', 'm', 900);
const producto4 = new Productos ('vestido', 'l', 950);


saludar();
ingreseSuNombre();

let total = 0;
const Carrito = [];

let comprar = true;

while (comprar) {
    let producto = prompt ('Escoja una prenda:\n1 - Remera\n2 - Pantalon\n3 - Camisa\n4 - Vestido\n5 - Salir');

    if (producto === 'remera') {
        producto1.agregarCarrito();
        alert(`Seleccionaste ${producto}`)
    } else if (producto === 'pantalon') {
        producto2.agregarCarrito();
        alert(`Seleccionaste ${producto}`)
    } else if (producto === 'camisa') {
        producto3.agregarCarrito();
        alert(`Seleccionaste ${producto}`)
    } else if (producto === 'vestido') {
        producto4.agregarCarrito();
        alert(`Seleccionaste ${producto}`)
    } else if (producto === 'salir') {
        comprar = false;
        alert (`Los productos escogidos:\n${Carrito.join('\n')} \nPrecio toral de compra: $${total}`);
    } else {
        alert(`No compraste nada.`);
    }

}







