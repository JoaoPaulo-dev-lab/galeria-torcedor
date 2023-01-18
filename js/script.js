function addCart(id){
    const botao = document.getElementById(id)

    botao.style.background = 'red'
    botao.innerHTML = 'Adicionado ao Carrinho'
    }

const year = document.getElementById("year")
const anoAtual = new Date()
year.innerHTML = anoAtual.getFullYear()