// 1 - STRICT (Declarando com aspas, o codigo ira funcionar com restricoes)

//"use scrict"

const opa = "teste"


// 2 METODO DE DEBUG CONSOLE.LOG (muito utilizado para debug)

let a = 1
let b = 2

if(a == 1) {
    a = b + 2
}
console.log(a)

for(let i = 0; i < b; i++) {
    a = a + 2 
    console.log(a)
}

if(a > 5) {
    a = 25
}
console.log(a)


// 3 - METODO DE DEBUG: DEBUGGER (Instrucao que nos permite o debug no console do navegador, podemos evidenciar os valores das variaveis em tempo real e com o programa executando)

let c = 1
let d = 2

if(c == 1) {
    c = d + 2
}
// ativando o debugger colocanto a instrucao "debugger" e acessar a aba sources ao lado de console no navegador
//debugger
// se passar o mouse em cima das variaveis na aba sources, eu consigo ver os valores dela, ele nao executou o loop "for", para executar eu terei que apertar o resume bottom que fica no navegador, ao lado de source, os
for(let i = 0; i < d; i++) {
    c = c + 2
}
console.log("executou o loop")
//debugger
if (c > 5) {
    c = 25
}

// Os debuggers serao comentados para nao afetar o resto do codigo

// 4 TRATAMENTO DE DADO POR FUNCAO (NUNCA podemos confiar no dado que eh passado pelo usuario, SEMPRE devemos criar validacoes e tratamento para os mesmos, existem diversas tecnicas)

// Funcao para verificar o dado
function checkNumber(n) {
    //precisamos validar se o dado eh numero ou nao, para isso convertemos qualquer tipo de dado para um numero
    const result = Number(n)
//baseado nesse dado faremos a validacao, se aplicaria email, ou cpf...
    if (Number.isNaN(result)) {
        console.log("Valor Incorreto")
        return;
    }
    console.log("Valor Correto!")
    return result;
}
//E quando recebemos esse dado vamos executar a funcao em cima dele
checkNumber(5) // numero
checkNumber("10") // string, deu valor correto pois conseguiu converter texto para numero
checkNumber({}) // objeto vazio
checkNumber("Teste") // string nada a ver


// 5 EXCEPTIONS (Exceptions sao erros que nos geramos no programa. Este recurso faz o programa ser abortado, ou seja, nao continua sua execucao, utilizamos a expressao THROW NEW ERROR com a mensagem de erro como argumento)

let x = 10
// Eu quero que um erro ocorra caso x seja diferente de 11, por exemplo, um desconto calculado errado, um item fora de estoque (!= eh sinal de diferente, o codigo estara comentado para nao travar o resto)
/*if(x != 11) {
    throw new Error ("O valor de x nao pode ser diferente de 11")
}
*/

// 6 - TRY CATCH (Recurso famoso nas lingagens de programacao, onde tentamos executar algo em TRY, se um erro ocorre ele cai no bloco do CATCH, util para debug, como tambem para uma programacao solida)

try {
   const soma = x + y // as variaveis nao estao definidas, gerando erro
} catch(error) {
    console.log(`Erro no programa: ${error}`)
} // argumento especial como se fosse uma funcao, interpolada com ${}

// 7 FINALLY (Instrucao que vai depois do bloco try catch, ela eh executada independentemente de haver algum erro ou nao em try)

try {
    const value = checkNumber("asd")

    if(!value) {
        throw new Error ("Valores invalidos")
    }
    
} catch(error) {
    console.log(`Opa, aconteceu um problema: ${error}`)
} finally {
    console.log("O codigo foi executado") // com o finally vamos saber se um codigo foi executado independente de um erro ou nao
}

// 8 ASSERTIONS (Sao quando os tratamentos de valores passados pelo usuario geram um erro, porem este recurso tem como objetivo nos ajudar no desenvolvimento do programa, ou seja seria algo para os devs e nao para os usuarios)

function checkArray(arr) {
    if(arr.length === 0) {
        throw new Error ("O array precisa ter elementos")
    } else {
        console.log(`O array tem ${arr.length} elementos`)
    }
}
//checkArray([]) forma que nao funciona, passando um array valido
checkArray([1, 2, 3])


