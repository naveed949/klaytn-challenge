/**
 * By listing the first six prime numbers: 2, 3, 5, 7, 11, and 13, we can see that the 6th prime is 13.
 *
 * What is the 10001st prime number?
 *
 * @type {{computePrime: (function(): {arr: []})}}
 */
module.exports = {
     computePrime:() => {
         let arr = [2]; // 2 is only even prime number thus adding it here explicitly.
         let num = 2; // 0, 1 are not prime numbers thus skipped them

         while(arr.length < 10001){
             num +=1;
            if (num % 2 !== 0){ // no prime can be an even number except 2
                for (let i = 0; i < arr.length; i++) {
                    if (num % arr[i] === 0){ // a prime number shouldn't be divisible of other primes
                        break;
                    }
                    if ( i === arr.length - 1){
                        arr.push(num);
                    }
                }
            }
         }
         return {arr};
    }
}