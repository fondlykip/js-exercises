function generateTable(n){
    var baseNum = parseInt(n);
    var outputHTML = "<tr>\n"; //start with header row opening tag
    
    //add header row
    for(x=0;x<=baseNum;x++){
        console.log("x=",x)
        if(x==0){
            outputHTML += "<th></th>\n";
            
        }else{
            outputHTML += `<th>${x}</th>\n`;
        };
    };
    outputHTML += "</tr>\n" //close header row
    for(i=1;i<=baseNum;i++){
        console.log("i=",i);
        outputHTML += `<tr>\n
                        <th>${i}</th>\n`;

        for(j=1;j<=baseNum;j++){
            if(i==j){
                outputHTML += `<td bgcolor="#00FF00">${i*j}</td>\n`;
                console.log("is square!");
            }else{
                outputHTML += `<td>${i*j}</td>\n`;
            };

            console.log("j=",j);
        };
        outputHTML += "</tr>\n"
    };
    document.getElementById("outputTable").innerHTML = outputHTML;
    //console.log(outputHTML);
};

function isPrime(num) {
    for(var i = 2; i < num; i++)
      if(num % i === 0) return false;
    return num > 1;
  }