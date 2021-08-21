let arrayTemp = []
$(document).ready(function () {
    
    $(`.btn__calc`).click(function (e) { 
        e.preventDefault();
        if(validacion_datos() === true){

            
        }else{

        }     


    });
    
    function validacion_datos() {  
        if($(`.input_elementos`).val() !== "" && $(`.input_elementos`).val() !== " ");{
            let nElementos = parseInt($(`.input_elementos`).val())
            arrayTemp.push(nElementos)
        }else{
            alert("Te falta completar el N° de Elementos");
        }

        if($(`.input_cap_bateria`).val() !== "" && $(`.input_cap_bateria`).val() !== " ");{
            let capBateria = parseInt($(`.input_cap_bateria`).val())
            arrayTemp.push(capBateria)
        }else{
            alert("Te falta completar la Capacidad de las Baterias");
        }

        if($(`.input_v_fondo`).val() !== "" && $(`.input_v_fondo`).val() !== " ");{
            let vFondo = parseFloat($(`.input_v_fondo`).val())
            arrayTemp.push(vFondo)
        }else{
            alert("Te falta completar la V de Fondo");
        }
        
        if($(`.input_v_trabajo`).val() !== "" && $(`.input_v_trabajo`).val() !== " ");{
            let vTrabajo = parseFloat($(`.input_v_trabajo`).val())
            arrayTemp.push(vTrabajo)
        }else{
            alert("Te falta completar la V de Trabajo");
        }

        if($(`.input_rango_cadena`).val() !== "" && $(`.input_rango_cadena`).val() !== " ");{
            let rangoCadena = parseInt($(`.input_rango_cadena`).val())
            arrayTemp.push(rangoCadena)
        }else{
            alert("Te falta completar el % de Cadena");
        }

        if(arrayTemp.length === 5){
            return true
        }
    }














});