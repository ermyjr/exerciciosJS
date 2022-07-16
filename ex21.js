const numberOne = 3
const numberSecond = 7
const numberThird = 23
const numberFourth = 17
if (numberOne % 2===0 && numberSecond % 2 ===0 && numberThird % 2 ===0 && numberFourth % 2 === 0){
    console.log("all pair")
} else if (numberOne % 2 !==0 && numberSecond % 2 !==0 && numberThird % 2 !==0 && numberFourth % 2 !== 0){
    console.log("all odd")
} else{
    console.log ("undefined")
}