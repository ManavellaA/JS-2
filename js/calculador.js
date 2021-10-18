let arrayCargador = [];

let objDisipadores = {ZD55:0.80, ZD18:0.85, ZD20:0.9, ZD23:0.65};

let objCables ={c1:15, c1c5:18, c2c5:25, c4:32, c6:41, c10:56, c16:74, c25:95, c35:119, c50:144, c70:179, c95:220, c120:258};

function calc_completo() {  
$(`.btn__calc__completo`).click(function () { 
    validacion_diodos_de_caida() === true ? calc_diodos_de_caida(): console.log("No paso validacion de Diodos") ;
    validacion_total() === true ? calc_total() : console.log("No paso validacion de Total") ;
});
}
calc_completo();

function validacion_diodos_de_caida() {
    let elementos = $(`.input_elementos`).val()
    let bateria = $(`.input_bateria`).val()
    let fondo = $(`.input_v_fondo`).val()
    let vNominal = $(`.input_v_nominal`).val()
    let rangoCadena = $(`.input_rango_cadena`).val()

    elementos !== "" ? arrayCargador.push({elementos: parseInt(elementos)}) : error("Cantidad de elementos");
        
    bateria !== "" ? arrayCargador.push({bateria: parseInt(bateria)}) : error("");   
    
    fondo !== "" ? arrayCargador.push({vFondo: parseFloat(fondo)}) : error("Tension de Fondo") ;
    
    vNominal !== "" ? vNominal == 120 ? arrayCargador.push({vNominal: 110}) : arrayCargador.push({vNominal: parseInt(vNominal)}) : error("Tension nominal de salida") ; 

    rangoCadena !== "" ? cadenaAlta*(rangoCadena/100) : error("% de cadena");

    rangoCadena !== "" ? cadenaBaja : error("% de cadena");
}

function error(element) { 
    Swal.fire(
        'Atención!',
        `Falta completar ${element}`,
        'warning'
    )
 }

function validacion_total() { 

    let vEntrada = $(`.input_v_entrada`).val()
    let aSalida = $(`.input_a_salida`).val()
    let consumo = $(`.input_a_consumo`).val()
    let bateria = $(`.input_a_bateria`).val()
    let bloqueo = $(`.input_bloqueo`).val()

vEntrada !== "" ? arrayCargador.push({vEntrada: parseInt(vEntrada)}) : error(" Tension de Entrada") ;

aSalida !== "" ? arrayCargador.push({aSalida: parseInt(aSalida)}) : error("Corriente de Salida") ;
               
consumo !== "" ? arrayCargador.push({aconsumo: parseInt(consumo)}) : error("Corriente de Consumo") ;
   
bateria !== "" ? arrayCargador.push({abateria: parseInt(bateria)}) : error("Corriente de Bateria") ;
                    
bloqueo !== "" ? arrayCargador.push({bloqueo: bloqueo}): error("Pocision del Diodo de Bloqueo") ;
}

function calc_diodos_de_caida(){

    const [elementos,bateria,vFondo,vNominal,cadenaAlta,cadenaBaja] = arrayCargador


}

function calc_total() { 
  
    const [elementos,bateria,fondo,vNominal,cadenaAlta,cadenaBaja,vEntrada,aSalida,aConsumo,aBateria,bloqueo] = arrayCargador

 }