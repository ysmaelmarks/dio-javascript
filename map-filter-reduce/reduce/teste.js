const main = (params) => {

    const fatoriais = [1, 1, 2, 6, 24, 120, 720, 5040, 40320, 362880];
 
    const result = [];
 
    for (let i = 0; i < fatoriais.length; i++) {
 
        // subtrai o valor inicial por cada valor dentro do array
 
        result.push(500000 - fatoriais[i]);
 
    }
 
    const resultFinal = result.reduce((a, b) => a - b);
 
    console.log(resultFinal);

 }

 main();