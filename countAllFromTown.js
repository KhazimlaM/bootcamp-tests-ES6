 function countAllFromTown(regNo,regStart){
    var parameter = regNo.split(",");
    var array = [];
    var counter = 0;
  
    
    for(var i=0;i<parameter.length;i++){
    var countRegNo = parameter[i].trim();
    
      
      if(countRegNo.startsWith(regStart)){
      array.push(countRegNo);
       counter++;
    
      }
    }
      return counter;
  }
  export default countAllFromTown;