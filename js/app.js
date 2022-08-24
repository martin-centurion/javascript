
let ingresarNombre = prompt('Ingrese su nombre');

while (ingresarNombre == '') {
    alert('Error: Por favor, ingrese su nombre');
    ingresarNombre = prompt('Ingrese su nombre');
}

let ingresarApellido = prompt('Ingrese su apellido');

while (ingresarApellido == '') {
    alert('Error: Por favor, ingrese su apellido');
    ingresarApellido = prompt('Ingrese su apellido');
}

alert('Bienvenido/a ' + ingresarNombre + ' ' + ingresarApellido);

let bienvenido = false;
do {
    alert(ingresarNombre + ' ' + ingresarApellido + ', contesta las siguientes preguntas, por favor');
} while (bienvenido) {
    
}

let ingresarClub = prompt('De que club eres hincha?');
let ingresarColor = prompt('Cual es tu color preferido?');

while (ingresarClub == '' && ingresarColor == '') {
    alert('Error: Conteste las preguntas, por favor');
    ingresarClub = prompt('De que club eres hincha?');
    ingresarColor = prompt('Cual es tu color preferido?');
}

alert('Gracias por responder, sos hincha de ' + ingresarClub + ' y tu color preferido es ' + ingresarColor );




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