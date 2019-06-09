const sqrftPerGal = 350;

function calculatePaint(a){
    this.area = a
    gallons = Math.ceil(a/sqrftPerGal)
    return gallons
}

function calculateSqrFt(l, w){
    this.length = l
    this.width = w
    ceilingArea = l*w
    return ceilingArea
}

var userLength = prompt("length")
var userWidth = prompt("width")
var userArea = calculateSqrFt(userLength, userWidth)
var userPaint = calculatePaint(userArea)

document.write(`You will need to purchase ${userPaint} gallons of paint to cover ${userArea} square feet.`)