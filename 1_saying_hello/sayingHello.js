//take name in
var name = prompt("what is your name?")

//function takes name string 'nom',
//validates value and returns necessary result
function evaluateResponse(nom){
    //chack val of name
    if (nom === "Liam") {
        return "Hello Liam, Nice to meet you"
    } else {
        return "Well, " + nom + ", you certainly aren't Liam, that's for sure!"
    }
}
//output return val from evaluateResponse func
document.write(evaluateResponse(name))