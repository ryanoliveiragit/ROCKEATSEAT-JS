//separe um texto que contem espaços, em um novo array onde cada texto é uma posição do array. Depois disso, transforme
//o array em um texto e onde eram espaços, coloque _

let text = "Ryan é um gatão lindo e bonito"
let array = [
    "Ryan",
    "é",
    "um",
    "gatão",
    "lindo",
    "e",
    "bonito",
]

let finalText = array.join("_")
console.log(finalText)