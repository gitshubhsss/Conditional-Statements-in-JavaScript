//11)program to find the year is leap or not using javascript
let year=458;
if((year%4===0 && year % 100 !== 0) || (year % 400 === 0))
{
    console.log("year is leap year");
}
else
{
    console.log("year is not a leap year");
}