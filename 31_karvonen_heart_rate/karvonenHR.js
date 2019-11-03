function calculateIntensity(){
    var RHR = document.getElementById("userRHR").value;
    var age = document.getElementById("userAge").value;

    if(isNaN(RHR)){
        alert("Please Eneter a Valid Resting Heart Rate");
    }else if(isNaN(age)){
        alert("Please Enter a Valid Age");
    }else{
        generateIntensityTable(RHR, age);
    }
};

function generateIntensityTable(h,a){
    h = parseInt(h);
    a = parseInt(a);

    var outputString  = "";

    outputString += `<tr>\n
                        <th>Intensity</th>\n
                        <th>Rate</th>\n
                    </tr>`;

    for(i=55;i<=95;i=i+5){
        
        targetHR = (((220-a)-h)*(i/100))+h;
        
        outputString += `<tr>\n
                            <td>${i}%</td>\n
                            <td>${targetHR} BPM</td>\n
                        </tr>`

    };
    document.getElementById("userOutput").innerHTML = outputString;
}