console.log("script.js funcionando.")

const inputNumero1 = document.getElementById('inputNumero1')
const inputNumero2 = document.getElementById('inputNumero2')

const txtResultado = document.getElementById('txt-resultado')

function soma(numero1, numero2) {
    const resultado = numero1 + numero2
    return resultado
}

function gerarResultado(event) {
    event.preventDefault() 
    console.log('gerarResultado')    
    const x = parseInt(inputNumero1.value)
    const y = parseInt(inputNumero2.value)

    const resultado = soma(x, y)

    // alert(resultado)

    txtResultado.innerText = `Resultado: ${resultado}`
    
}