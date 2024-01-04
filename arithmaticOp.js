//10)Perform arithmetic operations on two numbers 1)Addition 2)multiplication 3)substraction 4)division using if else ladder
let num1=parseFloat((prompt("Enter a number")));
let operation=prompt("Enter the operation");
let num2=parseFloat((prompt("Enter 2nd number")));

if(operation==="+")
{
    let result = num1+num2;
    alert(` ${num1} + ${num2} = ${result}`)
}
else if(operation==="-")
{
    let result = num1-num2;
    alert(` ${num1} - ${num2} = ${result}`)
}
else if(operation==="*")
{
    let result = num1*num2;
    alert(` ${num1} * ${num2} = ${result}`)
}
else if(operation==="/")
{
    let result = num1/num2;
    alert(` ${num1} / ${num2} = ${result}`)
}


