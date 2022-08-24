
let ingresarNombre = prompt('Ingrese su nombre');
let ingresarApellido = prompt('Ingrese su apellido');


while ((ingresarNombre !== ' ') && (ingresarApellido !== ' ')) {
    alert('Error: ingrese su nombre y apellido');
    ingresarNombre = prompt('Ingrese su nombre');
    ingresarApellido = prompt ('Ingrese su apellido');
}

alert('Bienvenido/a ' + ingresarNombre + ' ' + ingresarApellido);

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