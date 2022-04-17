//function () constructor
// expressão new
// Criar um novo objeto
// this keyword

function Person(name){
    this.name = name
    this.walk = function() {
        return this.name + 'está andando'
    }
}

const Ryan = new Person('Ryan')
const Joao = new Person('Joao')
console.log(Ryan)
console.log(Joao)