
// INTRO DA SECAO (TEORIA)
// 1  - PROTOCOLOS DA WEB  (Um Protocolo eh uma forma de comuncacao entre computadores atraves da rede, o HTTP serve para solicitar arquivos e imagens do servidor (Hyper Text Transfer Protocol); Eh possivel navegar em sites atraves do HTTP; SMTP: protocolo para envio de email; TCP: protocolo para transferencia de dados)

// 2 - CONHECENDO MELHOR AS URLs (Cada arquivo que eh carregado no navegador tem uma URL; A URL(Uniform Resource Locator) pode ser dividida em 3 partes, por exemplo: https://horadecodar.com.br/index.html https eh o PROTOCOLO, horadecodar.com.br eh o DOMINIO, que referencia um servidor (DNS > IP). E index.html o arquivo/pagina que estamos acessando

// 3 - CONHECENDO O HTML (HyperText Markup Language, linguagem de marcacao, onde estruturamos as paginas web, criando elementos; Os elementos sao chamaos de tags, que podem ser: Titulos, imagens, formularios, listas... As tags sao caracterizadas por: <p>Texto</p> Podemos adicionar estilos ao HTML com CSS)


// 4 - A ESTRUTURA DO HTML ( Toda pagina HTML tem duas partes importantes: HEAD e BODY; no head inserimos as configuracoes da pagina, e importacoes de outros arquivos (CSS, JS); ja no body temos os elementos que ficam visiveias para o usuario, as tags possuem ATRIBUTOS que CONFIGURAM os ELEMENTOS, TUDO QUE VEMOS EM ESTRUTURA PODE SER ALTERADO COM JAVASCRIPT, pois pode chegar em qualquer um dos elementos do HTML)

// 5 HTML E JAVASCRIPT (Podemos adicionar Javascript ao HTML por meio da tag SCRIPT, em arquivo externo ou script na pagina; Algumas tags tem ATRIBUTOS QUE PODEM EXECUTAR JS, masi isso nao eh muito utilizado; Sempre que houver um link entre um arquivo e outro, uma CHAMADA HTTP é executada; Javascript pode ser utilizada para MANIPULAR ELEMENTOS do HTML e alterar estilos;

// 6 HTML E DOM (O DOM é uma representação fiel do HTML da página, ele é utilizado para acessar o HTML através de JS, acessamos os elementos/tags. Assim podemos modifica-lo através dos métodos e propriedades dos objetos que alteram o DOM. DOM vem de Document Object Model. Atraves dele também podemos atrelar eventos ao HTML, como click ou pressionar teclas do mouse.

// 7 DOM (O DOM pode modificar completamente uma página, é possível alterar: Elementos, atributos, estilização. Adicionamos e removemos elementos, o DOM cria uma árvore do HTML, os elementos são chamados de nós.

// FIM DA INTRO DA SECAO TEORICA

// 8 MOVENDO SE PELO DOM (todos os elementos podem ser acessados através do document.body. A partir deste elemento pai, vamos encontrando os childNodes(nós). E podemos acessar suas propriedades e, consequentemente modificá-los.

//Verificando o body pelo DOM
console.log(document.body)
//Verificando o child Node, recebendo uma array com todos os meus elementos separados por meio de lista, podendo acessar o indice [1] e daria no header, exemplo: console.log(document.body.childNodes[1])
console.log(document.body.childNodes)
// acessando a propriedade que acessa o texto, aparecendo titulo no console
console.log(document.body.childNodes[1].childNodes[1].textContent)

// 9 - SELECIONANDO ELEMENTOS (Varias formas de selecionar elementos ao inves de ir de nó em nó, porém não funciona com HTML mais complexo, especificamente um elemento, ou um conjunto deles. A diferenca entre eles eh a forma de selecao, que pode ser por: classe, id, seletor de CSS. Alguns elementos sao: getElementsBytagName, getElementByld, querySelector)

// VENDO NA PRATICA

// 10 - ENCONTRANDO ELEMENTOS POR TAG (Com o metodo getElementsByTagName, selecionamos um conjunto de elementos por uma tag em comum. O argumento eh uma string que leva a tag a ser selecionada)

//Declarando variavel, como eh um metodo, pode se enviar argumentos no (), no caso o argumento eh a tag que quero selecionar "li", se tivesse "li" em outras partes do site ele selecionaria tambem, o que ocorreria problema em nao ser tao especifico na sessao.
const listItens = document.getElementsByTagName("li")
console.log(listItens)

// 11 - ENCONTRANDO ELEMENTOS POR ID (com o metodo getElementById selecionamos um unico elemento, ja que o id eh o unico na pagina, o argumento eh uma string que leva o id a ser selecionado)

const title = document.getElementById("title")
console.log(title)

// 12 - SELECIONANDO ELEMENTOS POR CLASSE (Com o metodo getElementByClassName selecionamos um conjunto de elementos por uma classe em comum, O argumento eh uma string que leva a classe a ser selecionada. Veja como os atributos do HTML comecam a fazer mais sentido em conjunto com o JS)

const product = document.getElementsByClassName("product")
console.log(product)

// 13 - ENCONTRANDO ELEMENTOS POR CSS (Com o metodo querySelectorAll selecionamos um conjunto de elementos por meio de um seletor de CSS. E com o querySelector apenas um elemento, com base tambem um seletor de CSS, precisamos utilizar o simbolo dos seletores, o ponto, se o product eh uma classe ele tem um ponto que antecede o nome .product )

const productQuery = document.querySelectorAll(".product")
console.log(productQuery)

