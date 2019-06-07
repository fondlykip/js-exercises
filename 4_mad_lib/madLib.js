
//prompt for input of values
//var nounIn = prompt("enter a noun")
//var verbIn = prompt("enter a verb")
//var adjIn = prompt("enter an adjective")
//var advIn = prompt("enter an adverb")

//function takes inputed values, returns madlib
function genOut(n,v,adj,adv){
    //template literal syntax with backticks `this is a templae ${var}`
    return(`Do you ${v} your ${adj} ${n} ${adv}?<br> That's hilarious!`)
}

//handle form
function formHandleFunc(){

    //pass form valuse to variables
    var n = document.getElementById("form-noun").value;
    var v = document.getElementById("form-verb").value;
    var adj = document.getElementById("form-adjective").value;
    var adv = document.getElementById("form-adverb").value;

    //output of genOut() func added to madLibOut <p> element 
    document.getElementById("madLibOut").innerHTML = genOut(n,v,adj,adv)
}


//output function result
//document.write(genOut(nounIn,verbIn,adjIn,advIn))
