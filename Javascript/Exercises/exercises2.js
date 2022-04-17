//Crie um OBJETO que possuirá 2 propriedades
//ambas do tipo array
// *receitas: []
// *despesas: []
//agora crie uma função que irá calcular o total de
//receitas e despesas e irá mostrar uma mensagem
//se a familia está com saldo positivo ou negativo, seguido o valor do
//saldo

let despesas = {
    incomes : [2500, 232, 3232, 23, 323],
    expenses: [232,32,32,34,212,52]
  }
  
  function sum(array) {
    let total = 0
      for(let value of array) {
        total += value
      }
    return total
  }
  
  function calculateBalance() {
    const calculateIncomes = sum(despesas.incomes)
    const calculateExpenses = sum(despesas.expenses)
    
    const total = calculateIncomes - calculateExpenses
    const itsOk = total >= 0
    
    let message = 'Negativo'
    
    if (itsOk) {
      message = "positivos"
    }
    console.log(`seu lado é ${message}: ${total}`)
  }
  
  calculateBalance()
  