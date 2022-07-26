 function findItemsOver(myList,threshold){
    let aboveThreshold = [];
  
      for(var i=0; i<myList.length; i++){
      var updtList = myList[i]
      if(updtList.qty > threshold){aboveThreshold.push(updtList)
    }
      }
  return aboveThreshold;
       
  }
  export default findItemsOver;