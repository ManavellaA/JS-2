let arrayTemp = []
$(document).ready(function () {
    
    $(`.btn__calc`).click(function (e) { 
        e.preventDefault();
        if(validacion_datos() === true){

            console.log("paso la validacion");

        }else{
            console.log("NO paso al validacion - se setea el Array");
            arrayTemp = []
        }     


    });
    
    function validacion_datos() {  
        arrayTemp = []
        let nElementos = $(`.input_elementos`).val()
        let capBateria = $(`.input_cap_bateria`).val()
        let vFondo = $(`.input_v_fondo`).val()
        let vTrabajo = $(`.input_v_trabajo`).val()
        let rangoCadena = $(`.input_rango_cadena`).val()

        if(nElementos !== ""){
            arrayTemp.push({nElementos: nElementos})
        }
        else{
            alert("Falta completar n° de Elementos");
            
        } 
        if(capBateria !== ""){
            arrayTemp.push({capBateria: capBateria})   
        }
        else{
            alert("Falta completar la Capacidad de las Baterias");
            
        }
        if(vFondo !== ""){
            arrayTemp.push({vFondo: vFondo})   
        }
        else{
            alert("Falta completar la V de Fondo");
            
        }
        if(vTrabajo !== ""){
            arrayTemp.push({vTrabajo: vTrabajo})
        }
        else{
            alert("Falta completar la V de Trabajo");
            
        }
        if(rangoCadena !== ""){
            arrayTemp.push({rangoCadena: rangoCadena})
        }
        else{
            alert("Falta completar el Rango de Cadena");
            
        }
        if(arrayTemp.length === 5){
            return true
        }
    }














});