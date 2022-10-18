
const timer = document.querySelector(".tempo")
var contador = 601;
setInterval(() =>{
    if(contador > 0) timer.innerHTML = contador -= 1
    if (contador === 0){        
        sair("Você quer sair da página ?"); 
        contador = 601;
    }    
}, 1000)
