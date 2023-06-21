let num = document.querySelector('input#num')
let lista = document.querySelector('select#lista')
let res = document.querySelector('div#res')
let numbers = []

function isNumber(n) {
    if(Number(n) >= 1 && Number(n) <= 100) {
        return true
    }else {
        return false
    }
}

function inList(n, l) {
    if(l.indexOf(Number(n)) != -1) {
        return true
    }else {
        return false
    }
}

function addNumber() {
    if(isNumber(num.value) && !inList(num.value, numbers)) {
        numbers.push(Number(num.value))
        let item = document.createElement('option')
        item.text = `Valor ${num.value} adicionado!`
        lista.appendChild(item)
        res.innerHTML = ''
    }else {
        alert('Valor invalido ou já encontrado na lista!')
    }
    num.value = ''
    num.focus()
    console.log(numbers)
}

function finalizar() {
    if(numbers.length == 0) {
        alert('Insira valores antes de finalizar!')
    }else {
        let total = numbers.length
        let maior = numbers[0]
        let menor = numbers[0]
        let soma = 0
        let media = 0
        for(let pos in numbers) {
            soma += numbers[pos]
            if(numbers[pos] > maior) {
                maior = numbers[pos]
            }if(numbers[pos] < menor) {
                menor = numbers[pos]
            }
        }
        media = soma/total
        res.innerHTML = ''
        res.innerHTML += `<p>Ao todo, temos ${total} números cadastrados</p>`
        res.innerHTML += `<p>O maior valor informado foi ${maior}</p>`
        res.innerHTML += `<p>O menor valor informado foi ${menor}</p>`
        res.innerHTML += `<p>A soma dos valores é ${soma}</p>`
        res.innerHTML += `<p>A media dos valores é ${media}</p>`

    }
}

