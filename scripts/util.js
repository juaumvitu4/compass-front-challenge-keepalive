export const getDate = () => {
    const fullMonths = ["Janeiro", "Fevereiro","Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro",];
    
    const data = new Date();
    
    return `${diaDaSemana(data.getDay())}, ${data.getDate()} de ${
      fullMonths[data.getMonth()]
    } de ${data.getFullYear()}`;
  }; 

  function diaDaSemana(numeroDia){
    switch (numeroDia) {
      case 0:
        return "Domingo"
      case 1:
        return "Segunda-feira"
      case 2:
        return "Terça-feira"
      case 3:
        return "Quarta-feira"
      case 4:
        return "Quinta-feira"
      case 5:
        return "Sexta-feira"
      case 6:
        return "Sabado"
      
    }
}


  export const getHour = () => {
    const data = new Date();
    return `${data.getHours()}:${
      data.getMinutes() < 10 ? `0${data.getMinutes()}` : data.getMinutes()
    }`;
  };
  
  export const insertContent = (childEl, contentEl, parentEl) => {
    const childTag = document.createElement(`${childEl}`);
    const content = document.createTextNode(`${contentEl}`);
    const parentTag = document.querySelector(`${parentEl}`);
  
    parentTag.innerHTML = "";
    childTag.appendChild(content);
    parentTag.appendChild(childTag);
    
  };