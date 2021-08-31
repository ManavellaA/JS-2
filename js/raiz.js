let arrayData = []

$(`.btn__calc`).click(function (e) {
    e.preventDefault();
    if(validacion_diodos_de_caida() === true){

        console.log("validacion correcta");
        calc_diodos_de_caida();
    }else{
        console.log("NO paso al validacion - se setea el ArrayData");
    }
});

function validacion_diodos_de_caida() {
    let nElementos = $(`.input_elementos`).val()
    let capBateria = $(`.input_cap_bateria`).val()
    let vFondo = $(`.input_v_fondo`).val()
    let vTrabajo = $(`.input_v_trabajo`).val()
    let rangoCadena = $(`.input_rango_cadena`).val()

    if(nElementos !== ""){
        nElementos = parseInt(nElementos);
        arrayData.push({nElementos: nElementos})
        if(capBateria !== ""){
            capBateria = parseInt(capBateria);
            arrayData.push({capBateria: capBateria})   
            if(vFondo !== ""){
                vFondo = parseFloat(vFondo);
                arrayData.push({vFondo: vFondo})   
                if(vTrabajo !== ""){
                    vTrabajo = parseInt(vTrabajo);
                    arrayData.push({vTrabajo: vTrabajo})
                    if(rangoCadena !== ""){
                        rangoCadena = parseInt(rangoCadena);
                        arrayData.push({rangoCadena: rangoCadena})
                    }
                }
            }
        }
    }

    if(arrayData.length === 5){
        $(`.input_elementos`).val("")
        $(`.input_cap_bateria`).val("")
        $(`.input_v_fondo`).val("")
        $(`.input_v_trabajo`).val("")
        $(`.input_rango_cadena`).val("")
        return true
    }else{
        Swal.fire(
            'Atención!',
            `Falta completar un campo`,
            'warning'
        )
        arrayData = []
    }
}

function calc_diodos_de_caida(){
    
}