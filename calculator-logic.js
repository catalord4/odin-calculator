

function add( number1, number2)
{
    return number1 + number2;
}

function subtract( number1, number2)
{
    return number1 - number2;
}

function multiply( number1, number2)
{
    return number1 * number2;
}

function divide( number1, number2)
{
    return (number2 == 0) ? 0 : number1 / number2;
}


let operations ={
    add : add,
    subtract : subtract,
    multiply : multiply,
    divide : divide,
};

function operate(number1, number2, operation)
{
    return operations[operation]( number1, number2);
}