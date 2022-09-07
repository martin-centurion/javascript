  //metodos de busqueda y transformacion
  const nombres = ["Hugo", "Paco", "Luis"];
  const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 12, 23, 21, 4, 543, 4, 6];
  


//retornar funciones

function mayorQue(n){
    return (m)=> m > n;
  }

  let mayorQueDoce = mayorQue(12);

  console.log(mayorQueDoce(13));
  console.log(mayorQueDoce(4));

  function asignarOp(op){
    if(op == 'sumar'){
        return (n1, n2) => n1 + n2;
    } else if (op == 'restar') {
        return (n1, n2) => n1 - n2;
    }
  }

  let suma = asignarOp('sumar');
  let resta = asignarOp('restar');

  console.log(suma(12,5));
  console.log(resta(12,5));

  //recibir funciones por parametros, es dintinto a retornar funciones

  function porCadaUno (arr, fn) {
    for (const element of arr) {
        fn(element);
    }
  }

  //porCadaUno(numeros, console.log);


//   const duplicado = [];

//   porCadaUno(numeros, (element)=> {
//     duplicado.push(element * 2);
//   })

//   console.log(numeros);
//   console.log(duplicado);


  //metodos de busqueda y transformacion
  //for each
  // num seria el parametro

  numeros.forEach((num)=>{
    console.log(num);
  })



  const productos = [
    { id: 1, nombre: "Arroz", precio: 124 },
    { id: 2, nombre: "Papa", precio: 90 },
    { id: 3, nombre: "Tomate", precio: 204 },
    { id: 4, nombre: "Morrón", precio: 870 },
    { id: 5, nombre: "Pan", precio: 240 },
    { id: 6, nombre: "Fideos", precio: 124 },
  ];

  //find

  let encontrado = productos.find(el => {
    return el.precio === 'Papa';
  })

  console.log(encontrado.precio = 400);
  console.log(encontrado);


  //filter()

  const mayorPrecio = productos.filter(el => {
    return el.precio < 200;
  })

  console.log(mayorPrecio);



  // some

  //let ingreso = prompt('ingrese un producto');

  const existe = productos.some(productos => {
    return productos.nombre === 'ingreso';
  })

  console.log(existe);


  // map

  const Nombres = productos.map(producto => {
    return producto.nombre;
  })

  const actualizarPrecios = productos.map(producto => {
    return {
        id: producto.id,
        nombre: producto.nombre,
        precio: producto.precio * 2.5,
    };
  });


  console.log(actualizarPrecios);

  // reduce(recibe la funcion y un parametro que es el valor inicial)

  const total = productos.reduce((acc, el) => {
    return acc + el.precio;
  },0); // que es el cero? el cero es parte del parametro del reduce

  console.log(total);


  // math

  console.log(Math.PI);
  console.log(Math.max(12,33.4,34,21,2)); // selecciona el de mayor valor
  console.log(Math.max(12,33.4,34,21,2)); // selecciona el de menor valor
  console.log(Math.ceil(3.4)); // redondea para arriba
  console.log(Math.floor(3.4)); // redondea al entero mas cercano
  console.log(Math.round(3.4)); // redondea para arriba
  console.log(Math.sqrt(3.49)); // raiz cuadrada
  console.log(Math.random()); //devuelve un numero entre cero y uno
  console.log(Math.floor(Math.random()*100));

