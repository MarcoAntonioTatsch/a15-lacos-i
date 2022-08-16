let comida = prompt("você deseja comer mais?").toUpperCase()
let conta = 0


while(comida == "S"){
   conta = conta + 2.50
    comida = prompt("você deseja comer mais?").toUpperCase()
}
alert(`O valor gasto foi de R$ ${conta}`)

