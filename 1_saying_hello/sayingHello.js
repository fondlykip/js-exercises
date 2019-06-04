var name = prompt("what is your name?")

function evaluateResponse(nom){
    if (nom === "Liam") {
        return "Hello Liam, Nice to meet you"
    } else {
        return "Well, " + nom + ", you certainly aren't Liam, that's for sure!"
    }
}

document.write(evaluateResponse(name))