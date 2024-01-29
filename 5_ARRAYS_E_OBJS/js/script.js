// 1 - ARRAYS (no JS o array eh considerado um objeto)
const lista = [1, 2, 3, 4, 5];

console.log(lista);
console.log(typeof lista);


const itens = ["Gabriel", true, 2, 4.12, []]

console.log(itens)


// 2 - MAIS SOBRE ARRAYS (acessando itens da lista individualmente, o primeiro elemento sempre sera o zero)
const arr = ["a", "b", "c", "d", "d"]

console.log(arr[0])
//pegando a letra c, que no caso seria o numero 2 da lista, uma vez que 0 eh o primeiro
console.log(arr[2])
//acessando um indice que nao existe, da undefined
console.log(arr[83])


// 3 - PROPRIEDADES (sao como informacoes de um objeto, os arrays tem propriedades, assim como outros dados, podem ser acessadas por notacoes de ponto ou colchetes, dado.prop ou dado[`prop`])

const numbers = [5, 3, 4]

console.log(numbers.length)
//isso da o mesmo resultado que fazer a sintaxe abaixo
console.log(numbers["length"])
// outros tipos de dados tem outras propriedades
const myName = ("Gaberiel")
// Aqui temos a quantidade de caracteres que a string tem
console.log(myName.length)

// 4 - METODOS (sao como funcoes, acessamos com notacoes de ponto e utilizamos (), CONCEITO DE ORIENTACAO A OBJETOS, objetos sao compostos por metodos e propriedades, como muitos dados sao objetos em JS, temos metodos e propriedades neles, )


const otherNumbers = [1, 2, 3]

// unindo, ou contatenando duas listas, usando o metodo contat de concatenar

const allNumbers = numbers.concat(otherNumbers)
console.log(allNumbers)
// deixando todas as letras maiusculas atraves de metodos

const text = "Algum texto"
console.log(text.toUpperCase())
// vendo o tipo, function
console.log(typeof text.toUpperCase)
// metodo para encontrar a posicao de um caractere numa string
console.log(text.indexOf("g")) // lembrando que o indice dos caracteres comecam no 0, por isso o g de algum fica no caractere 2

// 5 - OBJETOS (em JS temos um tipo de dado que o nome eh object literals, isso porque o objeto vem da orientacao a objetos, com recursos como heranca, instanta... Ja no literals possui apenas propriedades e metodos, fica em bloco de {})

const person = { /*Objeto pessoa*/
   name: "Gabriel",
   age:38,
   job:"Programador"  /*sintaxe do objeto vem com os dois pontos : e separa os itens com virgula*/
}
//imprimindo o objeto inteiro
console.log(person);
//acessando  apenas uma propriedade individualmente
console.log(person.name);
//utilizando propriedades daquele tipo de dado
console.log(person.name.length);
//acessando o tipo (object)
console.log(typeof person);

// 6 - REMOVENDO E CRIANDO NOVAS PROPRIEDADES (utilizamos a notacao de ponto e atrbuimos um valor, para excluir utilizar o operador de delete)

const car = {
    engine: 2.0,
    brand: "VW",
    model: "Tiguan",
    km:20000
}
console.log(car);
//incrementando uma nova propriedade
car.doors = 4;
console.log(car)
//deletando uma propriedade
delete car.km;

console.log(car);

//  AVISO! - DIFERENCA ENTRE ARRAYS E OBJETOS (Arrays sao lista de itens, objetos sao utilizados para descrever um item, podemos ter tambem uma array de objetos)

// 7 - MAIS SOBRE OBJETOS (Podemos copiar todas as propriedades de um objeto para outro com o metodo assign, object literal eh uma instancia de um objeto, chamado Object, UM OBJETO OU ARRAY CRIADO COM CONST PODE TER SEUS ELEMENTOS E PROPRIEDADES MODIFICADOS, MAS NAO DE UMA VARIAVEL)

const obj = {
    a:"teste",
    b: true,
};

console.log(obj instanceof Object); //o instanceof mostra quem eh o objeto pai 
//outro exemplo

const obj2 = {
    c:[]
}
Object.assign(obj2, obj)
//pegou a propriedade de A e B
console.log(obj2)


