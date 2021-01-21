function tipCalculator(){
    var billAmount = document.getElementById('billAmount').value;
    var serviceQuality = document.getElementById('serviceQuality').value;
    var peopeAmount =  document.getElementById("peopleNumber").value;
    
  if (billAmount === "" || serviceQuality == 0) {
    alert("Please enter values");
    return;
  }
 
  if (peopeAmount == "null" || peopeAmount == "" || peopeAmount <= 1) {
    peopeAmount = 1;
    document.getElementById("each").style.display = "none";
  } else {
    document.getElementById("each").style.display = "block";
  }

    var totalcost = (billAmount*serviceQuality)/peopeAmount;
    
    totalcost = Math.round(totalcost*100)/100;
   
    totalcost = totalcost.toFixed(2)

    document.getElementById("totalTip").style.display="block";
    document.getElementById("tip").innerHTML =totalcost

    
}
document.getElementById("totalTip").style.display = "none";
    document.getElementById("each").style.display = "none";

document.getElementById("calculate").onclick = function() {
        tipCalculator();
      
      };