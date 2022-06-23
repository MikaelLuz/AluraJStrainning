// boolean
const usuarioLogado = true;
const contaPaga = false;

// truthy ou falsy
// 0 "zero" => false
// 1 "hum" => true
// console.log(0 == false)
// console.log(0 == "")
// console.log(1 == true)

// undefined => inicializou o valor, mas não atribiu valor algum a ela....
//ou seja, é um valor indefinido
let minhaVar;
console.log("Visualizando valor da variável 'minhaVar'", minhaVar);

// null => vazio ou nada
let varNull = null;
console.log("Visualizando valor da variável 'varNull' ", varNull);

let numero = 3;
let texto = "Alura";

console.log("Visualizando valor da variável 'numero'  ", typeof(numero));
console.log("Visualizando valor da variável 'texto'   ", typeof(texto));

console.log("Visualizando valor da variável 'minhaVar'", typeof(minhaVar));
console.log("Visualizando valor da variável 'varNull' ", typeof(varNull)); // Bug nativo do JS que traz como 'OBJECT' o valor de null quando usamos o typeof