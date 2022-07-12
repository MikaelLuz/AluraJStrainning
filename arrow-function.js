//function declarada
function minhaFunction(nome){
    return `meu nome é ${nome}`
}

//arrow function
// não pode ser nomeada
const apresentarArrow = nome => `meu nome é ${nome}`

const soma = (num1, num2) => num1 + num2

//arrow function com mais de uma linha de instrução
const somarNumerosPequenos = (num1, num2) => {
    if (num1 || num2 > 10){
        return "somente números de 1 a 9"
    }else{
        return num1 + num2
    }
}