let arrayCargador = [];

let arrayVnominal = [{220:220},{120:110},{48:48},{24:24}];

let arrayDisipadores = [{ZD55:0.80}, {ZD18:0.85}, {ZD20:0.9}, {ZD23:0.65}];

let arrayCables =[{1:15},{1.5:18},{2.5:25},{4:32},{6:41},{10:56},{16:74},{25:95},{35:119},{50:144},{70:179},{95:220},{120:258}];



$(`.btn__calc`).click(function (e) {
    e.preventDefault();
    if(validacion_diodos_de_caida() === true){

        console.log("validacion DIODOS correcta");
        calc_diodos_de_caida();
    }else{
        console.log("NO paso al validacion - se setea el ArrayData");
    }
});

$(`.btn__calc__completo`).click(function (e) { 
    e.preventDefault();
    if(validacion_diodos_de_caida() === true){
        console.log("validacion DIODOS correcta");
        if(calc_total() === true){
            console.log("validacion TOTAL correcta");
        }

    }else{
        console.log("NO paso al validacion - se setea el ArrayData");
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
        arrayCargador.push({elementos: elementos})
        if(bateria !== ""){
            bateria = parseInt(bateria);
            arrayCargador.push({bateria: bateria})   
            if(fondo !== ""){
                fondo = parseFloat(fondo);
                arrayCargador.push({fondo: fondo})   
                if(vNominal !== ""){
                    vNominal = parseInt(vNominal);
                    arrayCargador.push({vNominal: vNominal})
                    if(rangoCadena !== ""){
                        rangoCadena = parseInt(rangoCadena);
                        arrayCargador.push({rangoCadena: rangoCadena})
                    }
                }
            }
        }
    }

    if(arrayCargador.length === 5){
        $(`.input_elementos`).val("")
        $(`.input_bateria`).val("Sin Baterias")
        $(`.input_v_fondo`).val("")
        $(`.input_v_nominal`).val("")
        $(`.input_rango_cadena`).val("")
        return true
    }else{
        Swal.fire(
            'Atención!',
            `Falta completar un campo`,
            'warning'
        )
        arrayCargador = []
    }
}

function calc_total() { 

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

    if(arrayCargador.length === 10){
        $(`.input_v_entrada`).val("")
        $(`.input_a_salida`).val("")
        $(`.input_a_consumo`).val("")
        $(`.input_a_bateria`).val("")
        $(`.input_bloqueo`).val("Sin Bloqueo")
        return true
    }else{
        Swal.fire(
            'Atención!',
            `Falta completar un campo`,
            'warning'
        )
        arrayCargador = []
    }
}


function calc_diodos_de_caida(){
    
}

