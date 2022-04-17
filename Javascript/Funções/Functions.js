//function expression
//function anonymous

//parametros (parameters)
const sum = function(number1,  number2){
    total = (number1 + number2)
    return total
}

let number11 = 34
let number22 = 25
sum(number11, number22) //arguments - argumentos

console.log(`o número 1 é ${number11}`)
console.log(`o número 2 é ${number22}`)
console.log(`a soma é ${sum(number11, number22)}`)

//function é um liquidificador

function fazerSuco(fruta1, fruta2) {
    return fruta1 + fruta2
}

const copo = fazerSuco ('banana', 'maça')
console.log(copo)