let dni=[]
let nota=[]

function carga(){
    let i =0
    let real=0
    while(i<=5){
        do{
            do{
                dni[i]=parseInt(prompt("Ingrese el codigo del alumno"))
            }while (!(dni[i] >=0 && dni[i] <= 9999))
            let aux1=dni[i]
            real=validacion(aux1,i)
            if (real==true){
                console.log("El alumno que desea registrar ya esta en la planilla")
                alert("Ingrese otro codigo de alumno o ingrese 0 para terminar, El codigo que quiere ingresar ya esta registrado")
            }
        }while(!(real==false))
        do{
            nota[i]=parseInt(prompt("Ingrese la nota del alumno"))
            if (nota[i] >10){
                alert("Ingrese una nota menor a 10")
            }
        }while (!(nota[i] <= 10)) 
        i=i+1
        console.log(dni,nota)
    }
    alert("La carga ha sido correcta")
}
function validacion(dato,i){
    let encontrado=false
    let a=-1
    let inicio=0
    while (inicio< i){
        inicio=inicio+1
        a=a+1
        if (dato==dni[a]){
            encontrado=true
        }
    }
    return encontrado
}
function falso_burbuja(){
    let i
    let k
    let aux
   for(i=0;i<=5-1;i+=1){
    for(k=i+1;k<=5;k+=1){
        if (dni[i]<dni[k]){
            aux=dni[i]
            dni[i]=dni[k]
            dni[k]=aux
            aux=nota[i]
            nota[i]=nota[k]
            nota[k]=aux
        }
    }
   }
}
function menu(){
    alert("1-Para cargar alumnos 2-Mostrar alumnos ordeando de mayor a menor 3-Para hacer promedio de notas del aula 4-Para terminar")
    validacion_menu()
}
function promedio(){
    let b
    let sumador
    sumador=0
    for (b=0;b<nota.length;b+=1){
        sumador=nota[b]+sumador
    }
    return sumador / nota.length
}
function validacion_menu(){
    let opcion
    do{
            opcion=parseInt(prompt("Numero a ingresar"))
    }while (!(opcion >=1 && opcion <=4))
    while (opcion !=4){
        if (opcion==1){
            carga()
        }
        else if(opcion ==2){
            falso_burbuja()
            console.log(dni,nota)
        }
        else if(opcion ==3){
            console.log("El promedio de las notas es",promedio())
        }
        else{
            console.log("Ha salido del programa")
        }
        do{
            opcion=parseInt(prompt("Numero a ingresar"))
        }while (!(opcion >=1 && opcion <=4))

    }

}
menu()