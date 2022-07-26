import  assert from "assert";
import countAllPaarl from '../countAllPaarl.js'

describe('Test for my countAllPaarl function' , function(){
    it("it should return '3' if the registration numbers passed in are 'CJ 345 123, CJ 2345, CL 123-546, CK 345, CJ 123' ", function(){
        assert.equal('3',countAllPaarl('CJ 345 123, CJ 2345, CL 123-546, CK 345, CJ 123'));

    });
    it("it should return '2' if the registration numbers passed in are 'CJ 345 123, CK 345, CJ 123' " , function(){
        assert.equal('2',countAllPaarl('CJ 345 123, CK 345, CJ 123'));

    });
    it("it should return '0' if the registration numbers passed in are 'CK 345, CL 123-546' ", function(){
        assert.equal('0',countAllPaarl('CK 345,CL 123-546'));

    });
   


});