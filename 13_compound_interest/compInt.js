

function calculate_compound_interest() {
    //take in user inputs from form
    var up = document.getElementById("userPrinc").value;
    var ur = document.getElementById("userRate").value/100;
    var uy = document.getElementById("userYears").value;
    var uc = document.getElementById("userComp").value;

    //calculate end value
    var endVal = up*(1+(ur/uc))**(uc*uy)

    //output results to document
    document.getElementById("userOutput").innerHTML = `£${up} invested at ${ur}% for ${uy} years compounded ${uc} times per year is £${endVal}.` 

}