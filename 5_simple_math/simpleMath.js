var firstNum = prompt("What is the first number?")
while(isNaN(firstNum)){
    firstNum = prompt("Please enter a Number value")
}

var secNum = prompt("What is the second number?")
while(isNaN(secNum)){
    secNum = prompt("Please enter a number value")
}

var firstInt = parseInt(firstNum)
var secInt = parseInt(secNum)

function simpleMath(x,y){
    return(`${x} + ${y} = ${x+y}<br>
    ${x} - ${y} = ${x-y}<br>
    ${x} * ${y} = ${x*y}<br>
    ${x} / ${y} = ${x/y}`)
}

document.write(simpleMath(firstInt,secInt))