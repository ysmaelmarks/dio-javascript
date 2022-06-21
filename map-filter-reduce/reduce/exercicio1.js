function somaValores(arr){
    return arr.reduce(function(prev, curr){
        return prev * curr;
    })
}

const arr = [1, 2, 3, 4, 5];

console.log(somaValores(arr));