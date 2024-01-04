//2)check the age of the persons whether the age is eligible for voting or not using prompt

const age =parseInt(prompt("Enter your age :"));
if(age>=18)
{
    console.log("You are eligible for voting");
}
else{
    console.log("Your age should be 18");
}