/*Neste exemplo, estamos em uma loja e procuramos nossa carteira dentro de nossa bolsa. Retiramos objeto por objeto e quando encontramos a carteira, paramos.*/

const bolsa = [
    'Notebook',
    'Moletom',
    'Escova de dentes',
    'Celular',
    'Carteira',
    'Carregador',
    'Mouse'
]

for (let i = 0; i < bolsa.length; i++){
    console.log(bolsa[i])
    if (bolsa[i] == 'Carteira') break
}