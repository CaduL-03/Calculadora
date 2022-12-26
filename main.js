const display1El = document.querySelector('.display-1')
const display2El = document.querySelector('.display-2')
const tempresultEl = document.querySelector('.result-temporario')
const numerosEl = document.querySelectorAll('.numero')
const operadorEl = document.querySelectorAll('.operador')
const igualEl = document.querySelector('.igual')
const limparEl = document.querySelector('.limpatudo')
const limparultimoEl = document.querySelector('.limpahistor')

let disNum = ''
let dis2Num = ''
let resultado = null
let ultoperacao = ''
let temponto = false

numerosEl.forEach(numero => {
    numero.addEventListener('click', (e) => {
        if (e.target.innerText === '.' && !temponto){ // se apertar o ponto e não tiver o ponto ainda retorna true
            temponto = true
        } else if (e.target.innerText === '.' && temponto) {
            return
        }
        dis2Num += e.target.innerText // coloca o número que eu clicar no display 2
        display2El.innerText = dis2Num
    })
})

operadorEl.forEach(operacao => {
    operacao.addEventListener('click', (e) =>{
        if (!dis2Num) resultado
        temponto = false // pra poder usar o '.' no próximo número que colocar ex: 5.5 + 2.2
        const nomeoperacao = e.target.innerText
        if (disNum && dis2Num && ultoperacao) {
            matoperacao()
        } else {
            resultado = parseFloat(dis2Num)
        }
        limparvar(nomeoperacao)
        ultoperacao = nomeoperacao
        console.log(resultado)
    })
})

function limparvar(nome = '') {
    disNum += dis2Num+ ' ' + nome + ' '
    display1El.innerText = disNum
    display2El.innerText = ''
    dis2Num = ''
    tempresultEl.innerText = resultado
}

function matoperacao() {
    if(ultoperacao === 'X') {
        resultado = parseFloat(resultado) * parseFloat(dis2Num)
    } else if (ultoperacao === '+') {
        resultado = parseFloat(resultado) + parseFloat(dis2Num)
    } else if (ultoperacao === '-') {
        resultado = parseFloat(resultado) - parseFloat(dis2Num)
    } else if (ultoperacao === '/') {
        resultado = parseFloat(resultado) / parseFloat(dis2Num)
    } else if (ultoperacao === '%') {
        resultado = parseFloat(resultado) % parseFloat(dis2Num)
    }
}

igualEl.addEventListener('click', (e) => {
    if (!disNum || !dis2Num) return
    temponto = false
    matoperacao()
    limparvar()
    display2El.innerText = resultado
    tempresultEl.innerText = ''
    dis2Num = resultado
    disNum = ''
})

limparEl.addEventListener('click', (e) => {
    display1El.innerText = '0'
    display2El.innerText = '0'
    disNum = ''
    dis2Num = ''
    resultado = ''
    tempresultEl.innerText = '0'
})

limparultimoEl.addEventListener('click', (e) => {
    display2El.innerText = '0'
    dis2Num = ''
})

window.addEventListener('keydown', (e) => {
    if(
    e.key === '0' ||
    e.key === '1' || 
    e.key === '2' || 
    e.key === '3' || 
    e.key === '4' || 
    e.key === '5' || 
    e.key === '6' || 
    e.key === '7' || 
    e.key === '8' ||
    e.key === '9' ||
    e.key === '.' 
    ){
    clickbotaoEl(e.key)
    } else if (
        e.key === '+' ||
        e.key === '-' ||
        e.key === '%' ||
        e.key === '/' ||
        e.key === 'Backspace'
    ){
        clickoperacao(e.key)
    } else if (e.key === '*'){
        clickoperacao('X')
    } else if (e.key === 'Enter' || e.key === '='){
        clickigual()
    } else if (e.key === '/'){
        clickoperacao('/')
    }
})

function clickbotaoEl(key){
    numerosEl.forEach(botao => {
        if(botao.innerText === key){
            botao.click()
        }
    })
}

function clickoperacao (key) {
    operadorEl.forEach(botao => {
        if(botao.innerText === key){
            botao.click()
        }
    })
}

function clickigual(){
    igualEl.click()
}