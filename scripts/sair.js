function sair(text = "Você deseja fazer logout ?") {  
    if (confirm(text) == true) {
      text = "You pressed OK!";
      window.location = '../index.html'
      localStorage.clear();
    } else {
      text = "You canceled!";  
      location.href = '../home.html' 
    }
}
            
    
    

