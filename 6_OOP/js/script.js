// 1 - METODOS
const animal = {
    nome: "Bob",
    latir: function () { 
       console.log("Au au");
    },
}
console.log(animal.nome);
//acessando a propriedade do objeto com .
animal.latir(); // parenteses das funcoes para executar a funcao que esta dentro do objeto
// Por fim temos PROPRIEDADES que sao VALORES, que podemos ler e alterar (Bob), e os METODOS que sao FUNCOES que podemos executar ao longo do nosso programa


// 2 - APROFUNDAMENTO EM METODOS (sao utilizados para interagir tambem com as propriedades do seu objeto, podemos exibi-las ou modifica-las, referenciando com  o proprio objeto com a palavra reservada THIS - este objeto vai modificar a propriedade x)

const pessoa = {
    nome: "Gabriel", // aqui eu tenho so o valor da propriedade
    getNome: function () { //metodo que vai retornar o nome, carregando uma function
       return this.nome; 
       
    },
    //alterando a propriedade nome desse novo objeto com o (this)
    setNome: function (novoNome) { // novoNome eh o parametro da funcao desse novo metodo
        this.nome = novoNome // o novo nome vem do parametro da funcao acima
    },
    
}
//fazer esses dois codigos da o mesmo resultado

console.log(pessoa.nome)
console.log(pessoa.getNome());
pessoa.setNome("Joaquim") // novo nome
console.log(pessoa.getNome()) // usando esse metodo tenho o nome da pessoa modificado pelo metodo


// 3 - SOBRE PROTOTYPES (Recurso que faz parte da arquitetura do JavaScript, uma especie de heranca, onde objetos pais herdam propriedades e metodos aos filhos, por isso muitos dados sao considerados objetos, temos como objetos string, number e outros, ou seja, cada dado tem um objeto pai que herdou caracteristicas pelo prototype)

// O recurso fundamental do prototype eh entender o FALLBACK, quando uma propriedade nao existe em um dado/objeto ela eh procurada pelo seu ANCESTRAL, ou seja eh por isso que temos acesso a LENTGH em strings


const text = "asd" // o javascript ja pegou as caracteristicas do prototype da string no momento que foi criada
//na pratica
console.log(Object.getPrototypeOf(text)) // vamos ver quem eh o ancestral do texto, sendo para o JavaScript um Ojbeto, cujo ancestral eh String

// Com um Booleano
const bool = true
console.log(Object.getPrototypeOf(bool))

// A mesma coisa acontece com array e qualquer outro tipo de dado, ele sempre vai ter um ancestral

const arr = []

console.log(arr.length) // mostra zero, pois nao tem dado de objeto vazio

console.log (Object.getPrototypeOf(arr))

// 4 - MAIS SOBRE PROTOTYPES (Quando criamos um objeto a partir de outro, este outro sera o prototype do objeto criado, porem tambem herdara caracteristicas do objeto pai, se for um objeto, herda do Object, esta eh a cadeia do prototype)

const myObject = {
    a: "b",
}

console.log(Object.getPrototypeOf(myObject))

//Criando um objeto a partir de outro, fazendo o myObject ser o prototype do mySecondObject
const mySecondObject = Object.create(myObject)

console.log(mySecondObject)
// assim consigo acessar a propriedade "a" do mySecondObject, sem ter criado "a" nele
console.log(mySecondObject.a)
// testando com booleano, evidenciando que o objeto pai eh o myObject, que tem outro objeto pai que eh o Object, criando assim uma cadeia de prototipos
console.log(Object.getPrototypeOf(mySecondObject) === myObject)

// 5 - CLASSES BASICAS - (Prototypes sao originados de uma classe, que eh o molde dos objetos, nela DEFINIMOS os METODOS e PROPRIEDADES, JavaScript ja possui suas classes, porem podemos criar as nossas, isso eh essencial para orientacao a objetos)

// Criamos um objeto que vai ser o molde para a classe cachorro e vamos criar varios cachorros

const cachorro = {
    raca: null, // comeca como nulo pq existem varias racas
    patas: 4
}
// criando os varios

