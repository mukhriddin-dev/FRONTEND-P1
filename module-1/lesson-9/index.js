let numbers = [1, 2, 3, 11, 111, 44, 666, 999, 234, 4, 5, 6, 7, 8, 9, 10];
let letters = ["a", "ab", "dc", "gd", "ue", "ua", "mf"];

console.log(numbers);
console.log(numbers.flat(3));

let data = [
    {
        name: "John",
        age: 30,
        city: "New York",
        salary: 30000,
    },
    {
        name: "Mike",
        age: 25,
        city: "Los Angeles",
        salary: 250,
    },
    {
        name: "Sarah",
        age: 35,
        city: "Chicago",
        salary: 350,
    },
    {
        name: "David",
        age: 40,
        city: "San Francisco",
        salary: 400,
    },
    {
        name: "Emma",
        age: 28,
        city: "Boston",
        salary: 280,
    },
    {
        name: "Lucy",
        age: 32,
        city: "Seattle",
        salary: 320,
    },
    {
        name: "Emma",
        age: 19,
        city: "Bostons",
        salary: 80,
    },
];

const findUser = data.findIndex((user) => user.name === "Emma");

console.log(findUser);

const fillEmptystring = data.fill("salom", 2);
console.log(fillEmptystring);

console.log(numbers.includes(11));

console.log(numbers.join(""));

// // ------------ evry ------------
// const evry = letters.every((a) => a == "a");
// console.log(evry);
// //--------------------- some ---------
// const some = letters.some((a) => a === "a");
// console.log(some);

// const sortedNumbers = numbers.sort((a, b) => b - a);
// const sortedLetters = letters.sort();

// const sortedAges = data.sort((a, b) => a.age - b.age);
// const sortedSalaries = data.sort((a, b) => b.salary - a.salary);

// console.log(sortedNumbers);
// console.log(sortedLetters);
// console.log(sortedAges);
// console.log(sortedSalaries);

// ---------------- reduce ----------------
// const res = numbers.reduce((a, b) => a + b);

// const usersSalaries = data.reduce((n, m) => {
//     return n + m.salary;
// }, 0);

// const age = data.reduce((acc, nextValue) => {
//     return acc + nextValue.age;
// }, 0);

// console.log(res);
// console.log(usersSalaries);
// console.log(age / data.length);
