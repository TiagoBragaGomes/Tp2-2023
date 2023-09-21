const obj1 = new Object()
// console.log(typeof new Object());

obj1.nome = "carro"
obj1.valor = 100
console.log(obj1);

// notação dois 

const carro = {
    modelo: "R6S",
    marca: "Audi",
    valor: 200000,
    proprieadae: {
        nome: "novemn",
        email: "xvduwiwhdh"
    },
    nomedospais: [{
        mutiofacul: "akak",
    }]


    
}
console.log(carro);

//this público 

function Produto(nome, preço, desc) {
    this.nome = nome;
    this.preço = preço;

    this.getprecoComDesc = () => {
        return preço - preço * desc
    }
    // validade = "30" //atributo privado
    const produto1 = new Produto("bolo", 200, 0.50)
    const produto2 = new Produto("pizza", 35, 0.2)
    console.log(produto1, "/n", produto2.getprecoComDesc())
    function pessoa(nome, data, saldo) {
            return {
                nome,
                saldo,
                data,
                getsaldo() {
                    return saldo + data
                }
            }
        }
const pe1 = pessoa ("Tiago",200,230)
console.log(pe1.getsaldo())

    }
// const pe1 = pessoa('Tiago', 2000, 3000)
// console.log(pe1.getsaldo());
// const me = Object.create(person)
// me.name = "Tiago"
// me.isHumano = true
// me.printIntroduction()
