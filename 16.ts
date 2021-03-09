/*
215 = 32768 and the sum of its digits is 3 + 2 + 7 + 6 + 8 = 26.

What is the sum of the digits of the number 21000?
*/

const digits = (num: BigInt) => [...num.toString()].map(charDigit => parseInt(charDigit))
const sumOfDigits = (num: BigInt) => digits(num).reduce((acc, cur) => acc + cur)

console.log(sumOfDigits(BigInt(Math.pow(2, 1000))))