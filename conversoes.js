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

// Number() converte uma string que contém números em dados do tipo NUMBER
// String() converte um conjunto de caracteres em STRING
console.log(numero + Number(numeroString)); // a soma funcionou, pois o javascript fez uma conversão EXPLÍCITA com a função 'Number()' sendo chamada




let telefone = 12341234;
console.log("O telefone é " + String(telefone)); // teremos a conversão do número 12341234 para uma string “12341234” e assim poderemos fazer a concatenação entre as strings

let telefone2 = 12341234;
console.log("O telefone é " + telefone.toString()); // o .toString() é uma outra forma para  fazer essa conversão, que é mais parecida com outras linguagens de programação.


let usuarioConectado = false;
console.log(String(usuarioConectado));; // teremos a conversão da booleana para string, nesse caso teremos uma string “false”.

usuarioConectado = true;
console.log(String(usuarioConectado)); // agora teremos uma string “true”.