// ideias, paradigmas sobre objetos

// linguagem procedural parte de função para manipular objeto
//funcao(dado1,dado2,dado3)

// paradigma orientado a objeto
// dentro dos dados há funções, comportamentos  
const objeto ={
    dado1:'a',
    dado2:'b',
    dado3:'c',
    funcao(){
        // manipulando os dados
    }
}
// a invocação do comportamento:
objeto.funcao()

/* 
1) Abstração: O mundo é formado por objetos, os objetos tem comportamento
2) Herança: objetos podem ter herança (priorizar composição à herança)
3) princípio de encapsulamento [esconder a funcionalidade]
[não precisa saber como funciona]
4) Polimorfismo: multiplas formas a partir de uma variável
ex: uma classe carro pode ser atribuida um toyota, um fusca

 */

// Objeto 1 - Object em js
// coleção dinâmica de pares chave/valor
const obj1 = new Object
obj1.nome = 'Celular'
obj1['fabricante do celular']= 'Samsung'
obj1.valor = 3000.0
console.log(obj1)

// objeto 2 - notação literal
const carro={
    modelo:'SW4',
    valor:400000.0,
    proprietario:{
        nome:'João',
        idade: 54,
        carteira:'kxd93wkje9',
        endereco:{
            rua: 'Rua dos alfineiros',
            numero:727
        }
    },
    condutores:[{
        nome:'José'
    },
    {
        nome:'Maria'
    }],
    ligarOCarro:function(){
        //exemplo de metodo
    }
}
//carro.proprietario.endereco.rua='nova rua'
//delete carro.condutores


// objeto 3 - funções construtoras
function Produto (nome, preco, desc){
    this.nome = nome; // publico
    this.getPrecoComDesc = ()=>{// publico
        return preco - preco*desc
    }
    validade = '30' // privado
}

const p1 = new Produto('bolo', 100, 0.15)
const p2 = new Produto('pizza', 54,0.1)
console.log(p1.getPrecoComDesc())

// função factory
function Pessoa(nome, salario, credito){

    return {
        nome,
        salario,
        credito,
        getSaldo(){
            return salario + credito
        }
    }
}
const pe1= Pessoa('Pedro',20000,3000)
console.log(pe1.getSaldo())


// a partir de object.create (permite parâmetros adicionais para prototipação - herança)
const person = {
    isHuman: false,
    printIntroduction: function() {
      console.log(`My name is ${this.name}. Am I human? ${this.isHuman}`);
    }
  };
  
  const me = Object.create(person);
  
  me.name = 'Matthew'; // "name" is a property set on "me", but not on "person"
  me.isHuman = true; // Inherited properties can be overwritten
  
  me.printIntroduction();
  // Expected output: "My name is Matthew. Am I human? true"

  /* 
  const elemento = Object.create(null)
  elemento.nome='joaquim'
  console.log(elemento) */

  // retorno de json por uma função JSON.parse
//   const funcionario = JSON.parse('{"nome":"Orpheu"}')
//   console.log(funcionario)
console.log(Object.entries(Pessoa).forEach(([chave,valor])=>{
    console.log("/n entries: $[chave] :$[valor]");
}));
// const alvo = {a:1,b:2}
// const outro1 = {b:4,c:5}
// const outro2 = {b:4,c: 7}
// console.log(vetorRetornado,"\n",alvo)
// const alguem ={
//     cristao:false,
//     exibir:function(){
//         console.log(`bsdhsh ${this.nome}}

// }
Object.defineProperties(Pessoa,"datacadastro",{
    eunmerable:true,
    writable:false,
    value:"12/06/2023"
})
Pessoa.dataCadastro ="12/07/2023"
console.log(Pessoa);