// 8 - CONHECENDO MELHOR OS OBJETOS
console.log(Object.keys(obj))
console.log(Object.keys(obj2))
console.log(Object.keys(car)) // com o objeto carro

console.log(Object.entries(car)) // entrega varias arrays, contem nome da propriedade e valor

// 9 - MUTACAO OU MUTABILITY (ocorre quando criamos um objeto a partir de outro, nao eh um objeto novo e sim uma referencia do primeiro, as mudancas podem afetar a copia)

const a = {
    name: "Gabriel"
    
};

const b = a; // cuidado ao criar a referencia de objeto!!! O b nao eh um objeto novo e sim uma referencia de a

//ambos os objetos possuem a mesma propriedade
console.log(a);
console.log(b);

console.log(a === b) //em um booleano identifica como true

// se eu adicionar a propriedade age ao objeto a, o que acontece com o b?
a.age = 21
console.log(b)
// a mesma coisa faz com o objeto a
console.log(a)


// 10 - LOOPS EM ARRAYS (Comum percorrer os arrays em estruturas de repeticao, isso serve para utilizar os resultados sem repeticao de codigo)

const users = ["Gabriel", "Joao", "Miguel"];
//usando a quantidade de elementos para saber quando vou parar a repeticao do meu array, listando o meu "i"
for(let i = 0; i < users.length; i++) { 
    console.log(`Listando o usuarios: ${users[i]}`)
}

// 11 - METODOS DE ARRAY: PUSH E POP (util para manipular os arrays, ou seja, alterar os valores, com o push adicionamos um item ao fim do array, com o pop temos uma remocao de um elemento no fim do array)

const array = ["a", "b", "c"]
array.push("d") //adicionando com o push
console.log(array) // listando
console.log(array.length) // aqui mostrou que tinham 4 objetos na array

//removendo
array.pop();
console.log(array) // aqui vai mostrar 3 objetos na array
// o pop pode retornar um item removido, caso removeu o item c
const itemRemoved = array.pop()

console.log(itemRemoved)
console.log(array)

//mais uma caracteristica do push eh que ele pode adicionar varios elementos, colocando eles separados por virgula, no caso adicionou o z,x,y

array.push("z", "x", "y")
console.log(array);

// 12 - METODOS DE ARRAY: SHIFT E UNSHIFT (o metodo shift remove o primeiro elemento do array, o unshift adicona itens ao inicio do array)

const letters = ["a", "b", "c"]

//removendo uma letra e retornando ela
const letter = letters.shift()
console.log(letter)
//vai ter todas as letras menos a letra a
console.log(letters)

//unshift, funciona da mesma maneira que o push
letters.unshift("p", "q", "r") // posso colocar varios itens
letters.unshift("z") // como posso colocar um item apenas

console.log(letters) // aqui eu adicionei 4 elementos


// 13 - indexOf e lastIndexOf (indexOf permite encontrar o indice de um elemento, passamos como argumento para o metodo, o lastIndexOf eh utilizado quando ha repeticoes de relementos e precisamos do indice da ultima ocorrencia)


const myElements = ["Morango", "Maca", "Abacate", "Pera", "Abacate"] // criando uma repeticao proposital na array

console.log(myElements.indexOf("Maca")) // vai me mostrar o elemento 1, pois a array comeca no valor 0
console.log(myElements.indexOf("Abacate")) // vou receber o numero 2, pela mesma logica acima

//isso nos da a possibilidade de saber o indice do elemento
console.log(myElements[2]) // dando o nome do elemento
//ou escrever o que esta abaixo, vai dar o mesmo resultado
console.log(myElements[myElements.indexOf("Abacate")])

//agora, se escrever o lastIndexOf, vou receber o valor 4, pois ele eh o ultimo valor de um item, que eh tambem o abacate
console.log(myElements.lastIndexOf("Abacate"));

//e se o elemento nao existir, vai dar resultado negativo, no caso -1
console.log(myElements.indexOf("mamao"));
// o mesmo acontece com o lastIndexOf
console.log(myElements.lastIndexOf("mamao"));

// 14 - METODO DE ARRAY: SLICE (metodo utilizado para extrair um array menor de um array maior, o intervalo de elementos eh determinado pelos parametros, que sao: indice de inicio e indice de fim, o ultimo elemento eh ignorado, se quisermos ele, devemos somar 1 ao indice final)

