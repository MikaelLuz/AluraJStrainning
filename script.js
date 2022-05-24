//var
//Podemos declarar uma variável com VAR antes ou também depois do bloco "{}"

//var altura = 5;
//var comprimento = 7;
//
//area = altura * comprimento;
//console.log(area);
//var area;  ------------- AQUI É UM EXEMPLO DO COMENTÁRIO NA LINHA 2. Não iniciei a variável com VAR
// ----------------------- MESMO ASSIM O CÓDIGO FUNCIONOU SEM ERROS

//**************************************************************************************************** */

//let
//Diferente de VAR, nós só conseguimos usar variáveis LET, quando ela é declarada antes do bloco.

//let forma = "retangulo";
//let altura = 5;
//let comprimento = 7;
//let area;
//
//if (forma === "retangulo"){
//    area = altura * comprimento;
//} else {
//    area = (altura * comprimento) / 2;
//}
//
//console.log(area);
//let area; // ESSE É UM EXEMPLO COMO O DA LINHA 15. SE NÓS NÃO DECLARARMOS A LET ANTES DO BLOCO, 
// ----------- VAI DAR ERRO NO CÓDIGO, POIS POR CONVENÇÃO A LET DEVE SER INICIALIZADA ANTES E NÃO DEPOIS.

//**************************************************************************************************** */

// const
//const é uma constante... uma vez que colocamos ela no programa, ela não pode ser alterada.

const forma = "triangulo";
const altura = 5;
const comprimento = 7;
//const area; // a const não pode ser inicializada vazia, essa é a maior diferença entre ela, let e var
let area;

if(forma === "quadrado"){
    area = altura * comprimento;
} else {
    area = (altura * comprimento) / 2;
}

console.log(area);