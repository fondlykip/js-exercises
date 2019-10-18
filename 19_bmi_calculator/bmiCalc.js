function calcBMI() {

    var userHeight = document.getElementById("userHeight").value;
    var userWeight = document.getElementById("userWeight").value;

    var userBMI = (userWeight/(userHeight * userHeight))*703
    var outStatement;

    if( 25 >  userBMI && userBMI > 18.5){
        outStatement = "You are within the ideal weight range."    
    }else if( userBMI >= 25){
        outStatement = "You are overweight, you should see a doctor"
    }else if( userBMI <= 18.5){
        outStatement = "You are Underweight, you should see a doctor"
    }

    document.getElementById("userOutput").innerHTML = `Your BMI is ${userBMI}, <br> ${outStatement}`
}