const testeSlice = ["a", "b", "c", "d", "e", "f"]

const subArray = testeSlice.slice(2,4) // criando uma segunda variavel para pegar um segundo indicie ao quarto
console.log(subArray)
console.log(testeSlice) // nao trouxe o 4 indice
//resolvendo o problema
const subArray2 = testeSlice.slice(2, 4 +1)
console.log(subArray2)

//colocando um intervalo de elementos que nao existe
const subArray3 = testeSlice.slice(10, 20)
console.log(subArray3) // fica com uma lista vazia

//outra forma de mostrar o slice mostrando o indice inicial

const subArray4 = testeSlice.slice(2)
console.log(subArray4) // a lista comeca na letra c pois eh o indice 2

// 15 - FOR EACH (uma estrutura for ou while, porem eh um metodo, percorre cada elemento do array)

const nums = [1, 2, 3, 4, 5]

//assim eu tenho acesso a um argumento que eh a unidade individual de cada um dos itens por repeticao
nums.forEach((numero) => {
    console.log(`O numero e ${numero}`)
})

//algo que acontece muito
const posts = [
    //lista de objetos, simulando um banco de dados
    {title: "Primeiro post", category: "PHP"},
    {title: "Segundo post", category: "Javascript"},
    {title: "Terceiro post", category: "Python"},

]
//mostrando na tela
posts.forEach((post) => {
    console.log(`Exibindo post: ${post.title}, da categoria: ${post.category}`)
})

// 16 - METODOS DE ARRAY: INCLUDES (este metodo includes verifica se o array tem um elemento, utilizamos no array  e como argumento colocamos o elemento que buscamos)

const brands = ["BMW", "VW", "FIAT"]

console.log(brands.includes("FIAT")) // verificando se possui a marca fiat no array, retorna booleano true
console.log(brands.includes("KIA")) // verificando marca que nao existe, retorna booleano falso

// como utilizar isso num programa

if(brands.includes("BMW")) {
    console.log("Ha carros da marca BMW")
}

// 17 - METODOS DE ARRAY: REVERSE (o metodo inverte os elementos de um array, modificando o array original, precisamos criar uma copia para preservar a lista de elementos original)

const reverseTEst = [1, 2, 3, 4, 5]
reverseTEst.reverse() // apenas executar sem colocar nenhuma atribuicao
console.log(reverseTEst)

// 18 SOBRE OS METODOS DE STRING (strings tambem sao objetos, ou seja, tem metodos e propriedades, alguns sao muito semelhantes aos arrays, vc pode utilizar lenght em uma string ou array, tambem pode acessar cada caractere pelo seu indice)


// 19 - METODOS DE STRING: TRIM (remove tudo que nao eh texto em uma string, como caracteres especiais e espacos em branco, um metodo interessante para utilizar em sanitizacao de dados, o metodo nao modifica o texto original)

const trimTest = " Testando \n " // com espaco e caractere especial
console.log(trimTest) // imprimindo a string original
console.log(trimTest.trim()) // imprimindo com o metodo trim
console.log(trimTest.length) // testando os caracteres
console.log(trimTest.trim().length) // aqui vai diminuir a quantidade de caracteres

// 20 - METODOS DE STRING: padStart (insere um texto no comedo da string, o texto pode ser repetido, de acordo com o segundo argumento ao metodo, ele determina o maximo de caracteres do texto alvo)

const testePadStart = "1"
const newNumber = testePadStart.padStart(4, "0") // a string esta determinada a ter 4 digitos e quero preencher o que falta de zero
console.log(testePadStart)
console.log(newNumber)

//A mesma versao deste metodo so que para o fim

const testePadEnd = newNumber.padEnd(10, "0") // vai encher os caracteres de zeros, mas depois, ate chegar a 10 caracteres
console.log(testePadEnd)

// 21 - METODOS DE STRING: SPLIT (divide uma string em um array, cada elemento sera determinado por um separador em comum, os mais utilizados sao ponto e virgula, virgula, espaco)

const frase = "O rato roeu a roupa do rei de Roma"
const arrayDaFrase = frase.split(" ") // ensina o argumento que eh um espaco em branco, assim temos outro dado a partir de um texto
console.log(arrayDaFrase)

