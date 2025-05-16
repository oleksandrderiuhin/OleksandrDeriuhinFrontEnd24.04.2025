
function product(number) {
   return function (subNumber) {
       return number * subNumber;
   }
}

const result = product(5)(2);

console.log(result);