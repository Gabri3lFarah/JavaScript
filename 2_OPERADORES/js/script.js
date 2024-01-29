// 1 - Number
console.log(typeof 2);
console.log(typeof 5.14);
console.log(typeof -128);

// 2 - Op Aritimeticas
console.log(2 + 4);
console.log(10 - 5);
console.log(2 * 2);
console.log(10 / 2);
console.log(5+ (4*2));

// 3 - Especial Numbers - sao numeros que nao servem como numeros
console.log(typeof Infinity);
console.log(typeof -Infinity);
console.log(12 * "abc");
console.log(typeof NaN);

// 4 - Strings 
console.log("Um texto");
console.log('Mais um texto');
console.log(`13`);

console.log(typeof' Mais um texto');
console.log(typeof`13`);

// 5 - Simbolos especiais em string

console.log("Testando a \nquebra de linha");
console.log("Espacamento \t de tab");

// 6 - Contatenacao
console.log("Oi," + " tudo" + " bem?");

// 7 - Template Strings (usar crase para funcionar)
console.log(`A soma de 2+2 eh: ${2+2}`);
console.log(`Podemos executar qualquer coisa aqui ${console.log("teste")}`);

// 8 - Boolean
console.log(true);
console.log(5 > 20);
console.log(25 > 10);
console.log(typeof false);

//9 Comparacoes
console.log(5 <= 5);
console.log(5 < 5);
console.log(10 == 10);
console.log(10 == 9);
console.log(10 != 9); //diferente

// 10 Comparacoes de identico ( === e !== levam em consideracao o tipo de dado)
console.log(9 ==="9");
console.log(9 !== "9");

// 11 Operadores logicos (serve para unir duas ou mais comparacoes) (&& and) (|| or ) (! not)
console.log(true && true);
console.log(true && false);
console.log(5 > 2 && 2 < 10);
console.log(5 > 2 || "Gabriel" === 1);
console.log(5 < 2 || 5 > 100);
console.log(!true);
console.log(! 5 > 2);

// 12 Empty Values (undefined e null)
console.log(typeof null, typeof undefined);
console.log(null === undefined);
console.log(null == undefined);
console.log(null == false);
console.log(undefined == false);

// 13 Mudanca de tipos, ou, Conversao de dados automatica (nao utilizar por nao ser ma pratica)
console.log(5 * null);
console.log("teste" * "opa");
console.log("10" + 1);
console.log("10" - 1);


