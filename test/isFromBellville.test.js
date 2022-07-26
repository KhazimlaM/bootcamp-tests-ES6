import  assert from "assert";
import isFromBellville from '../isFromBellville.js'

describe('Test for my Bellville function' , function(){
    it("it should return 'true' when called with 'CY 457' " , function(){
        assert.equal(true,isFromBellville("CY 123"));

    });
    it("it should return 'false' when called with 'CJ 123' " , function(){
        assert.equal(false,isFromBellville("CJ 123 "));

    });
    it("it should return 'true' when called with 'CY' " , function(){
        assert.equal(true,isFromBellville("CY 123 "));

    });


});