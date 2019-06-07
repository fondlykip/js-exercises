//function takes name string 'nom',
//validates value and returns necessary result
function evaluateResponse(nom){
    //chack val of name - to lower case to make sure all versions 
    //of Liam (liam, Liam, LIAM, lIam etc) get validated
    if (nom.toLowerCase() == "liam") {
        return "Hello Liam, Nice to meet you"    
    } else {
        return "Well, " + nom + ", you certainly aren't Liam, that's for sure!"
    }
}


//called on form submit 
function handleDaForm(){
    //get value in text field of id/name 'fname'
    var name = document.getElementById("fname").value;

    //insert output of eval response func to output <p> element, passes name from form
    document.getElementById("output").innerHTML = evaluateResponse(name);
}