//Selecionando apenas um elemento, colocamos o # porque eh um ID
const mainContainer = document.querySelector("#main-container")
console.log(mainContainer)

// 14 - ALTERANDO O HTML (Podemos mudar praticamente toda a pagina com o DOM, adicionar, remover e ate clonar elementos, alguns metodos muito utulizados sao insertBefore, appendChild e replaceChild)

//insertBefore vai inserir um elemento antes do outro, appendChild vai inserir um elemento dentro do outro, replaceChild vai trocar um elemento pelo outro

// 15 - ALTERANDO O HTML COM O insertBefore (Cria um elemento antes do outro, necessario criar um elemento com JS, isso pode ser feito com um createElement, o elemento de referencia pode ser selecionado com alguns metodos que vimos antes)

//criando um paragrafo
const p = document.createElement("p")
console.log("p")
//selecionando o elemento pai, que eh o titulo <header/> <h1 id="title">Titulo</h1>
const header = title.parentElement
// antes do titulo vou inserir um paragrafo pois o metodo vai ser executado no elemento pai, estipulando um elemento novo, que vai ficar na frente dele no HTML, isso tudo dentro de header, colocando o p que foi o elemento criado e o elemento alvo que eh title, fazendo assim um paragrafo antes do titulo
header.insertBefore(p, title)

// 16 - ALTERANDO O HTML COM appendChild (Com o appendChild eh possivel adicionar um elemento dentro de outro, este elemento adicionado sera o ultimo do elemento pai)

//Selecionando a lista de links, dentro dessa ul eu tenho meus li`s que sao os links
const navLinks = document.querySelector("nav ul")
//Adicionando um novo li 
const li = document.createElement("li")
//Para inserir o elemento selecionado precisa ser o elemento pai que eh o navlinks
navLinks.appendChild(li)

// 17 - ALTERANDO O HTML COM O replaceChild (O replaceChild eh utilizado para trocar o elemento, vamos precisar novamente do elemento pai e tambem o elemento para ser substituido e o que vai substituir)

//Vamos trocar o titulo H1 por um H2
const h2 = document.createElement("h2")
//colocando texto nele, igualando ao valor ele vai setar o texto do titulo
h2.textContent = "Meu novo titulo"
//Ja tenho o header que eh o elemento pai, o titulo, aqui faco o replace, nos parametros entre () coloco o elemento novo e o elemento que vai ser trocado, no caso h2 e title
header.replaceChild(h2, title)

// 18 - CRIANDO NÓS EM TEXTOS (Os textos tambem podem ser manipulados com metodos, temos o createTextNode, que cria nós de um texto, este nó pode ser inserido em um elemento)

const myText = document.createTextNode("Agora vamos colocar mais um titulo")
// colocamos sem elementos, apenas uma string, pois para o DOM ele eh considerado mais um no
console.log(myText)
// Aqui vamos criar o elemento e inserir um texto nele
const h3 = document.createElement("h3")
//Inserindo um elemento filho no h3
h3.appendChild(myText)
console.log(h3)
//Colocando no HTML, vendo como ultimo filho do elemento main Content que eh onde tem os produtos
mainContainer.appendChild(h3)

// 19 - TRABALHANDO COM ATRIBUTOS (Podemos ler e alterar os valores dos atributos, para ler vamos utilizar o metodo getAttritute e para alterar utilizamos setAttribute, este leva o nome e o valor para alterar, assim mudamos e consultamos atributos)

//Pegando o primeiro link na barra de navegacao, encadeando o novo metodo e achar o link que quero nos (), o querySelector so pega o primeiro elemento
const firstLink = navLinks.querySelector("a");
console.log(firstLink);
//Alterando o atributo 
firstLink.setAttribute("href", "https://www.google.com.br")
console.log(firstLink.getAttribute("href"))
//Abrindo o link em nova aba
firstLink.setAttribute("target", "_blank")

// 20 - ALTURA E LARGURA DOS ELEMENTOS (E possivel pegar altura e largura os elementos, usando as propriedades offsetWidth e offsetHeight, se quisermos desconsiderar as bordas temos clientWidth e clientHeight)

//Selecionando o footer
const footer = document.querySelector("footer")
//Esses valores estao levando a borda em consideracao
console.log(footer.offsetWidth)
console.log(footer.offsetHeight)
// o valor aparece 8px menor porque tem 4 pixels de borda de cada lado
console.log(footer.clientWidth)
console.log(footer.clientHeight)

// 21 - POSICAO DO ELEMENTO (Com o metodo getClientBoundingRect podemos pegar varias informacoes do elemento, como posicao no eixo x, y, altura, largura e outros)
const product1 = product[0];
console.log(product1.getBoundingClientRect());

// 22 - ESTILOS COM JS (Todos os elementos possuem uma propriedade chamada style, a partir delas podemos alterar as regras de CSS, note que as regras separadas por traco viram camelCase, exemplo: background-color => backgroundColor)

mainContainer.style.color = "red";
//Mudando cor de fundo com hexadecimal
mainContainer.style.backgroundColor = "#333"
//Exemplo com padding Bottom
mainContainer.style.paddingBottom = "15px"

// 23 ALTERANDO ESTILOS EM HTML COLECTION (HTML colection aparece quando selecionamos varios elementos de uma vez, podemos passar por cada um dos elementos com um for of e estilizar individualmente cada item)

// Alterando cada um dos list itens, fazendo um loop alterando os estilos da cor de fundo
for (const li of listItens) {
    li.style.backgroundColor = "red";
}
