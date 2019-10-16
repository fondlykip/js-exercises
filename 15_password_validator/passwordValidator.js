
//function to compare user input against known password and return
//appropriate output message for user and success/failure of validation
function passwordValidator(){

    //intake user inputs
    var uname = document.getElementById("username").value;
    var upassword = document.getElementById("password").value;

    // set some more sys vars
    var sysPass = "P4S5W07D";
    var displayMessage;

    //compare user pasword and sys password, update displayMessage with appropriate response
    if(upassword == sysPass){
        displayMessage = `Welcome ${uname}, you may enter the site!`;
    }else{
        displayMessage = `Sorry, ${uname}, we don't like your kind round here`;
    }

    document.getElementById("userOutput").innerHTML = displayMessage
}