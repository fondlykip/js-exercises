//prompt input for values
var quoteIn = prompt("What is the Quote?")
var nameIn = prompt("Who said it?")

//function takes a quote and a name, returns the two combined into a statement
function genOutput(quote, name){
    return(name + " says, \"" + quote + "\"")
}

//output result
document.write(genOutput(quoteIn, nameIn))