function logar() {
    var login = document.getElementById('login__sucesso')
    var senha = document.getElementById('senha__sucesso')

    if(login == "Viroe@compass.uol.com" && senha == "viroe") {
        alert("Sucesso");
        
    } else {
        alert("usuario e senha incorretos.")
    }
}

