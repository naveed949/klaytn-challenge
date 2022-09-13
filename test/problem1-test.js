const { expect  } = require('chai')
const Problem1 = require('../src/problem1')
describe('Array of multiples 3 || 5', function () {
    it('Array should have values < 1000', function () {
        let {arr} = Problem1.computeArray();
        let flag = true;
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] > 1000){
                flag = false
                break;
            }
        }
        expect(flag).to.equal(true);
    });
    it('Array should be of multiples 3 OR 5', function () {
        let {arr} = Problem1.computeArray();
        let flag = true;
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] % 3 !== 0 && arr[i] % 5 !== 0){
                flag = false;
                break;
            }
        }
        expect(flag).to.equal(true);
    });
});
describe('Sum of array', function (){
    it('Sum of computed array should be correct', function () {
        let {arr, sum} = Problem1.computeArray();
        let result2 = 0;
        arr.forEach(v => {
            result2 +=v;
        } )
        expect(sum).to.equal(result2);
    });

})