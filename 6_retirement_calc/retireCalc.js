//take in age and vaildate with isNaN
var ageIn = prompt("What is your current age?")
//will prompt again until a number is entered
while(isNaN(ageIn)){
    var ageIn = prompt("please enter a number value")
}

//take in retirement age, validate with isNaN
var retAgeIn = prompt("What age would you like to retire")
while(isNaN(retAgeIn)){
    var retAgeIn = prompt("please enter a number value")
} //keep prompting until a number is entered

//get year value
var currYear = new Date().getFullYear()

//function to calculate output based on inputs
function retirementCalc(a,r,y){
    var age = parseInt(a)
    var ret = parseInt(r)
    var year = parseInt(y)
    //template literal syntax
    return(`You have ${ret-age} years left until you can retire.<br>
    It's ${year}, so you can retire in ${year+(ret-age)}.`)
}
//output
document.write(retirementCalc(ageIn,retAgeIn,currYear))