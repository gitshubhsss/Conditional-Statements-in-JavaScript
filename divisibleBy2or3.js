//4)//write a javascript program to find whether a number is divisible by 2 and 3
const number=6;
if(number%2===0 && number%3===0) //here we have used and operator if any one condition becomes false then the result also false
{
    console.log("Number is divisible by 2 and 3 ");
}
else if(number%2===0)
{
    console.log("number is divisible by 2");
}
else if(number%3===0)
{
    console.log("number is divisible by 3");
}
else{
    console.log("number is neighther divisible by 2 nor 3 ");
}