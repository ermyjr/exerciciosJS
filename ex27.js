function calculate ( valorInicial, valorAtual, tempo){

    const jur  = ( valorAtual - valorInicial) / (valorInicial*tempo)

    console.log (( jur * 100).toFixed(2) + '%')

}


calculate (100, 1200, 13)