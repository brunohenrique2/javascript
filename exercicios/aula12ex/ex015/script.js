function verify() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.querySelector('input#iano').value
    var res = document.getElementById("res")
    
    if(fano.length == 0 || fano > ano) {
        alert("[ERROR] verifique os dados e tente novamente.")
    }else {
        var idade = ano - Number(fano)
        var sexo = document.getElementsByName('sexo')
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id','foto')
        
        if(sexo[0].checked) {
            genero = 'Homem'
            if(idade >= 0 && idade < 10) {
                //criança
                img.setAttribute('src', 'img/crincaM.jpg')
            }else if(idade < 21) {
                //Jovem
                img.setAttribute('src','img/adolescenteM.jpg')
            }else if(idade < 50) {
                //Adulto
                img.setAttribute('src','img/adultoM.jpg')
            } else {
                //idoso
                img.setAttribute('src','img/velho.jpg')
            }
        }else if(sexo[1].checked) {
            genero = 'Mulher'
            if(idade >= 0 && idade < 10) {
                //criança
                img.setAttribute('src', 'img/crincaF.jpg')
            }else if(idade < 21) {
                //Jovem
                img.setAttribute('src','img/adolescenteF.jpg')
            }else if(idade < 50) {
                //Adulto
                img.setAttribute('src','img/adultoF.jpg')
            } else {
                //idoso
                img.setAttribute('src','img/velha.jpg')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos<br>`
        res.appendChild(img)

    }
    
}