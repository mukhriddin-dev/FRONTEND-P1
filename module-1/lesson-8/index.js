"use strict";

// // glocbal scope

// console.log(this); // global window

// function test() {
//     console.log(this);
// }

// test();

// // function declaration && "use strict" -> this -> "undefined"
// // function declaration -> this -> "global window"

// const car = {
//     name: "Car",
//     color: "red",
//     data: {
//         model: "Toyota",
//         year: 2021,
//         getInfo: function () {
//             console.log(this);
//         },
//     },
//     getName: function () {
//         console.log(this.data.model);
//     },
// };

// car.getName();

// car.data.getInfo();

// // object method -> this -> this=object

// const app = () => {
//     console.log(this);
// };

// app();

// Function Constructor -> class OOP

// function Car(name, color, price, year, power, maxspeed) {
//     this.name = name;
//     this.color = color;
//     this.price = price;
//     this.year = year;
//     this.power = power;
//     this.maxspeed = maxspeed;
//     this.start = function () {
//         console.log(`${this.name} started`);
//     };
// }

// const nexia = new Car("nexia", "white", 3000, 2000, 120, 220);
// const spark = new Car("spark", "red", 4000, 2010, 89, 200);
// const damas = new Car("damas", "blue", 5000, 2000, 100, 200);

// nexia.start();
// spark.start();
// damas.start();

// console.log(nexia);
// console.log(spark);
// console.log(damas);

//  ========== Call , Apply , Bind  ========

// Object  --> State Object saving

// function  --> state manage

// const user = {
//     name: "Jahongir",
//     age: 22,
//     isMarried: false,
//     isStudent: false,
// };

// const car = {
//     model: "Toyota",
//     year: 2021,
//     name: "Toyota Camry",
// };

// function getName(text, extra) {
//     console.log(`Name: ${this.name} ${text} ${extra}`);
// }

// // Call method -->

// getName.call(user, "easy", "person");
// getName.call(car, "best", "car");

// // Apply method -->

// getName.apply(user, ["easy", "person"]);
// getName.apply(car, ["best", "car"]);

// // Bind method -->

// const getUserName = getName.bind(user);
// const getCarName = getName.bind(car);

// getUserName("nimadir3", "nimadir 4");
// getCarName("nimadir1", "nimadir 2");

// // HOF -> Higher order function

// let number = 0;

// function update(callback) {
//     console.log("number updated");
//     return callback();
// }

// function increment() {
//     number++;
//     return number;
// }

// const res = update(increment);
// console.log(res);

// Array methods

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// 1. forEach() - loop through an array and execute a function for each element

// 2. map() - create a new array with the results of calling a provided function on every element in the calling array

// 3. filter() - create a new array with all elements that pass the test implemented by the provided function

// 4. reduce() - apply a function against an accumulator and each element in the array (from left to right) to reduce it to a single value

// numbers.forEach((a, index) => {
//     if (a % 2 == 0) {
//         console.log(`${a} is even at index ${index}`);
//     }
// });

// for (let i = 0; i < numbers.length; i++) {
//     if (numbers[i] % 2 == 0) {
//         console.log(`${numbers[i]} is even at index ${i}`);
//     }
// }

// const result = numbers.map((item, index, array) => {
//     return {
//         num: item,
//         key: "nima" + index,
//     };
// });

// console.log(result);

// const filteredNumbers = numbers.filter((item) => {
//     return item % 2 !== 0;
// });

// console.log(filteredNumbers);
