//take in and validate length
var roomLength = prompt("what is the length of the room in feet?")
while(isNaN(roomLength)) {
    var roomLength = prompt("please enter a number value")
}

//take in and validate width
var roomWidth = prompt("what is the width of the room in feet?")
while(isNaN(roomWidth)){
    var roomWidth = prompt("please enter a number value")
}

//calculate area
function areaOfRoom(l,w){
    return l*w
}

//convert sqr feet to meters
function feetToMeters(sqrFeet){
    var meters = sqrFeet*0.092903040
    meters = meters.toFixed(3)
    return(meters)
}

//generate output
function outputGen(x,y){
    areaFeet = areaOfRoom(x,y)
    areaMeters = feetToMeters(areaFeet)
    return(`you entered dimensions of ${x} feet by ${y} feet. <br>
    The area is<br>
    ${areaFeet} square feet<br>
    ${areaMeters} square meters`)
}

document.write(outputGen(roomLength, roomWidth))


