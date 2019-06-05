//prompt for first number
var firstNum = prompt("What is the first number?")
//validate input with isNaN (is not a number)
//while firstnum is not a number (isNaN=true), will reprompt
while(isNaN(firstNum)){
    firstNum = prompt("Please enter a Number value")
}

//same functionality as above for second num
var secNum = prompt("What is the second number?")
//with number value validation
while(isNaN(secNum)){
    secNum = prompt("Please enter a number value")
}

//parse inputs to ints
var firstInt = parseInt(firstNum)
var secInt = parseInt(secNum)

//pass ints to function to produce output
function simpleMath(x,y){
    //<br> necessary for line break in html doc
    return(`${x} + ${y} = ${x+y}<br> 
    ${x} - ${y} = ${x-y}<br>
    ${x} * ${y} = ${x*y}<br>
    ${x} / ${y} = ${x/y}`) 
}

//output
document.write(simpleMath(firstInt,secInt))