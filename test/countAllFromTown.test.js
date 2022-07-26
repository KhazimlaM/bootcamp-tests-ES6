import  assert from "assert";
import countAllFromTown from '../countAllFromTown.js';

describe('Test for my countAllFromtown function' , function(){
    it("it should return '3' if the registration numbers passed in the function are 'CL 124,CY 567,CL 345, CJ 456,CL 341','CL' ", function(){
        assert.equal('3',countAllFromTown('CL 124,CY 567,CL 345, CJ 456,CL 341','CL'));
        
    });
    it("it should return '1' if the registration numbers passed in the function are 'CJ 124,CY 567,CL 345, CF 456, CL 341','CF' ", function(){
        assert.equal('1',countAllFromTown('CJ 124,CY 567,CL 345, CF 456, CL 341','CF'));
        
    });
    it("it should return '0' if the registration numbers passed in the function are '' ", function(){
        assert.equal('0',countAllFromTown(''));
        
    });

});