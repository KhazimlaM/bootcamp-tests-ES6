function findItemsOver20(myList){
    var itemsAbove20 = [];
   
    for(var i=0; i<myList.length; i++){
      var updtList =myList[i];
      if(updtList.qty > 20){itemsAbove20.push(updtList)
  }
    }return itemsAbove20;
   
  }
  export default findItemsOver20;