const pastorAlemao = Object.create(cachorro)
pastorAlemao.raca = "Pastor Alemao"
console.log(pastorAlemao)
// Aqui outro objeto que aproveitou o prototype da classe cachorro original, instanciando (criando) novos objetos
const Bulldog = Object.create(cachorro)
Bulldog.araca = "Bulldog"
console.log("Bulldog")

// 6 - CLASSES BASEADAS EM FUNCOES CONSTRUTORAS (Utilizando funcoes como classes, conseguimos iniciar as propriedades com a criacao do objeto. Chamamos de funcao construtora este recurso. O construtor tem como objetivo INSTANCIAR um objeto, ou seja CRIAR UM NOVO OBJETO, basicamente eh quando uma FUNCAO VIRA UMA CLASSE)


function criarCachorro(nome, raca) {
    const cachorro = Object.create({}) //criando um objeto vazio na funcao
    // coloco as propriedades nele, baseado no que veio por argumento
    cachorro.nome = nome
    cachorro.raca = raca

    return cachorro
}

const bob = criarCachorro("Bob", "Vira Lata")
console.log(bob)
const jack = criarCachorro("Jack", "Poodle")
console.log(jack)
// vendo o prototype do jack
console.log(Object.getPrototypeOf(jack))

// 7 - CLASSES BASEADAS EM FUNCOES (Recurso semelhante ao anterior, mas com uma nova palavra chave NEW, tambem utilizado em outras linguagens, para instanciar novos objetos e, eles podem partir de funcoes)

// Iniciamos a funcao com a letra inicial maiuscula, no caso, Cachorro, ja recebendo as classes nome e raca

function Cachorro(nome, raca) {
    this.nome = nome
    this.raca = raca
    
}

const husky = new Cachorro("Ozzy", "Husky")
console.log(husky)

// 8 - CLASSES DE FUNCAO COM METODOS NA FUNCAO CONSTRUTORA (Para adicionar metodos antes da criacao do objeto, podemos acessar o prototype e coloca-los la, essa eh basicamente a essencia do JavaScript, porem com a evolucao da linguagem, outros recursos foram criados)

Cachorro.prototype.uivar = function () {
    console.log("Auuu!")
}
console.log(Cachorro.prototype)
husky.uivar();


// 9 - CLASSES ES6 (Nas versoes mais agtuais de JS abandonamos as functions e utilizamos as classes, temos recursos comuns em outras linguagens alem do consgtructor, alem da instancia por new)

class CachorroClasse {
/*funcao*/ constructor (nome, raca) {
            this.nome = nome
            this.raca = raca
    }
}

const jeff = new CachorroClasse("Jeff", "Labrador")
console.log(jeff)

// 10 - MAIS SOBRE CLASSES (Nao podemos adicionar propriedades diretamente as classes, isso precisa ser feito ao inicia-la, ou via prototype. Metodos da classe tambem podem utilizar this para se referir ao objeto instanciado, os metodos nao precisam da palavra FUNCTION)

//So ira funcionar o que esta dentro do constructor, ou via prototype
class Caminhao {
    constructor(eixos, cor) {
        this.eixos = eixos
        this.cor = cor
    }
    //Apos o constructor coloco o metodo, sem argumento nos parenteses
    descreverCaminhao() {
        console.log(`Este caminhao tem ${this.eixos} eixos e eh da cor ${this.cor}`)
    }
} 
const scania = new Caminhao (6, "vermelha")
console.log(scania)
scania.descreverCaminhao()

const c2 = new Caminhao (4, "Preta")
console.log(c2)
// colocando mudanca pelo prototype
Caminhao.prototype.motor = 4.0
// instanciando um novo objeto
const c3 = new Caminhao(6, "Azul")
console.log(c3.motor)

// 11 - OVERRIDE NAS PROPRIEDADES VIA PROTOTYPE (As instancias dos objetos sao criadas baseadas nas classes, ou seja as propriedades tem os valores definidos no construtor, ou por metodos, para altera-los podemos utilizar o prototype)

