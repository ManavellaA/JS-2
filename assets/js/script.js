//function logUser (){
//    let nombre = prompt(`Ingresa un nombre de usuario`);
//    while( ! nombre || nombre === " "){
//        alert(`Dato no Ingresado`);
//        nombre = prompt(`Ingresar un nombre de usuario`);
//    }
//    return user = nombre;
//}
//logUser();

    let imc = document.getElementById("btn_imc");
    imc.addEventListener("click", validacion);
        
        function validacion(e){
            e.preventDefault();

            let peso = document.getElementById("calc_peso").value;
            
            let altura = document.getElementById("calc_altura").value;

            peso = parseInt(peso);
            altura = parseInt(altura);
            
            if( ! peso || peso === " " && ! altura || altura === " " ){

                let calc = Math.round(peso * (Math.sqrt(altura)/100)/10);
                let imc = calc.toFixed(2);
                
                let contenedor = document.createElement("p");
                contenedor.setAttribute("id", "div_imc");
                let dataNueva = document.createTextNode(`Tu IMC es ${imc}`);
                contenedor.appendChild(dataNueva);

                let getDiv = document.getElementById("div_imc");
                let nodoPadre = getDiv.parentNode
                nodoPadre.replaceChild(contenedor, getDiv);
            }
        }

//userData();
//
//function principal(){
//let eleccion = prompt(`Si queres sabes tu IMC escribe "IMC", si queres calificar tu Ciclo de Enternamiento escribe "Ciclo"`);
//eleccion = eleccion.toUpperCase();
//
//if(eleccion === "CICLO"){
//    ciclo();
//
//    eleccion = prompt(`Si todavia queres saber tu IMC escribe "IMC", sino solo presiona Enter`);
//    eleccion = eleccion.toUpperCase();
//    if(eleccion === "IMC"){
//    Imc();
//    }
//    else{
//        imc = "N/A"
//    };
//}
//
//else{
//    Imc();
//    eleccion = prompt(`Si todavia queres ingresar tu ciclo de entenamiento escribe "Ciclo", sino solo presiona Enter`);
//    eleccion = eleccion.toUpperCase();
//        if(eleccion === "CICLO"){
//            ciclo();
//        }
//        else{
//            promedio = "N/A";
//            msj = "N/A";
//        }
//}
//
//alert(`Gracias por visitar nuestro sitio`);
//}
//principal();
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
//
//function Imc(){
//    imc = (peso * ((estatura/100) * (estatura/100)))/10;
//    
//    if(imc < 18.5){
//        alert(`Tu IMC es ${imc}Kg/m², Clasifica dentro de "Bajo Peso"`)
//    }
//    else if(imc < 24.9){   
//        alert(`Tu IMC es ${imc}Kg/m², Clasifica dentro de "Peso Normal"`)
//    }
//    else if(imc < 29.9){
//        alert(`Tu IMC es ${imc}Kg/m², Clasifica dentro de "Sobrepeso"`)
//    }
//    else if(imc < 34.9){
//        alert(`Tu IMC es ${imc}Kg/m², Clasifica dentro de "Obesidad Tipo 1"`)
//    }
//    else if(imc < 39.9){
//        alert(`Tu IMC es ${imc}Kg/m², Clasifica dentro de "Obesidad Tipo 2"`)
//    }
//    else{
//        alert(`Tu IMC es ${imc}Kg/m², Clasifica dentro de "Obesidad Tipo 3"`)
//    }
//}
//
//function storageUsuario(){
//
//const arrayUsuario = []
//
//class dataUser{
//    constructor(dato1, dato2, dato3, dato4, dato5, dato6){
//        this.usuario = dato1;
//        this.peso = dato2;
//        this.estatura = dato3;
//        this.promedio = dato4;
//        this.desempeño = dato5;
//        this.imc = Math.fround(dato6);
//    }
//    leer(){
//        console.log(`El usuario ${this.usuario} pesa ${this.peso}Kg, mide ${estatura}cm, su IMC es de ${imc} y su desempeño calsifica como ${this.desempeño}`)
//    }
//}
//
//arrayUsuario.push(new dataUser(user, peso, estatura, promedio, msj, imc))
//
//for (let usuario of arrayUsuario){
//    let contenedor = document.createElement("div");
//    contenedor.innerHTML = 
//    `<br>
//     <p>Nombre de Usuario: ${usuario.usuario}</p>
//     <p>Peso: ${usuario.peso}Kg</p>
//     <p>Estatura: ${usuario.estatura}cm</p>
//     <p>Promedio: ${usuario.promedio}Km/min</p>
//     <p>Desempeño deportivo: ${usuario.desempeño}</p>
//     <p>IMC: ${usuario.imc}</p>
//     <br>`
//    document.body.appendChild(contenedor);
//    usuario.leer();
//}
//}
//storageUsuario();