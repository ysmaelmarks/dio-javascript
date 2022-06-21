var a = 5
var b = 6

function calculo(a,b){
    if (a == b){
        console.log("a and b are equal");
    } else{
        console.log("a and b are not equal");
    }
    if (a + b > 10){
        console.log(`${a} plus ${b} are greater than 10`);
    }
    if (a + b > 10 && a + b <= 20){
        console.log(`${a} plus ${b} are greater than 10 and less than 20 your sum is ${a + b}`);
    }
}

calculo(a,b);