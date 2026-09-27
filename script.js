//criando cotação de moedas do dia
const USD = 4.87
const EUR = 5.32
const GBP = 6.08


//obtendo os elementos do formulário
const form = document.querySelector("form")
//abaixo estou criando a variável chamada amount que vai BUSCAR no ID amount do HTML
const amount = document.getElementById("amount")
//abaixo vou obter a moeda que o usuario selecionou
// currency é moeda em inglês
const currency = document.getElementById("currency")
const footer = document.querySelector("main footer")
const description = document.getElementById("description")
const result = document.getElementById("result")

//manipulando o input amount para receber somente números
amount.addEventListener("input", () => {
const hasCharactersRegex = /\D+/g
  amount.value = amount.value.replace(hasCharactersRegex, "")
  //o replace vai pegar a expressão /\D+/g e vai procurar dentro do texto esse padrão
  // e esse padrão verifica caracteres do tipo texto e vai substituir por nada
  // ou seja, ele nao vai deixar digitar letra no input, somente números
    /// oi
})

//capturando o evento de submit (enviar) do formulário
form.onsubmit = () =>{
    event.preventDefault()
    switch  (currency.value){
        case "USD":
            convertCurrency(amount.value, USD, "US$")
            break

            case "EUR":
                convertCurrency(amount.value, EUR, "€")
                break

                case "GBP":
                convertCurrency(amount.value, GBP, "£")
}}

//Função para converter a moeda
function convertCurrency(amount, price, symbol){
try{
    //exibindo a cotação da moeda selecionada
    description.textContent = `${symbol} 1 = ${formatCurrencyBRL(price)}`

//calcula o total
    let total = amount * price

    //verifica se o resultado não é um número
if (isNaN(total)) {
    return alert ("Por favor, digite o valor corretamente para converter.")
}

    //formatei o valor total tirando o R$ para nada
    total = formatCurrencyBRL(total).replace("R$", "")

//exibe o resultad total
result.textContent = `${total} Reais`


    //abaixo ele aplica a classe e exibe para mostrar o resultado
footer.classList.add("show-result")
} catch (error) {
    //abaixo remove a classe do footer removendo ele da tela
    footer.classList.remove("show-result")

    console.log(error)
    alert("Não foi possível converter. Tente novamente mais tarde.")
}
}

// Essa função formata a moeda em R$
function formatCurrencyBRL(value){
    //abaixo ele converte para número para utilizar o toLocaleString para formatar no padrão BRL (R$0,00)
    return Number(value).toLocaleString("pt-BR", {
        style: "currency",
        currency: "BRL"
    }

    )
}
