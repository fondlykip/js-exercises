

function troubleshootCar(question, answer){
    var userAns = answer;
    var questKeyword = question;

    console.log(questKeyword);
    console.log(userAns);

    switch(questKeyword){
        case 'silence': 
            if(userAns=='yes'){
                document.getElementById("userInput").innerHTML = "Are the battery terminals corroded?<br><input type=\"submit\" value=\"yes\" onclick=\"troubleshootCar('corroded','yes'); return false;\"><input type=\"submit\" value=\"no\" onclick=\"troubleshootCar('corroded','no'); return false;\">";
            } else if(userAns=='no'){
                document.getElementById("userInput").innerHTML = "Does the car make a clicking noise?<br><input type=\"submit\" value=\"yes\" onclick=\"troubleshootCar('clicking','yes'); return false;\"><input type=\"submit\" value=\"no\" onclick=\"troubleshootCar('clicking','no'); return false;\">";
            };
            break;
        case "corroded":
            if(userAns == 'yes'){
                document.getElementById("userInput").innerHTML = "Clean terminals and try starting again!";
            } else if(userAns == 'no'){
                document.getElementById("userInput").innerHTML = "Replace cables and try again!";
            };
            break;
        case "clicking":
            if(userAns == 'yes'){
                document.getElementById("userInput").innerHTML = "Replace the battery!";
            } else if(userAns == 'no'){
                document.getElementById("userInput").innerHTML = "Does the car crank up but fail to start?<br><input type=\"submit\" value=\"yes\" onclick=\"troubleshootCar('crank','yes'); return false;\"><input type=\"submit\" value=\"no\" onclick=\"troubleshootCar('crank','no'); return false;\">";
            };
            break;
        case "crank":
            if(userAns == 'yes'){
                document.getElementById("userInput").innerHTML = "Check the spark plug connections!";
            } else if(userAns == 'no'){
                document.getElementById("userInput").innerHTML = "Does the engine start and then die?<br><input type=\"submit\" value=\"yes\" onclick=\"troubleshootCar('start','yes'); return false;\"><input type=\"submit\" value=\"no\" onclick=\"troubleshootCar('start','no'); return false;\">";
            };
            break;
        case "start":
            if(userAns == 'yes'){
                document.getElementById("userInput").innerHTML = "Does your car have fuel injection?<br><input type=\"submit\" value='yes' onclick=\"troubleshootCar('injection','yes'); return false;\"><input type=\"submit\" value=\"no\" onclick=\"troubleshootCar('injection','no'); return false;\">";
            } else if(userAns == 'no'){
                document.getElementById("userInput").innerHTML = "Get it in for a service!";
            };  
            break;
        case "injection":
            if(userAns == 'yes'){
                document.getElementById("userInput").innerHTML = "Get it in for a service!";
            } else if(userAns == 'no'){
                document.getElementById("userInput").innerHTML = "Check to ensure the choke is opening and closing";
            };
            break;
    }

}