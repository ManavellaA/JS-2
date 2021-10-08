let arrayCargador = [];

let objDisipadores = {ZD55:0.80, ZD18:0.85, ZD20:0.9, ZD23:0.65};

let objCables ={c1:15, c1c5:18, c2c5:25, c4:32, c6:41, c10:56, c16:74, c25:95, c35:119, c50:144, c70:179, c95:220, c120:258};

// class Diodos_de_Caida {
//     constructor(){
//          this.elementos
//          this.bateria
//          this.vFondo
//          this.vNominal
//          this.
//          this.
//          this.
//          this.
//     }
// }

$(`.btn__calc`).click(function () {
    if(validacion_diodos_de_caida() === true){
        console.log("validacion DIODOS correcta");
        calc_diodos_de_caida();
    }else{
        console.log("NO paso la validacion de Diodos - se setea el ArrayCargador");
    }
});

$(`.btn__calc__completo`).click(function () { 
    if(validacion_diodos_de_caida() === true){
        console.log("validacion DIODOS correcta");
        calc_diodos_de_caida();
        if(validacion_total() === true){
            console.log("validacion TOTAL correcta");
            calc_total();
        }
    }else{
        console.log("NO paso la validacion Total- se setea el ArrayCargador");
    }
});

function validacion_diodos_de_caida() {
    let elementos = $(`.input_elementos`).val()
    let bateria = $(`.input_bateria`).val()
    let fondo = $(`.input_v_fondo`).val()
    let vNominal = $(`.input_v_nominal`).val()
    let rangoCadena = $(`.input_rango_cadena`).val()

    if(elementos !== ""){
        elementos = parseInt(elementos);
        arrayCargador.push({elementos})
        if(bateria !== ""){
            bateria = parseInt(bateria);
            arrayCargador.push({bateria: bateria})   
            if(fondo !== ""){
                fondo = parseFloat(fondo);
                arrayCargador.push({fondo: fondo})   
                if(vNominal !== ""){
                    vNominal = parseInt(vNominal);
                    if(vNominal === 120){       
                        vNominal = 110
                    }
                    arrayCargador.push({vNominal: vNominal})
                    if(rangoCadena !== ""){
                        rangoCadena = parseInt(rangoCadena);
                        if(rangoCadena === 10){
                            let cadenaAlta = vNominal * 1.1;
                            let cadenaBaja = vNominal * 0.9;
                            arrayCargador.push({cadenaAlta: cadenaAlta})
                            arrayCargador.push({cadenaBaja: cadenaBaja})
                        }else if(rangoCadena === 5){
                            let cadenaAlta = vNominal * 1.05;
                            let cadenaBaja = vNominal * 0.95;
                            arrayCargador.push({cadenaAlta: cadenaAlta})
                            arrayCargador.push({cadenaBaja: cadenaBaja})
                        }else(
                            Swal.fire(
                                'Atención!',
                                `Rango de cadena mal ingresado`,
                                'warning'
                            )
                        )
                    }
                }
            }
        }
    }

    if(arrayCargador.length === 6){
        $(`.input_elementos`).val("")
        $(`.input_bateria`).val("Sin Bateria")
        $(`.input_v_fondo`).val("")
        $(`.input_v_nominal`).val("")
        $(`.input_rango_cadena`).val("")
        return true
    }else{
        Swal.fire(
            'Atención!',
            `Faltan completar campos`,
            'warning'
        )
        arrayCargador = []
    }
}

function validacion_total() { 

    let vEntrada = $(`.input_v_entrada`).val()
    let aSalida = $(`.input_a_salida`).val()
    let consumo = $(`.input_a_consumo`).val()
    let bateria = $(`.input_a_bateria`).val()
    let bloqueo = $(`.input_bloqueo`).val()

    if(vEntrada !== ""){
        vEntrada = parseInt(vEntrada);
        arrayCargador.push({vEntrada: vEntrada})
        if(aSalida !== ""){
            aSalida = parseInt(aSalida);
            arrayCargador.push({aSalida: aSalida})   
            if(consumo !== ""){
                consumo = parseInt(consumo);
                arrayCargador.push({aconsumo: consumo})   
                if(bateria !== ""){
                    bateria = parseInt(bateria);
                    arrayCargador.push({abateria: bateria})
                    if(bloqueo !== ""){
                        arrayCargador.push({bloqueo: bloqueo})
                    }
                }
            }
        }
    }

    if(arrayCargador.length === 11){
        $(`.input_v_entrada`).val("")
        $(`.input_a_salida`).val("")
        $(`.input_a_consumo`).val("")
        $(`.input_a_bateria`).val("")
        $(`.input_bloqueo`).val("Sin Bloqueo")
        return true
    }else{
        Swal.fire(
            'Atención!',
            `Faltan completar campos`,
            'warning'
        )
        arrayCargador = []
    }
}

function calc_diodos_de_caida(){

}

function calc_total() { 
    
 }