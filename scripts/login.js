function inserirTexto(event) {
    document.querySelector('.inserir__texto').innerHTML = '<p>Ops, usuário ou senha inválidos.<br> Tente novamente!</p>'
    event.preventDefault();
    
}
function logar(event) {
    var login = document.getElementById('login__sucesso').value;
    var senha = document.getElementById('senha__sucesso').value;
    

    if(login === "admin@admin" && senha === "admin") {        
        location.href = "home.html";        
        event.preventDefault();        
             localStorage.setItem("items", JSON.stringify({login, senha}));    
    } else {
        return inserirTexto(event);        
    }
    
}
