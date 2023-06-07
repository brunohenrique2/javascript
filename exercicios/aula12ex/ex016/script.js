function carregar() {
    var msg = document.getElementById("msg")
    var img = document.getElementById("imagem")
    var body = document.getElementById('body')
    var data = new Date()
    var hora = data.getHours()
    var min = data.getMinutes()
    var seg = data.getSeconds()
    msg.innerText = `Horario: ${hora}:${min}:${seg}`

    if(hora >= 0 && hora < 12) {
        //BOM DIA
        img.src = 'img/manha.jpg'
        body.style.backgroundColor = '#FCE78A'
    }else if(hora >= 12 && hora < 18) {
        //BOA TARDE
        img.src = 'img/tarde.jpg'
        body.style.backgroundColor = '#B5966C'
    }else if(hora >= 18 && hora < 24) {
        //BOA NOITE
        img.src = 'img/noite.jpg'
        body.style.backgroundColor = '#0D273E'

    }

    setInterval(carregar, 1000)

}