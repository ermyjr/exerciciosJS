const personOne = {
    nome :"elizeu",
    idade: 27, 
    sexo: "Masculino",
    profissão: "Programador",
    nacionalidade:"brasileira"}

    if(personOne.idade>=18 && (personOne.nacionalidade==="brasileiro"||personOne.nacionalidade==="brasileira")){
        console.log("você passou no processo")
    } else{
        console.log("você não passou no processo")
    }