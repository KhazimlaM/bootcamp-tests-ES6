import  assert from "assert";
import yearsAgo from '../yearsAgo.js'

describe('Test for my yearsAgo function' , function(){
    it("it should return how many years ago the year taken in the function is from the current year '1976' " , function(){
        assert.equal((new Date().getFullYear() - 1976), yearsAgo(1976))

    });
    it("it should return how many years ago the year taken in the function is from the current year '2000' " , function(){
        assert.equal((new Date().getFullYear() - 2000), yearsAgo(2000))

    });
    it("it should return how many years ago the year taken in the function is from the current year '1976' " , function(){
        assert.equal((new Date().getFullYear() - 1997), yearsAgo(1997))

    });

});