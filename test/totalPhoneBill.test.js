import  assert from "assert";
import totalPhoneBill from '../totalPhoneBill.js'

describe('Test for my totalPhoneBill function' , function(){
    it("it should return 'R7.45' if the calls and sms's passed in the function are in this sequence 'call, sms, call, sms, sms'", function(){
        assert.equal('R7.45',totalPhoneBill('call, sms, call, sms, sms'));
        
    });
    it("it should return 'R3.45' if the calls and sms's passed in the function are in this sequence 'call, sms' ", function(){
        assert.equal('R3.40',totalPhoneBill('call, sms'));
        
    });
    it("it should return 'R1.30' if the calls and sms's passed in the function are in this sequence 'sms, sms' ", function(){
        assert.equal('R1.30',totalPhoneBill('sms, sms'));
        
    });

});