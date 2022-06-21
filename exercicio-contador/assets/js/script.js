var currentNumberWrapper = document.getElementById("currentNumber");
var currentNumber = 0;

function increase(){
    currentNumber++;
    currentNumberWrapper.innerHTML = currentNumber
    if(currentNumber >= 0){
        currentNumberWrapper.style.color = "black";
    }
    if(currentNumber >= 10){
        document.getElementById("increase").disabled = true;
    }
}

function decrease(){
    currentNumber--;
    currentNumberWrapper.innerHTML = currentNumber
    if(currentNumber <= -1){
        currentNumberWrapper.style.color = "red";
    }
    if(currentNumber <= -10){
        document.getElementById("decrease").disabled = true;
}
}