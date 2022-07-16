function calculateDiscount(name, value, isFirstPurchase, isCashPayment) {

    if (isFirstPurchase && isCashPayment) {
        if (value > 1000) {
            const jur = (value) - ((value / 100 * 30).toFixed(2))

            console.log(`Obrigado pela compra ${name}, o valor total sem desconto R$${value},mas você recebeu 30% e pagará R$${jur} `)
        }

        else if (value < 500) {

            const jur = (value) - ((value / 100 * 20).toFixed(2))

            console.log(`Obrigado pela compra ${name}, o valor total sem desconto R$${value},mas você recebeu 20% e pagará R$${jur} `)
        }

        else {

            const jur = (value) - ((value / 100 * 25).toFixed(2))

            console.log(`Obrigado pela compra ${name}, o valor total sem desconto R$${value},mas você recebeu 25% e pagará R$${jur} `)
        }
    }

    if (isFirstPurchase && !isCashPayment) {
        if (value > 1000) {
            const jur = (value) - ((value / 100 * 20).toFixed(2))

            console.log(`Obrigado pela compra ${name}, o valor total sem desconto R$${value},mas você recebeu 20% e pagará R$${jur} `)
        }
        else if (value < 500) {
            const jur = (value) - ((value / 100 * 10).toFixed(2))

            console.log(`Obrigado pela compra ${name}, o valor total sem desconto R$${value},mas você recebeu 10% e pagará R$${jur} `)
        }
        else {
            const jur = (value) - ((value / 100 * 15).toFixed(2))

            console.log(`Obrigado pela compra ${name}, o valor total sem desconto R$${value},mas você recebeu 15% e pagará R$${jur} `)
        }
    }

    if (!isFirstPurchase && isCashPayment) {
        if (value > 1000) {
            const jur = (value) - ((value / 100 * 20).toFixed(2))

            console.log(`Obrigado pela compra ${name}, o valor total sem desconto R$${value},mas você recebeu 20% e pagará R$${jur} `)
        }
        else if (value < 500) {
            const jur = (value) - ((value / 100 * 10).toFixed(2))

            console.log(`Obrigado pela compra ${name}, o valor total sem desconto R$${value},mas você recebeu 10% e pagará R$${jur} `)
        }
        else {
            const jur = (value) - ((value / 100 * 15).toFixed(2))

            console.log(`Obrigado pela compra ${name}, o valor total sem desconto R$${value},mas você recebeu 15% e pagará R$${jur} `)
        }
    }

    if (!isFirstPurchase && !isCashPayment) {
        if (value > 1000) {
            const jur = (value) - ((value / 100 * 10).toFixed(2))

            console.log(`Obrigado pela compra ${name}, o valor total sem desconto R$${value},mas você recebeu 10% e pagará R$${jur} `)

        }

        else if (value < 500) {
            const descont = (Math.floor(Math.random() * (20 - 10) + 10));

            console.log(`Obrigado pela compra ${name}, você recebeu um desconto de ${descont}% para a proxima compra`)
        }

        else {
            const jur = (value) - ((value / 100 * 10).toFixed(2))

            console.log(`Obrigado pela compra ${name}, o valor total sem desconto R$${value},mas você recebeu 10% e pagará R$${jur} `)
        }
    }
 }

calculateDiscount("joaquim", 50, false, false)

