
//function to determine if customer is from WI, if so, charge 5.5% tax
function taxCalc(){

    //intake user values
    var userAmount = document.getElementById("userAmount").value;
    var userState = document.getElementById("userState").value;
    
    //set default tax level
    var userTax = 0;
    var outputStatement = `The Total is £${userAmount}`;

    //adjust tax if WI resident
    if (userState == "WI"){
        userTax = 5.5;
        outVal = userAmount*(1+(userTax/100))
        outputStatement = `The subtotal is ${userAmount}<br> The tax is ${userTax}%<br> The total is £${outVal.toFixed(2)}`
    }

    //output output
    document.getElementById("userOutPut").innerHTML = outputStatement;


}