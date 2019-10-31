function submitForm(){
    var numOfNums = document.getElementById("numOfNums").value;

    var result = addNums(numOfNums);

    document.getElementById("userOutput").innerHTML = `The total is ${result}.`
}

function addNums(n){

    var i=0;
    var inputArray = [];
    while(i<n){
        inputArray.push(prompt("Enter a number"));
        i++;
    };
    
    var result = 0;

    for(y=0;y<inputArray.length;y++){
        result = result + parseInt(inputArray[y]);
    };

    return result;

}