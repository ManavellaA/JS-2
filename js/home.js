function btn(){
    $(`#btnEnviar`).click(function (e) { 
        e.preventDefault();
        enviarMensaje();
    });
}
btn();

function enviarMensaje(){
    let nombre = $(`.nombre`).val();
    let apellido = $(`.apellido`).val();
    let email = $(`.email`).val();
    let mensaje = $(`.mensaje`).val();
    espera();
    $.ajax({
        type: "post",
        url: "https://jsonplaceholder.typicode.com/posts",
        data: objMensaje(nombre, apellido, email, mensaje),
        success: function () {
            // Le mento un setTimeout para que haga tiempo y se vea la animacion de carga          
            setTimeout(exito, 5000);
        }
    });
}

function objMensaje(dato1, dato2, dato3, dato4){  
    class obj{
        constructor(dato1, dato2, dato3, dato4){
            this.nombre = dato1;
            this.apellido = dato2;
            this.email = dato3;
            this.mensaje = dato4;
        }
    }
    return new obj(dato1, dato2, dato3, dato4)
}

function espera(){
    $(`.insert`).fadeOut("slow");
    $(`.div_animacion`).html(
        `<div class="bola" style="display: none;"></div>
         <p class="cargando" style="display: none;">...Enviando...</p>`);
    function cargando() {
        $(`.bola`).show();
        $(`.cargando`).show();
        $(".bola").animate({left: '+=130'}, "slow")
                  .animate({top: '+=35'}, "slow")
                  .animate({left: '-=130'}, "slow")  
                  .animate({top: '-=35'}, "slow")
        
        $(".cargando").animate({opacity: '0'}, 500)
                      .animate({opacity: '1'}, 1000)
    }
    setInterval(cargando, 600);
}

function exito(){
        $(`.div_animacion`).hide()
        $(`.div_animacion`).fadeIn(1000)
        $(`.div_animacion`).attr(`class`, `div_animacion row align-item-center justify-content-center`)    
        $(`.div_animacion`).html(
            `<img src="./img/Approved.png" alt="img_approved" class="img-fluid" style="width: 15vh;">
            <p style="text-align: center; margin-top: 3vh;" class="p_img_form"><strong>Gracias por escribirnos, en breve nos contactaremos.</strong></p>`
        )
        
}
