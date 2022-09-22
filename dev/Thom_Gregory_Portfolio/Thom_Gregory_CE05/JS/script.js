/*
    Gregory Thom
    07/21/2021
    CE05: QuerySelector
*/

//Problem #1

//Alert user on what we are doing
alert("Welcome to the Discount Double Check!");
alert("I will ask you for the price of two items and then apply any discounts that you qualify for.");

//Prompt user for cost of item 1 and item 2
let itemOne = parseFloat(prompt("What is the cost of your first item?", "Ex. 44"));
let itemTwo = parseFloat(prompt("What is the cost of your second item?", "Ex. 55.33"));

//Output costs user entered to HTML
document.querySelector("#itemOne").innerHTML = `Cost of First Item: $${itemOne}`;
document.querySelector("#itemTwo").innerHTML = `Cost of Second Item: $${itemTwo}`;

//Add itemOne and ItemTwo
subTotal = itemOne+itemTwo;
//Create an if statement to apply any discount depending on total cost
if(subTotal >=100)
{
    //Apply 10% discount
    let discount = .10*subTotal;
    let total = subTotal - discount;
    //Output to tell user the total and discount applied
    document.querySelector("#total").innerHTML = `Your total is $${total.toFixed(2)}, which includes your 10% discount.`;

    //change background color to green if receiving discount
    document.querySelector("#total").style.background = "green";
} else if(subTotal >=50 && subTotal < 100)
{
    //User gets 5% discount for anything between $50 and $100
    let discount1 = .05*subTotal;
    let total1 = subTotal - discount1;
    //Output to tell user 5% discount applied with the total
    document.querySelector("#total").innerHTML = `Your total is $${total1.toFixed(2)}, which includes your 5% discount.`;

    //Add background color
    document.querySelector("#total").style.background = "green";
} else if(subTotal < 50)
{
    //No discount applied
    document.querySelector("#total").innerHTML = `Your total is $${subTotal.toFixed(2)}.`;

    //Add background color to yellow since there is no discound
    document.querySelector("#total").style.background = "yellow";
    document.querySelector("#total").style.color = "black";
}

//------------------------------------------------------------------------

//Problem #2

//Alert the user on what we are looking to do
alert("Let find out if you can cross the desert with the gas you have left or find out if you have to make a stop.");

//Prompt user for maximum number of gallon car's tank can hold
let maxGallon = parseInt(prompt("What is the maximum number of gallons your car's gas tank can hold?"));

//Prompt user for percent of gallons left
let percentTankRemain = parseInt(prompt(`What percentange of those ${maxGallon} gallons are left?`));

//Prompt for car's miles per gallon
let milesPerGallon = parseInt(prompt("How many miles per gallon can your car go?"));

//Calculate remaining gas in tank
let remainingTank = (.01*maxGallon) * percentTankRemain;

//Calculate the miles car can go with remaining tank of gas
let milesRemaining = remainingTank * milesPerGallon;

//Store selectors for button in container to reuse
let text = document.querySelector("#text");
let graphic = document.querySelector("#graphic");

//Create if statement to see if driver will make need gas or can make it depending on remaining gas.
if(milesRemaining >= 200) 
{
    
    text.addEventListener("click", function(e){
        //Shows per click that driver will make it
        document.querySelector("#textAnswer").innerHTML = `Yes, you can drive ${milesRemaining} miles and you can make it without stopping.`;
    });

    graphic.addEventListener("click", function(e){
        //Graphic showing that driver has enough gas and change image to visible
       document.querySelector("#picture").src =  "IMG/enoughGas.jpg";
       document.querySelectory("#picture").style.visibility = "visible";
    })

} else if(milesRemaining < 200)
{
 
    text.addEventListener("click", function(e){
        //Text showing that user need to stop for gas
        document.querySelector("#textAnswer").innerHTML = `You can only drive ${milesRemaining} miles more, better get gas now while you can!`;
    });

    graphic.addEventListener("click", function(e){
        document.querySelector("#picture").src = "IMG/notEnoughGas.jpg";
        document.querySelector("#picture").style.visibility = "visible";
    })

} else 
{
    //If user does type in something wrong then this message will appear
    alert("Something went wrong, please refresh this page and try again.");
}