function tabuada(){
    var num1 = document.getElementById('num1').value
    var num2 = document.getElementById('num2').value
    var res = document.getElementById('res')
    var tab = document.getElementById('tab')
    var fator1 = Number(num1)
    var fator2 = Number(num2)
    res.style.marginTop = '10px'
    tab.innerHTML = ''

    if(num1.length == 0 || num2.length == 0){
        alert('Por favor, insira um número!')
    }else if(fator2 > 100){
        alert('Para a segurança do seu aparelho o valor maximo permitido é 100')
    }else{
        for(var i = 0; i <= fator2; i++ ) {
            mult = fator1 * i
            let item = document.createElement('option')
            item.text = `${fator1} * ${i} = ${mult}`
            tab.appendChild(item)
        }
    }

}