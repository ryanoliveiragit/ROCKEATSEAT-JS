//if and else

let temperature = 36.7
let highTemperature = temperature >- 37.5
let mediumTemperature = temperature < 37.5

if (highTemperature) {
    console.log('Febre alta')
} else if (mediumTemperature) {
    console.log('Febre moderada')
} else {
    console.log('Saudável')
}