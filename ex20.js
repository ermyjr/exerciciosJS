const number = 11

    if (number % 2 === 0){ 
    if (number % 5 === 0 ) console.log("Par e divisivel por 5")
    else console.log("par e nao divisivel por 5")
} else {

    for (let i =2; i < number; i++)
        if (number % i === 0 ) {
            console.log(" Ímpar, mas não é primo")
            break;
        }else{
            if( i === number - 1)
            console.log("Ele é um numero primo")
        }

}
