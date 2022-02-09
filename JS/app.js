var name = prompt("Enter your name:");

var Gender = prompt("Enter your Gender:");

if (Gender != "male" && Gender != "female") 
    alert("invalid input")



var age = prompt("Enter your age:");
if (age <= 0)
    alert("age is invalid!");

var skip = confirm("Skip Welcome:");
if (skip != true)
    alert(`welcome Mr/Mrs ${name} to Click`);



    var arr = []

    function Socialstatus() {
        var Socialstatus = prompt("Are You Married? Yes/No");
        if (Socialstatus != "Yes" && Socialstatus != "No")
            alert("invalid input");
        else if (Socialstatus == "Yes")
            arr[0] = "Married";
        else
            arr[0] == "Single";
    
    }
    
    function Sports() {
        var Sports = prompt("Do you Play Sports? Yes/No");
        if (Sports != "Yes" && Sports != "No")
    
            alert("invalid input");
        else if (Sports == "Yes")
            arr[1] = "Athletic";
        else
            arr[1] = "Lazy";
    }
    
    function Breakfast() {
        var Breakfast = prompt("Do you eat Breakfast? Yes/No");
    
        if (Breakfast != "Yes" && Breakfast != "No")
            alert("invalid input")
        else if (Breakfast == "Yes")
            arr[2] = "Healthy";
        else
            arr[2] = "Not Healthy";
    }
    
    function traverseArray(arr) {
        for (let i = 0; i < arr.length; i++)
            console.log(arr[i]);
    
    }


    Socialstatus();
    Sports();
    Breakfast();
    
    traverseArray(arr);