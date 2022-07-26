import  assert from "assert";
import isWeekday from '../isWeekday.js'

describe('Test for my isWeekday function' , function(){
    it("it should return 'false' if it called with a word that starts with 'S' " , function(){
        assert.equal(false,isWeekday("Sunday"));

    });
    it("it should return 'true' if it starts with 'M || T  || W || T || F' " , function(){
        assert.equal(true,isWeekday("Thursday"));

    });
    it("it should return 'true' if it starts with 'M || T  || W || T || F' " , function(){
        assert.equal(true,isWeekday("Tuesday"));

    });

});