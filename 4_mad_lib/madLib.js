

var nounIn = prompt("enter a noun")
var verbIn = prompt("enter a verb")
var adjIn = prompt("enter an adjective")
var advIn = prompt("enter an adverb")

function genOut(n,v,adj,adv){
    return(`Do you ${v} your ${adj} ${n} ${adv}? That's hilarious!`)
}

document.write(genOut(nounIn,verbIn,adjIn,advIn))
