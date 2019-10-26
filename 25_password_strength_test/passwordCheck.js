//function to submit form and run passwordchecker against vals
function submitForm(){
    //get user input
    var input = document.getElementById("userPassword").value;
    //instantiate result var
    var result;
    //switch output of password strength checker
    switch(passwordStrength(input)){
        case 1:
            result = "Very Weak";
            break;
        case 2:
            result = "Weak";
            break;
        case 3:
            result = "Strong";
            break;
        case 4: 
            result = "Very Strong";
            break;
    }
    
    //print out put to document
    document.getElementById("output").innerHTML = `The password '${input}' is a ${result} password.`;

}

/*
function to test the strength of a password, returns integer values for strength
 1=very weak, 2=weak, 3=strong, 4=very strong
_____________________________________________
|Strength	| >8	|nums	|letter	|spchar	|
|-----------|-------|-------|-------|-------|
|VeryWeak	|	n	|	y	|	n	|	n	|
|-----------|-------|-------|-------|-------|
|Weak		|	n	|	n	|	y	|		|
|-----------|-------|-------|-------|-------|
|Strong		|	y	|	y	|	y	|	n	|
|-----------|-------|-------|-------|-------|
|VeryStrong	|	y	|	y	|	y	|	y	|
|-----------|-------|-------|-------|-------|
*/
function passwordStrength(password){
    
    //regex patterns
    numPatt = /[0-9]/ig;
    lettPatt = /[a-z]/ig;
    SpecCharPatt = /[!@#$%^&*(),.?":\[\]{}|<>]/ig;

    //test booleans
    var longerThan8 = password.length >= 8;
    var containsSpecialChars = SpecCharPatt.test(password);
    var containsNumbers = numPatt.test(password);
    var containsLetters = lettPatt.test(password);

    //based on decision table above, compute integer output
    if(!longerThan8 && containsNumbers && !containsLetters && !containsSpecialChars){
        //very weak conditions
        return 1;
    }else if(!longerThan8 && !containsNumbers && containsLetters && !containsSpecialChars){
        //weak conditions
        return 2;
    }else if(longerThan8 && containsNumbers && containsLetters && !containsSpecialChars){
        //strong conditions
        return 3;
    }else if(longerThan8 && containsNumbers && containsLetters && containsSpecialChars){
        //very strong condtions
        return 4;
    };
};