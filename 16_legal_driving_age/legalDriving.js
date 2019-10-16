

function legallyDrive(){
    //take in user age from form
    var uAge = document.getElementById("userAge").value;
    //set the value of the output html with computed answer 
    //output computed with Ternary Operator ( <condition> ? <true-out> : <false-out>)
    document.getElementById("userOutput").innerHTML = "You " + (uAge >= 17 ? "are" : "are not") + " old enough to legally drive!"

}