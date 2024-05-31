function mostrarSabores() {

    const sabores = ["oreo", "fresa", "vainilla"]
    let nombreSabor = document.querySelector("#sabor")
    nombreSabor.innerHTML = sabores[Math.floor(Math.random() * sabores.length)]

    console.log("Helado")
}

mostrarSabores()