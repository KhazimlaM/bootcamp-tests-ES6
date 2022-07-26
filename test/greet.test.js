import  assert from "assert";
import greet from '../greet.js'

describe('The greet function', function(){

    it('should greet Andrew correctly', function(){
        assert.equal('hello Andrew', greet('Andrew'));
    });
    it('should greet Karen correctly', function(){
        
        assert.equal('hello André', greet('André'));
    });
});

