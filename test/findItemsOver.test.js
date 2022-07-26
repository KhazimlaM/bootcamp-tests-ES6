import  assert from "assert";
import findItemsOver from '../findItemsOver.js'


var itemList = [
    {name : 'apples', qty : 10},
    {name : 'pears', qty : 37},
    {name : 'bananas', qty : 27},
    {name : 'apples', qty : 3},
  ];
  var results = [
    {name : 'pears', qty : 37},
    {name : 'bananas', qty : 27},
  ];
  var itemList2 = [
    {name : 'apples', qty : 10},
    {name : 'pears', qty : 19},
    {name : 'bananas', qty : 17},
    {name : 'apples', qty : 3},
  ];
  var results2 = [];
  var itemList3 = [
    {name : 'apples', qty : 40},
    {name : 'pears', qty : 20},
    {name : 'bananas', qty : 23},
    {name : 'apples', qty : 37}
  ];
  var results3 = [
    {name : 'apples', qty : 40},
    {name : 'bananas', qty : 23},
    {name : 'apples', qty : 37}
  ];var itemList = [
    {name : 'apples', qty : 10},
    {name : 'pears', qty : 37},
    {name : 'bananas', qty : 27},
    {name : 'apples', qty : 3},
  ];
  var results = [
    {name : 'pears', qty : 37},
    {name : 'bananas', qty : 27},
  ];
  var itemList2 = [
    {name : 'apples', qty : 10},
    {name : 'pears', qty : 19},
    {name : 'bananas', qty : 17},
    {name : 'apples', qty : 3},
  ];
  var results2 = [];
  var itemList3 = [
    {name : 'apples', qty : 40},
    {name : 'pears', qty : 20},
    {name : 'bananas', qty : 23},
    {name : 'apples', qty : 37}
  ];
  var results3 = [
    {name : 'apples', qty : 40},
    {name : 'bananas', qty : 23},
    {name : 'apples', qty : 37}
  ];

describe('Test for my findItemsOver function' , function(){
    it("it should return 'pears' if the information passed in is 'itemList3' ", function(){
        assert.deepEqual(results3,findItemsOver(itemList3,20));
        
    });

    it("it should return 'pears' if the information passed in is 'itemList2' ", function(){
        assert.deepEqual(results2, findItemsOver(itemList2,19));
        
    });
});