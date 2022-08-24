
let ingresarNombre = prompt('Ingresa tu nombre');
let ingresarApellido = prompt('Ingresar apellido');
let bienvenidos = false;

do {
    alert('Hola, ' + ingresarNombre + ' ' + ingresarApellido)
} while (bienvenidos);

let preguntas = false;
do {
    alert(ingresarNombre + ', contesta las siguientes preguntas, por favor')
} while (preguntas);

for (let index = 1; index <= 3; index++) {
    let ingresarClub = prompt('De que club eres hincha?');
    let ingresarColor = prompt('Cual es tu color preferido?');
    alert('Gracias por responder, sos hincha de ' + ingresarClub + ' y tu signo es ' + ingresarColor );
    if ((ingresarClub !== '') && (ingresarColor !== '')) {
        break;
    } else {
        alert('Conteste las preguntas por favor')
    }
}

let palabraClave = 'cafe';

for (let index = 1; index <= 3; index++){
    let palabraUsuario = prompt ('Ingrese su Password (pass: cafe)');
    if (palabraClave === palabraUsuario) {
        console.log ('Respuesta Correcta');
        alert('Gracias por su tiempo, ' + ingresarNombre + '. Bienvenido a programación');
        break;
    }else{
        console.log ('Te quedan ' + (3 - index) + ' intentos');
        alert('Te quedan ' + (3 - index) + ' intentos');
    }
    if (index == 3) {
        console.log('Actualiza para intentarlo de nuevo :(');
        alert('Actualiza para intentalo de nuevo')
    }
}