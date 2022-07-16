const number= Math.floor(Math.random()*(10-1)+1)

const winningNumber= Math.floor(Math.random()*(10-1)+1)+

console.log(number)

if (number === winningNumber){
    console.log("você ganhou")
} else {
    console.log("você perdeu")
}