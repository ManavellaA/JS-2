class Producto{
    constructor(nombre, precio, data, cantidad){
        this.articulo = nombre;
        this.precio = parseFloat(precio);
        this.data = data;
        this.cantidad = cantidad;
    }
    precioIva(){
        return parseFloat(this.precio*1.21);    
    }
    precioLista(){
        return parseFloat(this.precio * 1.21 * 1.3);
    }
}

let arrayArticulos = [];
// ingresar los articulos en el orden que se quiera y al final con la funcion Sort son ordenados 
// alfabeticamente por el nombre del articulo e impresos en consola 
do{
    var articulo = prompt(`Ingrese el nombre del producto o escribe FIN al finalizar`);
    if(articulo === "Fin" || articulo === "FIN" || articulo === "fin"){
        break
    }
    else{
        let nombreA = articulo;
        let precioA = prompt(`Ingrese el precio del articulo`);
        let dataA = prompt(`Ingrese el detalle del articulo`);
        let cantidadA = prompt(`Ingrese la cantidad comprada del articulo`);
        arrayArticulos.push(new Producto(nombreA, precioA, dataA, cantidadA));        
    }   
}
while (articulo != "Fin" || articulo != "FIN" || articulo != "fin");

for (let producto of arrayArticulos){
    document.write("<br>");
    document.write(`<div><p>El Articulo ingresado es: ${producto.articulo} </p>`);
    document.write(`<p>Detalle del articulo: ${producto.data} </p>`);
    document.write(`<p>La cantidad de producto ingresado es: ${producto.cantidad} </p>`);
    document.write(`<p>El Precio C/Iva es: ${producto.precioIva()} </p>`);
    document.write(`<p>El Precio de lista C/Iva es: ${producto.precioLista()} </p></div>`);
    document.write("<br>");
}

arrayArticulos.sort((a1, a2) => {
    if (a1.articulo < a2.articulo){
        return -1;
    } else if(a1.articulo > a2.articulo){
        return 1;
    }else{
        return 0;
    }
})

console.log(arrayArticulos);

