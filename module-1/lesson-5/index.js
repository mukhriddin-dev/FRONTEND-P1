"use strict";

/*

T: 1 , "string" , -12 , true , [] , {} , "   "


F: 0 , "" , false , undefined , null , NaN 


*/

// const shart = 0;

//if (shart) {
  // agar shart true bo'lsa , shu block bajariladi
  // console.log("true block bajariladi");
//} else {
  // agar shart false bo'lsa , shu blockni bajaradi
  // console.log("false block bajariladi");
//}

// Masala: Yosh kiritilsin (input orqali) agar yosh 18 dan kichik bo'lsa
// o'smir xabarchi berilsin consoleda
// agar yosh 18 dan kotta bo'lsa consolega kotta yoshli inoson.

// const age =+prompt("Enter your age: ");

// console.log(12 < 10); // false // true

// if (age<18) {
//     console.log(` ${age} yoshdagi inson o'simr hisoblanadi. `);
// } else {
//     console.log(`${age} yoshdagi inson kotta inson`);
// }

// const number = +prompt("enter number: ");

// if (number === 0) {
//     console.log("juft ham toq ham emas!");
// } else if (number % 2 === 0) {
//     console.log("Juft son");
// } else {
//     console.log("Toq son");
// }

// const weekday = +prompt("enter weekday: ");

// if (weekday === 1) {
//   console.log("Monday");
// } else if (weekday === 2) {
//   console.log("Tuesday");
// } else if (weekday === 3) {
//   console.log("Wednesday");
// } else if (weekday === 4) {
//   console.log("Thursday");
// } else if (weekday === 5) {
//   console.log("Friday");
// } else if (weekday === 6) {
//   console.log("Saturday");
// } else if (weekday === 7) {
//   console.log("Sunday");
// } else {
//   console.log("Invalid weekday :( ");
// }

// const weekday = 6;

// switch(weekday){
//   case 1 : console.log("Monday"); break;
//   case 2 : console.log("Tuesday"); break;
//   case 3 : console.log("Wednesday"); break;
//   case 4 : console.log("Thursday"); break;
//   case 5 : console.log("Friday"); break;
//   case 6 : console.log("Saturday"); break;
//   case 7 : console.log("Sunday"); break;
//   default : console.log("Invalid weekday");
// }

// let num=12;

// if(num==12){
//     console.log("12 ga teng");
// }else{
//     console.log("12 ga teng emas");
// }

// Ternary operator

// num===12 ? console.log("12 ga teng") : console.log("12 ga teng emas");

// const data=undefined;

// Nullish colasing operator

// Nullish value: [ null , undefined ]

// console.log(data ?? "nullish value")

// Loop operators [while , do while , for  , for in , for of]

// let point=100;
// let n=0;

// while(n>point){
//     if(n%2==1){
//         console.log(n);
//     }
//     n--;
// }

// do{
//     console.log(n)
//     n++;
// }while(20000<point)


// for(let i=0; i<100; i++){
//     console.log(i) 
// }

for(let key of ["apple", "orange", "kiwi"]){

    console.log(key)

}