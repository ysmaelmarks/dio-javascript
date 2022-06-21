const main = (params) => {
    const arr = [1, 1, 2, 6, 24 , 120, 720, 5040, 40320, 362880 ];
    let valor = 500000;
    
    for (let i = 0; i < arr.length; i++  ){
        valor = valor - arr[i];
    }
    return valor;
}
console.log(main());