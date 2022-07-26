 function totalPhoneBill(callsMade){
    var parameter = callsMade.split(",");
     var totalBill = 0;
     
     for(var i =0;i<parameter.length;i++){
     var checkCallsMade = parameter[i].trim();
       
       
       if(checkCallsMade === "call"){
       totalBill += 2.75;
       }
       else if(checkCallsMade === "sms"){
       totalBill += 0.65;
       }
     }
     return "R" + totalBill.toFixed(2);
   }
   export default totalPhoneBill;