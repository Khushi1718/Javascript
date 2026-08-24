let num = "123";
console.log(num); // "123"
console.log(typeof num); // "string"

let convertedNum = Number(num);
console.log(convertedNum); // 123
console.log(typeof convertedNum); // "number"

let invalidNum = Number("abc");
console.log(invalidNum); // NaN (Not a Number)
console.log(typeof invalidNum); // "number"

let str = String(123);
console.log(str); // "123"
console.log(typeof str); // "string"

let bool = Boolean(0);
console.log(bool); // false
console.log(typeof bool); // "boolean"

let nullValue = null;
console.log(nullValue); // null
console.log(typeof nullValue); // "object" (this is a quirk in JavaScript)

let undefinedValue;
console.log(undefinedValue); // undefined
console.log(typeof undefinedValue); // "undefined"  

//1 => true ; 0=> false ; 23=> true ; -1 => true
// "khushi" => true ; "" => false

const num3 = Symbol("123");
console.log(num);
const num2 = Symbol("123");

console.log(num3 === num2); // false, because each Symbol is unique