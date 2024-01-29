// 1 Variaveis
let nome = "Gabriel";

console.log(nome);

nome="Gabriel Farah";
console.log(nome);

const idade = 38; // const faz com que a variavel nao mude nunca
console.log(idade);

console.log(typeof nome);
console.log(typeof idade);

// 2 - Mais sobre variaveis
let a = 10, b = 20, c = 30;
console.log(a,b,c);
// simbolos permitidos para criar variaveis
let _teste = "ok"; // underline
let $teste = "ok"; // cifrao
console.log(_teste);
console.log($teste);

// 3 - Prompt
// const age = prompt("Digite a sua idade");
// console.log(`Voce tem ${age} anos`);

// 4 - Alert
//alert('testando');

//const z = 10 // usando o alert de forma dinamica
//alert(`O numero eh ${z}`);

// 5 - Math
//console.log(Math.max(1,5,3,4,6)); //mostra o maior numero
//console.log(Math.floor(5.14)); // arredonda numero para baixo
//console.log(Math.ceil(5.98)); //arredonda o numero para cima

// 6 Funcoes Console - sua funcao eh exibir mensagem de alguma categoria para ajudar o programador
//console.log("Teste");
//console.error("erro!");
//console.warn("Aviso");

// 7 Estruturas de controle (IF)
const m = 10;
if(m > 5) {
    console.log("M eh maior que 5");
}

const user = "Joao"
if (user === "Joao") {
    console.log("Ola, Joao")
}


if (user === "Maria") {
    console.log("Ola, Maria")
}

console.log(user === "Joao", user === "Maria")

// 8 - ELSE
const loggedIn = false
if(loggedIn) {
    console.log("Esta autenticado!")
} else {
    console.log("Nao esta autenticado")
}
//outro exemplo
const q = 10
const w = 25
if(q > 5 && w > 20) {
    console.log("Numeros mais altos")
} else {
    console.log("Os numeros nao sao mais altos")
}

// 9 - ELSE IF (Estrutura intermediaria do ELSE)
if(1 > 2) {
    console.log ("Teste");
} else if (2 > 3) {
    console.log ("Teste 2");
} else if (5 > 1){
    console.log ("Agora sim!");
}
// Outro exemplo

const userName = "Gabriel"
const userAge = "38"
if(userName === "Jose") {
    console.log("Bem vindo Jose!")
}else if(userName === "Gabriel" && userAge === "38") {
    console.log("Bem vindo, Gabriel!")
}else{
    console.log("Nenhuma condicao aceita!")
} 
// 10 - WHILE (Com incrementador para fazer a condicao ser atingida)

let p = 0 //incrementador

while (p < 5) {
    console.log(`Repetindo ${p}`)
    p = p + 1 //incrementando
}

// 11 DO WHILE (nao muito utilizado)

let o = 10

do {
    console.log(`Valor de o: ${o}`)
    o-- //decrementador, faz o mesmo que a funcao do while p=p+1 so que para baixo
} while (o > 1);

// 12 FOR (a mais utilizada, condensa toda logica em uma linha)

for(let t = 0; t < 10; t++) { //temos a variavel, a condicao e o incrementador na mesma linha
    console.log("Repetindo algo...")
}

//ou

let r = 10

for (r; r > 0; r = r - 1) {
    console.log (`O r esta diminuindo: ${r}`);
}

// 13  IDENTACAO

//sem identacao
for (let u = 0; u < 10; u++) {
if(u * 2 > 10){
console.log(`Maior que 10! ${u}`)
} else {
if(u / 2 === 0){
console.log("Deu 0")    
}
}    
}
// com identacao
for (let u = 0; u < 10; u++) {
    if(u * 2 > 10){
     console.log(`Maior que 10! ${u}`)
    } else {
            if(u / 2 === 0){
            console.log("Deu 0")    
        }
    }    
}

// 14 BREAK LOOP

for (let g = 20; g > 10; g--) {
    console.log(`O valor de g eh: ${g}`)

    if(g === 12){
        console.log("O g eh 12!");
        break;
    }
}

// 15 CONTINUE
for(let s = 1; s < 10; s = s + 1) {
    // operador de resto  = %
    if(s % 2 === 0) {
        console.log ("Numero par!");
        continue;
    }
    console.log(s);
}

// 16 SWITCH (para organizar excesso de IF e ELSE, cada IF eh um case, para cada case adicionamos um break e temos o DEFAULT como ELSE)
const job = "Advogado"

switch(job) {
    case "Programador":
        console.log("Voce eh um programador!")
        break
    case "Advogado":
        console.log("Voce eh um advogado!")    
        break
    case "Engenheiro":
        console.log("VOce eh um engenheiro!") 
        break   
    default:    
        console.log("Profissao nao encontrada!");
}

// switch errado

const L = 100
switch(1) {
    case 200:
     console.log("L 200!")   
    case 100:
     console.log("L 100!")   
    case 10:
     console.log("L 10!")   
    default:
     console.log("L nao foi encontrado") 
}












