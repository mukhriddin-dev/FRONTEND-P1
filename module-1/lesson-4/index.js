"use strict";

const arr=["banana"];


// arrayga  ohiridan yangi elementni qo'sish

arr.push('apple','lemon','orange');
arr.push('apple','lemon','kiwi');


// arrayning ohirgi elementini o'chiradi...

arr.pop();
arr.pop();
arr.pop();

// arrayga boshidan  elementni qo'sishni bajaradi...

arr.unshift('tomato','sabzi','shoptoli')


// arrayning boshidan elementini o'chiradi...

arr.shift()
arr.shift()
arr.shift()


// 

const num1=[1,2,3,4,5,6,7,8,9,10]
const num2=[11,22,33,44,55,66,77,88,99,100]


// arrayning indexdan nt qiriqib oladi va arrayni o'zgartiradi...
// let slice=num.splice(3,3)


// arrayning indexdan indexigacha nusxalab oladi...
// let s=num.slice(0,59)


// arrayning ichida borligini tekshiradi.

// const check=num.includes(22)


// concat array ni arrayga ulash uchun ishlatiladi.

// const num3=num1.concat(num2).concat([2333,3333,44444]).concat('salom');

// ... spread operatori , arrayni birlashtramiz.
// const num4=[ ...num1 , ...num2 , ...[2333,3333,44444] , 'salom' ];



/// Number , String , Boolean , isNaN


// Type corecion

console.log(11+11)     // number
console.log(10+"11")   // string
console.log(true+true) // number


// Type conversion

console.log("11")
console.log(Number("11") )    // number
console.log(Number('salom')) // NaN -> number 

console.log(11)
console.log(String(11))   // string
console.log(String(true)) // string

console.log(Boolean(12))         // true
console.log(Boolean(""))         // false
console.log(Boolean(undefined))  // false
console.log(Boolean(null))      // false
console.log(Boolean("salom"))  // true

console.log(isNaN(12-"salom"))   // true
console.log(isNaN(12))          // false     




