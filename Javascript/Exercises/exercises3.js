//crie uma função que receba uma string em celsius ou fahrenheit e faça transforma
//ção de uma unidade para outra

//C = (F - 32) * 5/9
//F = C * 9/5 + 32


function tranformDegree(degree) {
    const celsiusExists = degree.toLocaleUpperCase().includes('C')
    const FahrenheitsExists = degree.toLocaleUpperCase().includes('F')

    if(!celsiusExists && !fahrenheit) {
        throw new console.error('grau não indentificado');
    }

    let updatedDegree = Number(degree.toUppercase().replace("F", ""));
    let formula = (fahrenheit) => (fahrenheit - 32) * 5/9
    let degreeSign = "C"

    return formula(updatedDegree) + degreeSign
}