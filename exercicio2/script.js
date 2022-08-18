//Crie um programa que peça um input de número para o usuário. Com este número, o código deve imprimir a **tabuada** do número, de 1 a 10.

let tabuada = +prompt("Digite o número para criar a tabuada:")
while (isNaN(tabuada)) /*IsNan = SE NÃO FOR NÚMERO*/ {
    tabuada = +prompt("Numero inválido tente novamente")
} //CONDIÇÃO PARA CASO NÃO SEJA NÚMERO - VALIDADOR
let multiplicacao = [1,2,3,4,5,6,7,8,9,10]
let resultado = 0
for (let i in multiplicacao) {
    resultado =  tabuada * multiplicacao[i]
    console.log(`${tabuada} * ${multiplicacao[i]} = ${resultado}`)
    console.log("-".repeat(30))
}
console.log('Bons estudos')

//EXERCÍCIO CLEITON
// let  numero = +prompt("Digite um numero: ")

// for (i = 1; i < 11; i++){
//     const array = []
//     array.push(i)
//     //console.log("primeiro console",array)
//     for (j in array){
//         console.log(array*numero)
//     }
// }