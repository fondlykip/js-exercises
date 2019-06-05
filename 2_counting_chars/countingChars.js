//take in string with prompt window
var input = prompt("what is the input string?")

//small func to get calc str len and return the statement
function countChars(str) {
    let len = str.length
    return str + " contains " + len + " characters"
}

//output func result
document.write(countChars(input))