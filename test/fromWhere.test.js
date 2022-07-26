import  assert from "assert";
import fromWhere from '../fromWhere.js'

describe('Test for my fromWhere function' , function(){
    it("it should return 'Bellville' if the registration number passed in the parameter 'CY' ", function(){
        assert.equal('Bellville',fromWhere('CY'));
        
    });
    it("it should return 'Cape Town' if the registration number passed in the parameter 'CA' ", function(){
        assert.equal('Cape Town',fromWhere('CA'));
        
    });
    it("it should return 'Paarl' if the registration number passed in the parameter 'CJ' ", function(){
        assert.equal('Paarl',fromWhere('CJ'));
        
    });



});