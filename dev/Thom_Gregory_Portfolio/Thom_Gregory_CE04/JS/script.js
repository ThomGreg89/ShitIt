/*
Gregory Thom
07/17/2021
CE04: Conditionals
*/

//Problem #1: Grade Letter Calculator

//Alert user what we are prompting for
alert("Welcome to Conditional Testing!");
alert("I highly suggest opening the Console first and then refreshing the page.");

//Prompt user to enter grade as a whole number
let userGrade = parseInt(prompt("First is Grade Letter Calculation. Provide your grade in class as a whole number and I'll let you know your letter grade."));

//Create an if statement to provide user with letter grade depending on the number they provide.
if(userGrade >= 90 && userGrade <=100)
{
    console.log("You have a " + userGrade + "%, which means you have a(n) A in the class.");
} else if(userGrade >= 80 && userGrade < 90)
{
    console.log("You have a " + userGrade + "%, which means you have a(n) B in the class.");
} else if(userGrade >= 70 && userGrade < 80)
{
    console.log("You have a " + userGrade + "%, which means you have a(n) C in the class.");
} else if(userGrade >= 60 && userGrade < 70)
{
    console.log("You have a " + userGrade + "%, which means you have a(n) D in the class.");
} else if(userGrade >= 0 && userGrade < 60)
{
    console.log("You have a " + userGrade + "%, which means you have a(n) F in the class.");
} else
{
    console.log("Error. Please refresh and re-enter grade!");
}

//------------------------------------------------------------------------
//Problem #2: Pumpkin Patch Pickers

//Prompt user for weight of pumpkin
pumpkinWeight = parseFloat(prompt("Next up it is Pumpkin Picking. Tell me how much your pumpkin weighs and I will tell you the cost."));

//Calculate weight user provide times the cost per pound depending on the weight. 

if(pumpkinWeight > 0 && pumpkinWeight <= 5.5)
{
    //store calculations separately and use it console.log to provide amount.
    let calc1 = pumpkinWeight * 1;
    console.log("Your pumpkin of " +pumpkinWeight+ "lbs costs $" +calc1+ ".");
} else if(pumpkinWeight > 5.5 && pumpkinWeight <= 10.75)
{
    let calc2 = pumpkinWeight * 0.9;
    console.log("Your pumpkin of " +pumpkinWeight+ "lbs costs $" +calc2+ ".");
} else if(pumpkinWeight > 10.75 && pumpkinWeight <= 25)
{
    let calc3 = pumpkinWeight * 0.8;
    console.log("Your pumpkin of " +pumpkinWeight+ "lbs costs $" +calc3+ ".");
} else if(pumpkinWeight > 25 && pumpkinWeight <= 50)
{
    let calc4 = pumpkinWeight * 0.7;
    console.log("Your pumpkin of " +pumpkinWeight+ "lbs costs $" +calc4+ ".");
} else if(pumpkinWeight > 50 && pumpkinWeight <= 100)
{
    let calc5 = pumpkinWeight * 0.6;
    console.log("Your pumpkin of " +pumpkinWeight+ "lbs costs $" +calc5+ ".");
} else if(pumpkinWeight > 100)
{
    let calc6 = pumpkinWeight * 0.5;
    console.log("Your pumpkin of " +pumpkinWeight+ "lbs costs $" +calc6+ ".");
} else
{
    console.log("Error. Please refresh and enter a positive value.");
}

//--------------------------------------------------------------------------

//Problem #3: Loyalty Card
//Calculate the total cost of two items that the user will purchase and calculate a discount based on if they are preferred customer or not.

//Alert the user on what is last part is.
alert("The last part is Loyalty Card. I will determine the total cost of your items you want to purchase and determine if you have a discount on your purchase.");

//Prompt user for cost of item 1
let itemOne = parseFloat(prompt("What is the cost of your first item?"));

//Prompt user for cost of item 2
let itemTwo = parseFloat(prompt("What is the cost of your second item?"));

//Check to see if user is a preferred member
preferredCustomer = prompt("Are you a preferred member? Please only type yes or no.");

//Use if statement to see if user gets a discount or not and do calculations
if(preferredCustomer == "yes")
{
    //If user is preferred, calculate discount
    let discount = (itemOne + itemTwo) * .15;
    let total = (itemOne + itemTwo) - discount;
    console.log("Your total purchase is $" +total+ ".");
} else if(preferredCustomer == "no")
{
    //If no then user does not get discount
    let total2 = itemOne + itemTwo;
    console.log("Your total is $"  +total2+ ".");
} else
{
    console.log("Error. Please refresh and re-enter number.");
}