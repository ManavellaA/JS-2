// calculo de diodos de caida en RFTs
let diodo = prompt(`Tipo de Diodo a emplear: "gbpc" o "95pf"`);

if(diodo === "95pf"){
    diodo = 0.75
    parseFloat(diodo);
}
else{
    diodo = 0.9
    parseFloat(diodo);
}

let vTrabajo = prompt(`Tension de trabajo de RFT: 48 o 110 o 220`);
    parseFloat(vTrabajo);

let porc = prompt(`Porcentaje de trabajo admitido: 10 o 5`);
if(porc === "10"){
    porc = 1.1
    parseFloat(porc);
}
else{
    porc = 1.05
    parseFloat(porc);
}

let bat = prompt(`Tipo de baterias: niquel o plomo`);
if(bat === "niquel"){
    bat = 1.6
    parseFloat(bat);
}
else{
    bat = 2.27
    parseFloat(bat);
}

let elem = prompt(`Cantidad de baterias`);
parseInt(elem);

const multiplicar = (a,b) => a * b;
const dividir = (a,b) => a / b;
const restar = (a,b) => a - b;

let resultado = dividir(restar(multiplicar(bat, elem), multiplicar(vTrabajo, porc)), diodo);

parseFloat(resultado);
alert(`Se requieren ${resultado} diodos para este RFT`);