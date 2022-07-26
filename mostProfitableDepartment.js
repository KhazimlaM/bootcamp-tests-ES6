 function mostProfitableDepartment(information){
    var map = {};
    for(var i=0; i<information.length; i++){
    let updtInfo = information[i]
    map[updtInfo.department] = 0
    
    }
     for(var i=0; i<information.length; i++){
    let updtInfo = information[i]
    let totalDepartment = map[updtInfo.department]
    
    totalDepartment += updtInfo.sales  
    map[updtInfo.department] = totalDepartment
    
   }
     var departmentSales = 0;
     var currentDepartment = '';
     for(var depart in map){
     let depa = map[depart]  
       if(depa > departmentSales){
       departmentSales = depa
        currentDepartment = depart
       }
    //  console.log(currentDepartment)
    //    console.log(departmentSales)
    
    
     }return currentDepartment;
}
export default mostProfitableDepartment;
