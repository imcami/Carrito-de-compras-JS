
//Presentacion con una pregunta para el cliente

alert("Que desea llevar? para salir presione 0")

//Definimos las variables 
let seleccionarProductos = Number(prompt("1-Taza $30 2-Vaso $150 3-Kindle $50000 4-Buda $6000"))
let seleccionarCantidad;
let total = 0
//Iniciamos el condicional para que el cliente pueda elegir el producto
while (seleccionarProductos !="0"){
    switch(seleccionarProductos){
        case 1:
              seleccionarCantidad = Number(prompt ("el producto seleccionado es Taza, indique la cantidad"))
                 
        break;

        case 2:
             seleccionarCantidad= Number(prompt ("el producto seleccionado es Vaso, indique la cantidad"))
                 
        break;

        case 3:
             seleccionarCantidad = Number(prompt ("el producto seleccionado es Kindle, indique la cantidad"))
                 
        break;
        case 4:
             seleccionarCantidad = Number(prompt ("el producto seleccionado es Buda, indique la cantidad"))
                     
        break; 
    default:

   seleccionarProductos = Number(prompt("1-Taza $30 2-Vaso $150 3-Kindle $50000 4-Buda $6000"))
    }

    let cantidad
    let precio 

    function funcionTotal() {
        cantidad = seleccionarCantidad
        precio = seleccionarProductos
        total = cantidad * precio

    
    }
alert ("el total de la compra es de: " + total)
}