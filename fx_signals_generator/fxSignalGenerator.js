function generateSignal(){
    var pairArray = ["GBPJPY","GBPUSD","GBPEUR","EURUSD","EURAUD","USDAUD"];
    var pair = pairArray[Math.floor(Math.random()*6)];
    
    var positionArray = ["BUY","SELL"];
    var position = positionArray[Math.floor(Math.random()*2)];

    document.getElementById("output").innerHTML = `${position} ${pair}!!!`
};
