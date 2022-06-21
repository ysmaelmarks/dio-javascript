function exercicioMap2(arr){
    return arr.map(function(item){
        return item * 2;
    })
}

const nums = [2, 4, 6, 8, 10];

console.log(exercicioMap2(nums));
console.log(nums);