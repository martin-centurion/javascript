// let ingreso = prompt(
//     'Ingresa una opción \n 1-Café \n 2-Café con leche \n 3-Té \n 4-Té con lehce \n 5-Agua caliente'
// );

// switch (ingreso) {
//     case '1':
//         alert('Seleccionaste Café')
//         break;
//     case '2':
//         alert('Seleccionaste Café con leche')
//         break;
//     case '3':
//         alert('Seleccionaste Té')
//         break;
//     case '4':
//         alert('Seleccionaste Té con leche')
//         break;
//     case '5':
//         alert('Seleccionaste Agua Caliente')
//         break;
//     default:
//         alert('Opción no valida')
//         break;
// }

//funciones
//declarar una funcion

// function saludar(){
//     //codigo a ejecutar
//     alert('Hola, cómo estás?')
// }
// //llamar a la funcióm
// //saludar();

// function solicitarNombre(){
//     let nombre = prompt('Ingresa tu nombre');
//     alert(nombre);
// }

// solicitarNombre();

// function (parametros)
// function saludar(nombre, apellido){
//     alert('Hola, ' + nombre + ' ' + apellido + ' como estas?')
// }

// let ingresarNombre = prompt('Ingresa tu nombre');
// let ingresarApellido = prompt('Ingresa tu apellido');

// //pasamos a la function argumentos
// //Un argumento es el valor que es pasado a la función cuando esta es llamada 
// //(es el término para el momento en que se llama)

// saludar(ingresarNombre, ingresarApellido);

// function sumar(parametro1, parametro2) {
//     if (parametro1 == "" || parametro2 == "") {
//       alert("No puedes tener campos vacios");
//     } else {
//         let num1 = parseInt(parametro1)
//         let num2 = parseInt(parametro2)
//       alert(num1 + num2);
//     }
// }
// let num1 = prompt("Ingresa el primer numero");
// let num2 = prompt("Ingresa el segundo numero");
  
// sumar(num1, num2);

/*
function sumar (parametro1, parametro2){

    if(isNaN(parametro1) || isNaN(parametro2)) {
        alert('No puedes tener campos vacios');
    }else{
        alert(parametro1 + parametro2);
    }
}

let num1 = parseFloat(prompt('Ingresa el primer numero'));
let num2 = parseFloat(prompt('Ingresa el segundo numero'));

sumar(num1, num2);
*/

//Esto se llama Scope lo de las variables locales y globales
//variables locales y globales

/*let resultado = 0;
//console.log(resultado);

function sumar (n1, n2){
    //let resultado = 0;
    // variables locales
    //let resultado = n1+n1;
    return n1 + n2;
    //console.log(resultado);
    //alert(resultado);
}

console.log(sumar(23, 54));
let valorDeLaSuma = sumar(3, 54) * 2;
console.log(valorDeLaSuma);
//console.log(resultado);*/

function mostrar(mensaje){
    console.log(mensaje);
}

//funcion anonima
/*const sumar = function (n1, n2){
    return n1 + n2;
};*/

/*const sumar = (n1, n2)=>{
    return n1 + n2;
}

mostrar(sumnar(34,6));
mostrar(sumnar(123,18));*/


//OBJETOS

/*let nombre = "Homero";
let apellido = "Simpson";
let calle = "Av Siempreviva 742";
let edad = 38;
let nombre2= "Marge";
let apellido2 = "Bouvier";
let calle2 = "Av Siempreviva 742";
let edad2 = 38;*/

const personaje1 = {
    nombre : 'Homero',
    apellido : 'Simpson',
    calle : 'Av Siempreviva 742', 
    edad : 38,
};

const personaje2 = {
    nombre : 'Marge',
    apellido : 'Simpson',
    calle : 'Av Siempreviva 742', 
    edad : 39,
    hijos:{
        primero : 'Bart',
        segundo : 'Lisa',
        tercero : 'Maggie',
        cuarto : 'Hugo',
    }
};

mostrar(personaje1);
mostrar(personaje1['nombre']);
mostrar(personaje2);
mostrar(personaje2['nombre']);
mostrar(personaje2['edad']);
mostrar(personaje2['hijos']);

mostrar(personaje1.edad);

const hijosDeMarge = personaje2.hijos;
console.log(hijosDeMarge);
console.log(hijosDeMarge.primero);
console.log(hijosDeMarge.segundo);

const auto1 = {
    marca : 'vw',
    anio : 2014,
    motor : 1.5,
    modelo : 'Gol',
};

const auto2 = {
    marca : 'Toyota',
    anio : 2014,
    motor : 1.5,
    modelo : 'Etios',
};

/*console.log(auto1);
console.log(auto2);
auto2.anio = 2018;
auto2.color = 'Gris';
console.log(auto2);*/

// function constructora, se crea de la manera tradicional

function Auto(marca, anio, motor, modelo){
    this.marca = marca;
    this.anio = anio;
    this.motor = motor;
    this.modelo = modelo;
    this.marchar = () => {
        console.log('Estoy en marcha');
    }
    this.presentar = () => {
        console.log('Soy un auto modelo ' + this.modelo + ' año:' + this.anio);
    }
    this.vender = () => {
        console.log('Fui vendido');
    }
}

const auto3 = new Auto('Audi', 2022, 3.9, 'TT');
const auto4 = new Auto('Ford', 1974, 3.9, 'Falcon');

auto3.marchar();
auto4.marchar();
auto3.presentar();
auto4.presentar();
auto4.vender();

let ingresoMarca = prompt('Ingresar marca');
let ingresoAnio = prompt('Ingresar año');
let ingresoMotor = prompt('Ingresar motor');
let ingresoModelo = prompt('Ingresar modelo');

const auto5 = new Auto(ingresoMarca, ingresoAnio, ingresoMotor, ingresoModelo);

console.log('marca' in auto4);
console.log('color' in auto4);


//bucle for in

for (const atributos in auto4) {
    console.log(atributos + ':' + auto4[atributos]);
}

//crear una function cargar autos/productos y ademas que me permita agregar 3 autos de una sola vez

//Metodos de los objetos

/*let usuario = prompt('Ingresa tu usuario');
let usuarioGuardado = usuario.toLowerCase();*/

/*console.log(usuario);
console.log(usuarioGuardado);*/
/*let frase = 'js se aprende practicando';
let fraseMayus = frase.toUpperCase;
console.log(fraseMayus);
console.log(frase.length);*/

