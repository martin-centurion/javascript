// let acierto = false;
// let contador = 0;
// let respuesta = 'uno';

// while (contador < 3 && acierto === false){
//     let respuestaUsuario = prompt('Numero 1');
//     if (respuestaUsuario === respuesta) {
//         acierto = true;
//         alert('Acertaste')
//     }
//     contador ++;
//     alert('Te quedan ' + (3 - contador) + ' intentos');
// }

// if(!acierto) {
//     alert ('Actualiza para intentar de nuevo');
// }


// let categoria = parseInt (prompt("Indique su categoria "));

// while (categoria<1 || categoria>3)
//     alert("Ingrese una categoria correcta");


    
    //   let categoria;
    //   do {
    //       categoria = parseInt(prompt('Seleccione categoria:\nCategoria 1\nCategoria 2 \nCategoria 3'))
    //   } while (categoria != 1 && categoria != 2 && categoria !=3);


function solicitarNombre (){
    alert('Bienvenidos a Concesionaria VolksWagen');
    let nombre = prompt('Ingrese su nombre');
    while(nombre === ''){
            nombre = prompt ('Ingrese su nombre');
    }
}

function elegirModelo() {
    let modelo;
    do {
       modelo = parseInt(prompt("Ingrese el modelo de su Volkswagen.\n\nEjemplo seleccione '1' para Gol Power.\n\n1- Gol Power \n2- Gol Trend \n3- Up \n4- Saveiro \n5- Golf \n6- Vento \n7- Passat \n8- Amarok"));
    } while (modelo !=1 && modelo !=2 && modelo !=3 && modelo !=4 && modelo !=5 && modelo !=6 && modelo !=7 && modelo !=8);
    switch(modelo){
        case 1:
            return 'Gol Power';
        case 2:
            return 'Gol Trend';
        case 3:
            return 'Up';
        case 4:
            return 'Saveiro';
        case 5:
            return 'Golf';
        case 6:
            return 'Vento';
        case 7:
            return 'Passat';
        case 8:
            return 'Amarok';
    }
}

function elegirVersion() {
    let version;
    do {
        version = parseInt(prompt("Ingrese la Version de su Volkswagen.\n\nEjemplo seleccione '1' para Trendline.\n\n1- Trendline \n2- Comfortline \n3- Highline \n4- Sportline"));
    } while (version !=1 && version !=2 && version !=3 && version !=4);
    switch(version){
        case 1:
            return 'Trendline';
        case 2:
            return 'Comfortline';
        case 3:
            return 'Highline';
        case 4:
            return 'Sportsline';
    }
}

function elegirAnio() {
    let anio;
    do {
        anio = parseInt(prompt("Ingrese el año de fabricacion de su Volkswagen.\n\nEjemplo seleccione '1' para 2018.\n\n1- 2018 \n2- 2019 \n3- 2020 \n4- 2021 \n5- 2022"));
    } while (anio !=1 && anio !=2 && anio !=3 && anio !=4 && anio !=5);
    switch(anio){
        case 1:
            return '2018';
        case 2:
            return '2019';
        case 3:
            return '2020';
        case 4:
            return '2021';
        case 5:
            return '2022';
    }
}

function validarPrecio (modelo, version, anio) {

    if (modelo === 'Gol Power' && version === 'Trendline' && anio === '2018') {
                return 100000;
    } else if (modelo === 'Gol Power' && version === 'Trendline' && anio === '2019') {
                return 110000;
    } else if (modelo === 'Gol Power' && version === 'Trendline' && anio === '2020') {
                return 120000;
    } else if (modelo === 'Gol Power' && version === 'Trendline' && anio === '2021') {
                return 130000;
    } else if (modelo === 'Gol Power' && version === 'Trendline' && anio === '2022') {
                return 140000;
    } else if (modelo === 'Gol Power' && version === 'Comfortline' && anio === '2018') {
                    return 100000;
    } else if (modelo === 'Gol Power' && version === 'Comfortline' && anio === '2019') {
                    return 110000;
    } else if (modelo === 'Gol Power' && version === 'Comfortline' && anio === '2020') {
                    return 120000;
    } else if (modelo === 'Gol Power' && version === 'Comfortline' && anio === '2021') {
                    return 130000;
    } else if (modelo === 'Gol Power' && version === 'Comfortline' && anio === '2022') {
                    return 140000;
    } else if (modelo === 'Gol Power' && version === 'Highline' && anio === '2018') {
                    return 100000;
    } else if (modelo === 'Gol Power' && version === 'Highline' && anio === '2019') {
                    return 110000;
    } else if (modelo === 'Gol Power' && version === 'Highline' && anio === '2020') {
                    return 120000;
    } else if (modelo === 'Gol Power' && version === 'Highline' && anio === '2021') {
                    return 130000;
    } else if (modelo === 'Gol Power' && version === 'Highline' && anio === '2022') {
                    return 140000;
    } else if (modelo === 'Gol Power' && version === 'Sportsline' && anio === '2018') {
                    return 100000;
    } else if (modelo === 'Gol Power' && version === 'Sportsline' && anio === '2019') {
                    return 110000;
    } else if (modelo === 'Gol Power' && version === 'Sportsline' && anio === '2020') {
                    return 120000;
    } else if (modelo === 'Gol Power' && version === 'Sportsline' && anio === '2021') {
                    return 130000;
    } else if (modelo === 'Gol Power' && version === 'Sportsline' && anio === '2022') {
                    return 140000;
}
}

function presupuesto (nombre, version, anio, precio){
    alert('El presupuesto de ' + nombre + ' ' + version + ' ' + anio + '\nes: $' + precio)
}

function saludoFinal (){
    alert('Gracias por su consulta');{
    }
}

solicitarNombre();
let modeloNombre = elegirModelo();
let versionNombre = elegirVersion();
let anioNombre = elegirAnio();
let precioProducto = validarPrecio(modeloNombre, versionNombre, anioNombre);
presupuesto(modeloNombre, versionNombre, anioNombre, precioProducto);


saludoFinal();
// solicitarNombre();
// let autoModelo = elegirModelo();
// let autoVersion = elegirVersion();
// let autoAnio = elegirAnio();
// validarPrecio (autoModelo, autoVersion, autoAnio);
// let precioAuto = validarPrecio(nombreAuto);


/*solicitarNombre();
let productoNombre = mostrarProductos();
let precioProducto = validarPrecio(productoNombre);
cobrar(productoNombre, precioProducto);*/