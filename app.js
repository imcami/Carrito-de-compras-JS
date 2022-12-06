

function funcionTotal(cantidad, precio) {
    return calculo = cantidad * precio
}


alert("Que desea llevar?")
let seleccionarCantidad;
let total = 0
let precio
let seleccionarProductos = Number(prompt("1-Taza $30 2-Vaso $150 3-Kindle $50000 4-Buda $6000 0-Salir"))


while (seleccionarProductos != "0") {
    switch (seleccionarProductos) {
        case 1:
            seleccionarCantidad = Number(prompt("el producto seleccionado es Taza, indique la cantidad"))
            precio = 30
            total = funcionTotal(seleccionarCantidad, precio)
            break;


        case 2:
            seleccionarCantidad = Number(prompt("el producto seleccionado es Vaso, indique la cantidad"))
            precio = 150
            total = funcionTotal(seleccionarCantidad, precio)
            break;


        case 3:
            seleccionarCantidad = Number(prompt("el producto seleccionado es Kindle, indique la cantidad"))
            precio = 50000
            total = funcionTotal(seleccionarCantidad, precio)
            break;
        case 4:
            seleccionarCantidad = Number(prompt("el producto seleccionado es Buda, indique la cantidad"))
            precio = 6000
            total = funcionTotal(seleccionarCantidad, precio)
            break;
        default:
            alert("No selecionaste ninguna de las opciones")
    }
    alert("el total de la compra es de: $" + total)
    alert("Que desea llevar?")
    seleccionarProductos = Number(prompt("1-Taza $30 2-Vaso $150 3-Kindle $50000 4-Buda $6000 0-Salir"))
}