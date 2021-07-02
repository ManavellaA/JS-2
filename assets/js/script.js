//function logUser (){
//    let nombre = prompt(`Ingresa un nombre de usuario`);
//    while( ! nombre || nombre === " "){
//        alert(`Dato no Ingresado`);
//        nombre = prompt(`Ingresar un nombre de usuario`);
//    }
//    return user = nombre;
//}
//logUser();
function calcImc(){
    let imc = document.getElementById("btn_imc");
    imc.addEventListener("click", validacion);

        function validacion(){
            let peso = document.getElementById("calc_peso").value;
            let altura = document.getElementById("calc_altura").value;

            peso = parseInt(peso);
            altura = parseInt(altura);

            if( peso > 0 && altura > 0 ){
                let calc = (peso * ((altura/100) * (altura/100)))/10;
                let imc = calc.toFixed(2);
                //DIV de contenido 
                let contenedorNuevo = document.createElement("div");
                contenedorNuevo.setAttribute("id", "div_imc");
                let contenedorNuevoData = document.createElement("div");
                contenedorNuevoData.innerHTML = 
                     `<p>Tu IMC es: <strong style="color: blue">${imc}</strong></p>
                     <p>Segun la OMS clasificaria como:</p>
                     <p style="color: blue"><strong>${ImcClasificacion(imc)}</strong></p>`
                contenedorNuevo.appendChild(contenedorNuevoData);
                //Intercambio
                let contenedorViejo = document.getElementById("div_imc");
                let nodoPadre = contenedorViejo.parentNode
                nodoPadre.replaceChild(contenedorNuevo, contenedorViejo);
            }else{
                alert("No ingresaste todos los campos requeridos");
            }
        }
}
calcImc();

function ImcClasificacion(valor){
    
    if(valor < 18.5){
        return "Bajo Peso"
    }
    else if(valor < 24.9){   
        return "Peso Normal"
    }
    else if(valor < 29.9){
        return "Sobrepeso"
    }
    else if(valor < 34.9){
        return "Obesidad Tipo 1"
    }
    else if(valor < 39.9){
        return "Obesidad Tipo 2"
    }
    else{
        return "Obesidad Tipo 3"
    }
}

function mensaje(){

    //Al no tener donde enviar el mensaje lo almaceno en el local Storage

    let nombre = document.getElementById("contactoNombre").value;
    let email = document.getElementById("contactoEmail").value;
    let asunto = document.getElementById("contactoAsunto").value;
    let contenido = document.getElementById("contactoMensaje").value;

    class envio{
        constructor(dato1, dato2, dato3, dato4){
            this.usuario = dato1;
            this.email = dato2;
            this.asunto = dato3;
            this.contenido = dato4;
        }
    }

    const Mensaje = new envio(nombre, email, asunto, contenido)

    
}








//userData();
//
////------------------------------------
//
//function dataCharge(){
//    let pasada = 0;
//    let i = 1;
//    let suma = 0;
//    while (pasada >= 0){
//        pasada = prompt(`Ingresa tu pasada n° ${i}`);
//        if (! pasada || pasada === " "){
//            break
//        }
//        pasada = parseFloat(pasada); 
//        suma = suma + pasada;
//        i++;
//    }
//    i--;
//    let res = suma / i;
//
//    return promedio = res; 
//}
//
//function calif(){
//    if (promedio < 4.5){
//        res = "Destacable";
//    }
//    else if (promedio <= 6){
//        res = "Muy bueno";
//        }
//    else if (promedio <= 7){
//        res ="Normal";
//            }    
//    else{
//        res = "Malo" ;
//    }
//
//    return msj = res;
//}
//
//function ciclo(){
//    alert(`ingresa tus pasadas, cuando termines, solo presiona la tecla "Enter" dejando el campo vacio`);
//
//    dataCharge(); 
//    calif();
//
//    msjAlert = user + " tu promedio es " + promedio + " min/km y tu desempeño clasifica como " + msj;
//    alert(msjAlert);
//}

