const numberDisplay = document.querySelector("#main-display");
const numberBtns = document.querySelectorAll(".number-btn");
const operationBtns = document.querySelectorAll(".operator-btn");

const equalsBtn = document.querySelector("#equals");

const clearBtn = document.querySelector("#clear");
const percentBtn = document.querySelector("#percent");
const plusMinusBtn = document.querySelector("#plusminus");

let pressedEqual = false;

let currentNumber = 0;
let previousNumber = undefined;
let currentOperation = "";
let result = 0;


function setNumberDisplay(event) {
    if(!(currentOperation === "") && (currentNumber == 0))
    {
        toggleOperationVisual(false)
        numberDisplay.textContent = "";
    }

    if(!(result == 0) && (currentOperation === "")){
        clear();
        numberDisplay.textContent = "";
    }

    if(numberDisplay.textContent.includes(".") && event.target.textContent === "."){
        console.log("aaaa");
        return;  
    } 

    numberDisplay.textContent === "0" ? numberDisplay.textContent = event.target.textContent : numberDisplay.textContent += event.target.textContent;   
    currentNumber = Number(numberDisplay.textContent); 
}

function selectOperation(operation){
    pressedEqual = false;
    if(currentOperation === "" && operation === "") return;
    if(!(currentOperation === "") && operation === "")
    {
        toggleOperationVisual(false);
        return;
    }
    if(!(currentOperation === ""))
    {
        toggleOperationVisual(false);
    }

    if(!(previousNumber == result)) equals();

    if(!(result == 0)) currentNumber = result;


    currentOperation = operation.id;
    previousNumber = currentNumber;
    currentNumber = 0;
    toggleOperationVisual(true);
}

function toggleOperationVisual(state)
{
    if(state) {
        document.querySelector("#" + currentOperation).classList.remove("operator-btn");
        document.querySelector("#" + currentOperation).classList.add("active-operation");
    }
    else {
        document.querySelector("#" + currentOperation).classList.add("operator-btn");
        document.querySelector("#" + currentOperation).classList.remove("active-operation");
    }

}

operationBtns.forEach( (item) => {
    if(item.id === "equals") return;
    item.addEventListener("click", event => selectOperation(event.target));
});

plusMinusBtn.addEventListener("click", plusMinus);
percentBtn.addEventListener("click", percent);


equalsBtn.addEventListener("click", () => { pressedEqual = true;});
equalsBtn.addEventListener("click", (event) => {equals(event.target.id)});
equalsBtn.addEventListener("click", (event) => selectOperation(""));


numberBtns.forEach( (item) =>{
    item.addEventListener("click", event => setNumberDisplay(event));
});



function clear() {
    currentNumber = 0;
    previousNumber = undefined;
    result = 0;
    numberDisplay.textContent = "0";
    selectOperation("");
}

function equals(operation)
{
    if(pressedEqual && !(operation === "equals"))  {
        return;
    }
    if(!(currentOperation === "") && !(previousNumber === undefined)) {
        result = operate(previousNumber, currentNumber, currentOperation);
        previousNumber = result;
        numberDisplay.textContent = result;
    }
    return result;
}

function plusMinus()
{
    let temp = Number(numberDisplay.textContent);
    clear();
    currentNumber = temp;
    if(currentNumber > 0)
    {
        currentNumber -= currentNumber * 2;
        numberDisplay.textContent = currentNumber;
    }
    else if( currentNumber < 0)
    {
        currentNumber = Math.abs(currentNumber);
        numberDisplay.textContent = currentNumber;
    }

    
}


function percent()
{
    let temp = Number(numberDisplay.textContent);
    clear();
    currentNumber = temp;
    currentNumber /= 100;
    numberDisplay.textContent = currentNumber;
}



clearBtn.addEventListener("click", clear);
