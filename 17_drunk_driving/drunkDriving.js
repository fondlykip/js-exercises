

function legallyDrive(){
    //get values from form
    var uname = document.getElementById("userName").value;
    var uWeight = document.getElementById("userWeight").value;
    var uGender = document.querySelector('input[name="userGender"]:checked').value;
    var uNumPints = document.getElementById("userPints").value;
    var uTime = document.getElementById("userTime").value;

    var numOunces = uNumPints*20;
    var alcRatio = (uGender == 'male' ? 0.73 : 0.66);

    var bac = ((numOunces*5.14)/(uWeight*alcRatio))-(0.015*uTime);
    console.log(uGender);
    document.getElementById("userOutput").innerHTML = `${uname},` + (uGender =="male"? " bro":" sis") + `<br>your blood alcohol level is ${bac},<br>` + (bac >= 0.08 ? "it is not" : "it is") + " legal for you to drive."


}