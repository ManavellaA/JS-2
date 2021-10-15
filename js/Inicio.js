function equipo_call() {  
$(`.equipo`).click(function(){
    equipo()
});
}
equipo_call()

function equipo() { 
    $(`.div_body`).html(`
    <h1>
        Cargadores RFT
    </h1>

    <dl class="row justify-content-center align-items-center ">
    <div class="div__sep col-sm-8 d-flex justify-content-center align-items-center border border-2 border-dark">
        <dt class="col-4 col-sm-4">Tipo de RFT</dt>
        <dd class="col-sm-5">
            <p class="text-center"> V Entrada<input type="number" class="form-control input_v_entrada"></p>
            <p class="text-center"> V Nominal de Salida<input type="number" class="form-control input_v_nominal"></p>
            <p class="text-center"> A de Salida<input type="number" class="form-control input_a_salida"></p>
        </dd>
    </div>
    
    <div class="div__sep col-sm-8 d-flex justify-content-center align-items-center border border-2 border-dark">
        <dt class="col-4 col-sm-4">Banco de Bateria</dt>
        <dd class="col-sm-5">
            <div class="row align-items-center justify-content-center">
                <label class="text-center">Tipo de Bateria</label>
                <select class="width-10em select input_v_fondo">
                    <option>Sin Baterias</option>
                    <option value="2.27">Plomo Gel (PL)</option>
                    <option value="14.4">Monoblock (PK)</option>
                    <option value="1.6">Alcalina (NiCd)</option>
                </select>
            </div>
            <p class="text-center">Capacidad Ah<input type="number" class="form-control input_bateria"></p>
            <p class="text-center">Cantidad de Elementos<input type="number" class="form-control input_elementos"></p>
        </dd>
    </div>
    
    <div class="div__sep col-sm-8 d-flex justify-content-center align-items-center border border-2 border-dark">
        <dt class="col-4 col-sm-4">Datos RFT</dt>
        <dd class="col-sm-5">
            <p class="text-center">A de Consumo<input type="number" class="form-control input_a_consumo"></p>
            <p class="text-center">A de Bateria<input type="number" class="form-control input_a_bateria"></p>
            <p class="text-center">% de Cadena<input type="number" class="form-control input_rango_cadena"></p>
            <div class="row align-items-center justify-content-center">
                <label class="text-center">Diodo de Bloqueo</label>
                <select class="width-13em select input_bloqueo">
                    <option>Sin Bloqueo</option>
                    <option value="consumo">Bloqueo en Consumo</option>
                    <option value="bateria">Bloqueo en Bateria</option>
                    <option value="ambos">Bloqueo en Ambos</option>
                </select>
            </div>
        </dd>
    </div>
    
    <div class="btn">
        <button class="volver btn btn-success p-2 m-3">Volver</button>
        <button class="btn__calc__completo btn btn-success p-2 m-3">Calcular</button>
    </div>
    </dl> 
    `);
    volver();
}



function volver() {  
    $(`.volver`).click(function (e) {
        $(`.div_body`).html(`
        <h1>
            Calculos
        </h1>
        <div class="d-flex align-items-center justify-content-center m-5">
            <button class="btn btn-success diodos p-3 m-3">Calculo de Diodos</button>
            <button class="btn btn-success equipo p-3 m-3">Calculo de Equipo</button>
        </div>
        `);
        equipo_call();
    });
}