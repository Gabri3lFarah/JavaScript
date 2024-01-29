// 1 - O QUE SAO EVENTOS (Ações atreladas a algum comportamento do usuário. Por exemplo click, alguma tecla, movimento da tela e do mouse, podemos inserir lógica quando estes eventos ocorrem e podemos disparar eventos em um certo elemento. Esta técnica é conhecida como EVENT HANDLER- função anonima)


// 2 - COMO ADICIONAR UM EVENTO (Primeiramente precisamos selecionar um elemento que vai disparar o evento, depois vamos ativar um metodo chamado addEventListener, nele declaramos qual o tipo do evento e, por meio de callback definimos o que acontece, gerando assim 2 argumentos)

const btn = document.querySelector("#my-button")
//dentro desse metodo temos 2 argumentos, 1 de string que eh o tipo do argumento e o outro a funcao que eh o que vai acontecer depois que clicar o evento
btn.addEventListener("click", function(){
    console.log("Cliquei!")
})

// 3 - REMOVENDO EVENTOS (Tem situacoes que queremos remover os eventos de um elemento, o metodo para isso eh removeEventListener, passamos o evento que queremos remover como argumento)

const secondBtn = document.querySelector("#btn")

function imprimirMensagem() {
    console.log("Teste")
}
// ao inves de passar a funcao, vou escrever o nome da minha funcao
secondBtn.addEventListener("click", imprimirMensagem)

//removendo o evento, precisa saber qual funcao e qual evento, no caso imprimirMensagem e a funcao click
const thirdBtn = document.querySelector("#other-btn")
thirdBtn.addEventListener("click", () => {
    console.log("Evento removido")
    secondBtn.removeEventListener("click", imprimirMensagem)
})

// 4 - O OBJETO DO EVENTO (Todo evento possui um ARGUMENTO ESPECIAL, que contem informacoes do mesmo, geralmente chamamos de event ou,resumidamente, e;)

//selecionei o titulo com uma id chamada my-title, coloquei event na funcao para pegar informacoes ao clicar no titulo para me dar um objeto cheio de propriedades que posso utilizar a meu favor

const myTitle = document.querySelector("#my-title")
myTitle.addEventListener("click", (event) => {
    console.log(event)
    console.log(event.offsetX)
    console.log(event.pointerType)
    console.log(event.target)
})


// 5 - PROPAGACAO DE EVENTOS (Quando um elemento nao eh bem definido pode haver propragacao, ou seja, um outro elemento ativa o evento, para resolver este problema temos o metodo stopPropagation)

const containerBtn = document.querySelector("#btn-container")
const btnInsideContainer = document.querySelector("#div-btn")

//Evento no elemento pai e no elemento filho
containerBtn.addEventListener("click", () => {
    console.log("Evento 1")
})
// Quando tenho a propagacao preciso utilizar o argumento do evento (event) e no inicio dele dar um stop propagation, ativando assim somente o evento 2 e nao o 1
btnInsideContainer.addEventListener("click", (event) => {
    event.stopPropagation()
    console.log("Evento 2")
})

// 6 - ACOES DEFAULT (Muitos elementos tem acoes padrao no HTML, como links que levam a outra pagina, podemos remover isso com o metodo preventDefault)

//Removendo o comportamento padrao no link que leva ao google na tag a do HTML

const a = document.querySelector('a')
//colocando o evento e pegando o argumento dele

a.addEventListener("click", (e) => {
    e.preventDefault()
    console.log("Nao alterou a pagina")
})


// 7 - EVENTOS DE TECLA (Os eventos mapeiam as acoes no teclado, tepos a disposicao keyup e keydown, keyup ativa quando a tecla eh solta, keydown eh quando eh pressionada)

// Nao precisa de elemento alvo, pois eh o teclado que vai enviar, colocamos os eventos no document e podemos verificar ate que tecla o usuario utilizou

document.addEventListener("keyup", (e) => {
    console.log(`Soltou a tecla ${e.key}`)
})
// A mesma sintaxe para o keydown


document.addEventListener("keydown", (e) => {
    console.log(`Apertou a tecla ${e.key}`)
})

// 8 - OUTROS EVENTOS DE MOUSE (O mouse pode ativar outros elementos, mousedown pressionou o botao, mouseup soltou o botao, dblclick eh clique duplo)

const mouseEvents = document.querySelector("#mouse")

//Atrelando eventos a ele

//mousedown
mouseEvents.addEventListener("mousedown", () => {
    console.log("pressionou o botao")
})
//mouseup
mouseEvents.addEventListener("mouseup", () => {
    console.log("Soltou o botao")
})
//doubleclick 
mouseEvents.addEventListener("dblclick", () => {
    console.log("Clicou em dobro o botao")
})

// 9 - MOVIMENTO DO MOUSE (Eh possivel ativar um evento a partir do movimento do mouse, se chama mousemove, com o objeto de evento podemos detectar a posicao do ponteiro do mouse)

// como nao tem elemento tambem, inserimos direto no document, SINTAXE COMENTADA PARA NAO ATRAPALHAR O RESTO

document.addEventListener("mousemove", (e) => {
 //   console.log(`No eixo x: ${e.x}`)
// console.log(`No eixo y: ${e.y}`)
})

// 10 - EVENTOS POR SCROLL (Adicionar evento ao scroll do mouse, o nome do evento eh scroll, podemos determinar que algo aconteca apos chegar numa posicao escolhida da tela)

//calculando quantos pixels ja passou na tela
window.addEventListener("scroll", (e) => {
    if(window.pageYOffset > 200) {
        console.log("Passamos de 200px ")
    }
})


// 11 - EVENTO DE FOCUS/BLUR (O evento focus eh disparado quando focamos em um elemento, ja o blur eh quando perde o foco do elemento, sao elementos comuns em input)

 const input = document.querySelector("#my-input")

 input.addEventListener("focus", (e) => {
    console.log("Entrou no input")
 })

 input.addEventListener("blur", (e) => {
    console.log("Entrou no blur e saiu do input")
 })

 // 12 - EVENTO DE CARREGAMENTO DE PAGINA (O evento eh load e quando o usuario sai da pagina o evento eh beforeunload, alguns navegadores nao permitem!)

 window.addEventListener("load", () => {
    console.log("A pagina carregou!")
 })

 window.addEventListener("beforeunload", (e) => {
    //tirando o comportamento default da pagina
    // e.preventDefault(); comentado para nao travar a pagina
     // colocando value como uma string vazia
   // e.returnValue = ""; comentado para nao travar a pagina
  })

 // 13 DEBOUNCE (Tecnica utilizada para fazer um efeito disparar menos vezes, isso poupa memoria do usuario pois talvez nem sempre o evento seja necessario)

 // o f eh a funcao que vou ativar e por quanto tempo o debounce vai nos gerar intervalos e o delay, em segundos vou esperar para ativar o evento novamente
 const debounce = (f, delay) => {
    //criando uma variavel com let pois sera sobrescrita novamente
    let timeout
    //acessando os argumentos
    return(...arguments) => {
        if(timeout) { // limpando o timeout para poder comecar novamente
            clearTimeout(timeout)
        }
        //fazendo a execucao da funcao com os argumentos que eu quero, como se tivesse programando a execucao de uma funcao
        timeout = setTimeout(() => {
            f.apply(arguments)
        }, delay)
    }
 }
//testando
window.addEventListener("mousemove", debounce (() => {
    console.log("Executando a cada 400ms")
}, 400)
)