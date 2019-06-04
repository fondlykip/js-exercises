var input = prompt("what is the input string?")

function countChars(str) {
    let len = str.length
    return str + " contains " + len + " characters"
}

document.write(countChars(input))