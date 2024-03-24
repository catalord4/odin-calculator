function operatre(number1, number2, operation)
{
    return operation(number1, number2);
}

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