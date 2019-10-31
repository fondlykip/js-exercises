function submitForm(){
    //get form values
    var fname = document.getElementById("empFirstName").value;
    var sname = document.getElementById("empSecondName").value;
    var pcode = document.getElementById("empPostcode").value;
    var eID = document.getElementById("empID").value;
    
    //run through validation function
    var output = validateInputs(fname,sname,pcode,eID);

    //output result
    document.getElementById("userOutput").innerHTML = output;

};

function validateInputs(fn,sn,pc,eid){
    //params to more readable names
    var firstName = fn;
    var secondName = sn;
    var postcode = pc;
    var employeeId = eid;

    //regex tests
    var idRegex = /[A-Za-z]{2}[-]{1}[0-9]{4}/g;
    var postcodeRegex = /[A-Za-z]{2,}/g;

    var outputString = "";

    var noErrors = true;

    //validate first name
    if(!firstName){
        outputString += "First name must be filled in<br>";
        noErrors = false;
    }else if(firstName.length < 2){
        outputString += "First name must be 2 characters or longer<br>";
        noErrors = false;
    };

    //validate second name
    if(!secondName){
        outputString += "Second name must be filled in<br>";
        noErrors = false;
    }else if(secondName.length < 2){
        outputString += "Second name must be 2 characters or longer<br>";
        noErrors = false;
    };

    //validate Zip Code
    if(!postcodeRegex.test(postcode)){
        outputString += "Please enter a valid postcode (longer than 2 characters, only letters and numbers)<br>";
        noErrors = false;
    };

    //Validate Employee ID 
    if(!idRegex.test(employeeId)){
        outputString += "Please enter a valid Employee ID (2 letters, a hyphen, 4 numbers)<br>";
        noErrors = false;
    };

    if(noErrors){
        outputString += "There were no errors found<br>"
    };

    return outputString;
};