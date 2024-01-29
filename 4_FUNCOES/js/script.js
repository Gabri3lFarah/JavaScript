// 1 FUNCTION (usar a function, depois nomear, colocar parametros para configurar com () e o corpo da funcao fica entre {})

// Criando uma funcao
function minhaFuncao() {
    console.log("Testando");
}

minhaFuncao()

// funcao em variavel
const minhaFuncaoEmVariavel = function () {
    console.log("Funcao em variavel")
}

minhaFuncaoEmVariavel (); // invocar o nome com o nome da variavel

//criando funcao com argumento

function funcaoComParametro (txt) {
    console.log (`Imprimindo: ${txt}`)
}

funcaoComParametro("Imprimindo alguma coisa")
funcaoComParametro("Outra funcao")

// 2 RETURN
const a = 10
const b = 20
const c = 30
const d = 40

function soma (n1, n2)  {
    return n1 + n2;
}  // parametros separados por virgula

const resultado = soma (a, b)

console.log(resultado);
console.log(soma (c, d));

// 3 ESCOPO DA FUNCAO
let y = 10

function testandoEscopo () {
    let y = 20
    console.log(`Y dentro da funcao eh: ${y}`)
}

testandoEscopo();

console.log(`Y fora da funcao eh: ${y}`)

testandoEscopo();

// 4 ESCOPO ANINHADO ou NESTED SCOPES (usando let e const podemos criar  escopo aninhado, consiste em ter qualquer bloco (if ou for) a declaracao de variaveis separadas de outros escopos)

let m = 10
function escopoAninhado (){
    let m = 20

    if (true) {
        let m = 30

        if(true) {
            let m = 40
            console.log(m)
        }
        
            console.log(m)
    }

        console.log(m)

}

escopoAninhado();
console.log(m);    

// 5 - ARROW FUNCTION (Outra forma de criar funcoes, muito usado em frameworks)

const testeArrow = () => /* essa flecha caracteriza a arrow function */ {
    console.log("Esta eh uma arrow function");
};
testeArrow();

// colocando argumentos

const parOuImpar = (n) => {
    if(n % 2 === 0) { 
   console.log("Par")
    return 

    }
    console.log("Impar");
};
parOuImpar(5);

parOuImpar(10);

// 6 - MAIS SOBRE ARROW FUNCTIONS

const raizQuadrada = (x) => {
    return x * x
}
console.log(raizQuadrada(4))

// criando a funcao seguindo sem o escopo de bloco e sem return

const raizQuadrada2 = (x) => x * x
console.log(raizQuadrada2(5));
console.log(raizQuadrada(12));

const helloWorld = () => console.log("Hello World")

helloWorld();

// 7 - ARGUMENTOS OPCIONAIS (argumentos sao obrigatorios nas funcoes, porem em alguns casos de funcoes que podem funcionar sem algum dos argumento, checando com um if)


const multiplication = function (m, n) {
    if(n === undefined) {
        return m * 2
        }else {
          return  m * n
        }
}

console.log(multiplication(5));
console.log(multiplication(2,4));


// ou
const greeting = (name) => {
    if(!name) {
        console.log("Ola!")
        return
    }
    console.log(`Ola ${name}`)
}

greeting();
greeting("Gabriel");

// 8 - ARGUMENTOS COM VALOR DEFAULT (atribuidr valor na area de argumentos)

const customGreeting = (name, greet = `Ola`) => {
    return `${greet}, ${name}!`
}

console.log(customGreeting ("Gabriel"))

console.log(customGreeting ("Joao, bom dia!"))

const repeatText = (text, repeat = 2) => {
    for (let i =0; i < repeat; i++) {
        console.log(text);
    }
}

repeatText("Testando");

repeatText ("Agora repete 5 vezes", 5)

// 9 - CLOSURE (conjunto de funcoes, reaproveita o escopo interno de uma funcao, pois o escopo nao pode ser acessado fora da funcao ja que eh um bloco, entao funcoes internas aproveitam o escopo)

function someFunction() {
    let txt = "Alguma coisa"   
        
        function display() {
            console.log(txt)
        }

        display()
}

someFunction();

// 10 - MAIS SOBRE CLOSURES (Closures tambem podem servir para salvar os resultados ja executados, criando uma especie de incrementacao, assim temos uma variavel que executa uma funcao e modifica seu valor)

const multiplicationClosure = (n) => {
    return (m) => {
        return n * m 
    }
}

const c1 = multiplicationClosure(5)
const c2 = multiplicationClosure(10)

console.log(c1)
console.log(c2)

//executando novo valor, provando que a closure salvou o valor
console.log(c1(5))
console.log(c2(10))

// 11 - RECURSAO (Um recurso que permite a funcao se autoinvocar continuamente, criamos uma especie de loop, interessante definir uma condifcao final para parar a execucao)

const untilTen = (n,m) => {
    if(n < 10) {
        console.log("A funcao parou de executar!")
    }else{
        const x = n - m

        console.log(x)

        untilTen(x, m )
    }
}

untilTen(100, 7)

function factorial(x) {
    if(x === 0) {
        return 1
    }else {
        return x * factorial(x - 1)
    }
}
const num = 6

const result = factorial(num)

console.log (`O fatorial do numero ${num} eh ${result}`)
