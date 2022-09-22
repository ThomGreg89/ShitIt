/*
Gregory Thom
CE07: Final Project: Body Mass Calculator
08/01/2021
*/

//Button Code
document.querySelector("#getBMI").addEventListener("click", function(e)
{
    //Validation
    if(document.querySelector("#ft").reportValidity() &&
    document.querySelector("#inch").reportValidity() &&
    document.querySelector("#weight").reportValidity())
    {
        //Get values from user
        let heightFt = parseInt(document.querySelector("#ft").value);
        let heightInch = parseFloat(document.querySelector("#inch").value);
        let weight = parseFloat(document.querySelector("#weight").value);

        //Convert feet to inches
        let conversionFtoI = heightFt * 12;
        //Combite height
        let height = conversionFtoI + heightInch;
        //Calculate BMI
        //Formula: [weight (lb) / height (in) / height (in)] x 703
        let userBMI = (weight/height/height) * 703;

        //Create a conditional for BMI outcome
        if(userBMI < 18.5)
        {
            //BMI for Under Weight Range
            document.querySelector("#finalOutput").innerHTML = `Your BMI is ${userBMI.toFixed(1)}, indicating your weight is in Under Weight Range for adults of your height.`;
            document.querySelector("#graphic").src = "IMG/underWeight.jpg";

        } else if(userBMI >= 18.5 && userBMI < 25)
        {
            //BMI for Normal to Healthy Weight Range
            document.querySelector("#finalOutput").innerHTML = `Your BMI is ${userBMI.toFixed(1)}, indicating your weight is in Normal or Heathly Weight Range for adults of your height.`;
            document.querySelector("#graphic").src = "IMG/healthyWeight.jpg";

        } else if(userBMI >= 25 && userBMI < 30)
        {
            //BMI for Over Weight Range
            document.querySelector("#finalOutput").innerHTML = `Your BMI is ${userBMI.toFixed(1)}, indicating your weight is in Over Weight Range for adults of your height.`;
            document.querySelector("#graphic").src = "IMG/overWeight.jpg";

        } else if(userBMI >= 30 && userBMI < 35)
        {
            //BMI for Obese Range
            document.querySelector("#finalOutput").innerHTML = `Your BMI is ${userBMI.toFixed(1)}, indicating your weight is in Obese Range for adults of your height.`;
            document.querySelector("#graphic").src = "IMG/obeseWeight.jpg";

        } else if(userBMI >=35)
        {
            //BMI for Extreme Obese Range
            document.querySelector("#finalOutput").innerHTML = `Your BMI is ${userBMI.toFixed(1)}, indicating your weight is in Extreme Obese Range for adults of your height.`;
            document.querySelector("#graphic").src = "IMG/extremeObeseWeight.jpg";

        }
    }
})