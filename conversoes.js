// tipo de dado
// booleanos

// conversão implícita
const numero = 456;
const numeroString = "456";

console.log(numero == numeroString)
console.log(numero + numeroString) // a soma falha, pois o javascript está somando uma string com outra

// No javascript:
//
// um igual '=' é usado para atribuir valores às variáveis
// dois iguais '==' são usados para comparar os valores das variáveis
// três iguais '===' são usados para comparar os valores e o tipo dos dados internos



// conversão explícita

// Number()
// String()
console.log(numero + Number(numeroString)); // a soma funcionou, pois o javascript fez uma conversão EXPLÍCITA com a função 'Number()' sendo chamada