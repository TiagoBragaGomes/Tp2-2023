const read = require("readline-sync")
function converter(valorRecebido, moeda, valorConvertido){
   this.valorRecebido = valorRecebido;
   this.moeda = moeda;
   this.valorConvertido = valorConvertido;
}
var menu= read.question("digite o valor que vc quer converter ")
let controlar = true
while (controlar) {
    switch (menu) {
        case 1:
        var moeda = read.question("1 digite a moeda (real/dolar) para converter ")
            break;
        case 2:
        var valorRecebido= read.questionInt("2 digite o valor recebido ")
        break;
        case 3:
        var valorConvertido= read.questionInt("3 digito valor convertido")
        break;
        default:
            break;
    }

    
}

let conversoes = [valorRecebido, moeda, valorConvertido]
console.log(conversoes)






// Crie um aplicativo para rodar no Node.js e cadastrar o histórico de conversões de valores entre dolar e real. 
 
// Código de exemplo para o seu programa.js:
// /* (3 pontos) Controlar o fluxo do programa com um menu apresentando as opções para o usuário */
 
// /* (2 pontos) O programa deve converter o valor recebido: caso receba um valor em dólares, converte-o para reais ou vice-versa. Considere a taxa de conversão do dólar para o real com US$ 1,00 = R$ 4,74. */
 
// /* (3 pontos) Os dados devem ser salvos como atributos de um objeto. Para isto crie uma função construtora com os atributos:
// valorRecebido, moeda, valorConvertido
//  */
 
// /* (2 pontos) Os objetos criados devem ser salvos como itens de um vetor e exibidos na tela ao final da execução do programa*/
// let conversoes = []
// //...
 





// var menu= read.question("1 digite a moeda (real/dolar) para converter ")
// var menu= read.question("2 digite o valor recebido ")
// var menu= read.question("3 digite o valor convertido")