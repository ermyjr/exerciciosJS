const firstNumber = Math.floor(Math.random()*(100-1)+1)
const secondNumber = Math.floor(Math.random()*(100-1)+1)
const thirdNumber = Math.floor(Math.random()*(100-1)+1)


if ( firstNumber > secondNumber && thirdNumber){
    console.log("o primeiro é maior")
}

else if ( firstNumber && secondNumber > thirdNumber){
    console.log("o primeiro é menor")
}

else {
    console.log("o primeiro é menor")
}