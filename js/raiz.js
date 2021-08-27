let arrayData = []
    $(`.btn__calc`).click(function (e) {
        e.preventDefault();
        
        if(validacion_datos() === true){

            console.log("paso la validacion");
        }else{
            console.log("NO paso al validacion - se setea el Array");

        }
    });
    
    function validacion_datos() {
        let nElementos = $(`.input_elementos`).val()
        let capBateria = $(`.input_cap_bateria`).val()
        let vFondo = $(`.input_v_fondo`).val()
        let vTrabajo = $(`.input_v_trabajo`).val()
        let rangoCadena = $(`.input_rango_cadena`).val()

        if(nElementos !== ""){
            arrayData.push({nElementos: nElementos})
            if(capBateria !== ""){
                arrayData.push({capBateria: capBateria})   
                if(vFondo !== ""){
                    arrayData.push({vFondo: vFondo})   
                    if(vTrabajo !== ""){
                        arrayData.push({vTrabajo: vTrabajo})
                        if(rangoCadena !== ""){
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
        }
        else{
            Swal.fire(
                'Atención!',
                `Falta completar un campo`,
                'warning'
            )
            arrayData = []
        }
    }