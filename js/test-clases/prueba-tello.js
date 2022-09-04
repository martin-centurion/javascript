const carrito = [];

//funcion constructor
function Destino(tramo, precio) {
    this.name = tramo.toUpperCase();
    this.price = precio;
    this.agregarPasaje = () => {
        carrito.push(this.price);
       

    }
}


//Objetos con tramos y precios
const destino1 = new Destino('Bs.As-Cordoba', 3500);
const destino2 = new Destino('Cordoba-Bs.As', 3500);
const destino3 = new Destino('Bs.As-Santa Fe', 2750);
const destino4 = new Destino('Santa Fe-Bs.As', 2750);
const destino5 = new Destino('Santa Fe-Cordoba', 2500);
const destino6 = new Destino('Cordoba-Santa Fe', 2500);


total = 0;
let calcular = true;
let pasaje;
function elegirDestino() {
    while (calcular === true) {
        pasaje = parseInt(prompt('Elija la opción de viaje \n 1- Bs.As-Cordoba \n 2- Cordoba-Bs.As \n 3- Bs.As-Santa Fe \n 4- Santa Fe-Bs.As \n 5- Santa Fe-Cordoba \n 6- Cordoba-Santa Fe \n 7- FINALIZAR COMPRA'));

        switch (pasaje) {
            case 1:

                destino1.agregarPasaje();
                alert('usted selecciono el tramo Bs.As-Cordoba');
                break;

            case 2:

                destino2.agregarPasaje();
                alert('usted selecciono el tramo Cordoba-Bs.As');
                break;
            case 3:

                destino3.agregarPasaje();
                alert('usted selecciono el tramo Bs.As-Santa Fe');
                break;
            case 4:

                destino4.agregarPasaje();
                alert('usted selecciono el tramo Santa Fe-Bs.As');
                break;
            case 5:

                destino5.agregarPasaje();
                alert('usted selecciono el tramo Santa Fe-Cordoba');
                break;
            case 6:

                destino6.agregarPasaje();
                alert('usted selecciono el tramo Cordoba-Santa Fe');
                break;
            case 7:
                calcular = false;
                alert('Usted ha comprado pasajes por los sigueintes montos $ \n' + carrito.join('\n'));
                break;

            default:
                alert('Seleccionó una opción no válida');
        }
    }
}



function calcularPasaje() {
    for (let i = 0; i < carrito.lenght; i++) {
        precioTramo += carrito[i];
    }
    alert('El total de su compra es de $' + ' ' + precioTramo);
    return (precioTramo);

}

calcularPasaje();

console.log(calcularPasaje);