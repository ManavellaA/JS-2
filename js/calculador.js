let arrayCargador = [];

function calc_completo() {  
$(`.btn__calc__completo`).click(function () { 
    validacion_diodos_de_caida() === true ? calc_diodos_de_caida() : console.log("No paso validacion de Diodos");
    validacion_total() === true ? calc_total() : console.log("No paso validacion Total");
});
}


function error(element) { 
    Swal.fire(
        'Atención!',
        `Falta completar ${element}`,
        'warning'
    )
 }


function validacion_diodos_de_caida() {
    // let elementos = 55;
    // let bateria = 100;
    // let vFondo = 2.27;
    // let vNominal = 120;
    // let rangoCadena = 5;

    let elementos = $(`.input_elementos`).val()
    let bateria = $(`.input_bateria`).val()
    let vFondo = $(`.input_v_fondo`).val()
    let vNominal = $(`.input_v_nominal`).val()
    let rangoCadena = $(`.input_rango_cadena`).val()
    let cadenaAlta
    let cadenaBaja
    const cadena = () => {
        cadenaAlta = 1+(rangoCadena/100); 
        cadenaBaja = 1-(rangoCadena/100); 
        arrayCargador.push({cadenaAlta: parseFloat(cadenaAlta).toFixed(2)}); 
        arrayCargador.push({cadenaBaja: parseFloat(cadenaBaja).toFixed(2)}) 
    }
    elementos !== "" ? arrayCargador.push({elementos: parseInt(elementos)}) : error("Cantidad de elementos");
    bateria !== "" ? arrayCargador.push({bateria: parseInt(bateria)}) : error("");   
    vFondo !== "" ? arrayCargador.push({vFondo: parseFloat(vFondo)}) : error("Tension de Fondo");
    vNominal !== "" ? vNominal == 120 ? arrayCargador.push({vNominal: 110}) : arrayCargador.push({vNominal: parseInt(vNominal)}) : error("Tension nominal de salida") ; 
    rangoCadena !== "" ? cadena() : error("% de cadena");
    if(arrayCargador.length === 5){
        $(`.input_elementos`).val("")
        $(`.input_bateria`).val("Sin Baterias")
        $(`.input_v_fondo`).val("")
        $(`.input_v_nominal`).val("")
        $(`.input_rango_cadena`).val("")
        return true
    }
}


function validacion_total() { 
    // let vEntrada = 380;
    // let aSalida = 30;
    // let aConsumo = 20;
    // let aBateria = 10;
    // let bloqueo = "consumo";

    let vEntrada = $(`.input_v_entrada`).val()
    let aSalida = $(`.input_a_salida`).val()
    let aConsumo = $(`.input_a_consumo`).val()
    let aBateria = $(`.input_a_bateria`).val()
    let bloqueo = $(`.input_bloqueo`).val()
    vEntrada !== "" ? arrayCargador.push({vEntrada: parseInt(vEntrada)}) : error(" Tension de Entrada") ;
    aSalida !== "" ? arrayCargador.push({aSalida: parseInt(aSalida)}) : error("Corriente de Salida") ;
    aConsumo !== "" ? arrayCargador.push({aConsumo: parseInt(aConsumo)}) : error("Corriente de Consumo") ;
    aBateria !== "" ? arrayCargador.push({aBateria: parseInt(aBateria)}) : error("Corriente de Bateria") ;
    bloqueo !== "" ? arrayCargador.push({bloqueo: bloqueo}): error("Pocision del Diodo de Bloqueo") ;
    if(arrayCargador.length === 10){
        $(`.input_v_entrada`).val("")
        $(`.input_a_salida`).val("")
        $(`.input_a_consumo`).val("")
        $(`.input_a_bateria`).val("")
        $(`.input_bloqueo`).val("Sin Bloqueo")
        return true
    }
}