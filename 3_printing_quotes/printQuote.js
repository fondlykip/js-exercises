var quoteIn = prompt("What is the Quote?")
var nameIn = prompt("Who said it?")

function genOutput(quote, name){
    return(name + " says, \"" + quote + "\"")
}

document.write(genOutput(quoteIn, nameIn))