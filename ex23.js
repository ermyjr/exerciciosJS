const table = (number) => {
    if (number > 10 || number < 1) {
        console.log('aceitamos somente numeros entre 1 e 10')
    }

    for (let i = 1; i <= 10; i++) {
        console.log(`${i} x ${number}= ${i * number}`)
    }


}






table(5)