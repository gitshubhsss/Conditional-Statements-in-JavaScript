//13)program to Find number of days in a given month 
/*If month is outside the range of 1 and 12 print “Invalid month”.
	If month is equal to 2 ie, February print “29 days” if leap year else print “28 days” .
	Else if month is equal to 4, 6, 9 or 11 print “30 days”.
	Else print “31 days”. */

let month=parseInt(prompt("Enter a month"));
let year =parseInt(prompt("Enter a year"))
if(month===0 || month>12)
{
    alert("Invalid month");
}
else if(month ===2)
{
   if((year % 4===0 && year % 100===0 ) || year % 400===0)
   {
    alert("29 days")
   }
   else
   {
    alert("28 days")
   }
}
else if (month === 4 || month === 6 || month === 9 || month === 11)
{
    alert("30 days");
} 
else 
{
    alert("31 days");
}