const numeros = [1, 2, 3, 4, 5, 10, 12, 15, 30, 50, 56, 48, 60, 39, 35, 70]

function filtroPar(arr){
    return arr.filter(function(numero){
        return numero % 2 == 0
    })
}

console.log(filtroPar(numeros));
