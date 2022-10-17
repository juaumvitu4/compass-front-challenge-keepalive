const timer = document.querySelector(".tempo")
var contador = 5
setInterval(() =>{
    if(contador > 0) timer.innerHTML = contador -= 1
    if (contador === 0){
        prompt("Deseja continuar na pagina");
        document.location.reload(true);
    }    
}, 1000)

function contadorZero() {
    if(contador <= 0) {
        
    }
}