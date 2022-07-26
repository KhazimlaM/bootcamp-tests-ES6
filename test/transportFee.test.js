import  assert from "assert";
import transportFee from '../transportFee.js'


describe('Test for my transportFee function' , function(){
    it("it should return 'R20' if the shift passed in the parameter is in the 'morning' ", function(){
        assert.equal(transportFee('morning'), 'R20');
        
    });
    it("it should return 'free' if the shift passed in the parameter is in the 'nighshift' ", function(){
        assert.equal(transportFee('nightshift'), 'free');
        
    });
    it("it should return 'R10' if the shift passed in the parameter is in the 'afternoon' ", function(){
        assert.equal(transportFee('afternoon'), 'R10');
        
    });


});