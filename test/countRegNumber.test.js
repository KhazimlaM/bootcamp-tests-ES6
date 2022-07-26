import  assert from "assert";
import countRegNumber from '../countRegNumber.js'

describe('Test for my countRegNumber function' , function(){
    it("it should return '3' when called with 'CA 182736,CY 523519,CJ 812328' " , function(){
        assert.equal('3',countRegNumber('CA 182736,CY 523519,CJ 812328'));

    });
    it("it should return '2' when called with ''CA 42665, AA 12 RT GP' " , function(){
        assert.equal(2,countRegNumber('CA 42665, AA 12 RT GP'));

    }); 
    it("it should return '5 when called with 'CA 182736,CY 523519,CJ 812328,CA 42665, CA' " , function(){
        assert.equal('5',countRegNumber('CA 182736,CY 523519,CJ 812328,CA 42665, CA 876549'));

    });
    

});