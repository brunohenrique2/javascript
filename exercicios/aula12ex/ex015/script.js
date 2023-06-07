function verify() {
    var ano = document.querySelector('input#iano').value
    var sexo = document.querySelector('input[name="sexo"]:checked').value
    var img = document.getElementById('foto')
    console.log(ano)
    console.log(sexo)
    
    if((ano >= 1 && ano < 13) && (sexo == "M")) {
        img.src = 'img/crincaM.jpg'
    }else if((ano >= 1 && ano < 13) && (sexo == "F")) {
        img.src = 'img/crincaF.jpg'
    }else if((ano >= 13 && ano < 18) && (sexo == "M")) {
        img.src = 'img/adolescenteM.jpg'
    }else if((ano >= 13 && ano < 18) && (sexo == "F")) {
        img.src = 'img/adolescenteF.jpg'
    }else if((ano >= 18 && ano < 50) && (sexo == "M")) {
        img.src = 'img/adultoM.jpg'
    }else if((ano >= 18 && ano < 50) && (sexo == "F")) {
        img.src = 'img/adultoF.jpg'
    }else if((ano >= 50 && ano <= 100) && (sexo == "M")) {
        img.src = 'img/velho.jpg'
    }else if((ano >= 50 && ano <= 100) && (sexo == "F")) {
        img.src = 'img/velha.jpg'
    }else if((ano <= 0) || (ano > 100)) {
        alert("Idade invalida, tente novamente")
    }
    
}