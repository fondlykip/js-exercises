//function to check if two inputs are anagrams of eachother
function checkAnagram(word1, word2) {
    //split input strings into two arrays
    var word1Array = [...word1];
    var word2Array = [...word2];

    //start with length test - anagrams must be the same number of characters
    if(word1Array.length != word2Array.length){
        
        //if length test failed, return false
        return false;

    } else {

        //iterate over characters of first word
        for(i=0; i<word1Array.length; i++){

            //assign current value to variable
            var currChar = word1Array[i];
            
            //check if it exists in the second word
            if(word2Array.includes(currChar)){

                //if so, remove to avoid retest
                word2Array.splice(word2Array.indexOf(currChar),1);

            }else{
                
                //else, return false
                return false;
            };

        };
        //if all passed, return true
        return true;
    };
};

//function to run anagram checker on submition of form
function submitForm(){

    //get values from the form
    var input1 = document.getElementById("userWord1").value;
    var input2 = document.getElementById("userWord2").value;

    console.log(input1, input2);
    //test if values pass the anagramChecker
    if(checkAnagram(input1, input2)){
        //write success output
        document.getElementById("userOutPut").innerHTML = `'${input1}' and '${input2}' are Anagrams of eachother!`
    }else{
        //write failure output
        document.getElementById("userOutPut").innerHTML = `'${input1}' and '${input2}' are not Anagrams of eachother!`
    };
};