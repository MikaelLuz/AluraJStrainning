// forma declarativa(declaração de função):
//
// function minhaFuncao(parametro){
//     // bloco ded código
// }
//
// minhaFuncao("param")

//expressão de função
//
//const soma = function(numero1, numero2){return numero1+numero2}
//console.log(soma(1,2))

console.log(apresentar())

// diferença principal de declaração de função x expressão de função
// HOISTING: funções e var são "listadas" no topo do arquivo
function apresentar(){
    return "olá";
}
console.log(soma(1,2)) //se deixar a chamada da função que não contém nome aqui, vai dar erro... mesma regra das variáveis
const soma = function(numero1, numero2){return numero1+numero2}