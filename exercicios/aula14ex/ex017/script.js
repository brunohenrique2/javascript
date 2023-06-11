function contar() {
    var inicio = document.getElementById('inicio').value
    var fim = document.getElementById('fim').value
    var passo = document.getElementById('passo').value
    var res = document.getElementById('res')
    var msg = document.getElementById('msg')
    var start = Number(inicio)
    var end = Number(fim)
    var step = Number(passo)

    if(inicio.length == 0 || fim.length == 0 || passo.length == 0) {
        alert('[ERROR] impossivel contar')

    }else if(step == 0) {
        alert("[ERROR] Impossível calcular! Valor de passo será definido para 1")
        msg.innerHTML = 'Calculando: '

        for(start; start <= end; start++) {
            res.innerHTML += `${start} \u{27A1} `
        }
        res.innerHTML += ` \u{1F3C1}`

    }else if(start > end) {
        msg.innerHTML = 'Calculando: '

        for(start; start >= end; start -= step) {
            res.innerHTML += `${start} \u{27A1} `
        }
        res.innerHTML += ` \u{1F3C1}`

    }else {
        msg.innerHTML = 'Calculando: '

        for(start; start <= end; start += step) {
            res.innerHTML += `${start} \u{27A1} `
            console.log(start)
        }
        res.innerHTML += ` \u{1F3C1}`
    }
}
