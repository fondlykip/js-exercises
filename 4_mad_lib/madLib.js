
//prompt for input of values
var nounIn = prompt("enter a noun")
var verbIn = prompt("enter a verb")
var adjIn = prompt("enter an adjective")
var advIn = prompt("enter an adverb")

//function takes inputed values, returns madlib
function genOut(n,v,adj,adv){
    //template literal syntax with backticks `this is a templae ${var}`
    return(`Do you ${v} your ${adj} ${n} ${adv}? That's hilarious!`)
}

//output function result
document.write(genOut(nounIn,verbIn,adjIn,advIn))
