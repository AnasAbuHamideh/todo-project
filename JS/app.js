var name = prompt("Enter your name:");

var Gender = prompt("Enter your Gender:");

if (Gender != "male" && Gender != "female") 
    alert("invalid input")



var age = prompt("Enter your age:");
if (age <= 0)
    alert("age is invalid!");

var skip = confirm("Skip Welcome:");
if (skip != true)
    alert("welcome to Click");