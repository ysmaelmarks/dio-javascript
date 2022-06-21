const vermelho = {
    value: 2,
};

const amarelo = {
    value: 3,
};

function exercicioMap(arr, thisArg){
    return arr.map(function(item){
        return item * this.value;
    }, thisArg);
}

const nums = [1, 2, 3];

console.log('this -> vermelho', exercicioMap(nums, vermelho));

console.log('this -> amarelo', exercicioMap(nums, amarelo));