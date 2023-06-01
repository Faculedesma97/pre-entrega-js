let nombre
function bienvenida() {
    nombre = prompt("Escriba su nombre")
    alert("Bienvenido! " + nombre)
    return nombre
}
bienvenida(nombre)

let te = 0
let cafe = 0
let agua = 0
let gaseosa = 0
let total = (te) + (cafe) + (agua) + (gaseosa)

compra(nombre)


function compra(nombre) {


    do {
        productos = prompt("Que vas a llevar " + nombre + " ?" + "\n1-té 10$\n2-Café 20$ \n3-Agua 5$\n4-Gaseosa 15$\n0-Finalizar Compra").toLowerCase()
        if (productos === "té" || productos === "te" || productos === "1") {
            alert("Ha Seleccionado Té")
            te = +10
        } else if (productos === "café" || productos === "cafe" || productos === "2") {
            alert("Ha Seleccionado Café")
            cafe = +20
        } else if (productos === "agua" || productos === "3") {
            alert("Ha seleccionado Agua")
            agua = +5
        } else if (productos === "gaseosa" || productos === "4") {
            alert("Ha seleccionado Gaseosa")
            gaseosa = +15
        } else if (productos > 4) {
            alert("Producto no seleccionado")
        }
    } while (productos !== "0")
parseInt(total = te + cafe + agua + gaseosa)
    alert("El total de su compra es " + total + "$")

    alert("Gracias por su compra!")
}





