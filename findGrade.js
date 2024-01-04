//12)find the grade for input marks 
	/*Print “S grade” if marks is between 90 and 100.
	Print “A grade” if marks is between 80 and 90.
	Print “B grade” if marks is between 70 and 80.
	Print “C grade” if marks is between 60 and 70.
	Print “D grade” if marks is between 50 and 60.
	Print “E grade” if marks is between 40 and 50.
	Print “Student has failed” if marks is between 0 and 40.
	Else print “Invalid marks”.*/
let marks=parseInt(prompt("Enter your marks"));
if(marks>=90 && marks<=100)
{
    alert("S grade");
}
else if(marks>=80 && marks<=90)
{
    alert("A grade");
}
else if(marks>=70 && marks<=80)
{
    alert("B grade");
}
else if(marks>=60 && marks<=70)
{
    alert("C grade");
}
else if(marks>=50 && marks<=60)
{
    alert("E grade");
}
else if(marks>=0 && marks<=40)
{
    alert("Student has failed");
}
else{
    alert("invalid marks");
}

