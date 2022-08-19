let acierto = false;
let contador = 0;
let respuesta = '';

while (contador < 3 && acierto === false) {
    let respuestaUsuario = prompt('Capital de Canada');
    if (respuestaUsuario === respuesta) {
        acierto = true;
        alert('Acertaste');
    }
    contador++;
}