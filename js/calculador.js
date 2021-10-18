let arrayCargador = [];

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
    let cadenaAlta
    let cadenaBaja

    elementos !== "" ? arrayCargador.push({elementos: parseInt(elementos)}) : error("Cantidad de elementos");
        
    bateria !== "" ? arrayCargador.push({bateria: parseInt(bateria)}) : error("");   
    
    fondo !== "" ? arrayCargador.push({vFondo: parseFloat(fondo)}) : error("Tension de Fondo") ;
    
    vNominal !== "" ? vNominal == 120 ? arrayCargador.push({vNominal: 110}) : arrayCargador.push({vNominal: parseInt(vNominal)}) : error("Tension nominal de salida") ; 

    rangoCadena !== "" ? () => {cadenaAlta = 1+(rangoCadena/100); cadenaBaja = 1-(rangoCadena/100); arrayCargador.push({cadenaAlta: parseFloat(cadenaAlta)}); arrayCargador.push({cadenaBaja: parseFloat(cadenaBaja)}) } : error("% de cadena");
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