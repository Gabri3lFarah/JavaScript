//  1 - Funcao setTimeOut (Faz parte da programacao assincrona pois estabelecemos uma acao PARA SER EXECUTADA APOS UM CERTO TEMPO DETERMINADO POR NOS, ou seja o codigo continua rodando e depois temos a execucao da funcao)

console.log("Ainda nao executou")

setTimeout(function() {
    console.log("Requisicao Assincrona")
}, 2000)

console.log("Ainda nao executou 2")


// 2 - FUNCAO setInterval (Tambem eh executada apos um tempo, POREM ELA NAO PARA DE SER EXECUTADA, temos a sua chamada definida pelo tempo de espera na execucao, eh como um LOOP INFINITO com EXECUCAO DE TEMPO CONTROLADA, cuidado ao usar, consome memoria demais dependendo da acao)

console.log("Ainda nao executou")

/*setInterval(function() {
    console.log("Intervalo Assincrono")
}, 3000 )  necessario comentar senao ele nao vai parar a requisicao em loop*/ 

console.log("Ainda nao comecou 2")

// 3 - PROMISES (LITERALMENTE UMA PROMESSSA DE UM VALOR QUE PODE CHEGAR EM UM PONTO FUTURO, utilizamos o OBJETO e alguns METODOS PARA NOS AUXILIAR)

// colocar numa variavel e utilizar o objeto promise com o metodo resolve

const promessa = Promise.resolve(5 + 5)

console.log("Algum codigo")

promessa.then(value => {
        console.log(`A soma eh ${value}`)
        //Encadeando outros metodos, pedindo para retornar o valor para continuar trabalhando com ele
        return value

})
.then((value) => value -1)
.then((value) => console.log(`Agora eh ${value}`))
console.log("Outro codigo")

// 4 - TRATANDO ERROS NAS PROMISES (as promisses podem conter erros, dependendo de como o codigo sera executado, utilizamos a funcao CATCH para poder pegar o erro e exibir)

Promise.resolve(4 * "asd")
.then((n) => {
    if(Number.isNaN(n)){
        throw new Error ("Valores invalidos")
    } 
})
.catch ((err) => console.log(`Um erro ocorreu ${err}`))

// 5 - REJEITANDO PROMISES (Diferente do erro, ocorre quando decidimos ejetar uma promise, podemos fazer isso com o METODO REJECT)

/*encadeando metodos de promise nessa funcao, pois ela eh uma promise a partir do retorno, gerando bifurcacao do codigo com resolve e reject */
function checkNumber(n) {
    return new Promise((resolve, reject) => {
        if (n > 10) {
            resolve(`O número é maior que 10`);
        } else {
            reject(new Error("Número muito baixo"));
        }
    });
}

const a = checkNumber(20);
const b = checkNumber(10);

a.then((v) => console.log(`O resultado é ${v}`)).catch((err) => console.log(`Um erro ocorreu: ${err.message}`));
b.then((v) => console.log(`O resultado é ${v}`)).catch((err) => console.log(`Um erro ocorreu: ${err.message}`));


// 6 - RESOLVENDO VARIAS PROMISES (com o metodo ALL podemos executar varias promises, o javascript se encarrega de verificar e retornar os seus valores finais)

const p1 = new Promise((resolve, reject) => {
    setTimeout(function() {
        resolve(10);
    }, 1000);
});

const p2 = Promise.resolve(10 + 10); 

const p3 = new Promise((resolve, reject) => {
    if (30 > 10) {
        resolve(30);
    } else {
        reject("Erro");
    }
});

// Colocando p1, p2, p3 na array e encadeando o then porque também retorna uma promessa
Promise.all([p1, p2, p3]).then((values) => console.log(values));

// 7 - ASYNC FUNCTIONS (Sao funcoes que retornam promises, consequentemente ha a possibilidade de receber o resultado delas depois, alem da utilizacao dos metodos de promises)

async function somarComDelay(a, b) {
    return a + b;
}

somarComDelay(2, 4).then((value) => {
    console.log(`O valor da soma é ${value}`);
});

console.log("teste async");

// 8 - INSTRUCAO AWAIT (serve para guardar o resultado de uma async function, tornando mais simples lidar com este tipo de funcao, nao precisando trabalhar com promises)

function resolveComDelay() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve("Resolveu a Promise");
        }, 2000);
    });
}

async function chamadaAsync() {
    console.log("Chamando a Promise e esperando o resultado");
    const result = await resolveComDelay();
    console.log(`O resultado chegou ${result}`);
}

chamadaAsync();

// 9 - GENERATORS (funcionam de forma semelhante as promises, acoes podem ser pausadas e continuadas depois, temos novos operadores como FUNCTION e YIELD)

function* generator() {
    yield 1;
    yield 2; 
    yield 3; 
}
const gen = generator()
console.log(gen.next().value);  
console.log(gen.next().value);
console.log(gen.next().value);