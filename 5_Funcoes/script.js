function presente (dinheiro, valor){
    if (dinheiro < valor){
        return 'Não dá para comprar. Não tenho dinheiro.'
    }
    else {
        return 'Você realmente precisa fazer essa compra?'
    }
}
/*Função declarando váriaveis e chamando elas em outra váriavel, onde ela declara o valor das duas primeiras*/
let x = presente(100, 90)
console.log(x)