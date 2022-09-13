const { expect  } = require('chai')
const Problem2 = require('../src/problem2')
describe('Prime Numbers', function () {
    it('Primes array should have length 10001', function () {
        let {arr} = Problem2.computePrime();
        expect(arr.length).to.equal(10001);
    });
    it('Array should have prime numbers only', function () {
        let {arr} = Problem2.computePrime();
        let flag = true;
        for (let i = 0; i < arr.length; i++) {
            for (let j = 2; j < arr[i]; j++) {
                if (arr[i] % j === 0) {
                    flag = false;
                    break;
                }
            }
            if(!flag) break;
        }
        expect(flag).to.equal(true);
    });
});
describe('10001st Prime', function (){
    it('10001st Prime should be 104743', function () {
        let {arr} = Problem2.computePrime();
        expect(arr[10000]).to.equal(104743);
    });

})