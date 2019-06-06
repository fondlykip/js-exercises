/* Pizza party script - takes in number of people an number of pizzas,
returns number of slices per guest and how many leftover slices there will be,
handles quantities to produce properly pluralised output */

//function to carry out pizza party logic
function party(people,pizzas){
    //handle args
    var numPeople = people
    var numPizzas = pizzas

    //calculations
    var totalSlices = numPizzas*8 //total number of slices, 8 per pizza
    var slices = Math.floor(totalSlices/numPeople) //slices per person
    var leftover = totalSlices%people //remainder slices
    
    //logic for pluralisation of keywords
    //since 0 can be pluralised, logic is based off of "subject qty does not equal 1"
    var plPeople = "person"
    if(numPeople != 1){
        plPeople = "people"
    }

    var plPizza = "pizza"
    if(numPizzas != 1){
        plPizza = "pizzas"
    }

    var plPiece = "piece"
    if(slices != 1){
        plPiece = "pieces"
    }

    var plAre = "is"
    var plLeft = "piece"
    if(leftover != 1){
        plAre = "are"
        plLeft = "pieces"
    }
    
    //return output
    return `${numPeople} ${plPeople} with ${numPizzas} ${plPizza}<br>
    Each person gets ${slices} ${plPiece} of pizza<br>
    There ${plAre} ${leftover} leftover ${plLeft}`
}

//take in number of people
var peopleIn = prompt("How many people?")
while(isNaN(peopleIn)){
    peopleIn = prompt("Please enter a number value")
}
//take in number of pizzas
var pizzasIn = prompt("How many Pizzas do you have?")
while(isNaN(pizzasIn)){
    pizzasIn = prompt("Please enter a number value")
}

//write output to document
document.write(party(peopleIn,pizzasIn))
