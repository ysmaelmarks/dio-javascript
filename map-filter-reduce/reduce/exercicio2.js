const lista = [
    {
        nome: 'sabao em pó',
        preco: 3.50
    },
    {
        nome: 'arroz',
        preco: 2.50
    },
    {
        nome: 'feijão',
        preco: 1.50
    },
    {
        nome: 'macarrão',
        preco: 1.00
    },
    {
        nome: 'carne',
        preco: 5.00
    },
];

const saldoDisponivel = 20.00;

function calculaTotal(saldoDisponivel, lista){
    return lista.reduce(function(prev, curr){
        console.log({prev});
        console.log({curr});
        return prev - curr.preco;
    }, saldoDisponivel);
}

console.log('saldo disponível: ' + calculaTotal(saldoDisponivel, lista) + ' reais');