class Humano {
    constructor(nome, idade) {
        this.nome = nome
        this.idade = idade
    }
}
const Gabriel = new Humano("Gabriel", 38)
console.log(Gabriel)
// Mudando a idade com prototype para um valor ja predefinido
Humano.prototype.idade = "Nao definida"; // se o humano nao tem uma instancia ainda, a idade dele nao eh definida, mas isso nao vai alterar os objetos que instanciaram essa classe, apenas o prototype da classe que origina os objetos
console.log(Gabriel.idade);
console.log(Humano.prototype.idade);
// Se colocassemos a idade antes do prototype teriamos um undefined, pois a propriedade nao existe ainda


// 12 - SYMBOLS EM CLASSES (Quando utilizamos um recurso de Symbol, com classe, eh possivel criar uma propriedade unica e imutavel, isso eh util quando ha algum dado que se repetira em todos os objetos criados a partir da classe)

class Aviao {
    constructor(marca, turbinas) {
        this.marca = marca
        this.turbinas = turbinas 
    }
}
// invocamos o objeto SYMBOL
const asas = Symbol()
Aviao.prototype[asas] = 2 //pois as asas sempre se repetem, isso faz com que as classes passem esse valor para os objetos que ela instancia
// Outra propriedade
const pilotos = Symbol()
Aviao.prototype[pilotos] = 3

const boeing = new Aviao ("Boeing", 10)
console.log(boeing)
// Acessando o prototype com a propria constante de nome "asas"
console.log(boeing[asas])
console.log(boeing[pilotos])


// 13 - GETTERS AND SETTERS (O get eh um metodo utilizado para exibir o valor de alguma propriedade, o set eh utilizado para alterar o valor, atraves dos metodos temos um bloco de codigo para transformacao de dados)

class Post {
    constructor(titulo, descricao, tags) {
        this.titulo = titulo
        this.descricao = descricao
        this.tags = tags
    }
    // criando um getter para exibir o titulo, abro e fecho parenteses pois nao tenho argumento
    get exibirTitulo() {
        return `Voce esta lendo ${this.titulo}`
    }
    // criando o setter, criando como se fosse array e nao como string que esta no projeto
    set adicionarTags(tags) {
        const tagsArray = tags.split(", ")
        this.tags = tagsArray
    }

}
const myPost = new Post("Algum post", "Eh um post sobre programacao")
console.log(myPost)
//Utilizando o getter como se fosse uma propriedade
console.log(myPost.exibirTitulo)

//Addendum, nao sou obrigado a colocar todos os parametros no constructor, vou criar os objetos sem as tags, que serao inseridas pelo metodo setter
// Usando o setter como valor de atribuicao, como se fosse uma propriedade alterando o valor
myPost.adicionarTags = "Programacao, JavaScript, JS"
console.log(myPost)

// 14 - HERANCA (Uma classe pode herdar prorpiedades de outra por meio de heranca. Utilizamos a palavra chave EXTENDS, para adicionar a classe que vai trazer as propriedades e SUPER para enviar os valores para a classe PAI)

class Mamifero {
    constructor(patas) {
        this.patas = patas

    }
}
// Criando uma classe lobo que extende mamiferos
class Lobo extends Mamifero {
    constructor(patas, nome) {
        //Mandando as patas para a classe pai (Mamifero)
        super(patas, patas)   
        //Propriedades da classe
        this.nome = nome
    }
}
//Herdou do objeto mamifero
const shark = new Lobo(4, "Shark")
console.log(shark)

// 15 OPERADOR INSTANCEOF (Assim como o typeof que verifica o tipo, temos o operador INSTANCEOF que verifica se um objeto eh PAI DE OUTRO, para ter certeza de sua ancestralidade, isso eh verificado com objeto => classe, e nao atraves das classes)

//Usando uma classe ja criada
console.log(shark instanceof Lobo)
//Vai dar falso pois esta verificando as classes e nao os objetos
console.log(Lobo instanceof Mamifero)

//Maneira correta de fazer, para verificar o objeto para a classe
console.log(new Lobo(4, "teste") instanceof Mamifero)