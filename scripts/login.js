function inserirTexto(event) {
    document.querySelector('.inserir__texto').innerText = 'Ops, usuário ou senha inválidos. Tente novamente!'
    event.preventDefault();
    
}
function logar(event) {
    var login = document.getElementById('login__sucesso').value;
    var senha = document.getElementById('senha__sucesso').value;
    

    if(login === "viroe@compass.uol.com" && senha === "viroe") {        
        location.href = './home.html'        
    } else {
        return inserirTexto(event);        
    }
    
}
