const brazilianStates = [
    { id: 1, name: "Acre", abbreviation: "AC" },
    { id: 2, name: "Alagoas", abbreviation: "AL" },
    { id: 3, name: "Amapa", abbreviation: "AP" },
    { id: 4, name: "Amazonas", abbreviation: "AM" },
    { id: 5, name: "Bahia", abbreviation: "BA" },
    { id: 6, name: "Ceara", abbreviation: "CE" },
    { id: 7, name: "Distrito Federal", abbreviation: "DF" },
    { id: 8, name: "Espirito Santo", abbreviation: "ES" },
    { id: 9, name: "Goias", abbreviation: "GO" },
    { id: 10, name: "Maranhao", abbreviation: "MA" },
    { id: 11, name: "Mato Grosso", abbreviation: "MT" },
    { id: 12, name: "Mato Grosso do Sul", abbreviation: "MS" },
    { id: 13, name: "Minas Gerais", abbreviation: "MG" },
    { id: 14, name: "Pará", abbreviation: "PA" },
    { id: 15, name: "Paraiba", abbreviation: "PB" },
    { id: 16, name: "Parana", abbreviation: "PR" },
    { id: 17, name: "Pernambuco", abbreviation: "PE" },
    { id: 18, name: "Piaui", abbreviation: "PI" },
    { id: 19, name: "Rio de Janeiro", abbreviation: "RJ" },
    { id: 20, name: "Rio Grande do Norte", abbreviation: "RN" },
    { id: 21, name: "Rio Grande do Sul", abbreviation: "RS" },
    { id: 22, name: "Rondonia", abbreviation: "RO" },
    { id: 23, name: "Roraima", abbreviation: "RR" },
    { id: 24, name: "Santa Catarina", abbreviation: "SC" },
    { id: 25, name: "Sao Paulo", abbreviation: "SP" },
    { id: 26, name: "Sergipe", abbreviation: "SE" },
    { id: 27, name: "Tocantins", abbreviation: "TO" },
    ];

navigator.geolocation.getCurrentPosition((position) => {

    let token = "37f3e17d6c1346caa9f103953221710"
    let cordenadas = `${position.coords.latitude},${position.coords.longitude}`
    
    fetch(`http://api.weatherapi.com/v1/current.json?key=${token}&q=${cordenadas}`)
    .then((response) => response.json())
    .then((data) => {
        let temperaturaC = data.current.temp_c;
        let cidade = data.location.name;
        let estado = brazilianStates.find(x => x.name === data.location.region).abbreviation;
        

        document.querySelector('.texto__clima').innerText = `${temperaturaC}º`
        document.querySelector('.local').innerText = `${cidade}, ${estado} `
    });    
})
