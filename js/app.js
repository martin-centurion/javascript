// while

let edad = parseInt (prompt('Ingresa tu edad'));

while (edad < 18) {
    console.log('No puedes ingresar, eres menor de 18');
    edad = parseInt(prompt('Ingresa tu edad'));
}

// Prompt - Multiplicacion

let valor = parseInt(prompt('Ingrese un numero'));
let multiplo = parseInt(prompt('Ingresa un limite'));

for (let index = 0; index < multiplo; index++) {
    let resultado = valor * index;
    console.log(valor + ' * ' + index + ' = ' + resultado);
}


// For
let palabraClave = 'cafe';

for (let index = 1; index <= 3; index++){
    let palabraUsuario = prompt ('Ingrese su Password');
    if (palabraClave === palabraUsuario) {
        console.log('Respuesta Correcta');
        break;
    }else{
        console.log('Te quedan ' + (3 - index) + ' intentos');
    }
    if (index == 3) {
        console.log('Actualiza para intentarlo de nuevo :(');
    }
}