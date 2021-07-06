let arrayArticulos = [];

function carga(){
    let carga = document.querySelector(".btn_carga");
    carga.addEventListener("click", cargaLista);
    
    function cargaLista(){
        let articulo = document.querySelector(".articulo").value;
        let precio = document.querySelector(".precio").value;
        let marca = document.querySelector(".marca").value;
        let cantidad = document.querySelector(".cantidad").value;
        precio = parseFloat(precio);
        cantidad = parseInt(cantidad);
        if( !articulo || !precio || !marca || !cantidad){
            alert("Te faltan conpletar campos requeridos");
        }else{
        class Producto{
            constructor(nombre, precio, marca, cantidad){
                this.articulo = nombre;
                this.precio = parseFloat(precio);
                this.marca = marca;
                this.cantidad = cantidad;
            }
        }
        arrayArticulos.push(new Producto(articulo, precio, marca, cantidad));

        document.querySelector(".articulo").value = "";
        document.querySelector(".precio").value = "";
        document.querySelector(".marca").value = "";
        document.querySelector(".cantidad").value = "";
        }
    }
}
carga();

function finCarga(){
    let carga = document.querySelector(".btn_fin");
    carga.addEventListener("click", fin);
    function fin(){
        let contenedorNuevo = document.createElement("div");
        contenedorNuevo.setAttribute("class", "div_display justify-content-start");
        let contenedorViejo = document.querySelector(".div_display");
        let nodoPadre = contenedorViejo.parentNode;
        nodoPadre.replaceChild(contenedorNuevo, contenedorViejo);
        for (let producto of arrayArticulos){
            contenedorNuevo.innerHTML = 
                 `<p class="d-inline border-1"><strong>Tipo: </strong>${producto.articulo}</p>
                  <p class="d-inline border-1"><strong>Marca: </strong>${producto.marca}</p>
                  <p class="d-inline border-1"><strong>Precio: </strong>${producto.precio}</p>
                  <p class="d-inline border-1 "><strong>Cantidad en stock: </strong>${producto.cantidad}</p>
                  `;
        }

    }
}
finCarga();


//
//console.log(arrayArticulos);

