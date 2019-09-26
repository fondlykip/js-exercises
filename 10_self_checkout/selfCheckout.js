// program to calculate total cost of three items in a basket




//function to handle form

function checkoutFunc(){

    //take in variables from form
    var p1 = document.getElementById("p1").value;
    var q1 = document.getElementById("q1").value;
    var p2 = document.getElementById("p2").value;
    var q2 = document.getElementById("q2").value;
    var p3 = document.getElementById("p3").value;
    var q3 = document.getElementById("q3").value;
    
    //calculate outputs
    var subTotal = (p1*q1)+(p2*q2)+(p3*q3);
    var vat = subTotal * 0.055;
    var totalPrice = subTotal + vat; 

    //render output on page
    document.getElementById("subTotalOut").innerHTML = "Subtotal: " + subTotal.toFixed(2);
    document.getElementById("vatOut").innerHTML = "VAT: " + vat.toFixed(2);
    document.getElementById("TotalOut").innerHTML = "Total: "  + totalPrice.toFixed(2);


}