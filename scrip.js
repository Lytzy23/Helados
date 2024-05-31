function mostrarSabores() {

    const sabores = ["oreo", "fresa", "vainilla"]
    let nombreSabor = document.querySelector("#sabor")
    nombreSabor.innerHTML = sabores[Math.floor(Math.random() * sabores.length)]

    const saludos = ["Lytzy", "Adamari", "ada"]
    let saludo = document.querySelector("#saludo")
    saludo.innerHTML = saludos[Math.floor(Math.random() * saludos.length)]

    console.log("Helado")
}

mostrarSabores()