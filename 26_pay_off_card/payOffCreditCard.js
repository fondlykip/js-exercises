
function timeToPayOff(r,b,p){
   
    var dr = r/365;
    


    var n = Math.ceil((-1/30)*((Math.log(1+(b/p)*(1-Math.pow(1+dr, 30))))/(Math.log(1+dr))));

    return n;


};

function submitForm(){
    var bal = document.getElementById("userBal").value;
    var apr = (document.getElementById("userAPR").value/100);
    var paym = document.getElementById("userPaym").value;

    var payoff = timeToPayOff(apr,bal,paym);

    document.getElementById("userOutput").innerHTML = `It will take you ${payoff} months to pay off this card.`
    
};