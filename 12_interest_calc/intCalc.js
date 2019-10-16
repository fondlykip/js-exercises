//function to calculate simple interest
function intCalcFunc(){
    
    //collect user inputs
    var princ = document.getElementById("principal").value;
    var rate = document.getElementById("intRate").value
    var term = document.getElementById("term").value;

    //calculate 
    var finalVal = princ*(1 + rate*term);

    //display results to <p> in index.html
    document.getElementById("intCalcOut").innerHTML = `After ${term} years at ${rate}%, the investment will be worth ${finalVal}.`
}