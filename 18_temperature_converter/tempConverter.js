
function convertTemp(){
    //user inputs
    var baseUnit = document.querySelector('input[name="startUnit"]:checked').value;
    var userValue = document.getElementById("userTemp").value;
    
    //instantiate var
    var returnVal;
    var outputUnit;

    //based on input, compute output
    if(baseUnit == 'C'){
        returnVal = (userValue * (9/5))+32;
        outputUnit = "Fahrenheit";
    } else {
        returnVal = (userValue - 32)*(5/9);
        outputUnit = "Celsius";
    }

    document.getElementById("userOutput").innerHTML = `The temperature in ${outputUnit} is ${returnVal}.`
}