// 22 METODOS DE STRING: JOIN (o join une uma array a uma string, podemos colocar um separador para formatar a string)

const fraseDenovo = arrayDaFrase.join(" ")
console.log(fraseDenovo)

// recriando
const itensParaComprar = ["Mouse", "Teclado", "Monitor"]
const fraseDeCompra = `Precisamos comprar: ${itensParaComprar.join (", ")}.`
console.log(fraseDeCompra)

// 23 - METODOS DE STRING: REPEAT (repete um texto n vezes, onde o n eh o numero que colocamoscomo seu argumento)

const palavra = "Testando "
console.log(palavra.repeat(5))

// 24 - REST OPERATOR / REST PARAMETERS (Caractererizado pelo simbolo ... podemos utilizar para receber indefinidos argumentos em uma funcao, assim nao precisamos declarar exatamente o que  vamos receber, deixando a funcao mais ampla)

const somaInfinita = (...args) => {
    let total = 0;

    for (let i = 0; i < args.length; i++) {
        total += args[i]
    }
    return total; 
}
console.log(somaInfinita(1, 2, 3))

console.log(somaInfinita(1, 20, 34, 3423, 12723, 12, 23, 54, 12))

// 25 - RESTRUTURA DE REPETICAO FOR..OF (estrutura de repeticao semelhante ao for, porem amis simples, o numero de repeticao eh baseado no array utilizado, e podemos nos referir aos elementos sem precisar acessar o indice deles)

const somaInfinita2 = (...args) => {

    let total = 0 
    for(num of args) {
     total += num;  
    }
    return total 
}

console.log(somaInfinita2(1, 2, 4))
console.log(somaInfinita(5, 6, 1, 23, 5, 6, 3, 5))

// 26 - DESTRUCTURING EM OBJETOS (eh uma funcionalidade que nos permite desestruturar algum dado, no caso dos objetos eh possivel criar variaveis a partir de suas propriedades, com uma simples sintaxe)

const userDetails = {
    firstName: "Gabriel", 
    lastName: "Farah",
    job: "Programador"
}

const {firstName, lastName, job} = userDetails
console.log(firstName, lastName, job)

//renomeando as variaveis
const { firstName: primeiroNome } = userDetails;
console.log(firstName);

// 27 - DESTRUCTURING EM ARRAYS (a sintaxe usa colchetes e nao temos nomes das chaves)

const myList = ["Aviao", "Submarino", "Carro"]
const [VeiculoA, VeiculoB, VeiculoC] = myList
console.log(VeiculoA, VeiculoB, VeiculoC)

// 28 - JSON (Javascript Object Notation, um dado em formato de texto, utilizamos para comunicacao entre API e front-End, sua formatacao eh rigorosa, se for mal feita o dado eh invalidado e nao conseguimos comunicacao, seu formato lembra o object literals, regra de aceitar apenas aspas duplas e nao aceita comentarios, EM SINTESE: o REACT EH UMA API E O PONTO DE COMUNICACAO ENTRE O JAVASCRIPT E O REACT EH O JSON)

//recebe aspas simples porque a interna eh dupla, dentro recebe o nome e o valor da propriedade, aceita string, number e arrays
const myJson = '{"name": "Gabriel", "age": 38, "skills": ["PHP", "JavaScript", "Python"]}'

// 29 - JSON PARA OBJETO E OBJETO PARA JSON (na maioria das vezes vamos precisar converter objetos para JSON, ou um JSON para um objeto Javascript valido, utilizamos os metodos stringify, que transforma em um objeto JSON e parse que transforma um JSON em objeto)

//nao conseguimos enviar para uma API um objeto, precisamos enviar um JSON


const myObject = JSON.parse(myJson)
//agora eh um objeto
console.log(myObject)

// Um caso de JSON invalido com uma string sem aspas

//const badJson = '{"name": Gabriel, "age": 38}'
//const myBadObject = JSON.parse(badJson)

// Se quisermos adicionar novas propriedades para esse objeto, colocamos mais uma propriedade

myObject.isOpenToWork = true
console.log(myObject)

// Agora que manipulamos o dado, queremos converter para JSON denovo

const myNewJson = JSON.stringify(myObject)
console.log(myNewJson)
console.log(typeof myNewJson)

