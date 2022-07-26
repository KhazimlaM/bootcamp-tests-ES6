import  assert from "assert";
import regCheck from '../regCheck.js'

describe('Test for my regCheck function' , function(){
    it("it should return 'false' if registration number starts with 'ND || CY || CA' " , function(){
        assert.equal(false,regCheck("CY 123-456"));

    });
    it("it should return 'true' if registration number ends with 'GP || MP " , function(){
        assert.equal(true,regCheck('LKG 679 GP', 'GP'));

    });
    it("it should return 'true' if registration number ends with 'EC|| L" , function(){
        assert.equal(true,regCheck('LKG 679 EC', 'EC'));

    });

});