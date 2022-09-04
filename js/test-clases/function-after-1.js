function solicitarNombre (){
    alert('Bienvenidos a kiosco 24hs');
    let nombre = prompt('Ingrese su nombre');
    while(nombre === ''){
        nombre = prompt ('Ingrese su nombre');
    }
}

function mostrarProductos () {
    let producto;
    do {
        producto = parseInt(prompt('Seleccione:\n1 - Cerdo \n2 - Vacuno \n3 - Pollo'))
    } while (producto != 1 && producto != 2 && producto !=3);
    switch(producto){
        case 1:
            return 'Cerdo';
        case 2:
            return 'Vacuno';
        case 3:
            return 'Pollo';
    }
}

function validarPrecio (producto) {
    if(producto === 'Cerdo'){
        return 500;
    }
    else if (producto === 'Vacuno') {
        return 300;
    }else if (producto === 'Pollo'){
        return 1000;
    }
}

function cobrar (nombre, precio){
    alert('Usted lleva el siguiente producto ' + nombre + '\nPrecio: $' + precio);
    let pago = parseInt(prompt('Con cuanto pagas?'));
    if(pago => precio) {
        alert('Gracias! Su vuelto es ' + (pago - precio))
    }else{
        alert('No te alcanza!')
    }
}

solicitarNombre();
let productoNombre = mostrarProductos();
let precioProducto = validarPrecio(productoNombre);
cobrar(productoNombre, precioProducto);