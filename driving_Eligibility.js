/*1)print "you can drive " or "you cannot drive" based on age being greter
  than 18 using ternary operator*/

 const age=parseInt(prompt("Enter your age"));
 const result = (age >= 18) ? "you can drive":"you cannot drive";

console.log(result);